<template>
    <v-row justify="center" align="center">
        <v-col cols="12">
            <!-- <v-col cols="12" sm="8"> -->
            <v-card class="mb-3">
                <v-card-title class="headline">
                    チーム紹介カード
                </v-card-title>
                <v-card-text>
                    <v-row justify="start">
                        <v-col cols="9">
                            <v-text-field v-model="inputEntryLine" label="Entry Line"
                                hint="申請リストから行コピーして貼り付けしてください"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-btn color="primary" @click="inputData"> 申請データを取り込む </v-btn>
                        </v-col>
                        <!-- チーム名 -->
                        <v-col cols="12">
                            <v-text-field v-model="inputTeamName" label="Team Name"></v-text-field>
                        </v-col>
                        <!-- メンバー情報 -->
                        <v-col v-for="i in 5" :key="i" cols="12" sm="6">
                            <v-row justify="start">
                                <v-col cols="12">
                                    <div class="text-subtitle-1">Player{{ i }}
                                        <template v-if="i == 1">(Leader)</template>
                                        <template v-else-if="i == 5">(Super Sub)</template>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="inputPlayerName[i - 1]" maxlength="10"
                                        label="Name"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="selectPlayerWeapons[i - 1]" :items="allWeaponsData" item-text="name"
                                        item-value="id" density="compact" chips multiple label="Weapons"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="selectRange[i - 1]" :items="rangeData" item-text="name"
                                        item-value="id" density="compact" label="Range"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="selectRole[i - 1]" :items="roleData" item-text="name"
                                        item-value="tag" density="compact" label="Role"></v-select>
                                </v-col>
                            </v-row>
                        </v-col>

                        <!-- チームロゴ -->
                        <v-col cols="8">
                            <v-file-input v-model="logoImage" label="Logo Image" :disabled="defaultLogo"></v-file-input>
                        </v-col>
                        <v-col cols="3">
                            <v-select v-model="defaultLogo" :items="logoData" item-text="name" item-value="id"
                                density="compact" label="Default Logo" :disabled="logoImage"></v-select>
                        </v-col>
                        <v-col cols="1">
                            <v-img v-if="defaultLogo" :src="selectLogo" max-height="50" max-width="50"></v-img>
                        </v-col>

                        <!-- 実績 -->
                        <v-col v-for="i in 3" cols="4" :key="i">
                            <v-text-field v-model="inputAchievements[i - 1]" :label="'Achievements' + i"></v-text-field>
                        </v-col>

                        <!-- メモ -->
                        <v-col cols="12">
                            <v-textarea label="Comment" v-model="inputComment" hint="145文字まで(29文字ごとに自動で改行されます)"
                                maxlength="145"></v-textarea>
                        </v-col>
                        <v-col v-for="i in 6" :key="i" cols="2">
                            <v-text-field :label="'Label Name' + i" v-model="labels[i - 1]"
                                @change="fillData"></v-text-field>
                        </v-col>

                        <!-- レーダーチャート -->
                        <v-col v-for="(label, index ) in labels" :key="label" cols="2">
                            <v-text-field v-model="labelData[index]" :label="label" @change="fillData"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <RadarChart :styles="myStyles" :chartData="chartData" :cssClasses="'chart-container'" />
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="generateImage"> チャート有スライド作成 </v-btn>
                    <v-btn color="secondary" @click="generateImageRookie"> チャート無スライド作成 </v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="pt-1 pr-1 pl-1">
                <canvas ref="imageCanvas" class="confirm-image" :width="canvasWidth" :height="canvasHeight">
                </canvas>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" :href="imageDataURL" :download="imageName" v-if="imageDataURL">Download
                        Image</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import RadarChart from '~/components/Radar.vue'

export default {
    name: 'OutputTeam',
    components: {
        RadarChart,
    },
    head: {
        title: 'Output Team',
    },
    async asyncData() {
        const weapons = await import('@/static/weapons/weapons.json');
        // Webフォントの読み込みが完了するのを待つために、Promiseを使用
        await new Promise((resolve) => {
            const fontLink = document.createElement('link');
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap'; // WebフォントのURLを指定
            fontLink.rel = 'stylesheet';
            document.head.appendChild(fontLink);

            // Webフォントの読み込みが完了したらresolveを呼び出す
            fontLink.onload = resolve;
        });

        return {
            allWeaponsData: weapons.default,
        };
    },

    data() {
        return {
            inputPlayerName: [],
            selectPlayerWeapons: {},
            selectRange: [],
            selectRole: [],
            inputTeamName: "",
            inputComment: "",
            inputAchievements: [],
            inputEntryLine: "",

            logoImage: null,
            defaultLogo: null,

            imageDataURL: null,
            imageName: 'generated_image.png',
            baseImageUrlFamous: '/ink-wave/team_card/team_slide_a.png', // ベース画像のURLを設定
            // baseImageUrlFamous: '/ink-wave/team_card/team_slide_c.png', // ベース画像のURLを設定
            baseImageUrlRookie: '/ink-wave/team_card/team_slide_b.png', // ベース画像のURLを設定
            roleIconPath: '/ink-wave/role_icon/',
            defaultLogoPath: '/ink-wave/default_logo/',
            canvasWidth: 1920, // キャンバスの幅
            canvasHeight: 1080, // キャンバスの高さ

            labelData: [0, 0, 0, 0, 0, 0],
            labels: ['打開', '抑え', 'ライン管理', '維持力', '突破力', '塗り'],

            rangeData: [
                { 'id': 1, 'name': 'SHORT' },
                { 'id': 2, 'name': 'MIDDLE' },
                { 'id': 3, 'name': 'LONG' },
            ],
            roleData: [
                { 'tag': 'attack', 'name': 'ATTACKER' },
                { 'tag': 'support', 'name': 'SUPPORTER' },
                { 'tag': 'control', 'name': 'CONTROLLER' },
                { 'tag': 'tank', 'name': 'TANKER' },
                { 'tag': 'runner', 'name': 'MEGAPHONE RUNNER' },
                { 'tag': 'balance', 'name': 'BALANCER' },
            ],
            logoData: [
                { 'id': null, 'name': 'None...', 'image': null },
                { 'id': 1, 'name': 'Blue', 'image': 'logo_a' },
                { 'id': 2, 'name': 'Red', 'image': 'logo_b' },
                { 'id': 3, 'name': 'Green', 'image': 'logo_c' },
                { 'id': 4, 'name': 'Orange', 'image': 'logo_d' },
            ],
            chartData: null,
        };
    },
    created() {
        this.fillData()
    },

    computed: {
        selectLogo() {
            const logo = this.logoData.find(logo => logo.id === this.defaultLogo);
            if (logo) {
                return this.defaultLogoPath + logo.image + '.png'
            } else {
                return null
            }
        },
        myStyles() {
            // this.labels[1]
            // this.labels[2]
            // this.labels[4]
            // this.labels[5]
            return {
                width: `580px`,
                height: `580px`,
                position: 'relative'
            }
        }
    },

    methods: {
        fillData() {
            this.chartData = {
                labels: this.labels,
                datasets: [
                    {
                        label: 'data',
                        fill: true,
                        backgroundColor: 'rgba(225, 49, 106, 0.5)',
                        borderColor: 'rgb(225, 49, 106)',
                        pointBackgroundColor: 'rgb(225, 49, 106)',
                        data: this.labelData
                    },
                ]
            }
        },
        generateImage() {
            const canvas = this.$refs.imageCanvas;
            const radarCanvas = document.querySelector('#test canvas');

            if (!canvas || !canvas.getContext) return false;
            if (!radarCanvas || !radarCanvas.getContext) return false;

            const ctx1 = canvas.getContext('2d');
            const ctx2 = radarCanvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.baseImageUrlFamous;

            baseImage.onload = () => {
                ctx1.drawImage(baseImage, 0, 0, this.canvasWidth, this.canvasHeight);
                ctx1.drawImage(ctx2.canvas, 1187 + 60, 315 + 74 - 20, radarCanvas.width, radarCanvas.height); // radarCanvasではなくctx2.canvasを使用

                // Draw text
                ctx1.fillStyle = 'white';

                // チームロゴ
                const maxWidth = 380;
                const maxHeight = 380;
                const landing = 55;
                const top = 50;
                const logo = new Image();
                if ((this.logoImage && this.logoImage.type && this.logoImage.type.match('image/')) || this.defaultLogo) {
                    if (this.logoImage && this.logoImage.type && this.logoImage.type.match('image/')) {
                        logo.src = URL.createObjectURL(this.logoImage); // ファイルからURLを生成
                    } else {
                        logo.src = this.selectLogo;
                    }

                    logo.onload = () => {
                        let logoWidth = maxWidth;
                        let logoHeight = maxHeight;
                        // 比率が1:1の場合
                        if (logo.width === logo.height) {
                            logoWidth = logo.width <= maxWidth ? logo.width : maxWidth;
                            logoHeight = logo.height <= maxHeight ? logo.height : maxHeight;
                        } else if (logo.width > logo.height) { // ヨコが長い
                            logoWidth = logo.width <= maxWidth ? logo.width : maxWidth;
                            const ratio = logo.width / logoWidth;
                            logoHeight = logo.height / ratio;
                        } else { // タテが長い
                            logoHeight = logo.height <= maxHeight ? logo.height : maxHeight;
                            const ratio = logo.height / logoHeight;
                            logoWidth = logo.width / ratio;
                        }

                        const x = (maxWidth + landing - logoWidth) / 2 + landing / 2;
                        const y = (maxHeight + top - logoHeight) / 2 + top / 2;
                        ctx1.drawImage(logo, x, y, logoWidth, logoHeight);
                        if (this.logoImage && this.logoImage.type && this.logoImage.type.match('image/')) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();
                    }
                }

                // TEAM
                ctx1.font = "bold 50px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamName, 512, 123);

                // MEMBER
                ctx1.font = "bold 28px 'Noto Sans JP', sans-serif";
                this.inputPlayerName.forEach(function (name, index) {
                    ctx1.fillText(name, 86, 563 + (index * 106));
                })

                // RANGE
                const self = this;
                this.selectRange.forEach(function (rangeId, index) {
                    const range = self.rangeData.find(item => item.id === rangeId);
                    const left = 398;
                    const x = (220 + left - ctx1.measureText(range.name).width) / 2 + left / 2;
                    ctx1.fillText(range.name, x, 560 + (index * 106));
                })

                // ROLE
                this.selectRole.forEach(function (roleTag, index) {
                    const role = self.roleData.find(item => item.tag === roleTag);
                    ctx1.fillText(role.name, 762, 560 + (index * 106));
                    const roleIcon = new Image();
                    roleIcon.src = self.roleIconPath + roleTag + '.png';
                    roleIcon.onload = () => {
                        ctx1.drawImage(roleIcon, 710, 525 + (index * 106), 50, 50);
                        self.imageDataURL = canvas.toDataURL();
                    }
                })

                // 実績
                ctx1.font = "bold 28px 'Noto Sans JP', sans-serif";
                this.inputAchievements.forEach(function (achievements, index) {
                    ctx1.fillText(achievements, 1208, 115 + (index * 60));
                })

                // COMMENT
                ctx1.font = "bold 20px 'Noto Sans JP', sans-serif";
                const n2Array = this.inputComment.split('\n');
                const lines = [];
                const lineHeight = 50;
                n2Array.forEach((element) => {
                    for (let i = 0; i < element.length; i += 29) {
                        lines.push(element.slice(i, i + 29));
                    }
                });

                for (let i = 0; i < (lines.length > 5 ? 5 : lines.length); i++) {
                    ctx1.fillText(lines[i], 509, 239 + (i * lineHeight));
                }
                this.imageDataURL = canvas.toDataURL();
            }
        },
        // レーダー、実績、コメントなしver
        generateImageRookie() {
            const canvas = this.$refs.imageCanvas;
            if (!canvas || !canvas.getContext) return false;

            const ctx1 = canvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.baseImageUrlRookie;

            baseImage.onload = () => {
                canvas.width = this.canvasWidth; // Canvasの幅を設定
                canvas.height = this.canvasHeight; // Canvasの高さを設定
                ctx1.drawImage(baseImage, 0, 0, this.canvasWidth, this.canvasHeight);

                // チームロゴ
                const maxWidth = 585;
                const maxHeight = 585;
                const landing = 50;
                const top = 272;
                const logo = new Image();
                if ((this.logoImage && this.logoImage.type && this.logoImage.type.match('image/')) || this.defaultLogo) {
                    if (this.logoImage && this.logoImage.type && this.logoImage.type.match('image/')) {
                        logo.src = URL.createObjectURL(this.logoImage); // ファイルからURLを生成
                    } else {
                        logo.src = this.selectLogo;
                    }

                    logo.onload = () => {
                        let logoWidth = maxWidth;
                        let logoHeight = maxHeight;
                        // 比率が1:1の場合
                        if (logo.width === logo.height) {
                            logoWidth = logo.width <= maxWidth ? logo.width : maxWidth;
                            logoHeight = logo.height <= maxHeight ? logo.height : maxHeight;
                        } else if (logo.width > logo.height) { // ヨコが長い
                            logoWidth = logo.width <= maxWidth ? logo.width : maxWidth;
                            const ratio = logo.width / logoWidth;
                            logoHeight = logo.height / ratio;
                        } else { // タテが長い
                            logoHeight = logo.height <= maxHeight ? logo.height : maxHeight;
                            const ratio = logo.height / logoHeight;
                            logoWidth = logo.width / ratio;
                        }

                        const x = (maxWidth + landing - logoWidth) / 2 + landing / 2;
                        const y = (maxHeight + top - logoHeight) / 2 + top / 2;
                        ctx1.drawImage(logo, x, y, logoWidth, logoHeight);
                        if (this.logoImage && this.logoImage.type && this.logoImage.type.match('image/')) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();
                    }
                }

                ctx1.fillStyle = 'white';

                // TEAM
                ctx1.font = "bold 60px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamName, 732, 280);

                // MEMBER
                ctx1.font = "bold 28px 'Noto Sans JP', sans-serif";
                this.inputPlayerName.forEach(function (name, index) {
                    ctx1.fillText(name, 719, 423 + (index * 106));
                })

                // RANGE
                const self = this;
                this.selectRange.forEach(function (rangeId, index) {
                    const range = self.rangeData.find(item => item.id === rangeId);
                    const left = 1034;
                    const x = (220 + left - ctx1.measureText(range.name).width) / 2 + left / 2;
                    ctx1.fillText(range.name, x, 421 + (index * 106));
                })

                // ROLE
                this.selectRole.forEach(function (roleTag, index) {
                    const role = self.roleData.find(item => item.tag === roleTag);
                    ctx1.fillText(role.name, 1395, 421 + (index * 106));
                    const roleIcon = new Image();
                    roleIcon.src = self.roleIconPath + roleTag + '.png';
                    roleIcon.onload = () => {
                        ctx1.drawImage(roleIcon, 1348, 384 + (index * 106), 50, 50);
                        self.imageDataURL = canvas.toDataURL();
                    }
                })
            }
            this.imageDataURL = canvas.toDataURL();
        },
        inputData() {
            let splitData = [];
            if (this.inputEntryLine) {
                splitData = this.inputEntryLine.split('\t');

                this.inputPlayerName = []
                // this.selectPlayerWeapons = []
                this.selectRange = []
                this.selectRole = []

                if (splitData.length > 31) {
                    this.inputTeamName = splitData[1]
                    this.inputPlayerName.push(splitData[5], splitData[11], splitData[16], splitData[21])
                    // this.selectPlayerWeapons
                    this.selectRange.push(this.getRange(splitData[9]), this.getRange(splitData[14]), this.getRange(splitData[19]), this.getRange(splitData[24]))
                    this.selectRole.push(this.getRole(splitData[10]), this.getRole(splitData[15]), this.getRole(splitData[20]), this.getRole(splitData[25]))

                    // スーパーサブの追加
                    if (splitData[26] === 'はい') {
                        this.inputPlayerName.push(splitData[27])
                        // this.selectPlayerWeapons
                        this.selectRange.push(this.getRange(splitData[30]))
                        this.selectRole.push(this.getRole(splitData[31]))
                    }

                    if (splitData[3] !== "") {
                        // this.logoImage = splitData[3]
                    } else {
                        this.defaultLogo = this.getDefaultLog(splitData[4])
                    }
                }
            }


        },
        getRange(range) {
            switch (range) {
                case 'SHORT':
                    return 1
                case 'MIDDLE':
                    return 2
                case 'LONG':
                    return 3
                default:
                    return null
            }
        },
        getRole(role) {
            switch (role) {
                case 'アタッカー':
                    return 'attack'
                case 'サポーター':
                    return 'support'
                case 'コントローラー':
                    return 'control'
                case 'タンカー':
                    return 'tank'
                case 'メガホンランナー':
                    return 'runner'
                case 'バランサー':
                    return 'balance'
                default:
                    return null
            }
        },
        getDefaultLog(logo) {
            switch (logo) {
                case 'ブルー':
                    return 1
                case 'レッド':
                    return 2
                case 'グリーン':
                    return 3
                case 'オレンジ':
                    return 4
                default:
                    return null
            }
        }
    },
}
</script>

<style scoped>
.confirm-image {
    width: 100%;
    height: auto;
}

.chart-container {
    margin: 0 auto;
}
</style>

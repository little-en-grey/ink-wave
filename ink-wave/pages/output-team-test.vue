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
                                        item-value="filename" density="compact" chips multiple label="Weapons"
                                        :menu-props="menuProps"></v-select>
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
                            <v-text-field v-model="logoImage" label="Logo Image" :disabled="defaultLogo"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-select v-model="defaultLogo" :items="logoData" item-text="name" item-value="id"
                                density="compact" label="Default Logo" :disabled="logoImage"></v-select>
                        </v-col>
                        <v-col cols="1">
                            <v-img v-if="defaultLogo" :src="selectLogo" max-height="50" max-width="50"></v-img>
                        </v-col>

                        <!-- ランクアイコン -->
                        <v-col cols="11">
                            <v-select v-model="rankIcon" :items="rankIconData" item-text="name" item-value="id"
                                density="compact" label="Rank Icon"></v-select>
                        </v-col>
                        <v-col cols="1">
                            <v-img v-if="rankIcon" :src="selectRankIcon" max-height="50" max-width="50"></v-img>
                        </v-col>

                        <!-- 実績 -->
                        <v-col v-for="i in 3" cols="4" :key="i">
                            <v-text-field v-model="inputAchievements[i - 1]" :label="'Achievements' + i"></v-text-field>
                        </v-col>

                        <!-- 最高WP -->
                        <v-col cols="4">
                            <v-text-field v-model="inputBestWP" label="最高WP"></v-text-field>
                        </v-col>

                        <!-- 最終WP -->
                        <v-col cols="4">
                            <v-text-field v-model="inputFinalWP" label="最終WP"></v-text-field>
                        </v-col>

                        <!-- 順位 -->
                        <v-col cols="2">
                            <v-text-field v-model="inputRank" label="順位"></v-text-field>
                        </v-col>

                        <!-- シーズン -->
                        <v-col cols="2">
                            <v-text-field v-model="inputSeason" label="Season"></v-text-field>
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
                    <v-row>
                        <v-col cols="6" sm="4" md="2">
                            <v-btn block color="red darken-3" @click="generateImageKraken"> クラーケン用(ブキ無) </v-btn>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-btn block color="red darken-3" @click="generateImageKrakenWithWeapon"> クラーケン用(ブキ有) </v-btn>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-btn block color="blue darken-2" @click="generateImageLeagueStart"> リーグスタート用(ブキ無) </v-btn>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-btn block color="blue darken-2" @click="generateImageLeagueStartWithWeapon"> リーグスタート用(ブキ有) </v-btn>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-btn block color="secondary" @click="generateImageFinish"> シーズン終了証書(ブキ無) </v-btn>
                        </v-col>
                        <v-col cols="6" sm="4" md="2">
                            <v-btn block color="secondary" @click="generateImageFinishWithWeapon"> シーズン終了証書(ブキ有) </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
            <v-card v-show="imageDataURL" class="pt-1 pr-1 pl-1">
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
    layout: 'operation',
    components: {
        RadarChart,
    },
    head: {
        title: 'Output Team',
    },
    async asyncData() {
        // jsonファイルから武器取得 
        const weapons = await import('@/static/weapons/weapons.json');
        weapons.default.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        // Webフォントの読み込みが完了するのを待つために、Promiseを使用
        await new Promise((resolve) => {
            const fontLink = document.createElement('link');
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap'; // WebフォントのURLを指定
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
            // 正規
            inputPlayerName: [],        // プレイヤー名
            selectPlayerWeapons: {},    // 使用ブキ
            selectRange: [],            // レンジ
            selectRole: [],             // ロール
            inputTeamName: "",          // チーム名
            inputComment: "",           // コメント
            inputAchievements: [],      // 実績
            inputEntryLine: "",         // 申請リストから貼り付け

            inputFinalWP: "",           // 最終WP
            inputBestWP: "",            // 最高WP
            inputRank: "",              // 順位
            inputSeason: "",            // シーズン

            logoImage: null,            // チームロゴ
            defaultLogo: null,          // デフォルトチームロゴ
            rankIcon: null,             // ランクアイコン

            imageDataURL: null,                 // カード生成用URL
            imageName: 'generated_image.png',   // カードファイル名
            canvasWidth: 1920,                  // キャンバスの幅
            canvasHeight: 1080,                 // キャンバスの高さ
            
            // カードテンプレート
            imageKraken: '/ink-wave/team_card/team_slide_kraken.png',                                   // クラーケン用(ブキ無)
            imageKrakenWithWeapon: '/ink-wave/team_card/team_slide_kraken_weapon.png',                  // クラーケン用(ブキ有)
            imageUrlLeagueStart: '/ink-wave/team_card/team_slide_league_start.png',                     // リーグスタート用(ブキ無)
            imageUrlLeagueStartWithWeapon: '/ink-wave/team_card/team_slide_league_start_weapon.png',    // リーグスタート用(ブキ有)
            imageFinish: '/ink-wave/team_card/team_slide_finish.png',                                   // シーズン終了証書(ブキ無)
            imageFinishWithWeapon: '/ink-wave/team_card/team_slide_finish_weapon.png',               // シーズン終了証書(ブキ有)
            
            // フォルダパス
            roleIconPath: '/ink-wave/role_icon/',       // ロールアイコン
            defaultLogoPath: '/ink-wave/default_logo/', // デフォルトロゴ
            rankIconPath: '/ink-wave/rank_icon/',       // ランクアイコン
            weaponsIconPath: '/ink-wave/weapons/',      // ブキ

            // チャート用データ
            labelData: [0, 0, 0, 0, 0, 0],
            labels: ['打開', '抑え', 'ライン管理', '維持力', '突破力', '塗り'],
            chartData: null,

            // レンジ
            rangeData: [
                { 'id': 1, 'name': 'SHORT' },
                { 'id': 2, 'name': 'MIDDLE' },
                { 'id': 3, 'name': 'LONG' },
            ],
            // ロール
            roleData: [
                { 'tag': 'attack', 'name': 'ATTACKER' },
                { 'tag': 'support', 'name': 'SUPPORTER' },
                { 'tag': 'control', 'name': 'CONTROLLER' },
                { 'tag': 'tank', 'name': 'TANKER' },
                { 'tag': 'runner', 'name': 'MEGAPHONE RUNNER' },
                { 'tag': 'balance', 'name': 'BALANCER' },
            ],
            // デフォルトロゴ
            logoData: [
                { 'id': null, 'name': 'None...', 'image': null },
                { 'id': 1, 'name': 'Blue', 'image': 'logo_a' },
                { 'id': 2, 'name': 'Red', 'image': 'logo_b' },
                { 'id': 3, 'name': 'Green', 'image': 'logo_c' },
                { 'id': 4, 'name': 'Orange', 'image': 'logo_d' },
            ],
            // ランクアイコン
            rankIconData: [
                { 'id': null, 'name': 'None...', 'image': null },
                { 'id': 1, 'name': 'KRAKEN', 'image': 'RANK_KRAKEN' },
                { 'id': 2, 'name': 'ORCA', 'image': 'RANK_ORCA' },
                { 'id': 3, 'name': 'SHARK', 'image': 'RANK_SHARK' },
                { 'id': 4, 'name': 'MORAY', 'image': 'RANK_MORAY' },
                { 'id': 5, 'name': 'MANTA', 'image': 'RANK_MANTA' },
                { 'id': 6, 'name': 'PENGUIN', 'image': 'RANK_PENGUIN' },
                { 'id': 7, 'name': 'JELLYFISH', 'image': 'RANK_JELLYFISH' },
            ],
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
        selectRankIcon() {
            const logo = this.rankIconData.find(logo => logo.id === this.rankIcon);
            if (logo) {
                return this.rankIconPath + logo.image + '.png'
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
        },
        menuProps() {
            return {
                // メニューの高さを指定し、選択肢が縦に伸びるようにします
                maxHeight: '600',
            };
        },
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
        // クラーケン用(ブキ無)
        generateImageKraken() {
            const canvas = this.$refs.imageCanvas;
            const radarCanvas = document.querySelector('#test canvas');

            if (!canvas || !canvas.getContext) return false;
            if (!radarCanvas || !radarCanvas.getContext) return false;

            const ctx1 = canvas.getContext('2d');
            const ctx2 = radarCanvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.imageKraken;

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
                if (this.logoImage || this.defaultLogo) {
                    if (this.logoImage) {
                        const regex = /id=(\w+)/;
                        const match = this.logoImage.match(regex);
                        const fileUrl = "https://drive.google.com/uc?id=" + match[1];
                        logo.src = fileUrl; // ファイルからURLを生成
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
                        if (this.logoImage) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
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
        // クラーケン用(ブキ有)
        generateImageKrakenWithWeapon() {
            const canvas = this.$refs.imageCanvas;
            const radarCanvas = document.querySelector('#test canvas');

            if (!canvas || !canvas.getContext) return false;
            if (!radarCanvas || !radarCanvas.getContext) return false;

            const ctx1 = canvas.getContext('2d');
            const ctx2 = radarCanvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.imageKrakenWithWeapon;

            baseImage.onload = () => {
                ctx1.drawImage(baseImage, 0, 0, this.canvasWidth, this.canvasHeight);
                ctx1.drawImage(ctx2.canvas, 1187 + 60 + 15, 315 + 74 - 20, radarCanvas.width, radarCanvas.height); // radarCanvasではなくctx2.canvasを使用

                // Draw text
                ctx1.fillStyle = 'white';

                // チームロゴ
                const maxWidth = 380;
                const maxHeight = 380;
                const landing = 55;
                const top = 50;
                const logo = new Image();
                if (this.logoImage || this.defaultLogo) {
                    if (this.logoImage) {
                        const regex = /id=(\w+)/;
                        const match = this.logoImage.match(regex);
                        const fileUrl = "https://drive.google.com/uc?id=" + match[1];
                        logo.src = fileUrl; // ファイルからURLを生成
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
                        if (this.logoImage) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();
                    }
                }

                // TEAM
                ctx1.font = "bold 50px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamName, 512, 123);

                // MEMBER
                ctx1.font = "bold 26px 'Noto Sans JP', sans-serif";
                this.inputPlayerName.forEach(function (name, index) {
                    ctx1.fillText(name, 86, 563 + (index * 106));
                })

                // RANGE
                const self = this;
                this.selectRange.forEach(function (rangeId, index) {
                    const range = self.rangeData.find(item => item.id === rangeId);
                    const left = 378;
                    const x = (180 + left - ctx1.measureText(range.name).width) / 2 + left / 2;
                    ctx1.fillText(range.name, x, 563 + (index * 106));
                })

                // ROLE
                this.selectRole.forEach(function (roleTag, index) {
                    const role = self.roleData.find(item => item.tag === roleTag);
                    ctx1.fillText(role.name, 617, 563 + (index * 106));
                    const roleIcon = new Image();
                    roleIcon.src = self.roleIconPath + roleTag + '.png';
                    roleIcon.onload = () => {
                        ctx1.drawImage(roleIcon, 565, 527 + (index * 106), 50, 50);
                        self.imageDataURL = canvas.toDataURL();
                    }
                })

                // 使用ブキ
                for (const key in this.selectPlayerWeapons) {
                    const weapons = this.selectPlayerWeapons[key];
                    weapons.forEach(function (fileName, index) {
                        const icon = new Image();
                        icon.src = self.weaponsIconPath + fileName;
                        icon.onload = () => {
                            ctx1.drawImage(icon, 924 + (index * 80), 510 + (key * 106), 75, 75);
                            self.imageDataURL = canvas.toDataURL();
                        }
                    })
                }

                // 実績
                ctx1.font = "bold 28px 'Noto Sans JP', sans-serif";
                this.inputAchievements.forEach(function (achievements, index) {
                    ctx1.fillText(achievements, 1238, 115 + (index * 60));
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
        // リーグスタート用(ブキ無)
        generateImageLeagueStart() {
            const canvas = this.$refs.imageCanvas;
            if (!canvas || !canvas.getContext) return false;

            const ctx1 = canvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.imageUrlLeagueStart;

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
                if (this.logoImage || this.defaultLogo) {
                    if (this.logoImage) {
                        const regex = /id=(\w+)/;
                        const match = this.logoImage.match(regex);
                        const fileUrl = "https://drive.google.com/uc?id=" + match[1];
                        logo.src = fileUrl; // ファイルからURLを生成
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
                        if (this.logoImage) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
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

        // リーグスタート用(ブキ有)
        generateImageLeagueStartWithWeapon() {
            const canvas = this.$refs.imageCanvas;
            if (!canvas || !canvas.getContext) return false;

            const ctx1 = canvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.imageUrlLeagueStartWithWeapon;

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
                if (this.logoImage || this.defaultLogo) {
                    if (this.logoImage) {
                        const regex = /id=(\w+)/;
                        const match = this.logoImage.match(regex);
                        const fileUrl = "https://drive.google.com/uc?id=" + match[1];
                        logo.src = fileUrl; // ファイルからURLを生成
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
                        if (this.logoImage) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();
                    }
                }

                ctx1.fillStyle = 'white';

                // TEAM
                ctx1.font = "bold 60px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamName, 732, 280);

                // MEMBER
                ctx1.font = "bold 26px 'Noto Sans JP', sans-serif";
                this.inputPlayerName.forEach(function (name, index) {
                    ctx1.fillText(name, 714, 423 + (index * 106));
                })

                // RANGE
                const self = this;
                this.selectRange.forEach(function (rangeId, index) {
                    const range = self.rangeData.find(item => item.id === rangeId);
                    const left = 1004;
                    const x = (180 + left - ctx1.measureText(range.name).width) / 2 + left / 2;
                    ctx1.fillText(range.name, x, 423 + (index * 106));
                })

                // ROLE
                this.selectRole.forEach(function (roleTag, index) {
                    const role = self.roleData.find(item => item.tag === roleTag);
                    ctx1.fillText(role.name, 1244, 423 + (index * 106));
                    const roleIcon = new Image();
                    roleIcon.src = self.roleIconPath + roleTag + '.png';
                    roleIcon.onload = () => {
                        ctx1.drawImage(roleIcon, 1191, 386 + (index * 106), 50, 50);
                        self.imageDataURL = canvas.toDataURL();
                    }
                })

                // 使用ブキ
                for (const key in this.selectPlayerWeapons) {
                    const weapons = this.selectPlayerWeapons[key];
                    weapons.forEach(function (fileName, index) {
                        const icon = new Image();
                        icon.src = self.weaponsIconPath + fileName;
                        icon.onload = () => {
                            ctx1.drawImage(icon, 1568 + (index * 80), 369 + (key * 106), 75, 75);
                            self.imageDataURL = canvas.toDataURL();
                        }
                    })
                }
            }
            this.imageDataURL = canvas.toDataURL();
        },

        // シーズン終了証書(ブキ無)
        generateImageFinish() {
            const canvas = this.$refs.imageCanvas;
            if (!canvas || !canvas.getContext) return false;

            const ctx1 = canvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.imageFinish;

            baseImage.onload = () => {
                ctx1.drawImage(baseImage, 0, 0, this.canvasWidth, this.canvasHeight);

                // Draw text
                ctx1.fillStyle = 'white';

                // チームロゴ
                const maxWidth = 470;
                const maxHeight = 470;
                const landing = 143;
                const top = 207;
                
                const logo = new Image();
                if (this.logoImage || this.defaultLogo) {
                    if (this.logoImage) {
                        const regex = /id=(\w+)/;
                        const match = this.logoImage.match(regex);
                        const fileUrl = "https://drive.google.com/uc?id=" + match[1];
                        logo.src = fileUrl; // ファイルからURLを生成
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
                        if (this.logoImage) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();

                        // ランクアイコン
                        if (this.rankIcon) {
                            const icon = new Image();
                            icon.src = this.selectRankIcon;
                            icon.onload = () => {
                                ctx1.drawImage(icon, 243, 673, 270, 270);

                                // 順位
                                ctx1.font = "bold 20px 'Noto Sans JP', sans-serif";
                                const left = 363;
                                const x = (29 + left - ctx1.measureText(this.inputRank).width) / 2 + left / 2;
                                ctx1.fillText(this.inputRank, x, 886);

                                this.imageDataURL = canvas.toDataURL();
                            }
                        }
                    }
                }

                // TEAM
                ctx1.font = "bold 50px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamName, 715, 230);

                // MEMBER
                ctx1.font = "bold 28px 'Noto Sans JP', sans-serif";
                this.inputPlayerName.forEach(function (name, index) {
                    ctx1.fillText(name, 739, 377 + (index * 106));
                })

                // RANGE
                const self = this;
                this.selectRange.forEach(function (rangeId, index) {
                    const range = self.rangeData.find(item => item.id === rangeId);
                    const left = 1033;
                    const x = (220 + left - ctx1.measureText(range.name).width) / 2 + left / 2;
                    ctx1.fillText(range.name, x, 374 + (index * 106));
                })

                // ROLE
                this.selectRole.forEach(function (roleTag, index) {
                    const role = self.roleData.find(item => item.tag === roleTag);
                    ctx1.fillText(role.name, 1395, 374 + (index * 106));
                    const roleIcon = new Image();
                    roleIcon.src = self.roleIconPath + roleTag + '.png';
                    roleIcon.onload = () => {
                        ctx1.drawImage(roleIcon, 1343, 339 + (index * 106), 50, 50);
                        self.imageDataURL = canvas.toDataURL();
                    }
                })

                // 最高WP
                ctx1.font = "bold 50px 'Noto Sans JP', sans-serif";
                let left = 174 + 33;
                let x = (155 + left - ctx1.measureText(this.inputBestWP).width) / 2 + left / 2;
                ctx1.fillText(this.inputBestWP, x, 170);

                // 最終WP
                left = 359 + 33;
                x = (159 + left - ctx1.measureText(this.inputFinalWP).width) / 2 + left / 2;
                ctx1.fillText(this.inputFinalWP, x, 170);

                // シーズン
                ctx1.font = "58px 'Lato', sans-serif";
                ctx1.fillText(this.inputSeason, 1180, 962);

                this.imageDataURL = canvas.toDataURL();
            }
        },

        // シーズン終了証書(ブキ有)
        generateImageFinishWithWeapon () {
            const canvas = this.$refs.imageCanvas;
            if (!canvas || !canvas.getContext) return false;
            const ctx1 = canvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.imageFinishWithWeapon;

            baseImage.onload = () => {
                ctx1.drawImage(baseImage, 0, 0, this.canvasWidth, this.canvasHeight);

                // Draw text
                ctx1.fillStyle = 'white';

                // チームロゴ
                const maxWidth = 470;
                const maxHeight = 470;
                const landing = 110;
                const top = 207;
                
                const logo = new Image();
                if (this.logoImage || this.defaultLogo) {
                    if (this.logoImage) {
                        const regex = /id=(\w+)/;
                        const match = this.logoImage.match(regex);
                        const fileUrl = "https://drive.google.com/uc?id=" + match[1];
                        logo.src = fileUrl; // ファイルからURLを生成
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
                        if (this.logoImage) URL.revokeObjectURL(logo.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();

                        // ランクアイコン
                        if (this.rankIcon) {
                            const icon = new Image();
                            icon.src = this.selectRankIcon;
                            icon.onload = () => {
                                ctx1.drawImage(icon, 243-33, 673, 270, 270);

                                // 順位
                                ctx1.font = "bold 20px 'Noto Sans JP', sans-serif";
                                const left = 330;
                                const x = (29 + left - ctx1.measureText(this.inputRank).width) / 2 + left / 2;
                                ctx1.fillText(this.inputRank, x, 886);

                                this.imageDataURL = canvas.toDataURL();
                            }
                        }
                    }
                }

                // TEAM
                ctx1.font = "bold 50px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamName, 682, 230);

                // MEMBER
                ctx1.font = "bold 28px 'Noto Sans JP', sans-serif";
                this.inputPlayerName.forEach(function (name, index) {
                    ctx1.fillText(name, 706, 377 + (index * 106));
                })

                // RANGE
                const self = this;
                this.selectRange.forEach(function (rangeId, index) {
                    const range = self.rangeData.find(item => item.id === rangeId);
                    const left = 971;
                    const x = (180 + left - ctx1.measureText(range.name).width) / 2 + left / 2;
                    ctx1.fillText(range.name, x, 374 + (index * 106));
                })

                // ROLE
                this.selectRole.forEach(function (roleTag, index) {
                    const role = self.roleData.find(item => item.tag === roleTag);
                    ctx1.fillText(role.name, 1223, 374 + (index * 106));
                    const roleIcon = new Image();
                    roleIcon.src = self.roleIconPath + roleTag + '.png';
                    roleIcon.onload = () => {
                        ctx1.drawImage(roleIcon, 1171, 339 + (index * 106), 50, 50);
                        self.imageDataURL = canvas.toDataURL();
                    }
                })

                // 使用ブキ
                for (const key in this.selectPlayerWeapons) {
                    const weapons = this.selectPlayerWeapons[key];
                    weapons.forEach(function (fileName, index) {
                        const icon = new Image();
                        icon.src = self.weaponsIconPath + fileName;
                        icon.onload = () => {
                            ctx1.drawImage(icon, 1560 + (index * 95), 322 + (key * 106), 85, 85);
                            self.imageDataURL = canvas.toDataURL();
                        }
                    })
                }

                // 最高WP
                ctx1.font = "bold 50px 'Noto Sans JP', sans-serif";
                let left = 174;
                let x = (155 + left - ctx1.measureText(this.inputBestWP).width) / 2 + left / 2;
                ctx1.fillText(this.inputBestWP, x, 170);

                // 最終WP
                left = 359;
                x = (159 + left - ctx1.measureText(this.inputFinalWP).width) / 2 + left / 2;
                ctx1.fillText(this.inputFinalWP, x, 170);

                // シーズン
                ctx1.font = "58px 'Lato', sans-serif";
                ctx1.fillText(this.inputSeason, 1180, 962);

                this.imageDataURL = canvas.toDataURL();
            }
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
                        this.logoImage = splitData[3]
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

.menuable__content__active {
    max-height: 650px !important;
}
</style>

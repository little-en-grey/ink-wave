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
                        <!-- Team A情報 -->
                        <v-col cols="5">
                            <v-text-field v-model="inputEntryLineA" label="Team A"
                                hint="申請リストから行コピーして貼り付けしてください"></v-text-field>
                        </v-col>
                        <!-- Team B情報 -->
                        <v-col cols="5">
                            <v-text-field v-model="inputEntryLineB" label="Team B"
                                hint="申請リストから行コピーして貼り付けしてください"></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-btn color="primary" @click="inputData"> 取り込む </v-btn>
                        </v-col>

                        <!-- チーム名 -->
                        <v-col cols="12">
                            <v-text-field v-model="inputTeamNameA" label="Team NameA"></v-text-field>
                        </v-col>
                        <!-- メンバー情報 -->
                        <v-col v-for="i in 5" :key="i" cols="12" sm="6">
                            <v-row justify="start">
                                <v-col cols="12">
                                    <v-text-field v-model="inputPlayerNameA[i - 1]" maxlength="10"
                                        :label="'Player' + i"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <!-- チームロゴ -->
                        <v-col cols="8">
                            <v-file-input v-model="logoImageA" label="Logo ImageA" :disabled="defaultLogoA"></v-file-input>
                        </v-col>
                        <v-col cols="3">
                            <v-select v-model="defaultLogoA" :items="logoData" item-text="name" item-value="id"
                                density="compact" label="Default LogoA" :disabled="logoImageA"></v-select>
                        </v-col>
                        <v-col cols="1">
                            <v-img v-if="defaultLogoA" :src="selectLogoA" max-height="50" max-width="50"></v-img>
                        </v-col>

                        <!-- チーム名 -->
                        <v-col cols="12">
                            <v-text-field v-model="inputTeamNameB" label="Team NameB"></v-text-field>
                        </v-col>
                        <!-- メンバー情報 -->
                        <v-col v-for="i in 5" :key="i" cols="12" sm="6">
                            <v-row justify="start">
                                <v-col cols="12">
                                    <v-text-field v-model="inputPlayerNameB[i - 1]" maxlength="10"
                                        :label="'Player' + i"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <!-- チームロゴ -->
                        <v-col cols="8">
                            <v-file-input v-model="logoImageB" label="Logo ImageB" :disabled="defaultLogoB"></v-file-input>
                        </v-col>
                        <v-col cols="3">
                            <v-select v-model="defaultLogoB" :items="logoData" item-text="name" item-value="id"
                                density="compact" label="Default LogoB" :disabled="logoImageB"></v-select>
                        </v-col>
                        <v-col cols="1">
                            <v-img v-if="defaultLogoB" :src="selectLogoB" max-height="50" max-width="50"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-text-field v-model="inputStartTime"
                                        label="START"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="inputCommentary"
                                        label="実況"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="inputObserver"
                                        label="オブザーバー"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="inputScoreA"
                                        label="ScoreA"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="inputScoreB"
                                        label="ScoreB"></v-text-field>
                        </v-col>

                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="generateImage"> スライド作成 </v-btn>
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
export default {
    name: 'TodaysResult',
    head: {
        title: 'Todays Result',
    },
    async asyncData() {
        // Webフォントの読み込みが完了するのを待つために、Promiseを使用
        await new Promise((resolve) => {
            const fontLink = document.createElement('link');
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap'; // WebフォントのURLを指定
            fontLink.rel = 'stylesheet';
            document.head.appendChild(fontLink);

            // Webフォントの読み込みが完了したらresolveを呼び出す
            fontLink.onload = resolve;
        });
    },

    data() {
        return {
            inputTeamNameA: "",
            inputTeamNameB: "",
            inputPlayerNameA: [],
            inputPlayerNameB: [],
            inputEntryLineA: "",
            inputEntryLineB: "",
            logoImageA: null,
            logoImageB: null,
            defaultLogoA: null,
            defaultLogoB: null,

            inputScoreA: 0,
            inputScoreB: 0,

            inputCommentary: "",
            inputObserver: "",
            inputStartTime: "",

            imageDataURL: null,
            imageName: 'generated_image.png',
            baseImageUrl: '/ink-wave/todays_result/todays_result.jpg', // ベース画像のURLを設定
            // baseImageUrl: '/ink-wave/todays_result/todays_result_sample.jpg', // ベース画像のURLを設定
            defaultLogoPath: '/ink-wave/default_logo/',
            canvasWidth: 1920, // キャンバスの幅
            canvasHeight: 1080, // キャンバスの高さ

            logoData: [
                { 'id': null, 'name': 'None...', 'image': null },
                { 'id': 1, 'name': 'Blue', 'image': 'logo_a' },
                { 'id': 2, 'name': 'Red', 'image': 'logo_b' },
                { 'id': 3, 'name': 'Green', 'image': 'logo_c' },
                { 'id': 4, 'name': 'Orange', 'image': 'logo_d' },
            ],

        };
    },


    computed: {
        selectLogoA() {
            const logo = this.logoData.find(logo => logo.id === this.defaultLogoA);
            if (logo) {
                return this.defaultLogoPath + logo.image + '.png'
            } else {
                return null
            }
        },

        selectLogoB() {
            const logo = this.logoData.find(logo => logo.id === this.defaultLogoB);
            if (logo) {
                return this.defaultLogoPath + logo.image + '.png'
            } else {
                return null
            }
        },
    },

    methods: {
        generateImage() {
            const canvas = this.$refs.imageCanvas;
            if (!canvas || !canvas.getContext) return false;
            const ctx1 = canvas.getContext('2d');

            const baseImage = new Image();
            baseImage.src = this.baseImageUrl;

            baseImage.onload = () => {
                ctx1.drawImage(baseImage, 0, 0, this.canvasWidth, this.canvasHeight);

                // Draw text
                ctx1.fillStyle = 'white';

                ctx1.font = "bold 28px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputCommentary, 973, 205);
                ctx1.fillText(this.inputObserver, 973, 256);
                ctx1.fillText(this.inputStartTime, 973, 155);

                // チームロゴ
                const maxWidth = 455;
                const maxHeight = 455;
                const logoA = new Image();
                const logoB = new Image();

                const landingA = 263;
                const top = 99;
                if ((this.logoImageA && this.logoImageA.type && this.logoImageA.type.match('image/')) || this.defaultLogoA) {
                    if (this.logoImageA && this.logoImageA.type && this.logoImageA.type.match('image/')) {
                        logoA.src = URL.createObjectURL(this.logoImageA); // ファイルからURLを生成
                    } else {
                        logoA.src = this.selectLogoA;
                    }

                    logoA.onload = () => {
                        let logoWidth = maxWidth;
                        let logoHeight = maxHeight;
                        // 比率が1:1の場合
                        if (logoA.width === logoA.height) {
                            logoWidth = logoA.width <= maxWidth ? logoA.width : maxWidth;
                            logoHeight = logoA.height <= maxHeight ? logoA.height : maxHeight;
                        } else if (logoA.width > logoA.height) { // ヨコが長い
                            logoWidth = logoA.width <= maxWidth ? logoA.width : maxWidth;
                            const ratio = logoA.width / logoWidth;
                            logoHeight = logoA.height / ratio;
                        } else { // タテが長い
                            logoHeight = logoA.height <= maxHeight ? logoA.height : maxHeight;
                            const ratio = logoA.height / logoHeight;
                            logoWidth = logoA.width / ratio;
                        }

                        const x = (maxWidth + landingA - logoWidth) / 2 + landingA / 2;
                        const y = (maxHeight + top - logoHeight) / 2 + top / 2;
                        console.log([x, y])
                        ctx1.drawImage(logoA, x, y, logoWidth, logoHeight);
                        if (this.logoImageA && this.logoImageA.type && this.logoImageA.type.match('image/')) URL.revokeObjectURL(logoA.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();
                    }
                }

                const landingB = 1192;
                if ((this.logoImageB && this.logoImageB.type && this.logoImageB.type.match('image/')) || this.defaultLogoA) {
                    if (this.logoImageB && this.logoImageB.type && this.logoImageB.type.match('image/')) {
                        logoB.src = URL.createObjectURL(this.logoImageB); // ファイルからURLを生成
                    } else {
                        logoB.src = this.selectLogoB;
                    }

                    logoB.onload = () => {
                        let logoWidth = maxWidth;
                        let logoHeight = maxHeight;
                        // 比率が1:1の場合
                        if (logoB.width === logoB.height) {
                            logoWidth = logoB.width <= maxWidth ? logoB.width : maxWidth;
                            logoHeight = logoB.height <= maxHeight ? logoB.height : maxHeight;
                        } else if (logoB.width > logoB.height) { // ヨコが長い
                            logoWidth = logoB.width <= maxWidth ? logoB.width : maxWidth;
                            const ratio = logoB.width / logoWidth;
                            logoHeight = logoB.height / ratio;
                        } else { // タテが長い
                            logoHeight = logoB.height <= maxHeight ? logoB.height : maxHeight;
                            const ratio = logoB.height / logoHeight;
                            logoWidth = logoB.width / ratio;
                        }

                        const x = (maxWidth + landingB - logoWidth) / 2 + landingB / 2;
                        const y = (maxHeight + top - logoHeight) / 2 + top / 2;
                        console.log([x, y])
                        ctx1.drawImage(logoB, x, y, logoWidth, logoHeight);
                        if (this.logoImageB && this.logoImageB.type && this.logoImageB.type.match('image/')) URL.revokeObjectURL(logoB.src); // 不要になったURLを解放
                        this.imageDataURL = canvas.toDataURL();
                    }
                }

                // TEAM A
                ctx1.fillStyle = '#BFCAE6';
                ctx1.textAlign = "right";
                ctx1.font = "bold 36px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamNameA, 725, 616);

                // MEMBER A
                ctx1.fillStyle = 'white';
                ctx1.font = "bold 42px 'Noto Sans JP', sans-serif";
                this.inputPlayerNameA.forEach(function (name, index) {
                    ctx1.fillText(name, 895, 713 + (index * 83));
                })


                // TEAM B
                ctx1.fillStyle = '#BFCAE6';
                ctx1.textAlign = "left";
                ctx1.font = "bold 36px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputTeamNameB, 1194, 616);

                // MEMBER B
                ctx1.fillStyle = 'white';
                ctx1.font = "bold 42px 'Noto Sans JP', sans-serif";
                this.inputPlayerNameB.forEach(function (name, index) {
                    ctx1.fillText(name, 1024, 713 + (index * 83));
                })

                ctx1.font = "bold 218px 'Noto Sans JP', sans-serif";
                ctx1.fillText(this.inputScoreA, 44, 1022);
                ctx1.fillText(this.inputScoreB, 1770, 1022);

                this.imageDataURL = canvas.toDataURL();
            }
        },
        inputData() {
            let splitDataA = [];
            let splitDataB = [];

            // チームA
            if (this.inputEntryLineA) {
                splitDataA = this.inputEntryLineA.split('\t');
                this.inputPlayerNameA = []

                if (splitDataA.length > 31) {
                    this.inputTeamNameA = splitDataA[1]
                    this.inputPlayerNameA.push(splitDataA[5], splitDataA[11], splitDataA[16], splitDataA[21])

                    // スーパーサブの追加
                    // if (splitDataA[26] === 'はい') {
                    //     this.inputPlayerNameA.push(splitDataA[27])
                    // }

                    if (splitDataA[3] !== "") {
                        // this.logoImageA = splitData[3]
                    } else {
                        this.defaultLogoA = this.getDefaultLog(splitDataA[4])
                    }
                }
            }
            // チームB
            if (this.inputEntryLineB) {
                splitDataB = this.inputEntryLineB.split('\t');
                this.inputPlayerNameB = []

                if (splitDataB.length > 31) {
                    this.inputTeamNameB = splitDataB[1]
                    this.inputPlayerNameB.push(splitDataB[5], splitDataB[11], splitDataB[16], splitDataB[21])

                    // スーパーサブの追加
                    // if (splitDataB[26] === 'はい') {
                    //     this.inputPlayerNameB.push(splitDataB[27])
                    // }

                    if (splitDataB[3] !== "") {
                        // this.logoImageB = splitData[3]
                    } else {
                        this.defaultLogoB = this.getDefaultLog(splitDataB[4])
                    }
                }
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
</style>

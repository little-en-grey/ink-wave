<template>
    <v-row justify="center" align="center">
        <v-col cols="12">
            <!-- <v-col cols="12" sm="8"> -->
            <v-card class="mb-3">
                <v-card-title class="headline">
                    Todays Result
                </v-card-title>
                <v-card-text>
                    <v-row v-for="i in count" :key="i" justify="start">
                        <v-col cols="12">
                            <div class="text-subtitle-1">Result{{ i }}</div>
                        </v-col>
                        <!-- チーム名 -->
                        <v-col cols="5">
                            <v-text-field v-model="inputTeamNameA[i - 1]" label="Team NameA"></v-text-field>
                        </v-col>
                        <!-- チームロゴ -->
                        <v-col cols="3">
                            <v-file-input v-model="logoImageA[i - 1]" label="Logo ImageA"
                                :disabled="defaultLogoA[i - 1]"></v-file-input>
                        </v-col>
                        <v-col cols="2">
                            <v-select v-model="defaultLogoA[i - 1]" :items="logoData" item-text="name" item-value="id"
                                density="compact" label="Default LogoA" :disabled="logoImageA[i - 1]"></v-select>
                        </v-col>
                        <v-col cols="1">
                            <v-img v-if="defaultLogoA[i - 1]" :src="selectLogo(defaultLogoA[i - 1])" max-height="50"
                                max-width="50"></v-img>
                        </v-col>
                        <v-col cols="1">
                            <v-select v-model="inputScoreA[i - 1]" :items="[0, 1, 2, 3]" label="ScoreA"></v-select>
                        </v-col>

                        <!-- チーム名 -->
                        <v-col cols="5">
                            <v-text-field v-model="inputTeamNameB[i - 1]" label="Team NameB"></v-text-field>
                        </v-col>
                        <!-- チームロゴ -->
                        <v-col cols="3">
                            <v-file-input v-model="logoImageB[i - 1]" label="Logo ImageB"
                                :disabled="defaultLogoB[i - 1]"></v-file-input>
                        </v-col>
                        <v-col cols="2">
                            <v-select v-model="defaultLogoB[i - 1]" :items="logoData" item-text="name" item-value="id"
                                density="compact" label="Default LogoB" :disabled="logoImageB[i - 1]"></v-select>
                        </v-col>
                        <v-col cols="1">
                            <v-img v-if="defaultLogoB[i - 1]" :src="selectLogo(defaultLogoB[i - 1])" max-height="50"
                                max-width="50"></v-img>
                        </v-col>
                        <v-col cols="1">
                            <v-select v-model="inputScoreB[i - 1]" :items="[0, 1, 2, 3]" label="ScoreB"></v-select>
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
    name: 'TodaysResult2',
    head: {
        title: 'Todays Result2',
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
            count: 4,
            inputTeamNameA: [],
            inputTeamNameB: [],
            inputScoreA: [],
            inputScoreB: [],

            logoImageA: [],
            logoImageB: [],
            defaultLogoA: [],
            defaultLogoB: [],

            imageDataURL: null,
            imageName: 'generated_image.png',
            baseImageUrl: '/ink-wave/todays_result/todays_result2.jpg', // ベース画像のURLを設定
            // baseImageUrl: '/ink-wave/todays_result/todays_result2_sample.jpg', // ベース画像のURLを設定
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

                // チームロゴ
                const maxWidth = 172;
                const maxHeight = 172;

                const landingA = 44;
                const landingB = 1692;
                const top = 233;

                for (let i = 0; i < this.count; i++) {
                    const logoA = new Image();
                    const logoB = new Image();

                    if ((this.logoImageA[i] && this.logoImageA[i].type && this.logoImageA[i].type.match('image/')) || this.defaultLogoA[i]) {
                        if (this.logoImageA[i] && this.logoImageA[i].type && this.logoImageA[i].type.match('image/')) {
                            logoA.src = URL.createObjectURL(this.logoImageA[i]); // ファイルからURLを生成
                        } else {
                            logoA.src = this.selectLogo(this.defaultLogoA[i]);
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
                            const y = (maxHeight + (top + (i * 180)) - logoHeight) / 2 + (top + (i * 180)) / 2;
                            ctx1.drawImage(logoA, x, y, logoWidth, logoHeight);
                            if (this.logoImageA[i] && this.logoImageA[i].type && this.logoImageA[i].type.match('image/')) URL.revokeObjectURL(logoA.src); // 不要になったURLを解放
                            this.imageDataURL = canvas.toDataURL();
                        }
                    }

                    
                    if ((this.logoImageB[i] && this.logoImageB[i].type && this.logoImageB[i].type.match('image/')) || this.defaultLogoB[i]) {
                        if (this.logoImageB[i] && this.logoImageB[i].type && this.logoImageB[i].type.match('image/')) {
                            logoB.src = URL.createObjectURL(this.logoImageB[i]); // ファイルからURLを生成
                        } else {
                            logoB.src = this.selectLogo(this.defaultLogoB[i]);
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
                            const y = (maxHeight + (top + (i * 180)) - logoHeight) / 2 + (top + (i * 180)) / 2;
                            ctx1.drawImage(logoB, x, y, logoWidth, logoHeight);
                            if (this.logoImageB[i] && this.logoImageB[i].type && this.logoImageB[i].type.match('image/')) URL.revokeObjectURL(logoB.src); // 不要になったURLを解放
                            this.imageDataURL = canvas.toDataURL();
                        }
                    }

                    // TEAM A
                    ctx1.textAlign = "right";
                    ctx1.font = "bold 50px 'Noto Sans JP', sans-serif";
                    if (this.inputTeamNameA[i] !== undefined) ctx1.fillText(this.inputTeamNameA[i], 775, 338 + (i * 180));

                    // TEAM B
                    ctx1.textAlign = "left";
                    if (this.inputTeamNameB[i] !== undefined) ctx1.fillText(this.inputTeamNameB[i], 1144, 338 + (i * 180));

                    ctx1.font = "bold 110px 'Noto Sans JP', sans-serif";
                    // スコアA
                    if (this.inputScoreA[i] !== undefined) ctx1.fillText(this.inputScoreA[i], 835, 358 + (i * 180));
                    // スコアB
                    if (this.inputScoreB[i] !== undefined) ctx1.fillText(this.inputScoreB[i], 1040, 358 + (i * 180));
                }
                this.imageDataURL = canvas.toDataURL();
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
        },
        selectLogo(selectLogo) {
            const logo = this.logoData.find(logo => logo.id === selectLogo);
            if (logo) {
                return this.defaultLogoPath + logo.image + '.png'
            } else {
                return null
            }
        },
    },
}
</script>

<style scoped>
.confirm-image {
    width: 100%;
    height: auto;
}</style>

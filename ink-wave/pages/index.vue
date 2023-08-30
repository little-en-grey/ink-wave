<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card class="mb-3">
                <v-card-title class="headline">
                    Profile Maker
                </v-card-title>
                <v-card-text>
                    <v-row justify="start">
                        <!-- 名前 -->
                        <v-col cols="12">
                            <v-text-field v-model="inputName" placeholder="10文字以内" maxlength="10"
                                label="Name"></v-text-field>
                        </v-col>

                        <!-- 年齢 -->
                        <v-col cols="6">
                            <v-text-field v-model="inputAge" label="Age" maxlength="5" placeholder="5文字以内"></v-text-field>
                        </v-col>

                        <!-- 性別 -->
                        <v-col cols="6">
                            <v-select v-model="selectGender" :items="genderData" item-text="name" item-value="id"
                                density="compact" label="Gender"></v-select>
                        </v-col>

                        <!-- ボイスチャット -->
                        <v-col cols="12">
                            <v-select v-model="selectVoiceChat" :items="vcData" item-text="name" item-value="id"
                                density="compact" chips multiple label="VC"></v-select>
                        </v-col>

                        <!-- XP -->
                        <v-col cols="6">
                            <v-text-field v-model="inputXpArea" maxlength="6" label="Splat Zones(ガチエリア)"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="inputXpYagura" maxlength="6" label="Tower Control(ガチヤグラ)"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="inputXpHoko" maxlength="6" label="Rainmaker(ガチホコバトル)"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="inputXpAsari" maxlength="6" label="Clam Blitz(ガチアサリ)"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="inputXpFes" maxlength="6" label="Turf War(ナワバリバトル)"></v-text-field>
                        </v-col>

                        <!-- ブキ -->
                        <v-col cols="12">
                            <v-textarea label="Weapon" v-model="inputWeapon" hint="改行不可/52文字まで(13文字ごとに自動で改行されます)"
                                maxlength="52"></v-textarea>
                        </v-col>

                        <!-- Range -->
                        <v-col cols="12" sm="6">
                            <v-select v-model="selectRange" :items="rangeData" item-text="name" item-value="id"
                                density="compact" label="Range"></v-select>
                        </v-col>

                        <!-- 役割 -->
                        <v-col cols="12" sm="6">
                            <v-select v-model="selectRole" :items="roleData" item-text="name" item-value="id"
                                density="compact" label="Role"></v-select>
                        </v-col>

                        <!-- 参加曜日 -->
                        <v-col cols="12">
                            <v-select v-model="selectLeagueDate" :items="dateData" item-text="name" item-value="id"
                                density="compact" chips multiple label="League Date"></v-select>
                        </v-col>

                        <!-- メモ -->
                        <v-col cols="12">
                            <v-textarea label="Memo" v-model="inputMemo" hint="改行不可/180文字まで(30文字ごとに自動で改行されます)"
                                maxlength="180"></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="generateImage"> Generate Image </v-btn>
                </v-card-actions>
            </v-card>
            <v-card v-show="imageDataURL"  class="pt-1 pr-1 pl-1">
                <canvas ref="imageCanvas" class="confirm-image" :width="canvasWidth" :height="canvasHeight"></canvas>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" :href="imageDataURL" :download="imageName" v-if="imageDataURL">Download Image</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'IndexPage',
    head: {
        title: 'Profile Maker',
    },
    data() {
        return {
            // 入力項目
            inputName: '',          // 名前
            inputAge: '',           // 年齢
            selectGender: 0,      // 性別
            selectVoiceChat: [],    // VC
            inputXpArea: '',        // XP（エリア）
            inputXpYagura: '',      // XP（ヤグラ）
            inputXpHoko: '',        // XP（ホコ）
            inputXpAsari: '',       // XP（アサリ）
            inputXpFes: '',         // フェスパワー
            inputWeapon: '',        // 使用ブキ
            selectRange: '',        // 範囲
            selectRole: '',         // 役割
            selectLeagueDate: [],   // 参加リーグ曜日
            inputMemo: '',          // メモ
            genderData: [
                { 'id': 0, 'name': '非公開' },
                { 'id': 1, 'name': '男性' },
                { 'id': 2, 'name': '女性' },
            ],
            vcData: [
                { 'id': 1, 'name': 'Discord' },
                { 'id': 2, 'name': 'LINE' },
                { 'id': 3, 'name': 'Nintendo Switch' },
                { 'id': 0, 'name': 'None' },
            ],
            rangeData: [
                { 'id': 1, 'name': 'SHORT' },
                { 'id': 2, 'name': 'MIDDLE' },
                { 'id': 3, 'name': 'LONG' },
            ],
            roleData: [
                { 'id': 1, 'name': 'ATTACKER' },
                { 'id': 2, 'name': 'SUPPORTER' },
                { 'id': 3, 'name': 'CONTROLLER' },
                { 'id': 4, 'name': 'TANKER' },
                { 'id': 5, 'name': 'MEGAPHONE RUNNER' },
                { 'id': 6, 'name': 'BALANCER' },
            ],
            dateData: [
                { 'id': 1, 'name': 'MON' },
                { 'id': 2, 'name': 'WED' },
                { 'id': 3, 'name': 'FRI' },
            ],

            imageDataURL: null,
            imageName: 'generated_image.png',
            baseImageUrl: '/ink-wave/card.png', // ベース画像のURLを設定
            canvasWidth: 1080, // キャンバスの幅
            canvasHeight: 1920, // キャンバスの高さ
        };
    },
    methods: {
        generateImage() {
            const canvas = this.$refs.imageCanvas;
            if (!canvas || !canvas.getContext) return false;
            const context = canvas.getContext('2d');

            this.width = this.canvasWidth;
            this.height = this.canvasHeight;

            // Draw base image
            const baseImage = new Image();
            baseImage.src = this.baseImageUrl;
            baseImage.onload = () => {
                context.drawImage(baseImage, 0, 0, this.canvasWidth, this.canvasHeight);

                // Draw text
                context.fillStyle = 'white';
                context.font = '28px ＭＳ ゴシック';

                // 円描画用
                context.strokeStyle = "white";
                context.lineWidth = 5;

                // 入力された内容は指定の位置に配置
                let left = 61;
                let x = (174 + left - context.measureText( this.inputAge ).width) / 2 + left / 2;
                context.fillText(this.inputAge, x, 529);

                context.font = '30px ＭＳ ゴシック';
                x = (191 + left - context.measureText( this.inputXpArea ).width) / 2 + left / 2;
                context.fillText(this.inputXpArea, x, 740);
                left += 191 + 2;
                x = (189 + left - context.measureText( this.inputXpYagura ).width) / 2 + left / 2;
                context.fillText(this.inputXpYagura, x, 740);
                left += 189 + 2;
                x = (189 + left - context.measureText( this.inputXpHoko ).width) / 2 + left / 2;
                context.fillText(this.inputXpHoko, x, 740);
                left += 189 + 2;
                x = (189 + left - context.measureText( this.inputXpAsari ).width) / 2 + left / 2;
                context.fillText(this.inputXpAsari, x, 740);
                left += 189 + 2;
                x = (191 + left - context.measureText( this.inputXpFes ).width) / 2 + left / 2;
                context.fillText(this.inputXpFes, x, 740);

                context.font = '42px ＭＳ ゴシック';
                context.fillText(this.inputName, 100, 381);

                const weaponLines = this.inputWeapon.replace(/\n/g, '　').match(/.{1,13}/g) || [];
                let lineHeight = 50;

                for (let i = 0; i < (weaponLines.length > 4 ? 4 : weaponLines.length); i++) {
                    context.fillText(weaponLines[i], 95, 891 + i * lineHeight);
                }

                context.font = '30px ＭＳ ゴシック';
                const memoLines = this.inputMemo.replace(/\n/g, '　').match(/.{1,30}/g) || [];
                lineHeight = 45;

                for (let i = 0; i < (memoLines.length > 6 ? 6 : memoLines.length); i++) {
                    context.fillText(memoLines[i], 95, 1600 + i * lineHeight);
                }

                // Gender描画
                let genderX;
                const genderY = 515;
                context.beginPath();
                switch (this.selectGender) {
                    case 0:
                        genderX = 402;
                        break;
                    case 1:
                        genderX = 309;
                        break;
                    case 2:
                        genderX = 487;
                        break;
                }
                context.arc(genderX, genderY, 40, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
                context.stroke();

                // VC描画
                const vcX = { "0": 944, "1": 630, "2": 732, "3": 833 };
                const vcY = 514;
                this.selectVoiceChat.forEach(item => {
                    if (vcX[item] !== undefined) {
                        context.beginPath();
                        context.arc(vcX[item], vcY, 40, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
                        context.stroke();
                    }
                });

                // Range描画
                const rangeX = 853
                let rangeY;
                context.beginPath();
                switch (this.selectRange) {
                    case 1:
                        rangeY = 875;
                        break;
                    case 2:
                        rangeY = 949;
                        break;
                    case 3:
                        rangeY = 1027;
                        break;
                }
                context.ellipse(rangeX, rangeY, 80, 25, 0, 0, 2 * Math.PI, false);
                context.stroke();

                // Role描画
                let roleX
                const roleY = 1200;
                context.beginPath();
                switch (this.selectRole) {
                    case 1:
                        roleX = 153;
                        break;
                    case 2:
                        roleX = 308;
                        break;
                    case 3:
                        roleX = 461;
                        break;
                    case 4:
                        roleX = 617;
                        break;
                    case 5:
                        roleX = 771;
                        break;
                    case 6:
                        roleX = 927;
                        break;
                }
                context.arc(roleX, roleY, 73, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
                context.stroke();

                // League Date描画
                const dateX = { "1": 254, "2": 541, "3": 826 };
                const dateY = 1420;
                this.selectLeagueDate.forEach(item => {
                    if (dateX[item] !== undefined) {
                        context.beginPath();
                        context.ellipse(dateX[item], dateY, 80, 25, 0, 0, 2 * Math.PI, false);
                        context.stroke();
                    }
                });

                // Update image data URL
                this.imageDataURL = canvas.toDataURL();
            };
        }
    },
}
</script>

<style scoped>.confirm-image {
    width: 100%;
    height: auto;
}</style>

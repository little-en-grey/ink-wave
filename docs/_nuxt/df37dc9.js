(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{307:function(e,t,o){var content=o(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(111).default)("1b1cf56f",content,!1,{sourceMap:!1})},316:function(e,t,o){"use strict";o(307)},317:function(e,t,o){var l=o(110)((function(i){return i[1]}));l.push([e.i,".confirm-image[data-v-21ec59ae]{height:auto;width:100%}",""]),l.locals={},e.exports=l},323:function(e,t,o){"use strict";o.r(t);var l=o(10),n=(o(42),o(15),o(24),o(205),o(26),o(27),o(301),o(206),o(207),{name:"TodaysResult2",head:{title:"Todays Result2"},asyncData:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=document.createElement("link");t.href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap",t.rel="stylesheet",document.head.appendChild(t),t.onload=e}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{count:4,inputTeamNameA:[],inputTeamNameB:[],inputScoreA:[],inputScoreB:[],logoImageA:[],logoImageB:[],defaultLogoA:[],defaultLogoB:[],imageDataURL:null,imageName:"generated_image.png",baseImageUrl:"/ink-wave/todays_result/todays_result2.jpg",defaultLogoPath:"/ink-wave/default_logo/",canvasWidth:1920,canvasHeight:1080,logoData:[{id:null,name:"None...",image:null},{id:1,name:"Blue",image:"logo_a"},{id:2,name:"Red",image:"logo_b"},{id:3,name:"Green",image:"logo_c"},{id:4,name:"Orange",image:"logo_d"}]}},methods:{generateImage:function(){var e=this,canvas=this.$refs.imageCanvas;if(!canvas||!canvas.getContext)return!1;var t=canvas.getContext("2d"),o=new Image;o.src=this.baseImageUrl,o.onload=function(){t.drawImage(o,0,0,e.canvasWidth,e.canvasHeight),t.fillStyle="white";for(var l=172,n=172,c=233,r=function(i){var o=new Image,r=new Image;(e.logoImageA[i]&&e.logoImageA[i].type&&e.logoImageA[i].type.match("image/")||e.defaultLogoA[i])&&(e.logoImageA[i]&&e.logoImageA[i].type&&e.logoImageA[i].type.match("image/")?o.src=URL.createObjectURL(e.logoImageA[i]):o.src=e.selectLogo(e.defaultLogoA[i]),o.onload=function(){var r=l,m=n;if(o.width===o.height)r=o.width<=l?o.width:l,m=o.height<=n?o.height:n;else if(o.width>o.height){r=o.width<=l?o.width:l;var d=o.width/r;m=o.height/d}else{m=o.height<=n?o.height:n;var v=o.height/m;r=o.width/v}var h=(216-r)/2+22,f=(n+(c+180*i)-m)/2+(c+180*i)/2;t.drawImage(o,h,f,r,m),e.logoImageA[i]&&e.logoImageA[i].type&&e.logoImageA[i].type.match("image/")&&URL.revokeObjectURL(o.src),e.imageDataURL=canvas.toDataURL()}),(e.logoImageB[i]&&e.logoImageB[i].type&&e.logoImageB[i].type.match("image/")||e.defaultLogoB[i])&&(e.logoImageB[i]&&e.logoImageB[i].type&&e.logoImageB[i].type.match("image/")?r.src=URL.createObjectURL(e.logoImageB[i]):r.src=e.selectLogo(e.defaultLogoB[i]),r.onload=function(){var o=l,m=n;if(r.width===r.height)o=r.width<=l?r.width:l,m=r.height<=n?r.height:n;else if(r.width>r.height){o=r.width<=l?r.width:l;var d=r.width/o;m=r.height/d}else{m=r.height<=n?r.height:n;var v=r.height/m;o=r.width/v}var h=(1864-o)/2+846,f=(n+(c+180*i)-m)/2+(c+180*i)/2;t.drawImage(r,h,f,o,m),e.logoImageB[i]&&e.logoImageB[i].type&&e.logoImageB[i].type.match("image/")&&URL.revokeObjectURL(r.src),e.imageDataURL=canvas.toDataURL()}),t.textAlign="right",t.font="bold 50px 'Noto Sans JP', sans-serif",void 0!==e.inputTeamNameA[i]&&t.fillText(e.inputTeamNameA[i],775,338+180*i),t.textAlign="left",void 0!==e.inputTeamNameB[i]&&t.fillText(e.inputTeamNameB[i],1144,338+180*i),t.font="bold 110px 'Noto Sans JP', sans-serif",void 0!==e.inputScoreA[i]&&t.fillText(e.inputScoreA[i],835,358+180*i),void 0!==e.inputScoreB[i]&&t.fillText(e.inputScoreB[i],1040,358+180*i)},i=0;i<e.count;i++)r(i);e.imageDataURL=canvas.toDataURL()}},getDefaultLog:function(e){switch(e){case"ブルー":return 1;case"レッド":return 2;case"グリーン":return 3;case"オレンジ":return 4;default:return null}},selectLogo:function(e){var t=this.logoData.find((function(t){return t.id===e}));return t?this.defaultLogoPath+t.image+".png":null}}}),c=(o(316),o(52)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12"}},[t("v-card",{staticClass:"mb-3"},[t("v-card-title",{staticClass:"headline"},[e._v("\n                Todays Result\n            ")]),e._v(" "),t("v-card-text",e._l(e.count,(function(i){return t("v-row",{key:i,attrs:{justify:"start"}},[t("v-col",{attrs:{cols:"12"}},[t("div",{staticClass:"text-subtitle-1"},[e._v("Result"+e._s(i))])]),e._v(" "),t("v-col",{attrs:{cols:"5"}},[t("v-text-field",{attrs:{label:"Team NameA"},model:{value:e.inputTeamNameA[i-1],callback:function(t){e.$set(e.inputTeamNameA,i-1,t)},expression:"inputTeamNameA[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"3"}},[t("v-file-input",{attrs:{label:"Logo ImageA",disabled:e.defaultLogoA[i-1]},model:{value:e.logoImageA[i-1],callback:function(t){e.$set(e.logoImageA,i-1,t)},expression:"logoImageA[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"2"}},[t("v-select",{attrs:{items:e.logoData,"item-text":"name","item-value":"id",density:"compact",label:"Default LogoA",disabled:e.logoImageA[i-1]},model:{value:e.defaultLogoA[i-1],callback:function(t){e.$set(e.defaultLogoA,i-1,t)},expression:"defaultLogoA[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"1"}},[e.defaultLogoA[i-1]?t("v-img",{attrs:{src:e.selectLogo(e.defaultLogoA[i-1]),"max-height":"50","max-width":"50"}}):e._e()],1),e._v(" "),t("v-col",{attrs:{cols:"1"}},[t("v-select",{attrs:{items:[0,1,2,3],label:"ScoreA"},model:{value:e.inputScoreA[i-1],callback:function(t){e.$set(e.inputScoreA,i-1,t)},expression:"inputScoreA[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"5"}},[t("v-text-field",{attrs:{label:"Team NameB"},model:{value:e.inputTeamNameB[i-1],callback:function(t){e.$set(e.inputTeamNameB,i-1,t)},expression:"inputTeamNameB[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"3"}},[t("v-file-input",{attrs:{label:"Logo ImageB",disabled:e.defaultLogoB[i-1]},model:{value:e.logoImageB[i-1],callback:function(t){e.$set(e.logoImageB,i-1,t)},expression:"logoImageB[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"2"}},[t("v-select",{attrs:{items:e.logoData,"item-text":"name","item-value":"id",density:"compact",label:"Default LogoB",disabled:e.logoImageB[i-1]},model:{value:e.defaultLogoB[i-1],callback:function(t){e.$set(e.defaultLogoB,i-1,t)},expression:"defaultLogoB[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"1"}},[e.defaultLogoB[i-1]?t("v-img",{attrs:{src:e.selectLogo(e.defaultLogoB[i-1]),"max-height":"50","max-width":"50"}}):e._e()],1),e._v(" "),t("v-col",{attrs:{cols:"1"}},[t("v-select",{attrs:{items:[0,1,2,3],label:"ScoreB"},model:{value:e.inputScoreB[i-1],callback:function(t){e.$set(e.inputScoreB,i-1,t)},expression:"inputScoreB[i - 1]"}})],1)],1)})),1),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"primary"},on:{click:e.generateImage}},[e._v(" スライド作成 ")])],1)],1),e._v(" "),t("v-card",{staticClass:"pt-1 pr-1 pl-1"},[t("canvas",{ref:"imageCanvas",staticClass:"confirm-image",attrs:{width:e.canvasWidth,height:e.canvasHeight}}),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),e.imageDataURL?t("v-btn",{attrs:{color:"primary",href:e.imageDataURL,download:e.imageName}},[e._v("Download\n                    Image")]):e._e()],1)],1)],1)],1)}),[],!1,null,"21ec59ae",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{300:function(e,t,n){"use strict";n.r(t);n(209),n(303);var o=n(304),r=n(302);r.c.register(r.e,r.i,r.l,r.g);var l={name:"RadarChart",components:{Radar:o.a},props:{chartId:{type:String,default:"radar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:700},height:{type:Number,default:700},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){}}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{r:{pointLabels:{font:{size:22},color:"white"},min:0,max:5,ticks:{display:!1,stepSize:1},grid:{color:"white"},angleLines:{color:"white"}}},plugins:{legend:{display:!1},beforeDraw:function(e){var t=e.ctx,n=e.scale,o=n.xCenter,r=n.yCenter,l=n.drawingArea;t.save(),t.arc(o,r,l,0,2*Math.PI),t.fillStyle="rgba(225, 49, 106, 0.5)",t.fill(),t.restore()}}}}}},c=l,m=n(38),component=Object(m.a)(c,(function(){var e=this;return(0,e._self._c)("Radar",{ref:"imageCanvas",attrs:{id:"test","chart-options":e.chartOptions,"chart-data":e.chartData,"chart-id":e.chartId,"dataset-id-key":e.datasetIdKey,plugins:e.plugins,"css-classes":e.cssClasses,styles:e.styles,width:e.width,height:e.height}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Radar:n(300).default})},305:function(e,t,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(111).default)("3ed2cfb6",content,!1,{sourceMap:!1})},309:function(e,t,n){"use strict";var o=n(2),r=n(4),l=n(39),c=n(28),m=n(37),h=n(215),d=n(10),f=n(3),v=n(214),R=n(139),I=n(310),w=n(311),x=n(83),_=n(312),y=[],L=r(y.sort),k=r(y.push),D=f((function(){y.sort(void 0)})),P=f((function(){y.sort(null)})),N=R("sort"),U=!f((function(){if(x)return x<70;if(!(I&&I>3)){if(w)return!0;if(_)return _<603;var code,e,t,n,o="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)y.push({k:e+n,v:t})}for(y.sort((function(a,b){return b.v-a.v})),n=0;n<y.length;n++)e=y[n].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:D||!P||!N||!U},{sort:function(e){void 0!==e&&l(e);var t=c(this);if(U)return void 0===e?L(t):L(t,e);var n,o,r=[],f=m(t);for(o=0;o<f;o++)o in t&&k(r,t[o]);for(v(r,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:d(t)>d(n)?1:-1}}(e)),n=m(r),o=0;o<n;)t[o]=r[o++];for(;o<f;)h(t,o++);return t}})},310:function(e,t,n){"use strict";var o=n(65).match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},311:function(e,t,n){"use strict";var o=n(65);e.exports=/MSIE|Trident/.test(o)},312:function(e,t,n){"use strict";var o=n(65).match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},316:function(e,t,n){"use strict";n(305)},317:function(e,t,n){var o=n(110)((function(i){return i[1]}));o.push([e.i,".confirm-image[data-v-207930f1]{height:auto;width:100%}.chart-container[data-v-207930f1]{margin:0 auto}.menuable__content__active[data-v-207930f1]{max-height:650px!important}",""]),o.locals={},e.exports=o},325:function(e,t,n){"use strict";n.r(t);var o=n(13),r=(n(52),n(15),n(26),n(27),n(309),n(41),n(208),n(24),n(206),n(301),n(207),n(36),n(43),{name:"OutputTeam",layout:"operation",components:{RadarChart:n(300).default},head:{title:"Output Team"},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(12).then(n.t.bind(null,324,3));case 2:return(t=e.sent).default.sort((function(a,b){var e=a.name.toUpperCase(),t=b.name.toUpperCase();return e<t?-1:e>t?1:0})),e.next=6,new Promise((function(e){var t=document.createElement("link");t.href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap",t.rel="stylesheet",document.head.appendChild(t),t.onload=e}));case 6:return e.abrupt("return",{allWeaponsData:t.default});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{inputPlayerName:["ぷれいやー１","ぷれいやー２","ぷれいやー３","ぷれいやー４","ぷれいやー５"],selectPlayerWeapons:{0:["Shooter_Gravity_00.png","Shooter_Heavy_00.png","Shooter_Heavy_01.png"],1:["Charger_Light_00.png","Charger_LongScope_00.png","Shooter_TripleMiddle_00.png"],2:["Shooter_TripleMiddle_01.png","Shooter_TripleQuick_00.png","Shooter_TripleQuick_01.png"],3:["Shooter_First_01.png","Shooter_First_00.png","Spinner_HyperShort_00.png"],4:["Blaster_LightLong_01.png","Blaster_Precision_00.png","Roller_Normal_00.png"]},selectRange:[1,2,3,2,1],selectRole:["attack","support","control","tank","runner"],inputTeamName:"テーブルパンチ",inputComment:"",inputAchievements:[],inputEntryLine:"",inputFinalWP:"2500.1",inputBestWP:"3000.0",inputSeason:"1",logoImage:null,defaultLogo:1,rankIcon:4,imageDataURL:null,imageName:"generated_image.png",baseImageUrlFamous:"/ink-wave/team_card/team_slide_a.png",baseImageUrlRookie:"/ink-wave/team_card/team_slide_b.png",baseImageUrlRankWeapon:"/ink-wave/team_card/team_slide_d.png",baseImageUrlRank:"/ink-wave/team_card/team_slide_e.png",roleIconPath:"/ink-wave/role_icon/",defaultLogoPath:"/ink-wave/default_logo/",rankIconPath:"/ink-wave/rank_icon/",weaponsIconPath:"/ink-wave/weapons/",canvasWidth:1920,canvasHeight:1080,labelData:[0,0,0,0,0,0],labels:["打開","抑え","ライン管理","維持力","突破力","塗り"],rangeData:[{id:1,name:"SHORT"},{id:2,name:"MIDDLE"},{id:3,name:"LONG"}],roleData:[{tag:"attack",name:"ATTACKER"},{tag:"support",name:"SUPPORTER"},{tag:"control",name:"CONTROLLER"},{tag:"tank",name:"TANKER"},{tag:"runner",name:"MEGAPHONE RUNNER"},{tag:"balance",name:"BALANCER"}],logoData:[{id:null,name:"None...",image:null},{id:1,name:"Blue",image:"logo_a"},{id:2,name:"Red",image:"logo_b"},{id:3,name:"Green",image:"logo_c"},{id:4,name:"Orange",image:"logo_d"}],rankIconData:[{id:null,name:"None...",image:null},{id:1,name:"KRAKEN",image:"RANK1"},{id:2,name:"ORCA",image:"RANK2"},{id:3,name:"SHARK",image:"RANK3"},{id:4,name:"MORAY",image:"RANK4"},{id:5,name:"MANTA",image:"RANK5"},{id:6,name:"PENGUIN",image:"RANK6"},{id:7,name:"JELLYFISH",image:"RANK7"}],chartData:null}},created:function(){this.fillData()},computed:{selectLogo:function(){var e=this,t=this.logoData.find((function(t){return t.id===e.defaultLogo}));return t?this.defaultLogoPath+t.image+".png":null},selectRankIcon:function(){var e=this,t=this.rankIconData.find((function(t){return t.id===e.rankIcon}));return t?this.rankIconPath+t.image+".png":null},myStyles:function(){return{width:"580px",height:"580px",position:"relative"}},menuProps:function(){return{maxHeight:"600"}}},methods:{fillData:function(){this.chartData={labels:this.labels,datasets:[{label:"data",fill:!0,backgroundColor:"rgba(225, 49, 106, 0.5)",borderColor:"rgb(225, 49, 106)",pointBackgroundColor:"rgb(225, 49, 106)",data:this.labelData}]}},generateImage:function(){var e=this,canvas=this.$refs.imageCanvas,t=document.querySelector("#test canvas");if(!canvas||!canvas.getContext)return!1;if(!t||!t.getContext)return!1;var n=canvas.getContext("2d"),o=t.getContext("2d"),r=new Image;r.src=this.baseImageUrlFamous,r.onload=function(){n.drawImage(r,0,0,e.canvasWidth,e.canvasHeight),n.drawImage(o.canvas,1247,369,t.width,t.height),n.fillStyle="white";var l=380,c=380,m=new Image;(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")||e.defaultLogo)&&(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")?m.src=URL.createObjectURL(e.logoImage):m.src=e.selectLogo,m.onload=function(){var t=l,o=c;if(m.width===m.height)t=m.width<=l?m.width:l,o=m.height<=c?m.height:c;else if(m.width>m.height){t=m.width<=l?m.width:l;var r=m.width/t;o=m.height/r}else{o=m.height<=c?m.height:c;var h=m.height/o;t=m.width/h}var d=(435-t)/2+27.5,f=(430-o)/2+25;n.drawImage(m,d,f,t,o),e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")&&URL.revokeObjectURL(m.src),e.imageDataURL=canvas.toDataURL()}),n.font="bold 50px 'Noto Sans JP', sans-serif",n.fillText(e.inputTeamName,512,123),n.font="bold 28px 'Noto Sans JP', sans-serif",e.inputPlayerName.forEach((function(e,t){n.fillText(e,86,563+106*t)}));var h=e;e.selectRange.forEach((function(e,t){var o=h.rangeData.find((function(t){return t.id===e})),r=(618-n.measureText(o.name).width)/2+199;n.fillText(o.name,r,560+106*t)})),e.selectRole.forEach((function(e,t){var o=h.roleData.find((function(t){return t.tag===e}));n.fillText(o.name,762,560+106*t);var r=new Image;r.src=h.roleIconPath+e+".png",r.onload=function(){n.drawImage(r,710,525+106*t,50,50),h.imageDataURL=canvas.toDataURL()}})),n.font="bold 28px 'Noto Sans JP', sans-serif",e.inputAchievements.forEach((function(e,t){n.fillText(e,1208,115+60*t)})),n.font="bold 20px 'Noto Sans JP', sans-serif";var d=e.inputComment.split("\n"),f=[];d.forEach((function(element){for(var i=0;i<element.length;i+=29)f.push(element.slice(i,i+29))}));for(var i=0;i<(f.length>5?5:f.length);i++)n.fillText(f[i],509,239+50*i);e.imageDataURL=canvas.toDataURL()}},generateImageRookie:function(){var e=this,canvas=this.$refs.imageCanvas;if(!canvas||!canvas.getContext)return!1;var t=canvas.getContext("2d"),n=new Image;n.src=this.baseImageUrlRookie,n.onload=function(){canvas.width=e.canvasWidth,canvas.height=e.canvasHeight,t.drawImage(n,0,0,e.canvasWidth,e.canvasHeight);var o=585,r=585,l=new Image;(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")||e.defaultLogo)&&(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")?l.src=URL.createObjectURL(e.logoImage):l.src=e.selectLogo,l.onload=function(){var n=o,c=r;if(l.width===l.height)n=l.width<=o?l.width:o,c=l.height<=r?l.height:r;else if(l.width>l.height){n=l.width<=o?l.width:o;var m=l.width/n;c=l.height/m}else{c=l.height<=r?l.height:r;var h=l.height/c;n=l.width/h}var d=(635-n)/2+25,f=(857-c)/2+136;t.drawImage(l,d,f,n,c),e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")&&URL.revokeObjectURL(l.src),e.imageDataURL=canvas.toDataURL()}),t.fillStyle="white",t.font="bold 60px 'Noto Sans JP', sans-serif",t.fillText(e.inputTeamName,732,280),t.font="bold 28px 'Noto Sans JP', sans-serif",e.inputPlayerName.forEach((function(e,n){t.fillText(e,719,423+106*n)}));var c=e;e.selectRange.forEach((function(e,n){var o=c.rangeData.find((function(t){return t.id===e})),r=(1254-t.measureText(o.name).width)/2+517;t.fillText(o.name,r,421+106*n)})),e.selectRole.forEach((function(e,n){var o=c.roleData.find((function(t){return t.tag===e}));t.fillText(o.name,1395,421+106*n);var r=new Image;r.src=c.roleIconPath+e+".png",r.onload=function(){t.drawImage(r,1348,384+106*n,50,50),c.imageDataURL=canvas.toDataURL()}}))},this.imageDataURL=canvas.toDataURL()},generateImageRankWeapons:function(){var e=this,canvas=this.$refs.imageCanvas;if(!canvas||!canvas.getContext)return!1;var t=canvas.getContext("2d"),n=new Image;n.src=this.baseImageUrlRank,n.onload=function(){t.drawImage(n,0,0,e.canvasWidth,e.canvasHeight),t.fillStyle="white";var o=470,r=470,l=new Image;(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")||e.defaultLogo)&&(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")?l.src=URL.createObjectURL(e.logoImage):l.src=e.selectLogo,l.onload=function(){var n=o,c=r;if(l.width===l.height)n=l.width<=o?l.width:o,c=l.height<=r?l.height:r;else if(l.width>l.height){n=l.width<=o?l.width:o;var m=l.width/n;c=l.height/m}else{c=l.height<=r?l.height:r;var h=l.height/c;n=l.width/h}var d=(580-n)/2+55,f=(677-c)/2+103.5;if(t.drawImage(l,d,f,n,c),e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")&&URL.revokeObjectURL(l.src),e.imageDataURL=canvas.toDataURL(),e.rankIcon){var v=new Image;v.src=e.selectRankIcon,v.onload=function(){t.drawImage(v,210,673,270,270),e.imageDataURL=canvas.toDataURL()}}}),t.font="bold 50px 'Noto Sans JP', sans-serif",t.fillText(e.inputTeamName,682,230),t.font="bold 28px 'Noto Sans JP', sans-serif",e.inputPlayerName.forEach((function(e,n){t.fillText(e,706,377+106*n)}));var c=e;e.selectRange.forEach((function(e,n){var o=c.rangeData.find((function(t){return t.id===e})),r=(1151-t.measureText(o.name).width)/2+485.5;t.fillText(o.name,r,374+106*n)})),e.selectRole.forEach((function(e,n){var o=c.roleData.find((function(t){return t.tag===e}));t.fillText(o.name,1223,374+106*n);var r=new Image;r.src=c.roleIconPath+e+".png",r.onload=function(){t.drawImage(r,1171,339+106*n,50,50),c.imageDataURL=canvas.toDataURL()}}));var m=function(n){e.selectPlayerWeapons[n].forEach((function(e,o){var r=new Image;r.src=c.weaponsIconPath+e,r.onload=function(){t.drawImage(r,1560+95*o,322+106*n,85,85),c.imageDataURL=canvas.toDataURL()}}))};for(var h in e.selectPlayerWeapons)m(h);t.font="bold 50px 'Noto Sans JP', sans-serif";var d=174,f=(155+d-t.measureText(e.inputFinalWP).width)/2+d/2;t.fillText(e.inputFinalWP,f,170),f=(159+(d=359)-t.measureText(e.inputBestWP).width)/2+d/2,t.fillText(e.inputBestWP,f,170),t.font="bold 54px 'Noto Sans JP', sans-serif",t.fillText(e.inputSeason,1178,962),e.imageDataURL=canvas.toDataURL()}},generateImageRank:function(){var e=this,canvas=this.$refs.imageCanvas;if(!canvas||!canvas.getContext)return!1;var t=canvas.getContext("2d"),n=new Image;n.src=this.baseImageUrlRankWeapon,n.onload=function(){t.drawImage(n,0,0,e.canvasWidth,e.canvasHeight),t.fillStyle="white";var o=470,r=470,l=new Image;(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")||e.defaultLogo)&&(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")?l.src=URL.createObjectURL(e.logoImage):l.src=e.selectLogo,l.onload=function(){var n=o,c=r;if(l.width===l.height)n=l.width<=o?l.width:o,c=l.height<=r?l.height:r;else if(l.width>l.height){n=l.width<=o?l.width:o;var m=l.width/n;c=l.height/m}else{c=l.height<=r?l.height:r;var h=l.height/c;n=l.width/h}var d=(613-n)/2+71.5,f=(677-c)/2+103.5;if(t.drawImage(l,d,f,n,c),e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")&&URL.revokeObjectURL(l.src),e.imageDataURL=canvas.toDataURL(),e.rankIcon){var v=new Image;v.src=e.selectRankIcon,v.onload=function(){t.drawImage(v,243,673,270,270),e.imageDataURL=canvas.toDataURL()}}}),t.font="bold 50px 'Noto Sans JP', sans-serif",t.fillText(e.inputTeamName,715,230),t.font="bold 28px 'Noto Sans JP', sans-serif",e.inputPlayerName.forEach((function(e,n){t.fillText(e,739,377+106*n)}));var c=e;e.selectRange.forEach((function(e,n){var o=c.rangeData.find((function(t){return t.id===e})),r=(1253-t.measureText(o.name).width)/2+516.5;t.fillText(o.name,r,374+106*n)})),e.selectRole.forEach((function(e,n){var o=c.roleData.find((function(t){return t.tag===e}));t.fillText(o.name,1395,374+106*n);var r=new Image;r.src=c.roleIconPath+e+".png",r.onload=function(){t.drawImage(r,1343,339+106*n,50,50),c.imageDataURL=canvas.toDataURL()}})),t.font="bold 50px 'Noto Sans JP', sans-serif";var m=207,h=(155+m-t.measureText(e.inputFinalWP).width)/2+m/2;t.fillText(e.inputFinalWP,h,170),h=(159+(m=392)-t.measureText(e.inputBestWP).width)/2+m/2,t.fillText(e.inputBestWP,h,170),t.font="bold 54px 'Noto Sans JP', sans-serif",t.fillText(e.inputSeason,1178,962),e.imageDataURL=canvas.toDataURL()}},inputData:function(){var e=[];this.inputEntryLine&&(e=this.inputEntryLine.split("\t"),this.inputPlayerName=[],this.selectRange=[],this.selectRole=[],e.length>31&&(this.inputTeamName=e[1],this.inputPlayerName.push(e[5],e[11],e[16],e[21]),this.selectRange.push(this.getRange(e[9]),this.getRange(e[14]),this.getRange(e[19]),this.getRange(e[24])),this.selectRole.push(this.getRole(e[10]),this.getRole(e[15]),this.getRole(e[20]),this.getRole(e[25])),"はい"===e[26]&&(this.inputPlayerName.push(e[27]),this.selectRange.push(this.getRange(e[30])),this.selectRole.push(this.getRole(e[31]))),""!==e[3]||(this.defaultLogo=this.getDefaultLog(e[4]))))},getRange:function(e){switch(e){case"SHORT":return 1;case"MIDDLE":return 2;case"LONG":return 3;default:return null}},getRole:function(e){switch(e){case"アタッカー":return"attack";case"サポーター":return"support";case"コントローラー":return"control";case"タンカー":return"tank";case"メガホンランナー":return"runner";case"バランサー":return"balance";default:return null}},getDefaultLog:function(e){switch(e){case"ブルー":return 1;case"レッド":return 2;case"グリーン":return 3;case"オレンジ":return 4;default:return null}}}}),l=(n(316),n(38)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12"}},[t("v-card",{staticClass:"mb-3"},[t("v-card-title",{staticClass:"headline"},[e._v("\n                チーム紹介カード\n            ")]),e._v(" "),t("v-card-text",[t("v-row",{attrs:{justify:"start"}},[t("v-col",{attrs:{cols:"9"}},[t("v-text-field",{attrs:{label:"Entry Line",hint:"申請リストから行コピーして貼り付けしてください"},model:{value:e.inputEntryLine,callback:function(t){e.inputEntryLine=t},expression:"inputEntryLine"}})],1),e._v(" "),t("v-col",{attrs:{cols:"3"}},[t("v-btn",{attrs:{color:"primary"},on:{click:e.inputData}},[e._v(" 申請データを取り込む ")])],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Team Name"},model:{value:e.inputTeamName,callback:function(t){e.inputTeamName=t},expression:"inputTeamName"}})],1),e._v(" "),e._l(5,(function(i){return t("v-col",{key:i,attrs:{cols:"12",sm:"6"}},[t("v-row",{attrs:{justify:"start"}},[t("v-col",{attrs:{cols:"12"}},[t("div",{staticClass:"text-subtitle-1"},[e._v("Player"+e._s(i)+"\n                                    "),1==i?[e._v("(Leader)")]:5==i?[e._v("(Super Sub)")]:e._e()],2)]),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-text-field",{attrs:{maxlength:"10",label:"Name"},model:{value:e.inputPlayerName[i-1],callback:function(t){e.$set(e.inputPlayerName,i-1,t)},expression:"inputPlayerName[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-select",{attrs:{items:e.allWeaponsData,"item-text":"name","item-value":"filename",density:"compact",chips:"",multiple:"",label:"Weapons","menu-props":e.menuProps},model:{value:e.selectPlayerWeapons[i-1],callback:function(t){e.$set(e.selectPlayerWeapons,i-1,t)},expression:"selectPlayerWeapons[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-select",{attrs:{items:e.rangeData,"item-text":"name","item-value":"id",density:"compact",label:"Range"},model:{value:e.selectRange[i-1],callback:function(t){e.$set(e.selectRange,i-1,t)},expression:"selectRange[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-select",{attrs:{items:e.roleData,"item-text":"name","item-value":"tag",density:"compact",label:"Role"},model:{value:e.selectRole[i-1],callback:function(t){e.$set(e.selectRole,i-1,t)},expression:"selectRole[i - 1]"}})],1)],1)],1)})),e._v(" "),t("v-col",{attrs:{cols:"8"}},[t("v-file-input",{attrs:{label:"Logo Image",disabled:e.defaultLogo},model:{value:e.logoImage,callback:function(t){e.logoImage=t},expression:"logoImage"}})],1),e._v(" "),t("v-col",{attrs:{cols:"3"}},[t("v-select",{attrs:{items:e.logoData,"item-text":"name","item-value":"id",density:"compact",label:"Default Logo",disabled:e.logoImage},model:{value:e.defaultLogo,callback:function(t){e.defaultLogo=t},expression:"defaultLogo"}})],1),e._v(" "),t("v-col",{attrs:{cols:"1"}},[e.defaultLogo?t("v-img",{attrs:{src:e.selectLogo,"max-height":"50","max-width":"50"}}):e._e()],1),e._v(" "),t("v-col",{attrs:{cols:"11"}},[t("v-select",{attrs:{items:e.rankIconData,"item-text":"name","item-value":"id",density:"compact",label:"Rank Icon"},model:{value:e.rankIcon,callback:function(t){e.rankIcon=t},expression:"rankIcon"}})],1),e._v(" "),t("v-col",{attrs:{cols:"1"}},[e.rankIcon?t("v-img",{attrs:{src:e.selectRankIcon,"max-height":"50","max-width":"50"}}):e._e()],1),e._v(" "),e._l(3,(function(i){return t("v-col",{key:i,attrs:{cols:"4"}},[t("v-text-field",{attrs:{label:"Achievements"+i},model:{value:e.inputAchievements[i-1],callback:function(t){e.$set(e.inputAchievements,i-1,t)},expression:"inputAchievements[i - 1]"}})],1)})),e._v(" "),t("v-col",{attrs:{cols:"5"}},[t("v-text-field",{attrs:{label:"最終WP"},model:{value:e.inputFinalWP,callback:function(t){e.inputFinalWP=t},expression:"inputFinalWP"}})],1),e._v(" "),t("v-col",{attrs:{cols:"5"}},[t("v-text-field",{attrs:{label:"最終WP"},model:{value:e.inputBestWP,callback:function(t){e.inputBestWP=t},expression:"inputBestWP"}})],1),e._v(" "),t("v-col",{attrs:{cols:"2"}},[t("v-text-field",{attrs:{label:"Season"},model:{value:e.inputSeason,callback:function(t){e.inputSeason=t},expression:"inputSeason"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-textarea",{attrs:{label:"Comment",hint:"145文字まで(29文字ごとに自動で改行されます)",maxlength:"145"},model:{value:e.inputComment,callback:function(t){e.inputComment=t},expression:"inputComment"}})],1),e._v(" "),e._l(6,(function(i){return t("v-col",{key:i,attrs:{cols:"2"}},[t("v-text-field",{attrs:{label:"Label Name"+i},on:{change:e.fillData},model:{value:e.labels[i-1],callback:function(t){e.$set(e.labels,i-1,t)},expression:"labels[i - 1]"}})],1)})),e._v(" "),e._l(e.labels,(function(label,n){return t("v-col",{key:label,attrs:{cols:"2"}},[t("v-text-field",{attrs:{label:label},on:{change:e.fillData},model:{value:e.labelData[n],callback:function(t){e.$set(e.labelData,n,t)},expression:"labelData[index]"}})],1)})),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("RadarChart",{attrs:{styles:e.myStyles,chartData:e.chartData,cssClasses:"chart-container"}})],1)],2)],1),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"primary"},on:{click:e.generateImage}},[e._v(" チャート有スライド作成 ")]),e._v(" "),t("v-btn",{attrs:{color:"secondary"},on:{click:e.generateImageRookie}},[e._v(" チャート無スライド作成 ")]),e._v(" "),t("v-btn",{attrs:{color:"secondary"},on:{click:e.generateImageRank}},[e._v(" ランク有スライド作成 ")]),e._v(" "),t("v-btn",{attrs:{color:"secondary"},on:{click:e.generateImageRankWeapons}},[e._v(" ランクブキ有スライド作成 ")])],1)],1),e._v(" "),t("v-card",{directives:[{name:"show",rawName:"v-show",value:e.imageDataURL,expression:"imageDataURL"}],staticClass:"pt-1 pr-1 pl-1"},[t("canvas",{ref:"imageCanvas",staticClass:"confirm-image",attrs:{width:e.canvasWidth,height:e.canvasHeight}}),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),e.imageDataURL?t("v-btn",{attrs:{color:"primary",href:e.imageDataURL,download:e.imageName}},[e._v("Download\n                    Image")]):e._e()],1)],1)],1)],1)}),[],!1,null,"207930f1",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(e,t,n){"use strict";n.r(t);n(206),n(301);var l=n(304),o=n(303);o.c.register(o.e,o.i,o.l,o.g);var r={name:"RadarChart",components:{Radar:l.a},props:{chartId:{type:String,default:"radar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:700},height:{type:Number,default:700},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){}}},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{r:{pointLabels:{font:{size:22},color:"white"},min:0,max:5,ticks:{display:!1,stepSize:1},grid:{color:"white"},angleLines:{color:"white"}}},plugins:{legend:{display:!1},beforeDraw:function(e){var t=e.ctx,n=e.scale,l=n.xCenter,o=n.yCenter,r=n.drawingArea;t.save(),t.arc(l,o,r,0,2*Math.PI),t.fillStyle="rgba(225, 49, 106, 0.5)",t.fill(),t.restore()}}}}}},c=r,m=n(53),component=Object(m.a)(c,(function(){var e=this;return(0,e._self._c)("Radar",{ref:"imageCanvas",attrs:{id:"test","chart-options":e.chartOptions,"chart-data":e.chartData,"chart-id":e.chartId,"dataset-id-key":e.datasetIdKey,plugins:e.plugins,"css-classes":e.cssClasses,styles:e.styles,width:e.width,height:e.height}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Radar:n(300).default})},305:function(e,t,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(112).default)("01f06946",content,!1,{sourceMap:!1})},310:function(e,t,n){"use strict";n(305)},311:function(e,t,n){var l=n(111)((function(i){return i[1]}));l.push([e.i,".confirm-image[data-v-1697fe0f]{height:auto;width:100%}.chart-container[data-v-1697fe0f]{margin:0 auto}",""]),l.locals={},e.exports=l},315:function(e,t,n){"use strict";n.r(t);var l=n(10),o=(n(43),n(15),n(27),n(28),n(212),n(24),n(205),n(307),n(209),n(37),n(39),n(42),{name:"OutputTeam",components:{RadarChart:n(300).default},head:{title:"Output Team"},asyncData:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(10).then(n.t.bind(null,314,3));case 2:return t=e.sent,e.next=5,new Promise((function(e){var t=document.createElement("link");t.href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap",t.rel="stylesheet",document.head.appendChild(t),t.onload=e}));case 5:return e.abrupt("return",{allWeaponsData:t.default});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{inputPlayerName:[],selectPlayerWeapons:{},selectRange:[],selectRole:[],inputTeamName:"",inputComment:"",inputAchievements:[],logoImage:null,defaultLogo:null,imageDataURL:null,imageName:"generated_image.png",baseImageUrlFamous:"/ink-wave/team_card/team_slide_a.png",baseImageUrlRookie:"/ink-wave/team_card/team_slide_b.png",roleIconPath:"/ink-wave/role_icon/",defaultLogoPath:"/ink-wave/default_logo/",canvasWidth:1920,canvasHeight:1080,labelData:[0,0,0,0,0,0],labels:["打開","抑え","ライン管理","維持力","突破力","塗り"],rangeData:[{id:1,name:"SHORT"},{id:2,name:"MIDDLE"},{id:3,name:"LONG"}],roleData:[{tag:"attack",name:"ATTACKER"},{tag:"support",name:"SUPPORTER"},{tag:"control",name:"CONTROLLER"},{tag:"tank",name:"TANKER"},{tag:"runner",name:"MEGAPHONE RUNNER"},{tag:"balance",name:"BALANCER"}],logoData:[{id:null,name:"None...",image:null},{id:1,name:"Blue",image:"logo_a"},{id:2,name:"Red",image:"logo_b"},{id:3,name:"Green",image:"logo_c"},{id:4,name:"Orange",image:"logo_d"}],chartData:null}},created:function(){this.fillData()},computed:{selectLogo:function(){var e=this,t=this.logoData.find((function(t){return t.id===e.defaultLogo}));return t?this.defaultLogoPath+t.image+".png":null},myStyles:function(){return{width:"580px",height:"580px",position:"relative"}}},methods:{fillData:function(){this.chartData={labels:this.labels,datasets:[{label:"data",fill:!0,backgroundColor:"rgba(225, 49, 106, 0.5)",borderColor:"rgb(225, 49, 106)",pointBackgroundColor:"rgb(225, 49, 106)",data:this.labelData}]}},generateImage:function(){var e=this,canvas=this.$refs.imageCanvas,t=document.querySelector("#test canvas");if(!canvas||!canvas.getContext)return!1;if(!t||!t.getContext)return!1;var n=canvas.getContext("2d"),l=t.getContext("2d"),o=new Image;o.src=this.baseImageUrlFamous,o.onload=function(){n.drawImage(o,0,0,e.canvasWidth,e.canvasHeight),n.drawImage(l.canvas,1247,369,t.width,t.height),n.fillStyle="white";var r=380,c=380,m=new Image;(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")||e.defaultLogo)&&(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")?m.src=URL.createObjectURL(e.logoImage):m.src=e.selectLogo,m.onload=function(){var t=r,l=c;if(m.width===m.height)t=m.width<=r?m.width:r,l=m.height<=c?m.height:c;else if(m.width>m.height){t=m.width<=r?m.width:r;var o=m.width/t;l=m.height/o}else{l=m.height<=c?m.height:c;var d=m.height/l;t=m.width/d}var h=(435-t)/2+27.5,f=(430-l)/2+25;n.drawImage(m,h,f,t,l),e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")&&URL.revokeObjectURL(m.src),e.imageDataURL=canvas.toDataURL()}),n.font="bold 36px 'Noto Sans JP', sans-serif",n.fillText(e.inputTeamName,512,116),n.font="bold 28px 'Noto Sans JP', sans-serif",e.inputPlayerName.forEach((function(e,t){n.fillText(e,86,563+106*t)}));var d=e;n.font="28px 'Noto Sans JP', sans-serif",e.selectRange.forEach((function(e,t){var l=d.rangeData.find((function(t){return t.id===e})),o=(618-n.measureText(l.name).width)/2+199;n.fillText(l.name,o,560+106*t)})),e.selectRole.forEach((function(e,t){var l=d.roleData.find((function(t){return t.tag===e}));n.fillText(l.name,762,560+106*t);var o=new Image;o.src=d.roleIconPath+e+".png",o.onload=function(){n.drawImage(o,710,525+106*t,50,50),d.imageDataURL=canvas.toDataURL()}})),n.font="bold 28px 'Noto Sans JP', sans-serif",e.inputAchievements.forEach((function(e,t){n.fillText(e,1208,115+60*t)})),n.font="bold 20px 'Noto Sans JP', sans-serif";var h=e.inputComment.split("\n"),f=[];h.forEach((function(element){for(var i=0;i<element.length;i+=29)f.push(element.slice(i,i+29))}));for(var i=0;i<(f.length>5?5:f.length);i++)n.fillText(f[i],509,239+50*i);e.imageDataURL=canvas.toDataURL()}},generateImageRookie:function(){var e=this,canvas=this.$refs.imageCanvas;if(!canvas||!canvas.getContext)return!1;var t=canvas.getContext("2d"),n=new Image;n.src=this.baseImageUrlRookie,n.onload=function(){canvas.width=e.canvasWidth,canvas.height=e.canvasHeight,t.drawImage(n,0,0,e.canvasWidth,e.canvasHeight);var l=450,o=450,r=new Image;(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")||e.defaultLogo)&&(e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")?r.src=URL.createObjectURL(e.logoImage):r.src=e.selectLogo,r.onload=function(){var n=l,c=o;if(r.width===r.height)n=r.width<=l?r.width:l,c=r.height<=o?r.height:o;else if(r.width>r.height){n=r.width<=l?r.width:l;var m=r.width/n;c=r.height/m}else{c=r.height<=o?r.height:o;var d=r.height/c;n=r.width/d}var h=(609-n)/2+79.5,f=(763-c)/2+156.5;t.drawImage(r,h,f,n,c),e.logoImage&&e.logoImage.type&&e.logoImage.type.match("image/")&&URL.revokeObjectURL(r.src),e.imageDataURL=canvas.toDataURL()}),t.fillStyle="white",t.font="bold 36px 'Noto Sans JP', sans-serif",t.fillText(e.inputTeamName,732,270),t.font="bold 28px 'Noto Sans JP', sans-serif",e.inputPlayerName.forEach((function(e,n){t.fillText(e,719,423+106*n)}));var c=e;t.font="28px 'Noto Sans JP', sans-serif",e.selectRange.forEach((function(e,n){var l=c.rangeData.find((function(t){return t.id===e})),o=(1254-t.measureText(l.name).width)/2+517;t.fillText(l.name,o,421+106*n)})),e.selectRole.forEach((function(e,n){var l=c.roleData.find((function(t){return t.tag===e}));t.fillText(l.name,1395,421+106*n);var o=new Image;o.src=c.roleIconPath+e+".png",o.onload=function(){t.drawImage(o,1348,384+106*n,50,50),c.imageDataURL=canvas.toDataURL()}}))},this.imageDataURL=canvas.toDataURL()}}}),r=(n(310),n(53)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12"}},[t("v-card",{staticClass:"mb-3"},[t("v-card-title",{staticClass:"headline"},[e._v("\n                チーム紹介カード\n            ")]),e._v(" "),t("v-card-text",[t("v-row",{attrs:{justify:"start"}},[t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Team Name"},model:{value:e.inputTeamName,callback:function(t){e.inputTeamName=t},expression:"inputTeamName"}})],1),e._v(" "),e._l(5,(function(i){return t("v-col",{key:i,attrs:{cols:"12",sm:"6"}},[t("v-row",{attrs:{justify:"start"}},[t("v-col",{attrs:{cols:"12"}},[t("div",{staticClass:"text-subtitle-1"},[e._v("Player"+e._s(i)+"\n                                    "),1==i?[e._v("(Leader)")]:5==i?[e._v("(Super Sub)")]:e._e()],2)]),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-text-field",{attrs:{maxlength:"10",label:"Name"},model:{value:e.inputPlayerName[i-1],callback:function(t){e.$set(e.inputPlayerName,i-1,t)},expression:"inputPlayerName[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-select",{attrs:{items:e.allWeaponsData,"item-text":"name","item-value":"id",density:"compact",chips:"",multiple:"",label:"Weapons"},model:{value:e.selectPlayerWeapons[i-1],callback:function(t){e.$set(e.selectPlayerWeapons,i-1,t)},expression:"selectPlayerWeapons[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-select",{attrs:{items:e.rangeData,"item-text":"name","item-value":"id",density:"compact",label:"Range"},model:{value:e.selectRange[i-1],callback:function(t){e.$set(e.selectRange,i-1,t)},expression:"selectRange[i - 1]"}})],1),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-select",{attrs:{items:e.roleData,"item-text":"name","item-value":"tag",density:"compact",label:"Role"},model:{value:e.selectRole[i-1],callback:function(t){e.$set(e.selectRole,i-1,t)},expression:"selectRole[i - 1]"}})],1)],1)],1)})),e._v(" "),t("v-col",{attrs:{cols:"8"}},[t("v-file-input",{attrs:{label:"Logo Image",disabled:e.defaultLogo},model:{value:e.logoImage,callback:function(t){e.logoImage=t},expression:"logoImage"}})],1),e._v(" "),t("v-col",{attrs:{cols:"3"}},[t("v-select",{attrs:{items:e.logoData,"item-text":"name","item-value":"id",density:"compact",label:"Default Logo",disabled:e.logoImage},model:{value:e.defaultLogo,callback:function(t){e.defaultLogo=t},expression:"defaultLogo"}})],1),e._v(" "),t("v-col",{attrs:{cols:"1"}},[e.defaultLogo?t("v-img",{attrs:{src:e.selectLogo,"max-height":"50","max-width":"50"}}):e._e()],1),e._v(" "),e._l(3,(function(i){return t("v-col",{key:i,attrs:{cols:"4"}},[t("v-text-field",{attrs:{label:"Achievements"+i},model:{value:e.inputAchievements[i-1],callback:function(t){e.$set(e.inputAchievements,i-1,t)},expression:"inputAchievements[i - 1]"}})],1)})),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-textarea",{attrs:{label:"Comment",hint:"145文字まで(29文字ごとに自動で改行されます)",maxlength:"145"},model:{value:e.inputComment,callback:function(t){e.inputComment=t},expression:"inputComment"}})],1),e._v(" "),e._l(6,(function(i){return t("v-col",{key:i,attrs:{cols:"2"}},[t("v-text-field",{attrs:{label:"Label Name"+i},on:{change:e.fillData},model:{value:e.labels[i-1],callback:function(t){e.$set(e.labels,i-1,t)},expression:"labels[i - 1]"}})],1)})),e._v(" "),e._l(e.labels,(function(label,n){return t("v-col",{key:label,attrs:{cols:"2"}},[t("v-text-field",{attrs:{label:label},on:{change:e.fillData},model:{value:e.labelData[n],callback:function(t){e.$set(e.labelData,n,t)},expression:"labelData[index]"}})],1)})),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("RadarChart",{attrs:{styles:e.myStyles,chartData:e.chartData,cssClasses:"chart-container"}})],1)],2)],1),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"primary"},on:{click:e.generateImage}},[e._v(" チャート有スライド作成 ")]),e._v(" "),t("v-btn",{attrs:{color:"secondary"},on:{click:e.generateImageRookie}},[e._v(" チャート無スライド作成 ")])],1)],1),e._v(" "),t("v-card",{staticClass:"pt-1 pr-1 pl-1"},[t("canvas",{ref:"imageCanvas",staticClass:"confirm-image",attrs:{width:e.canvasWidth,height:e.canvasHeight}}),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),e.imageDataURL?t("v-btn",{attrs:{color:"primary",href:e.imageDataURL,download:e.imageName}},[e._v("Download\n                    Image")]):e._e()],1)],1)],1)],1)}),[],!1,null,"1697fe0f",null);t.default=component.exports}}]);
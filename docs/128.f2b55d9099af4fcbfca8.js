(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{L6id:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),a=function(){},o=t("pMnS"),e=t("ntG5"),i=t("M9A9"),r=t("ZYCi"),c=(t("OO+k"),t("tBOM")),s=function(l,n,t,u){return new(t||(t=Promise))(function(a,o){function e(l){try{r(u.next(l))}catch(l){o(l)}}function i(l){try{r(u.throw(l))}catch(l){o(l)}}function r(l){l.done?a(l.value):new t(function(n){n(l.value)}).then(e,i)}r((u=u.apply(l,n||[])).next())})},p=function(l,n){var t,u,a,o,e={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,u&&(a=u[2&o[0]?"return":o[0]?"throw":"next"])&&!(a=a.call(u,o[1])).done)return a;switch(u=0,a&&(o=[0,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return e.label++,{value:o[1],done:!1};case 5:e.label++,u=o[1],o=[0];continue;case 7:o=e.ops.pop(),e.trys.pop();continue;default:if(!(a=(a=e.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){e=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){e.label=o[1];break}if(6===o[0]&&e.label<a[1]){e.label=a[1],a=o;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(o);break}a[2]&&e.ops.pop(),e.trys.pop();continue}o=n.call(l,e)}catch(l){o=[6,l],u=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},h=function(){function l(l,n,t){this.loadingCtrl=l,this.toastCtrl=n,this.platform=t}return l.prototype.ngOnInit=function(){return s(this,void 0,void 0,function(){return p(this,function(l){switch(l.label){case 0:return[4,this.platform.ready()];case 1:return l.sent(),[4,this.loadMap()];case 2:return l.sent(),[2]}})})},l.prototype.loadMap=function(){this.map=c.c.create("map_canvas",{camera:{target:{lat:43.0741704,lng:-89.3809802},zoom:18,tilt:30},API_KEY_FOR_BROWSER:"(YOUR_API_KEY_IS_HERE)"})},l.prototype.onButtonClick=function(){return s(this,void 0,void 0,function(){var l,n=this;return p(this,function(t){switch(t.label){case 0:return this.map.clear(),l=this,[4,this.loadingCtrl.create({content:"Please wait..."})];case 1:return l.loading=t.sent(),[4,this.loading.present()];case 2:return t.sent(),this.map.getMyLocation().then(function(l){n.loading.dismiss(),console.log(JSON.stringify(l,null,2)),n.map.animateCamera({target:l.latLng,zoom:17,tilt:30}).then(function(){var t=n.map.addMarkerSync({title:"@ionic-native/google-maps plugin!",snippet:"This plugin is awesome!",position:l.latLng,animation:c.d.BOUNCE});t.showInfoWindow(),t.on(c.e.MARKER_CLICK).subscribe(function(){n.showToast("clicked!")})})}).catch(function(l){n.loading.dismiss(),n.showToast(l.error_message)}),[2]}})})},l.prototype.showToast=function(l){return s(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.toastCtrl.create({message:l,duration:2e3,position:"middle"})];case 1:return n.sent().present(),[2]}})})},l}(),d=t("Eq7r"),f=t("P87I"),g=t("YxxD"),m=u.Ja({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:90%;height:80%;border:1px solid red}"]],data:{}});function b(l){return u.Za(0,[(l()(),u.La(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),u.Ka(1,16384,null,0,e.x,[u.k],null,null),(l()(),u.La(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),u.Ka(3,16384,null,0,e.Xa,[u.k],null,null),(l()(),u.La(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),u.Ka(5,16384,null,0,e.f,[],null,null),(l()(),u.La(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),u.Ka(7,16384,null,0,e.O,[u.k],null,null),(l()(),u.La(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),u.Ka(9,16384,null,0,e.Ya,[u.k],null,null),(l()(),u.Ya(-1,null,[" Home "])),(l()(),u.La(11,0,null,null,18,"ion-content",[["padding",""]],null,null,null,null,null)),u.Ka(12,16384,null,0,e.q,[u.k],null,null),(l()(),u.La(13,0,null,null,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/home/home.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Ya(-1,null,["[source code]"])),(l()(),u.La(15,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Ya(-1,null,["Ionic GoogleMaps Demo"])),(l()(),u.La(17,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.Ya(-1,null,[" The "])),(l()(),u.La(19,0,null,null,1,"a",[["href","https://github.com/ionic-team/ionic-native-google-maps"]],null,null,null,null,null)),(l()(),u.Ya(-1,null,["@ionic-native/google-maps"])),(l()(),u.Ya(-1,null,[" plugin and the "])),(l()(),u.La(22,0,null,null,1,"a",[["href","https://github.com/mapsplugin/cordova-plugin-googlemaps"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Ya(-1,null,["cordova-plugin-googlemaps"])),(l()(),u.Ya(-1,null,[" are able to display Google Maps in your Cordova application. One source code, then run it browser, Android and iOS! "])),(l()(),u.La(25,0,null,null,4,"div",[["id","map_canvas"]],null,null,null,null,null)),(l()(),u.La(26,0,null,null,3,"ion-button",[["ion-button",""]],null,[[null,"click"]],function(l,n,t){var a=!0,o=l.component;return"click"===n&&(a=!1!==u.Ta(l,28).onClick(t)&&a),"click"===n&&(a=!1!==o.onButtonClick()&&a),a},null,null)),u.Ka(27,16384,null,0,e.e,[u.k],null,null),u.Ka(28,16384,null,0,i.a,[[2,r.l],u.k],null,null),(l()(),u.Ya(-1,null,["Demo"]))],null,null)}var v=u.Ha("app-home",h,function(l){return u.Za(0,[(l()(),u.La(0,0,null,null,1,"app-home",[],null,null,null,b,m)),u.Ka(1,114688,null,0,h,[d.a,f.a,g.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),w=t("Ip0R"),k=t("gIcY"),y=t("95zI"),S=t("9opb"),L=t("apKv"),Y=t("B4/3");t.d(n,"HomePageModuleNgFactory",function(){return C});var C=u.Ia(a,[],function(l){return u.Ra([u.Sa(512,u.j,u.X,[[8,[o.a,v]],[3,u.j],u.v]),u.Sa(4608,w.k,w.j,[u.s,[2,w.p]]),u.Sa(4608,k.d,k.d,[]),u.Sa(4608,y.a,y.a,[u.x,u.g]),u.Sa(4608,S.a,S.a,[y.a,u.j,u.p]),u.Sa(4608,L.a,L.a,[y.a,u.j,u.p]),u.Sa(1073742336,w.b,w.b,[]),u.Sa(1073742336,k.c,k.c,[]),u.Sa(1073742336,k.a,k.a,[]),u.Sa(1073742336,Y.a,Y.a,[]),u.Sa(1073742336,r.n,r.n,[[2,r.t],[2,r.l]]),u.Sa(1073742336,a,a,[]),u.Sa(1024,r.j,function(){return[[{path:"",component:h}]]},[])])})}}]);
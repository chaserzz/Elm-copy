(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26917dd4"],{"030e":function(t,s,n){},"07c2":function(t,s,n){"use strict";var i=n("0cf0"),e=n.n(i);e.a},"0cf0":function(t,s,n){},"0e06":function(t,s,n){},1899:function(t,s,n){t.exports=n.p+"img/Load.db638609.jpg"},"19a2":function(t,s,n){"use strict";var i=n("4213"),e=n.n(i);e.a},"1d7a":function(t,s,n){"use strict";var i=n("0e06"),e=n.n(i);e.a},4213:function(t,s,n){},"4ee2":function(t,s,n){"use strict";n.r(s);var i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"shopDetail"},[n("shop-detail-nav-bar"),n("scroll",{attrs:{id:"scroll"}},[t.sonRefresh?n("shop-active",{attrs:{info:t.activeInfo}}):t._e(),t.sonRefresh?n("shop-food-watch",{attrs:{watchInfo:t.watchInfo}}):t._e(),t.sonRefresh?n("shop-info",{attrs:{info:t.shopDetailInfo}}):t._e()],1)],1)},e=[],a=(n("b0c0"),n("a9e3"),n("c413")),o=n("9fb0"),c=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("nav-bar",{staticClass:"navBar"},[n("div",{staticClass:"left",attrs:{slot:"left"},on:{click:function(s){return t.goBack()}},slot:"left"},[n("svg",{staticClass:"icon",attrs:{t:"1594982764660",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2066",width:"18",height:"18"}},[n("path",{attrs:{d:"M256 512l512 512 0-135.776-376.224-376.224 376.224-376.256 0-135.745z","p-id":"2067",fill:"#ffffff"}})])]),n("div",{staticClass:"center",attrs:{slot:"center"},slot:"center"},[n("span",[t._v("商家详情")])]),n("div",{staticClass:"right",attrs:{slot:"right"},slot:"right"})])],1)},r=[],h=n("7fae"),l={name:"ShopDetailNavBar",components:{NavBar:h["a"]},data:function(){return{}},computed:{},methods:{goBack:function(){this.$router.go(-1)}}},u=l,f=(n("a4aa"),n("2877")),p=Object(f["a"])(u,c,r,!1,null,"cdcbe83e",null),d=p.exports,v=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"shop_active"},[n("header",[t._v(" 活动与属性 ")]),n("section",[n("ul",{staticClass:"container"},t._l(t.Info.active,(function(s,i){return n("li",{key:i},[n("span",{staticClass:"icon",style:{backgroundColor:s.icon_color}},[t._v(" "+t._s(s.icon_name)+" ")]),n("span",{staticClass:"active_desc"},[t._v(" "+t._s(s.description+"(APP专享)")+" ")])])})),0),n("ul",{staticClass:"container"},t._l(t.Info.supports,(function(s,i){return n("li",{key:i},[n("span",{staticClass:"icon",style:{backgroundColor:s.icon_color}},[t._v(" "+t._s(s.icon_name)+" ")]),n("span",{staticClass:"active_desc"},[t._v(" "+t._s(s.description)+" ")])])})),0)])])},g=[],_={name:"ShopActive",props:{Info:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{}},m=_,w=(n("07c2"),Object(f["a"])(m,v,g,!1,null,"ab1908e4",null)),b=w.exports,I=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"food_watch"},[n("header",[n("section",{staticClass:"shop_status_header",on:{click:function(s){return t.goShopSafe(t.watchInfo.status)}}},[n("span",{staticClass:"shop_detail_title"},[t._v("食品监督安全公示")]),n("div",[n("span",{staticClass:"identification_detail"},[t._v("企业认证详情 ")]),n("svg",{staticClass:"description_arrow",attrs:{width:".9rem",height:".9rem",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("path",{attrs:{d:"M0 0 L8 7 L0 14",stroke:"#bbb","stroke-width":"1.5",fill:"none"}})])])])]),n("section",{staticClass:"shop_statu_detail"},[n("div",[1==t.watchInfo.status?n("svg",{staticClass:"icon",attrs:{t:"1601892805594",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1671",width:"2.5rem",height:"2.5rem"}},[n("path",{attrs:{d:"M508.928 14.336C232.448 14.336 8.192 239.616 8.192 515.072s225.28 500.736 500.736 500.736 500.736-225.28 500.736-500.736S785.408 14.336 508.928 14.336zM262.144 421.888c0-32.768 26.624-59.392 59.392-59.392s59.392 26.624 59.392 59.392-25.6 59.392-59.392 59.392-59.392-26.624-59.392-59.392zM716.8 726.016c-47.104 66.56-123.904 107.52-204.8 107.52-84.992 0-163.84-43.008-209.92-114.688-8.192-12.288-4.096-27.648 7.168-35.84 12.288-8.192 27.648-4.096 35.84 7.168 36.864 57.344 99.328 91.136 166.912 91.136 64.512 0 125.952-31.744 162.816-84.992 8.192-11.264 24.576-14.336 35.84-6.144 11.264 8.192 14.336 24.576 6.144 35.84zM678.912 481.28c-32.768 0-59.392-26.624-59.392-59.392s26.624-59.392 59.392-59.392c32.768 0 59.392 26.624 59.392 59.392S711.68 481.28 678.912 481.28z",fill:"rgb(126, 211, 33)","p-id":"1672"}})]):n("svg",{staticClass:"icon",attrs:{t:"1601893909586",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1864",width:"2.5rem",height:"2.5rem"}},[n("path",{attrs:{d:"M512 1013.76C233.472 1013.76 7.168 787.456 7.168 508.928S233.472 4.096 512 4.096s504.832 226.304 504.832 504.832S790.528 1013.76 512 1013.76z m0-957.44C262.144 56.32 59.392 259.072 59.392 508.928S262.144 961.536 512 961.536s452.608-202.752 452.608-452.608S761.856 56.32 512 56.32z",fill:"#36A197","p-id":"1865"}}),n("path",{attrs:{d:"M514.048 4.096C234.496 4.096 7.168 231.424 7.168 510.976s227.328 506.88 506.88 506.88 506.88-227.328 506.88-506.88S793.6 4.096 514.048 4.096zM265.216 416.768c0-32.768 26.624-60.416 60.416-60.416 32.768 0 60.416 26.624 60.416 60.416s-26.624 60.416-60.416 60.416c-33.792 0-60.416-26.624-60.416-60.416z m450.56 382.976c-12.288 8.192-27.648 5.12-35.84-6.144-35.84-52.224-101.376-86.016-167.936-86.016-65.536 0-126.976 31.744-164.864 86.016-5.12 7.168-13.312 11.264-21.504 11.264-5.12 0-10.24-1.024-15.36-5.12-11.264-8.192-14.336-24.576-6.144-35.84C351.232 695.296 429.056 655.36 512 655.36c82.944 0 164.864 41.984 210.944 108.544 7.168 11.264 4.096 27.648-7.168 35.84z m-30.72-322.56c-32.768 0-60.416-26.624-60.416-60.416s26.624-60.416 60.416-60.416 60.416 26.624 60.416 60.416-26.624 60.416-60.416 60.416z",fill:"rgb(208, 2, 27)","p-id":"1866"}})])]),n("div",{staticClass:"check_date"},[n("p",[n("span",[t._v("监督检查结果：")]),1==t.watchInfo.status?n("span",{staticClass:"shop_status_well"},[t._v("良好")]):n("span",{staticClass:"shop_status_bad"},[t._v("差")])]),n("p",[n("span",[t._v("检查日期：")]),n("span",[t._v(t._s(t.watchInfo.identification.identificate_date&&t.watchInfo.identification.identificate_date.split("T")[0]))])])])])])},C=[],S={name:"ShopFoodWatch",props:{watchInfo:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{goShopSafe:function(t){this.$router.push({path:"/shopSafe/"+t})}}},k=S,O=(n("7ada"),Object(f["a"])(k,I,C,!1,null,"ba03f6e8",null)),j=O.exports,x=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"shop_info"},[n("header",[t._v("商家信息")]),n("ul",[n("li",[n("p",[t._v("商店名字:")]),n("span",[t._v(t._s(t.info.name))])]),n("li",[n("p",[t._v("地址:")]),n("span",[t._v(t._s(t.info.address))])]),n("li",[n("p",[t._v("营业时间:")]),n("span",[t._v(t._s(t.info.opening_time))])]),n("li",[n("p",[t._v("营业执照")]),n("div",{on:{click:function(s){return t.lisenceClick(0)}}},[n("svg",{staticClass:"description_arrow",attrs:{width:".9rem",height:".9rem",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("path",{attrs:{d:"M0 0 L8 7 L0 14",stroke:"#bbb","stroke-width":"1.5",fill:"none"}})])])]),n("li",[n("p",[t._v("餐饮许可证")]),n("div",{on:{click:function(s){return t.lisenceClick(1)}}},[n("svg",{staticClass:"description_arrow",attrs:{width:".9rem",height:".9rem",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("path",{attrs:{d:"M0 0 L8 7 L0 14",stroke:"#bbb","stroke-width":"1.5",fill:"none"}})])])])]),t.showLicense?n("section",{staticClass:"license_container",on:{click:function(s){return t.hiddenLicense()}}},[n("img",{staticClass:"license",attrs:{src:t.imgPath},on:{click:function(s){return s.stopPropagation(),t.Stop()},error:function(s){return t.imgOnerror(s)}}})]):t._e()])},L=[],D={name:"ShopInfo",props:{info:{type:Object,defaulte:function(){return{}}}},data:function(){return{imgPath:"https://elm.cangdu.org/img/",showLicense:!1,defaultImg:n("1899")}},methods:{lisenceClick:function(t){this.showLicense=!0,this.imgPath="https://elm.cangdu.org/img/",this.imgPath=0!==t?this.imgPath+this.info.license.catering_service_license_image:this.imgPath+this.info.license.business_license_image},imgOnerror:function(t){var s=t.srcElement;s.src=this.defaultImg,s.onerror=null},hiddenLicense:function(){this.showLicense=!1},Stop:function(){}}},z=D,M=(n("94c5"),Object(f["a"])(z,x,L,!1,null,"2451ff2c",null)),y=M.exports,B={name:"ShopDetail",components:{ShopDetailNavBar:d,ShopActive:b,ShopFoodWatch:j,ShopInfo:y,scroll:o["a"]},data:function(){return{shopInfo:null,shopId:0,activeInfo:{},sonRefresh:!1,watchInfo:{},shopDetailInfo:{},imgPath:""}},computed:{},methods:{_getShopInfo:function(){var t=this;this.shopId=Number(this.$route.params.shopid),this.$store.commit("setshopid",this.shopId),Object(a["e"])(this.shopId).then((function(s){if(s.image_path="https://elm.cangdu.org/img/"+s.image_path,s.activities[0]&&(s.activities[0].icon_color="#"+s.activities[0].icon_color),0!=s.supports.length)for(var n=0;n<s.supports.length;n++)s.supports[n].icon_color="#"+s.supports[n].icon_color;t.shopInfo=s})).then((function(){t.getActiveInfo(),t.getFoodWatch(),t.getShopDetailInfo(),t.sonRefresh=!0}))},getActiveInfo:function(){this.activeInfo.active=this.shopInfo.activities,this.activeInfo.supports=this.shopInfo.supports},getFoodWatch:function(){this.watchInfo.status=this.shopInfo.status,this.watchInfo.identification=this.shopInfo.identification},getShopDetailInfo:function(){this.shopDetailInfo.name=this.shopInfo.name,this.shopDetailInfo.opening_time=this.shopInfo.opening_hours[0],this.shopDetailInfo.address=this.shopInfo.address,this.shopDetailInfo.license=this.shopInfo.license}},mounted:function(){this._getShopInfo()}},P=B,$=(n("19a2"),Object(f["a"])(P,i,e,!1,null,"3032be55",null));s["default"]=$.exports},"7ada":function(t,s,n){"use strict";var i=n("7d1b"),e=n.n(i);e.a},"7d1b":function(t,s,n){},"7fae":function(t,s,n){"use strict";var i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"center"},[t._t("center")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},e=[],a={name:"NavBar",components:{},data:function(){return{}},computed:{},methods:{}},o=a,c=(n("1d7a"),n("2877")),r=Object(c["a"])(o,i,e,!1,null,"01cafe69",null);s["a"]=r.exports},"8c39":function(t,s,n){},"94c5":function(t,s,n){"use strict";var i=n("030e"),e=n.n(i);e.a},a4aa:function(t,s,n){"use strict";var i=n("8c39"),e=n.n(i);e.a},b0c0:function(t,s,n){var i=n("83ab"),e=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,r="name";i&&!(r in a)&&e(a,r,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},c413:function(t,s,n){"use strict";n.d(s,"e",(function(){return e})),n.d(s,"d",(function(){return a})),n.d(s,"c",(function(){return o})),n.d(s,"a",(function(){return c})),n.d(s,"b",(function(){return r}));var i=n("a137");function e(t){return Object(i["a"])({url:"/shopping/restaurant/"+t})}function a(t){return Object(i["a"])({url:"https://elm.cangdu.org/shopping/v2/menu",params:{restaurant_id:t}})}function o(t,s,n){return Object(i["a"])({url:"https://elm.cangdu.org/ugc/v2/restaurants/"+t+"/ratings",querys:{offset:s,tag_name:n}})}function c(t){return Object(i["a"])({url:"https://elm.cangdu.org/ugc/v2/restaurants/"+t+"/ratings/scores"})}function r(t){return Object(i["a"])({url:"https://elm.cangdu.org/ugc/v2/restaurants/"+t+"/ratings/tags"})}}}]);
//# sourceMappingURL=chunk-26917dd4.63c91bfd.js.map
(function(){"use strict";var e={9760:function(e,t,i){var r=i(9242),n=i(3396);function o(e,t,i,r,o,a){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s,{items:o.items,favoriteItem:o.favoriteItem,onSearchInput:a.FindItems,onAddToFavorite:a.addToFavorite,onGetNewtPage:a.getNewtPage},null,8,["items","favoriteItem","onSearchInput","onAddToFavorite","onGetNewtPage"])}var a=i(6265),s=i.n(a),d={name:"App",data(){return{fetchItems:[],items:[],filtered:[],favoriteItem:[],numberPage:1}},methods:{async fetchAPI(){try{const e=await s().get("https://api.punkapi.com/v2/beers",{params:{page:this.numberPage}});this.items=e.data,this.fetchItems=e.data}catch(e){alert("Error")}},FindItems(e){this.filtered=this.fetchItems.filter((t=>t.name.toLowerCase().includes(e))),this.items=this.filtered},addToFavorite(e){if(this.items.find((t=>t===e)).favorite=!0,this.favoriteItem.find((t=>t===e)))return this.items.find((t=>t===e)).favorite=!1,this.favoriteItem.splice(this.favoriteItem.map((e=>e.id)).indexOf(e.id),1),void console.log(this.favoriteItem);this.favoriteItem.push(e),console.log(this.favoriteItem,"favoriteArray")},getNewtPage(e){this.numberPage=e,this.fetchAPI()}},mounted(){this.fetchAPI()}},u=i(89);const c=(0,u.Z)(d,[["render",o]]);var l=c;function m(e,t,i,r,o,a){const s=(0,n.up)("HeaderUser"),d=(0,n.up)("PostItems"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n.Wm)(d,{onSearchInput:a.searchField,onAddToFavorite:a.addToFavorite,onGetNewtPage:a.getNewtPage,items:i.items},null,8,["onSearchInput","onAddToFavorite","onGetNewtPage","items"]),(0,n.Wm)(u)],64)}const v=e=>((0,n.dD)("data-v-99e4c0d4"),e=e(),(0,n.Cn)(),e),p=v((()=>(0,n._)("h1",null,"Beans Love Beers",-1)));function h(e,t,i,r,o,a){return(0,n.wg)(),(0,n.iD)("header",null,[p,(0,n._)("nav",null,[(0,n._)("button",{onClick:t[0]||(t[0]=t=>e.$router.push("/Beans-Love-Beer-PET-Project"))},"Main"),(0,n._)("button",{onClick:t[1]||(t[1]=t=>e.$router.push("/Beans-Love-Beer-PET-Project/favorite"))},"Favorite")])])}var f={name:"HeaderUser"};const _=(0,u.Z)(f,[["render",h],["__scopeId","data-v-99e4c0d4"]]);var g=_,w=i(7139);const I=e=>((0,n.dD)("data-v-c4ef9b1a"),e=e(),(0,n.Cn)(),e),F={class:"cards"},P={key:0,class:"lds-ring preloader"},b=I((()=>(0,n._)("div",null,null,-1))),T=I((()=>(0,n._)("div",null,null,-1))),y=I((()=>(0,n._)("div",null,null,-1))),k=I((()=>(0,n._)("div",null,null,-1))),A=[b,T,y,k],D={class:"pagination"},H=["onClick"];function C(e,t,i,r,o,a){const s=(0,n.up)("SearchPosts"),d=(0,n.up)("Item");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{onSearchInput:a.searchField},null,8,["onSearchInput"]),(0,n._)("section",F,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.items,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"cards__item-wrapper"},[(0,n.Wm)(d,{item:e,onAddToFavorite:a.addToFavorite},null,8,["item","onAddToFavorite"])])))),128)),0===i.items.length?((0,n.wg)(),(0,n.iD)("div",P,A)):(0,n.kq)("",!0)]),(0,n._)("div",D,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(10,(e=>(0,n._)("button",{key:e,onClick:t=>a.getNewtPage(e)},(0,w.zw)(e),9,H))),64))])],64)}function B(e,t,i,o,a,s){return(0,n.wg)(),(0,n.iD)("form",{onSubmit:t[2]||(t[2]=(0,r.iM)((()=>{}),["prevent"]))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.inputField=e),onInput:t[1]||(t[1]=(...e)=>s.emitSearchInput&&s.emitSearchInput(...e)),type:"text",placeholder:"Search for beer..."},null,544),[[r.nr,a.inputField]])],32)}var $={name:"SearchPosts",data(){return{inputField:""}},methods:{emitSearchInput(e){this.$emit("searchInput",this.inputField.toLowerCase())}}};const j=(0,u.Z)($,[["render",B],["__scopeId","data-v-730b3c44"]]);var O=j;const S={class:"cards__item cards-item"},N=["src"],U={class:"cards-item__text"},W={class:"item-title"},Y={class:"item-description"},x=["item"];function z(e,t,i,r,o,a){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n._)("div",S,[(0,n._)("img",{src:i.item.image_url,alt:""},null,8,N),(0,n._)("div",U,[(0,n._)("p",W,(0,w.zw)(i.item.name),1),(0,n._)("p",Y,(0,w.zw)(i.item.description),1),(0,n._)("div",null,[(0,n._)("button",{class:(0,w.C_)(["button_favorite",{"favorite-item":i.item["favorite"]}]),onClick:t[0]||(t[0]=e=>[a.addToFavorite(e,i.item)])}," Favorite ",2),(0,n._)("button",{onClick:t[1]||(t[1]=t=>e.$router.push(`/Beans-Love-Beer-PET-Project/${i.item.id}`)),item:i.item}," More info... ",8,x)])])])]),(0,n.Wm)(s,{item:i.item},null,8,["item"])],64)}var L={name:"Item",props:{item:{type:Object}},methods:{addToFavorite(e,t){this.$emit("addToFavorite",t)}}};const Z=(0,u.Z)(L,[["render",z],["__scopeId","data-v-eadf2686"]]);var E=Z,G={components:{SearchPosts:O,Item:E},name:"PostItems",data(){return{testField:"",nextPage:1}},props:{items:{type:Array}},methods:{searchField(e){this.$emit("searchInput",e)},addToFavorite(e){this.$emit("addToFavorite",e)},getNewtPage(e){0!==this.items.length&&(this.$emit("getNewtPage",e),window.scroll(0,0))}}};const K=(0,u.Z)(G,[["render",C],["__scopeId","data-v-c4ef9b1a"]]);var M=K;const V=e=>((0,n.dD)("data-v-a1ee398e"),e=e(),(0,n.Cn)(),e),q=V((()=>(0,n._)("h2",{class:"title"},"Favorite",-1))),J={class:"cards"};function Q(e,t,i,r,o,a){const s=(0,n.up)("Item");return(0,n.wg)(),(0,n.iD)(n.HY,null,[q,(0,n._)("section",J,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.items,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"cards__item-wrapper"},[(0,n.Wm)(s,{item:e,onAddToFavorite:a.addToFavorite},null,8,["item","onAddToFavorite"])])))),128))])],64)}var R={components:{Item:E},name:"FavoriteItems",props:{items:{type:Array}},methods:{addToFavorite(e){this.$emit("addToFavorite",e)}}};const X=(0,u.Z)(R,[["render",Q],["__scopeId","data-v-a1ee398e"]]);var ee=X,te={components:{HeaderUser:g,PostItems:M,FavoriteItems:ee},name:"HomePage",props:{items:{type:Array}},methods:{searchField(e){this.$emit("searchInput",e)},addToFavorite(e){this.$emit("addToFavorite",e)},getNewtPage(e){this.$emit("getNewtPage",e)}}};const ie=(0,u.Z)(te,[["render",m]]);var re=ie;function ne(e,t,i,r,o,a){const s=(0,n.up)("HeaderUser"),d=(0,n.up)("FavoriteItems");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n.Wm)(d,{items:i.favoriteItem,onAddToFavorite:a.addToFavorite},null,8,["items","onAddToFavorite"])],64)}var oe={components:{FavoriteItems:ee,HeaderUser:g},data(){return{}},props:{favoriteItem:{type:Array}},methods:{addToFavorite(e){this.$emit("addToFavorite",e)}}};const ae=(0,u.Z)(oe,[["render",ne]]);var se=ae;const de=e=>((0,n.dD)("data-v-3847212a"),e=e(),(0,n.Cn)(),e),ue={class:"card__wrapper"},ce={class:"cards__item cards-item"},le=["src"],me={class:"cards-item__text"},ve={class:"item-title"},pe={class:"item-description"},he=de((()=>(0,n._)("b",null,"Description:",-1))),fe=de((()=>(0,n._)("b",null,"ABV:",-1))),_e=de((()=>(0,n._)("b",null,"IBU:",-1))),ge=de((()=>(0,n._)("b",null,"Pair food:",-1)));function we(e,t,i,r,o,a){const s=(0,n.up)("HeaderUser");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n._)("div",ue,[(0,n._)("div",ce,[(0,n._)("img",{src:o.item.image_url,alt:""},null,8,le),(0,n._)("div",me,[(0,n._)("p",ve,(0,w.zw)(o.item.name),1),(0,n._)("p",pe,[he,(0,n.Uk)(" "+(0,w.zw)(o.item["description"]),1)]),(0,n._)("p",null,[fe,(0,n.Uk)(" "+(0,w.zw)(o.item.abv),1)]),(0,n._)("p",null,[_e,(0,n.Uk)(" "+(0,w.zw)(o.item.ibu),1)]),(0,n._)("div",null,[ge,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.item.food_pairing,(e=>((0,n.wg)(),(0,n.iD)("li",null,(0,w.zw)(e),1)))),256))])]),(0,n._)("p",null,(0,w.zw)(o.item.brewers_tips),1),(0,n._)("div",null,[(0,n._)("button",{class:(0,w.C_)(["button_favorite",{"favorite-item":o.item["favorite"]}]),onClick:t[0]||(t[0]=e=>[a.addToFavorite(e,o.item)])}," Favorite ",2)])])])])],64)}var Ie={components:{HeaderUser:g},name:"Item",data(){return{item:[]}},props:{items:{type:Array}},methods:{findItem(){this.item=this.items.find((e=>e.id==this.$route.params.id)),console.log(this.item.name)},addToFavorite(e,t){this.$emit("addToFavorite",t)}},mounted(){this.findItem()}};const Fe=(0,u.Z)(Ie,[["render",we],["__scopeId","data-v-3847212a"]]);var Pe=Fe,be=i(678);const Te=[{path:"/Beans-Love-Beer-PET-Project/",component:re},{path:"/Beans-Love-Beer-PET-Project/favorite",component:se},{path:"/Beans-Love-Beer-PET-Project/:id",component:Pe}],ye=(0,be.p7)({routes:Te,history:(0,be.PO)("")});var ke=ye;const Ae=(0,r.ri)(l);Ae.use(ke).mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,o){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],o=e[c][2];for(var s=!0,d=0;d<r.length;d++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[d])}))?r.splice(d--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,a=r[0],s=r[1],d=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(d)var c=d(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},r=self["webpackChunkbeer_v2"]=self["webpackChunkbeer_v2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(9760)}));r=i.O(r)})();
//# sourceMappingURL=app.bedcfb0f.js.map
(this["webpackJsonpcorona-virus-react"]=this["webpackJsonpcorona-virus-react"]||[]).push([[0],{20:function(e,n,t){e.exports=t(39)},25:function(e,n,t){},26:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(12),o=t.n(c),u=(t(25),t(26),t(1)),i=t(2);function l(){var e=Object(u.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 60rem;\n"]);return l=function(){return e},e}function s(){var e=Object(u.a)(["\n  text-align: center;\n"]);return s=function(){return e},e}var d=i.a.div(s()),f=i.a.div(l()),m=t(3),h=t(16),v=t(5);t(37);function p(){var e=Object(u.a)(["\n  padding: 1rem;\n  max-width: 250px;\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n    border-radius: 10px;\n    background: ",";\n    text-align: center;\n    padding: 10px;\n    margin: 10px;\n    width: 25%;\n    word-break: break-word;\n"]);return b=function(){return e},e}function E(){var e=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n    justify-content: center;\n"]);return E=function(){return e},e}function g(){var e=Object(u.a)(["\n  text-align: center;\n  font-size: 1.5em;\n"]);return g=function(){return e},e}function j(){var e=Object(u.a)(["\n  text-align: center;\n"]);return j=function(){return e},e}function x(){var e=Object(u.a)(["\n    width: 25%;\n    padding: 10px;\n    margin: 10px;\n    background-color:#edcaca4d;\n"]);return x=function(){return e},e}function w(){var e=Object(u.a)([" \n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n    justify-content: center;\n"]);return w=function(){return e},e}var O=i.a.div(w()),y=i.a.div(x()),C=i.a.h2(j()),k=i.a.p(g()),S=i.a.p(E()),R=i.a.div(b(),(function(e){return e.backgroundColor})),_=(i.a.div(p()),t(8)),I=t.n(_),T=t(18),L=t(9),B=function(e,n){var t=n.type,r=n.payload;switch(console.log({payload:r,type:t}),t){case"SET_COUNTRIES":return Object(L.a)({},e,{countries:r.countries});case"SET_SEARCH":return Object(L.a)({},e,{search:r.search});default:return}},F={countries:[],search:""},H=a.a.createContext(F);function q(e){var n=Object(r.useReducer)(B,F),t=Object(m.a)(n,2),c=t[0],o=t[1];return a.a.createElement(H.Provider,{value:{state:c,dispatch:o}},e.children)}function z(e,n){return e.reduce((function(e,t){return e+=t[n]}),0)}function A(){return(A=Object(T.a)(I.a.mark((function e(n){var t,r,a,c,o,u,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,a=r.features.map((function(e){return e.attributes})).filter((function(e){return!n.length||e.Country_Region.toLowerCase()===n.toLowerCase()})).map((function(e){return{name:e.Country_Region,coordinates:[e.Lat,e.Long_],confirmed:e.Confirmed,deaths:e.Deaths,recovered:e.Recovered}})),c=z(a,"deaths"),o=z(a,"confirmed"),u=z(a,"recovered"),i={deaths:c,confirmed:o,recovered:u},e.abrupt("return",[a,i]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){var e=Object(r.useContext)(H),n=e.dispatch;return{setSearch:function(e){n({type:"SET_SEARCH",payload:{search:e}})},search:e.state.search}}var J=function(){var e=D().search,n=Object(r.useState)([]),t=Object(m.a)(n,2),a=t[0],c=t[1],o=Object(r.useState)({}),u=Object(m.a)(o,2),i=u[0],l=u[1];return Object(r.useEffect)((function(){(function(e){return A.apply(this,arguments)})(e).then((function(e){var n=Object(m.a)(e,2),t=n[0],r=n[1];c(t),l(r)}))}),[e]),[a,i]},P=function(e){return function(){var n;n="country/".concat(e),Object(v.b)("".concat("corona-virus-react","/").concat(n))}},U=function(){var e=J(),n=Object(m.a)(e,2),t=n[0],r=n[1],c=D().search;return a.a.createElement("div",null,a.a.createElement(S,null,a.a.createElement(R,{backgroundColor:"#ffff00b3"},a.a.createElement("h1",null,"Total Cases"),a.a.createElement("h1",null,"\ud83e\udd12"),a.a.createElement("h1",null,r.confirmed)),a.a.createElement(R,{backgroundColor:"#94ff6a"},a.a.createElement("h1",null,"Recovered"),a.a.createElement("h1",null,"\ud83d\ude03"),a.a.createElement("h1",null,r.recovered)),a.a.createElement(R,{backgroundColor:"red"},a.a.createElement("h1",null,"Deaths"),a.a.createElement("h1",null,"\ud83d\udc80"),a.a.createElement("h1",null,r.deaths))),a.a.createElement(O,null,0===c.length&&t.map((function(e){var n=e.name,t=e.confirmed,r=e.deaths,c=e.recovered;return a.a.createElement(y,{onClick:P(n)},a.a.createElement(C,null,Object(h.flag)(n)," ",n),a.a.createElement(k,null,"\ud83e\udd12"+"".concat(t)),a.a.createElement(k,null,"\ud83d\udc80"+"".concat(r)),a.a.createElement(k,null,"\ud83d\ude03"+"".concat(c)))}))))};function W(){var e=Object(u.a)(["\n\tcolor: white;\n\tpadding: 5px;\n\twidth: 300px;\n\ttext-align: center;\n\tcolor: white;\n"]);return W=function(){return e},e}function G(){var e=Object(u.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tbackground-color: #da0063;\n  justify-content: center;\n"]);return G=function(){return e},e}function K(){var e=Object(u.a)([""]);return K=function(){return e},e}var M=i.a.h1(K());i.a.div(G()),i.a.div(W());function N(){var e=Object(u.a)(["\n\twidth: 30%;\n\tborder: 2px solid black;\n\theight: 30px;\n\tfont-size: 1rem;\n  padding: 10px;\n\tborder-radius: 5px;\n"]);return N=function(){return e},e}var V=i.a.input(N()),$=function(){var e=D().setSearch;return a.a.createElement("div",null,a.a.createElement(V,{type:"search",placeholder:"country name",onChange:function(n){return e(n.target.value)}}))},Q=function(){return a.a.createElement("div",null,a.a.createElement(M,null," Corona Virus Statistics "),a.a.createElement("div",null,a.a.createElement($,null)))},X=function(){return a.a.createElement("div",null,a.a.createElement(d,null,a.a.createElement(Q,null)),a.a.createElement(f,null,a.a.createElement(U,null)))},Y=function(e){var n=e.countryId;return a.a.createElement("div",null," ",n," ")};var Z=function(){return a.a.createElement(q,null,a.a.createElement(v.a,{basepath:"corona-virus-react"},a.a.createElement(X,{path:"/"}),a.a.createElement(Y,{path:"country/:countryId"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a827e434.chunk.js.map
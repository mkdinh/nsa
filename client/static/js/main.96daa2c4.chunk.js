(this["webpackJsonpnsa-web"]=this["webpackJsonpnsa-web"]||[]).push([[0],{132:function(e,t,n){e.exports=n(276)},137:function(e,t,n){},159:function(e,t,n){e.exports={"page-loader":"src-components-shared-Loader-module__page-loader--2Ro1z"}},160:function(e,t,n){e.exports={"user-alert":"src-components-UserAlert-module__user-alert--2icHG"}},183:function(e,t,n){e.exports={"user-info":"src-components-UserInfo-module__user-info--BSkhI","user-info-field":"src-components-UserInfo-module__user-info-field--CG1Td","user-info-data":"src-components-UserInfo-module__user-info-data--v1dd7"}},225:function(e,t,n){e.exports={"user-card":"src-components-UserCard-module__user-card--2eONo","user-app-version":"src-components-UserCard-module__user-app-version--3aUtS","user-content":"src-components-UserCard-module__user-content--1W7sp","user-card-info":"src-components-UserCard-module__user-card-info--10xNK","user-bio":"src-components-UserCard-module__user-bio--2KDqz","mobile-expand-button":"src-components-UserCard-module__mobile-expand-button--2Nq7n"}},244:function(e,t,n){e.exports={"user-item":"src-components-UserItem-module__user-item--2FUga","user-name":"src-components-UserItem-module__user-name--3Vg2Y"}},253:function(e,t,n){e.exports={"trigger-button":"src-components-UserList-module__trigger-button--1byHI"}},254:function(e,t,n){e.exports={"user-map-container":"src-components-UserMap-module__user-map-container--17zvq","leaflet-container":"src-components-UserMap-module__leaflet-container--171Gm"}},271:function(e,t,n){e.exports={"home-view":"src-views-Home-module__home-view--3VmyT"}},276:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),s=n.n(o),c=(n(137),n(23)),i=n(28),u=n(69),l=n(68),m=n(102),p=n.n(m),d=(n(159),function(e){return a.a.createElement("div",{className:"src-components-shared-Loader-module__page-loader--2Ro1z"},a.a.createElement(p.a,{show:e.show,name:"line-scale-pulse-out-rapid"}),";")}),f=n(15),h=n.n(f),v=n(33),b=n(22),_=n(287),E=n(288);n(160);var g=function(e){var t=Object(r.useState)({opacity:0}),n=Object(b.a)(t,2),o=n[0],s=n[1],c=e.user,i="".concat(c.firstName," is off the grid!");return Object(r.useEffect)((function(){s({opacity:c.location?0:1}),c.location||setTimeout((function(){s({opacity:0})}),3e3)}),[c]),a.a.createElement(E.a,{style:o,className:"src-components-UserAlert-module__user-alert--2icHG",message:i,type:"error"})},y=n(283),O=n(284),j=n(280),x=n(291),U=n(292),w=(n(183),y.a.Text);var k=function(e){var t=e.user,n=e.field,r=e.displayName,o=t?t[n]:null,s=(r||n||"").replace(/([A-Z])/g," $1").trim();return t?a.a.createElement("div",{className:"src-components-UserInfo-module__user-info--BSkhI"},a.a.createElement(w,{className:"src-components-UserInfo-module__user-info-field--CG1Td",level:4},s),a.a.createElement(w,{className:"src-components-UserInfo-module__user-info-data--v1dd7"},o)):null},C=(n(225),y.a.Text),N=O.a.Meta;var I={paddingBottom:0},S=function(e){var t=Object(r.useState)(!0),n=Object(b.a)(t,2),o=n[0],s=n[1],c=e.user;return a.a.createElement(O.a,{bodyStyle:I,className:"src-components-UserCard-module__user-card--2eONo"},a.a.createElement(N,{title:a.a.createElement(C,null,c.fullName),description:a.a.createElement(C,{className:"src-components-UserCard-module__user-app-version--3aUtS"},c.appVersion),avatar:a.a.createElement(j.a,{shape:"square",size:"large",src:c.profilePhotoUrl})}),o&&a.a.createElement("div",{className:"src-components-UserCard-module__user-content--1W7sp"},a.a.createElement(C,{className:"src-components-UserCard-module__user-bio--2KDqz"},c.meta.bio),a.a.createElement("div",{className:"src-components-UserCard-module__user-card-info--10xNK"},a.a.createElement(k,{user:c,field:"email"}),a.a.createElement(k,{user:c,field:"gender"}),a.a.createElement(k,{user:c.location,field:"company"}),a.a.createElement(k,{user:c.location,field:"countryName",display:"country"}),a.a.createElement(k,{user:c.meta,field:"address"}),a.a.createElement(k,{user:c.meta,field:"ipAddress"}))),a.a.createElement("span",{id:"mobile-expand-button",onClick:function(){s(!o)},className:"src-components-UserCard-module__mobile-expand-button--2Nq7n"},o?a.a.createElement(x.a,null):a.a.createElement(U.a,null)))},q=n(293),z=n(285),L=n(286),T=n(282);n(244);var V=function(e){var t=e.user;return a.a.createElement(T.b.Item,{onClick:function(){e.onClick(t)},className:"src-components-UserItem-module__user-item--2FUga"},a.a.createElement(T.b.Item.Meta,{avatar:a.a.createElement(j.a,{src:t.profilePhotoUrl}),title:a.a.createElement("span",{className:"src-components-UserItem-module__user-name--3Vg2Y"},t.fullName),description:a.a.createElement("span",null,t.appVersion)}))};n(253);var M={padding:0},A=function(e){var t=e.isVisible,n=e.onClose,r=e.onOpen,o=e.users;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"src-components-UserList-module__trigger-button--1byHI"},a.a.createElement(z.a,{size:"large",type:"danger",shape:"circle",onClick:r},a.a.createElement(q.a,null))),a.a.createElement(L.a,{onClose:n,visible:t,bodyStyle:M},a.a.createElement(T.b,{loading:e.isLoading,dataSource:o,renderItem:function(t){return a.a.createElement(V,{onClick:e.onItemClick,user:t})}})))},H=n(289),R=n(290),B=n(281),G=(n(254),n(13));n.n(G).a.Icon.Default.imagePath="/images";var K,P=function(e){var t=Object(r.useState)([35.7596,-79.0193]),n=Object(b.a)(t,2),o=n[0],s=n[1],c=Object(r.useState)(16),i=Object(b.a)(c,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){e.location?(s([e.location.lat,e.location.lng]),l(16)):l(10)}),[e.location]),a.a.createElement("div",{className:"src-components-UserMap-module__user-map-container--17zvq"},a.a.createElement(H.a,{style:{flex:1},center:o,zoom:u},a.a.createElement(R.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a.a.createElement(B.a,{position:o})))},W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e,(function(e){return e.id?"".concat("/users","/").concat(e.id):"/users"}))}return Object(i.a)(n,[{key:"getUsers",value:function(){var e=Object(v.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get({});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get({id:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(function(){function e(t,n){Object(c.a)(this,e),this.context=t.context,this.proxy=t.proxy,this.endpoint=n}return Object(i.a)(e,[{key:"get",value:function(e){return this.context.get(this.evaluateEndpoint(e),e)}},{key:"post",value:function(e){return this.context.post(this.evaluateEndpoint(e),e)}},{key:"put",value:function(e){return this.context.put(this.evaluateEndpoint(e),e)}},{key:"delete",value:function(e){return this.context.delete(this.evaluateEndpoint(e),e)}},{key:"evaluateEndpoint",value:function(e){var t=this.endpoint(e);return this.proxy?("/"===t[0]&&(t=t.substr(1)),"".concat(this.proxy.url,"/").concat(t)):t}}]),e}()),D=n(83),F=n(53),J=n.n(F),Y=function(){function e(){Object(c.a)(this,e),this.requestOptions={withCredentials:!1}}return Object(i.a)(e,[{key:"get",value:function(e,t){return J.a.get(e,this.mergeOptions(t.requestOptions))}},{key:"post",value:function(e,t){return J.a.post(e,t.data,this.mergeOptions(t.requestOptions))}},{key:"put",value:function(){var e=Object(v.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.put(t,n.data,this.mergeOptions(n.requestOptions)));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(e,t){return J.a.delete(e,this.mergeOptions(t.requestOptions))}},{key:"mergeOptions",value:function(e){return Object(D.a)(Object(D.a)({},this.requestOptions),e)}}]),e}(),$=function(){function e(t,n,r,a){Object(c.a)(this,e),this.name=t,this.protocol=n,this.hostname=r,this.port=a}return Object(i.a)(e,[{key:"url",get:function(){return!this.protocol&&this.hostname?"/api":this.port?"".concat(this.protocol,"://").concat(this.hostname,":").concat(this.port,"/api"):"".concat(this.protocol,"://").concat(this.hostname,"/api")}}]),e}(),Z=new function e(t){Object(c.a)(this,e);var n=t.requestConfig;this.users=new W(n)}({requestConfig:{context:new Y,proxy:new $("production","","")}}),Q=(n(271),_.a.Content),X=(K=function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),o=n[0],s=n[1],c=Object(r.useState)({}),i=Object(b.a)(c,2),u=i[0],l=i[1],m=Object(r.useState)(!1),p=Object(b.a)(m,2),d=p[0],f=p[1],E=Object(r.useState)(!1),y=Object(b.a)(E,2),O=y[0],j=y[1],x=Object(r.useState)(!1),U=Object(b.a)(x,2),w=U[0],k=U[1];function C(){return(C=Object(v.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,Z.users.getUsers();case 3:t=e.sent,s(t),f(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return I.apply(this,arguments)}function I(){return(I=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,Z.users.getUser(t);case 3:n=e.sent,l(n),f(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t.id);case 2:z();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){j(!1)}return a.a.useEffect((function(){e.didRender(),N(6),setTimeout((function(){k(!0)}),1e3)}),[]),a.a.createElement("div",{className:"src-views-Home-module__home-view--3VmyT"},a.a.createElement(_.a,null,a.a.createElement(Q,null,w&&a.a.createElement(P,{location:u.location}),u.id&&a.a.createElement(S,{user:u})),a.a.createElement(A,{users:o,onOpen:function(){j(!0),function(){C.apply(this,arguments)}()},onClose:z,onItemClick:function(e){return q.apply(this,arguments)},isLoading:d,isVisible:O}),a.a.createElement(g,{user:u})))},function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,display:"none"},e.didRender=function(){setTimeout((function(){e.setState({isLoading:!1,display:"block"})}),750)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.display;return a.a.createElement("div",null,t?a.a.createElement(d,{show:t}):null,a.a.createElement("div",{style:{display:n}},a.a.createElement(K,{didRender:this.didRender})))}}]),n}(r.PureComponent));var ee=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(274),n(275);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.96daa2c4.chunk.js.map
(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=n(6),s=n(1),l={CHANGE_SEARCH_FIELD:"CHANGE_SEARCH_FIELD",REQUEST_ROBOTS_PENDING:"REQUEST_ROBOTS_PENDING",REQUEST_ROBOTS_SUCCESS:" REQUEST_ROBOTS_SUCCESS",REQUEST_ROBOTS_FAILED:"REQUEST_ROBOTS_FAILED"},u={searchField:""},d={isPending:!1,robots:[],error:""},h=n(15),E=n(16),f=(n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(30);var g=n(3),p=n(4),S=n(7),O=n(5),v=n(8),m=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200X200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},R=function(e){var t=e.robots.map((function(e,t){return o.a.createElement(m,{key:t,name:e.name,email:e.email,id:e.id})}));return o.a.createElement("div",null,t)},_=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{"aria-label":"Search Robots",type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},w=(n(31),function(e){return o.a.createElement("div",{style:{overflow:"scroll",height:"800px",border:"3px solid black "}},e.children)}),C=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(S.a)(this,Object(O.a)(t).call(this,e))).state={hasError:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Sorry, error loading list."):this.props.children}}]),t}(r.Component),y=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChanged,r=e.robots,a=e.isPending,i=r.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return a?o.a.createElement("h1",null,"Loading...."):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Robofriends"),o.a.createElement(_,{searchChange:n}),o.a.createElement(w,null,o.a.createElement(C,null,o.a.createElement(R,{robots:i}))))}}]),t}(r.Component),T=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{onSearchChanged:function(t){var n;e((n=t.target.value,{type:l.CHANGE_SEARCH_FIELD,payload:n}))},onRequestRobots:function(){e((function(e){e({type:l.REQUEST_ROBOTS_PENDING}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:l.REQUEST_ROBOTS_SUCCESS,payload:t})})).catch((function(t){return e({type:l.REQUEST_ROBOTS_FAILED,payload:t})}))}))}}}))(y),j=Object(h.createLogger)(),N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case l.CHANGE_SEARCH_FIELD:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case l.REQUEST_ROBOTS_PENDING:return Object.assign({},e,{isPending:!0});case l.REQUEST_ROBOTS_SUCCESS:return Object.assign({},e,{robots:t.payload,isPending:!1});case l.REQUEST_ROBOTS_FAILED:return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,k=Object(s.e)(N,U(Object(s.a)(E.a,j)));i.a.render(o.a.createElement(c.a,{store:k},o.a.createElement(T,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.4b63e58f.chunk.js.map
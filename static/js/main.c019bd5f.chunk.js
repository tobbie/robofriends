(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var l=n(1),i=n(2),s=n(4),h=n(3),u=n(5),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(a,"?200X200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots.map((function(e,t){return r.a.createElement(m,{key:t,name:e.name,email:e.email,id:e.id})}));return r.a.createElement("div",null,t)},b=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},f=(n(15),function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"800px",border:"3px solid black "}},e.children)}),p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Sorry, error loading list."):this.props.children}}]),t}(a.Component),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChanged=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return 0===t.length?r.a.createElement("h1",null,"Loading...."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(b,{searchChange:this.onSearchChanged}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{robots:a}))))}}]),t}(a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c019bd5f.chunk.js.map
(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(21)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(14),n(1)),u=n(2),s=n(4),l=n(3),h=n(5),p=(n(15),n(8)),f=(n(16),n(17),function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",{id:"text"},o.a.createElement("i",{className:"fas fa-quote-left"}),this.props.text),o.a.createElement("p",{id:"author",className:"author"},this.props.author?"-".concat(this.props.author):""))}}]),e}(a.Component)),m=(n(18),function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("i",{id:"new-quote",className:"fas fa-sync".concat(this.props.isLoading?" fa-sync--is-loading":""),onClick:this.props.onClick})}}]),e}(a.Component)),b=(n(19),function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"spinner"})}}]),e}(a.Component)),O=(n(20),function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?hashtags=quote&url=/&text="+this.props.tweet,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-twitter",onClick:this.props.onClick}))}}]),e}(a.Component));function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y="https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",g=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).getNewQuote=function(){fetch(y,{cache:"no-store"}).then((function(t){return t.text()})).then((function(t){return JSON.parse(t.replace(/\\/g,""))})).then((function(t){return n.setState({quote:{author:t.quoteAuthor||"anonymous",text:t.quoteText,isLoading:!1},initialLoad:!1})})).catch((function(t){n.setState({initialLoad:!1,quote:j({},n.state.quote,{isLoading:!1})}),console.error("There was a problem fetching a new quote: \n",t)}))},n.handleRefreshClick=function(){n.setState({quote:j({},n.state.quote,{isLoading:!0})}),n.getNewQuote()},n.state={initialLoad:!0,quote:{author:"",text:""}},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.getNewQuote()}},{key:"render",value:function(){return o.a.createElement("div",{id:"quote-box",className:"quote-box"},this.state.initialLoad?o.a.createElement(b,null):o.a.createElement(f,{author:this.state.quote.author,text:this.state.quote.text}),o.a.createElement("hr",null),o.a.createElement("div",{className:"quote-box__footer"},o.a.createElement(m,{isLoading:this.state.quote.isLoading,onClick:this.handleRefreshClick}),o.a.createElement(O,{tweet:this.state.quote.text})))}}]),e}(a.Component),w=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("main",{className:"App"},o.a.createElement(g,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.5cc80489.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(885),c=n(2791),a=n(6871),u=n(874),s=n(184);function o(){var e=(0,c.useState)(),t=(0,r.Z)(e,2),n=t[0],o=t[1],i=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.tx)(i).then((function(e){o(e.results)}))}),[i]),(0,s.jsx)("ul",{children:n&&n.length?n.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("li",{children:"There are no reviews"})})}},874:function(e,t,n){n.d(t,{Je:function(){return p},M1:function(){return d},TP:function(){return v},gH:function(){return f},tx:function(){return w}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),s=n.n(u),o="dc9731f6582221737efab584c4209646",i="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"trending/movie/week?api_key=").concat(o,"&language='en-US'"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.a3c3143d.chunk.js.map
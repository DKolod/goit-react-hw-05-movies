"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[918],{9155:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(501),a=n(6871),c="MoviesList_FilmList__thYmG",s="MoviesList_FilmItem__z-vm5",u="MoviesList_FilmLink__ikiIg",i="MoviesList_FilmTitle__wwTbt",o="MoviesList_FilmImage__Y14PL",l=n(184);function p(e){var t=e.films,n=(0,a.TH)();return(0,l.jsx)("ul",{className:c,children:t.map((function(e){return(0,l.jsx)("li",{className:s,children:(0,l.jsxs)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},className:u,children:[(0,l.jsx)("p",{className:i,children:e.original_title}),(0,l.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title})]})},e.id)}))})}},5918:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(885),a=n(2791),c=n(501),s=n(719),u=n(874),i={SearchForm:"MoviesPage_SearchForm__lx4S3",SearchFormButton:"MoviesPage_SearchFormButton__fbEl0",SearchFormInput:"MoviesPage_SearchFormInput__weghc"},o=n(6066),l=n(9155),p=n(184);function m(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],m=t[1],h=(0,a.useState)([]),f=(0,r.Z)(h,2),v=f[0],g=f[1],_=(0,c.lr)(),d=(0,r.Z)(_,2),x=d[0],w=d[1],y=x.get("query");(0,a.useEffect)((function(){y&&(0,u.gH)(y).then((function(e){0===e.results.length&&o.Am.warning("Not found!"),g(e.results)}))}),[y]);return(0,p.jsx)("div",{children:(0,p.jsxs)("main",{children:[(0,p.jsx)("div",{className:i.Searchbar,children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()?(w({query:n}),m("")):o.Am.error("Enter a search value")},className:i.SearchForm,children:[(0,p.jsx)("input",{type:"text",className:i.SearchFormInput,placeholder:"Search",value:n,onChange:function(e){m(e.target.value)}}),(0,p.jsx)("button",{type:"submit",className:i.SearchFormButton,children:(0,p.jsx)(s.wTD,{size:32})})]})}),v&&(0,p.jsx)(l.Z,{films:v})]})})}},874:function(e,t,n){n.d(t,{Je:function(){return l},M1:function(){return g},TP:function(){return f},gH:function(){return m},tx:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),u=n.n(s),i="dc9731f6582221737efab584c4209646",o="https://api.themoviedb.org/3/";function l(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"trending/movie/week?api_key=").concat(i,"&language='en-US'"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=918.b6e50c39.chunk.js.map
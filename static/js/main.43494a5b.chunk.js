(this["webpackJsonpreact-blog-posts"]=this["webpackJsonpreact-blog-posts"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),o=i(4),c=i.n(o),l=(i(13),i(14),i(5)),a=i(6),r=i(2),u=i(8),d=i(7),b=(i(15),i(0)),m=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={blogs:[],selection:null},n.selectBlog=n.selectBlog.bind(Object(r.a)(n)),n}return Object(a.a)(i,[{key:"componentDidMount",value:function(){this.setState({blogs:[{title:"a new blog",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ex suscipit numquam provident in rerum, repellat, corrupti quibusdam magnam iure doloribus nihil cupiditate quas omnis necessitatibus, quam minima expedita voluptas."},{title:"another awesome post",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laudantium nemo doloribus dolore omnis adipisci reprehenderit labore delectus, recusandae, voluptatibus amet nesciunt, ut? Quo, dolores sunt officia, cupiditate debitis amet."}]})}},{key:"selectBlog",value:function(e){console.dir(e.target);var t=Number(e.currentTarget.dataset.index);console.log(t),this.setState({selection:this.state.blogs[t]})}},{key:"render",value:function(){var e,t,i=this,n=this.state.blogs.map((function(e,t){return Object(b.jsx)("li",{onClick:i.selectBlog,"data-index":t,children:Object(b.jsx)("h2",{children:e.title})},t)}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{children:"Blog Reading App"}),Object(b.jsx)("ul",{children:n}),this.state.selection&&Object(b.jsxs)("aside",{children:[Object(b.jsx)("h2",{children:null===(e=this.state.selection)||void 0===e?void 0:e.title}),Object(b.jsx)("p",{children:null===(t=this.state.selection)||void 0===t?void 0:t.body}),Object(b.jsx)("button",{onClick:function(){return i.setState({selection:null})},children:"Close"})]})]})}}]),i}(n.Component),h=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),o(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.43494a5b.chunk.js.map
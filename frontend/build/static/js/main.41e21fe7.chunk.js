(this["webpackJsonpbeans-and-leaves"]=this["webpackJsonpbeans-and-leaves"]||[]).push([[0],{30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(16),n=a.n(c),i=a(2),r=(a(37),a(4)),l=(a(38),a.p+"static/media/about-img.87bd2070.jpeg"),o=a(0),j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"about",id:"About",children:[Object(o.jsxs)("h1",{className:"heading",children:[" ",Object(o.jsx)("span",{children:"About"})," Us"]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:l,alt:""})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h3",{children:"why choose beans & leaves?"}),Object(o.jsx)("p",{children:"At Beans & Leaves we are dedicated to procuring the best in coffee, tea, and accesories."}),Object(o.jsx)("p",{children:"Our team is always on the search for what products are going to offer the best when it comes to infusions from around the world"}),Object(o.jsx)("p",{children:"Have any questions? feel free to contact us!"}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/contact",children:Object(o.jsx)("span",{className:"btn",children:"Contact Us"})})]})]})]})})},b=(a(40),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"contact",id:"Contact",children:[Object(o.jsxs)("h1",{className:"heading",children:[" ",Object(o.jsx)("span",{children:"Contact"})," ","Us"," "]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("iframe",{className:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.720323216416!2d-98.62109934865407!3d29.58273974710037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c667dd6657fdd%3A0x24e55c903c3a270c!2sThe%20University%20of%20Texas%20at%20San%20Antonio!5e0!3m2!1sen!2sus!4v1645745026060!5m2!1sen!2sus",width:"600",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("h3",{children:"Get in Touch"}),Object(o.jsxs)("div",{className:"inputBox",children:[Object(o.jsx)("span",{className:"fas fa-user"}),Object(o.jsx)("input",{type:"text",placeholder:"name"})]}),Object(o.jsxs)("div",{className:"inputBox",children:[Object(o.jsx)("span",{className:"fas fa-envelope"}),Object(o.jsx)("input",{type:"email",placeholder:"email"})]}),Object(o.jsxs)("div",{className:"inputBox",children:[Object(o.jsx)("span",{className:"fas fa-phone"}),Object(o.jsx)("input",{type:"number",placeholder:"number"})]}),Object(o.jsx)("a",{href:"#",className:"btn",children:"submit"})]})]})]})})}),m=(a(41),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"footer",children:[Object(o.jsxs)("nav",{className:"links",children:[Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/",children:Object(o.jsx)("span",{className:"header__navItems",children:"Home"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/menu0",children:Object(o.jsx)("span",{className:"header_navItems",children:"Products"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/reviews",children:Object(o.jsx)("span",{className:"header__navItems",children:"Reviews"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/about",children:Object(o.jsx)("span",{className:"header__navItems",children:"About"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/contact",children:Object(o.jsx)("span",{className:"header_navItems",children:"Contact"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/login",children:Object(o.jsx)("span",{className:"header__navItems",children:"Login"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/admin",children:Object(o.jsx)("span",{className:"header__navItems",children:"Login"})})]}),Object(o.jsx)("div",{className:"credit",children:"Group 13 | all rights reserved"})]})})}),u=a(3),d=(a(42),a.p+"static/media/home-img.82291e06.jpeg"),h=function(){var e=Object(u.f)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"home",id:"Home",style:{backgroundImage:"url(".concat(d,")")},children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h3",{children:"Quality Infusions"}),Object(o.jsx)("p",{children:"coffee, tea, and everything in between."}),Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){e("/menu")},children:"See Products"})]})})})},O=a(5),p=a.n(O);a(61);var x=function(){var e=[],t=Object(s.useState)(),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(),l=Object(i.a)(r,2),j=l[0],b=l[1],m=Object(s.useState)(!0),d=Object(i.a)(m,2),h=d[0],O=d[1],x=Object(s.useState)(""),g=Object(i.a)(x,2),f=g[0],v=g[1],N="./images/",y=Object(u.g)().user,_=Object(u.f)();Object(s.useEffect)((function(){C()}),[]);var C=function(){p.a.get("/api/get/inventory").then((function(e){var t=JSON.parse(JSON.stringify(e.data));b(t),n(t),S()}))},A=function(){alert("Added to cart!")},w=function(){O(!0)},S=function(){O(!1)};return h?Object(o.jsx)("div",{className:"App",children:"Loading Data..."}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"menu",id:"Menu",children:[Object(o.jsxs)("h1",{className:"heading",children:[" OUR ",Object(o.jsx)("span",{children:" MENU "})," "]}),Object(o.jsxs)("div",{class:"search-wrapper",children:[Object(o.jsx)("label",{className:"desc",for:"search",children:" Search Inventory "}),Object(o.jsx)("input",{value:f,onChange:function(e){return v(e.target.value)},type:"search",id:"search"}),Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){e=[],b(c),w();var t=f;/^\s*$/.test(t)||(c.map((function(a){a.item_name.toLowerCase().includes(t.toLowerCase())||a.item_description.toLowerCase().includes(t.toLowerCase())?(console.log("Pushing item",a.item_name),e.push(a)):console.log(a.item_name.toLowerCase(),"Does not include",t.toLowerCase())})),b(e),console.log("Here is the display inventory after update\n",j)),S()},children:"Submit"})]}),Object(o.jsx)("div",{class:"box",children:Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){e=[],j.map((function(t){e.push(t)})),e.sort((function(e,t){return e.item_name>t.item_name?1:-1})),b(e)},children:"Sort By Name"})}),Object(o.jsx)("div",{class:"box",children:Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){e=[],j.map((function(t){e.push(t)})),e.sort((function(e,t){return e.item_stock>t.item_stock?1:-1})),b(e)},children:"Sort By Availability"})}),Object(o.jsx)("div",{class:"box",children:Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){e=[],j.map((function(t){e.push(t)})),e.sort((function(e,t){return e.item_price>t.item_price?1:-1})),b(e)},children:"Sort By Price"})}),1==y&&Object(o.jsx)("div",{class:"box",children:Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(e){_("/createItem")},children:"Create Item"})}),Object(o.jsxs)("div",{className:"box-container",children:[console.log("Items loaded",c),j.map((function(e){console.log(e.item_name);var t,a="";return e.item_onsale?(t=e.item_saleprice.toFixed(2),a=e.item_price.toFixed(2)):t=e.item_price.toFixed(2),e.item_stock>0?Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("img",{src:N+e.item_image,alt:""}),Object(o.jsx)("h3",{children:e.item_name}),Object(o.jsxs)("div",{className:"price",children:["$",t,Object(o.jsx)("span",{children:a})]}),Object(o.jsx)("div",{className:"desc",children:e.item_description}),1==y?Object(o.jsx)("button",{className:"btn",type:"Modify",onClick:function(){return t=e.item_id,void _("/modifyItem"+t);var t},children:"Modify Item"}):Object(o.jsx)("button",{className:"btn",type:"submit",onClick:A,children:"Add to Cart"}),1==y&&Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){return t=e.item_id,void console.log("Item",t);var t},children:"Delete Item"})]}):Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("img",{src:N+e.item_image,alt:""}),Object(o.jsx)("h3",{children:e.item_name}),Object(o.jsxs)("div",{className:"price",children:["$",e.item_price,Object(o.jsxs)("span",{children:[" $",e.item_saleprice]})]}),Object(o.jsx)("div",{className:"desc",children:e.item_description}),Object(o.jsx)("div",{className:"text",children:"Out of stock!"}),Object(o.jsx)("button",{className:"btnDisabled",type:"submit",children:"Add to Cart"})]})}))]})]})})};a(11),a(17),a(30);var g=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],j=r[1],b=Object(s.useState)(""),m=Object(i.a)(b,2),d=m[0],h=m[1],O=Object(s.useState)(""),x=Object(i.a)(O,2),g=x[0],f=x[1],v=Object(s.useState)(""),N=Object(i.a)(v,2),y=N[0],_=N[1],C=Object(s.useState)(""),A=Object(i.a)(C,2),w=A[0],S=A[1],I=Object(s.useState)(""),D=Object(i.a)(I,2),P=D[0],k=D[1],B=Object(s.useState)(""),L=Object(i.a)(B,2),q=L[0],E=L[1],T=Object(s.useState)(""),H=Object(i.a)(T,2),R=(H[0],H[1]),U=Object(s.useState)(""),V=Object(i.a)(U,2),F=(V[0],V[1]);return Object(u.f)(),Object(o.jsxs)("div",{className:"create_item",children:[Object(o.jsxs)("h1",{className:"heading",children:[" Create ",Object(o.jsx)("span",{children:"Item"})]}),Object(o.jsxs)("div",{className:"create_page",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{className:"create_logo",src:"./images/logo.png",alt:""})}),Object(o.jsx)("span",{className:"input_label",children:"Item ID:"}),Object(o.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)},className:"item_input",type:"text",placeholder:"Item Name",required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Type:"}),Object(o.jsx)("input",{value:l,onChange:function(e){return j(e.target.value)},className:"item_input",type:"text",placeholder:"Item Type",required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Name:"}),Object(o.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},className:"item_input",type:"text",placeholder:"Item Name",required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Description:"}),Object(o.jsx)("textarea",{value:g,onChange:function(e){return f(e.target.value)},className:"item_description",placeholder:g,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Price"}),Object(o.jsx)("input",{value:y,onChange:function(e){return _(e.target.value)},className:"item_input",type:"text",placeholder:"Item Price",required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Stock:"}),Object(o.jsx)("input",{value:w,onChange:function(e){return S(e.target.value)},className:"item_input",type:"text",placeholder:"Item Stock",required:!0}),Object(o.jsx)("span",{className:"input_label",children:"On Sale:"}),Object(o.jsx)("input",{value:P,onChange:function(e){return k(e.target.value)},className:"item_input",type:"text",placeholder:"On Sale?",required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item On Sale Price"}),Object(o.jsx)("input",{value:q,onChange:function(e){return E(e.target.value)},className:"item_input",type:"text",placeholder:"Item Sale Price",required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Image"}),Object(o.jsx)("input",{onChange:function(e){R(e.target.files[0]),F(e.target.files[0].name)},name:"Upload File",className:"item_input",type:"file",required:!0}),Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){alert("Item submitted"),p.a.post("api/insert/item",{id:a,type:l,name:d,description:g,price:y,stock:w,sale:P,sale_price:q})},children:"Create Item"})]})]})};var f=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],j=r[1],b=Object(s.useState)(""),m=Object(i.a)(b,2),d=m[0],h=m[1],O=Object(s.useState)(""),x=Object(i.a)(O,2),g=x[0],f=x[1],v=Object(s.useState)(""),N=Object(i.a)(v,2),y=N[0],_=N[1],C=Object(s.useState)(""),A=Object(i.a)(C,2),w=A[0],S=A[1],I=Object(s.useState)(""),D=Object(i.a)(I,2),P=D[0],k=D[1],B=Object(s.useState)(""),L=Object(i.a)(B,2),q=L[0],E=L[1],T=Object(s.useState)(""),H=Object(i.a)(T,2),R=(H[0],H[1]),U=Object(s.useState)(""),V=Object(i.a)(U,2),F=(V[0],V[1]),K=Object(s.useState)(!0),M=Object(i.a)(K,2),G=M[0],z=M[1],W=(Object(u.f)(),Object(u.g)().id);Object(s.useEffect)((function(){J()}),[]);var J=function(){p.a.get("/api/get/inventory").then((function(e){var t=JSON.parse(JSON.stringify(e.data));console.log(t),t.map((function(e){e.item_id===W&&(c(e.item_id),j(e.item_type),h(e.item_name),f(e.item_description),_(e.item_price),S(e.item_stock),k(e.item_onsale),E(e.item_saleprice))})),Y()}))},Y=function(){z(!1)};return G?Object(o.jsx)("div",{className:"App",children:"Fetching Data..."}):Object(o.jsxs)("div",{className:"create_item",children:[Object(o.jsxs)("h1",{className:"heading",children:[" Modify ",Object(o.jsx)("span",{children:"Item"})]}),Object(o.jsxs)("div",{className:"create_page",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{className:"create_logo",src:"./images/logo.png",alt:""})}),Object(o.jsx)("span",{className:"input_label",children:"Item ID:"}),Object(o.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)},className:"item_input",type:"text",placeholder:a,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Type:"}),Object(o.jsx)("input",{value:l,onChange:function(e){return j(e.target.value)},className:"item_input",type:"text",placeholder:l,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Name:"}),Object(o.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},className:"item_input",type:"text",placeholder:d,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Description:"}),Object(o.jsx)("textarea",{value:g,onChange:function(e){return f(e.target.value)},className:"item_description",placeholder:g,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Price"}),Object(o.jsx)("input",{value:y,onChange:function(e){return _(e.target.value)},className:"item_input",type:"text",placeholder:y,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Stock:"}),Object(o.jsx)("input",{value:w,onChange:function(e){return S(e.target.value)},className:"item_input",type:"text",placeholder:w,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"On Sale:"}),Object(o.jsx)("input",{value:P,onChange:function(e){return k(e.target.value)},className:"item_input",type:"text",placeholder:P,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item On Sale Price"}),Object(o.jsx)("input",{value:q,onChange:function(e){return E(e.target.value)},className:"item_input",type:"text",placeholder:q,required:!0}),Object(o.jsx)("span",{className:"input_label",children:"Item Image"}),Object(o.jsx)("input",{onChange:function(e){R(e.target.files[0]),F(e.target.files[0].name)},name:"Upload File",className:"item_input",type:"file",required:!0}),Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){console.log("Param_id is",W),console.log("Item id is",a),console.log("Updated Parameters"),console.log(a),console.log(l),console.log(d),console.log(g),console.log(y),console.log(w),console.log(P),console.log(q),p.a.post("api/modifyItem",{id:a,name:d,type:l,description:g,price:y,stock:w,sale:P,sale_price:q})},children:"Update Item"})]})]})},v=(a(63),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:"./images/logo.png",alt:""})}),Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/",children:Object(o.jsx)("span",{className:"header__navItems",children:"Home"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/menu0",children:Object(o.jsx)("span",{className:"header_navItems",children:"Products"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/reviews",children:Object(o.jsx)("span",{className:"header__navItems",children:"Reviews"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/about",children:Object(o.jsx)("span",{className:"header__navItems",children:"About"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/contact",children:Object(o.jsx)("span",{className:"header_navItems",children:"Contact"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/login",children:Object(o.jsx)("span",{className:"header__navItems",children:"Login"})}),Object(o.jsx)(r.b,{style:{textDecoration:"none"},to:"/admin",children:Object(o.jsx)("span",{className:"header__navItems",children:"admin"})})]}),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)("div",{className:"fas fa-search",id:"search-btn",onClick:function(){var e=document.querySelector(".navbar");document.querySelector(".search-form").classList.toggle("active"),e.classList.remove("active")}}),Object(o.jsx)("div",{className:"fas fa-shopping-cart",id:"cart-btn"}),Object(o.jsx)("div",{className:"fas fa-bars",id:"menu-btn",onClick:function(){var e=document.querySelector(".navbar"),t=document.querySelector(".search-form");e.classList.toggle("active"),t.classList.remove("active")}})]}),Object(o.jsxs)("div",{className:"search-form",children:[Object(o.jsx)("input",{type:"search",id:"search-box",placeholder:"Search"}),Object(o.jsx)("label",{htmlFor:"search-box",className:"fas fa-search"})]})]})})}),N=(a(64),a.p+"static/media/pic-1.b105fe43.png"),y=a.p+"static/media/pic-2.5d5e42bf.png",_=a.p+"static/media/pic-3.1ef1ecba.png",C="data:image/png;base64,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",A=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"review",id:"Reviews",children:[Object(o.jsxs)("h1",{className:"heading",children:[" Customer ",Object(o.jsx)("span",{children:"Reviews"})," "]}),Object(o.jsxs)("div",{className:"box-container",children:[Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("img",{src:C,alt:"",className:"quote"}),Object(o.jsx)("p",{children:'"This stuff is great! I love their selection of infusions and accessories, all offered at fair prices."'}),Object(o.jsx)("img",{src:N,className:"user",alt:""}),Object(o.jsx)("h3",{children:"Johnathan Taylor-Thomas"}),Object(o.jsxs)("div",{className:"stars",children:[Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"})]})]}),Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("img",{src:C,alt:"",className:"quote"}),Object(o.jsx)("p",{children:'"Beans and Leaves had everything I need! Would definitely purchase from them again."'}),Object(o.jsx)("img",{src:y,className:"user",alt:""}),Object(o.jsx)("h3",{children:"Kate Beckinsale"}),Object(o.jsxs)("div",{className:"stars",children:[Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("img",{src:C,alt:"",className:"quote"}),Object(o.jsx)("p",{children:'"If you\'re in the market for coffee or tea, look no further than Beans and leaves, the best in town."'}),Object(o.jsx)("img",{src:_,className:"user",alt:""}),Object(o.jsx)("h3",{children:"Chad Chaddsworth"}),Object(o.jsxs)("div",{className:"stars",children:[Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("i",{className:"fas fa-star"})]})]})]})]})})};a(32),a(65);var w=function(){var e=Object(u.f)(),t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),j=l[0],b=l[1],m=Object(s.useState)([]),d=Object(i.a)(m,2),h=(d[0],d[1]),O=Object(s.useState)(""),x=Object(i.a)(O,2);return x[0],x[1],Object(s.useEffect)((function(){p.a.get("/api/get").then((function(e){h(e.data)}))}),[]),Object(o.jsxs)("div",{className:"login",children:[Object(o.jsxs)("h1",{className:"heading",children:[" Log ",Object(o.jsx)("span",{children:" In "})]}),Object(o.jsxs)("div",{className:"login__page",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{className:"login__logo",src:"./images/logo.png",alt:""})}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("The name you entered was : ".concat(c))},children:[Object(o.jsx)("span",{className:"login__email",children:"Email Address:"}),Object(o.jsx)("input",{value:c,onChange:function(e){return n(e.target.value)},className:"login__input"}),Object(o.jsx)("span",{className:"login__password",children:"Password:"}),Object(o.jsx)("input",{value:j,onChange:function(e){return b(e.target.value)},className:"login__input",type:"password",placeholder:"Password",required:!0}),Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){alert("Login check callled"),p.a.post("/api/login/auth",{PassName:c,PassPW:j}).then((function(t){"Found"==t.data?(alert("FOUND"),e("/home")):(alert("NOT FOUND"),e("/about"))}))},children:"Log In"}),Object(o.jsx)("span",{className:"login__head2",children:"Sign Up for emails to get special news and offers"}),Object(o.jsx)("button",{className:"btn",type:"submit",onClick:function(){e("/Register")},children:"Create your Account"}),Object(o.jsxs)("span",{className:"login__head3",children:["By signing up, you agree to our ",Object(o.jsx)("span",{className:"underlineHead3",children:"Privacy Policy"})," and ",Object(o.jsx)("span",{className:"underlineHead3",children:"Terms of Use"})]})]})]})]})},S=a(12),I=(a(69),a(31)),D=a.n(I),P=[{sectionName:"header",navLogo:"./images/logo.png",navliName:["Home","Menu","Reviews","About","Contact","Login","Admin"]},{sectionName:"home",headerBgImage:"./images/home-img.jpeg",headerHeading:"Quality Infusions",headerParagraph:"coffee, tea, and everything in between.",headerBtn:"See More"},{sectionName:["about","us"],sectionImg:"./images/about-img.jpeg",sectionContentHeading:"why choose beans & leaves?",sectionContentParagraph:["At Beans & Leaves we are dedicated to procuring the best in coffee, tea, and accesories.","Our team is always on the search for what products are going to offer the best when it comes to infusions from around the world","Have any questions? feel free to contact us!"],sectionBtn:"learn more"},{sectionName:["our","menu"],menuImages:["./images/menu-1.png","./images/menu-2.png","./images/menu-3.png","./images/menu-4.png","./images/menu-5.png","./images/menu-6.png"],menuHeading:"Fresh Roast",menuPrice:"5.00",menuDiscountPrice:"10.00",menuBtn:"add to cart"},{sectionName:["our","accessories"],accImages:["./images/acc-1.png","./images/acc-2.png","./images/acc-3.png"],accTitle:"Accessory Title",accPrice:"35.99",accDiscountPrice:"45.99",accBtn:"add to cart"},{sectionName:["customer","reviews"],reviewQuoteImage:"./images/quote-img.png",reviewPersonName:["Johnathan Taylor-Thomas","Kate Beckinsale","Chad Chaddsworth"],reviewPersonImages:["./images/pic-1.png","./images/pic-2.png","./images/pic-3.png"],reviewParagraphs:["This stuff is great! I love their selection of infusions and accessories, all offered at fair prices.","Beans and Leaves had everything I need! Would definitely purchase from them again.","If you're in the market for coffee or tea, look no further than Beans and leaves, the best in town."]},{sectionName:["contact","us"],formTitle:"get in touch",contactBtn:"Submit"},{sectionName:["log","in"],formTitle:"log in",contactBtn:"log in"},{sectionName:"footer",footerDescription:["Group 13 | all rights reserved"],footerLi:["Home","Menu","Reviews","About","Contact","Login","Admin"]}];a(88);var k=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],j=r[1],b=Object(s.useState)(""),m=Object(i.a)(b,2),u=m[0],d=m[1],h=Object(s.useState)(""),O=Object(i.a)(h,2),x=O[0],g=O[1],f=Object(s.useState)(""),v=Object(i.a)(f,2),N=v[0],y=v[1],_=Object(s.useState)(""),C=Object(i.a)(_,2),A=C[0],w=C[1],S=Object(s.useState)(""),I=Object(i.a)(S,2),D=I[0],P=I[1],k=Object(s.useState)(""),B=Object(i.a)(k,2),L=B[0],q=B[1],E=Object(s.useState)(""),T=Object(i.a)(E,2),H=T[0],R=T[1],U=Object(s.useState)(""),V=Object(i.a)(U,2),F=V[0],K=V[1],M=Object(s.useState)(""),G=Object(i.a)(M,2),z=G[0],W=G[1],J=Object(s.useState)(""),Y=Object(i.a)(J,2),Q=Y[0],X=Y[1],Z=Object(s.useState)(""),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=Object(s.useState)(""),se=Object(i.a)(ae,2),ce=se[0],ne=se[1],ie=Object(s.useState)(""),re=Object(i.a)(ie,2),le=re[0],oe=re[1],je=Object(s.useState)([]),be=Object(i.a)(je,2),me=be[0],ue=be[1];return Object(o.jsxs)("div",{className:"inputs",children:[Object(o.jsx)("h1",{children:"email of user"}),Object(o.jsx)("input",{type:"text",name:"InEmail",onChange:function(e){c(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){p.a.post("/api/admin/user/find",{email:a}).then((function(e){""==e?oe("User was not found"):(ue(e.data),console.log(e.data),console.log("here"),me.map((function(e){ne(e.user_id),q(e.user_email),K(e.user_first_name),W(e.user_last_name),te(e.user_address),X(e.phone),R(e.password)})))}))},children:"Find"}),Object(o.jsx)("label",{children:le}),me.map((function(e,t){return Object(o.jsx)("div",{className:"UserInfo",children:Object(o.jsxs)("label",{style:{fontSize:"15px"},children:["Email: ",e.user_email,Object(o.jsx)("br",{}),"Name: ",e.user_first_name," ",e.user_last_name,Object(o.jsx)("br",{}),"Phone: ",e.user_phone,Object(o.jsx)("br",{}),"Address: ",e.user_address,Object(o.jsx)("br",{}),"Password: ",e.password]})},t)})),Object(o.jsx)("h1",{children:"Email"}),Object(o.jsx)("input",{type:"text",name:"Email",onChange:function(e){j(e.target.value)}}),Object(o.jsx)("h1",{children:"First Name"}),Object(o.jsx)("input",{type:"text",name:"Firstname",onChange:function(e){g(e.target.value)}}),Object(o.jsx)("h1",{children:"Last Name"}),Object(o.jsx)("input",{type:"text",name:"Lastname",onChange:function(e){y(e.target.value)}}),Object(o.jsx)("h1",{children:"Phone"}),Object(o.jsx)("input",{type:"text",name:"Phone",onChange:function(e){w(e.target.value)}}),Object(o.jsx)("h1",{children:"Address"}),Object(o.jsx)("input",{type:"text",name:"Address",onChange:function(e){P(e.target.value)}}),Object(o.jsx)("h1",{children:"password"}),Object(o.jsx)("input",{type:"text",name:"Password",onChange:function(e){d(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){ne(ce),""==l&&j(L),""==x&&g(F),""==N&&y(z),""==A&&w(Q),""==D&&P(ee),""==u&&d(H),p.a.post("/api/admin/user/update",{email:l,firstname:x,lastname:N,phone:A,address:D,password:u,userID:ce})},children:"Update"})]})};var B=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],j=r[1],b=Object(s.useState)(""),m=Object(i.a)(b,2),u=m[0],d=m[1],h=Object(s.useState)(""),O=Object(i.a)(h,2),x=O[0],g=O[1],f=Object(s.useState)(""),v=Object(i.a)(f,2),N=(v[0],v[1]),y=Object(s.useState)(""),_=Object(i.a)(y,2),C=_[0],A=_[1],w=Object(s.useState)(""),S=Object(i.a)(w,2),I=S[0],D=S[1];return Object(o.jsxs)("div",{className:"Register",children:[" ",Object(o.jsx)("h1",{children:"Register"}),Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("label",{children:" First Name"}),Object(o.jsx)("input",{type:"text",name:"frontName",onChange:function(e){j(e.target.value)}}),Object(o.jsx)("label",{children:"Last Name"}),Object(o.jsx)("input",{type:"text",name:"frontLast",onChange:function(e){d(e.target.value)}}),Object(o.jsx)("label",{children:"Phone Number"}),Object(o.jsx)("input",{type:"text",name:"frontNumber",onChange:function(e){D(e.target.value)}}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"text",name:"frontEmail",onChange:function(e){c(e.target.value)}}),Object(o.jsx)("label",{children:"Address"}),Object(o.jsx)("input",{type:"text",name:"frontAddress",onChange:function(e){A(e.target.value)}}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",name:"frontPW",onChange:function(e){g(e.target.value)}}),Object(o.jsx)("label",{children:"Confirm Password"}),Object(o.jsx)("input",{type:"password",name:"frontConfirm",onChange:function(e){N(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){p.a.post("/api/register/insert",{PassName:l,PassLast:u,PassEmail:a,PassAddress:C,PassNumber:I,PassPw:x})},children:"Register"})]})]})};var L=function(){var e=Object(u.f)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Admin Page"}),Object(o.jsx)("button",{onClick:function(){e("/Admin")},children:"Admin Page"}),Object(o.jsx)("button",{onClick:function(){e("/menu1")},children:"View/Edit Inventory"}),Object(o.jsx)("button",{onClick:function(){},children:"View Orders"})]})};var q=function(){var e=Object(S.b)(),t=Object(s.useState)(null),a=Object(i.a)(t,2),c=a[0],n=a[1];return Object(s.useLayoutEffect)((function(){try{setTimeout((function(){e({type:"GET_DATA",payload:P}),n(P)}),5e3)}catch(t){console.log(t)}})),Object(o.jsxs)(o.Fragment,{children:[c&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r.a,{children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(v,{}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/",element:Object(o.jsx)(h,{})}),Object(o.jsx)(u.a,{path:"/home",element:Object(o.jsx)(h,{})}),Object(o.jsx)(u.a,{path:"/menu:user",element:Object(o.jsx)(x,{})}),Object(o.jsx)(u.a,{path:"/reviews",element:Object(o.jsx)(A,{})}),Object(o.jsx)(u.a,{path:"/about",element:Object(o.jsx)(j,{})}),Object(o.jsx)(u.a,{path:"/contact",element:Object(o.jsx)(b,{})}),Object(o.jsx)(u.a,{path:"/Login",element:Object(o.jsx)(w,{})}),Object(o.jsx)(u.a,{path:"/AdminUser",element:Object(o.jsx)(k,{})}),Object(o.jsx)(u.a,{path:"/Register",element:Object(o.jsx)(B,{})}),Object(o.jsx)(u.a,{path:"/login",element:Object(o.jsx)(w,{})}),Object(o.jsx)(u.a,{path:"/admin",element:Object(o.jsx)(L,{})}),Object(o.jsx)(u.a,{path:"/createItem",element:Object(o.jsx)(g,{})}),Object(o.jsx)(u.a,{path:"/modifyItem:id",element:Object(o.jsx)(f,{})})]}),Object(o.jsx)(m,{})]})})}),!c&&Object(o.jsx)("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)(D.a,{type:"Rings",color:"#6ac7ba",height:80,width:80,timeout:5e3})})]})},E=a(21),T=Object(E.a)({reducer1:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return console.log(e,t,"reducer1"),"GET_DATA"===t.type?e=t.payload:e}}),H=Object(E.b)(T);H.subscribe((function(){return console.log(H.getState())})),n.a.render(Object(o.jsx)(S.a,{store:H,children:Object(o.jsx)(q,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.41e21fe7.chunk.js.map
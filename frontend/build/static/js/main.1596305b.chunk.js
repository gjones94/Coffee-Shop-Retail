(this["webpackJsonpbeans-and-leaves"]=this["webpackJsonpbeans-and-leaves"]||[]).push([[0],{34:function(e,c,s){},38:function(e,c,s){},40:function(e,c,s){},41:function(e,c,s){},42:function(e,c,s){},61:function(e,c,s){},62:function(e,c,s){},63:function(e,c,s){},64:function(e,c,s){},65:function(e,c,s){},85:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s(14),n=s.n(t),i=s(5),r=(s(34),s(3)),j=(s(38),s(0)),l=function(){var e=Object(r.c)((function(e){return e.reducer1}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"about",id:"About",children:[Object(j.jsxs)("h1",{className:"heading",children:[" ",Object(j.jsx)("span",{children:e[2].sectionName[0]})," ",e[2].sectionName[1]," "]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[2].sectionImg,alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[2].sectionContentHeading}),Object(j.jsx)("p",{children:e[2].sectionContentParagraph[0]}),Object(j.jsx)("p",{children:e[2].sectionContentParagraph[1]}),Object(j.jsx)("p",{children:e[2].sectionContentParagraph[2]}),Object(j.jsx)("a",{href:"/Contact",className:"btn aboutBtn",children:"Contact Us"})]})]})]})})},o=(s(40),function(){Object(r.c)((function(e){return e.reducer1}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"contact",id:"Contact",children:[Object(j.jsxs)("h1",{className:"heading",children:[" ",Object(j.jsx)("span",{children:"Contact"})," ","Us"," "]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("iframe",{className:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.720323216416!2d-98.62109934865407!3d29.58273974710037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c667dd6657fdd%3A0x24e55c903c3a270c!2sThe%20University%20of%20Texas%20at%20San%20Antonio!5e0!3m2!1sen!2sus!4v1645745026060!5m2!1sen!2sus",width:"600",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("h3",{children:"Get in Touch"}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("span",{className:"fas fa-user"}),Object(j.jsx)("input",{type:"text",placeholder:"name"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("span",{className:"fas fa-envelope"}),Object(j.jsx)("input",{type:"email",placeholder:"email"})]}),Object(j.jsxs)("div",{className:"inputBox",children:[Object(j.jsx)("span",{className:"fas fa-phone"}),Object(j.jsx)("input",{type:"number",placeholder:"number"})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:"submit"})]})]})]})})}),d=(s(41),function(){var e=Object(r.c)((function(e){return e.reducer1}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"footer",children:[Object(j.jsx)("div",{className:"links",children:e[8].footerLi.map((function(e,c){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("a",{href:"".concat(e),children:e},c)})}))}),Object(j.jsxs)("div",{className:"credit",children:[e[8].footerDescription[0]," ",Object(j.jsx)("span",{children:e[8].footerDescription[1]})," ",e[8].footerDescription[2]]})]})})}),m=(s(42),function(){var e=Object(r.c)((function(e){return e.reducer1}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"home",id:"Home",style:{backgroundImage:"url(".concat(e[1].headerBgImage,")")},children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[1].headerHeading}),Object(j.jsx)("p",{children:e[1].headerParagraph}),Object(j.jsx)("a",{href:"/About",className:"btn",children:e[1].headerBtn})]})})})}),b=s(9),h=s.n(b),O=(s(61),function(){var e=Object(r.c)((function(e){return e.reducer1})),c=Object(a.useState)(),s=Object(i.a)(c,2),t=s[0],n=s[1],l=Object(a.useState)(!0),o=Object(i.a)(l,2),d=o[0],m=o[1];Object(a.useEffect)((function(){h.a.get("api/get/inventory").then((function(e){n(JSON.parse(JSON.stringify(e.data))),m(!1)}))}),[]);var b=function(){alert("Added to cart!")};return d?Object(j.jsx)("div",{className:"App",children:"Loading Data..."}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"menu",id:"Menu",children:[Object(j.jsxs)("h1",{className:"heading",children:[" OUR ",Object(j.jsx)("span",{children:" MENU "})," "]}),Object(j.jsx)("div",{className:"box-container",children:t.map((function(c){return Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("img",{src:"./images/"+c.item_image,alt:""}),Object(j.jsx)("h3",{children:c.item_name}),Object(j.jsxs)("div",{className:"price",children:["$",c.item_price,Object(j.jsx)("span",{children:e[3].menuDiscountPrice})]}),Object(j.jsx)("button",{className:"btn",type:"submit",onClick:b,children:"Add to Cart"})]})}))})]})})}),x=s(2),u=(s(62),function(){window.onscroll=function(){var e=document.querySelector(".navbar"),c=document.querySelector(".search-form");e.classList.remove("active"),c.classList.remove("active")};var e=Object(r.c)((function(e){return e.reducer1}));Object(x.f)();return console.log(e),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("a",{href:"/Home",className:"logo",children:Object(j.jsx)("img",{src:"./images/logo.png",alt:""})}),Object(j.jsx)("nav",{className:"navbar",children:e[0].navliName.map((function(e,c){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("a",{href:"".concat(e),children:e},c)})}))}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("div",{className:"fas fa-search",id:"search-btn",onClick:function(){var e=document.querySelector(".navbar");document.querySelector(".search-form").classList.toggle("active"),e.classList.remove("active")}}),Object(j.jsx)("div",{className:"fas fa-shopping-cart",id:"cart-btn"}),Object(j.jsx)("div",{className:"fas fa-bars",id:"menu-btn",onClick:function(){var e=document.querySelector(".navbar"),c=document.querySelector(".search-form");e.classList.toggle("active"),c.classList.remove("active")}})]}),Object(j.jsxs)("div",{className:"search-form",children:[Object(j.jsx)("input",{type:"search",id:"search-box",placeholder:"Search"}),Object(j.jsx)("label",{htmlFor:"search-box",className:"fas fa-search"})]})]})})}),g=(s(63),function(){var e=Object(r.c)((function(e){return e.reducer1}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"accessories",id:"Accessories",children:[Object(j.jsxs)("h1",{className:"heading",children:[" ",e[4].sectionName[0]," ",Object(j.jsx)("span",{children:e[4].sectionName[1]})," "]}),Object(j.jsxs)("div",{className:"box-container",children:[Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[0],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[1],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[2],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[0],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[1],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[2],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[0],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[1],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[2],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e[4].accImages[0],alt:""})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e[4].accTitle}),Object(j.jsxs)("div",{className:"price",children:["$",e[4].accPrice," ",Object(j.jsx)("span",{children:e[4].accDiscountPrice})]}),Object(j.jsx)("a",{href:"#",className:"btn",children:e[4].accBtn})]})]})]})]})})}),f=(s(64),function(){var e=Object(r.c)((function(e){return e.reducer1}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"review",id:"Reviews",children:[Object(j.jsxs)("h1",{className:"heading",children:[" ",e[5].sectionName[0]," ",Object(j.jsx)("span",{children:e[5].sectionName[1]})," "]}),Object(j.jsxs)("div",{className:"box-container",children:[Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("img",{src:e[5].reviewQuoteImage,alt:"",className:"quote"}),Object(j.jsx)("p",{children:e[5].reviewParagraphs[0]}),Object(j.jsx)("img",{src:e[5].reviewPersonImages[0],className:"user",alt:""}),Object(j.jsx)("h3",{children:e[5].reviewPersonName[0]}),Object(j.jsxs)("div",{className:"stars",children:[Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("img",{src:e[5].reviewQuoteImage,alt:"",className:"quote"}),Object(j.jsx)("p",{children:e[5].reviewParagraphs[1]}),Object(j.jsx)("img",{src:e[5].reviewPersonImages[1],className:"user",alt:""}),Object(j.jsx)("h3",{children:e[5].reviewPersonName[1]}),Object(j.jsxs)("div",{className:"stars",children:[Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("img",{src:e[5].reviewQuoteImage,alt:"",className:"quote"}),Object(j.jsx)("p",{children:e[5].reviewParagraphs[2]}),Object(j.jsx)("img",{src:e[5].reviewPersonImages[2],className:"user",alt:""}),Object(j.jsx)("h3",{children:e[5].reviewPersonName[2]}),Object(j.jsxs)("div",{className:"stars",children:[Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"}),Object(j.jsx)("i",{className:"fas fa-star"})]})]})]})]})})});s(29),s(65);var N=function(){var e=Object(x.f)(),c=Object(a.useState)(""),s=Object(i.a)(c,2),t=s[0],n=s[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),o=l[0],d=l[1],m=Object(a.useState)([]),b=Object(i.a)(m,2),O=(b[0],b[1]),u=Object(a.useState)(""),g=Object(i.a)(u,2);g[0],g[1],Object(a.useEffect)((function(){h.a.get("/api/get").then((function(e){O(e.data)}))}),[]);var f=function(){alert("Login check callled"),h.a.post("/api/login/auth",{PassName:t,PassPW:o}).then((function(c){"Found"==c.data?(alert("FOUND"),e("/home")):(alert("NOT FOUND"),e("/about"))}))};return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsxs)("h1",{className:"heading",children:[" Log ",Object(j.jsx)("span",{children:" In "})]}),Object(j.jsxs)("div",{className:"login__page",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{className:"login__logo",src:"./images/menu-3.png",alt:""})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("The name you entered was : ".concat(t))},children:[Object(j.jsx)("span",{className:"login__email",children:"Email Address:"}),Object(j.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}}),Object(j.jsx)("span",{className:"login__password",children:"Password:"}),Object(j.jsx)("input",{value:o,onChange:function(e){return d(e.target.value)},className:"login__input",type:"password",placeholder:"Password",required:!0}),Object(j.jsx)("button",{className:"btn",type:"submit",onClick:function(){e("/about")},children:"GO HOME"}),Object(j.jsx)("button",{className:"btn",type:"submit",onClick:f,children:"Log In"}),Object(j.jsx)("span",{className:"login__head2",children:"Sign Up for emails to get special news and offers"}),Object(j.jsx)("button",{className:"btn",type:"submit",onClick:f,children:"Create your Account"}),Object(j.jsxs)("span",{className:"login__head3",children:["By signing up, you agree to our ",Object(j.jsx)("span",{className:"underlineHead3",children:"Privacy Policy"})," and ",Object(j.jsx)("span",{className:"underlineHead3",children:"Terms of Use"})]})]})]}),"."]})},p=(s(66),s(28)),v=s.n(p),w=[{sectionName:"header",navLogo:"./images/logo.png",navliName:["Home","Menu","Accessories","Reviews","About","Contact","Login"]},{sectionName:"home",headerBgImage:"./images/home-img.jpeg",headerHeading:"Quality Infusions",headerParagraph:"coffee, tea, and everything in between.",headerBtn:"See More"},{sectionName:["about","us"],sectionImg:"./images/about-img.jpeg",sectionContentHeading:"why choose beans & leaves?",sectionContentParagraph:["At Beans & Leaves we are dedicated to procuring the best in coffee, tea, and accesories.","Our team is always on the search for what products are going to offer the best when it comes to infusions from around the world","Have any questions? feel free to contact us!"],sectionBtn:"learn more"},{sectionName:["our","menu"],menuImages:["./images/menu-1.png","./images/menu-2.png","./images/menu-3.png","./images/menu-4.png","./images/menu-5.png","./images/menu-6.png"],menuHeading:"Fresh Roast",menuPrice:"5.00",menuDiscountPrice:"10.00",menuBtn:"add to cart"},{sectionName:["our","accessories"],accImages:["./images/acc-1.png","./images/acc-2.png","./images/acc-3.png"],accTitle:"Accessory Title",accPrice:"35.99",accDiscountPrice:"45.99",accBtn:"add to cart"},{sectionName:["customer","reviews"],reviewQuoteImage:"./images/quote-img.png",reviewPersonName:["Johnathan Taylor-Thomas","Kate Beckinsale","Chad Chaddsworth"],reviewPersonImages:["./images/pic-1.png","./images/pic-2.png","./images/pic-3.png"],reviewParagraphs:["This stuff is great! I love their selection of infusions and accessories, all offered at fair prices.","Beans and Leaves had everything I need! Would definitely purchase from them again.","If you're in the market for coffee or tea, look no further than Beans and leaves, the best in town."]},{sectionName:["contact","us"],formTitle:"get in touch",contactBtn:"Submit"},{sectionName:["log","in"],formTitle:"log in",contactBtn:"log in"},{sectionName:"footer",footerDescription:["Group 13 | all rights reserved"],footerLi:["Home","Menu","Accessories","Reviews","About","Contact","Login"]}],P=s(15);var y=function(){var e=Object(r.b)(),c=Object(a.useState)(null),s=Object(i.a)(c,2),t=s[0],n=s[1];return Object(a.useLayoutEffect)((function(){try{setTimeout((function(){e({type:"GET_DATA",payload:w}),n(w)}),5e3)}catch(c){console.log(c)}})),Object(j.jsxs)(j.Fragment,{children:[t&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(P.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(u,{}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/",element:Object(j.jsx)(m,{})}),Object(j.jsx)(x.a,{path:"/home",element:Object(j.jsx)(m,{})}),Object(j.jsx)(x.a,{path:"/menu",element:Object(j.jsx)(O,{})}),Object(j.jsx)(x.a,{path:"/accessories",element:Object(j.jsx)(g,{})}),Object(j.jsx)(x.a,{path:"/reviews",element:Object(j.jsx)(f,{})}),Object(j.jsx)(x.a,{path:"/about",element:Object(j.jsx)(l,{})}),Object(j.jsx)(x.a,{path:"/contact",element:Object(j.jsx)(o,{})}),Object(j.jsx)(x.a,{path:"/Login",element:Object(j.jsx)(N,{})})]}),Object(j.jsx)(d,{})]})})}),!t&&Object(j.jsx)("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsx)(v.a,{type:"Bars",color:"#6ac7ba",height:80,width:80,timeout:5e3})})]})},I=s(19),B=Object(I.a)({reducer1:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;return console.log(e,c,"reducer1"),"GET_DATA"===c.type?e=c.payload:e}}),T=Object(I.b)(B);T.subscribe((function(){return console.log(T.getState())})),n.a.render(Object(j.jsx)(r.a,{store:T,children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.1596305b.chunk.js.map
(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{47:function(n,e,t){},48:function(n,e,t){},73:function(n,e,t){"use strict";t.r(e);var c,a,o,i,r,s,l,d=t(0),j=t.n(d),b=t(36),h=t.n(b),x=(t(47),t(48),t(42)),f=t(11),u=t(5),p=t(6),m=p.a.div(c||(c=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: orange;\n    .container {\n        .title {\n            color: #FFF;\n            font-size: 1.8rem;\n            font-family: Roboto;\n            font-weight: 600;\n            margin-top : 10px;\n        }\n        .subtitle {\n            color: #FFF;\n            font-family: Roboto;\n            font-weight: 300;\n            margin-top: 5px;\n        }\n    }\n"]))),O=t(1),g=function(){return Object(O.jsx)(m,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"title",children:"The Job Portal"}),Object(O.jsx)("div",{className:"subtitle",children:"Find your dream Candidates"})]})})},v=t(13),w=p.a.div(a||(a=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    background-color: orange;\n    li {\n        display: inline;\n        text-transform: uppercase;\n        margin: auto 10px;\n        font-family: Roboto;\n        .link {\n            text-decoration: none;\n            color: #FFF;\n            &:hover {\n                cursor: pointer;\n                color: red;\n            }\n        }\n    }\n"]))),y=function(n){return Object(O.jsx)(w,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(v.b,{className:"link",to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(v.b,{className:"link",to:{pathname:"/shortlist",state:n.favItems},children:"Shortlisted"})}),Object(O.jsx)("li",{children:Object(O.jsx)(v.b,{className:"link",to:{pathname:"/rejected",state:n.favItems},children:"Rejected"})})]})})})},C=t(40),N=t.n(C),k=t(26),F=t(20),S=t(41),D=function(n){var e=Object(d.useState)(!1),t=Object(f.a)(e,2),c=t[0],a=t[1],o=Object(d.useState)(!1),i=Object(f.a)(o,2),r=i[0],s=i[1];return Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)(k.a,{className:"icon",onClick:function(){a(!c),c||n.fav(n.beerData)},icon:c?F.a:S.a,style:c?{color:"orange"}:{color:"black"}}),Object(O.jsx)(k.a,{className:"icon",onClick:function(){s(!r),r||n.fav(n.beerData)},icon:r?F.b:F.c,style:r?{color:"orange"}:{color:"black"}}),Object(O.jsx)("img",{src:n.beerData.Image,alt:"",onClick:function(){n.onClickModal(),n.data(n.beerData)}}),Object(O.jsx)("p",{className:"title",children:n.beerData.name}),Object(O.jsx)("p",{className:"subtitle",children:n.beerData.id})]})})},R=p.a.div(o||(o=Object(u.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n\n    .card {\n        width: 25%;\n        margin: 5px;\n        .card-body {\n            width: 100%;\n            height: 100%;\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n            transition: 0.3s;\n            border-radius: 5px;\n            img {\n                width: auto;\n                height: 200px;\n                padding: 10px !important;\n            }\n            p {\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                padding: 0 20px 0 20px;\n            }\n            &:hover {\n                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);\n                transition: 0.3s;\n            }\n            .title {\n                text-transform: uppercase;\n                color: orange;\n                font-size: 1.1rem;\n                font-weight: 600;\n            }\n            .subtitle {\n                color: #6C6C6C\n            }\n            .icon {\n                \n                float: right;\n                margin: 10px;\n            }\n        }\n        &:hover {\n            cursor: pointer;\n        }\n    }\n     \n"]))),I=function(n){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(R,{children:n.beerlist&&n.beerlist.map((function(e,t){return Object(O.jsx)(D,{beerData:e,onClickModal:n.onClickModal,data:n.data,fav:n.fav},t)}))})})},z=p.a.div(i||(i=Object(u.a)(["\n    display: block;\n    margin: 10px auto;\n    height: 50px;\n    input {\n        width: 40%;\n        color: #999b84;\n        font-weight: 400;\n        &:focus {\n            outline: none;\n        }\n        &::placeholder {\n            color: #687980\n        }\n    }\n"]))),M=function(n){return Object(O.jsx)(z,{children:Object(O.jsx)("input",{type:"text",placeholder:n.placeholder,onChange:n.handleChange})})},L=t.p+"static/media/loader.4c0dabf6.gif",T=p.a.div(r||(r=Object(u.a)(["\n    .modal {\n        width: 45%;\n        height: 90%; \n        background: #F7F7F7;\n        position: fixed;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        .modal-body {\n            display: flex;\n            width: 100%;\n            height: 100%;\n            border-radius: 5px;\n            box-shadow: 0 4px 8px 0 rgba(102, 102, 102, 0.8);\n            img {\n                padding: 12px;\n                max-height: 100%;\n                max-width: 22%;\n                float: left;\n            }\n            .header {\n                color: orange !important;\n                font-size: 1.2rem;\n                font-weight: 600;\n                font-family: 'Roboto';\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                padding-right: 10px; \n                margin-bottom: 0;\n            }\n            .content {\n                margin: 10px;\n                text-align: justify;\n                font-family: 'Times New Roman' ;\n                color: #6c6c6c;\n                font-size: 1.2rem;\n                .ingredient {\n                    span {\n                        font-family: 'Roboto';\n                        font-weight: 600;\n                        text-transform: uppercase;\n                        color: #9c9c9c;\n                    }\n                }\n                .tagline {\n                    color: #6C6C6C;\n                    font-size: 1.15rem;\n                    font-weight: 500; \n                }\n                .description {\n                    \n                }\n                .serve {\n                    font-family: 'Roboto';\n                    color: #9c9c9c;\n                    margin-top: 50px;\n                }\n                ul li.lists {\n                    margin-right: 10px\n                }\n            }\n            \n        }\n    }\n"]))),J=function(n){return console.log(n.info),Object(O.jsx)(T,{children:Object(O.jsx)("div",{className:"modal",children:Object(O.jsxs)("div",{className:"modal-body",children:[Object(O.jsx)("img",{src:n.info.Image,alt:""}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("p",{className:"header",children:n.info.name}),Object(O.jsx)("p",{className:"description",children:n.info.id})]})]})})})},P=function(){var n=Object(d.useState)([]),e=Object(f.a)(n,2),t=e[0],c=e[1],a=Object(d.useState)(""),o=Object(f.a)(a,2),i=o[0],r=o[1],s=Object(d.useState)([]),l=Object(f.a)(s,2),j=l[0],b=l[1],h=Object(d.useState)(!1),u=Object(f.a)(h,2),p=u[0],v=u[1],w=Object(d.useState)(!1),C=Object(f.a)(w,2),k=C[0],F=C[1],S=Object(d.useState)([]),D=Object(f.a)(S,2),R=D[0],z=D[1],T=t.filter((function(n){if(n.name.toLowerCase().includes(i.toLowerCase()))return n}));Object(d.useEffect)((function(){F(!0),P()}),[]);var P=function(){N.a.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(n){c(n.data),F(!1)})).catch((function(n){console.log(n)}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)(y,{favItems:R}),Object(O.jsx)(g,{}),Object(O.jsx)(m,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(M,{handleChange:function(n){r(n.target.value)},placeholder:"Search for any User"})})}),k?Object(O.jsx)("img",{src:L,alt:""}):Object(O.jsx)(I,{onClickModal:function(){return v(!p)},beerlist:T,data:function(n){return function(n){b(n),console.log(n)}(n)},fav:function(n){return function(n){-1!==R.indexOf(n)||z([].concat(Object(x.a)(R),[n])),console.log(R)}(n)}}),p&&j?Object(O.jsx)(J,{info:j}):null]})},B=t(3),E=p.a.div(s||(s=Object(u.a)(["\n\n"]))),A=function(n){return Object(O.jsxs)(E,{children:[Object(O.jsx)(m,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"title",children:"Shortlisted Candidates"})})}),Object(O.jsx)(R,{children:n.location.state&&n.location.state.map((function(n,e){return Object(O.jsx)(D,{beerData:n})}))})]})},H=p.a.div(l||(l=Object(u.a)(["\n\n"]))),U=function(n){return Object(O.jsxs)(H,{children:[Object(O.jsx)(m,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"title",children:"Rejected Candidates"})})}),Object(O.jsx)(R,{children:n.location.state&&n.location.state.map((function(n,e){return Object(O.jsx)(D,{beerData:n})}))})]})};var q=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(v.a,{children:Object(O.jsxs)(B.c,{children:[Object(O.jsx)(B.a,{exact:!0,path:"/",component:P}),Object(O.jsx)(B.a,{path:"/shortlist",component:A}),Object(O.jsx)(B.a,{path:"/rejected",component:U})]})})})},G=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),a(n),o(n),i(n)}))};h.a.render(Object(O.jsx)(j.a.StrictMode,{children:Object(O.jsx)(q,{})}),document.getElementById("root")),G()}},[[73,1,2]]]);
//# sourceMappingURL=main.0472c3d4.chunk.js.map
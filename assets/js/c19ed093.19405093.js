"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[562],{3790:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),a=n(6010),o=n(1976),i=n(8746),l=n(1699),s=n(1614);const c="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function u(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function h(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t,n=e.item,a=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(u,{href:n.href,icon:a,title:n.label,description:null==i?void 0:i.description})}function v(e){var t=e.item;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{key:t,item:e}))})))}},4922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(3790),l=n(1976),s=["components"],c={tags:["Installation","Docker"]},d="Installation",m={unversionedId:"install/index",id:"install/index",title:"Installation",description:"Quick Setup",source:"@site/docs/install/index.md",sourceDirName:"install",slug:"/install/",permalink:"/docs/install/",draft:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/dev/apps/docs/docs/install/index.md",tags:[{label:"Installation",permalink:"/docs/tags/installation"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{tags:["Installation","Docker"]},sidebar:"tutorialSidebar",next:{title:"Docker",permalink:"/docs/install/docker"}},p={},u=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Installation Options",id:"installation-options",level:2}],h={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"quick-setup"},"Quick Setup"),(0,o.kt)("p",null,"Images are hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/mauricenino/dashdot"},"DockerHub"),",\nand are available for both AMD64 and ARM devices."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container run -it \\\n  -p 80:3001 \\\n  -v /etc/os-release:/etc/os-release:ro \\\n  -v /proc/1/ns/net:/mnt/host_ns_net:ro \\\n  -v /media:/mnt/host_media:ro \\\n  -v /mnt:/mnt/host_mnt:ro \\\n  --privileged \\\n  mauricenino/dashdot\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--privileged")," flag is needed to correctly determine the memory and storage info.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The volume mount on ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/os-release:/etc/os-release:ro")," is for the\ndashboard to show the OS version of the host instead of the OS of the docker\ncontainer (which is running on Alpine Linux). If you wish to show the docker\ncontainer OS instead, just remove this line. If you are not able to use this\nmount, you can pass a custom OS with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DASHDOT_OVERRIDE_OS")," flag.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The volume mount on ",(0,o.kt)("inlineCode",{parentName:"p"},"/proc/1/ns/net:/host_ns_net:ro")," is needed to\ncorrectly determine the network info. If you are not able to use this mount,\nyou will need to fall back to ",(0,o.kt)("inlineCode",{parentName:"p"},"--net host"),", or you will only get the network\nstats of the container instead of the host.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The volume mounts on ",(0,o.kt)("inlineCode",{parentName:"p"},"/media:/mnt/host_media:ro")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt:/mnt/host_mnt:ro"),"\nare needed to read the usage stats of all drives. If your drives are mounted somewhere\nelse, you need to pass that drive path with the following format: ",(0,o.kt)("inlineCode",{parentName:"p"},"-v /{path}:/mnt/host_{path}:ro"),"."))))),(0,o.kt)("h2",{id:"installation-options"},"Installation Options"),(0,o.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
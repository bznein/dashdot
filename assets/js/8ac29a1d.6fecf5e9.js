"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[814],{1700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:5,tags:["Configuration","Styles"]},d="Network Widget",p={unversionedId:"config/widget-styles/network",id:"config/widget-styles/network",title:"Network Widget",description:"DASHDOTSPEEDTEST_INTERVAL",source:"@site/docs/config/widget-styles/network.md",sourceDirName:"config/widget-styles",slug:"/config/widget-styles/network",permalink:"/docs/config/widget-styles/network",draft:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/dev/apps/docs/docs/config/widget-styles/network.md",tags:[{label:"Configuration",permalink:"/docs/tags/configuration"},{label:"Styles",permalink:"/docs/tags/styles"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["Configuration","Styles"]},sidebar:"tutorialSidebar",previous:{title:"RAM Widget",permalink:"/docs/config/widget-styles/memory"},next:{title:"GPU Widget",permalink:"/docs/config/widget-styles/graphics"}},s={},u=[{value:"<code>DASHDOT_SPEED_TEST_INTERVAL</code>",id:"dashdot_speed_test_interval",level:2},{value:"<code>DASHDOT_NETWORK_LABEL_LIST</code>",id:"dashdot_network_label_list",level:2},{value:"<code>DASHDOT_NETWORK_WIDGET_GROW</code>",id:"dashdot_network_widget_grow",level:2},{value:"<code>DASHDOT_NETWORK_WIDGET_MIN_WIDTH</code>",id:"dashdot_network_widget_min_width",level:2},{value:"<code>DASHDOT_NETWORK_DATAPOINTS</code>",id:"dashdot_network_datapoints",level:2},{value:"<code>DASHDOT_NETWORK_POLL_INTERVAL</code>",id:"dashdot_network_poll_interval",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-widget"},"Network Widget"),(0,o.kt)("h2",{id:"dashdot_speed_test_interval"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_SPEED_TEST_INTERVAL")),(0,o.kt)("p",null,"At which interval the network speed-test should be rerun (in minutes)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"60"))),(0,o.kt)("h2",{id:"dashdot_network_label_list"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_NETWORK_LABEL_LIST")),(0,o.kt)("p",null,"Change the order of the labels in the list, to change the position in the widget, or remove an item from the list, to remove it from the widget (The available options are: ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"speed_up"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"speed_down"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"interface_speed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"public_ip"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"type,speed_up,speed_down,interface_speed"))),(0,o.kt)("h2",{id:"dashdot_network_widget_grow"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_NETWORK_WIDGET_GROW")),(0,o.kt)("p",null,"To adjust the relative size of the Network widget."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"6"))),(0,o.kt)("h2",{id:"dashdot_network_widget_min_width"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_NETWORK_WIDGET_MIN_WIDTH")),(0,o.kt)("p",null,"To adjust the minimum width of the Network widget (in px)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"500"))),(0,o.kt)("h2",{id:"dashdot_network_datapoints"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_NETWORK_DATAPOINTS")),(0,o.kt)("p",null,"The amount of datapoints in each of the Network graphs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"20"))),(0,o.kt)("h2",{id:"dashdot_network_poll_interval"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_NETWORK_POLL_INTERVAL")),(0,o.kt)("p",null,"Read the Network load every x milliseconds."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"1000"))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);
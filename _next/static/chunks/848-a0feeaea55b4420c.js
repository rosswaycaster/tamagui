(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{381:function(e,t,s){"use strict";var r=s(1706),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var s,i,n,o,l,c,_,d,x=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),c=document.createRange(),_=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(s){if(s.stopPropagation(),t.format){if(s.preventDefault(),void 0===s.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e)}t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(d),c.selectNodeContents(d),_.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");x=!0}catch(b){n&&console.error("unable to copy using execCommand: ",b),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),x=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),s="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=s.replace(/#{\s*key\s*}/g,i),window.prompt(o,e)}}finally{_&&("function"==typeof _.removeRange?_.removeRange(c):_.removeAllRanges()),d&&document.body.removeChild(d),l()}return x}},6819:function(e,t,s){"use strict";s.d(t,{i:function(){return o}});var r=s(2322);s(2784);var a=s(1363),i=s(6486);let n=e=>{switch(e){case"Tamagui (No Compiler)":case"Tamagui":return"$pink9";case"Stitches":return"$yellow9";case"Stitches 0.1.9":return"$yellow4";case"Styled Components":case"SC":return"$red9";case"react-native-web":case"RN":case"RNW":case"React Native":return"$purple9";case"Emotion":return"$green9";case"Dripsy":return"$blue9";case"NativeBase":return"$orange9";default:return"gray"}};function o(e){let{data:t,large:s,skipOthers:o=!1,animateEnter:l=!1}=e,c=Math.max(...t.map(e=>e.value));return(0,r.jsx)(a.FA,{space:"$2",my:"$4",children:t.map((e,t)=>{let o="".concat(Math.round(e.value/c*100),"%");return(0,r.jsxs)(a.sL,{space:"$3",children:[(0,r.jsx)("div",{className:(0,i.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  "+(s?" _w-120px":" _w-70px")),children:(0,r.jsx)("p",{className:(0,i.concatClassName)("  is_Paragraph font_body _cur-text _ussel-text _ml-0px _mr-0px _ww-break-word _bxs-border-box _dsp-inline  _mb--3px _mt--3px _ta-right _whiteSpace-nowrap _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3w5fb2 _fos-3slpxi _lh-3or5rz  "+("Tamagui"===e.name?" _fow-700":" _fow-400")),children:e.name},e.name)}),(0,r.jsx)("div",{className:"  is_XStack _fg-1 _mr-65px _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-center ",children:(0,r.jsx)(a.FA,{bc:n(e.name),o:(e.name,1),width:o,height:20,br:"$2",position:"relative",jc:"center",scaleX:1,animation:"lazy",...l&&{enterStyle:{opacity:0,scaleX:0}},children:(0,r.jsxs)("p",{className:"  is_Paragraph font_body _r-lrpkci _pos-absolute _whiteSpace-nowrap _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcbz _ls-3w5fa7 _fos-3slpwn _lh-3or5r4 _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline _transform-1hmnzav ",children:[e.value,"ms"]})})})]},t)})})}s(4967)},3749:function(e,t,s){"use strict";s.d(t,{F:function(){return i}});var r=s(2322);s(2784);var a=s(6819);let i=()=>(0,r.jsx)(a.i,{animateEnter:!0,skipOthers:!0,large:!0,data:[{name:"Tamagui",value:.02},{name:"react-native-web",value:.063},{name:"Dripsy",value:.108},{name:"NativeBase",value:.73}]})},4031:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(797),a=s(1363);let i=(0,r.z)(a.FA,{name:"Card",className:"transition all ease-in ms100",borderRadius:"$2",borderWidth:2,borderColor:"transparent",backgroundColor:"$background",flexShrink:1,elevation:"$1",hoverStyle:{backgroundColor:"$backgroundHover",elevation:"$3",y:-4},pressStyle:{backgroundColor:"$backgroundPress",elevation:"$0",y:0}})},1891:function(e,t,s){"use strict";s.d(t,{f:function(){return i}});var r=s(2322),a=s(5503);s(2784);let i=()=>(0,r.jsx)("div",{className:"  is_YStack _mr-lrpjp9 _bblr-100px _bbrr-100px _btrr-100px _btlr-100px _jc-center _h-25px _w-25px _bg-8htuv0 _mt-2px _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:(0,r.jsx)(a.J,{size:12,color:"var(--colorHover)"})});s(2989)},5795:function(e,t,s){"use strict";s.d(t,{E:function(){return i},w:function(){return n}});var r=s(797),a=s(6986);let i=(0,r.z)(a.Paragraph,{name:"Code",tag:"code",fontFamily:"$mono",lineHeight:20,size:"$3",cursor:"inherit",whiteSpace:"pre",padding:"$1",borderRadius:"$4",variants:{colored:{true:{color:"$color",backgroundColor:"$background"}}}}),n=(0,r.z)(a.Paragraph,{name:"CodeInline",tag:"code",fontFamily:"$mono",color:"$colorHover",backgroundColor:"$background",cursor:"inherit",br:"$3",fontSize:"inherit",p:"$1.5"})},9486:function(e,t,s){"use strict";s.d(t,{s:function(){return l}});var r=s(2322);s(2784);var a=s(357),i=s(1363),n=s(5795),o=s(1871);function l(e){let{source:t,language:s,...l}=e;return(0,r.jsx)(i.FA,{br:"$4",className:"language-".concat(s),bc:"$backgroundHover",boc:"$borderColor",ov:"hidden",bw:1,f:1,...l,children:(0,r.jsx)(a.Z,{contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,r.jsx)(a.Z,{horizontal:!0,contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,r.jsx)(o.S,{f:1,children:(0,r.jsx)(n.E,{dangerouslySetInnerHTML:{__html:t}})})})})})}},4313:function(e,t,s){"use strict";s.d(t,{D:function(){return a}});var r=s(2322);s(2784);let a=e=>{let{plain:t,...s}=e;return(0,r.jsx)("svg",{width:"30",height:"31",viewBox:"0 0 30 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.3899 23.9519C21.1526 24.8925 22.0678 25.9858 22.0678 25.9858C27.391 25.8172 29.5878 22.5222 29.8042 22.1977C29.8162 22.1797 29.8221 22.1709 29.8221 22.1722C29.8221 14.062 26.1611 7.47729 26.1611 7.47729C22.5255 4.75695 19.0424 4.83322 19.0424 4.83322L18.6865 5.24C23.0085 6.53661 25.017 8.44339 25.017 8.44339C22.3729 7.01966 19.7797 6.3078 17.3645 6.02814C15.5339 5.82475 13.7797 5.8756 12.2289 6.07899C12.0957 6.07899 11.9819 6.09836 11.8537 6.1202C11.835 6.12337 11.816 6.1266 11.7967 6.12983C10.9068 6.23153 8.74581 6.53661 6.02547 7.73153C5.08479 8.13831 4.52547 8.44339 4.52547 8.44339C4.52547 8.44339 6.61022 6.43492 11.1865 5.13831L10.9323 4.83322C10.9323 4.83322 7.47462 4.75695 3.81361 7.47729C3.81361 7.47729 0.152588 14.062 0.152588 22.1722C0.152588 22.1722 2.28818 25.8332 7.90683 26.0112C7.90683 26.0112 8.8475 24.8925 9.61022 23.9264C6.3814 22.9603 5.16106 20.9519 5.16106 20.9519C5.16106 20.9519 5.4153 21.1298 5.87293 21.3841C5.88864 21.3841 5.90435 21.3938 5.92607 21.4072C5.93949 21.4155 5.9552 21.4252 5.97462 21.4349C6.01276 21.4603 6.05089 21.4794 6.08903 21.4985C6.12717 21.5175 6.1653 21.5366 6.20344 21.562C6.83903 21.918 7.47462 22.1976 8.05937 22.4264C9.10174 22.8586 10.3475 23.24 11.7967 23.5197C13.7034 23.8756 15.9407 24.0027 18.3814 23.5451C19.5763 23.3163 20.7967 22.9858 22.0678 22.4519C22.9577 22.1214 23.9492 21.6383 24.9916 20.9519C24.9916 20.9519 23.7204 23.0112 20.3899 23.9519ZM16.9323 17.0112C16.9323 15.4603 18.0763 14.2146 19.5255 14.2146C20.9492 14.2146 22.1187 15.4603 22.1187 17.0112C22.1187 18.562 20.9746 19.8078 19.5255 19.8078C18.1017 19.8078 16.9323 18.562 16.9323 17.0112ZM7.65259 17.0112C7.65259 15.4603 8.79666 14.2146 10.2458 14.2146C11.695 14.2146 12.8645 15.4603 12.839 17.0112C12.839 18.562 11.695 19.8078 10.2458 19.8078C8.82208 19.8078 7.65259 18.562 7.65259 17.0112Z",fill:t?"var(--color)":"#7289DA"})})}},6298:function(e,t,s){"use strict";s.d(t,{q:function(){return k},M:function(){return y}});var r=s(2322),a=s(2895),i=s(1428),n=s(2029),o=s(9097),l=s.n(o),c=s(2784),_=s(1363),d=s(9145),x=s(3084),p=s(8682),b=s(7889);let m=e=>{let{tint:t}=(0,b.d5)();return(0,r.jsx)(p.Q,{tint:t,...e})};var u=s(9486),f=s(5479),h=s(3972),w=s(2341),g=s(6486);let A="  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",v=[{name:"Bouncy",description:"A bouncy spring",animation:"bouncy",settings:a.s.animations.bouncy},{name:"Lazy",description:"A lazy, straightforward spring",animation:"lazy",settings:a.s.animations.lazy},{name:"Quick",description:"A super fast spring",animation:"quick",settings:a.s.animations.quick}],j=!1;function y(e){let{animationCode:t}=e,{tint:s}=(0,b.d5)(),[a,i]=(0,c.useState)(!0);return(0,r.jsx)("div",{className:A,children:(0,r.jsxs)(f._k,{position:"relative",space:"$8",children:[(0,r.jsxs)(_.FA,{zi:1,space:"$3",children:[(0,r.jsxs)(h.PP,{pos:"relative",children:["Universal ",(0,r.jsx)("span",{className:"rainbow clip-text",children:"Animations"})]}),(0,r.jsx)(h.vk,{children:"Better platform targeting with animation drivers that can be changed without changing code."})]}),(0,r.jsxs)("div",{className:"  is_XStack _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,r.jsx)(w.Q,{name:s,children:(0,r.jsx)("div",{className:"  is_YStack _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _zi-100 _bg-8htuv0 _mr-lrpkci _als-center _fg-2 _fd-column _miw-5511 _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch _bxsh-asvu26 ",children:(0,r.jsx)(k,{})})}),(0,r.jsxs)("div",{className:"  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _transform-1rgx1si _oy-hidden _ox-hidden _bblr-lmimfe _bbrr-lmimfe _btrr-lmimfe _btlr-lmimfe _pos-relative _bxsh-1duix2k _dsp-_sm_none ",children:[(0,r.jsxs)("div",{className:(0,g.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0  _jc-center _ai-center _pos-absolute _t-0px _l-0px _r-0px _b-0px  "+(a?" _o-1 _pe-auto":" _o-0 _pe-none")),children:[(0,r.jsx)("div",{className:"  is_YStack _o-0dot5 _t-6011 _pos-absolute _l-0px _r-0px _b-0px _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "}),(0,r.jsx)(d.zx,{accessibilityLabel:"View more",y:200,iconAfter:n.K,size:"$4",themeInverse:!0,zi:10,onPress:()=>i(!1),children:"View more"})]}),(0,r.jsx)(u.s,{pe:a?"none":"auto",maxHeight:500,height:500,maxWidth:530,minWidth:530,language:"tsx",source:t})]})]}),(0,r.jsxs)(_.sL,{als:"center",space:"$3",children:[(0,r.jsx)(l(),{legacyBehavior:!0,href:"/docs/core/animations#css",passHref:!0,children:(0,r.jsx)(d.zx,{accessibilityLabel:"CSS docs",fontFamily:"$silkscreen",theme:s,tag:"a",children:"CSS \xbb"})}),(0,r.jsx)(l(),{legacyBehavior:!0,href:"/docs/core/animations#reanimated",passHref:!0,children:(0,r.jsx)(d.zx,{accessibilityLabel:"Reanimated docs",fontFamily:"$silkscreen",tag:"a",children:"Reanimated \xbb"})}),(0,r.jsx)(l(),{legacyBehavior:!0,href:"/docs/core/animations",passHref:!0,children:(0,r.jsx)(d.zx,{accessibilityLabel:"Animation docs",fontFamily:"$silkscreen",tag:"a",children:"Docs \xbb"})})]})]})})}let k=(0,c.memo)(()=>{let[e,t]=(0,c.useState)(0),s=v[e],a=(0,c.useRef)(null),[n,o]=(0,c.useState)(2),l=(0,i.O)(a),_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;o(t=>(t+e)%3)};(0,c.useEffect)(()=>{if(!l)return;let e=e=>{"ArrowRight"===e.key&&_(),"ArrowLeft"===e.key&&_(-1)};return j||(j=!0,setTimeout(()=>{_()},250)),window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[l]);let d="string"==typeof s.settings?[["transition",s.settings]]:Object.entries(s.settings);return(0,r.jsxs)("div",{className:"  is_XStack _als-center _h-305px _oy-hidden _ox-hidden _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _w-10011 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _brs-solid _bls-solid _bts-solid _bbs-solid _blw-1px _bbw-1px _brw-1px _btw-1px _fd-1b2fkz3 _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _bxsh-9enu5w _transform-199k8sv ",children:[(0,r.jsx)("div",{ref:a,className:"  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _w-6011 _jc-center _ai-center _bg-180kg62 _pos-relative _w-_sm_10011 ",children:l?(0,r.jsx)(m,{position:n,animation:s.animation}):null}),(0,r.jsx)("div",{className:"  is_Separator _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _bbs-solid _brs-solid _fg-1 _bls-solid _bts-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-cx1iw7 "}),(0,r.jsxs)("div",{className:"  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _w-4011 _dsp-_sm_none ",children:[(0,r.jsx)(w.Q,{name:"alt2",children:(0,r.jsx)("div",{className:"  is_YStack _bg-cbjnf9 _fg-1 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:v.map((e,a)=>{let i=e===s;return(0,r.jsx)(x.HC,{...i&&{bc:"$backgroundHover"},theme:i?"active":"alt2",px:"$4",py:"$2",title:e.name,subTitle:e.description,cursor:"pointer",hoverStyle:{bc:"$backgroundHover"},onPress(){t(a),_()}},e.name)})})}),(0,r.jsx)("div",{className:"  is_Separator _mah-0px _h-0px _fg-1 _brs-solid _bls-solid _bts-solid _bbs-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-n24na2 "}),(0,r.jsx)("div",{className:"  is_XStack _jc-center _pl-1aj14ak _pb-1aj14ak _pr-1aj14ak _pt-1aj14ak _bg-180kg62 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:d.map((e,t)=>{let[s,a]=e;return"type"===s?null:(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)("div",{className:A,children:[(0,r.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3w5fb2 _fos-3slpxi _lh-3or5rz _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:s}),(0,r.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcek _ls-3w5fcs _fos-3slpz8 _lh-3or5tp _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:a})]}),t<d.length-1&&(0,r.jsx)("div",{className:"  is_Separator _ml-15px _mr-15px _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _bbs-solid _brs-solid _fg-1 _bls-solid _bts-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-cx1iw7 "})]},s)})})]})]})});s(5555)},4522:function(e,t,s){"use strict";s.d(t,{D:function(){return h}});var r=s(2322),a=s(2930),i=s(2784),n=s(1363),o=s(8114),l=s(9145),c=s(9486),_=s(5479),d=s(3972),x=s(8184),p=s(7889),b=s(6486),m=s(2341);let u="  is_Paragraph font_body _pl-1aj14ca _pr-1aj14ca _ta-center _mih-50px _als-center _maw-480px _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcff _ls-3w5fdn _fos-3slq03 _lh-3or5uk _ml-0px _mb-1aj14ak _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",f="  is_H5 font_heading _als-center _col-qpe6k3 _tt-3tb9i2 _ff-4yewjq _fow-3uqcga _ls-3w5fei _fos-3slq0y _lh-3or5vf _ml-0px _mb-0px _mr-0px _mt-0px _cur-text _ussel-text _ww-break-word _bxs-border-box _dsp-inline ";function h(e){let{examples:t,onlyDemo:s}=e,{tint:c}=(0,p.d5)(),[h,g]=(0,i.useState)(0),A=t[h];return(0,r.jsx)(_._k,{position:"relative",children:(0,r.jsxs)(n.FA,{zi:1,space:"$6",children:[!s&&(0,r.jsxs)(n.FA,{ai:"center",space:"$3",children:[(0,r.jsx)(d.PP,{children:"A better style system"}),(0,r.jsxs)(d.vk,{tag:"a",ai:"center",jc:"center",children:["A multi-faceted optimizing compiler enables",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:["SSR-first atomic CSS","eliminating inline style logic","flattening your component tree","removing dead code entirely"][h]}),"."]})]}),(0,r.jsx)(o.E4,{scrollable:!0,bordered:!0,bc:"$color2",chromeless:!0,theme:c,maxWidth:"100%",als:"center",children:t.map((e,t)=>(0,r.jsx)(l.zx,{accessibilityLabel:"See example",onPress:()=>g(t),theme:t===h?"active":null,o:t===h?1:.5,borderRadius:0,size:"$4",fontFamily:"$silkscreen",chromeless:!0,children:e.name},t))}),(0,r.jsxs)("div",{className:(0,b.concatClassName)("  is_XStack _jc-7aqssh _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _fd-_sm_column "+(s?"  _fd-column":" ")),children:[(0,r.jsxs)(n.FA,{f:1,maxWidth:"50%",...s&&{maxWidth:"100%"},$sm:{maxWidth:"100%"},px:"$2",space:"$2",children:[(0,r.jsx)("h5",{className:f,children:"Input"}),(0,r.jsx)("p",{className:u,children:(0,r.jsx)("span",{style:{opacity:.65},children:A.input.description})}),(0,r.jsx)(w,{...A.input})]},"input".concat(h)),(0,r.jsx)(m.Q,{name:"alt2",children:(0,r.jsx)("div",{className:(0,b.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0  _pe-none _zi-1000 _t-95px _jc-center _ai-center _r-0px _l-0px _pos-absolute  _dsp-_sm_none "+(s?"  _dsp-none":" ")),children:(0,r.jsx)(x.b,{als:"center",p:"$3",mb:0,children:(0,r.jsx)(a.N,{color:"var(--colorHover)",size:22})})})}),(0,r.jsxs)(n.FA,{f:1,maxWidth:"50%",...s&&{maxWidth:"100%",mt:"$6"},$sm:{maxWidth:"100%",mt:"$6"},px:"$2",space:"$2",children:[(0,r.jsx)("h5",{className:f,children:"Output"}),(0,r.jsx)("p",{className:u,children:(0,r.jsx)("span",{style:{opacity:.65},children:A.output.description})}),(0,r.jsx)(w,{...A.output})]},"output".concat(h))]})]})})}let w=(0,i.memo)(e=>{let{examples:t}=e,[s,a]=(0,i.useState)(0),n=t[s],{tint:_}=(0,p.d5)();return(0,r.jsxs)("div",{className:"  is_YStack _fg-1 _oy-hidden _ox-hidden _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:[(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.E4,{size:"$2",theme:_,bordered:!0,zi:10,mb:"$-3",als:"center",children:t.map((e,t)=>(0,r.jsx)(l.zx,{accessibilityLabel:"See example",onPress:()=>a(t),theme:t===s?"active":"alt1",size:"$2",borderRadius:"$0",children:e.name},t))})}),(0,r.jsx)("div",{className:"  is_XStack _fg-1 _maw-10011 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:(0,r.jsx)("div",{className:"  is_YStack _o-0hover-1 _o-0dot9 _maw-10011 _fg-1 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:(0,r.jsx)(c.s,{height:325,theme:"Card",maxHeight:325,f:1,language:n.language,source:n.code})})})]})});s(7762)},3972:function(e,t,s){"use strict";s.d(t,{PP:function(){return n},t_:function(){return i},vk:function(){return o}});var r=s(797),a=s(6986);let i=(0,r.z)(a.H1,{className:"word-break-keep-all",size:"$9",mb:"$2",$gtSm:{size:"$10",maxWidth:"90%"}}),n=(0,r.z)(a.H2,{className:"word-break-keep-all",name:"HomeH2",ta:"center",als:"center",size:"$11",maw:720,mt:"$-2",$sm:{size:"$10"},$xs:{size:"$9"}}),o=(0,r.z)(a.H3,{className:"word-break-keep-all",fontFamily:"$body",name:"HomeH3",ta:"center",theme:"alt1",als:"center",fow:"400",px:20,size:"$8",ls:-.15,maw:690,$sm:{fow:"400",size:"$6",color:"$color",textTransform:"none"}})},8184:function(e,t,s){"use strict";s.d(t,{b:function(){return i}});var r=s(797),a=s(1363);let i=(0,r.z)(a.FA,{br:100,bc:"$background",p:"$2",als:"flex-start"})},8054:function(e,t,s){"use strict";s.d(t,{S:function(){return m}});var r=s(2322),a=s(5032),i=s(6935),n=s(2930),o=s(2784),l=s(2341),c=s(858),_=s(1363),d=s(5295),x=s(9145),p={src:"/_next/static/media/kanye.8a1ab422.jpg",height:182,width:182,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAApAdH/8QAHBAAAQQDAQAAAAAAAAAAAAAAAwECEyIABAUG/9oACAEBAAE/ADbHYF6djoTIJH2W0Uef/8QAGhEAAQUBAAAAAAAAAAAAAAAAAQACAxESMv/aAAgBAgEBPwCJud0T0v/EABkRAAEFAAAAAAAAAAAAAAAAAAEAAyEyM//aAAgBAwEBPwB45wKBf//Z",blurWidth:8,blurHeight:8};let b="  is_Paragraph font_body _col-rnt87j _cur-text _ussel-text _ff-4yewjq _fow-3uqcdp _ls-3w5fbx _fos-3slpyd _lh-3or5su _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",m=(0,o.memo)(e=>{let{theme:t,alt:s,onHoverSection:o,pointerEvents:m,pointerEventsControls:u,...f}=e;return(0,r.jsx)("div",{style:{display:"flex",alignItems:"stretch",contain:"strict",minWidth:325,minHeight:200},children:(0,r.jsx)(l.Q,{name:s?"alt".concat(s):null,children:(0,r.jsxs)(c.Zb,{overflow:"visible",bordered:!0,br:"$7",pointerEvents:m,p:0,ai:"stretch",mb:40,...f,children:[(0,r.jsxs)(_.sL,{ai:"center",p:"$4",space:"$5",children:[(0,r.jsx)("div",{className:"  is_Square _w-90px _h-90px _miw-90px _maw-90px _mah-90px _mih-90px _bblr-lmimdo _bbrr-lmimdo _btrr-lmimdo _btlr-lmimdo _oy-hidden _ox-hidden _jc-center _ai-center _fd-column _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 ",children:(0,r.jsx)(d.E,{width:90,height:90,src:p.src})}),(0,r.jsxs)("div",{className:"  is_YStack _jc-center _mt--10px _fd-column _miw-165px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,r.jsx)("p",{className:"  is_Paragraph font_body _fow-700 _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _ls-3w5fcs _fos-3slpz8 _lh-3or5tp _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",children:"Spaceship"}),(0,r.jsx)("p",{className:b,children:"Kanye West"}),(0,r.jsx)("p",{className:b,children:"College Dropout"})]})]}),(0,r.jsx)("div",{className:"  is_Separator _mb--1px _mah-0px _h-0px _fg-1 _brs-solid _bls-solid _bts-solid _bbs-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch _transform-n24na2 "}),(0,r.jsxs)(_.sL,{zi:1e3,w:"100%",px:"$6",py:"$4",bc:"$backgroundHover",bbrr:17,bblr:17,ai:"center",space:"$5",jc:"center",pointerEvents:m,children:[(0,r.jsx)(a.F,{size:20}),(0,r.jsx)(x.zx,{bordered:!0,hoverStyle:{elevation:"$6",scale:1.025},my:"$-7",icon:i.d,size:"$8",circular:!0,elevation:"$2",pointerEvents:u}),(0,r.jsx)(n.N,{size:20})]})]})})})});s(4854)},1871:function(e,t,s){"use strict";s.d(t,{S:function(){return i}});var r=s(797),a=s(1363);let i=(0,r.z)(a.FA,{overflow:"visible",tag:"pre",padding:"$4",borderRadius:"$4",bc:"$background"})},2009:function(e,t,s){"use strict";s.d(t,{B:function(){return d}});var r=s(2322),a=s(1363),i=s(4031),n=s(4313),o=s(70),l=s(2341);let c="  is_Paragraph font_body _cur-pointer _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcek _ls-3w5fcs _fos-3slpz8 _lh-3or5tp _ml-0px _mb-0px _mr-0px _mt-0px _ww-break-word _bxs-border-box _dsp-inline ",_="  is_H4 font_silkscreen _col-b5vn3b _ff-4yewjq _fow-3uqch5 _ls-3w5ffd _fos-3slq1t _lh-3or5wa _ml-0px _mb-0px _mr-0px _mt-0px _cur-pointer _ussel-text _ww-break-word _bxs-border-box _dsp-inline ",d=()=>(0,r.jsxs)(a.sL,{space:"$4",$sm:{flexDirection:"column"},children:[(0,r.jsxs)(i.Z,{width:"33.33%",jc:"center",$sm:{width:"auto"},space:"$2",tag:"a",href:"https://twitter.com/tamagui_js",target:"_blank",rel:"noopener noreferrer",p:"$5",children:[(0,r.jsxs)("svg",{width:"30",height:"31",viewBox:"0 0 30 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{clipPath:"url(#clip0)",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.9993 6.50637C27.9673 6.9667 26.8601 7.27923 25.6985 7.4186C26.8851 6.70064 27.796 5.56035 28.2222 4.20468C27.1108 4.87196 25.8823 5.35341 24.5745 5.61525C23.5258 4.48764 22.0341 3.78235 20.3795 3.78235C17.2082 3.78235 14.6343 6.38389 14.6343 9.58936C14.6343 10.0455 14.6845 10.4889 14.7848 10.9113C10.009 10.6705 5.77634 8.35616 2.94345 4.84239C2.45041 5.69972 2.16629 6.69641 2.16629 7.76068C2.16629 9.77519 3.18162 11.5532 4.72341 12.5921C3.78329 12.5626 2.89749 12.3007 2.12033 11.8657C2.12033 11.8911 2.12033 11.9122 2.12033 11.9375C2.12033 14.7502 4.10084 17.0984 6.729 17.6305C6.24849 17.7614 5.73874 17.8332 5.21645 17.8332C4.84458 17.8332 4.48525 17.7952 4.13427 17.7276C4.86547 20.0335 6.98805 21.7144 9.49921 21.7609C7.53123 23.3193 5.05768 24.2484 2.36267 24.2484C1.89888 24.2484 1.44344 24.2188 0.992188 24.1681C3.5326 25.8152 6.55351 26.7781 9.80005 26.7781C20.367 26.7781 26.1456 17.9303 26.1456 10.2566C26.1456 10.0032 26.1414 9.75407 26.1289 9.5049C27.2528 8.68558 28.2264 7.66355 28.9952 6.49792L28.9993 6.50637Z",fill:"#1d9bf0"})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0",children:(0,r.jsx)("rect",{width:"28",height:"23",fill:"white",transform:"translate(1 3.78235)"})})})]}),(0,r.jsx)("h4",{className:_,children:"Twitter"}),(0,r.jsx)(l.Q,{name:"alt2",children:(0,r.jsx)("p",{className:c,children:"Announcements and general updates."})})]}),(0,r.jsxs)(i.Z,{width:"33.33%",jc:"center",space:"$2",$sm:{width:"auto"},tag:"a",href:"https://discord.gg/4qh6tdcVDa",target:"_blank",rel:"noopener noreferrer",p:"$5",children:[(0,r.jsx)(n.D,{}),(0,r.jsx)("h4",{className:_,children:"Discord"}),(0,r.jsx)(l.Q,{name:"alt2",children:(0,r.jsx)("p",{className:c,children:"Get involved and get questions answered."})})]}),(0,r.jsxs)(i.Z,{width:"33.33%",jc:"center",$sm:{width:"auto"},space:"$2",tag:"a",href:"https://github.com/tamagui/tamagui",target:"_blank",rel:"noopener noreferrer",p:"$5",children:[(0,r.jsx)(o.E,{}),(0,r.jsx)("h4",{className:_,children:"GitHub"}),(0,r.jsx)(l.Q,{name:"alt2",children:(0,r.jsx)("p",{className:c,children:"Issues, feature requests, and contributing."})})]})]});s(5932)},8362:function(e,t,s){"use strict";s.d(t,{V:function(){return o}});var r=s(381),a=s.n(r),i=s(2784),n=s(4697);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,[s,r]=(0,i.useState)(!1),o=(0,n.z)(()=>{let t=a()(e);r(t)});return(0,i.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{r(!1)},t);return()=>clearTimeout(e)},[t,s]),{value:e,onCopy:o,hasCopied:s}}},4967:function(){},2989:function(){},5555:function(){},7762:function(){},4854:function(){},5932:function(){},1706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],r=0;r<e.rangeCount;r++)s.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);
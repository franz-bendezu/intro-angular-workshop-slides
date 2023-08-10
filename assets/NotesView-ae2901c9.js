import{o as n,f as i,g as e,d as U,i as q,a as G,c as S,b as I,s as J,v as d,w as u,j as M,n as L,h as t,m as a,p as K,x as V,t as B,F as O,k as F,y as Q,z as W,A as X,_ as Y}from"./index-823592de.js";import{N as H}from"./NoteDisplay-bef2d41c.js";const ee={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oe=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),te=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ne=[oe,te];function se(_,c){return n(),i("svg",ee,ne)}const le={name:"carbon-zoom-out",render:se},ae={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ie=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ce=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),re=[ie,ce];function de(_,c){return n(),i("svg",ae,re)}const ue={name:"carbon-zoom-in",render:de},_e={class:"h-full flex flex-col"},pe={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},he={class:"flex-none border-t border-gray-400 border-opacity-20"},me={class:"flex gap-1 items-center px-6 py-3"},ve=e("div",{class:"flex-auto"},null,-1),fe={class:"p2 text-center"},ge=U({__name:"NotesView",setup(_){q(G);const c=S.titleTemplate.replace("%s",S.title||"Slidev");I({title:`Notes - ${c}`});const{isFullscreen:T,toggle:p}=Q,s=J("slidev-notes-font-size",18),l=d(()=>{var o;return((o=u.lastUpdate)==null?void 0:o.type)==="viewer"?u.viewerPage:u.page}),h=d(()=>M.find(o=>o.path===`${l.value}`)),r=d(()=>M.find(o=>o.path===`${l.value+1}`));function Z(){s.value=s.value+1}function j(){s.value=s.value-1}return(o,m)=>{var v,f,g,x,b,w,y,z,$,k,N,C;const A=W,R=X,D=ue,E=le;return n(),i(O,null,[e("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:L({width:`${(l.value-1)/t(F)*100}%`})},null,4),e("div",_e,[e("div",{class:"px-5 flex-auto h-full overflow-auto",style:L({fontSize:`${t(s)}px`})},[a(H,{note:(g=(f=(v=h.value)==null?void 0:v.meta)==null?void 0:f.slide)==null?void 0:g.note,"note-html":(w=(b=(x=h.value)==null?void 0:x.meta)==null?void 0:b.slide)==null?void 0:w.noteHTML,placeholder:`No notes for Slide ${l.value}.`},null,8,["note","note-html","placeholder"])],4),r.value?(n(),i("div",pe,[a(H,{class:"opacity-50",note:($=(z=(y=r.value)==null?void 0:y.meta)==null?void 0:z.slide)==null?void 0:$.note,"note-html":(C=(N=(k=r.value)==null?void 0:k.meta)==null?void 0:N.slide)==null?void 0:C.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):K("v-if",!0),e("div",he,[e("div",me,[e("button",{class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...P)=>t(p)&&t(p)(...P))},[t(T)?(n(),V(A,{key:0})):(n(),V(R,{key:1}))]),e("button",{class:"slidev-icon-btn",onClick:Z},[a(D)]),e("button",{class:"slidev-icon-btn",onClick:j},[a(E)]),ve,e("div",fe,B(l.value)+" / "+B(t(F)),1)])])])],64)}}}),we=Y(ge,[["__file","/home/runner/work/intro-angular-workshop-slides/intro-angular-workshop-slides/node_modules/@slidev/client/internals/NotesView.vue"]]);export{we as default};

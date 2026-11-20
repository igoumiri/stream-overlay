import{c as b,d as f}from"./geometry-CZa0vdP3.js";function m(t){return(t/100).toLocaleString(void 0,{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})}function c(t,n){return`${t} ${n}${t===1?"":"s"}`}function $(t,n=Date.now()){if(!t)return null;const e=new Date(t);if(isNaN(e.getTime()))return null;const s=e.toLocaleString(void 0,{dateStyle:"long",timeStyle:"short"}),r=e.getTime()-n;if(r<=0)return null;const i=r/6e4,o=i/60,a=o/24;let l;if(a>=1)l=`${c(Math.floor(a),"day")} left`;else if(o>=12)l=`${c(Math.floor(o),"hour")} left`;else if(o>=1){const u=Math.floor(o),d=Math.floor(i-u*60);l=`${c(u,"hour")}${d>0?" "+c(d,"minute"):""} left`}else l=`${c(Math.max(1,Math.round(i)),"minute")} left`;return{text:l,tooltip:s}}function y(t,n,e,s=Date.now){if(!t)return()=>{};let r;const i=()=>clearInterval(r),o=()=>{const a=$(n,s());return a?(t.textContent=a.text,t.title=a.tooltip,!0):(t.style.display="none",t.textContent="",t.title="",i(),!1)};return o()&&e&&(r=setInterval(o,e)),i}const p=f.findIndex(t=>t.a==="#00d084"),h=[...f.slice(p),...f.slice(0,p)].map(t=>t.a);function g(t){return h[t%h.length]}function x(t,n){const{lap:e,fraction:s}=b(Math.max(0,t),n),r=Math.round(s*1e3)/10;return`<div class="pb-wrap"><div class="pb-track"${e>0?` style="background:${g(e-1)}"`:""}><div class="pb-fill" style="width:${r}%;background:${g(e)}"></div></div><div class="pb-label">${m(t)} raised of ${m(n)} goal</div></div>`}const w=`
.pb-wrap {
  margin: 0.5em 0;
}

.pb-track {
  background: #e5e7eb;
  border-radius: 999px;
  height: 10px;
  overflow: hidden;
}

.pb-fill {
  background: #00d084;
  height: 100%;
  transition: width 0.4s ease;
}

.pb-label {
  font-size: 0.85em;
  color: #5a6b7a;
  margin-top: 0.4em;
}
`;export{x as a,m as f,y as m,w as p};
//# sourceMappingURL=progress-Dikyvz0d.js.map

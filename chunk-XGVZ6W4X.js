import{d}from"./chunk-OEEGONCE.js";import{Fb as w,Z as g}from"./chunk-HLOLBMP2.js";import{Ad as f,Bd as W,Kd as u,Ld as m,Vd as a,Yd as h,f as S,g as b,td as c,ud as v}from"./chunk-2KY3FXLI.js";var p=S(W());function P(e){function o(n){return!(n.ownVisible&&!u)}e=e.filter(o);for(let n=0;n<e.length;n++){let t=e[n];Array.isArray(t.nav)&&(t.nav=t.nav.filter(o),P(t.nav))}return e}function T(){return b(this,null,function*(){if(m)return;function e(t){t.forEach(r=>{a.push(r)}),g.emit("WEB_FINISH"),window.__FINISHED__=!0}let o=P(a);if(a.splice(0,a.length),!u)return e(o);if(window.localStorage.getItem(f.s_url)!==c.datetime){let t=[f.token,f.isDark,f.authCode],r=window.localStorage.length;for(let i=0;i<r;i++){let l=window.localStorage.key(i);t.includes(l)||window.localStorage.removeItem(l)}window.localStorage.setItem(f.s_url,c.datetime),p.default.removeItem(f.website),e(o),u&&setTimeout(()=>{g.emit("NOTIFICATION",{type:"success",title:h("_buildSuccess"),content:c.datetime,config:{nzDuration:0}})},1e3);return}try{let t=(yield p.default.getItem(f.website))||o;e(t)}catch{e(o)}})}function y(e){return e=e||a,m?w({content:JSON.stringify(e),path:v}):p.default.setItem(f.website,e)}function B(e){e||=a;let{page:o,id:n}=d(),t=!e[o].nav[n].collapsed;return e[o].nav[n].collapsed=t,e[o].nav[n].nav.map(r=>(r.collapsed=t,r)),m||y(e),t}function F(e){let o=!1;function n(t){for(let r=0;r<t.length;r++){let i=t[r];if(i.name){if(i.id===e.id){o=!0,t.splice(r,1);break}continue}Array.isArray(i.nav)&&(i.nav=i.nav.filter(l=>l.name&&l.id===e.id?(o=!0,!1):!0),n(i.nav))}}if(n(a),o){y(a);let{q:t}=d();t&&window.location.reload()}return o}function H(e,o){let n=Object.keys(o),t=!1;function r(i){for(let l=0;l<i.length;l++){let s=i[l];if(s.name){if(s.id===e.id){t=!0;for(let I of n)s[I]=o[I];break}continue}Array.isArray(s.nav)&&r(s.nav)}}return r(a),y(a),t}export{T as a,y as b,B as c,F as d,H as e};

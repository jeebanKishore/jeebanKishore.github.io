import{t as r}from"./chunk-C-7EWX3l.js";import{$ as Ki$1,$n as ie,$t as Vv,Ar as rI,Br as uV,Bt as Ud,C as Cl,Cn as at,Ct as Ro$1,D as Dw,Dt as Sh,E as Dl,Er as pu,F as Fm,Ft as Tl,G as It$1,Gt as Ur,Hr as ue,Ht as Ui$1,I as Fv,Jt as VD,K as Iw,Kt as Uy,L as Ge,Ln as di$1,M as Fe$1,N as Fg,R as Gm,Rn as dj,Sr as nr$1,Tr as pj,Un as eo$1,Ut as Ul,V as I,Vn as eg,W as Ij,Wn as ey,Wr as uj,Xr as wc,Xt as Vh,Y as K,Zr as we$1,_ as Bd,_n as _h,_r as m,_t as Pg,a as $y,at as Mi$1,br as me$1,bt as Pv,c as Al,cn as Y$1,cr as kn$1,ct as Mw,d as Au,dr as le,dt as Nw,ei as wt$1,et as Km,fi as z,gi as zr$1,gt as Pe$1,hn as _,ht as PD,in as Ww,ir as jc,j as FE,jr as rj,jt as Sv,k as Ea$1,l as Am,li as yp,mi as zc,mr as lj,n as $d,nt as Lv,on as Xi$1,or as jv,p as B$1,pr as lh,q as Ji$1,qn as fu,qt as V$1,r as $l,rr as iw,rt as M,sr as kE,ti as xb,tt as Kt$1,u as As,ui as yr$1,ut as Ns,vn as _i$1,wn as aw,wr as ov,z as Hd,zt as Ub}from"./chunk-DO2LSRoZ.js";function ha(e,a){return e?a?e.endsWith(`/`)?a.startsWith(`/`)?e+a.slice(1):e+a:a.startsWith(`/`)?e+a:`${e}/${a}`:e:a}function fa(e){let a=e.search(/#|\?|$/);return e[a-1]===`/`?e.slice(0,a-1)+e.slice(a):e}function it(e){return e&&e[0]!==`?`?`?${e}`:e}var me=(()=>{class e{historyGo(t){throw new Error(``)}static ɵfac=function(n){return new(n||e)};static ɵprov=V$1({token:e,factory:()=>m(Zo),providedIn:`root`})}return e})();var Ko=new M(``);var Zo=(()=>{class e extends me{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??m(Pe$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return ha(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+it(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${n}${o}`:n}pushState(t,n,o,i){let r=this.prepareExternalUrl(o+it(i));this._platformLocation.pushState(t,n,r)}replaceState(t,n,o,i){let r=this.prepareExternalUrl(o+it(i));this._platformLocation.replaceState(t,n,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static ɵfac=function(n){return new(n||e)(Y$1($l),Y$1(Ko,8))};static ɵprov=V$1({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var ga=(()=>{class e{_subject=new K;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=qo(fa(ba(n))),this._locationStrategy.onPopState(o=>{let i={url:this.path(!0),pop:!0,state:o.state,type:o.type};o.hasUAVisualTransition&&(i.hasUAVisualTransition=!0),this._subject.next(i)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=``){return this.path()==this.normalize(t+it(n))}normalize(t){return e.stripTrailingSlash(Xo(this._basePath,ba(t)))}prepareExternalUrl(t){return t&&t[0]!==`/`&&(t=`/`+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n=``,o=null){this._locationStrategy.pushState(o,``,t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+it(n)),o)}replaceState(t,n=``,o=null){this._locationStrategy.replaceState(o,``,t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+it(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t=``,n){this._urlChangeListeners.forEach(o=>o(t,n))}subscribe(t,n,o){return this._subject.subscribe({next:t,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=it;static joinWithSlash=ha;static stripTrailingSlash=fa;static ɵfac=function(n){return new(n||e)(Y$1(me))};static ɵprov=V$1({token:e,factory:()=>Yo(),providedIn:`root`})}return e})();function Yo(){return new ga(Y$1(me))}function Xo(e,a){if(!e||!a.startsWith(e))return a;let t=a.substring(e.length);return t===``||[`/`,`;`,`?`,`#`].includes(t[0])?t:a}function ba(e){return e.replace(/\/index\.html$/,``)}function qo(e){if(new RegExp(`^(https?:)?//`).test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var Ea={ADP:[void 0,void 0,0],AFN:[void 0,`؋`,0],ALL:[void 0,void 0,0],AMD:[void 0,`֏`,2],AOA:[void 0,`Kz`],ARS:[void 0,`$`],AUD:[`A$`,`$`],AZN:[void 0,`₼`],BAM:[void 0,`KM`],BBD:[void 0,`$`],BDT:[void 0,`৳`],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,`$`],BND:[void 0,`$`],BOB:[void 0,`Bs`],BRL:[`R$`],BSD:[void 0,`$`],BWP:[void 0,`P`],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,`$`],CAD:[`CA$`,`$`,2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,`$`,0],CNY:[`CN¥`,`¥`],COP:[void 0,`$`,2],CRC:[void 0,`₡`,2],CUC:[void 0,`$`],CUP:[void 0,`$`],CZK:[void 0,`Kč`,2],DJF:[void 0,void 0,0],DKK:[void 0,`kr`,2],DOP:[void 0,`$`],EGP:[void 0,`E£`],ESP:[void 0,`₧`,0],EUR:[`€`],FJD:[void 0,`$`],FKP:[void 0,`£`],GBP:[`£`],GEL:[void 0,`₾`],GHS:[void 0,`GH₵`],GIP:[void 0,`£`],GNF:[void 0,`FG`,0],GTQ:[void 0,`Q`],GYD:[void 0,`$`,2],HKD:[`HK$`,`$`],HNL:[void 0,`L`],HRK:[void 0,`kn`],HUF:[void 0,`Ft`,2],IDR:[void 0,`Rp`,2],ILS:[`₪`],INR:[`₹`],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,`kr`,0],ITL:[void 0,void 0,0],JMD:[void 0,`$`],JOD:[void 0,void 0,3],JPY:[`¥`,void 0,0],KGS:[void 0,`⃀`],KHR:[void 0,`៛`],KMF:[void 0,`CF`,0],KPW:[void 0,`₩`,0],KRW:[`₩`,void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,`$`],KZT:[void 0,`₸`],LAK:[void 0,`₭`,0],LBP:[void 0,`L£`,0],LKR:[void 0,`Rs`],LRD:[void 0,`$`],LTL:[void 0,`Lt`],LUF:[void 0,void 0,0],LVL:[void 0,`Ls`],LYD:[void 0,void 0,3],MGA:[void 0,`Ar`,0],MGF:[void 0,void 0,0],MMK:[void 0,`K`,0],MNT:[void 0,`₮`,2],MRO:[void 0,void 0,0],MUR:[void 0,`Rs`,2],MXN:[`MX$`,`$`],MYR:[void 0,`RM`],NAD:[void 0,`$`],NGN:[void 0,`₦`],NIO:[void 0,`C$`],NOK:[void 0,`kr`,2],NPR:[void 0,`Rs`],NZD:[`NZ$`,`$`],OMR:[void 0,void 0,3],PHP:[`₱`],PKR:[void 0,`Rs`,2],PLN:[void 0,`zł`],PYG:[void 0,`₲`,0],RON:[void 0,`lei`],RSD:[void 0,void 0,0],RUB:[void 0,`₽`],RWF:[void 0,`RF`,0],SBD:[void 0,`$`],SEK:[void 0,`kr`,2],SGD:[void 0,`$`],SHP:[void 0,`£`],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,`$`],SSP:[void 0,`£`],STD:[void 0,void 0,0],STN:[void 0,`Db`],SYP:[void 0,`£`,0],THB:[void 0,`฿`],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,`T$`],TRL:[void 0,void 0,0],TRY:[void 0,`₺`],TTD:[void 0,`$`],TWD:[`NT$`,`$`,2],TZS:[void 0,void 0,2],UAH:[void 0,`₴`],UGX:[void 0,void 0,0],USD:[`$`],UYI:[void 0,void 0,0],UYU:[void 0,`$`],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,`Bs`,2],VND:[`₫`,void 0,0],VUV:[void 0,void 0,0],XAF:[`FCFA`,void 0,0],XCD:[`EC$`,`$`],XCG:[`Cg.`],XOF:[`F CFA`,void 0,0],XPF:[`CFPF`,void 0,0],XXX:[`¤`],YER:[void 0,void 0,0],ZAR:[void 0,`R`],ZMK:[void 0,void 0,0],ZMW:[void 0,`ZK`],ZWD:[void 0,void 0,0]};var _e=(function(e){return e[e.Decimal=0]=`Decimal`,e[e.Percent=1]=`Percent`,e[e.Currency=2]=`Currency`,e[e.Scientific=3]=`Scientific`,e})(_e||{});var k=(function(e){return e[e.Format=0]=`Format`,e[e.Standalone=1]=`Standalone`,e})(k||{});var v=(function(e){return e[e.Narrow=0]=`Narrow`,e[e.Abbreviated=1]=`Abbreviated`,e[e.Wide=2]=`Wide`,e[e.Short=3]=`Short`,e})(v||{});var B=(function(e){return e[e.Short=0]=`Short`,e[e.Medium=1]=`Medium`,e[e.Long=2]=`Long`,e[e.Full=3]=`Full`,e})(B||{});var N={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function wa(e){return Dw(e)[jc.LocaleId]}function Ca(e,a,t){let n=Dw(e);return V(V([n[jc.DayPeriodsFormat],n[jc.DayPeriodsStandalone]],a),t)}function xa(e,a,t){let n=Dw(e);return V(V([n[jc.DaysFormat],n[jc.DaysStandalone]],a),t)}function Aa(e,a,t){let n=Dw(e);return V(V([n[jc.MonthsFormat],n[jc.MonthsStandalone]],a),t)}function Ia(e,a){let n=Dw(e)[jc.Eras];return V(n,a)}function zt(e,a){return V(Dw(e)[jc.DateFormat],a)}function Ut(e,a){return V(Dw(e)[jc.TimeFormat],a)}function jt(e,a){let n=Dw(e)[jc.DateTimeFormat];return V(n,a)}function X(e,a){let t=Dw(e),n=t[jc.NumberSymbols][a];if(typeof n>`u`){if(a===N.CurrencyDecimal)return t[jc.NumberSymbols][N.Decimal];if(a===N.CurrencyGroup)return t[jc.NumberSymbols][N.Group]}return n}function nn(e,a){return Dw(e)[jc.NumberFormats][a]}function Jo(e){return Dw(e)[jc.Currencies]}function Na(e){if(!e[jc.ExtraData])throw new I(2303,!1)}function Ma(e){let a=Dw(e);return Na(a),(a[jc.ExtraData][2]||[]).map(n=>typeof n==`string`?Xe(n):[Xe(n[0]),Xe(n[1])])}function Fa(e,a,t){let n=Dw(e);Na(n);return V(V([n[jc.ExtraData][0],n[jc.ExtraData][1]],a)||[],t)||[]}function V(e,a){for(let t=a;t>-1;t--)if(typeof e[t]<`u`)return e[t];throw new I(2304,!1)}function Xe(e){let[a,t]=e.split(`:`);return{hours:+a,minutes:+t}}function Ta(e,a,t=`en`){let n=Jo(t)[e]||Ea[e]||[],o=n[1];return a===`narrow`&&typeof o==`string`?o:n[0]||e}var ti=2;function ka(e){let a,t=Ea[e];return t&&(a=t[2]),typeof a==`number`?a:ti}var ei=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var pe=Object.create(null);var ni=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var ai=256;function Oa(e,a,t,n){let o=pi(e);oi(a),a=et(t,a)||a;let r=[],s;for(;a;)if(s=ni.exec(a),s){r=r.concat(s.slice(1));let l=r.pop();if(!l)break;a=l}else{r.push(a);break}let d=o.getTimezoneOffset();n&&(d=La(n,d),o=mi(o,n));let u=``;return r.forEach(l=>{let m=li(l);u+=m?m(o,t,d):l===`''`?`'`:l.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),u}function oi(e){if(e.length>ai)throw new I(2300,!1)}function ve(e,a,t){let n=new Date(0);return n.setFullYear(e,a,t),n.setHours(0,0,0),n}function et(e,a){let t=wa(e);if(pe[t]??=Object.create(null),pe[t][a])return pe[t][a];let n=``;switch(a){case`shortDate`:n=zt(e,B.Short);break;case`mediumDate`:n=zt(e,B.Medium);break;case`longDate`:n=zt(e,B.Long);break;case`fullDate`:n=zt(e,B.Full);break;case`shortTime`:n=Ut(e,B.Short);break;case`mediumTime`:n=Ut(e,B.Medium);break;case`longTime`:n=Ut(e,B.Long);break;case`fullTime`:n=Ut(e,B.Full);break;case`short`:let o=et(e,`shortTime`),i=et(e,`shortDate`);n=fe(jt(e,B.Short),[o,i]);break;case`medium`:let r=et(e,`mediumTime`),s=et(e,`mediumDate`);n=fe(jt(e,B.Medium),[r,s]);break;case`long`:let d=et(e,`longTime`),u=et(e,`longDate`);n=fe(jt(e,B.Long),[d,u]);break;case`full`:let l=et(e,`fullTime`),m=et(e,`fullDate`);n=fe(jt(e,B.Full),[l,m])}return n&&(pe[t][a]=n),n}function fe(e,a){return a&&(e=e.replace(/\{([^}]+)}/g,function(t,n){return Object.hasOwn(a,n)?a[n]:t})),e}function Y(e,a,t=`-`,n,o){let i=``;(e<0||o&&e<=0)&&(o?e=-e+1:(e=-e,i=t));let r=String(e);for(;r.length<a;)r=`0`+r;return n&&(r=r.slice(r.length-a)),i+r}function ii(e,a){return Y(e,3).substring(0,a)}function w(e,a,t=0,n=!1,o=!1){return function(i,r){let s=ri(e,i);if((t>0||s>-t)&&(s+=t),e===3)s===0&&t===-12&&(s=12);else if(e===6)return ii(s,a);let d=X(r,N.MinusSign);return Y(s,a,d,n,o)}}function ri(e,a){switch(e){case 0:return a.getFullYear();case 1:return a.getMonth();case 2:return a.getDate();case 3:return a.getHours();case 4:return a.getMinutes();case 5:return a.getSeconds();case 6:return a.getMilliseconds();case 7:return a.getDay();default:throw new I(2301,!1)}}function D(e,a,t=k.Format,n=!1){return function(o,i){return si(o,i,e,a,t,n)}}function si(e,a,t,n,o,i){switch(t){case 2:return Aa(a,o,n)[e.getMonth()];case 1:return xa(a,o,n)[e.getDay()];case 0:let r=e.getHours(),s=e.getMinutes();if(i){let u=Ma(a),l=Fa(a,o,n),m=u.findIndex(f=>{if(Array.isArray(f)){let[p,C]=f,z=r>=p.hours&&s>=p.minutes,j=r<C.hours||r===C.hours&&s<C.minutes;if(p.hours<C.hours){if(z&&j)return!0}else if(z||j)return!0}else if(f.hours===r&&f.minutes===s)return!0;return!1});if(m!==-1)return l[m]}return Ca(a,o,n)[r<12?0:1];case 3:return Ia(a,n)[e.getFullYear()<=0?0:1];default:throw new I(2302,!1)}}function be(e){return function(a,t,n){let o=-1*n,i=X(t,N.MinusSign),r=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case 0:return(o>=0?`+`:``)+Y(r,2,i)+Y(Math.abs(o%60),2,i);case 1:return`GMT`+(o>=0?`+`:``)+Y(r,1,i);case 2:return`GMT`+(o>=0?`+`:``)+Y(r,2,i)+`:`+Y(Math.abs(o%60),2,i);case 3:return n===0?`Z`:(o>=0?`+`:``)+Y(r,2,i)+`:`+Y(Math.abs(o%60),2,i);default:throw new I(2310,!1)}}}var ci=0;var ge=4;function di(e){let a=ve(e,ci,1).getDay();return ve(e,0,1+(a<=ge?ge:ge+7)-a)}function Ra(e){let a=e.getDay(),t=a===0?-3:ge-a;return ve(e.getFullYear(),e.getMonth(),e.getDate()+t)}function qe(e,a=!1){return function(t,n){let o;if(a){let i=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,r=t.getDate();o=1+Math.floor((r+i)/7)}else{let i=Ra(t),r=di(i.getFullYear()),s=i.getTime()-r.getTime();o=1+Math.round(s/6048e5)}return Y(o,e,X(n,N.MinusSign))}}function he(e,a=!1){return function(t,n){return Y(Ra(t).getFullYear(),e,X(n,N.MinusSign),a)}}var Qe=Object.create(null);function li(e){if(Qe[e])return Qe[e];let a;switch(e){case`G`:case`GG`:case`GGG`:a=D(3,v.Abbreviated);break;case`GGGG`:a=D(3,v.Wide);break;case`GGGGG`:a=D(3,v.Narrow);break;case`y`:a=w(0,1,0,!1,!0);break;case`yy`:a=w(0,2,0,!0,!0);break;case`yyy`:a=w(0,3,0,!1,!0);break;case`yyyy`:a=w(0,4,0,!1,!0);break;case`Y`:a=he(1);break;case`YY`:a=he(2,!0);break;case`YYY`:a=he(3);break;case`YYYY`:a=he(4);break;case`M`:case`L`:a=w(1,1,1);break;case`MM`:case`LL`:a=w(1,2,1);break;case`MMM`:a=D(2,v.Abbreviated);break;case`MMMM`:a=D(2,v.Wide);break;case`MMMMM`:a=D(2,v.Narrow);break;case`LLL`:a=D(2,v.Abbreviated,k.Standalone);break;case`LLLL`:a=D(2,v.Wide,k.Standalone);break;case`LLLLL`:a=D(2,v.Narrow,k.Standalone);break;case`w`:a=qe(1);break;case`ww`:a=qe(2);break;case`W`:a=qe(1,!0);break;case`d`:a=w(2,1);break;case`dd`:a=w(2,2);break;case`c`:case`cc`:a=w(7,1);break;case`ccc`:a=D(1,v.Abbreviated,k.Standalone);break;case`cccc`:a=D(1,v.Wide,k.Standalone);break;case`ccccc`:a=D(1,v.Narrow,k.Standalone);break;case`cccccc`:a=D(1,v.Short,k.Standalone);break;case`E`:case`EE`:case`EEE`:a=D(1,v.Abbreviated);break;case`EEEE`:a=D(1,v.Wide);break;case`EEEEE`:a=D(1,v.Narrow);break;case`EEEEEE`:a=D(1,v.Short);break;case`a`:case`aa`:case`aaa`:a=D(0,v.Abbreviated);break;case`aaaa`:a=D(0,v.Wide);break;case`aaaaa`:a=D(0,v.Narrow);break;case`b`:case`bb`:case`bbb`:a=D(0,v.Abbreviated,k.Standalone,!0);break;case`bbbb`:a=D(0,v.Wide,k.Standalone,!0);break;case`bbbbb`:a=D(0,v.Narrow,k.Standalone,!0);break;case`B`:case`BB`:case`BBB`:a=D(0,v.Abbreviated,k.Format,!0);break;case`BBBB`:a=D(0,v.Wide,k.Format,!0);break;case`BBBBB`:a=D(0,v.Narrow,k.Format,!0);break;case`h`:a=w(3,1,-12);break;case`hh`:a=w(3,2,-12);break;case`H`:a=w(3,1);break;case`HH`:a=w(3,2);break;case`m`:a=w(4,1);break;case`mm`:a=w(4,2);break;case`s`:a=w(5,1);break;case`ss`:a=w(5,2);break;case`S`:a=w(6,1);break;case`SS`:a=w(6,2);break;case`SSS`:a=w(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:a=be(0);break;case`ZZZZZ`:a=be(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:a=be(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:a=be(2);break;default:return null}return Qe[e]=a,a}function La(e,a){e=e.replace(/:/g,``);let t=Date.parse(`Jan 01, 1970 00:00:00 `+e)/6e4;return isNaN(t)?a:t}function ui(e,a){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+a),e}function mi(e,a,t){let o=e.getTimezoneOffset();return ui(e,-1*(La(a,o)-o))}function pi(e){if(va(e))return e;if(typeof e==`number`&&!isNaN(e))return new Date(e);if(typeof e==`string`){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[o,i=1,r=1]=e.split(`-`).map(s=>+s);return ve(o,i-1,r)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let n;if(n=e.match(ei))return fi(n)}let a=new Date(e);if(!va(a))throw new I(2311,!1);return a}function fi(e){let a=new Date(0),t=0,n=0,o=e[8]?a.setUTCFullYear:a.setFullYear,i=e[8]?a.setUTCHours:a.setHours;e[9]&&(t=Number(e[9]+e[10]),n=Number(e[9]+e[11])),o.call(a,Number(e[1]),Number(e[2])-1,Number(e[3]));let r=Number(e[4]||0)-t,s=Number(e[5]||0)-n,d=Number(e[6]||0),u=Math.floor(parseFloat(`0.`+(e[7]||0))*1e3);return i.call(a,r,s,d,u),a}function va(e){return e instanceof Date&&!isNaN(e.valueOf())}var bi=/^(\d+)?\.((\d+)(-(\d+))?)?$/;var ya=22;var ye=`.`;var Ht=`0`;var hi=`;`;var gi=`,`;var Je=`#`;var _a=`¤`;function Pa(e,a,t,n,o,i,r=!1){let s=``,d=!1;if(!isFinite(e))s=X(t,Number.isNaN(e)?N.NaN:N.Infinity);else{let u=yi(e);r&&(u=vi(u));let l=a.minInt,m=a.minFrac,f=a.maxFrac;if(i){let Q=i.match(bi);if(Q===null)throw new I(2306,!1);let Nt=Q[1],ze=Q[3],Pn=Q[5];Nt!=null&&(l=tn(Nt)),ze!=null&&(m=tn(ze)),Pn!=null?f=tn(Pn):ze!=null&&m>f&&(f=m);let Ue=100;if(l>Ue||m>Ue||f>Ue)throw new I(2306,!1)}_i(u,m,f);let p=u.digits,C=u.integerLen,z=u.exponent,j=[];for(d=p.every(Q=>!Q);C<l;C++)p.unshift(0);for(;C<0;C++)p.unshift(0);C>0?j=p.splice(C,p.length):(j=p,p=[0]);let st=[];for(p.length>=a.lgSize&&st.unshift(p.splice(-a.lgSize,p.length).join(``));p.length>a.gSize;)st.unshift(p.splice(-a.gSize,p.length).join(``));p.length&&st.unshift(p.join(``)),s=st.join(X(t,n)),j.length&&(s+=X(t,o)+j.join(``)),z&&(s+=X(t,N.Exponential)+`+`+z)}return e<0&&!d?s=a.negPre+s+a.negSuf:s=a.posPre+s+a.posSuf,s}function Ba(e,a,t,n,o){let r=Ua(nn(a,_e.Currency),X(a,N.MinusSign));return r.minFrac=ka(n),r.maxFrac=r.minFrac,Pa(e,r,a,N.CurrencyGroup,N.CurrencyDecimal,o).replace(_a,t).replace(_a,``).trim()}function za(e,a,t){return Pa(e,Ua(nn(a,_e.Decimal),X(a,N.MinusSign)),a,N.Group,N.Decimal,t)}function Ua(e,a=`-`){let t={minInt:1,minFrac:0,maxFrac:0,posPre:``,posSuf:``,negPre:``,negSuf:``,gSize:0,lgSize:0},n=e.split(hi),o=n[0],i=n[1],r=o.indexOf(ye)!==-1?o.split(ye):[o.substring(0,o.lastIndexOf(Ht)+1),o.substring(o.lastIndexOf(Ht)+1)],s=r[0],d=r[1]||``;t.posPre=s.substring(0,s.indexOf(Je));for(let l=0;l<d.length;l++){let m=d.charAt(l);m===Ht?t.minFrac=t.maxFrac=l+1:m===Je?t.maxFrac=l+1:t.posSuf+=m}let u=s.split(gi);if(t.gSize=u[1]?u[1].length:0,t.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,i){let l=o.length-t.posPre.length-t.posSuf.length,m=i.indexOf(Je);t.negPre=i.substring(0,m).replace(/'/g,``),t.negSuf=i.slice(m+l).replace(/'/g,``)}else t.negPre=a+t.posPre,t.negSuf=t.posSuf;return t}function vi(e){if(e.digits[0]===0)return e;let a=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(a===0?e.digits.push(0,0):a===1&&e.digits.push(0),e.integerLen+=2),e}function yi(e){let a=Math.abs(e)+``,t=0,n,o,i,r,s;for((o=a.indexOf(ye))>-1&&(a=a.replace(ye,``)),(i=a.search(/e/i))>0?(o<0&&(o=i),o+=+a.slice(i+1),a=a.substring(0,i)):o<0&&(o=a.length),i=0;a.charAt(i)===Ht;i++);if(i===(s=a.length))n=[0],o=1;else{for(s--;a.charAt(s)===Ht;)s--;for(o-=i,n=[],r=0;i<=s;i++,r++)n[r]=Number(a.charAt(i))}return o>ya&&(n=n.splice(0,ya-1),t=o-1,o=1),{digits:n,exponent:t,integerLen:o}}function _i(e,a,t){if(a>t)throw new I(2307,!1);let n=e.digits,o=n.length-e.integerLen,i=Math.min(Math.max(a,o),t),r=i+e.integerLen,s=n[r];if(r>0){n.splice(Math.max(e.integerLen,r));for(let m=r;m<n.length;m++)n[m]=0}else{o=Math.max(0,o),e.integerLen=1,n.length=Math.max(1,r=i+1),n[0]=0;for(let m=1;m<r;m++)n[m]=0}if(s>=5)if(r-1<0){for(let m=0;m>r;m--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[r-1]++;for(;o<Math.max(0,i);o++)n.push(0);let d=i!==0,u=a+e.integerLen,l=n.reduceRight(function(m,f,p,C){return f=f+m,C[p]=f<10?f:f-10,d&&(C[p]===0&&p>=u?C.pop():d=!1),f>=10?1:0},0);l&&(n.unshift(l),e.integerLen++)}function tn(e){let a=parseInt(e);if(isNaN(a))throw new I(2305,!1);return a}var en=/\s+/;var Da=[];var Di=(()=>{class e{_ngEl;_renderer;initialClasses=Da;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(en):Da}set ngClass(t){this.rawClass=typeof t==`string`?t.trim().split(en):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let o=this.stateMap.get(t);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],o=t[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(en).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static ɵfac=function(n){return new(n||e)(eo$1(zr$1),eo$1(wc))};static ɵdir=_h({type:e,selectors:[[``,`ngClass`,``]],inputs:{klass:[0,`class`,`klass`],ngClass:`ngClass`}})}return e})();var Si=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,n,o){this._ngEl=t,this._differs=n,this._renderer=o}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[o,i]=t.split(`.`),r=o.indexOf(`-`)===-1?void 0:Mi$1.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,i?`${n}${i}`:n,r):this._renderer.removeStyle(this._ngEl.nativeElement,o,r)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static ɵfac=function(n){return new(n||e)(eo$1(zr$1),eo$1(Ub),eo$1(wc))};static ɵdir=_h({type:e,selectors:[[``,`ngStyle`,``]],inputs:{ngStyle:`ngStyle`}})}return e})();var Ei=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=m(ue);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(t,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static ɵfac=function(n){return new(n||e)(eo$1(Xi$1))};static ɵdir=_h({type:e,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[ov]})}return e})();function De(e,a){return new I(2100,!1)}var wi=(()=>{class e{transform(t){return t==null?null:(an(e,t),t.toLowerCase())}static ɵfac=function(n){return new(n||e)};static ɵpipe=VD({name:`lowercase`,type:e,pure:!0})}return e})();var Ci=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;var xi=(()=>{class e{transform(t){return t==null?null:(an(e,t),t.replace(Ci,n=>n[0].toUpperCase()+n.slice(1).toLowerCase()))}static ɵfac=function(n){return new(n||e)};static ɵpipe=VD({name:`titlecase`,type:e,pure:!0})}return e})();var Ai=(()=>{class e{transform(t){return t==null?null:(an(e,t),t.toUpperCase())}static ɵfac=function(n){return new(n||e)};static ɵpipe=VD({name:`uppercase`,type:e,pure:!0})}return e})();function an(e,a){if(typeof a!=`string`)throw De(e,a)}var Ii=`mediumDate`;var ja=new M(``);var Ha=new M(``);var Ni=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,n,o){this.locale=t,this.defaultTimezone=n,this.defaultOptions=o}transform(t,n,o,i){if(t==null||t===``||t!==t)return null;try{let r=n??this.defaultOptions?.dateFormat??Ii,s=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Oa(t,r,i||this.locale,s)}catch(r){throw De(e,r.message)}}static ɵfac=function(n){return new(n||e)(eo$1(Al,16),eo$1(ja,24),eo$1(Ha,24))};static ɵpipe=VD({name:`date`,type:e,pure:!0})}return e})();var Mi=(()=>{class e{_locale;constructor(t){this._locale=t}transform(t,n,o){if(!$a(t))return null;o||=this._locale;try{return za(Va(t),o,n)}catch(i){throw De(e,i.message)}}static ɵfac=function(n){return new(n||e)(eo$1(Al,16))};static ɵpipe=VD({name:`number`,type:e,pure:!0})}return e})();var Fi=(()=>{class e{_locale;_defaultCurrencyCode;constructor(t,n=`USD`){this._locale=t,this._defaultCurrencyCode=n}transform(t,n=this._defaultCurrencyCode,o=`symbol`,i,r){if(!$a(t))return null;r||=this._locale,typeof o==`boolean`&&(o=o?`symbol`:`code`);let s=n||this._defaultCurrencyCode;o!==`code`&&(o===`symbol`||o===`symbol-narrow`?s=Ta(s,o===`symbol`?`wide`:`narrow`,r):s=o);try{return Ba(Va(t),r,s,n,i)}catch(d){throw De(e,d.message)}}static ɵfac=function(n){return new(n||e)(eo$1(Al,16),eo$1(xb,16))};static ɵpipe=VD({name:`currency`,type:e,pure:!0})}return e})();function $a(e){return!(e==null||e===``||e!==e)}function Va(e){if(typeof e==`string`&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!=`number`)throw new I(2309,!1);return e}var Ga=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Ji$1({type:e});static ɵinj=yr$1({})}return e})();function sc(e,a,t){return Iw(e,a,t)}var on=`browser`;function Wa(e){return e===on}var $t=class{_doc;constructor(a){this._doc=a}manager};var Se=(()=>{class e extends $t{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,o,i){return t.addEventListener(n,o,i),()=>this.removeEventListener(t,n,o,i)}removeEventListener(t,n,o,i){return t.removeEventListener(n,o,i)}static ɵfac=function(n){return new(n||e)(Y$1(Pe$1))};static ɵprov=V$1({token:e,factory:e.ɵfac})}return e})();var Ce=new M(``);var dn=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(r=>{r.manager=this});let o=t.filter(r=>!(r instanceof Se));this._plugins=o.slice().reverse();let i=t.find(r=>r instanceof Se);i&&this._plugins.push(i)}addEventListener(t,n,o,i){return this._findPluginFor(n).addEventListener(t,n,o,i)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new I(-5101,!1);return this._eventNameToPlugin.set(t,n),n}static ɵfac=function(n){return new(n||e)(Y$1(Ce),Y$1(me$1))};static ɵprov=V$1({token:e,factory:e.ɵfac})}return e})();var rn=`ng-app-id`;function Ka(e){for(let a of e)a.remove()}function Za(e,a){let t=a.createElement(`style`);return t.textContent=e,t}function Pi(e,a,t,n){let o=e.head?.querySelectorAll(`style[${rn}="${a}"],link[${rn}="${a}"]`);if(!o||o.length===0)return!1;for(let i of o)i.removeAttribute(rn),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf(`/`)+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]});return!0}function cn(e,a){let t=a.createElement(`link`);return t.setAttribute(`rel`,`stylesheet`),t.setAttribute(`href`,e),t}var ln=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,n,o,i={}){this.doc=t,this.appId=n,this.nonce=o,Pi(t,n,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,n){for(let o of t)this.addUsage(o,this.inline,Za);n?.forEach(o=>this.addUsage(o,this.external,cn))}removeStyles(t,n){for(let o of t)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,n,o){let i=n.get(t);i?i.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,o(t,this.doc)))})}removeUsage(t,n){let o=n.get(t);o&&(o.usage--,o.usage<=0&&(Ka(o.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Ka(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(t,Za(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(t,cn(n,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let n of[...this.inline.values(),...this.external.values()]){let o=[];for(let i of n.elements)i.parentNode===t?i.remove():o.push(i);n.elements=o}}addElement(t,n){return this.nonce&&n.setAttribute(`nonce`,this.nonce),t.appendChild(n)}static ɵfac=function(n){return new(n||e)(Y$1(Pe$1),Y$1(Hd),Y$1(Ud,8),Y$1(Uy))};static ɵprov=V$1({token:e,factory:e.ɵfac})}return e})();var sn={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var un=/%COMP%/g;var Xa=`%COMP%`;var Bi=`_nghost-${Xa}`;var zi=`_ngcontent-${Xa}`;var Ui=!0;var ji=new M(``,{factory:()=>Ui});var Hi=new M(``);function $i(e){return zi.replace(un,e)}function Vi(e){return Bi.replace(un,e)}function qa(e,a){return a.map(t=>t.replace(un,e))}var mn=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,n,o,i,r,s,d=null,u=null,l=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=r,this.ngZone=s,this.nonce=d,this.tracingService=u,this.cssVarNamespace=l??``,this.defaultRenderer=new Vt(t,r,s,this.tracingService,this.cssVarNamespace)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(t,n);return o instanceof we?o.applyToHost(t):o instanceof Gt&&o.applyStyles(),o}getOrCreateRenderer(t,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let r=this.doc,s=this.ngZone,d=this.eventManager,u=this.sharedStylesHost,l=this.removeStylesOnCompDestroy,m=this.tracingService;switch(n.encapsulation){case Kt$1.Emulated:i=new we(d,u,n,this.appId,l,r,s,m,this.cssVarNamespace);break;case Kt$1.ShadowDom:return new Ee(d,t,n,r,s,this.nonce,m,this.cssVarNamespace,u);case Kt$1.ExperimentalIsolatedShadowDom:return new Ee(d,t,n,r,s,this.nonce,m,this.cssVarNamespace);default:i=new Gt(d,u,n,l,r,s,m,this.cssVarNamespace)}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static ɵfac=function(n){return new(n||e)(Y$1(dn),Y$1(lh),Y$1(Hd),Y$1(ji),Y$1(Pe$1),Y$1(me$1),Y$1(Ud),Y$1(wt$1,8),Y$1(Hi,8))};static ɵprov=V$1({token:e,factory:e.ɵfac})}return e})();var Vt=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(a,t,n,o,i=``){this.eventManager=a,this.doc=t,this.ngZone=n,this.tracingService=o,this.cssVarNamespace=i}destroy(){}destroyNode=null;createElement(a,t){return t?this.doc.createElementNS(sn[t]||t,a):this.doc.createElement(a)}createComment(a){return this.doc.createComment(a)}createText(a){return this.doc.createTextNode(a)}appendChild(a,t){(Ya(a)?a.content:a).appendChild(t)}insertBefore(a,t,n){if(a){let o=Ya(a)?a.content:a;if(n!=null&&n.parentNode!==o)throw new I(-5106,!1);o.insertBefore(t,n)}}removeChild(a,t){t.remove()}selectRootElement(a,t){let n=typeof a==`string`?this.doc.querySelector(a):a;if(!n)throw new I(-5104,!1);return t||(n.textContent=``),n}parentNode(a){return a.parentNode}nextSibling(a){return a.nextSibling}setAttribute(a,t,n,o){if(o){t=o+`:`+t;let i=sn[o];i?a.setAttributeNS(i,t,n):a.setAttribute(t,n)}else a.setAttribute(t,n)}removeAttribute(a,t,n){if(n){let o=sn[n];o?a.removeAttributeNS(o,t):a.removeAttribute(`${n}:${t}`)}else a.removeAttribute(t)}addClass(a,t){a.classList.add(t)}removeClass(a,t){a.classList.remove(t)}setStyle(a,t,n,o){let i=t.startsWith(`--`);i&&(t=t.replace(`%NS%`,this.cssVarNamespace)),i||o&(Mi$1.DashCase|Mi$1.Important)?a.style.setProperty(t,n,o&Mi$1.Important?`important`:``):a.style[t]=n}removeStyle(a,t,n){let o=t.startsWith(`--`);o&&(t=t.replace(`%NS%`,this.cssVarNamespace)),o||n&Mi$1.DashCase?a.style.removeProperty(t):a.style[t]=``}setProperty(a,t,n){a!=null&&(a[t]=n)}setValue(a,t){a.nodeValue=t}listen(a,t,n,o){if(typeof a==`string`&&(a=Ul().getGlobalEventTarget(this.doc,a),!a))throw new I(-5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(a,t,i)),this.eventManager.addEventListener(a,t,i,o)}decoratePreventDefault(a){return t=>{if(t===`__ngUnwrap__`)return a;a(t)===!1&&t.preventDefault()}}};function Ya(e){return e.tagName===`TEMPLATE`&&e.content!==void 0}var Ee=class extends Vt{hostEl;sharedStylesHost;shadowRoot;constructor(a,t,n,o,i,r,s,d,u){super(a,o,i,s,d),this.hostEl=t,this.sharedStylesHost=u,this.shadowRoot=t.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=qa(n.id,l).map(f=>f.replace(/%NS%/g,d));for(let f of l){let p=document.createElement(`style`);r&&p.setAttribute(`nonce`,r),p.textContent=f,this.shadowRoot.appendChild(p)}let m=n.getExternalStyles?.();if(m)for(let f of m){let p=cn(f,o);r&&p.setAttribute(`nonce`,r),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(a){return a===this.hostEl?this.shadowRoot:a}appendChild(a,t){return super.appendChild(this.nodeOrShadowRoot(a),t)}insertBefore(a,t,n){return super.insertBefore(this.nodeOrShadowRoot(a),t,n)}removeChild(a,t){return super.removeChild(null,t)}parentNode(a){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(a)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Gt=class extends Vt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(a,t,n,o,i,r,s,d,u){super(a,i,r,s,d),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o;let l=n.styles,m=u?qa(u,l):l;this.styles=m.map(f=>f.replace(/%NS%/g,d)),this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&kE.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var we=class extends Gt{contentAttr;hostAttr;constructor(a,t,n,o,i,r,s,d,u){let l=o+`-`+n.id;super(a,t,n,i,r,s,d,u,l),this.contentAttr=$i(l),this.hostAttr=Vi(l)}applyToHost(a){this.applyStyles(),this.setAttribute(a,this.hostAttr,``)}createElement(a,t){let n=super.createElement(a,t);return super.setAttribute(n,this.contentAttr,``),n}};var xe=class e extends Pg{supportsDOMEvents=!0;static makeCurrent(){Ij(new e)}onAndCancel(a,t,n,o){return a.addEventListener(t,n,o),()=>{a.removeEventListener(t,n,o)}}dispatchEvent(a,t){a.dispatchEvent(t)}remove(a){a.remove()}createElement(a,t){return t=t||this.getDefaultDocument(),t.createElement(a)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(a){return a.nodeType===Node.ELEMENT_NODE}isShadowRoot(a){return a instanceof DocumentFragment}getGlobalEventTarget(a,t){return t===`window`?window:t===`document`?a:t===`body`?a.body:null}getBaseHref(a){let t=Wi();return t==null?null:Ki(t)}resetBaseElement(){Wt=null}getUserAgent(){return window.navigator.userAgent}getCookie(a){return Fg(document.cookie,a)}};var Wt=null;function Wi(){return Wt=Wt||document.head.querySelector(`base`),Wt?Wt.getAttribute(`href`):null}function Ki(e){return new URL(e,document.baseURI).pathname}var Qa=[`alt`,`control`,`meta`,`shift`];var Zi={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var Yi={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};var Ja=(()=>{class e extends $t{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,o,i){let r=e.parseEventName(n),s=e.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ul().onAndCancel(t,r.domEventName,s,i))}static parseEventName(t){let n=t.toLowerCase().split(`.`),o=n.shift();if(n.length===0||!(o===`keydown`||o===`keyup`))return null;let i=e._normalizeKey(n.pop()),r=``,s=n.indexOf(`code`);if(s>-1&&(n.splice(s,1),r=`code.`),Qa.forEach(u=>{let l=n.indexOf(u);l>-1&&(n.splice(l,1),r+=u+`.`)}),r+=i,n.length!=0||i.length===0)return null;let d={};return d.domEventName=o,d.fullKey=r,d}static matchEventFullKeyCode(t,n){let o=Zi[t.key]||t.key,i=``;return n.indexOf(`code.`)>-1&&(o=t.code,i=`code.`),o==null||!o?!1:(o=o.toLowerCase(),o===` `?o=`space`:o===`.`&&(o=`dot`),Qa.forEach(r=>{if(r!==o){let s=Yi[r];s(t)&&(i+=r+`.`)}}),i+=o,i===n)}static eventCallback(t,n,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>n(i))}}static _normalizeKey(t){return t===`esc`?`escape`:t}static ɵfac=function(n){return new(n||e)(Y$1(Pe$1))};static ɵprov=V$1({token:e,factory:e.ɵfac})}return e})();async function Xi(e,a,t){let n=r({rootComponent:e},qi(a,t));return lj(n)}function qi(e,a){return{platformRef:a?.platformRef,appProviders:[...nr,...e?.providers??[]],platformProviders:er}}function Qi(){xe.makeCurrent()}function Ji(){return new Ge}function tr(){return Sv(document),document}var er=[{provide:Uy,useValue:on},{provide:Bd,useValue:Qi,multi:!0},{provide:Pe$1,useFactory:tr}];var nr=[{provide:Ea$1,useValue:`root`},{provide:Ge,useFactory:Ji},{provide:Ce,useClass:Se,multi:!0},{provide:Ce,useClass:Ja,multi:!0},mn,{provide:lh,useClass:ln},{provide:ln,useExisting:lh},dn,{provide:Ur,useExisting:mn},[]];var cd=(()=>{class e{_doc=m(Pe$1);_dom=Ul();_cachedHead;addTag(t,n=!1){return t?this._getOrCreateElement(t,n):null}addTags(t,n=!1){return t.filter(o=>!!o).map(o=>this._getOrCreateElement(o,n))}getTag(t){if(!t)return null;let n=this._doc.querySelector(to(t));return oo(n)?n:null}getTags(t){if(!t)return[];let n=this._doc.querySelectorAll(to(t));return n?Array.from(n).filter(o=>oo(o)):[]}updateTag(t,n){no(t),n??=ao(t);let o=this.getTag(n);return o?(eo(t,o),o):this._getOrCreateElement(t,!0)}removeTag(t){this.removeTagElement(this.getTag(t))}removeTagElement(t){t&&this._dom.remove(t)}_getOrCreateElement(t,n=!1){if(no(t),!n){let r=ao(t),s=this.getTags(r).filter(d=>or(t,d))[0];if(s!==void 0)return s}let o=this._dom.createElement(`meta`);return eo(t,o),this._doc.getElementsByTagName(`head`)[0].appendChild(o),o}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();function to(e){return`meta[${e}]`}function eo(e,a){Object.keys(e).forEach(t=>a.setAttribute(pn(t),e[t]))}function no(e){for(let a of Object.keys(e))if(pn(a).toLowerCase().startsWith(`on`))throw new I(5203,!1)}function ao(e){let a=e.name?`name`:`property`;return`${a}=${ar(String(e[a]))}`}function ar(e){return`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`)}"`}function or(e,a){return Object.keys(e).every(t=>a.getAttribute(pn(t))===e[t])}function pn(e){return Object.hasOwn(io,e)?io[e]:e}function oo(e){return e?.nodeName.toLowerCase()===`meta`}var io={httpEquiv:`http-equiv`};var dd=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||``}static ɵfac=function(n){return new(n||e)(Y$1(Pe$1))};static ɵprov=V$1({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var fn=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵprov=V$1({token:e,factory:function(n){let o=null;return n?o=new(n||e):o=Y$1(ir),o},providedIn:`root`})}return e})();var ir=(()=>{class e extends fn{_doc=m(Pe$1);sanitize(t,n){if(n==null)return null;switch(t){case z.NONE:return n;case z.HTML:return Ui$1(n,`HTML`)?It$1(n):yp(this._doc,String(n)).toString();case z.STYLE:return Ui$1(n,`Style`)?It$1(n):n;case z.SCRIPT:if(Ui$1(n,`Script`))return It$1(n);throw new I(5200,!1);case z.URL:return Ui$1(n,`URL`)?It$1(n):zc(String(n));case z.RESOURCE_URL:if(Ui$1(n,`ResourceURL`))return It$1(n);throw new I(-5201,!1);default:throw new I(5202,!1)}}bypassSecurityTrustHtml(t){return Pv(t)}bypassSecurityTrustStyle(t){return Lv(t)}bypassSecurityTrustScript(t){return Fv(t)}bypassSecurityTrustUrl(t){return jv(t)}bypassSecurityTrustResourceUrl(t){return Vv(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var bn;try{bn=typeof Intl<`u`&&Intl.v8BreakIterator}catch{bn=!1}var O=(()=>{class e{_platformId=m(Uy);isBrowser=this._platformId?Wa(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||bn)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();function hn(e){return Array.isArray(e)?e:[e]}var ro=new Set;var ht;var Ae=(()=>{class e{_platform=m(O);_nonce=m(Ud,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):sr}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&rr(t,this._nonce),this._matchMedia(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();function rr(e,a){if(!ro.has(e))try{ht||(ht=document.createElement(`style`),a&&ht.setAttribute(`nonce`,a),ht.setAttribute(`type`,`text/css`),document.head.appendChild(ht)),ht.sheet&&(ht.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),ro.add(e))}catch(t){console.error(t)}}function sr(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var gn=(()=>{class e{_mediaMatcher=m(Ae);_zone=m(me$1);_queries=new Map;_destroySubject=new K;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return so(hn(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=so(hn(t)).map(r=>this._registerQuery(r).observable),i=Fm(o);return i=Ro$1(i.pipe(As(1)),i.pipe(Km(1),fu(0))),i.pipe(le(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:d,query:u})=>{s.matches=s.matches||d,s.breakpoints[u]=d}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),i={observable:new _(r=>{let s=d=>this._zone.run(()=>r.next(d));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(ey(n),le(({matches:r})=>({query:t,matches:r})),pu(this._destroySubject)),mql:n};return this._queries.set(t,i),i}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();function so(e){return e.map(a=>a.split(`,`)).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}var wd={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};function Kt(e){return e.buttons===0||e.detail===0}function Zt(e){let a=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var vn;function co(){if(vn==null){let e=typeof document<`u`?document.head:null;vn=!!(e&&(e.createShadowRoot||e.attachShadow))}return vn}function yn(e){if(co()){let a=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function _n(){let e=typeof document<`u`&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let a=e.shadowRoot.activeElement;if(a===e)break;e=a}return e}function q(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var Yt;function lo(){if(Yt==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Yt=!0}))}finally{Yt=Yt||!1}return Yt}function wt(e){return lo()?e:!!e.capture}function Dn(e,a=0){return uo(e)?Number(e):arguments.length===2?a:0}function uo(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function J(e){return e instanceof zr$1?e.nativeElement:e}var mo=new M(`cdk-input-modality-detector-options`);var po={ignoreKeys:[18,17,224,91,16]};var fo=650;var Sn={passive:!0,capture:!0};var bo=(()=>{class e{_platform=m(O);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new nr$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=q(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<fo||(this._modality.next(Kt(t)?`keyboard`:`mouse`),this._mostRecentTarget=q(t))};_onTouchstart=t=>{if(Zt(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=q(t)};constructor(){let t=m(me$1),n=m(Pe$1),o=m(mo,{optional:!0});if(this._options=r(r({},po),o),this.modalityDetected=this._modality.pipe(Km(1)),this.modalityChanged=this.modalityDetected.pipe(Gm()),this._platform.isBrowser){let i=m(Ur).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(n,`keydown`,this._onKeydown,Sn),i.listen(n,`mousedown`,this._onMousedown,Sn),i.listen(n,`touchstart`,this._onTouchstart,Sn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var Xt=(function(e){return e[e.IMMEDIATE=0]=`IMMEDIATE`,e[e.EVENTUAL=1]=`EVENTUAL`,e})(Xt||{});var ho=new M(`cdk-focus-monitor-default-options`);var Ie=wt({passive:!0,capture:!0});var Ne=(()=>{class e{_ngZone=m(me$1);_platform=m(O);_inputModalityDetector=m(bo);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=m(Pe$1);_stopInputModalityDetector=new K;constructor(){let t=m(ho,{optional:!0});this._detectionMode=t?.detectionMode||Xt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=q(t);for(let o=n;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,n=!1){let o=J(t);if(!this._platform.isBrowser||o.nodeType!==1)return Ns();let i=yn(o)||this._document,r=this._elementInfo.get(o);if(r)return n&&(r.checkChildren=!0),r.subject;let s={checkChildren:n,subject:new K,rootNode:i};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let n=J(t),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(t,n,o){let i=J(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([s,d])=>this._originChanged(s,n,d)):(this._setOrigin(n),typeof i.focus==`function`&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Xt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle(`cdk-focused`,!!n),t.classList.toggle(`cdk-touch-focused`,n===`touch`),t.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,n===`mouse`),t.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&n,this._detectionMode===Xt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?fo:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,n){let o=this._elementInfo.get(n),i=q(t);!o||!o.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),o)}_onBlur(t,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Ie),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Ie)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(pu(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Ie),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Ie),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,o){this._setClasses(t,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&n.push([i,o])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!n||n===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let r=0;r<i.length;r++)if(i[r].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var cr=(()=>{class e{_elementRef=m(zr$1);_focusMonitor=m(Ne);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new we$1;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||e)};static ɵdir=_h({type:e,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return e})();var Me=new WeakMap;var nt=(()=>{class e{_appRef;_injector=m(ue);_environmentInjector=m(ie);load(t){let n=this._appRef=this._appRef||this._injector.get(Ki$1),o=Me.get(n);o||(o={loaders:new Set,refs:[]},Me.set(n,o),n.onDestroy(()=>{Me.get(n)?.refs.forEach(i=>i.destroy()),Me.delete(n)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(pj(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var Te=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=PD({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var Fe;function dr(){if(Fe===void 0&&(Fe=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{Fe=e.trustedTypes.createPolicy(`angular#components`,{createHTML:a=>a})}catch(a){console.error(a)}}return Fe}function lr(e){return dr()?.createHTML(e)||e}function go(e,a,t){e.innerHTML=lr(t.sanitize(z.HTML,a)||``)}function ur(e){if(e.type===`characterData`&&e.target instanceof Comment)return!0;if(e.type===`childList`){for(let a=0;a<e.addedNodes.length;a++)if(!(e.addedNodes[a]instanceof Comment))return!1;for(let a=0;a<e.removedNodes.length;a++)if(!(e.removedNodes[a]instanceof Comment))return!1;return!0}return!1}var vo=(()=>{class e{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var yo=(()=>{class e{_mutationObserverFactory=m(vo);_observedElements=new Map;_ngZone=m(me$1);ngOnDestroy(){this._observedElements.forEach((t,n)=>this._cleanupObserver(n))}observe(t){let n=J(t);return new _(o=>{let r=this._observeElement(n).pipe(le(s=>s.filter(d=>!ur(d))),at(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{o.next(s)})});return()=>{r.unsubscribe(),this._unobserveElement(n)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let n=new K,o=this._mutationObserverFactory.create(i=>n.next(i));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:n,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:n,stream:o}=this._observedElements.get(t);n&&n.disconnect(),o.complete(),this._observedElements.delete(t)}}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var pl=(()=>{class e{_contentObserver=m(yo);_elementRef=m(zr$1);event=new we$1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Dn(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(fu(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||e)};static ɵdir=_h({type:e,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,uj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return e})();var _o=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Ji$1({type:e});static ɵinj=yr$1({providers:[vo]})}return e})();var wo=(()=>{class e{_platform=m(O);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return pr(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=mr(Dr(t));if(n&&(Do(n)===-1||!this.isVisible(n)))return!1;let o=t.nodeName.toLowerCase(),i=Do(t);return t.hasAttribute(`contenteditable`)?i!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!yr(t)?!1:o===`audio`?t.hasAttribute(`controls`)?i!==-1:!1:o===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,n){return _r(t)&&!this.isDisabled(t)&&(n?.ignoreInert||!t.closest?.(`[inert]`))&&(n?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();function mr(e){try{return e.frameElement}catch{return null}}function pr(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function fr(e){let a=e.nodeName.toLowerCase();return a===`input`||a===`select`||a===`button`||a===`textarea`}function br(e){return gr(e)&&e.type==`hidden`}function hr(e){return vr(e)&&e.hasAttribute(`href`)}function gr(e){return e.nodeName.toLowerCase()==`input`}function vr(e){return e.nodeName.toLowerCase()==`a`}function Co(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let a=e.getAttribute(`tabindex`);return!!(a&&!isNaN(parseInt(a,10)))}function Do(e){if(!Co(e))return null;let a=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(a)?-1:a}function yr(e){let a=e.nodeName.toLowerCase(),t=a===`input`&&e.type;return t===`text`||t===`password`||a===`select`||a===`textarea`}function _r(e){return br(e)?!1:fr(e)||hr(e)||e.hasAttribute(`contenteditable`)||Co(e)}function Dr(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var ke=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,t,n,o,i=!1,r){this._element=a,this._checker=t,this._ngZone=n,this._document=o,this._injector=r,i||this.attachAnchors()}destroy(){let a=this._startAnchor,t=this._endAnchor;a&&(a.removeEventListener(`focus`,this.startAnchorListener),a.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let t=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(a),!!n}return t.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let t=this._getRegionBoundary(`start`);return t&&t.focus(a),!!t}focusLastTabbableElement(a){let t=this._getRegionBoundary(`end`);return t&&t.focus(a),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=0;n<t.length;n++){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(o)return o}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=t.length-1;n>=0;n--){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(o)return o}return null}_createAnchor(){let a=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add(`cdk-visually-hidden`),a.classList.add(`cdk-focus-trap-anchor`),a.setAttribute(`aria-hidden`,`true`),a}_toggleAnchorTabIndex(a,t){a?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){FE(a,{injector:this._injector})}};var xo=(()=>{class e{_checker=m(wo);_ngZone=m(me$1);_document=m(Pe$1);_injector=m(ue);constructor(){m(nt).load(Te)}create(t,n=!1){return new ke(t,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var Sr=(()=>{class e{_elementRef=m(zr$1);_focusTrapFactory=m(xo);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){m(O).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let n=t.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=_n(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(n){return new(n||e)};static ɵdir=_h({type:e,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,uj],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,uj]},exportAs:[`cdkTrapFocus`],features:[ov]})}return e})();var Ao=new M(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Io=new M(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Er=0;var wr=(()=>{class e{_ngZone=m(me$1);_defaultOptions=m(Io,{optional:!0});_liveElement;_document=m(Pe$1);_sanitizer=m(fn);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=m(Ao,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...n){let o=this._defaultOptions,i,r;return n.length===1&&typeof n[0]==`number`?r=n[0]:[i,r]=n,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:`polite`),r==null&&o&&(r=o.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:go(this._liveElement,t,this._sanitizer),typeof r==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(t),o=this._document.createElement(`div`);for(let i=0;i<n.length;i++)n[i].remove();return o.classList.add(t),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${Er++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<n.length;o++){let i=n[o],r=i.getAttribute(`aria-owns`);r?r.indexOf(t)===-1&&i.setAttribute(`aria-owns`,r+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var rt=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(rt||{});var So=`cdk-high-contrast-black-on-white`;var Eo=`cdk-high-contrast-white-on-black`;var En=`cdk-high-contrast-active`;var No=(()=>{class e{_platform=m(O);_hasCheckedHighContrastMode=!1;_document=m(Pe$1);_breakpointSubscription;constructor(){this._breakpointSubscription=m(gn).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return rt.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(t):null,i=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return rt.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return rt.BLACK_ON_WHITE}return rt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(En,So,Eo),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===rt.BLACK_ON_WHITE?t.add(En,So):n===rt.WHITE_ON_BLACK&&t.add(En,Eo)}}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var Cr=(()=>{class e{constructor(){m(No)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||e)};static ɵmod=Ji$1({type:e});static ɵinj=yr$1({imports:[_o]})}return e})();var xr=200;var Ct=class{_letterKeyStream=new K;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new K;selectedItem=this._selectedItem;constructor(a,t){let n=typeof t?.debounceInterval==`number`?t.debounceInterval:xr;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(a),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let t=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(Au(t=>this._pressedLetters.push(t)),fu(a),at(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Mo(e,...a){return a.length?a.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var xt=class{_items;_activeItemIndex=kn$1(-1);_activeItem=kn$1(null);_wrap=!1;_typeaheadSubscription=B$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,t){this._items=a,a instanceof _i$1?this._itemChangesSubscription=a.changes.subscribe(n=>this._itemsChanged(n.toArray())):di$1(a)&&(this._effectRef=$d(()=>this._itemsChanged(a()),{injector:t}))}tabOut=new K;change=new K;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Ct(t,{debounceInterval:typeof a==`number`?a:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,t=10){return this._pageUpAndDown={enabled:a,delta:t},this}setActiveItem(a){let t=this._activeItem();this.updateActiveItem(a),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(a){let t=a.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!a[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(i<r?i:r-1,-1);break}else return;default:(o||Mo(a,`shiftKey`))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let t=this._getItemsArray(),n=typeof a==`number`?a:t.indexOf(a),o=t[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let t=this._getItemsArray();for(let n=1;n<=t.length;n++){let o=(this._activeItemIndex()+a*n+t.length)%t.length,i=t[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,t){let n=this._getItemsArray();if(n[a]){for(;this._skipPredicateFn(n[a]);)if(a+=t,!n[a])return;this.setActiveItem(a)}}_getItemsArray(){return di$1(this._items)?this._items():this._items instanceof _i$1?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let t=this._activeItem();if(t){let n=a.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var wn=class extends xt{setActiveItem(a){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(a),this.activeItem&&this.activeItem.setActiveStyles()}};var Cn=class extends xt{_origin=`program`;setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};function xn(e){return Am(e)?e:Ns(e)}var An=class{_activeItemIndex=-1;_activeItem=null;_shouldActivationFollowFocus=!1;_horizontalOrientation=`ltr`;_skipPredicateFn=a=>!1;_trackByFn=a=>a;_items=[];_typeahead;_typeaheadSubscription=B$1.EMPTY;_hasInitialFocused=!1;_initializeFocus(){if(this._hasInitialFocused||this._items.length===0)return;let a=0;for(let n=0;n<this._items.length;n++)if(!this._skipPredicateFn(this._items[n])&&!this._isItemDisabled(this._items[n])){a=n;break}let t=this._items[a];t.makeFocusable?(this._activeItem?.unfocus(),this._activeItemIndex=a,this._activeItem=t,this._typeahead?.setCurrentSelectedItemIndex(a),t.makeFocusable()):this.focusItem(a),this._hasInitialFocused=!0}constructor(a,t){a instanceof _i$1?(this._items=a.toArray(),a.changes.subscribe(n=>this._itemsChanged(n.toArray()))):Am(a)?a.subscribe(n=>this._itemsChanged(n)):(this._items=a,this._initializeFocus()),typeof t.shouldActivationFollowFocus==`boolean`&&(this._shouldActivationFollowFocus=t.shouldActivationFollowFocus),t.horizontalOrientation&&(this._horizontalOrientation=t.horizontalOrientation),t.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),t.trackBy&&(this._trackByFn=t.trackBy),typeof t.typeAheadDebounceInterval<`u`&&this._setTypeAhead(t.typeAheadDebounceInterval)}change=new K;destroy(){this._typeaheadSubscription.unsubscribe(),this._typeahead?.destroy(),this.change.complete()}onKeydown(a){switch(a.key){case`Tab`:return;case`ArrowDown`:this._focusNextItem();break;case`ArrowUp`:this._focusPreviousItem();break;case`ArrowRight`:this._horizontalOrientation===`rtl`?this._collapseCurrentItem():this._expandCurrentItem();break;case`ArrowLeft`:this._horizontalOrientation===`rtl`?this._expandCurrentItem():this._collapseCurrentItem();break;case`Home`:this._focusFirstItem();break;case`End`:this._focusLastItem();break;case`Enter`:case` `:this._activateCurrentItem();break;default:if(a.key===`*`){this._expandAllItemsAtCurrentItemLevel();break}this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}getActiveItemIndex(){return this._activeItemIndex}getActiveItem(){return this._activeItem}_itemsChanged(a){this._hasInitialFocused&&this._activeItem&&!a.includes(this._activeItem)&&(this._activeItem=null,this._hasInitialFocused=!1),this._items=a,this._typeahead?.setItems(this._items),this._updateActiveItemIndex(this._items),this._initializeFocus()}_focusFirstItem(){this.focusItem(this._findNextAvailableItemIndex(-1))}_focusLastItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._items.length))}_focusNextItem(){this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex))}_focusPreviousItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex))}focusItem(a,t={}){t.emitChangeEvent??=!0;let n=typeof a==`number`?a:this._items.findIndex(r=>this._trackByFn(r)===this._trackByFn(a));if(n<0||n>=this._items.length)return;let o=this._items[n];if(this._activeItem!==null&&this._trackByFn(o)===this._trackByFn(this._activeItem))return;let i=this._activeItem;this._activeItem=o??null,this._activeItemIndex=n,this._typeahead?.setCurrentSelectedItemIndex(n),this._activeItem?.focus(),i?.unfocus(),t.emitChangeEvent&&this.change.next(this._activeItem),this._shouldActivationFollowFocus&&this._activateCurrentItem()}_updateActiveItemIndex(a){let t=this._activeItem;if(!t)return;let n=a.findIndex(o=>this._trackByFn(o)===this._trackByFn(t));n>-1&&n!==this._activeItemIndex&&(this._activeItemIndex=n,this._typeahead?.setCurrentSelectedItemIndex(n))}_setTypeAhead(a){this._typeahead=new Ct(this._items,{debounceInterval:typeof a==`number`?a:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.focusItem(t)})}_findNextAvailableItemIndex(a){for(let t=a+1;t<this._items.length;t++)if(!this._skipPredicateFn(this._items[t]))return t;return a}_findPreviousAvailableItemIndex(a){for(let t=a-1;t>=0;t--)if(!this._skipPredicateFn(this._items[t]))return t;return a}_collapseCurrentItem(){if(this._activeItem)if(this._isCurrentItemExpanded())this._activeItem.collapse();else{let a=this._activeItem.getParent();if(!a||this._skipPredicateFn(a))return;this.focusItem(a)}}_expandCurrentItem(){this._activeItem&&(this._isCurrentItemExpanded()?xn(this._activeItem.getChildren()).pipe(As(1)).subscribe(a=>{let t=a.find(n=>!this._skipPredicateFn(n));t&&this.focusItem(t)}):this._activeItem.expand())}_isCurrentItemExpanded(){return this._activeItem?typeof this._activeItem.isExpanded==`boolean`?this._activeItem.isExpanded:this._activeItem.isExpanded():!1}_isItemDisabled(a){return typeof a.isDisabled==`boolean`?a.isDisabled:a.isDisabled?.()}_expandAllItemsAtCurrentItemLevel(){if(!this._activeItem)return;let a=this._activeItem.getParent(),t;a?t=xn(a.getChildren()):t=Ns(this._items.filter(n=>n.getParent()===null)),t.pipe(As(1)).subscribe(n=>{for(let o of n)o.expand()})}_activateCurrentItem(){this._activeItem?.activate()}};var su=new M(`tree-key-manager`,{providedIn:`root`,factory:()=>(e,a)=>new An(e,a)});var Fo=new Map;var In=class e{_appId=m(Hd);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=!1){this._appId!==`ng`&&(a+=this._appId);let n=Fo.get(a);return n===void 0?n=0:n++,Fo.set(a,n),`${a}${t?e._infix+`-`:``}${n}`}static ɵfac=function(t){return new(t||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})};var ko=` `;function Ar(e,a,t){let n=Re(e,a);t=t.trim(),!n.some(o=>o.trim()===t)&&(n.push(t),e.setAttribute(a,n.join(ko)))}function Ir(e,a,t){let n=Re(e,a);t=t.trim();let o=n.filter(i=>i!==t);o.length?e.setAttribute(a,o.join(ko)):e.removeAttribute(a)}function Re(e,a){return e.getAttribute(a)?.match(/\S+/g)??[]}var Oo=`cdk-describedby-message`;var Oe=`cdk-describedby-host`;var Mn=0;var _u=(()=>{class e{_platform=m(O);_document=m(Pe$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${Mn++}`;constructor(){m(nt).load(Te),this._id=m(Hd)+`-`+Mn++}describe(t,n,o){if(!this._canBeDescribed(t,n))return;let i=Nn(n,o);typeof n!=`string`?(To(n,this._id),this._messageRegistry.set(i,{messageElement:n,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(n,o),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,n,o){if(!n||!this._isElementNode(t))return;let i=Nn(n,o);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof n==`string`){let r=this._messageRegistry.get(i);r&&r.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${Oe}="${this._id}"]`);for(let n=0;n<t.length;n++)this._removeCdkDescribedByReferenceIds(t[n]),t[n].removeAttribute(Oe);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,n){let o=this._document.createElement(`div`);To(o,this._id),o.textContent=t,n&&o.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Nn(t,n),{messageElement:o,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<n.length;i++)n[i].remove();let o=this._document.createElement(`div`);o.style.visibility=`hidden`,o.classList.add(t),o.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||o.setAttribute(`platform`,`server`),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(t){let n=Re(t,`aria-describedby`).filter(o=>o.indexOf(Oo)!=0);t.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(t,n){let o=this._messageRegistry.get(n);Ar(t,`aria-describedby`,o.messageElement.id),t.setAttribute(Oe,this._id),o.referenceCount++}_removeMessageReference(t,n){let o=this._messageRegistry.get(n);o.referenceCount--,Ir(t,`aria-describedby`,o.messageElement.id),t.removeAttribute(Oe)}_isElementDescribedByMessage(t,n){let o=Re(t,`aria-describedby`),i=this._messageRegistry.get(n),r=i&&i.messageElement.id;return!!r&&o.indexOf(r)!=-1}_canBeDescribed(t,n){if(!this._isElementNode(t))return!1;if(n&&typeof n==`object`)return!0;let o=n==null?``:`${n}`.trim(),i=t.getAttribute(`aria-label`);return o?!i||i.trim()!==o:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();function Nn(e,a){return typeof e==`string`?`${a||``}/${e}`:e}function To(e,a){e.id||(e.id=`${Oo}-${a}-${Mn++}`)}var qt=(function(e){return e[e.NORMAL=0]=`NORMAL`,e[e.NEGATED=1]=`NEGATED`,e[e.INVERTED=2]=`INVERTED`,e})(qt||{});var Le;var gt;function Iu(){if(gt==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return gt=!1,gt;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)gt=!0;else{let e=Element.prototype.scrollTo;e?gt=!/\{\s*\[native code\]\s*\}/.test(e.toString()):gt=!1}}return gt}function Nu(){if(typeof document!=`object`||!document)return qt.NORMAL;if(Le==null){let e=document.createElement(`div`),a=e.style;e.dir=`rtl`,a.width=`1px`,a.overflow=`auto`,a.visibility=`hidden`,a.pointerEvents=`none`,a.position=`absolute`;let t=document.createElement(`div`),n=t.style;n.width=`2px`,n.height=`1px`,e.appendChild(t),document.body.appendChild(e),Le=qt.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,Le=e.scrollLeft===0?qt.NEGATED:qt.INVERTED),e.remove()}return Le}function Fu(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var At;var Ro=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function ku(){if(At)return At;if(typeof document!=`object`||!document)return At=new Set(Ro),At;let e=document.createElement(`input`);return At=new Set(Ro.filter(a=>(e.setAttribute(`type`,a),e.type===a))),At}var Nr=new M(`MATERIAL_ANIMATIONS`);var Lo=null;function Mr(){return m(Nr,{optional:!0})?.animationsDisabled||m($y,{optional:!0})===`NoopAnimations`?`di-disabled`:(Lo??=m(Ae).matchMedia(`(prefers-reduced-motion)`).matches,Lo?`reduced-motion`:`enabled`)}function It(){return Mr()!==`enabled`}function ju(e){return e==null?``:typeof e==`string`?e:`${e}px`}function $u(e){return e!=null&&`${e}`!=`false`}function Vu(e,a=/\s+/){let t=[];if(e!=null){let n=Array.isArray(e)?e:`${e}`.split(a);for(let o of n){let i=`${o}`.trim();i&&t.push(i)}}return t}var G=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(G||{});var Fn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=G.HIDDEN;constructor(a,t,n,o=!1){this._renderer=a,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var Po=wt({passive:!0,capture:!0});var Tn=class{_events=new Map;addHandler(a,t,n,o){let i=this._events.get(t);if(i){let r=i.get(n);r?r.add(o):i.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Po)})}removeHandler(a,t,n){let o=this._events.get(a);if(!o)return;let i=o.get(t);i&&(i.delete(n),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Po)))}_delegateEventHandler=a=>{let t=q(a);t&&this._events.get(a.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(i=>i.handleEvent(a))})}};var Qt={enterDuration:225,exitDuration:150};var Fr=800;var Bo=wt({passive:!0,capture:!0});var zo=[`mousedown`,`touchstart`];var Uo=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Tr=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=PD({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})();var Jt=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Tn;constructor(a,t,n,o,i){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=J(n)),i&&i.get(nt).load(Tr)}fadeInRipple(a,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=r(r({},Qt),n.animation);n.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let r$1=n.radius||kr(a,t,o),s=a-o.left,d=t-o.top,u=i.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${s-r$1}px`,l.style.top=`${d-r$1}px`,l.style.height=`${r$1*2}px`,l.style.width=`${r$1*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(l);let m=window.getComputedStyle(l),f=m.transitionProperty,p=m.transitionDuration,C=f===`none`||p===`0s`||p===`0s, 0s`||o.width===0&&o.height===0,z=new Fn(this,l,n,C);l.style.transform=`scale3d(1, 1, 1)`,z.state=G.FADING_IN,n.persistent||(this._mostRecentTransientRipple=z);let j=null;return!C&&(u||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let st=()=>{j&&(j.fallbackTimer=null),clearTimeout(Nt),this._finishRippleTransition(z)},Q=()=>this._destroyRipple(z),Nt=setTimeout(Q,u+100);l.addEventListener(`transitionend`,st),l.addEventListener(`transitioncancel`,Q),j={onTransitionEnd:st,onTransitionCancel:Q,fallbackTimer:Nt}}),this._activeRipples.set(z,j),(C||!u)&&this._finishRippleTransition(z),z}fadeOutRipple(a){if(a.state===G.FADING_OUT||a.state===G.HIDDEN)return;let t=a.element,n=r(r({},Qt),a.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,a.state=G.FADING_OUT,(a._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=J(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,zo.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Uo.forEach(t=>{this._triggerElement.addEventListener(t,this,Bo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===G.FADING_IN?this._startFadeOutTransition(a):a.state===G.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:n}=a.config;a.state=G.VISIBLE,!n&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=G.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=Kt(a),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Fr;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!Zt(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===G.VISIBLE||a.config.terminateOnPointerUp&&a.state===G.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(zo.forEach(t=>e._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(Uo.forEach(t=>a.removeEventListener(t,this,Bo)),this._pointerUpEventsRegistered=!1))}};function kr(e,a,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(n*n+o*o)}var kn=new M(`mat-ripple-global-options`);var am=(()=>{class e{_elementRef=m(zr$1);_animationsDisabled=It();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=m(me$1),n=m(O),o=m(kn,{optional:!0}),i=m(ue);this._globalOptions=o||{},this._rippleRenderer=new Jt(this,t,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r(r(r({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,r(r({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,r(r({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||e)};static ɵdir=_h({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&eg(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var Or={capture:!0};var Rr=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var On=`mat-ripple-loader-uninitialized`;var Rn=`mat-ripple-loader-class-name`;var jo=`mat-ripple-loader-centered`;var Pe=`mat-ripple-loader-disabled`;var Ho=(()=>{class e{_document=m(Pe$1);_animationsDisabled=It();_globalRippleOptions=m(kn,{optional:!0});_platform=m(O);_ngZone=m(me$1);_injector=m(ue);_eventCleanups;_hosts=new Map;constructor(){let t=m(Ur).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Rr.map(n=>t.listen(this._document,n,this._onInteraction,Or)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(On,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(Rn))&&t.setAttribute(Rn,n.className||``),n.centered&&t.setAttribute(jo,``),n.disabled&&t.setAttribute(Pe,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(Pe,``):t.removeAttribute(Pe)}_onInteraction=t=>{let n=q(t);if(n instanceof HTMLElement){let o=n.closest(`[${On}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(Rn)),t.append(n);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??Qt.enterDuration,r=this._animationsDisabled?0:o?.animation?.exitDuration??Qt.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Pe),rippleConfig:{centered:t.hasAttribute(jo),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},d=new Jt(s,this._ngZone,n,this._platform,this._injector),u=!s.rippleDisabled;u&&d.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:d,hasSetUpEvents:u}),t.removeAttribute(On)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=Fe$1({token:e,factory:e.ɵfac})}return e})();var $o=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=PD({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var Lr=new M(`MAT_BUTTON_CONFIG`);function Vo(e){return e==null?void 0:dj(e)}var Be=(()=>{class e{_elementRef=m(zr$1);_ngZone=m(me$1);_animationsDisabled=It();_config=m(Lr,{optional:!0});_focusMonitor=m(Ne);_cleanupClick;_renderer=m(wc);_rippleLoader=m(Ho);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=rj(!1,{transform:uj});constructor(){m(nt).load($o);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=_h({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Dl(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),Ww(o.color?`mat-`+o.color:``),eg(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,uj],disabled:[2,`disabled`,`disabled`,uj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,uj],tabIndex:[2,`tabIndex`,`tabIndex`,Vo],_tabindex:[2,`tabindex`,`_tabindex`,Vo],showProgress:[1,`showProgress`]}})}return e})();var Pr=(()=>{class e extends Be{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(i,r){i&1&&(Tl(0,`div`,1),Nw(1,1),Cl())}return PD({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Sh],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(Mw(t),Vh(0,`span`,0),Nw(1),iw(2,o,2,0,`div`,1),Vh(3,`span`,2)(4,`span`,3)),r&2&&(rI(2),aw(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();var Go=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Ji$1({type:e});static ɵinj=yr$1({imports:[uV]})}return e})();var Wo=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Rm=(()=>{class e extends Be{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Br(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?Wo.get(this._appearance):null,i=Wo.get(t);o&&n.remove(...o),n.add(...i),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(i,r){i&1&&(Tl(0,`div`,2),Nw(1,3),Cl())}return PD({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Sh],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(Mw(t),Vh(0,`span`,0),Nw(1),Tl(2,`span`,1),Nw(3,1),Cl(),Nw(4,2),iw(5,o,2,0,`div`,2),Vh(6,`span`,3)(7,`span`,4)),r&2&&(eg(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),rI(5),aw(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();function Br(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var zr=new M(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>Ln});var Ln={color:`accent`};var Lm=(()=>{class e extends Be{_options=m(zr,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Ln,this.color=this._options.color||Ln.color}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(i,r){i&1&&(Tl(0,`div`,2),Nw(1,3),Cl())}return PD({type:e,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(r,s){r&2&&eg(`mdc-fab--extended`,s.extended)(`mat-mdc-extended-fab`,s.extended)},inputs:{extended:[2,`extended`,`extended`,uj]},exportAs:[`matButton`,`matAnchor`],features:[Sh],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(Mw(t),Vh(0,`span`,0),Nw(1),Tl(2,`span`,1),Nw(3,1),Cl(),Nw(4,2),iw(5,o,2,0,`div`,2),Vh(6,`span`,3)(7,`span`,4)),r&2&&(eg(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),rI(5),aw(s.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return e})();var Pm=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Ji$1({type:e});static ɵinj=yr$1({imports:[Go,uV]})}return e})();export{lr as $,Pr as A,_o as B,Mo as C,Nu as D,Ni as E,Vu as F,dd as G,am as H,Wa as I,gn as J,fn as K,Xi as L,Si as M,Sr as N,O,Te as P,ku as Q,Zt as R,Mi as S,Ne as T,cd as U,_u as V,cr as W,ju as X,hn as Y,kn as Z,Iu as _,Cn as a,sc as at,Kt as b,Dn as c,wi as ct,Fu as d,wr as dt,me as et,Ga as f,xi as ft,It as g,In as h,yn as ht,Ai as i,qt as it,Rm as j,Pm as k,Ei as l,wn as lt,Ho as m,xo as mt,$u as n,pl as nt,Cr as o,su as ot,Go as p,xn as pt,ga as q,Ae as r,q as rt,Di as s,wd as st,$o as t,nt as tt,Fi as u,wo as ut,J as v,Mr as w,Lm as x,Jt as y,_n as z};
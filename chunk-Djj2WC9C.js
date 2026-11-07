import{n as s,t as r}from"./chunk-C-7EWX3l.js";import{A as Eg,At as Qr,Br as tg,Bt as Tl,Dn as cg,Dr as oI,Dt as QI,En as cb,Fn as dw,Gr as ue,Hn as fV,I as GI,It as Rw,Kr as ug,Nr as qh,Ot as Qh,Q as Ki,Qr as vw,Qt as Vh,Sr as nb,U as Hi,Ut as Tv,Zn as hg,_ as B,_r as m,an as Wm,at as Mh,ei as wb,et as LD,f as Ah,fi as xw,g as Aw,gt as Ob,hi as yr,ht as Nw,ii as wl,kn as cw,kr as pg,lr as kn,mn as Zh,or as jh,q as Id,qn as fw,rt as M,w as Dd,yn as _w,yr as me,zr as sw,zt as Tb}from"./chunk-Di2q8XhG.js";import{A as Pr,B as _o,O,Z as kn$1,c as Dn,g as It,j as Rm,k as Pm,n as $u,nt as pl,p as Go,t as $o,tt as nt,y as Jt$1}from"./chunk-p33yfgCv.js";import{a as Vn,d as zn,u as ze}from"./chunk-Chs-_8rT.js";import{f as Qr$1,i as Kn,n as Et,p as Sr,t as Er,v as Yr}from"./chunk-dwhQxn0h.js";import{M as T,f as h}from"./main-TOPCNPGP.js";import{t as g}from"./chunk-C1Ab2APA.js";import{r as Ze,t as Ue}from"./chunk-CQUsVETH.js";import{t as n}from"./chunk-Ba8jeQYI.js";import"./chunk-C7zlVgxP.js";import{n as ve,t as ce}from"./chunk-CqdLRmak.js";var Xt=new M(`ListOption`);var Ut=(()=>{class i{_elementRef=m(Qr);static ɵfac=function(e){return new(e||i)};static ɵdir=Mh({type:i,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return i})();var qt=(()=>{class i{_elementRef=m(Qr);static ɵfac=function(e){return new(e||i)};static ɵdir=Mh({type:i,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return i})();var Yt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵdir=Mh({type:i,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return i})();var jt=(()=>{class i{_listOption=m(Xt,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(e){return new(e||i)};static ɵdir=Mh({type:i,hostVars:4,hostBindings:function(e,n){e&2&&tg(`mdc-list-item__start`,n._isAlignedAtStart())(`mdc-list-item__end`,!n._isAlignedAtStart())}})}return i})();var Kt=(()=>{class i extends jt{static ɵfac=(()=>{let t;return function(n){return(t||(t=Tv(i)))(n||i)}})();static ɵdir=Mh({type:i,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[Ah]})}return i})();var Zt=(()=>{class i extends jt{static ɵfac=(()=>{let t;return function(n){return(t||(t=Tv(i)))(n||i)}})();static ɵdir=Mh({type:i,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[Ah]})}return i})();var $t=new M(`MAT_LIST_CONFIG`);var q=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=$u(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set($u(t))}_disabled=kn(!1);_defaultOptions=m($t,{optional:!0});static ɵfac=function(e){return new(e||i)};static ɵdir=Mh({type:i,hostVars:1,hostBindings:function(e,n){e&2&&wl(`aria-disabled`,n.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return i})();var Jt=(()=>{class i{_elementRef=m(Qr);_ngZone=m(me);_listBase=m(q,{optional:!0});_platform=m(O);_hostElement;_isButtonElement;_noopAnimations=It();_avatars;_icons;set lines(t){this._explicitLines=Dn(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=$u(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set($u(t))}_disabled=kn(!1);_subscriptions=new B;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){m(nt).load($o);let t=m(kn$1,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new Jt$1(this,this._ngZone,this._hostElement,this._platform,m(ue)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Wm(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,e===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,e===3),this._hasUnscopedTextContent){let m=this._titles.length===0&&e===1;n.classList.toggle(`mdc-list-item__primary-text`,m),n.classList.toggle(`mdc-list-item__secondary-text`,!m)}else n.classList.remove(`mdc-list-item__primary-text`),n.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static ɵfac=function(e){return new(e||i)};static ɵdir=Mh({type:i,contentQueries:function(e,n,m){if(e&1&&Qh(m,Kt,4)(m,Zt,4),e&2){let f;Aw(f=Rw())&&(n._avatars=f),Aw(f=Rw())&&(n._icons=f)}},hostVars:4,hostBindings:function(e,n){e&2&&(wl(`aria-disabled`,n.disabled)(`disabled`,n._isButtonElement&&n.disabled||null),tg(`mdc-list-item--disabled`,n.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return i})();var Vt=(()=>{class i extends q{static ɵfac=(()=>{let t;return function(n){return(t||(t=Tv(i)))(n||i)}})();static ɵcmp=(function(){return LD({type:i,selectors:[[`mat-list`]],hostAttrs:[1,`mat-mdc-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matList`],features:[Eg([{provide:q,useExisting:i}]),Ah],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,m){n&1&&(Nw(),xw(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`],encapsulation:2})})()}return i})();var Qt=(()=>{class i extends Jt{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=$u(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tv(i)))(n||i)}})();static ɵcmp=(function(){let t=[`unscopedContent`],e=[`text`],n=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];return LD({type:i,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(p,o,g){if(p&1&&Qh(g,qt,5)(g,Ut,5)(g,Yt,5),p&2){let z;Aw(z=Rw())&&(o._lines=z),Aw(z=Rw())&&(o._titles=z),Aw(z=Rw())&&(o._meta=z)}},viewQuery:function(p,o){if(p&1&&Zh(t,5)(e,5),p&2){let g;Aw(g=Rw())&&(o._unscopedContent=g.first),Aw(g=Rw())&&(o._itemText=g.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(p,o){p&2&&(wl(`aria-current`,o._getAriaCurrent()),tg(`mdc-list-item--activated`,o.activated)(`mdc-list-item--with-leading-avatar`,o._avatars.length!==0)(`mdc-list-item--with-leading-icon`,o._icons.length!==0)(`mdc-list-item--with-trailing-meta`,o._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,o._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,o._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[Ah],ngContentSelectors:[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`],decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(p,o){p&1&&(Nw(n),xw(0),Hi(1,`span`,1),xw(2,1),xw(3,2),Hi(4,`span`,2,0),qh(`cdkObserveContent`,function(){return o._updateItemLines(!0)}),xw(6,3),Tl()(),xw(7,4),xw(8,5),Vh(9,`div`,3))},dependencies:[pl],encapsulation:2})})()}return i})();var Gt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ki({type:i});static ɵinj=yr({imports:[_o,Go,n,fV,h]})}return i})();var ii=(i,a)=>a.id;function ei(i,a){if(i&1){let t=vw();Hi(0,`mat-list-item`,7)(1,`mat-checkbox`,8),GI(),hg(`ngModelChange`,function(n){let m=Id(t).$implicit;return cb(m.completed,n)||(m.completed=n),Dd(n)}),qh(`change`,function(){let n=Id(t).$implicit,m=_w();return Dd(m.updateTodo(n))}),Tl(),Hi(2,`span`,9),nb(3),Tl(),Hi(4,`button`,10),qh(`click`,function(){let n=Id(t).$implicit,m=_w();return Dd(m.deleteTodo(n.id))}),Hi(5,`mat-icon`),nb(6,`delete`),Tl()()()}if(i&2){let t=a.$implicit;tg(`completed`,t.completed),oI(),pg(`ngModel`,t.completed),QI(),oI(2),cg(t.text)}}function ni(i,a){if(i&1){let t=vw();Hi(0,`button`,12),qh(`click`,function(){Id(t);let n=_w(2);return Dd(n.clearCompleted())}),nb(1),wb(2,`translate`),Tl()}i&2&&(oI(),cg(Tb(2,1,`projects.todo.clear-completed`)))}function ai(i,a){if(i&1){let t=vw();Hi(0,`div`,6)(1,`span`),nb(2),wb(3,`translate`),wb(4,`translate`),Tl(),Hi(5,`div`,11)(6,`button`,12),qh(`click`,function(){Id(t);let n=_w();return Dd(n.setFilter(`all`))}),nb(7),wb(8,`translate`),Tl(),Hi(9,`button`,12),qh(`click`,function(){Id(t);let n=_w();return Dd(n.setFilter(`active`))}),nb(10),wb(11,`translate`),Tl(),Hi(12,`button`,12),qh(`click`,function(){Id(t);let n=_w();return Dd(n.setFilter(`completed`))}),nb(13),wb(14,`translate`),Tl()(),sw(15,ni,3,3,`button`,13),Tl()}if(i&2){let t=_w();oI(2),ug(``,t.activeTodosCount(),` `,Tb(3,13,t.activeTodosCount()===1?`projects.todo.item`:`projects.todo.items`),` `,Tb(4,15,`projects.todo.left`)),oI(4),tg(`active`,t.filter()===`all`),oI(),cg(Tb(8,17,`projects.todo.all`)),oI(2),tg(`active`,t.filter()===`active`),oI(),cg(Tb(11,19,`projects.todo.active`)),oI(2),tg(`active`,t.filter()===`completed`),oI(),cg(Tb(14,21,`projects.todo.completed`)),oI(2),cw(t.completedTodosCount()>0?15:-1)}}var Wt=class i{nextId=1;todos=kn([]);newTodoText=``;filter=kn(`all`);filteredTodos=Ob(()=>{let a=this.todos();switch(this.filter()){case`active`:return a.filter(e=>!e.completed);case`completed`:return a.filter(e=>e.completed);default:return a}});activeTodosCount=Ob(()=>this.todos().filter(a=>!a.completed).length);completedTodosCount=Ob(()=>this.todos().filter(a=>a.completed).length);addTodo(){let a=this.newTodoText.trim();a&&(this.todos.update(t=>[...t,{id:this.nextId++,text:a,completed:!1}]),this.newTodoText=``)}updateTodo(a){this.todos.update(t=>t.map(e=>e.id===a.id?s(r({},e),{completed:a.completed}):e))}deleteTodo(a){this.todos.update(t=>t.filter(e=>e.id!==a))}setFilter(a){this.filter.set(a)}clearCompleted(){this.todos.update(a=>a.filter(t=>!t.completed))}static ɵfac=function(t){return new(t||i)};static ɵcmp=LD({type:i,selectors:[[`app-todo`]],decls:14,vars:9,consts:[[1,`todo-container`],[1,`todo-input`],[`matInput`,``,3,`ngModelChange`,`keyup.enter`,`ngModel`,`placeholder`],[`mat-icon-button`,``,`matSuffix`,``,3,`click`,`disabled`],[1,`todo-list`],[1,`todo-item`,3,`completed`],[1,`todo-footer`],[1,`todo-item`],[3,`ngModelChange`,`change`,`ngModel`],[1,`todo-text`],[`mat-icon-button`,``,3,`click`],[1,`filter-buttons`],[`mat-button`,``,3,`click`],[`mat-button`,``]],template:function(t,e){t&1&&(Hi(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-label`),nb(3),wb(4,`translate`),Tl(),Hi(5,`input`,2),wb(6,`translate`),GI(),hg(`ngModelChange`,function(m){return cb(e.newTodoText,m)||(e.newTodoText=m),m}),qh(`keyup.enter`,function(){return e.addTodo()}),Tl(),Hi(7,`button`,3),qh(`click`,function(){return e.addTodo()}),Hi(8,`mat-icon`),nb(9,`add`),Tl()()(),Hi(10,`mat-list`,4),dw(11,ei,7,4,`mat-list-item`,5,ii),Tl(),sw(13,ai,16,23,`div`,6),Tl()),t&2&&(oI(3),cg(Tb(4,5,`projects.todo.what-needs-to-be-done`)),oI(2),pg(`ngModel`,e.newTodoText),jh(`placeholder`,Tb(6,7,`projects.todo.add-a-new-task`)),QI(),oI(2),jh(`disabled`,!e.newTodoText.trim()),oI(4),fw(e.filteredTodos()),oI(2),cw(e.todos().length>0?13:-1))},dependencies:[Qr$1,Et,Yr,Kn,Ze,Ue,Vn,ze,zn,Pm,Rm,Pr,Gt,Vt,Qt,ve,ce,Sr,Er,g,T],styles:[`.todo-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}.todo-input[_ngcontent-%COMP%]{width:100%;margin-bottom:var(--%NS%spacing-md)}.todo-list[_ngcontent-%COMP%]{background:var(--%NS%glass-bg);-webkit-backdrop-filter:blur(var(--%NS%blur-sm));backdrop-filter:blur(var(--%NS%blur-sm));border-radius:var(--%NS%radius-md);padding:0;margin-bottom:var(--%NS%spacing-md)}.todo-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:var(--%NS%spacing-sm) var(--%NS%spacing-md);border-bottom:1px solid var(--%NS%glass-border)}.todo-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.todo-item.completed[_ngcontent-%COMP%]   .todo-text[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.5}.todo-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin-right:1rem}.todo-item[_ngcontent-%COMP%]   .todo-text[_ngcontent-%COMP%]{flex:1}.todo-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--%NS%spacing-md);background:var(--%NS%glass-bg);-webkit-backdrop-filter:blur(var(--%NS%blur-sm));backdrop-filter:blur(var(--%NS%blur-sm));border-radius:var(--%NS%radius-md)}.todo-footer[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]{display:flex;gap:var(--%NS%spacing-sm)}.todo-footer[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:var(--%NS%glass-inset)!important}`]})};export{Wt as TodoComponent};
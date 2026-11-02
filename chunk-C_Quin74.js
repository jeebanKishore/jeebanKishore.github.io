import{n as s,o as w,t as r}from"./chunk-C-7EWX3l.js";import{A as Ed,Ar as rI,Br as uV,Dn as bl,Dr as qI,E as Dl,En as bg,Et as Sd,Fn as de,Gn as fg,Gr as uw,In as dg,Ir as tb,M as Fe,Mn as cj,Mt as Sw,Nt as Tb,O as EE,P as Fh,Pr as sb,Rn as dj,Sn as ag,T as Cw,Tn as bb,Tt as Rw,U as Ib,Vn as eg,Vt as Uh,Wr as uj,Xn as hb,Yn as hE,Yr as wb,Zr as we,Zt as Vi,_r as m,ar as jh,ci as yg,cr as kn$1,ct as Mw,di as yw,dt as Nw,en as Wh,er as ij,f as Aw,gi as zr,ht as PD,in as Ww,jn as cg,ln as Yh,lt as Nl,mt as Ow,n as $d,o as Ab,pi as zI,q as Ji,qn as fu,qr as vd,rn as Wo,rr as iw,rt as M,ui as yr,wn as aw,wr as ov,xt as Qh,zn as dw}from"./chunk-DO2LSRoZ.js";import{A as Pr,H as am,K as fn$1,S as Mi,T as Ne,g as It,h as In$1,k as Pm,t as $o,tt as nt}from"./chunk-DhXXdPOG.js";import{a as Vn$1,u as ze}from"./chunk-7VHTyizf.js";import{b as _t,f as Qr,i as Kn,o as M$1,p as Sr,t as Er,u as P,v as Yr}from"./chunk-CS8fQTjw.js";import{d as Ni,j as ye}from"./chunk-DwvMSRfw.js";import{D as hi,h as Ot,j as T$1,l as T,u as U}from"./main-EUITZBFI.js";import{t as c}from"./chunk-C9eAxkbA.js";import{t as g}from"./chunk-EeeLGZOw.js";import{r as Ze,t as Ue}from"./chunk-BPOXu8Yr.js";import"./chunk-jgzjRZUR.js";import{t as Z}from"./chunk-CNdGgRbQ.js";import{i as ee,n as N$1,r as X,t as J}from"./chunk-BHqI-k83.js";import"./chunk-BW0RBnYh.js";import{t as M$2}from"./chunk-DCuxdijP.js";import"./chunk-B3JJrYp7.js";import{r as Z$1}from"./chunk-1plz7DTj.js";import{n as Nt,r as Pt,t as Lt}from"./chunk-7i1AfmQV.js";import{t as Yr$1}from"./chunk-AN8c9Vuf.js";import{t as F}from"./chunk-BFX3-NdW.js";import{t as g$1}from"./chunk-D3xNDJgj.js";import{n as ve$1,t as ce}from"./chunk-WuJuQ7WV.js";import"./chunk-B0LiOzOr.js";import{n as On$1,r as Xe}from"./chunk-QBY69KWt.js";var pn=new M(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var ne=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var gn=(()=>{class a{_elementRef=m(zr);_focusMonitor=m(Ne);_changeDetectorRef=m(cj);defaults=m(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ne(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=It();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new we;toggleChange=new we;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(nt).load($o);let e=m(new bg(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=m(In$1).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ne(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`switch`],t=[`*`];function l(r,c){r&1&&(Vi(0,`span`,11),Sd(),Vi(1,`svg`,13),jh(2,`path`,14),bl(),Vi(3,`svg`,15),jh(4,`path`,16),bl()())}return PD({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(c,d){if(c&1&&Qh(e,5),c&2){let v;Sw(v=Aw())&&(d._switchElement=v.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(c,d){c&2&&(Uh(`id`,d.id),Dl(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Ww(d.color?`mat-`+d.color:``),eg(`mat-mdc-slide-toggle-focused`,d._focused)(`mat-mdc-slide-toggle-checked`,d.checked)(`mat-slide-toggle-full-width`,d.fullWidth)(`_mat-animation-noopable`,d._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,uj],color:`color`,disabled:[2,`disabled`,`disabled`,uj],fullWidth:[2,`fullWidth`,`fullWidth`,uj],disableRipple:[2,`disableRipple`,`disableRipple`,uj],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?0:dj(r)],checked:[2,`checked`,`checked`,uj],hideIcon:[2,`hideIcon`,`hideIcon`,uj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,uj]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[yg([{provide:P,useExisting:Wo(()=>a),multi:!0},{provide:M$1,useExisting:a,multi:!0}]),ov],ngContentSelectors:t,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(c,d){if(c&1&&(Mw(),Vi(0,`div`,1)(1,`button`,2,0),Wh(`click`,function(){return d._handleClick()}),jh(3,`div`,3)(4,`span`,4),Vi(5,`span`,5)(6,`span`,6)(7,`span`,7),jh(8,`span`,8),bl(),Vi(9,`span`,9),jh(10,`span`,10),bl(),iw(11,l,5,0,`span`,11),bl()()(),Vi(12,`label`,12),Wh(`click`,function(_){return _.stopPropagation()}),Nw(13),bl()()),c&2){let v=Ow(2);Fh(`labelPosition`,d.labelPosition),rI(),eg(`mdc-switch--selected`,d.checked)(`mdc-switch--unselected`,!d.checked)(`mdc-switch--checked`,d.checked)(`mdc-switch--disabled`,d.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,d.disabledInteractive),Fh(`tabIndex`,d.disabled&&!d.disabledInteractive?-1:d.tabIndex)(`disabled`,d.disabled&&!d.disabledInteractive),Dl(`id`,d.buttonId)(`name`,d.name)(`aria-label`,d.ariaLabel)(`aria-labelledby`,d._getAriaLabelledBy())(`aria-describedby`,d.ariaDescribedby)(`aria-required`,d.required||null)(`aria-checked`,d.checked)(`aria-disabled`,d.disabled&&d.disabledInteractive?`true`:null),rI(9),Fh(`matRippleTrigger`,v)(`matRippleDisabled`,d.disableRipple||d.disabled)(`matRippleCentered`,!0),rI(),aw(d.hideIcon?-1:11),rI(),Fh(`for`,d.buttonId),Dl(`id`,d._labelId)}},dependencies:[am,g$1],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return a})();var qt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Ji({type:a});static ɵinj=yr({imports:[gn,uV]})}return a})();function hn(){return crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`}var ie=class a{progress01=kn$1(0);busy=kn$1(!1);lastError=kn$1(null);worker=null;lastInitW=-1;lastInitH=-1;lastImageToken=null;constructor(){typeof Worker>`u`||(this.worker=new Worker(new URL(`worker-E5OD5GHO.js`,import.meta.url),{type:`module`}))}async initImage(n,e,t,l){if(!this.worker)throw new Error(`Web Workers are not available.`);let r=l??null;if(this.lastInitW===e&&this.lastInitH===t&&this.lastImageToken===r)return;let c=await this.bitmapToPixels(n,e,t),d={type:`initImage`,width:e,height:t,pixels:c};this.worker.postMessage(d,[c.buffer]),this.lastInitW=e,this.lastInitH=t,this.lastImageToken=r}setCustomShapes(n){if(!this.worker)return;let e={type:`setCustomShapes`,shapes:n??[]};this.worker.postMessage(e)}renderSvg(n){if(!this.worker)return Promise.reject(new Error(`Web Workers are not available.`));this.busy.set(!0),this.lastError.set(null),this.progress01.set(0);let e=hn(),t={type:`renderSvg`,requestId:e,settings:n};return new Promise((l,r)=>{let c=v=>{let _=v.data;if(!(!_||_.requestId!==e)){if(_.type===`progress`){this.progress01.set(_.progress01??0);return}if(_.type===`result`){d(),this.busy.set(!1),this.progress01.set(1),l(_.svg);return}if(_.type===`error`){d(),this.busy.set(!1);let L=_.message??`Worker error`;this.lastError.set(L),r(new Error(L))}}},d=()=>this.worker?.removeEventListener(`message`,c);this.worker.addEventListener(`message`,c),this.worker.postMessage(t)})}async render(n,e,t,l=[],r=[]){if(n===`png`)throw new Error(`PNG export is not implemented yet (SVG-first phase).`);return await this.initImage(t,e.width,e.height),this.setCustomShapes(r),{type:`result`,requestId:`compat`,mode:`svg`,svg:await this.renderSvg(e)}}terminate(){this.worker?.terminate(),this.worker=null,this.lastInitW=-1,this.lastInitH=-1,this.lastImageToken=null}async bitmapToPixels(n,e,t){if(typeof OffscreenCanvas<`u`){let v=new OffscreenCanvas(e,t).getContext(`2d`,{willReadFrequently:!0});if(!v)throw new Error(`2D context not available (OffscreenCanvas).`);v.clearRect(0,0,e,t),v.drawImage(n,0,0,e,t);let _=v.getImageData(0,0,e,t);return new Uint8ClampedArray(_.data)}let l=document.createElement(`canvas`);l.width=e,l.height=t;let r=l.getContext(`2d`,{willReadFrequently:!0});if(!r)throw new Error(`2D context not available (HTMLCanvasElement).`);r.clearRect(0,0,e,t),r.drawImage(n,0,0,e,t);let c=r.getImageData(0,0,e,t);return new Uint8ClampedArray(c.data)}static ɵfac=function(e){return new(e||a)};static ɵprov=Fe({token:a,factory:a.ɵfac})};var Xt=w(Yr$1());var N={defaults:{width:600,height:600,keepProportions:!0,pat:0,vnum:100,hdist:100,grot:0,offsetX:0,offsetY:0,freq:50,centerX:300,centerY:300,grad:6,contrast:50,sizeMax:100,sizeMin:0,rot:0,rotrnd:!1,rotalt:!1,useImgColor:!1,fgColor:`#000000`,bgColor:`#ffffff`,bgEnabled:!0,filled:!0,strokeWidth:1,shapeId:`builtin:1`,customText:``},limits:{width:{min:64,max:4e3,step:1},height:{min:64,max:4e3,step:1},vnum:{min:1,max:500,step:1},hdist:{min:1,max:200,step:1},angle:{min:-180,max:180,step:1},frequency:{min:1,max:100,step:1},contrast:{min:0,max:100,step:1},sizeMax:{min:0,max:200,step:1},sizeMin:{min:0,max:100,step:1},strokeWidth:{min:1,max:10,step:1}},reset:{activeRailTab:`source`,activeView:`halftone`,zoomScale:1,imageToken:`default`,settings:{width:600,height:600,keepProportions:!0,pat:0,vnum:100,hdist:100,grot:0,offsetX:0,offsetY:0,freq:50,centerX:300,centerY:300,grad:6,contrast:50,sizeMax:100,sizeMin:0,rot:0,rotrnd:!1,rotalt:!1,useImgColor:!1,fgColor:`#000000`,bgColor:`#ffffff`,bgEnabled:!0,filled:!0,strokeWidth:1,shapeId:`builtin:1`,customText:``}},storage:{database:`halftone-db`,store:`kv`,keyPrefixes:{image:`img`,shape:`shape`,preset:`preset`}}};var ae=class a{db=Xt.default.createInstance({name:N.storage.database,storeName:N.storage.store});key(n,e){return`${n===`img`?N.storage.keyPrefixes.image:n===`shape`?N.storage.keyPrefixes.shape:N.storage.keyPrefixes.preset}:${e}`}async listPresets(){let n=[];return await this.db.iterate((e,t)=>{t.startsWith(`${N.storage.keyPrefixes.preset}:`)&&n.push(e)}),n.sort((e,t)=>t.createdAt-e.createdAt)}async savePreset(n){await this.db.setItem(this.key(`preset`,n.id),n)}async deletePreset(n){await this.db.removeItem(this.key(`preset`,n))}async listImages(){let n=[];return await this.db.iterate((e,t)=>{t.startsWith(`${N.storage.keyPrefixes.image}:`)&&n.push(e)}),n.sort((e,t)=>t.createdAt-e.createdAt)}async saveImage(n){await this.db.setItem(this.key(`img`,n.id),n)}async deleteImage(n){await this.db.removeItem(this.key(`img`,n))}async listShapes(){let n=[];return await this.db.iterate((e,t)=>{t.startsWith(`${N.storage.keyPrefixes.shape}:`)&&n.push(e)}),n.sort((e,t)=>t.createdAt-e.createdAt)}async saveShape(n){await this.db.setItem(this.key(`shape`,n.id),n)}async deleteShape(n){await this.db.removeItem(this.key(`shape`,n))}async clearAll(){await this.db.clear()}static ɵfac=function(e){return new(e||a)};static ɵprov=Fe({token:a,factory:a.ɵfac})};var Wt=`
  <defs>
    <linearGradient id="halftone-preview-grad" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="5%" stop-color="#0c0738" />
      <stop offset="95%" stop-color="#bef8d8" />
    </linearGradient>
  </defs>
`;var Gt=[{id:`builtin:0`,label:`Square`,preview:z(j(`<rect x="16" y="16" width="32" height="32"/>`))},{id:`builtin:1`,label:`Circle`,preview:z(j(`<circle cx="32" cy="32" r="16"/>`))},{id:`builtin:2`,label:`Diamond`,preview:z(j(`<path d="M16 32 L48 48 L40 32 L48 16 Z"/>`))},{id:`builtin:3`,label:`Hex`,preview:z(j(`<path d="M 16 32 L 24 45.85 L 40 45.85 L 48 32 L 40 18.15 L 24 18.15 Z"/>`))},{id:`builtin:4`,label:`Line`,preview:z(fe(`<path d="M16 32h32"/>`))},{id:`builtin:5`,label:`Star 4`,preview:z(j(`<path d="M32 16 L37.65 26.35 L48 32 L37.65 37.65 L32 48 L26.35 37.65 L16 32 L26.35 26.35 Z"/>`))},{id:`builtin:6`,label:`Star 5`,preview:z(j(`<path d="M32 16 L36.7 25.53 L47.2 27.06 L39.61 34.47 L41.4 44.94 L32 40 L22.6 44.94 L24.39 34.47 L16.8 27.06 L27.3 25.53 Z"/>`))},{id:`builtin:7`,label:`Star 6`,preview:z(j(`<path d="M32 16 L36 25.08 L45.85 24 L40 32 L45.85 40 L36 38.92 L32 48 L28 38.92 L18.15 40 L24 32 L18.15 24 L28 25.08 Z"/>`))},{id:`builtin:8`,label:`Cross`,preview:z(j(`<path d="M26 14h12v12h12v12H38v12H26V38H14V26h12z"/>`))},{id:`builtin:9`,label:`Triangle`,preview:z(j(`<path d="M 13.53 42.67 L 32 10.67 L 50.47 42.67 Z"/>`))},{id:`builtin:10`,label:`Dash`,preview:z(fe(`<path d="M20 32h24"/>`))},{id:`builtin:11`,label:`Text`,preview:un(`A`)},{id:`builtin:12`,label:`Corner`,preview:z(fe(`<path d="M16 48 L48 48 L48 16"/>`))}];function z(a){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.15));">
    ${Wt}
    ${a}
  </svg>`}function j(a){return`<g fill="url(#halftone-preview-grad)">${a}</g>`}function fe(a){return`<g fill="none" stroke="url(#halftone-preview-grad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">${a}</g>`}function un(a){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.15));">
    ${Wt}
    <text x="32" y="44" text-anchor="middle"
      font-size="38" font-weight="900" font-family="Courier New, monospace"
      fill="url(#halftone-preview-grad)">${a}</text>
  </svg>`}var A=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="overflow: visible;">`;var V=`</svg>`;var $=`<g fill="currentColor">`;var q=`<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2, 2" opacity="0.7">`;var Yt={0:`${A}
        ${q}
          <path d="M6 6 h20 M6 16 h20 M6 26 h20 M6 6 v20 M16 6 v20 M26 6 v20"/>
        </g>
        ${$}
          <circle cx="6" cy="6" r="2.5"/><circle cx="16" cy="6" r="2.5"/><circle cx="26" cy="6" r="2.5"/>
          <circle cx="6" cy="16" r="2.5"/><circle cx="16" cy="16" r="2.5"/><circle cx="26" cy="16" r="2.5"/>
          <circle cx="6" cy="26" r="2.5"/><circle cx="16" cy="26" r="2.5"/><circle cx="26" cy="26" r="2.5"/>
        </g>
      ${V}`,1:`${A}
        ${q}
          <path d="M6 6 L26 26 M6 26 L26 6"/>
        </g>
        ${$}
          <circle cx="6" cy="6" r="2.5"/><circle cx="26" cy="6" r="2.5"/>
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="6" cy="26" r="2.5"/><circle cx="26" cy="26" r="2.5"/>
        </g>
      ${V}`,2:`${A}
        ${q}
          <path d="M4 8 h24 M4 16 h24 M4 24 h24 M8 8 v16 M24 8 v16 M16 8 v16"/>
        </g>
        ${$}
          <circle cx="8" cy="8" r="2.5"/><circle cx="24" cy="8" r="2.5"/>
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="8" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/>
        </g>
      ${V}`,3:`${A}
        ${q}
          <path d="M16 16 L16 4 M16 16 L26.39 10 M16 16 L26.39 22 M16 16 L16 28 M16 16 L5.61 22 M16 16 L5.61 10"/>
          <path d="M16 4 L26.39 10 L26.39 22 L16 28 L5.61 22 L5.61 10 Z"/>
        </g>
        ${$}
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="16" cy="4" r="2.5"/><circle cx="26.39" cy="10" r="2.5"/>
          <circle cx="26.39" cy="22" r="2.5"/><circle cx="16" cy="28" r="2.5"/>
          <circle cx="5.61" cy="22" r="2.5"/><circle cx="5.61" cy="10" r="2.5"/>
        </g>
      ${V}`,4:`${A}
        ${$}
          <circle cx="8" cy="8" r="2"/><circle cx="24" cy="6" r="1.5"/><circle cx="14" cy="12" r="2.5"/>
          <circle cx="26" cy="16" r="2"/><circle cx="6" cy="20" r="1.5"/><circle cx="18" cy="22" r="2"/>
          <circle cx="10" cy="26" r="2"/><circle cx="22" cy="28" r="2.5"/>
        </g>
      ${V}`,5:`${A}
        ${q}
          <path d="M4 10 Q 10 4, 16 10 T 28 10"/>
          <path d="M4 16 Q 10 10, 16 16 T 28 16"/>
          <path d="M4 22 Q 10 16, 16 22 T 28 22"/>
        </g>
        ${$}
          <circle cx="4" cy="10" r="2"/><circle cx="10" cy="7" r="2"/><circle cx="16" cy="10" r="2"/><circle cx="22" cy="13" r="2"/><circle cx="28" cy="10" r="2"/>
          <circle cx="4" cy="16" r="2"/><circle cx="10" cy="13" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="22" cy="19" r="2"/><circle cx="28" cy="16" r="2"/>
          <circle cx="4" cy="22" r="2"/><circle cx="10" cy="19" r="2"/><circle cx="16" cy="22" r="2"/><circle cx="22" cy="25" r="2"/><circle cx="28" cy="22" r="2"/>
        </g>
      ${V}`,6:`${A}
        ${q}
          <circle cx="16" cy="16" r="10"/>
          <path d="M16 6 v20 M6 16 h20 M8.93 8.93 L23.07 23.07 M8.93 23.07 L23.07 8.93"/>
        </g>
        ${$}
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="16" cy="6" r="2"/><circle cx="26" cy="16" r="2"/>
          <circle cx="16" cy="26" r="2"/><circle cx="6" cy="16" r="2"/>
          <circle cx="23.07" cy="8.93" r="2"/><circle cx="23.07" cy="23.07" r="2"/>
          <circle cx="8.93" cy="23.07" r="2"/><circle cx="8.93" cy="8.93" r="2"/>
        </g>
      ${V}`,7:`${A}
        ${$}
          <circle cx="16" cy="6" r="2.5"/>
          <circle cx="8" cy="12" r="2.5"/><circle cx="24" cy="12" r="2.5"/>
          <circle cx="16" cy="18" r="2.5"/>
          <circle cx="8" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/>
        </g>
      ${V}`,8:`${A}
        ${q}
          <path d="M6 10 L 12 16 L 20 8 L 26 14"/>
          <path d="M6 16 L 12 22 L 20 14 L 26 20"/>
          <path d="M6 22 L 12 28 L 20 20 L 26 26"/>
        </g>
        ${$}
          <circle cx="6" cy="10" r="2"/><circle cx="12" cy="16" r="2"/><circle cx="20" cy="8" r="2"/><circle cx="26" cy="14" r="2"/>
          <circle cx="6" cy="16" r="2"/><circle cx="12" cy="22" r="2"/><circle cx="20" cy="14" r="2"/><circle cx="26" cy="20" r="2"/>
          <circle cx="6" cy="22" r="2"/><circle cx="12" cy="28" r="2"/><circle cx="20" cy="20" r="2"/><circle cx="26" cy="26" r="2"/>
        </g>
      ${V}`};function Kt(a){let e=new DOMParser().parseFromString(a,`image/svg+xml`).querySelector(`svg`);if(!e)throw new Error(`Invalid SVG: missing <svg> root`);let t=fn(e),l=vn(e);return e.setAttribute(`viewBox`,`${t.minX} ${t.minY} ${t.width} ${t.height}`),e.removeAttribute(`width`),e.removeAttribute(`height`),l&&e.querySelectorAll(`*`).forEach(c=>{let d=c,v=d.getAttribute(`fill`);v&&v!==`none`&&v!==`transparent`&&d.setAttribute(`fill`,`currentColor`);let _=d.getAttribute(`stroke`);_&&_!==`none`&&_!==`transparent`&&d.setAttribute(`stroke`,`currentColor`);let L=d.getAttribute(`style`);L&&d.setAttribute(`style`,L.replace(/fill\s*:\s*[^;]+/gi,`fill:currentColor`).replace(/stroke\s*:\s*[^;]+/gi,`stroke:currentColor`))}),{svgText:new XMLSerializer().serializeToString(e),viewBox:t,monochrome:l}}function Jt(a,n){let e=n*.1,t=ve(a);return`
<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${n}" viewBox="0 0 ${n} ${n}" aria-hidden="true">
  <g transform="translate(${e} ${e}) scale(${(n-2*e)/n})">
    ${t}
  </g>
</svg>`.trim()}function ve(a){let n=a.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);return n?n[1]:a}function fn(a){let n=a.getAttribute(`viewBox`);if(n){let l=n.split(/[ ,]+/).map(r=>Number(r));if(l.length>=4){let[r,c,d,v]=l;if(Number.isFinite(d)&&Number.isFinite(v)&&d>0&&v>0)return{minX:r,minY:c,width:d,height:v}}}return{minX:0,minY:0,width:Zt(a.getAttribute(`width`))??100,height:Zt(a.getAttribute(`height`))??100}}function Zt(a){if(!a)return null;let n=parseFloat(a);return Number.isFinite(n)?n:null}function vn(a){let n=new Set;return a.querySelectorAll(`*`).forEach(e=>{let t=e,l=(t.getAttribute(`fill`)||``).trim(),r=(t.getAttribute(`stroke`)||``).trim();re(l)&&n.add(l),re(r)&&n.add(r);let c=(t.getAttribute(`style`)||``).toLowerCase(),d=Qt(c,`fill`),v=Qt(c,`stroke`);d&&re(d)&&n.add(d),v&&re(v)&&n.add(v)}),n.size<=1}function re(a){return!(!a||a===`none`||a===`transparent`||a.startsWith(`url(`))}function Qt(a,n){let e=a.indexOf(`${n}:`);if(e===-1)return null;let t=a.slice(e+n.length+1).trim(),l=t.indexOf(`;`);return(l===-1?t:t.slice(0,l)).trim()||null}function en(a){if(!a)return!1;let n=(a.type||``).toLowerCase(),e=typeof a.name==`string`?a.name.toLowerCase():``;return n===`image/svg+xml`||e.endsWith(`.svg`)}async function tn(a,n={}){let e=n.targetMaxDimension??1200,t=n.backgroundColor!==void 0?n.backgroundColor:`#ffffff`,l=typeof a==`string`?a:await a.text(),c=new DOMParser().parseFromString(l,`image/svg+xml`),d=c.querySelector(`svg`);if(!d)throw new Error(`Invalid SVG markup: no root <svg> element found.`);d.getAttribute(`xmlns`)||d.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`);let v=parseFloat(d.getAttribute(`width`)||``),_=parseFloat(d.getAttribute(`height`)||``),L=d.getAttribute(`viewBox`),T=0,se=0,le=0,ce=0;if(L){let D=L.trim().split(/[\s,]+/).map(Number);D.length>=4&&D[2]>0&&D[3]>0&&([T,se,le,ce]=D)}(isNaN(v)||v<=0)&&le>0&&(v=le),(isNaN(_)||_<=0)&&ce>0&&(_=ce),(isNaN(v)||v<=0)&&(v=800),(isNaN(_)||_<=0)&&(_=800);let _e=Math.max(1,e/Math.max(v,_)),X=Math.round(v*_e),W=Math.round(_*_e);d.setAttribute(`width`,`${X}`),d.setAttribute(`height`,`${W}`),L||d.setAttribute(`viewBox`,`0 0 ${v} ${_}`);let on=new XMLSerializer().serializeToString(c),sn=new Blob([on],{type:`image/svg+xml;charset=utf-8`}),ye=URL.createObjectURL(sn);try{let D=new Image;await new Promise((ln,cn)=>{D.onload=()=>ln(),D.onerror=()=>cn(new Error(`Failed to decode SVG as image.`)),D.src=ye});let U,G;if(typeof OffscreenCanvas<`u`?(U=new OffscreenCanvas(X,W),G=U.getContext(`2d`)):(U=document.createElement(`canvas`),U.width=X,U.height=W,G=U.getContext(`2d`)),!G)throw new Error(`Failed to create 2D canvas context for SVG rasterization.`);return t&&t!==`transparent`&&(G.fillStyle=t,G.fillRect(0,0,X,W)),G.drawImage(D,0,0,X,W),{bitmap:await createImageBitmap(U),width:X,height:W,rawSvg:l}}finally{URL.revokeObjectURL(ye)}}function C(a){return r(s(r({},N.defaults),{customText:`3`}),a)}var be=[{id:`preset-3643`,name:`Line Pattern`,createdAt:1462803009e3,settings:C({grad:5,bgColor:`#3f536c`,fgColor:`#ffffff`,vnum:75,sizeMax:90,grot:60,shapeId:`builtin:4`,pat:0,freq:22})},{id:`preset-3641`,name:`Jade Dot Pattern`,createdAt:1462802791e3,settings:C({grad:5,bgColor:`#06664f`,fgColor:`#20f3ad`,vnum:100,sizeMax:120,grot:45,shapeId:`builtin:1`,pat:0,freq:22})},{id:`preset-3640`,name:`Cross Pattern`,createdAt:1462802701e3,settings:C({grad:6,bgColor:`#FFFFFF`,fgColor:`#1d188b`,vnum:75,sizeMax:120,grot:-60,shapeId:`builtin:8`,pat:2,freq:22})},{id:`preset-3639`,name:`Wave Pattern`,createdAt:1462802591e3,settings:C({grad:5,bgColor:`#52104f`,fgColor:`#f6e8af`,vnum:100,sizeMax:70,grot:0,shapeId:`builtin:4`,pat:5,freq:22})},{id:`preset-3638`,name:`Circular Pattern`,createdAt:1462802485e3,settings:C({grad:6,bgColor:`#aff4f6`,fgColor:`#7c4d38`,vnum:100,sizeMax:100,grot:0,shapeId:`builtin:1`,pat:6,freq:50})},{id:`preset-3637`,name:`Hex Pattern`,createdAt:1462802411e3,settings:C({grad:5,bgColor:`#3d2939`,fgColor:`#95e88f`,vnum:100,sizeMax:100,rot:30,grot:0,shapeId:`builtin:3`,pat:3,freq:50})},{id:`preset-3636`,name:`Triangle Pattern`,createdAt:1462802339e3,settings:C({grad:5,bgColor:`#395c6b`,fgColor:`#d4cb92`,vnum:100,sizeMax:100,grot:0,shapeId:`builtin:9`,pat:3,freq:50})},{id:`preset-3635`,name:`Pointillism`,createdAt:1462801963e3,settings:C({grad:5,bgColor:`#000000`,fgColor:`#1579fa`,vnum:150,sizeMax:100,grot:0,shapeId:`builtin:1`,pat:4,freq:21})},{id:`preset-3604`,name:`Fresh`,createdAt:1462800185e3,settings:C({grad:5,bgColor:`#6baa75`,fgColor:`#e0fb62`,vnum:75,sizeMax:125,rot:180,grot:30,shapeId:`builtin:2`,pat:3,freq:21})},{id:`preset-3603`,name:`Pop Art`,createdAt:1462799386e3,settings:C({grad:6,bgColor:`#fd9c89`,fgColor:`#167e87`,vnum:100,sizeMax:100,grot:-30,shapeId:`builtin:1`,pat:5,freq:21})},{id:`preset-3602`,name:`Subtle Comic Dot`,createdAt:1462798977e3,settings:C({grad:6,bgColor:`#ffffff`,fgColor:`#978b9e`,vnum:150,sizeMax:95,rot:45,grot:45,shapeId:`builtin:1`,pat:0,freq:50})},{id:`preset-3601`,name:`Cross Stitch`,createdAt:1462798832e3,settings:C({grad:0,bgColor:`#ffffff`,useImgColor:!0,vnum:75,sizeMax:55,rot:45,grot:0,shapeId:`builtin:8`,pat:0,freq:50})},{id:`preset-3600`,name:`Matrix`,createdAt:1462798724e3,settings:C({grad:5,bgColor:`#000000`,fgColor:`#05ff00`,vnum:72,sizeMax:140,grot:0,shapeId:`builtin:11`,customText:`3`,pat:0,freq:50})},{id:`preset-3599`,name:`Fuzz`,createdAt:1462798548e3,settings:C({grad:5,bgColor:`#381705`,useImgColor:!0,vnum:100,sizeMax:105,rotrnd:!0,rot:0,grot:0,shapeId:`builtin:10`,pat:4,freq:50})},{id:`preset-3598`,name:`Triangular`,createdAt:1462798422e3,settings:C({grad:6,bgColor:`#ffffff`,useImgColor:!0,vnum:51,sizeMax:100,rotalt:!0,rot:-180,grot:0,shapeId:`builtin:9`,pat:7,freq:50})},{id:`preset-3597`,name:`Hexagons`,createdAt:1462798392e3,settings:C({grad:6,bgColor:`#ffffff`,useImgColor:!0,vnum:100,sizeMax:110,rot:30,grot:0,shapeId:`builtin:3`,pat:3,freq:50,filled:!1,strokeWidth:2})},{id:`preset-3594`,name:`Mosaic`,createdAt:1462798199e3,settings:C({grad:6,bgColor:`#ffffff`,useImgColor:!0,vnum:100,sizeMax:100,grot:45,shapeId:`builtin:0`,pat:2,freq:50})},{id:`preset-3593`,name:`Default`,createdAt:1462797864e3,settings:C({grad:6,bgColor:`#ffffff`,useImgColor:!0,vnum:100,sizeMax:100,grot:0,shapeId:`builtin:1`,pat:0,freq:14})},{id:`preset-28`,name:`Doodles`,createdAt:Date.now(),settings:C({grad:6,bgColor:`#ffffff`,useImgColor:!0,vnum:50,sizeMax:35,grot:0,shapeId:`builtin:4`,pat:4,freq:50})}];var bn=[`svgWrapper`];var _n=[`fileUpload`];var yn=()=>({accept:`image/*,.svg,image/svg+xml`,buttonText:`Upload Image`,buttonIcon:`image`});var wn=()=>({accept:`.svg,image/svg+xml`,buttonText:`Import SVG Shape`,buttonIcon:`add_circle`,showPreview:!1,showFileDetails:!1});var xn=()=>({});var oe=(a,n)=>n.id;function Sn(a,n){if(a&1&&(Vi(0,`div`,5)(1,`mat-icon`),tb(2,`image`),bl(),Vi(3,`span`),tb(4),bl()(),Vi(5,`div`,5)(6,`mat-icon`),tb(7,`zoom_in`),bl(),Vi(8,`span`),tb(9),bl()()),a&2){let e=Cw();rI(4),cg(``,e.settings().width,` × `,e.settings().height),rI(5),Nl(``,(e.zoomScale()*100).toFixed(0),`%`)}}function Cn(a,n){if(a&1&&(Vi(0,`div`,20),jh(1,`div`,59),Vi(2,`span`),tb(3),bl()()),a&2){let e=Cw();rI(),Fh(`innerHTML`,e.getPresetIcon(e.selectedPreset()),hE),rI(2),ag(e.selectedPreset().name)}}function kn(a,n){if(a&1){let e=yw();Vi(0,`mat-option`,22)(1,`div`,60)(2,`div`,61),jh(3,`div`,59),Vi(4,`span`),tb(5),bl()(),Vi(6,`button`,62),Wh(`click`,function(l){let r=vd(e).$implicit,c=Cw();return l.stopPropagation(),Ed(c.deletePreset(r.id))}),Vi(7,`mat-icon`),tb(8,`close`),bl()()()()}if(a&2){let e=n.$implicit,t=Cw();Fh(`value`,e),rI(3),Fh(`innerHTML`,t.getPresetIcon(e),hE),rI(2),ag(e.name)}}function Mn(a,n){if(a&1){let e=yw();Vi(0,`button`,63),Wh(`click`,function(){let l=vd(e).$implicit,r=Cw();return Ed(r.updateConfig(`pat`,l.id))}),jh(1,`mat-icon`,64),bl()}if(a&2){let e=n.$implicit,t=Cw();eg(`active`,t.settings().pat===e.id),Fh(`matTooltip`,e.label),rI(),Fh(`svgIcon`,e.icon)}}function Nn(a,n){if(a&1){let e=yw();Vi(0,`app-slider`,31),Ib(1,`translate`),Wh(`input`,function(l){vd(e);let r=Cw();return Ed(r.updateConfig(`centerX`,l))}),bl(),Vi(2,`app-slider`,31),Ib(3,`translate`),Wh(`input`,function(l){vd(e);let r=Cw();return Ed(r.updateConfig(`centerY`,l))}),bl()}if(a&2){let e=Cw();Fh(`value`,e.settings().centerX)(`min`,0)(`max`,e.settings().width)(`step`,1)(`label`,wb(1,10,`projects.halftone.center-x`)),rI(2),Fh(`value`,e.settings().centerY)(`min`,0)(`max`,e.settings().height)(`step`,1)(`label`,wb(3,12,`projects.halftone.center-y`))}}function In(a,n){if(a&1){let e=yw();Vi(0,`app-slider`,31),Ib(1,`translate`),Wh(`input`,function(l){vd(e);let r=Cw();return Ed(r.updateConfig(`offsetX`,l))}),bl(),Vi(2,`app-slider`,31),Ib(3,`translate`),Wh(`input`,function(l){vd(e);let r=Cw();return Ed(r.updateConfig(`offsetY`,l))}),bl()}if(a&2){let e=Cw();Fh(`value`,e.settings().offsetX)(`min`,0)(`max`,100)(`step`,1)(`label`,wb(1,10,`projects.halftone.offset-x`)),rI(2),Fh(`value`,e.settings().offsetY)(`min`,0)(`max`,100)(`step`,1)(`label`,wb(3,12,`projects.halftone.offset-y`))}}function Pn(a,n){if(a&1){let e=yw();Vi(0,`app-slider`,31),Ib(1,`translate`),Wh(`input`,function(l){vd(e);let r=Cw();return Ed(r.updateConfig(`freq`,l))}),bl()}if(a&2){let e=Cw();Fh(`value`,e.settings().freq)(`min`,0)(`max`,100)(`step`,1)(`label`,wb(1,5,`projects.halftone.wave-frequency`))}}function En(a,n){if(a&1){let e=yw();Vi(0,`button`,63),Wh(`click`,function(){let l=vd(e).$implicit,r=Cw();return Ed(r.updateConfig(`shapeId`,l.id))}),jh(1,`div`,65),bl()}if(a&2){let e=n.$implicit,t=Cw();eg(`active`,t.settings().shapeId===e.id),Fh(`matTooltip`,e.label),rI(),Fh(`innerHTML`,e.safePreview,hE)}}function Tn(a,n){if(a&1){let e=yw();Vi(0,`div`,67)(1,`button`,63),Wh(`click`,function(){let l=vd(e).$implicit,r=Cw(2);return Ed(r.updateConfig(`shapeId`,`custom:`+l.id))}),jh(2,`div`,65),bl(),Vi(3,`button`,68),Wh(`click`,function(l){let r=vd(e).$implicit;return Cw(2).deleteShape(r.id),Ed(l.stopPropagation())}),Vi(4,`mat-icon`),tb(5,`close`),bl()()()}if(a&2){let e=n.$implicit,t=Cw(2);rI(),eg(`active`,t.settings().shapeId===`custom:`+e.id),Fh(`matTooltip`,e.name),rI(),Fh(`innerHTML`,t.safeCustomPreview(e.svgText),hE)}}function On(a,n){if(a&1&&(Vi(0,`h4`,66),tb(1),Ib(2,`translate`),bl(),Vi(3,`div`,34),uw(4,Tn,6,4,`div`,67,oe),bl()),a&2){let e=Cw();rI(),ag(wb(2,1,`projects.halftone.custom-shapes`)),rI(3),dw(e.shapes())}}function zn(a,n){if(a&1){let e=yw();Vi(0,`mat-form-field`,35)(1,`mat-label`),tb(2),Ib(3,`translate`),bl(),Vi(4,`input`,69),Wh(`input`,function(l){vd(e);let r=Cw();return Ed(r.updateConfig(`customText`,l.target.value))}),bl()()}if(a&2){let e=Cw();rI(2),ag(wb(3,2,`projects.halftone.custom-text-character`)),rI(2),Fh(`value`,e.settings().customText)}}function Ln(a,n){if(a&1){let e=yw();Vi(0,`app-slider`,31),Ib(1,`translate`),Wh(`input`,function(l){vd(e);let r=Cw();return Ed(r.updateConfig(`strokeWidth`,l))}),bl()}if(a&2){let e=Cw();Fh(`value`,e.settings().strokeWidth)(`min`,1)(`max`,10)(`step`,1)(`label`,wb(1,5,`projects.halftone.stroke-width`))}}function Bn(a,n){a&1&&(Vi(0,`span`,53),tb(1),Ib(2,`translate`),bl()),a&2&&(rI(),ag(wb(2,1,`projects.halftone.generating`)))}function Hn(a,n){a&1&&(Vi(0,`div`,55)(1,`div`,70)(2,`mat-icon`),tb(3,`image_search`),bl(),Vi(4,`p`),tb(5),Ib(6,`translate`),bl()()()),a&2&&(rI(5),ag(wb(6,1,`projects.halftone.upload-an-image-to-generate-a-vector-halftone-pattern`)))}function Rn(a,n){if(a&1&&jh(0,`img`,73,1),a&2){let e=Cw(2);Fh(`src`,e.safeRenderedSvg())}}function Dn(a,n){if(a&1&&(Vi(0,`div`,74),jh(1,`app-progress-panel`,79),Ib(2,`translate`),Ib(3,`number`),bl()),a&2){let e=Cw(2);rI(),Fh(`busy`,e.busy())(`value`,e.progress01()*100)(`label`,Tb(2,4,`projects.halftone.generating`,hb(11,xn),`Generating...`))(`detail`,bb(3,8,e.progress01()*100,`1.0-0`)+`%`)}}function jn(a,n){if(a&1&&(Vi(0,`div`,75)(1,`mat-icon`),tb(2,`error`),bl(),tb(3),bl()),a&2){let e=Cw(2);rI(3),ag(e.lastError())}}function An(a,n){if(a&1&&jh(0,`img`,73),a&2){let e=Cw(2);Fh(`src`,e.safeRenderedSvg())}}function Vn(a,n){if(a&1){let e=yw();Vi(0,`div`,71),Wh(`mousedown`,function(l){vd(e);let r=Cw();return Ed(r.onPanStart(l))})(`touchstart`,function(l){vd(e);let r=Cw();return Ed(r.onPanStart(l))}),jh(1,`img`,72),Ib(2,`translate`),bl(),Vi(3,`div`,71),Wh(`mousedown`,function(l){vd(e);let r=Cw();return Ed(r.onPanStart(l))})(`touchstart`,function(l){vd(e);let r=Cw();return Ed(r.onPanStart(l))}),iw(4,Rn,2,1,`img`,73),iw(5,Dn,4,12,`div`,74),iw(6,jn,4,1,`div`,75),bl(),Vi(7,`div`,76)(8,`div`,77)(9,`span`,78),tb(10),Ib(11,`translate`),bl(),jh(12,`img`,72),Ib(13,`translate`),bl(),Vi(14,`div`,77)(15,`span`,78),tb(16),Ib(17,`translate`),bl(),iw(18,An,1,1,`img`,73),bl()()}if(a&2){let e=Cw();eg(`hidden`,e.activeView()!==`original`),rI(),Fh(`src`,e.sourceImageUrl())(`alt`,wb(2,16,`projects.halftone.original-view`)),rI(2),eg(`hidden`,e.activeView()!==`halftone`),rI(),aw(e.safeRenderedSvg()?4:-1),rI(),aw(e.busy()?5:-1),rI(),aw(e.lastError()?6:-1),rI(),eg(`hidden`,e.activeView()!==`split`),rI(3),ag(wb(11,18,`projects.halftone.original-view`)),rI(2),Fh(`src`,e.sourceImageUrl())(`alt`,wb(13,20,`projects.halftone.original-view`)),rI(4),ag(wb(17,22,`projects.halftone.halftone-view`)),rI(2),aw(e.safeRenderedSvg()?18:-1)}}function $n(a,n){if(a&1){let e=yw();Vi(0,`app-button`,80),Ib(1,`translate`),Ib(2,`translate`),Wh(`clicked`,function(){vd(e);let l=Cw();return Ed(l.exportSvg())}),tb(3),Ib(4,`translate`),bl()}if(a&2){let e=Cw();Fh(`mobileIconOnly`,!0)(`disabled`,e.busy())(`ariaLabel`,wb(1,5,`projects.halftone.export-svg`))(`tooltip`,wb(2,7,`projects.halftone.export-svg`)),rI(3),ag(wb(4,9,`projects.halftone.export-svg`))}}function nn(){return crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`}var an=class a{activeRailTab=kn$1(`source`);masterCollapsed=kn$1(!1);activeView=kn$1(`halftone`);ngOnDestroy(){let n=this.sourceImageUrl();n&&URL.revokeObjectURL(n),this.currentObjectUrl&&URL.revokeObjectURL(this.currentObjectUrl),this.sourceBitmap()?.close()}svgWrapper=ij(`svgWrapper`);fileUpload=ij(`fileUpload`);engine=m(ie);store=m(ae);iconRegistry=m(_t);sanitizer=m(fn$1);shapes=kn$1([]);presets=kn$1([]);sourceBitmap=kn$1(null);sourceImageUrl=kn$1(null);imageToken=kn$1(`default`);selectedPreset=kn$1(null);hasImage=Ab(()=>this.sourceBitmap()!==null);customVectors=kn$1([]);rawSvg=kn$1(``);safeRenderedSvg=kn$1(null);currentObjectUrl=null;builtinShapes=Gt.map(n=>s(r({},n),{safePreview:this.sanitizer.bypassSecurityTrustHtml(n.preview)}));zoomScale=kn$1(1);panX=0;panY=0;isDragging=!1;dragStart={x:0,y:0};lastPan={x:0,y:0};nextRenderData=null;patternDefs=[{id:0,label:`Regular`,icon:`pat-0`},{id:1,label:`Checkers`,icon:`pat-1`},{id:2,label:`Bricks`,icon:`pat-2`},{id:3,label:`Hex`,icon:`pat-3`},{id:4,label:`Random`,icon:`pat-4`},{id:5,label:`Wave`,icon:`pat-5`},{id:6,label:`Radial`,icon:`pat-6`},{id:7,label:`Triangular`,icon:`pat-7`},{id:8,label:`Zigzag`,icon:`pat-8`}];solidColorPickerConfig=On$1;isSavingPreset=kn$1(!1);newPresetName=kn$1(``);settings=kn$1(r({},N.defaults));showFreq=Ab(()=>{let n=this.settings().pat;return n===5||n===8});showOffsets=Ab(()=>this.settings().pat!==6);showRadialCenter=Ab(()=>this.settings().pat===6);showCustomText=Ab(()=>this.settings().shapeId===`builtin:11`);busy=Ab(()=>this.engine.busy());progress01=Ab(()=>this.engine.progress01());lastError=Ab(()=>this.engine.lastError());destroyRef=m(de);constructor(){for(let[e,t]of Object.entries(Yt))this.iconRegistry.addSvgIconLiteral(`pat-${e}`,this.sanitizer.bypassSecurityTrustHtml(t));this.bootstrap(),$d(()=>{let e=this.customVectors();this.engine.setCustomShapes(e)});let n=Ab(()=>{let e=this.sourceBitmap(),t=this.settings(),l=this.imageToken();this.customVectors();return e?{bmp:e,s:t,token:l}:null});T(n).pipe(fu(150),U(this.destroyRef)).subscribe(e=>{e&&(this.nextRenderData=e,this.triggerRenderQueue())})}async bootstrap(){let[n,e]=await Promise.all([this.store.listShapes(),this.store.listPresets()]);if(e.length===0){for(let l of be)await this.store.savePreset(l);e=be}this.shapes.set(n),this.presets.set(e),this.rebuildCustomVectors(n);let t=e.find(l=>l.name===`Default`);t&&this.applyPreset(t)}rebuildCustomVectors(n){let e=n.map(t=>({id:t.id,svgInner:ve(t.svgText),viewBox:t.viewBox,monochrome:t.monochrome,usesCurrentColor:t.usesCurrentColor}));this.customVectors.set(e)}applyPreset(n){this.selectedPreset.set(n),n&&this.settings.update(e=>s(r({},n.settings),{width:e.width,height:e.height,centerX:e.centerX,centerY:e.centerY}))}async saveCurrentAsPreset(){let n=this.newPresetName().trim();if(!n)return;let e={id:nn(),name:n,createdAt:Date.now(),settings:this.settings()};await this.store.savePreset(e),this.presets.update(t=>[e,...t]),this.newPresetName.set(``),this.isSavingPreset.set(!1)}async deletePreset(n){await this.store.deletePreset(n),this.presets.update(e=>e.filter(t=>t.id!==n))}async onImageUpload(n){if(!n.file)return;this.sourceImageUrl()&&URL.revokeObjectURL(this.sourceImageUrl()),this.sourceImageUrl.set(URL.createObjectURL(n.file));let e=en(n.file)?(await tn(n.file)).bitmap:await createImageBitmap(n.file);this.sourceBitmap.set(e),this.imageToken.set(`${n.file.name}-${n.file.size}-${n.file.lastModified}`),this.settings.update(t=>s(r({},t),{width:e.width,height:e.height,centerX:Math.round(e.width/2),centerY:Math.round(e.height/2)}))}async onPickSvgShape(n){if(!n.file)return;let t=Kt(await n.file.text()),l={id:nn(),name:n.file.name.replace(`.svg`,``),createdAt:Date.now(),svgText:t.svgText,viewBox:t.viewBox,monochrome:t.monochrome,usesCurrentColor:t.monochrome};await this.store.saveShape(l);let r$1=[l,...this.shapes()];this.shapes.set(r$1),this.rebuildCustomVectors(r$1),this.settings.update(c=>s(r({},c),{shapeId:`custom:${l.id}`}))}async deleteShape(n){await this.store.deleteShape(n);let e=this.shapes().filter(t=>t.id!==n);this.shapes.set(e),this.rebuildCustomVectors(e),this.settings().shapeId===`custom:${n}`&&this.settings.update(t=>s(r({},t),{shapeId:`builtin:1`}))}safeCustomPreview(n){return this.sanitizer.bypassSecurityTrustHtml(Jt(n,56))}updateConfig(n,e){this.settings.update(t=>s(r({},t),{[n]:e}))}toggleRandomRotation(n){this.settings.update(e=>s(r({},e),{rotrnd:n,rotalt:n?!1:e.rotalt}))}toggleAlternatingRotation(n){this.settings.update(e=>s(r({},e),{rotalt:n,rotrnd:n?!1:e.rotrnd}))}async renderSvgPreview(n,e,t){try{await this.engine.initImage(n,e.width,e.height,t);let l=await this.engine.renderSvg(e);this.rawSvg.set(l);let r=new Blob([l],{type:`image/svg+xml;charset=utf-8`}),c=URL.createObjectURL(r);this.currentObjectUrl&&URL.revokeObjectURL(this.currentObjectUrl),this.currentObjectUrl=c,this.safeRenderedSvg.set(this.sanitizer.bypassSecurityTrustUrl(c)),requestAnimationFrame(()=>this.updateTransform())}catch{this.safeRenderedSvg.set(null)}}async exportSvg(){let n=this.sourceBitmap();if(!n)return;let e=this.settings(),t=this.imageToken();await this.engine.initImage(n,e.width,e.height,t);let l=await this.engine.renderSvg(e),r=new Blob([l],{type:`image/svg+xml;charset=utf-8`});c(r,this.makeFileName(`svg`))}makeFileName(n){return`halftone-${new Date().toISOString().slice(0,19).replace(/[:T]/g,`-`)}.${n}`}getPresetIcon(n){let e=n.settings,t=e.bgEnabled?e.bgColor:`transparent`,l=e.useImgColor||e.grad===5||e.grad===6||e.grad===10,r=l?`
      <defs>
        <linearGradient id="g-${n.id}" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="5%" stop-color="#0c0738" />
          <stop offset="95%" stop-color="#bef8d8" />
        </linearGradient>
      </defs>
    `:``,c=l?`url(#g-${n.id})`:e.fgColor,d=``,v=`fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"`,_=`fill="${c}"`,L=e.shapeId===`builtin:4`||e.shapeId===`builtin:10`||e.shapeId===`builtin:12`,T=e.filled&&!L?_:v;switch(e.shapeId){case`builtin:0`:d=`<rect x="16" y="16" width="32" height="32" ${T}/>`;break;case`builtin:1`:d=`<circle cx="32" cy="32" r="16" ${T}/>`;break;case`builtin:2`:d=`<path d="M32 12L52 32 32 52 12 32z" ${T}/>`;break;case`builtin:3`:d=`<path d="M18 16l14-8 14 8 6 16-6 16-14 8-14-8-6-16z" ${T}/>`;break;case`builtin:4`:d=`<path d="M12 32h40" ${v}/>`;break;case`builtin:5`:d=`<path d="M32 10l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" ${T}/>`;break;case`builtin:6`:d=`<path d="M32 10l6 14 14 2-10 10 2 15-12-7-12 7 2-15-10-10 14-2z" ${T}/>`;break;case`builtin:7`:d=`<path d="M32 10l4 10 11 1-6 9 3 11-12-5-12 5 3-11-6-9 11-1z" ${T}/>`;break;case`builtin:8`:d=`<path d="M26 14h12v12h12v12H38v12H26V38H14V26h12z" ${T}/>`;break;case`builtin:9`:d=`<path d="M32 14l20 34H12z" ${T}/>`;break;case`builtin:10`:d=`<path d="M22 32h20" ${v}/>`;break;case`builtin:11`:d=`<text x="32" y="44" text-anchor="middle" font-size="38" font-weight="900" font-family="Courier New, monospace" ${T}>${e.customText||`A`}</text>`;break;case`builtin:12`:d=`<path d="M20 44V20h24" ${v}/>`;break;default:d=`<text x="32" y="44" text-anchor="middle" font-size="30" font-family="sans-serif" fill="${c}">\u2605</text>`}let se=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24" style="background-color: ${t}; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
      ${r}
      ${d}
    </svg>`;return this.sanitizer.bypassSecurityTrustHtml(se)}async triggerRenderQueue(){if(!this.nextRenderData)return;if(this.engine.busy()){requestAnimationFrame(()=>{this.triggerRenderQueue()});return}let{bmp:n,s:e,token:t}=this.nextRenderData;this.nextRenderData=null,this.renderSvgPreview(n,e,t)}zoomIn(){this.applyZoom(Math.min(5,this.zoomScale()+.1))}zoomOut(){this.applyZoom(Math.max(.1,this.zoomScale()-.1))}setZoom(n){this.applyZoom(n)}fitToScreen(){this.panX=0,this.panY=0,this.applyZoom(1)}resetEditor(){this.sourceImageUrl()&&(URL.revokeObjectURL(this.sourceImageUrl()),this.sourceImageUrl.set(null)),this.currentObjectUrl&&(URL.revokeObjectURL(this.currentObjectUrl),this.currentObjectUrl=null),this.sourceBitmap()?.close(),this.sourceBitmap.set(null),this.safeRenderedSvg.set(null),this.rawSvg.set(``),this.nextRenderData=null,this.settings.set(r({},N.reset.settings)),this.selectedPreset.set(null),this.newPresetName.set(``),this.activeRailTab.set(N.reset.activeRailTab),this.activeView.set(N.reset.activeView),this.imageToken.set(N.reset.imageToken),this.fileUpload()?.clearFile(),this.fitToScreen()}applyZoom(n){this.zoomScale.set(n),this.updateTransform()}updateTransform(){let n=this.svgWrapper();n?.nativeElement&&(n.nativeElement.style.transform=`translate(${this.panX}px, ${this.panY}px) scale(${this.zoomScale()})`)}onPanStart(n){if(n.target.closest(`button`))return;this.isDragging=!0;let e=n instanceof MouseEvent?n.clientX:n.touches[0].clientX,t=n instanceof MouseEvent?n.clientY:n.touches[0].clientY;this.dragStart={x:e,y:t},this.lastPan={x:this.panX,y:this.panY}}onPanMove(n){if(!this.isDragging)return;n.cancelable&&n.preventDefault();let e=n instanceof MouseEvent?n.clientX:n.touches[0].clientX,t=n instanceof MouseEvent?n.clientY:n.touches[0].clientY,l=e-this.dragStart.x,r=t-this.dragStart.y;this.panX=this.lastPan.x+l,this.panY=this.lastPan.y+r,this.updateTransform()}onPanEnd(){this.isDragging=!1}static ɵfac=function(e){return new(e||a)};static ɵcmp=PD({type:a,selectors:[[`app-halftone-editor`]],viewQuery:function(e,t){e&1&&Yh(t.svgWrapper,bn,5)(t.fileUpload,_n,5),e&2&&Rw(2)},hostBindings:function(e,t){e&1&&Wh(`mousemove`,function(r){return t.onPanMove(r)},EE)(`touchmove`,function(r){return t.onPanMove(r)},EE)(`mouseup`,function(){return t.onPanEnd()},EE)(`touchend`,function(){return t.onPanEnd()},EE)},decls:214,vars:265,consts:[[`fileUpload`,``],[`svgWrapper`,``],[1,`halftone-shell-wrapper`],[`icon`,`auto_fix_high`,`masterWidth`,`390px`,`density`,`compact`,`canvasPadding`,`none`,3,`activeTabChange`,`masterCollapsedChange`,`masterTitle`,`activeTab`,`masterCollapsed`],[`shell-topbar-info`,``,1,`halftone-info-list`],[1,`info-row`],[`shell-rail`,``],[`tabId`,`source`,`icon`,`image`,3,`label`],[`tabId`,`pattern`,`icon`,`grid_4x4`,3,`label`],[`tabId`,`shape`,`icon`,`category`,3,`label`],[`tabId`,`dots`,`icon`,`blur_on`,3,`label`],[`tabId`,`style`,`icon`,`palette`,3,`label`],[`shell-master`,``],[`tabId`,`source`],[1,`halftone-settings-pane`],[1,`section-block`],[1,`section-title`],[1,`preset-inline-row`],[`appearance`,`outline`,1,`preset-dropdown`,`form-field-compact`],[`panelClass`,`preset-dropdown-panel`,3,`selectionChange`,`value`],[1,`preset-trigger-content`],[3,`value`],[1,`preset-option`,3,`value`],[`appearance`,`outline`,1,`preset-name-input`,`form-field-compact`],[`matInput`,``,3,`input`,`value`,`placeholder`],[`variant`,`primary`,`icon`,`save`,3,`clicked`,`disabled`,`mobileIconOnly`],[3,`fileSelected`,`config`],[`tabId`,`pattern`],[1,`palette-grid`,`pattern-grid`],[`type`,`button`,1,`palette-tile`,`glass`,3,`active`,`matTooltip`],[1,`controls-grid`],[3,`input`,`value`,`min`,`max`,`step`,`label`],[3,`value`,`min`,`max`,`step`,`label`],[`tabId`,`shape`],[1,`palette-grid`,`shape-grid`],[`appearance`,`outline`],[`tabId`,`dots`],[`appearance`,`outline`,1,`form-field-compact`],[3,`selectionChange`,`value`],[3,`change`,`checked`],[`tabId`,`style`],[1,`checkbox-group`],[1,`form-field-compact`,`color-picker-field`],[3,`colorChange`,`ngModel`,`config`,`disabled`],[`shell-canvas-header`,``,1,`halftone-canvas-header`],[1,`canvas-tabs`],[`icon`,`image`,3,`clicked`,`label`,`mobileIconOnly`,`active`],[`icon`,`visibility`,3,`clicked`,`label`,`mobileIconOnly`,`active`],[`icon`,`view_column`,3,`clicked`,`label`,`mobileIconOnly`,`active`],[1,`zoom-controls`],[`mat-icon-button`,``,3,`click`,`disabled`,`matTooltip`],[3,`input`,`value`,`min`,`max`,`step`],[`mat-icon-button`,``,3,`click`,`matTooltip`],[1,`canvas-status`],[`shell-canvas-content`,``,1,`halftone-canvas-content`],[1,`svg-render-container`],[`shell-canvas-footer`,``,1,`halftone-canvas-footer`],[`variant`,`secondary`,`icon`,`refresh`,3,`clicked`,`mobileIconOnly`,`ariaLabel`,`tooltip`],[`variant`,`primary`,`icon`,`download`,3,`mobileIconOnly`,`disabled`,`ariaLabel`,`tooltip`],[1,`preset-icon`,3,`innerHTML`],[1,`preset-option-content`],[1,`preset-label-group`],[`mat-icon-button`,``,1,`preset-delete-btn`,3,`click`],[`type`,`button`,1,`palette-tile`,`glass`,3,`click`,`matTooltip`],[3,`svgIcon`],[1,`shape-preview`,3,`innerHTML`],[1,`subsection-title`],[1,`custom-tile-wrapper`],[`mat-icon-button`,``,`color`,`warn`,1,`delete-shape-btn`,3,`click`],[`matInput`,``,`maxlength`,`3`,3,`input`,`value`],[1,`empty-state`],[1,`svg-render-container`,3,`mousedown`,`touchstart`],[`draggable`,`false`,1,`source-preview`,3,`src`,`alt`],[`alt`,`Halftone Preview`,`draggable`,`false`,1,`svg-wrapper`,3,`src`],[1,`glass-preloader`],[1,`error-snackbar`,`glass`],[1,`halftone-split-view`],[1,`split-preview`],[1,`split-label`],[3,`busy`,`value`,`label`,`detail`],[`variant`,`primary`,`icon`,`download`,3,`clicked`,`mobileIconOnly`,`disabled`,`ariaLabel`,`tooltip`]],template:function(e,t){if(e&1){let l=yw();Vi(0,`div`,2)(1,`app-glass-teams-shell`,3),Ib(2,`translate`),fg(`activeTabChange`,function(c){return vd(l),sb(t.activeRailTab,c)||(t.activeRailTab=c),Ed(c)})(`masterCollapsedChange`,function(c){return vd(l),sb(t.masterCollapsed,c)||(t.masterCollapsed=c),Ed(c)}),Vi(3,`div`,4)(4,`div`,5)(5,`mat-icon`),tb(6,`memory`),bl(),Vi(7,`span`),tb(8),Ib(9,`translate`),Ib(10,`translate`),bl()(),iw(11,Sn,10,3),bl(),Vi(12,`div`,6),jh(13,`app-glass-rail-item`,7),Ib(14,`translate`),jh(15,`app-glass-rail-item`,8),Ib(16,`translate`),jh(17,`app-glass-rail-item`,9),Ib(18,`translate`),jh(19,`app-glass-rail-item`,10),Ib(20,`translate`),jh(21,`app-glass-rail-item`,11),Ib(22,`translate`),bl(),Vi(23,`div`,12)(24,`app-glass-master-pane`,13)(25,`div`,14)(26,`div`,15)(27,`h3`,16),tb(28),Ib(29,`translate`),bl(),Vi(30,`div`,17)(31,`mat-form-field`,18)(32,`mat-label`),tb(33),Ib(34,`translate`),bl(),Vi(35,`mat-select`,19),Wh(`selectionChange`,function(c){return t.applyPreset(c.value)}),Vi(36,`mat-select-trigger`),iw(37,Cn,4,2,`div`,20),bl(),Vi(38,`mat-option`,21),tb(39),Ib(40,`translate`),bl(),uw(41,kn,9,3,`mat-option`,22,oe),bl()(),Vi(43,`mat-form-field`,23)(44,`mat-label`),tb(45),Ib(46,`translate`),bl(),Vi(47,`input`,24),Ib(48,`translate`),Wh(`input`,function(c){return t.newPresetName.set(c.target.value)}),bl()(),Vi(49,`app-button`,25),Wh(`clicked`,function(){return t.saveCurrentAsPreset()}),tb(50),Ib(51,`translate`),bl()()(),Vi(52,`div`,15)(53,`h3`,16),tb(54),Ib(55,`translate`),bl(),Vi(56,`app-file-upload`,26,0),Wh(`fileSelected`,function(c){return t.onImageUpload(c)}),bl()()()(),Vi(58,`app-glass-master-pane`,27)(59,`div`,14)(60,`div`,15)(61,`h3`,16),tb(62),Ib(63,`translate`),bl(),Vi(64,`div`,28),uw(65,Mn,2,4,`button`,29,oe),bl(),Vi(67,`div`,30)(68,`app-slider`,31),Ib(69,`translate`),Wh(`input`,function(c){return t.updateConfig(`vnum`,c)}),bl(),Vi(70,`app-slider`,31),Ib(71,`translate`),Wh(`input`,function(c){return t.updateConfig(`hdist`,c)}),bl(),Vi(72,`app-slider`,31),Ib(73,`translate`),Wh(`input`,function(c){return t.updateConfig(`grot`,c)}),bl(),iw(74,Nn,4,14)(75,In,4,14),iw(76,Pn,2,7,`app-slider`,32),bl()()()(),Vi(77,`app-glass-master-pane`,33)(78,`div`,14)(79,`div`,15)(80,`h3`,16),tb(81),Ib(82,`translate`),bl(),Vi(83,`div`,34),uw(84,En,2,4,`button`,29,oe),bl(),iw(86,On,6,3),Vi(87,`div`,30),iw(88,zn,5,4,`mat-form-field`,35),Vi(89,`app-file-upload`,26),Wh(`fileSelected`,function(c){return t.onPickSvgShape(c)}),bl()()()()(),Vi(90,`app-glass-master-pane`,36)(91,`div`,14)(92,`div`,15)(93,`h3`,16),tb(94),Ib(95,`translate`),bl(),Vi(96,`div`,30)(97,`mat-form-field`,37)(98,`mat-label`),tb(99),Ib(100,`translate`),bl(),Vi(101,`mat-select`,38),Wh(`selectionChange`,function(c){return t.updateConfig(`grad`,c.value)}),Vi(102,`mat-option`,21),tb(103),Ib(104,`translate`),bl(),Vi(105,`mat-option`,21),tb(106),Ib(107,`translate`),bl(),Vi(108,`mat-option`,21),tb(109),Ib(110,`translate`),bl(),Vi(111,`mat-option`,21),tb(112),Ib(113,`translate`),bl(),Vi(114,`mat-option`,21),tb(115),Ib(116,`translate`),bl(),Vi(117,`mat-option`,21),tb(118),Ib(119,`translate`),bl(),Vi(120,`mat-option`,21),tb(121),Ib(122,`translate`),bl(),Vi(123,`mat-option`,21),tb(124),Ib(125,`translate`),bl(),Vi(126,`mat-option`,21),tb(127),Ib(128,`translate`),bl(),Vi(129,`mat-option`,21),tb(130),Ib(131,`translate`),bl(),Vi(132,`mat-option`,21),tb(133),Ib(134,`translate`),bl()()(),Vi(135,`mat-checkbox`,39),Wh(`change`,function(c){return t.toggleRandomRotation(c.checked)}),tb(136),Ib(137,`translate`),bl(),Vi(138,`mat-checkbox`,39),Wh(`change`,function(c){return t.toggleAlternatingRotation(c.checked)}),tb(139),Ib(140,`translate`),bl(),Vi(141,`app-slider`,31),Ib(142,`translate`),Wh(`input`,function(c){return t.updateConfig(`contrast`,c)}),bl(),Vi(143,`app-slider`,31),Ib(144,`translate`),Wh(`input`,function(c){return t.updateConfig(`sizeMax`,c)}),bl(),Vi(145,`app-slider`,31),Ib(146,`translate`),Wh(`input`,function(c){return t.updateConfig(`sizeMin`,c)}),bl(),Vi(147,`app-slider`,31),Ib(148,`translate`),Wh(`input`,function(c){return t.updateConfig(`rot`,c)}),bl()()()()(),Vi(149,`app-glass-master-pane`,40)(150,`div`,14)(151,`div`,15)(152,`h3`,16),tb(153),Ib(154,`translate`),bl(),Vi(155,`div`,41)(156,`mat-checkbox`,39),Wh(`change`,function(c){return t.updateConfig(`useImgColor`,c.checked)}),tb(157),Ib(158,`translate`),bl(),Vi(159,`mat-checkbox`,39),Wh(`change`,function(c){return t.updateConfig(`bgEnabled`,c.checked)}),tb(160),Ib(161,`translate`),bl(),Vi(162,`mat-checkbox`,39),Wh(`change`,function(c){return t.updateConfig(`filled`,c.checked)}),tb(163),Ib(164,`translate`),bl(),Vi(165,`div`,42)(166,`label`),tb(167),Ib(168,`translate`),bl(),Vi(169,`app-color-picker`,43),Ib(170,`translate`),qI(),Wh(`colorChange`,function(c){return t.updateConfig(`fgColor`,c)}),bl()(),Vi(171,`div`,42)(172,`label`),tb(173),Ib(174,`translate`),bl(),Vi(175,`app-color-picker`,43),Ib(176,`translate`),qI(),Wh(`colorChange`,function(c){return t.updateConfig(`bgColor`,c)}),bl()(),iw(177,Ln,2,7,`app-slider`,32),bl()()()()(),Vi(178,`div`,44)(179,`div`,45)(180,`app-glass-nav-tab`,46),Ib(181,`translate`),Wh(`clicked`,function(){return t.activeView.set(`original`)}),bl(),Vi(182,`app-glass-nav-tab`,47),Ib(183,`translate`),Wh(`clicked`,function(){return t.activeView.set(`halftone`)}),bl(),Vi(184,`app-glass-nav-tab`,48),Ib(185,`translate`),Wh(`clicked`,function(){return t.activeView.set(`split`)}),bl()(),Vi(186,`div`,49)(187,`button`,50),Ib(188,`translate`),Ib(189,`translate`),Wh(`click`,function(){return t.zoomOut()}),Vi(190,`mat-icon`),tb(191,`zoom_out`),bl()(),Vi(192,`app-slider`,51),Wh(`input`,function(c){return t.setZoom(c)}),bl(),Vi(193,`button`,50),Ib(194,`translate`),Ib(195,`translate`),Wh(`click`,function(){return t.zoomIn()}),Vi(196,`mat-icon`),tb(197,`zoom_in`),bl()(),Vi(198,`button`,52),Ib(199,`translate`),Ib(200,`translate`),Wh(`click`,function(){return t.fitToScreen()}),Vi(201,`mat-icon`),tb(202,`fit_screen`),bl()(),iw(203,Bn,3,3,`span`,53),bl()(),Vi(204,`div`,54),iw(205,Hn,7,3,`div`,55)(206,Vn,19,24),bl(),Vi(207,`div`,56)(208,`app-button`,57),Ib(209,`translate`),Ib(210,`translate`),Wh(`clicked`,function(){return t.resetEditor()}),tb(211),Ib(212,`translate`),bl(),iw(213,$n,5,11,`app-button`,58),bl()()()}e&2&&(rI(),Fh(`masterTitle`,wb(2,145,`projects.halftone.halftone-settings`)),dg(`activeTab`,t.activeRailTab)(`masterCollapsed`,t.masterCollapsed),rI(7),ag(t.busy()?wb(9,147,`projects.halftone.generating`):wb(10,149,`projects.halftone.ready`)),rI(3),aw(t.hasImage()?11:-1),rI(2),Fh(`label`,wb(14,151,`projects.halftone.source-and-presets`)),rI(2),Fh(`label`,wb(16,153,`projects.halftone.grid-pattern`)),rI(2),Fh(`label`,wb(18,155,`projects.halftone.shape-palette`)),rI(2),Fh(`label`,wb(20,157,`projects.halftone.dots-size`)),rI(2),Fh(`label`,wb(22,159,`projects.halftone.colors-style`)),rI(7),ag(wb(29,161,`projects.halftone.presets`)),rI(5),ag(wb(34,163,`projects.halftone.load-preset`)),rI(2),Fh(`value`,t.selectedPreset()),rI(2),aw(t.selectedPreset()?37:-1),rI(),Fh(`value`,null),rI(),ag(wb(40,165,`projects.halftone.select-a-preset`)),rI(2),dw(t.presets()),rI(4),ag(wb(46,167,`projects.halftone.new-preset-name`)),rI(2),Fh(`value`,t.newPresetName())(`placeholder`,wb(48,169,`projects.halftone.e-g-cool-pattern`)),rI(2),Fh(`disabled`,!t.newPresetName().trim())(`mobileIconOnly`,!0),rI(),ag(wb(51,171,`projects.halftone.save`)),rI(4),ag(wb(55,173,`projects.halftone.source-image`)),rI(2),Fh(`config`,hb(263,yn)),rI(6),ag(wb(63,175,`projects.halftone.grid-pattern`)),rI(3),dw(t.patternDefs),rI(3),Fh(`value`,t.settings().vnum)(`min`,1)(`max`,300)(`step`,1)(`label`,wb(69,177,`projects.halftone.vertical-elements`)),rI(2),Fh(`value`,t.settings().hdist)(`min`,50)(`max`,500)(`step`,1)(`label`,wb(71,179,`projects.halftone.horizontal-spread`)),rI(2),Fh(`value`,t.settings().grot)(`min`,-180)(`max`,180)(`step`,1)(`label`,wb(73,181,`projects.halftone.grid-rotation`)),rI(2),aw(t.showRadialCenter()?74:75),rI(2),aw(t.showFreq()?76:-1),rI(5),ag(wb(82,183,`projects.halftone.shape-palette`)),rI(3),dw(t.builtinShapes),rI(2),aw(t.shapes().length>0?86:-1),rI(2),aw(t.showCustomText()?88:-1),rI(),Fh(`config`,hb(264,wn)),rI(5),ag(wb(95,185,`projects.halftone.dots-size`)),rI(5),ag(wb(100,187,`projects.halftone.size-by-gradient`)),rI(2),Fh(`value`,t.settings().grad),rI(),Fh(`value`,0),rI(),ag(wb(104,189,`projects.halftone.none`)),rI(2),Fh(`value`,5),rI(),ag(wb(107,191,`projects.halftone.image`)),rI(2),Fh(`value`,6),rI(),ag(wb(110,193,`projects.halftone.image-inverted`)),rI(2),Fh(`value`,10),rI(),ag(wb(113,195,`projects.halftone.image-alpha`)),rI(2),Fh(`value`,1),rI(),ag(wb(116,197,`projects.halftone.linear-r-to-l`)),rI(2),Fh(`value`,2),rI(),ag(wb(119,199,`projects.halftone.linear-l-to-r`)),rI(2),Fh(`value`,3),rI(),ag(wb(122,201,`projects.halftone.linear-t-to-b`)),rI(2),Fh(`value`,4),rI(),ag(wb(125,203,`projects.halftone.linear-b-to-t`)),rI(2),Fh(`value`,7),rI(),ag(wb(128,205,`projects.halftone.round`)),rI(2),Fh(`value`,8),rI(),ag(wb(131,207,`projects.halftone.bilinear-h`)),rI(2),Fh(`value`,9),rI(),ag(wb(134,209,`projects.halftone.bilinear-v`)),rI(2),Fh(`checked`,t.settings().rotrnd),rI(),ag(wb(137,211,`projects.halftone.random-rotation`)),rI(2),Fh(`checked`,t.settings().rotalt),rI(),ag(wb(140,213,`projects.halftone.alternating-rotation`)),rI(2),Fh(`value`,t.settings().contrast)(`min`,0)(`max`,100)(`step`,1)(`label`,wb(142,215,`projects.halftone.contrast`)),rI(2),Fh(`value`,t.settings().sizeMax)(`min`,0)(`max`,200)(`step`,1)(`label`,wb(144,217,`projects.halftone.maximum-size`)),rI(2),Fh(`value`,t.settings().sizeMin)(`min`,0)(`max`,100)(`step`,1)(`label`,wb(146,219,`projects.halftone.minimum-size`)),rI(2),Fh(`value`,t.settings().rot)(`min`,-180)(`max`,180)(`step`,1)(`label`,wb(148,221,`projects.halftone.element-rotation`)),rI(6),ag(wb(154,223,`projects.halftone.colors-style`)),rI(3),Fh(`checked`,t.settings().useImgColor),rI(),ag(wb(158,225,`projects.halftone.use-image-color`)),rI(2),Fh(`checked`,t.settings().bgEnabled),rI(),ag(wb(161,227,`projects.halftone.draw-background`)),rI(2),Fh(`checked`,t.settings().filled),rI(),ag(wb(164,229,`projects.halftone.filled-shape`)),rI(2),eg(`disabled-field`,t.settings().useImgColor),rI(2),ag(wb(168,231,`projects.halftone.foreground-color`)),rI(2),Fh(`ngModel`,t.settings().fgColor)(`config`,t.solidColorPickerConfig)(`disabled`,t.settings().useImgColor),Dl(`aria-label`,wb(170,233,`projects.halftone.foreground-color`)),zI(),rI(2),eg(`disabled-field`,!t.settings().bgEnabled),rI(2),ag(wb(174,235,`projects.halftone.background-color`)),rI(2),Fh(`ngModel`,t.settings().bgColor)(`config`,t.solidColorPickerConfig)(`disabled`,!t.settings().bgEnabled),Dl(`aria-label`,wb(176,237,`projects.halftone.background-color`)),zI(),rI(2),aw(t.settings().filled?-1:177),rI(3),Fh(`label`,wb(181,239,`projects.halftone.original-view`))(`mobileIconOnly`,!0)(`active`,t.activeView()===`original`),rI(2),Fh(`label`,wb(183,241,`projects.halftone.halftone-view`))(`mobileIconOnly`,!0)(`active`,t.activeView()===`halftone`),rI(2),Fh(`label`,wb(185,243,`projects.halftone.split-view`))(`mobileIconOnly`,!0)(`active`,t.activeView()===`split`),rI(3),Fh(`disabled`,t.zoomScale()<=.1)(`matTooltip`,wb(188,245,`projects.halftone.zoom-out`)),Dl(`aria-label`,wb(189,247,`projects.halftone.zoom-out`)),rI(5),Fh(`value`,t.zoomScale())(`min`,.1)(`max`,5)(`step`,.1),rI(),Fh(`disabled`,t.zoomScale()>=5)(`matTooltip`,wb(194,249,`projects.halftone.zoom-in`)),Dl(`aria-label`,wb(195,251,`projects.halftone.zoom-in`)),rI(5),Fh(`matTooltip`,wb(199,253,`projects.halftone.fit-to-screen`)),Dl(`aria-label`,wb(200,255,`projects.halftone.fit-to-screen`)),rI(5),aw(t.busy()?203:-1),rI(2),aw(t.hasImage()?206:205),rI(3),Fh(`mobileIconOnly`,!0)(`ariaLabel`,wb(209,257,`projects.halftone.reset`))(`tooltip`,wb(210,259,`projects.halftone.reset`)),rI(3),ag(wb(212,261,`projects.halftone.reset`)),rI(2),aw(t.hasImage()?213:-1))},dependencies:[Qr,Yr,Kn,Sr,Er,Pm,Pr,Ot,F,qt,g,Vn$1,ze,Ze,Ue,Pt,Nt,Lt,Z$1,ve$1,ce,Ni,ye,hi,Z,Xe,M$2,N$1,J,X,ee,T$1,Mi],styles:[`@property --%NS%glass-shine-angle{syntax: "<angle>"; inherits: true; initial-value: 125deg;}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_drift{0%{background-position:50% 50%}25%{background-position:60% 40%}50%{background-position:40% 60%}75%{background-position:55% 45%}to{background-position:50% 50%}}@keyframes _ngcontent-%COMP%_wave-motion-1{0%,to{transform:translateZ(0)}25%{transform:translate3d(30px,-20px,0)}50%{transform:translate3d(-20px,10px,0)}75%{transform:translate3d(10px,15px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-2{0%,to{transform:translateZ(0)}25%{transform:translate3d(-25px,15px,0)}50%{transform:translate3d(20px,-10px,0)}75%{transform:translate3d(-15px,-20px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-3{0%,to{transform:translateZ(0)}25%{transform:translate3d(20px,25px,0)}50%{transform:translate3d(-30px,-15px,0)}75%{transform:translate3d(25px,-10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-4{0%,to{transform:translateZ(0)}25%{transform:translate3d(-20px,-25px,0)}50%{transform:translate3d(25px,20px,0)}75%{transform:translate3d(-10px,10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-5{0%,to{transform:translateZ(0)}25%{transform:translate3d(15px,-30px,0)}50%{transform:translate3d(-25px,25px,0)}75%{transform:translate3d(20px,-15px,0)}}[_nghost-%COMP%]{display:block;width:100%;height:100%;min-height:0;overflow:hidden}.halftone-shell-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;min-height:0;overflow:hidden}.halftone-settings-pane[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%spacing-md);min-width:0;padding:.5rem}.section-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%spacing-sm);padding-bottom:var(--%NS%spacing-sm);border-bottom:1px solid var(--%NS%glass-border)}.section-block[_ngcontent-%COMP%]:last-child{border-bottom:0;padding-bottom:0}.section-block[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;line-height:1.6;letter-spacing:0;margin:0;color:var(--%NS%text-secondary);text-transform:uppercase;letter-spacing:.5px}.section-block[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;line-height:1.6;letter-spacing:0;margin:var(--%NS%spacing-sm) 0 var(--%NS%spacing-3xs);color:var(--%NS%text-disabled);text-transform:uppercase}.controls-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%spacing-md-minus);align-items:stretch}.controls-grid[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%]{width:100%}.preset-inline-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:var(--%NS%spacing-sm)}.preset-inline-row[_ngcontent-%COMP%]   .preset-dropdown[_ngcontent-%COMP%], .preset-inline-row[_ngcontent-%COMP%]   .preset-name-input[_ngcontent-%COMP%]{width:100%}.preset-inline-row[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{margin-left:auto}.palette-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(42px,1fr));width:100%;gap:var(--%NS%spacing-xs);margin-bottom:1rem}.palette-tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;aspect-ratio:1;padding:0;border:1px solid var(--%NS%glass-border);border-radius:var(--%NS%radius-sm);background:var(--%NS%glass-bg);color:var(--%NS%text-primary);cursor:pointer;transition:all .1s ease}.palette-tile[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:24px;height:24px;opacity:.8}.palette-tile[_ngcontent-%COMP%]   .shape-preview[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.palette-tile[_ngcontent-%COMP%]:hover{background:var(--%NS%glass-inset);border-color:var(--%NS%text-secondary)}.palette-tile.active[_ngcontent-%COMP%]{background:var(--%NS%glass-inset);border-color:var(--%NS%primary);box-shadow:0 0 6px rgba(var(--%NS%primary-rgb),.4)}.custom-tile-wrapper[_ngcontent-%COMP%]{position:relative;aspect-ratio:1}.custom-tile-wrapper[_ngcontent-%COMP%]   .palette-tile[_ngcontent-%COMP%]{width:100%;height:100%}.custom-tile-wrapper[_ngcontent-%COMP%]   .delete-shape-btn[_ngcontent-%COMP%]{position:absolute;top:-10px;right:-10px;transform:scale(.6);opacity:0;background:var(--%NS%bg-card);border:1px solid var(--%NS%glass-border);box-shadow:var(--%NS%glass-shadow)}.custom-tile-wrapper[_ngcontent-%COMP%]:hover   .delete-shape-btn[_ngcontent-%COMP%]{opacity:1}.preset-trigger-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%spacing-sm)}.preset-trigger-content[_ngcontent-%COMP%]   .preset-icon[_ngcontent-%COMP%]{display:flex;align-items:center;width:24px;height:24px}.preset-option-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.preset-option-content[_ngcontent-%COMP%]   .preset-label-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%spacing-sm);flex:1;min-width:0}.preset-option-content[_ngcontent-%COMP%]   .preset-label-group[_ngcontent-%COMP%]   .preset-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:28px;flex-shrink:0}.preset-option-content[_ngcontent-%COMP%]   .preset-delete-btn[_ngcontent-%COMP%]{transform:scale(.75);opacity:0;margin-right:calc(var(--%NS%spacing-sm) * -1);transition:opacity .2s ease}.preset-option-content[_ngcontent-%COMP%]   .preset-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%text-secondary)}.preset-option-content[_ngcontent-%COMP%]   .preset-delete-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%error)}.preset-option-content[_ngcontent-%COMP%]:hover   .preset-delete-btn[_ngcontent-%COMP%]{opacity:1}.checkbox-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%spacing-sm)}.color-picker-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%spacing-xs)}.color-picker-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;line-height:1.6;letter-spacing:0;color:var(--%NS%text-secondary)}.disabled-field[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.halftone-info-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%spacing-xs)}.halftone-info-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%spacing-xs);font-size:.75rem;font-weight:400;line-height:1.6;letter-spacing:0;color:var(--%NS%text-primary)}.halftone-info-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px;color:var(--%NS%primary)}.halftone-canvas-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;flex:1 1 auto;justify-content:space-between;gap:var(--%NS%spacing-sm);min-width:0;padding-left:.5rem;padding-right:.5rem}.halftone-canvas-header[_ngcontent-%COMP%]   .canvas-tabs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%spacing-xs);min-width:0;overflow-x:auto;scrollbar-width:none}.halftone-canvas-header[_ngcontent-%COMP%]   .canvas-tabs[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.halftone-canvas-header[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:var(--%NS%spacing-2xs);margin-left:auto;min-width:0;flex-shrink:0}.halftone-canvas-header[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   app-slider[_ngcontent-%COMP%]{width:110px}.halftone-canvas-header[_ngcontent-%COMP%]   .canvas-status[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;line-height:1.6;letter-spacing:0;color:var(--%NS%warning);white-space:nowrap}@media(max-width:640px){.halftone-canvas-header[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   app-slider[_ngcontent-%COMP%]{width:80px}.halftone-canvas-header[_ngcontent-%COMP%]   .canvas-status[_ngcontent-%COMP%]{display:none}}.halftone-canvas-content[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;min-height:0;box-sizing:border-box}.svg-render-container[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;align-items:center;justify-content:center;width:100%;min-height:0;overflow:hidden;background-color:var(--%NS%bg-overlay, var(--%NS%bg-secondary));cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.svg-render-container[_ngcontent-%COMP%]:active{cursor:grabbing}.svg-render-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:var(--%NS%spacing-sm);color:var(--%NS%text-secondary);opacity:.6;text-align:center}.svg-render-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:2.5rem;font-weight:400;line-height:1.6;letter-spacing:0}.svg-render-container.hidden[_ngcontent-%COMP%], .halftone-split-view.hidden[_ngcontent-%COMP%]{display:none!important}.source-preview[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;pointer-events:none;-webkit-user-select:none;user-select:none}.halftone-split-view[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--%NS%spacing-sm);width:100%;min-height:0}@media(max-width:768px){.halftone-split-view[_ngcontent-%COMP%]{grid-template-columns:1fr}}.split-preview[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-height:0;overflow:hidden;border:1px solid var(--%NS%glass-border);border-radius:var(--%NS%radius-sm);background:var(--%NS%bg-overlay, var(--%NS%bg-secondary))}.split-preview[_ngcontent-%COMP%]   .split-label[_ngcontent-%COMP%]{position:absolute;top:var(--%NS%spacing-sm);left:var(--%NS%spacing-sm);z-index:2;padding:2px 8px;border-radius:4px;background:#000000a6;color:#fff;font-size:.75rem;font-weight:500;line-height:1.6;letter-spacing:0}.svg-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;transform-origin:center center;filter:drop-shadow(var(--%NS%shadow-drop-md));pointer-events:none}.glass-preloader[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:var(--%NS%glass-bg);backdrop-filter:blur(8px) saturate(180%);-webkit-backdrop-filter:blur(8px) saturate(180%);box-shadow:0 10px 30px var(--%NS%glass-shadow);border:1px solid var(--%NS%glass-border)}.error-snackbar[_ngcontent-%COMP%]{position:absolute;bottom:var(--%NS%spacing-md);left:50%;z-index:20;display:flex;align-items:center;gap:var(--%NS%spacing-sm);padding:var(--%NS%spacing-sm) var(--%NS%spacing-md);transform:translate(-50%);border-radius:var(--%NS%radius-sm);background:var(--%NS%error);color:var(--%NS%text-inverse);font-size:.875rem;font-weight:700;line-height:1.6;letter-spacing:0;box-shadow:var(--%NS%glass-shadow)}.halftone-canvas-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:var(--%NS%spacing-sm);width:100%}`]})};export{an as HalftoneEditorComponent};
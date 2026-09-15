import {Y as Yr}from'./chunk-C-ECUvtN.js';import {F}from'./chunk-QatfvLUe.js';import {L as Lt$2,R as Rt,F as Ft$1}from'./chunk-D0P9qMW-.js';import {J as J$2}from'./chunk-CxiC3ezN.js';import {w}from'./chunk-Cp-bp8wQ.js';import {m as m0,T,cO as ut,cE as jn,y as yn,d as dw,an as s,ao as r,a_ as Ku,I as IE,x as xi,i as ci,u as ui,M as Mh,$ as $s,L as Lt$1,cI as Z,cJ as L$1,ap as jt,aq as Fe,C as on$1,D as xi$1,a$ as ci$1,bS as pa,R as mi,S as jD,V as Hc,Y as Wp,U as UE,ad as zE,bV as Uc,ac as Vp,bW as qc,a0 as Hv,a3 as jp,a1 as qE,af as QE,cP as QD,_ as th,cH as Xy,a4 as Kp,a5 as gD,bP as Ut$1,au as Pc,av as Io,ay as k0,bd as h0,z as z$1,f as F$1,k,aB as uD,aC as dD,a2 as ch,a9 as cD,a7 as eD,a8 as Su,aa as Nu,ai as ew,al as Wc,ak as rw,cQ as w$1,aO as Tr,cR as qt$1,b3 as I0,aM as S,aR as He,bq as he,aU as ue,aV as So,ca as Eh,cg as er,cS as Xf,cb as Bm,bl as D0,Z as mD,ab as jc,aD as gh,c8 as J$3,c9 as b,cw as vo,bm as w0,bs as Up,b1 as MD,aG as Zp,aH as pD,aI as hD,bT as Bu,am as Qy,cG as Mf}from'./main-WVLLTGHR.js';import {v as ve,n as ne$1}from'./chunk-D8SGHoUk.js';import {m}from'./chunk-BX8Cw4IR.js';import'./chunk-CxOciR0F.js';import {q as qe,O as Oe}from'./chunk-COyUr2aL.js';import {E}from'./chunk-5ncbKsPx.js';import {J as J$1,Z as Z$1}from'./chunk-BC7Pkx-q.js';import {R}from'./chunk-BWJ1OXK7.js';var At=["switch"],Vt=["*"];function Ft(a,n){a&1&&(mi(0,"span",11),Bu(),mi(1,"svg",13),Vp(2,"path",14),Hc(),mi(3,"svg",15),Vp(4,"path",16),Hc()());}var Bt=new S("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),J=class{source;checked;constructor(n,e){this.source=n,this.checked=e;}},Nt=(()=>{class a{_elementRef=T(Tr);_focusMonitor=T(qt$1);_changeDetectorRef=T(I0);defaults=T(Bt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new J(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=He();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new he;toggleChange=new he;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){T(ue).load(So);let e=T(new Eh("tabindex"),{optional:true}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=T(er).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??false,this.disabledInteractive=t.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new J(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=IE({type:a,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&Zp(At,5),t&2){let r;pD(r=hD())&&(i._switchElement=r.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(Up("id",i.id),jc("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),MD(i.color?"mat-"+i.color:""),th("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",D0],color:"color",disabled:[2,"disabled","disabled",D0],disableRipple:[2,"disableRipple","disableRipple",D0],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:w0(e)],checked:[2,"checked","checked",D0],hideIcon:[2,"hideIcon","hideIcon",D0],disabledInteractive:[2,"disabledInteractive","disabledInteractive",D0]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[gh([{provide:J$3,useExisting:vo(()=>a),multi:true},{provide:b,useExisting:a,multi:true}]),Bm],ngContentSelectors:Vt,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(uD(),mi(0,"div",1)(1,"button",2,0),Wp("click",function(){return i._handleClick()}),Vp(3,"div",3)(4,"span",4),mi(5,"span",5)(6,"span",6)(7,"span",7),Vp(8,"span",8),Hc(),mi(9,"span",9),Vp(10,"span",10),Hc(),UE(11,Ft,5,0,"span",11),Hc()()(),mi(12,"label",12),Wp("click",function(u){return u.stopPropagation()}),dD(13),Hc()()),t&2){let r=mD(2);jp("labelPosition",i.labelPosition),Hv(),th("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),jp("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),jc("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),Hv(9),jp("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),Hv(),qE(i.hideIcon?-1:11),Hv(),jp("for",i.buttonId),jc("id",i._labelId);}},dependencies:[Xf,m],styles:[`.mdc-switch {
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
  width: var(--mat-slide-toggle-track-width, 52px);
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
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
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
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
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
  width: calc(100% - var(--mat-slide-toggle-handle-width));
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
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
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
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
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
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
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
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
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
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
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
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
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
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
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
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return a})(),kt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Pc({type:a});static \u0275inj=Io({imports:[Nt,k0]})}return a})();function qt(){return crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`}var te=class a{progress01=yn(0);busy=yn(false);lastError=yn(null);worker=null;lastInitW=-1;lastInitH=-1;lastImageToken=null;constructor(){typeof Worker>"u"||(this.worker=new Worker(new URL("worker-E5OD5GHO.js",import.meta.url),{type:"module"}));}async initImage(n,e,t,i){if(!this.worker)throw new Error("Web Workers are not available.");let r=i??null;if(this.lastInitW===e&&this.lastInitH===t&&this.lastImageToken===r)return;let u=await this.bitmapToPixels(n,e,t),p={type:"initImage",width:e,height:t,pixels:u};this.worker.postMessage(p,[u.buffer]),this.lastInitW=e,this.lastInitH=t,this.lastImageToken=r;}setCustomShapes(n){if(!this.worker)return;let e={type:"setCustomShapes",shapes:n??[]};this.worker.postMessage(e);}renderSvg(n){if(!this.worker)return Promise.reject(new Error("Web Workers are not available."));this.busy.set(true),this.lastError.set(null),this.progress01.set(0);let e=qt(),t={type:"renderSvg",requestId:e,settings:n};return new Promise((i,r)=>{let u=h=>{let y=h.data;if(!(!y||y.requestId!==e)){if(y.type==="progress"){this.progress01.set(y.progress01??0);return}if(y.type==="result"){p(),this.busy.set(false),this.progress01.set(1),i(y.svg);return}if(y.type==="error"){p(),this.busy.set(false);let $=y.message??"Worker error";this.lastError.set($),r(new Error($));}}},p=()=>this.worker?.removeEventListener("message",u);this.worker.addEventListener("message",u),this.worker.postMessage(t);})}async render(n,e,t,i=[],r=[]){if(n==="png")throw new Error("PNG export is not implemented yet (SVG-first phase).");return await this.initImage(t,e.width,e.height),this.setCustomShapes(r),{type:"result",requestId:"compat",mode:"svg",svg:await this.renderSvg(e)}}terminate(){this.worker?.terminate(),this.worker=null,this.lastInitW=-1,this.lastInitH=-1,this.lastImageToken=null;}async bitmapToPixels(n,e,t){if(typeof OffscreenCanvas<"u"){let h=new OffscreenCanvas(e,t).getContext("2d",{willReadFrequently:true});if(!h)throw new Error("2D context not available (OffscreenCanvas).");h.clearRect(0,0,e,t),h.drawImage(n,0,0,e,t);let y=h.getImageData(0,0,e,t);return new Uint8ClampedArray(y.data)}let i=document.createElement("canvas");i.width=e,i.height=t;let r=i.getContext("2d",{willReadFrequently:true});if(!r)throw new Error("2D context not available (HTMLCanvasElement).");r.clearRect(0,0,e,t),r.drawImage(n,0,0,e,t);let u=r.getImageData(0,0,e,t);return new Uint8ClampedArray(u.data)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=Ut$1({token:a,factory:a.\u0275fac})};var Mt=w$1(Yr());var ne=class a{db=Mt.default.createInstance({name:"halftone-db",storeName:"kv"});key(n,e){return `${n}:${e}`}async listPresets(){let n=[];return await this.db.iterate((e,t)=>{t.startsWith("preset:")&&n.push(e);}),n.sort((e,t)=>t.createdAt-e.createdAt)}async savePreset(n){await this.db.setItem(this.key("preset",n.id),n);}async deletePreset(n){await this.db.removeItem(this.key("preset",n));}async listImages(){let n=[];return await this.db.iterate((e,t)=>{t.startsWith("img:")&&n.push(e);}),n.sort((e,t)=>t.createdAt-e.createdAt)}async saveImage(n){await this.db.setItem(this.key("img",n.id),n);}async deleteImage(n){await this.db.removeItem(this.key("img",n));}async listShapes(){let n=[];return await this.db.iterate((e,t)=>{t.startsWith("shape:")&&n.push(e);}),n.sort((e,t)=>t.createdAt-e.createdAt)}async saveShape(n){await this.db.setItem(this.key("shape",n.id),n);}async deleteShape(n){await this.db.removeItem(this.key("shape",n));}async clearAll(){await this.db.clear();}static \u0275fac=function(e){return new(e||a)};static \u0275prov=Ut$1({token:a,factory:a.\u0275fac})};var St=`
  <defs>
    <linearGradient id="halftone-preview-grad" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="5%" stop-color="#0c0738" />
      <stop offset="95%" stop-color="#bef8d8" />
    </linearGradient>
  </defs>
`,Pt=[{id:"builtin:0",label:"Square",preview:M(z('<rect x="16" y="16" width="32" height="32"/>'))},{id:"builtin:1",label:"Circle",preview:M(z('<circle cx="32" cy="32" r="16"/>'))},{id:"builtin:2",label:"Diamond",preview:M(z('<path d="M16 32 L48 48 L40 32 L48 16 Z"/>'))},{id:"builtin:3",label:"Hex",preview:M(z('<path d="M 16 32 L 24 45.85 L 40 45.85 L 48 32 L 40 18.15 L 24 18.15 Z"/>'))},{id:"builtin:4",label:"Line",preview:M(ce('<path d="M16 32h32"/>'))},{id:"builtin:5",label:"Star 4",preview:M(z('<path d="M32 16 L37.65 26.35 L48 32 L37.65 37.65 L32 48 L26.35 37.65 L16 32 L26.35 26.35 Z"/>'))},{id:"builtin:6",label:"Star 5",preview:M(z('<path d="M32 16 L36.7 25.53 L47.2 27.06 L39.61 34.47 L41.4 44.94 L32 40 L22.6 44.94 L24.39 34.47 L16.8 27.06 L27.3 25.53 Z"/>'))},{id:"builtin:7",label:"Star 6",preview:M(z('<path d="M32 16 L36 25.08 L45.85 24 L40 32 L45.85 40 L36 38.92 L32 48 L28 38.92 L18.15 40 L24 32 L18.15 24 L28 25.08 Z"/>'))},{id:"builtin:8",label:"Cross",preview:M(z('<path d="M26 14h12v12h12v12H38v12H26V38H14V26h12z"/>'))},{id:"builtin:9",label:"Triangle",preview:M(z('<path d="M 13.53 42.67 L 32 10.67 L 50.47 42.67 Z"/>'))},{id:"builtin:10",label:"Dash",preview:M(ce('<path d="M20 32h24"/>'))},{id:"builtin:11",label:"Text",preview:Ut("A")},{id:"builtin:12",label:"Corner",preview:M(ce('<path d="M16 48 L48 48 L48 16"/>'))}];function M(a){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.15));">
    ${St}
    ${a}
  </svg>`}function z(a){return `<g fill="url(#halftone-preview-grad)">${a}</g>`}function ce(a){return `<g fill="none" stroke="url(#halftone-preview-grad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">${a}</g>`}function Ut(a){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.15));">
    ${St}
    <text x="32" y="44" text-anchor="middle"
      font-size="38" font-weight="900" font-family="Courier New, monospace"
      fill="url(#halftone-preview-grad)">${a}</text>
  </svg>`}var L='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="overflow: visible;">',H="</svg>",D='<g fill="currentColor">',A='<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2, 2" opacity="0.7">',Et={0:`${L}
        ${A}
          <path d="M6 6 h20 M6 16 h20 M6 26 h20 M6 6 v20 M16 6 v20 M26 6 v20"/>
        </g>
        ${D}
          <circle cx="6" cy="6" r="2.5"/><circle cx="16" cy="6" r="2.5"/><circle cx="26" cy="6" r="2.5"/>
          <circle cx="6" cy="16" r="2.5"/><circle cx="16" cy="16" r="2.5"/><circle cx="26" cy="16" r="2.5"/>
          <circle cx="6" cy="26" r="2.5"/><circle cx="16" cy="26" r="2.5"/><circle cx="26" cy="26" r="2.5"/>
        </g>
      ${H}`,1:`${L}
        ${A}
          <path d="M6 6 L26 26 M6 26 L26 6"/>
        </g>
        ${D}
          <circle cx="6" cy="6" r="2.5"/><circle cx="26" cy="6" r="2.5"/>
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="6" cy="26" r="2.5"/><circle cx="26" cy="26" r="2.5"/>
        </g>
      ${H}`,2:`${L}
        ${A}
          <path d="M4 8 h24 M4 16 h24 M4 24 h24 M8 8 v16 M24 8 v16 M16 8 v16"/>
        </g>
        ${D}
          <circle cx="8" cy="8" r="2.5"/><circle cx="24" cy="8" r="2.5"/>
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="8" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/>
        </g>
      ${H}`,3:`${L}
        ${A}
          <path d="M16 16 L16 4 M16 16 L26.39 10 M16 16 L26.39 22 M16 16 L16 28 M16 16 L5.61 22 M16 16 L5.61 10"/>
          <path d="M16 4 L26.39 10 L26.39 22 L16 28 L5.61 22 L5.61 10 Z"/>
        </g>
        ${D}
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="16" cy="4" r="2.5"/><circle cx="26.39" cy="10" r="2.5"/>
          <circle cx="26.39" cy="22" r="2.5"/><circle cx="16" cy="28" r="2.5"/>
          <circle cx="5.61" cy="22" r="2.5"/><circle cx="5.61" cy="10" r="2.5"/>
        </g>
      ${H}`,4:`${L}
        ${D}
          <circle cx="8" cy="8" r="2"/><circle cx="24" cy="6" r="1.5"/><circle cx="14" cy="12" r="2.5"/>
          <circle cx="26" cy="16" r="2"/><circle cx="6" cy="20" r="1.5"/><circle cx="18" cy="22" r="2"/>
          <circle cx="10" cy="26" r="2"/><circle cx="22" cy="28" r="2.5"/>
        </g>
      ${H}`,5:`${L}
        ${A}
          <path d="M4 10 Q 10 4, 16 10 T 28 10"/>
          <path d="M4 16 Q 10 10, 16 16 T 28 16"/>
          <path d="M4 22 Q 10 16, 16 22 T 28 22"/>
        </g>
        ${D}
          <circle cx="4" cy="10" r="2"/><circle cx="10" cy="7" r="2"/><circle cx="16" cy="10" r="2"/><circle cx="22" cy="13" r="2"/><circle cx="28" cy="10" r="2"/>
          <circle cx="4" cy="16" r="2"/><circle cx="10" cy="13" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="22" cy="19" r="2"/><circle cx="28" cy="16" r="2"/>
          <circle cx="4" cy="22" r="2"/><circle cx="10" cy="19" r="2"/><circle cx="16" cy="22" r="2"/><circle cx="22" cy="25" r="2"/><circle cx="28" cy="22" r="2"/>
        </g>
      ${H}`,6:`${L}
        ${A}
          <circle cx="16" cy="16" r="10"/>
          <path d="M16 6 v20 M6 16 h20 M8.93 8.93 L23.07 23.07 M8.93 23.07 L23.07 8.93"/>
        </g>
        ${D}
          <circle cx="16" cy="16" r="2.5"/>
          <circle cx="16" cy="6" r="2"/><circle cx="26" cy="16" r="2"/>
          <circle cx="16" cy="26" r="2"/><circle cx="6" cy="16" r="2"/>
          <circle cx="23.07" cy="8.93" r="2"/><circle cx="23.07" cy="23.07" r="2"/>
          <circle cx="8.93" cy="23.07" r="2"/><circle cx="8.93" cy="8.93" r="2"/>
        </g>
      ${H}`,7:`${L}
        ${D}
          <circle cx="16" cy="6" r="2.5"/>
          <circle cx="8" cy="12" r="2.5"/><circle cx="24" cy="12" r="2.5"/>
          <circle cx="16" cy="18" r="2.5"/>
          <circle cx="8" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/>
        </g>
      ${H}`,8:`${L}
        ${A}
          <path d="M6 10 L 12 16 L 20 8 L 26 14"/>
          <path d="M6 16 L 12 22 L 20 14 L 26 20"/>
          <path d="M6 22 L 12 28 L 20 20 L 26 26"/>
        </g>
        ${D}
          <circle cx="6" cy="10" r="2"/><circle cx="12" cy="16" r="2"/><circle cx="20" cy="8" r="2"/><circle cx="26" cy="14" r="2"/>
          <circle cx="6" cy="16" r="2"/><circle cx="12" cy="22" r="2"/><circle cx="20" cy="14" r="2"/><circle cx="26" cy="20" r="2"/>
          <circle cx="6" cy="22" r="2"/><circle cx="12" cy="28" r="2"/><circle cx="20" cy="20" r="2"/><circle cx="26" cy="26" r="2"/>
        </g>
      ${H}`};function Tt(a){let e=new DOMParser().parseFromString(a,"image/svg+xml").querySelector("svg");if(!e)throw new Error("Invalid SVG: missing <svg> root");let t=Xt(e),i=Yt(e);return e.setAttribute("viewBox",`${t.minX} ${t.minY} ${t.width} ${t.height}`),e.removeAttribute("width"),e.removeAttribute("height"),i&&e.querySelectorAll("*").forEach(u=>{let p=u,h=p.getAttribute("fill");h&&h!=="none"&&h!=="transparent"&&p.setAttribute("fill","currentColor");let y=p.getAttribute("stroke");y&&y!=="none"&&y!=="transparent"&&p.setAttribute("stroke","currentColor");let $=p.getAttribute("style");$&&p.setAttribute("style",$.replace(/fill\s*:\s*[^;]+/gi,"fill:currentColor").replace(/stroke\s*:\s*[^;]+/gi,"stroke:currentColor"));}),{svgText:new XMLSerializer().serializeToString(e),viewBox:t,monochrome:i}}function zt(a,n){let e=n*.1,t=de(a);return `
<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${n}" viewBox="0 0 ${n} ${n}" aria-hidden="true">
  <g transform="translate(${e} ${e}) scale(${(n-2*e)/n})">
    ${t}
  </g>
</svg>`.trim()}function de(a){let n=a.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);return n?n[1]:a}function Xt(a){let n=a.getAttribute("viewBox");if(n){let i=n.split(/[ ,]+/).map(r=>Number(r));if(i.length>=4){let[r,u,p,h]=i;if(Number.isFinite(p)&&Number.isFinite(h)&&p>0&&h>0)return {minX:r,minY:u,width:p,height:h}}}let e=It(a.getAttribute("width"))??100,t=It(a.getAttribute("height"))??100;return {minX:0,minY:0,width:e,height:t}}function It(a){if(!a)return null;let n=parseFloat(a);return Number.isFinite(n)?n:null}function Yt(a){let n=new Set;return a.querySelectorAll("*").forEach(e=>{let t=e,i=(t.getAttribute("fill")||"").trim(),r=(t.getAttribute("stroke")||"").trim();ie(i)&&n.add(i),ie(r)&&n.add(r);let u=(t.getAttribute("style")||"").toLowerCase(),p=Ot(u,"fill"),h=Ot(u,"stroke");p&&ie(p)&&n.add(p),h&&ie(h)&&n.add(h);}),n.size<=1}function ie(a){return !(!a||a==="none"||a==="transparent"||a.startsWith("url("))}function Ot(a,n){let e=a.indexOf(`${n}:`);if(e===-1)return null;let t=a.slice(e+n.length+1).trim(),i=t.indexOf(";");return (i===-1?t:t.slice(0,i)).trim()||null}var Gt=[[["","header-actions",""]],"*",[["","footer",""]]],Wt=["[header-actions]","*","[footer]"];function Qt(a,n){a&1&&(mi(0,"mat-icon"),jD(1),Hc()),a&2&&(Hv(),ch(n));}function Kt(a,n){a&1&&(mi(0,"div",5),dD(1,2),Hc());}var ae=class a{title=h0("");icon=h0(void 0);noPadding=h0(false);showFooter=h0(false);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=IE({type:a,selectors:[["app-preview-card"]],inputs:{title:[1,"title"],icon:[1,"icon"],noPadding:[1,"noPadding"],showFooter:[1,"showFooter"]},ngContentSelectors:Wt,decls:11,vars:5,consts:[[1,"preview-card","glass-panel"],[1,"card-header-custom"],[1,"header-title"],[1,"card-title"],[1,"header-actions"],[1,"card-footer"]],template:function(e,t){if(e&1&&(uD(Gt),mi(0,"mat-card",0)(1,"div",1)(2,"div",2),UE(3,Qt,2,1,"mat-icon"),mi(4,"span",3),jD(5),Hc()(),mi(6,"div",4),dD(7),Hc()(),mi(8,"mat-card-content"),dD(9,1),Hc(),UE(10,Kt,2,0,"div",5),Hc()),e&2){let i;Hv(3),qE((i=t.icon())?3:-1,i),Hv(2),ch(t.title()),Hv(3),th("no-padding",t.noPadding()),Hv(2),qE(t.showFooter()?10:-1);}},dependencies:[z$1,F$1,k,ci,ui],styles:["@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_drift{0%{background-position:50% 50%}25%{background-position:60% 40%}50%{background-position:40% 60%}75%{background-position:55% 45%}to{background-position:50% 50%}}@keyframes _ngcontent-%COMP%_wave-motion-1{0%,to{transform:translateZ(0)}25%{transform:translate3d(30px,-20px,0)}50%{transform:translate3d(-20px,10px,0)}75%{transform:translate3d(10px,15px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-2{0%,to{transform:translateZ(0)}25%{transform:translate3d(-25px,15px,0)}50%{transform:translate3d(20px,-10px,0)}75%{transform:translate3d(-15px,-20px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-3{0%,to{transform:translateZ(0)}25%{transform:translate3d(20px,25px,0)}50%{transform:translate3d(-30px,-15px,0)}75%{transform:translate3d(25px,-10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-4{0%,to{transform:translateZ(0)}25%{transform:translate3d(-20px,-25px,0)}50%{transform:translate3d(25px,20px,0)}75%{transform:translate3d(-10px,10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-5{0%,to{transform:translateZ(0)}25%{transform:translate3d(15px,-30px,0)}50%{transform:translate3d(-25px,25px,0)}75%{transform:translate3d(20px,-15px,0)}}.preview-card[_ngcontent-%COMP%]{padding:0;overflow:hidden;display:flex;flex-direction:column}.preview-card[_ngcontent-%COMP%]   .card-header-custom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.25rem 1.5rem;border-bottom:1px solid var(--glass-border);background:var(--bg-overlay);flex-shrink:0}@media(max-width:768px){.preview-card[_ngcontent-%COMP%]   .card-header-custom[_ngcontent-%COMP%]{padding:1rem}}.preview-card[_ngcontent-%COMP%]   .card-header-custom[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.preview-card[_ngcontent-%COMP%]   .card-header-custom[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--layout-icon-lg);width:var(--layout-icon-lg);height:var(--layout-icon-lg);color:var(--primary)}.preview-card[_ngcontent-%COMP%]   .card-header-custom[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:500;line-height:1.6;letter-spacing:0;color:var(--text-primary)}.preview-card[_ngcontent-%COMP%]   .card-header-custom[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.preview-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1.5rem;flex:1}@media(max-width:768px){.preview-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1rem}}.preview-card[_ngcontent-%COMP%]   mat-card-content.no-padding[_ngcontent-%COMP%]{padding:0}.preview-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-top:1px solid var(--glass-border);background:var(--bg-overlay);flex-shrink:0}@media(max-width:768px){.preview-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{padding:1rem}}"]})};function f(a){return r({width:600,height:600,keepProportions:true,centerX:300,centerY:300,offsetX:0,offsetY:0,contrast:50,sizeMin:0,customText:"3",pat:0,vnum:100,hdist:100,grot:0,freq:50,grad:6,sizeMax:100,rot:0,rotrnd:false,rotalt:false,useImgColor:false,fgColor:"#000000",bgColor:"#ffffff",bgEnabled:true,filled:true,strokeWidth:1,shapeId:"builtin:1"},a)}var me=[{id:"preset-3643",name:"Line Pattern",createdAt:1462803009e3,settings:f({grad:5,bgColor:"#3f536c",fgColor:"#ffffff",vnum:75,sizeMax:90,grot:60,shapeId:"builtin:4",pat:0,freq:22})},{id:"preset-3641",name:"Jade Dot Pattern",createdAt:1462802791e3,settings:f({grad:5,bgColor:"#06664f",fgColor:"#20f3ad",vnum:100,sizeMax:120,grot:45,shapeId:"builtin:1",pat:0,freq:22})},{id:"preset-3640",name:"Cross Pattern",createdAt:1462802701e3,settings:f({grad:6,bgColor:"#FFFFFF",fgColor:"#1d188b",vnum:75,sizeMax:120,grot:-60,shapeId:"builtin:8",pat:2,freq:22})},{id:"preset-3639",name:"Wave Pattern",createdAt:1462802591e3,settings:f({grad:5,bgColor:"#52104f",fgColor:"#f6e8af",vnum:100,sizeMax:70,grot:0,shapeId:"builtin:4",pat:5,freq:22})},{id:"preset-3638",name:"Circular Pattern",createdAt:1462802485e3,settings:f({grad:6,bgColor:"#aff4f6",fgColor:"#7c4d38",vnum:100,sizeMax:100,grot:0,shapeId:"builtin:1",pat:6,freq:50})},{id:"preset-3637",name:"Hex Pattern",createdAt:1462802411e3,settings:f({grad:5,bgColor:"#3d2939",fgColor:"#95e88f",vnum:100,sizeMax:100,rot:30,grot:0,shapeId:"builtin:3",pat:3,freq:50})},{id:"preset-3636",name:"Triangle Pattern",createdAt:1462802339e3,settings:f({grad:5,bgColor:"#395c6b",fgColor:"#d4cb92",vnum:100,sizeMax:100,grot:0,shapeId:"builtin:9",pat:3,freq:50})},{id:"preset-3635",name:"Pointillism",createdAt:1462801963e3,settings:f({grad:5,bgColor:"#000000",fgColor:"#1579fa",vnum:150,sizeMax:100,grot:0,shapeId:"builtin:1",pat:4,freq:21})},{id:"preset-3604",name:"Fresh",createdAt:1462800185e3,settings:f({grad:5,bgColor:"#6baa75",fgColor:"#e0fb62",vnum:75,sizeMax:125,rot:180,grot:30,shapeId:"builtin:2",pat:3,freq:21})},{id:"preset-3603",name:"Pop Art",createdAt:1462799386e3,settings:f({grad:6,bgColor:"#fd9c89",fgColor:"#167e87",vnum:100,sizeMax:100,grot:-30,shapeId:"builtin:1",pat:5,freq:21})},{id:"preset-3602",name:"Subtle Comic Dot",createdAt:1462798977e3,settings:f({grad:6,bgColor:"#ffffff",fgColor:"#978b9e",vnum:150,sizeMax:95,rot:45,grot:45,shapeId:"builtin:1",pat:0,freq:50})},{id:"preset-3601",name:"Cross Stitch",createdAt:1462798832e3,settings:f({grad:0,bgColor:"#ffffff",useImgColor:true,vnum:75,sizeMax:55,rot:45,grot:0,shapeId:"builtin:8",pat:0,freq:50})},{id:"preset-3600",name:"Matrix",createdAt:1462798724e3,settings:f({grad:5,bgColor:"#000000",fgColor:"#05ff00",vnum:72,sizeMax:140,grot:0,shapeId:"builtin:11",customText:"3",pat:0,freq:50})},{id:"preset-3599",name:"Fuzz",createdAt:1462798548e3,settings:f({grad:5,bgColor:"#381705",useImgColor:true,vnum:100,sizeMax:105,rotrnd:true,rot:0,grot:0,shapeId:"builtin:10",pat:4,freq:50})},{id:"preset-3598",name:"Triangular",createdAt:1462798422e3,settings:f({grad:6,bgColor:"#ffffff",useImgColor:true,vnum:51,sizeMax:100,rotalt:true,rot:-180,grot:0,shapeId:"builtin:9",pat:7,freq:50})},{id:"preset-3597",name:"Hexagons",createdAt:1462798392e3,settings:f({grad:6,bgColor:"#ffffff",useImgColor:true,vnum:100,sizeMax:110,rot:30,grot:0,shapeId:"builtin:3",pat:3,freq:50,filled:false,strokeWidth:2})},{id:"preset-3594",name:"Mosaic",createdAt:1462798199e3,settings:f({grad:6,bgColor:"#ffffff",useImgColor:true,vnum:100,sizeMax:100,grot:45,shapeId:"builtin:0",pat:2,freq:50})},{id:"preset-3593",name:"Default",createdAt:1462797864e3,settings:f({grad:6,bgColor:"#ffffff",useImgColor:true,vnum:100,sizeMax:100,grot:0,shapeId:"builtin:1",pat:0,freq:14})},{id:"preset-28",name:"Doodles",createdAt:Date.now(),settings:f({grad:6,bgColor:"#ffffff",useImgColor:true,vnum:50,sizeMax:35,grot:0,shapeId:"builtin:4",pat:4,freq:50})}];var Jt=["svgWrapper"],en=()=>({accept:"image/*",buttonText:"Upload Image",buttonIcon:"image"}),tn=()=>({accept:".svg,image/svg+xml",buttonText:"Import SVG Shape",buttonIcon:"add_circle",showPreview:false,showFileDetails:false}),re=(a,n)=>n.id;function nn(a,n){if(a&1&&(mi(0,"div",9),Vp(1,"div",49),mi(2,"span"),jD(3),Hc()()),a&2){let e=cD();Hv(),jp("innerHTML",e.getPresetIcon(e.selectedPreset()),Qy),Hv(2),ch(e.selectedPreset().name);}}function an(a,n){if(a&1){let e=eD();mi(0,"mat-option",11)(1,"div",50)(2,"div",51),Vp(3,"div",49),mi(4,"span"),jD(5),Hc()(),mi(6,"button",52),Wp("click",function(i){let r=Su(e).$implicit,u=cD();return i.stopPropagation(),Nu(u.deletePreset(r.id))}),mi(7,"mat-icon"),jD(8,"close"),Hc()()()();}if(a&2){let e=n.$implicit,t=cD();jp("value",e),Hv(3),jp("innerHTML",t.getPresetIcon(e),Qy),Hv(2),ch(e.name);}}function rn(a,n){if(a&1){let e=eD();mi(0,"button",53),Wp("click",function(){let i=Su(e).$implicit,r=cD();return Nu(r.updateConfig("pat",i.id))}),Vp(1,"mat-icon",54),Hc();}if(a&2){let e=n.$implicit,t=cD();th("active",t.settings().pat===e.id),jp("matTooltip",e.label),Hv(),jp("svgIcon",e.icon);}}function on(a,n){if(a&1){let e=eD();mi(0,"div",19)(1,"app-slider",55),Wp("input",function(i){Su(e);let r=cD();return Nu(r.updateConfig("centerX",i))}),Hc()(),mi(2,"div",19)(3,"app-slider",56),Wp("input",function(i){Su(e);let r=cD();return Nu(r.updateConfig("centerY",i))}),Hc()();}if(a&2){let e=cD();Hv(),jp("value",e.settings().centerX)("min",0)("max",e.settings().width)("step",1),Hv(2),jp("value",e.settings().centerY)("min",0)("max",e.settings().height)("step",1);}}function sn(a,n){if(a&1){let e=eD();mi(0,"div",19)(1,"app-slider",57),Wp("input",function(i){Su(e);let r=cD();return Nu(r.updateConfig("offsetX",i))}),Hc()(),mi(2,"div",19)(3,"app-slider",58),Wp("input",function(i){Su(e);let r=cD();return Nu(r.updateConfig("offsetY",i))}),Hc()();}if(a&2){let e=cD();Hv(),jp("value",e.settings().offsetX)("min",0)("max",100)("step",1),Hv(2),jp("value",e.settings().offsetY)("min",0)("max",100)("step",1);}}function ln(a,n){if(a&1){let e=eD();mi(0,"div",19)(1,"app-slider",59),Wp("input",function(i){Su(e);let r=cD();return Nu(r.updateConfig("freq",i))}),Hc()();}if(a&2){let e=cD();Hv(),jp("value",e.settings().freq)("min",0)("max",100)("step",1);}}function cn(a,n){if(a&1){let e=eD();mi(0,"button",53),Wp("click",function(){let i=Su(e).$implicit,r=cD();return Nu(r.updateConfig("shapeId",i.id))}),Vp(1,"div",60),Hc();}if(a&2){let e=n.$implicit,t=cD();th("active",t.settings().shapeId===e.id),jp("matTooltip",e.label),Hv(),jp("innerHTML",e.safePreview,Qy);}}function dn(a,n){if(a&1){let e=eD();mi(0,"div",62)(1,"button",53),Wp("click",function(){let i=Su(e).$implicit,r=cD(2);return Nu(r.updateConfig("shapeId","custom:"+i.id))}),Vp(2,"div",60),Hc(),mi(3,"button",63),Wp("click",function(i){let r=Su(e).$implicit;return cD(2).deleteShape(r.id),Nu(i.stopPropagation())}),mi(4,"mat-icon"),jD(5,"close"),Hc()()();}if(a&2){let e=n.$implicit,t=cD(2);Hv(),th("active",t.settings().shapeId==="custom:"+e.id),jp("matTooltip",e.name),Hv(),jp("innerHTML",t.safeCustomPreview(e.svgText),Qy);}}function mn(a,n){if(a&1&&(mi(0,"h4",61),jD(1,"Custom Shapes"),Hc(),mi(2,"div",23),zE(3,dn,6,4,"div",62,re),Hc()),a&2){let e=cD();Hv(3),QE(e.shapes());}}function pn(a,n){if(a&1){let e=eD();mi(0,"mat-form-field",24)(1,"mat-label"),jD(2,"Custom Text Character"),Hc(),mi(3,"input",64),Wp("input",function(i){Su(e);let r=cD();return Nu(r.updateConfig("customText",i.target.value))}),Hc()();}if(a&2){let e=cD();Hv(3),jp("value",e.settings().customText);}}function gn(a,n){if(a&1){let e=eD();mi(0,"div",19)(1,"app-slider",65),Wp("input",function(i){Su(e);let r=cD();return Nu(r.updateConfig("strokeWidth",i))}),Hc()();}if(a&2){let e=cD();Hv(),jp("value",e.settings().strokeWidth)("min",1)("max",10)("step",1);}}function un(a,n){if(a&1){let e=eD();mi(0,"app-button",66),Wp("clicked",function(){Su(e);let i=cD();return Nu(i.exportSvg())}),jD(1," Export SVG "),Hc();}if(a&2){let e=cD();jp("disabled",e.busy());}}function hn(a,n){a&1&&(mi(0,"div",46)(1,"mat-icon"),jD(2,"image_search"),Hc(),mi(3,"p"),jD(4,"Upload an image to generate a vector halftone pattern."),Hc()());}function fn(a,n){if(a&1&&Vp(0,"img",67,0),a&2){let e=cD(2);jp("src",e.safeRenderedSvg(),Mf);}}function vn(a,n){if(a&1&&UE(0,fn,2,1,"img",67),a&2){let e=cD();qE(e.safeRenderedSvg()?0:-1);}}function bn(a,n){if(a&1&&(mi(0,"div",47)(1,"div",68),Vp(2,"mat-spinner",69),Hc(),mi(3,"div",70),jD(4),ew(5,"number"),Hc(),Vp(6,"mat-progress-bar",71),Hc()),a&2){let e=cD();Hv(4),Wc("Generating... ",rw(5,2,e.progress01()*100,"1.0-0"),"%"),Hv(2),jp("value",e.progress01()*100);}}function _n(a,n){if(a&1&&(mi(0,"div",48)(1,"mat-icon"),jD(2,"error"),Hc(),jD(3),Hc()),a&2){let e=cD();Hv(3),Wc(" ",e.lastError()," ");}}function Lt(){return crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`}var Ht=class a{svgWrapper=m0("svgWrapper");engine=T(te);store=T(ne);iconRegistry=T(ut);sanitizer=T(jn);shapes=yn([]);presets=yn([]);sourceBitmap=yn(null);imageToken=yn("default");selectedPreset=yn(null);hasImage=dw(()=>this.sourceBitmap()!==null);customVectors=yn([]);rawSvg=yn("");safeRenderedSvg=yn(null);currentObjectUrl=null;builtinShapes=Pt.map(n=>s(r({},n),{safePreview:this.sanitizer.bypassSecurityTrustHtml(n.preview)}));zoomScale=yn(1);panX=0;panY=0;isDragging=false;dragStart={x:0,y:0};lastPan={x:0,y:0};nextRenderData=null;patternDefs=[{id:0,label:"Regular",icon:"pat-0"},{id:1,label:"Checkers",icon:"pat-1"},{id:2,label:"Bricks",icon:"pat-2"},{id:3,label:"Hex",icon:"pat-3"},{id:4,label:"Random",icon:"pat-4"},{id:5,label:"Wave",icon:"pat-5"},{id:6,label:"Radial",icon:"pat-6"},{id:7,label:"Triangular",icon:"pat-7"},{id:8,label:"Zigzag",icon:"pat-8"}];isSavingPreset=yn(false);newPresetName=yn("");settings=yn({width:600,height:600,keepProportions:true,pat:0,vnum:100,hdist:100,grot:0,offsetX:0,offsetY:0,freq:50,centerX:300,centerY:300,grad:6,contrast:50,sizeMax:100,sizeMin:0,rot:0,rotrnd:false,rotalt:false,useImgColor:false,fgColor:"#000000",bgColor:"#ffffff",bgEnabled:true,filled:true,strokeWidth:1,shapeId:"builtin:1",customText:""});showFreq=dw(()=>{let n=this.settings().pat;return n===5||n===8});showOffsets=dw(()=>this.settings().pat!==6);showRadialCenter=dw(()=>this.settings().pat===6);showCustomText=dw(()=>this.settings().shapeId==="builtin:11");busy=dw(()=>this.engine.busy());progress01=dw(()=>this.engine.progress01());lastError=dw(()=>this.engine.lastError());previewTimer=null;constructor(){for(let[n,e]of Object.entries(Et))this.iconRegistry.addSvgIconLiteral(`pat-${n}`,this.sanitizer.bypassSecurityTrustHtml(e));this.bootstrap(),Ku(()=>{let n=this.customVectors();this.engine.setCustomShapes(n);}),Ku(()=>{let n=this.sourceBitmap(),e=this.settings();this.customVectors();n&&(clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.renderSvgPreview(n,e,this.imageToken());},120));}),Ku(()=>{let n=this.sourceBitmap(),e=this.settings(),t=this.imageToken();this.customVectors();n&&(this.nextRenderData={bmp:n,s:e,token:t},clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.triggerRenderQueue(),150));});}async bootstrap(){let[n,e]=await Promise.all([this.store.listShapes(),this.store.listPresets()]);if(e.length===0){for(let i of me)await this.store.savePreset(i);e=me;}this.shapes.set(n),this.presets.set(e),this.rebuildCustomVectors(n);let t=e.find(i=>i.name==="Default");t&&this.applyPreset(t);}rebuildCustomVectors(n){let e=n.map(t=>({id:t.id,svgInner:de(t.svgText),viewBox:t.viewBox,monochrome:t.monochrome,usesCurrentColor:t.usesCurrentColor}));this.customVectors.set(e);}applyPreset(n){this.selectedPreset.set(n),n&&this.settings.update(e=>s(r({},n.settings),{width:e.width,height:e.height,centerX:e.centerX,centerY:e.centerY}));}async saveCurrentAsPreset(){let n=this.newPresetName().trim();if(!n)return;let e={id:Lt(),name:n,createdAt:Date.now(),settings:this.settings()};await this.store.savePreset(e),this.presets.update(t=>[e,...t]),this.newPresetName.set(""),this.isSavingPreset.set(false);}async deletePreset(n){await this.store.deletePreset(n),this.presets.update(e=>e.filter(t=>t.id!==n));}async onImageUpload(n){if(!n.file)return;let e=await createImageBitmap(n.file);this.sourceBitmap.set(e),this.imageToken.set(`${n.file.name}-${n.file.size}-${n.file.lastModified}`),this.settings.update(t=>s(r({},t),{width:e.width,height:e.height,centerX:Math.round(e.width/2),centerY:Math.round(e.height/2)}));}async onPickSvgShape(n){if(!n.file)return;let e=await n.file.text(),t=Tt(e),i={id:Lt(),name:n.file.name.replace(".svg",""),createdAt:Date.now(),svgText:t.svgText,viewBox:t.viewBox,monochrome:t.monochrome,usesCurrentColor:t.monochrome};await this.store.saveShape(i);let r$1=[i,...this.shapes()];this.shapes.set(r$1),this.rebuildCustomVectors(r$1),this.settings.update(u=>s(r({},u),{shapeId:`custom:${i.id}`}));}async deleteShape(n){await this.store.deleteShape(n);let e=this.shapes().filter(t=>t.id!==n);this.shapes.set(e),this.rebuildCustomVectors(e),this.settings().shapeId===`custom:${n}`&&this.settings.update(t=>s(r({},t),{shapeId:"builtin:1"}));}safeCustomPreview(n){return this.sanitizer.bypassSecurityTrustHtml(zt(n,56))}updateConfig(n,e){this.settings.update(t=>s(r({},t),{[n]:e}));}toggleRandomRotation(n){this.settings.update(e=>s(r({},e),{rotrnd:n,rotalt:n?false:e.rotalt}));}toggleAlternatingRotation(n){this.settings.update(e=>s(r({},e),{rotalt:n,rotrnd:n?false:e.rotrnd}));}async renderSvgPreview(n,e,t){try{await this.engine.initImage(n,e.width,e.height,t);let i=await this.engine.renderSvg(e);this.rawSvg.set(i);let r=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),u=URL.createObjectURL(r);this.currentObjectUrl&&URL.revokeObjectURL(this.currentObjectUrl),this.currentObjectUrl=u,this.safeRenderedSvg.set(this.sanitizer.bypassSecurityTrustUrl(u)),setTimeout(()=>this.updateTransform(),0);}catch{this.safeRenderedSvg.set(null);}}async exportSvg(){let n=this.sourceBitmap();if(!n)return;let e=this.settings(),t=this.imageToken();await this.engine.initImage(n,e.width,e.height,t);let i=await this.engine.renderSvg(e),r=new Blob([i],{type:"image/svg+xml;charset=utf-8"});this.downloadBlob(r,this.makeFileName("svg"));}makeFileName(n){return `halftone-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.${n}`}downloadBlob(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1500);}getPresetIcon(n){let e=n.settings,t=e.bgEnabled?e.bgColor:"transparent",i=e.useImgColor||e.grad===5||e.grad===6||e.grad===10,r=i?`
      <defs>
        <linearGradient id="g-${n.id}" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="5%" stop-color="#0c0738" />
          <stop offset="95%" stop-color="#bef8d8" />
        </linearGradient>
      </defs>
    `:"",u=i?`url(#g-${n.id})`:e.fgColor,p="",h=`fill="none" stroke="${u}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"`,y=`fill="${u}"`,$=e.shapeId==="builtin:4"||e.shapeId==="builtin:10"||e.shapeId==="builtin:12",I=e.filled&&!$?y:h;switch(e.shapeId){case "builtin:0":p=`<rect x="16" y="16" width="32" height="32" ${I}/>`;break;case "builtin:1":p=`<circle cx="32" cy="32" r="16" ${I}/>`;break;case "builtin:2":p=`<path d="M32 12L52 32 32 52 12 32z" ${I}/>`;break;case "builtin:3":p=`<path d="M18 16l14-8 14 8 6 16-6 16-14 8-14-8-6-16z" ${I}/>`;break;case "builtin:4":p=`<path d="M12 32h40" ${h}/>`;break;case "builtin:5":p=`<path d="M32 10l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" ${I}/>`;break;case "builtin:6":p=`<path d="M32 10l6 14 14 2-10 10 2 15-12-7-12 7 2-15-10-10 14-2z" ${I}/>`;break;case "builtin:7":p=`<path d="M32 10l4 10 11 1-6 9 3 11-12-5-12 5 3-11-6-9 11-1z" ${I}/>`;break;case "builtin:8":p=`<path d="M26 14h12v12h12v12H38v12H26V38H14V26h12z" ${I}/>`;break;case "builtin:9":p=`<path d="M32 14l20 34H12z" ${I}/>`;break;case "builtin:10":p=`<path d="M22 32h20" ${h}/>`;break;case "builtin:11":p=`<text x="32" y="44" text-anchor="middle" font-size="38" font-weight="900" font-family="Courier New, monospace" ${I}>${e.customText||"A"}</text>`;break;case "builtin:12":p=`<path d="M20 44V20h24" ${h}/>`;break;default:p=`<text x="32" y="44" text-anchor="middle" font-size="30" font-family="sans-serif" fill="${u}">\u2605</text>`;}let Dt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24" style="background-color: ${t}; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
      ${r}
      ${p}
    </svg>`;return this.sanitizer.bypassSecurityTrustHtml(Dt)}async triggerRenderQueue(){if(!this.nextRenderData)return;if(this.engine.busy()){this.previewTimer=setTimeout(()=>this.triggerRenderQueue(),50);return}let{bmp:n,s:e,token:t}=this.nextRenderData;this.nextRenderData=null,this.renderSvgPreview(n,e,t);}zoomIn(){this.applyZoom(Math.min(5,this.zoomScale()+.1));}zoomOut(){this.applyZoom(Math.max(.1,this.zoomScale()-.1));}setZoom(n){this.applyZoom(n);}fitToScreen(){this.panX=0,this.panY=0,this.applyZoom(1);}applyZoom(n){this.zoomScale.set(n),this.updateTransform();}updateTransform(){let n=this.svgWrapper();n?.nativeElement&&(n.nativeElement.style.transform=`translate(${this.panX}px, ${this.panY}px) scale(${this.zoomScale()})`);}onPanStart(n){if(n.target.closest("button"))return;this.isDragging=true;let e=n instanceof MouseEvent?n.clientX:n.touches[0].clientX,t=n instanceof MouseEvent?n.clientY:n.touches[0].clientY;this.dragStart={x:e,y:t},this.lastPan={x:this.panX,y:this.panY};}onPanMove(n){if(!this.isDragging)return;n.cancelable&&n.preventDefault();let e=n instanceof MouseEvent?n.clientX:n.touches[0].clientX,t=n instanceof MouseEvent?n.clientY:n.touches[0].clientY,i=e-this.dragStart.x,r=t-this.dragStart.y;this.panX=this.lastPan.x+i,this.panY=this.lastPan.y+r,this.updateTransform();}onPanEnd(){this.isDragging=false;}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=IE({type:a,selectors:[["app-halftone-editor"]],viewQuery:function(e,t){e&1&&Kp(t.svgWrapper,Jt,5),e&2&&gD();},hostBindings:function(e,t){e&1&&Wp("mousemove",function(r){return t.onPanMove(r)},Xy)("touchmove",function(r){return t.onPanMove(r)},Xy)("mouseup",function(){return t.onPanEnd()},Xy)("touchend",function(){return t.onPanEnd()},Xy);},decls:136,vars:77,consts:[["svgWrapper",""],[1,"halftone-container"],["title","Halftone Settings","icon","tune",1,"config-sidebar",3,"initiallyExpanded"],[1,"config-scroll-area","custom-scrollbar"],[1,"section-block"],[1,"section-title"],[1,"preset-inline-row"],["appearance","outline",1,"preset-dropdown","form-field-compact"],["panelClass","preset-dropdown-panel",3,"selectionChange","value"],[1,"preset-trigger-content"],[3,"value"],[1,"preset-option",3,"value"],["appearance","outline",1,"preset-name-input","form-field-compact"],["matInput","","placeholder","e.g., Cool Pattern",3,"input","value"],["variant","primary","icon","save",3,"clicked","disabled"],[3,"fileSelected","config"],[1,"palette-grid","pattern-grid"],["type","button",1,"palette-tile","glass",3,"active","matTooltip"],[1,"controls-grid"],[1,"slider-group"],["label","Vertical Elements",3,"input","value","min","max","step"],["label","Horizontal Spread",3,"input","value","min","max","step"],["label","Grid Rotation (\xB0)",3,"input","value","min","max","step"],[1,"palette-grid","shape-grid"],["appearance","outline"],[1,"shape-upload-wrapper"],["appearance","outline",1,"form-field-compact"],[3,"selectionChange","value"],[3,"change","checked"],["label","Contrast",3,"input","value","min","max","step"],["label","Maximum Size",3,"input","value","min","max","step"],["label","Minimum Size",3,"input","value","min","max","step"],["label","Element Rotation (\xB0)",3,"input","value","min","max","step"],[1,"checkbox-group"],["matInput","","type","color",3,"input","value","disabled"],[1,"report-area"],["title","Vector Halftone Output","icon","visibility",1,"svg-preview-card",3,"noPadding"],["header-actions",""],[1,"zoom-controls"],["mat-icon-button","","matTooltip","Zoom Out",3,"click"],["label","Zoom",3,"input","value","min","max","step"],["mat-icon-button","","matTooltip","Zoom In",3,"click"],["mat-icon-button","","matTooltip","Fit to Screen",3,"click"],[1,"header-divider"],["variant","primary","icon","download",3,"disabled"],[1,"svg-render-container",3,"mousedown","touchstart"],[1,"empty-state"],[1,"glass-preloader"],[1,"error-snackbar","glass"],[1,"preset-icon",3,"innerHTML"],[1,"preset-option-content"],[1,"preset-label-group"],["mat-icon-button","",1,"preset-delete-btn",3,"click"],["type","button",1,"palette-tile","glass",3,"click","matTooltip"],[2,"display","flex",3,"svgIcon"],["label","Center X",3,"input","value","min","max","step"],["label","Center Y",3,"input","value","min","max","step"],["label","Offset X",3,"input","value","min","max","step"],["label","Offset Y",3,"input","value","min","max","step"],["label","Wave Frequency",3,"input","value","min","max","step"],[1,"shape-preview",3,"innerHTML"],[1,"subsection-title"],[1,"custom-tile-wrapper"],["mat-icon-button","","color","warn",1,"delete-shape-btn",3,"click"],["matInput","","maxlength","3",3,"input","value"],["label","Stroke Width",3,"input","value","min","max","step"],["variant","primary","icon","download",3,"clicked","disabled"],["alt","Halftone Preview","draggable","false",1,"svg-wrapper",3,"src"],[1,"spinner-wrapper"],["diameter","48"],[1,"progress-text"],["mode","determinate",3,"value"]],template:function(e,t){e&1&&(mi(0,"div",1)(1,"app-collapsible-config-card",2)(2,"div",3)(3,"div",4)(4,"h3",5),jD(5,"Presets"),Hc(),mi(6,"div",6)(7,"mat-form-field",7)(8,"mat-label"),jD(9,"Load Preset"),Hc(),mi(10,"mat-select",8),Wp("selectionChange",function(r){return t.applyPreset(r.value)}),mi(11,"mat-select-trigger"),UE(12,nn,4,2,"div",9),Hc(),mi(13,"mat-option",10),jD(14,"-- Select a Preset --"),Hc(),zE(15,an,9,3,"mat-option",11,re),Hc()(),mi(17,"mat-form-field",12)(18,"mat-label"),jD(19,"New Preset Name"),Hc(),mi(20,"input",13),Wp("input",function(r){return t.newPresetName.set(r.target.value)}),Hc()(),mi(21,"app-button",14),Wp("clicked",function(){return t.saveCurrentAsPreset()}),jD(22," Save "),Hc()()(),mi(23,"div",4)(24,"h3",5),jD(25,"Source Image"),Hc(),mi(26,"app-file-upload",15),Wp("fileSelected",function(r){return t.onImageUpload(r)}),Hc()(),mi(27,"div",4)(28,"h3",5),jD(29,"Grid Pattern"),Hc(),mi(30,"div",16),zE(31,rn,2,4,"button",17,re),Hc(),mi(33,"div",18)(34,"div",19)(35,"app-slider",20),Wp("input",function(r){return t.updateConfig("vnum",r)}),Hc()(),mi(36,"div",19)(37,"app-slider",21),Wp("input",function(r){return t.updateConfig("hdist",r)}),Hc()(),mi(38,"div",19)(39,"app-slider",22),Wp("input",function(r){return t.updateConfig("grot",r)}),Hc()(),UE(40,on,4,8)(41,sn,4,8),UE(42,ln,2,4,"div",19),Hc()(),mi(43,"div",4)(44,"h3",5),jD(45,"Shape Palette"),Hc(),mi(46,"div",23),zE(47,cn,2,4,"button",17,re),Hc(),UE(49,mn,5,0),mi(50,"div",18),UE(51,pn,4,1,"mat-form-field",24),mi(52,"div",25)(53,"app-file-upload",15),Wp("fileSelected",function(r){return t.onPickSvgShape(r)}),Hc()()()(),mi(54,"div",4)(55,"h3",5),jD(56,"Dots & Size"),Hc(),mi(57,"div",18)(58,"mat-form-field",26)(59,"mat-label"),jD(60,"Size By (Gradient)"),Hc(),mi(61,"mat-select",27),Wp("selectionChange",function(r){return t.updateConfig("grad",r.value)}),mi(62,"mat-option",10),jD(63,"None"),Hc(),mi(64,"mat-option",10),jD(65,"Image"),Hc(),mi(66,"mat-option",10),jD(67,"Image Inverted"),Hc(),mi(68,"mat-option",10),jD(69,"Image Alpha"),Hc(),mi(70,"mat-option",10),jD(71,"Linear R to L"),Hc(),mi(72,"mat-option",10),jD(73,"Linear L to R"),Hc(),mi(74,"mat-option",10),jD(75,"Linear T to B"),Hc(),mi(76,"mat-option",10),jD(77,"Linear B to T"),Hc(),mi(78,"mat-option",10),jD(79,"Round"),Hc(),mi(80,"mat-option",10),jD(81,"Bilinear H"),Hc(),mi(82,"mat-option",10),jD(83,"Bilinear V"),Hc()()(),mi(84,"mat-checkbox",28),Wp("change",function(r){return t.toggleRandomRotation(r.checked)}),jD(85,"Random Rotation"),Hc(),mi(86,"mat-checkbox",28),Wp("change",function(r){return t.toggleAlternatingRotation(r.checked)}),jD(87,"Alternating Rotation"),Hc(),mi(88,"div",19)(89,"app-slider",29),Wp("input",function(r){return t.updateConfig("contrast",r)}),Hc()(),mi(90,"div",19)(91,"app-slider",30),Wp("input",function(r){return t.updateConfig("sizeMax",r)}),Hc()(),mi(92,"div",19)(93,"app-slider",31),Wp("input",function(r){return t.updateConfig("sizeMin",r)}),Hc()(),mi(94,"div",19)(95,"app-slider",32),Wp("input",function(r){return t.updateConfig("rot",r)}),Hc()()()(),mi(96,"div",4)(97,"h3",5),jD(98,"Colors & Style"),Hc(),mi(99,"div",33)(100,"mat-checkbox",28),Wp("change",function(r){return t.updateConfig("useImgColor",r.checked)}),jD(101,"Use Image Color"),Hc(),mi(102,"mat-checkbox",28),Wp("change",function(r){return t.updateConfig("bgEnabled",r.checked)}),jD(103,"Draw Background"),Hc(),mi(104,"mat-checkbox",28),Wp("change",function(r){return t.updateConfig("filled",r.checked)}),jD(105,"Filled Shape"),Hc(),mi(106,"mat-form-field",26)(107,"mat-label"),jD(108,"Foreground Color"),Hc(),mi(109,"input",34),Wp("input",function(r){return t.updateConfig("fgColor",r.target.value)}),Hc()(),mi(110,"mat-form-field",26)(111,"mat-label"),jD(112,"Background Color"),Hc(),mi(113,"input",34),Wp("input",function(r){return t.updateConfig("bgColor",r.target.value)}),Hc()(),UE(114,gn,2,4,"div",19),Hc()()()(),mi(115,"div",35)(116,"app-preview-card",36),Uc(117,37),mi(118,"div",38)(119,"button",39),Wp("click",function(){return t.zoomOut()}),mi(120,"mat-icon"),jD(121,"remove"),Hc()(),mi(122,"app-slider",40),Wp("input",function(r){return t.setZoom(r)}),Hc(),mi(123,"button",41),Wp("click",function(){return t.zoomIn()}),mi(124,"mat-icon"),jD(125,"add"),Hc()(),mi(126,"button",42),Wp("click",function(){return t.fitToScreen()}),mi(127,"mat-icon"),jD(128,"fit_screen"),Hc()(),Vp(129,"div",43),UE(130,un,2,1,"app-button",44),Hc(),qc(),mi(131,"div",45),Wp("mousedown",function(r){return t.onPanStart(r)})("touchstart",function(r){return t.onPanStart(r)}),UE(132,hn,5,0,"div",46)(133,vn,1,1),UE(134,bn,7,5,"div",47),UE(135,_n,4,1,"div",48),Hc()()()()),e&2&&(Hv(),jp("initiallyExpanded",true),Hv(9),jp("value",t.selectedPreset()),Hv(2),qE(t.selectedPreset()?12:-1),Hv(),jp("value",null),Hv(2),QE(t.presets()),Hv(5),jp("value",t.newPresetName()),Hv(),jp("disabled",!t.newPresetName().trim()),Hv(5),jp("config",QD(75,en)),Hv(5),QE(t.patternDefs),Hv(4),jp("value",t.settings().vnum)("min",1)("max",300)("step",1),Hv(2),jp("value",t.settings().hdist)("min",50)("max",500)("step",1),Hv(2),jp("value",t.settings().grot)("min",-180)("max",180)("step",1),Hv(),qE(t.showRadialCenter()?40:41),Hv(2),qE(t.showFreq()?42:-1),Hv(5),QE(t.builtinShapes),Hv(2),qE(t.shapes().length>0?49:-1),Hv(2),qE(t.showCustomText()?51:-1),Hv(2),jp("config",QD(76,tn)),Hv(8),jp("value",t.settings().grad),Hv(),jp("value",0),Hv(2),jp("value",5),Hv(2),jp("value",6),Hv(2),jp("value",10),Hv(2),jp("value",1),Hv(2),jp("value",2),Hv(2),jp("value",3),Hv(2),jp("value",4),Hv(2),jp("value",7),Hv(2),jp("value",8),Hv(2),jp("value",9),Hv(2),jp("checked",t.settings().rotrnd),Hv(2),jp("checked",t.settings().rotalt),Hv(3),jp("value",t.settings().contrast)("min",0)("max",100)("step",1),Hv(2),jp("value",t.settings().sizeMax)("min",0)("max",200)("step",1),Hv(2),jp("value",t.settings().sizeMin)("min",0)("max",100)("step",1),Hv(2),jp("value",t.settings().rot)("min",-180)("max",180)("step",1),Hv(5),jp("checked",t.settings().useImgColor),Hv(2),jp("checked",t.settings().bgEnabled),Hv(2),jp("checked",t.settings().filled),Hv(2),th("disabled-field",t.settings().useImgColor),Hv(3),jp("value",t.settings().fgColor)("disabled",t.settings().useImgColor),Hv(),th("disabled-field",!t.settings().bgEnabled),Hv(3),jp("value",t.settings().bgColor)("disabled",!t.settings().bgEnabled),Hv(),qE(t.settings().filled?-1:114),Hv(2),jp("noPadding",true),Hv(6),jp("value",t.zoomScale())("min",.1)("max",5)("step",.1),Hv(8),qE(t.hasImage()?130:-1),Hv(2),qE(t.hasImage()?133:132),Hv(2),qE(t.busy()?134:-1),Hv(),qE(t.lastError()?135:-1));},dependencies:[xi,ci,ui,Mh,$s,Lt$1,Z,L$1,J$1,Z$1,F,kt,E,jt,Fe,qe,Oe,Lt$2,Rt,Ft$1,J$2,ve,ne$1,on$1,xi$1,w,ci$1,ae,R,pa],styles:["@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_drift{0%{background-position:50% 50%}25%{background-position:60% 40%}50%{background-position:40% 60%}75%{background-position:55% 45%}to{background-position:50% 50%}}@keyframes _ngcontent-%COMP%_wave-motion-1{0%,to{transform:translateZ(0)}25%{transform:translate3d(30px,-20px,0)}50%{transform:translate3d(-20px,10px,0)}75%{transform:translate3d(10px,15px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-2{0%,to{transform:translateZ(0)}25%{transform:translate3d(-25px,15px,0)}50%{transform:translate3d(20px,-10px,0)}75%{transform:translate3d(-15px,-20px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-3{0%,to{transform:translateZ(0)}25%{transform:translate3d(20px,25px,0)}50%{transform:translate3d(-30px,-15px,0)}75%{transform:translate3d(25px,-10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-4{0%,to{transform:translateZ(0)}25%{transform:translate3d(-20px,-25px,0)}50%{transform:translate3d(25px,20px,0)}75%{transform:translate3d(-10px,10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-5{0%,to{transform:translateZ(0)}25%{transform:translate3d(15px,-30px,0)}50%{transform:translate3d(-25px,25px,0)}75%{transform:translate3d(20px,-15px,0)}}.halftone-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--spacing-sm);padding:.25rem;height:100%;overflow:auto}.halftone-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.halftone-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track);border-radius:4px}.halftone-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:4px}.halftone-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover)}.halftone-container[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track)}.config-sidebar[_ngcontent-%COMP%]{width:100%;flex-shrink:0;display:flex;flex-direction:column}.config-sidebar[_ngcontent-%COMP%]   .config-scroll-area[_ngcontent-%COMP%]{max-height:40vh;overflow-y:auto;display:flex;flex-direction:column;gap:var(--spacing-md)}@media(max-width:768px){.config-sidebar[_ngcontent-%COMP%]   .config-scroll-area[_ngcontent-%COMP%]{max-height:45vh}}.section-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--spacing-sm);margin:0;padding-bottom:var(--spacing-sm);border-bottom:1px solid var(--glass-border)}.section-block[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.section-block[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;line-height:1.6;letter-spacing:0;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);margin-bottom:.25rem}.section-block[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;line-height:1.6;letter-spacing:0;text-transform:uppercase;color:var(--text-disabled);margin:var(--spacing-sm) 0 var(--spacing-3xs) 0}.controls-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--spacing-md-minus);align-items:center}.controls-grid[_ngcontent-%COMP%]   .shape-upload-wrapper[_ngcontent-%COMP%]{width:100%;flex-shrink:0;margin-top:var(--spacing-xs)}.controls-grid[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%]{width:170px;flex-shrink:0}.preset-inline-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-md);flex-wrap:wrap}.preset-inline-row[_ngcontent-%COMP%]   .preset-dropdown[_ngcontent-%COMP%], .preset-inline-row[_ngcontent-%COMP%]   .preset-name-input[_ngcontent-%COMP%]{width:200px;max-width:100%}.preset-inline-row[_ngcontent-%COMP%]   .preset-save-btn[_ngcontent-%COMP%]{height:40px;flex-shrink:0}.slider-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.slider-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;line-height:1.6;letter-spacing:0;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.5px}.slider-group[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%]{width:100%;margin-top:-.75rem;margin-bottom:-.75rem}.checkbox-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--spacing-md)}.checkbox-group[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{font-size:var(--font-size-sm)}.disabled-field[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.palette-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(42px,1fr));gap:.25rem;margin-bottom:1rem;width:100%}.palette-tile[_ngcontent-%COMP%]{aspect-ratio:1;display:flex;align-items:center;justify-content:center;border:1px solid var(--glass-border);background:var(--glass-bg);border-radius:.25rem;cursor:pointer;transition:all .1s ease;color:var(--text-primary);padding:0}.palette-tile[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:400;line-height:1.6;letter-spacing:0;width:24px;height:24px;opacity:.8}.palette-tile[_ngcontent-%COMP%]   .shape-preview[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.palette-tile[_ngcontent-%COMP%]:hover{background:var(--glass-inset);border-color:var(--text-secondary)}.palette-tile[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{opacity:1}.palette-tile.active[_ngcontent-%COMP%]{background:var(--glass-inset);border-color:var(--primary);box-shadow:0 0 6px rgba(var(--primary-rgb),.4)}.palette-tile.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{opacity:1;color:var(--primary)}.custom-tile-wrapper[_ngcontent-%COMP%]{position:relative;aspect-ratio:1}.custom-tile-wrapper[_ngcontent-%COMP%]   .palette-tile[_ngcontent-%COMP%]{width:100%;height:100%}.custom-tile-wrapper[_ngcontent-%COMP%]   .delete-shape-btn[_ngcontent-%COMP%]{position:absolute;top:-10px;right:-10px;background:var(--bg-card);border:1px solid var(--glass-border);transform:scale(.6);box-shadow:var(--glass-shadow);opacity:0;transition:opacity .2s ease}.custom-tile-wrapper[_ngcontent-%COMP%]:hover   .delete-shape-btn[_ngcontent-%COMP%]{opacity:1}.preset-trigger-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-sm)}.preset-trigger-content[_ngcontent-%COMP%]   .preset-icon[_ngcontent-%COMP%]{width:20px;height:20px;display:flex;align-items:center}.preset-option-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.preset-option-content[_ngcontent-%COMP%]   .preset-label-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-md-minus);flex-grow:1;overflow:hidden}.preset-option-content[_ngcontent-%COMP%]   .preset-label-group[_ngcontent-%COMP%]   .preset-icon[_ngcontent-%COMP%]{width:24px;height:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center}.preset-option-content[_ngcontent-%COMP%]   .preset-label-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;line-height:1.6;letter-spacing:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.preset-option-content[_ngcontent-%COMP%]   .preset-delete-btn[_ngcontent-%COMP%]{opacity:0;transform:scale(.75);margin-right:-.5rem;transition:opacity .2s ease}.preset-option-content[_ngcontent-%COMP%]   .preset-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-secondary)}.preset-option-content[_ngcontent-%COMP%]   .preset-delete-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:var(--error)}.preset-option-content[_ngcontent-%COMP%]:hover   .preset-delete-btn[_ngcontent-%COMP%]{opacity:1}.report-area[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;min-height:50vh}.report-area[_ngcontent-%COMP%]   .svg-preview-card[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column}.zoom-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.zoom-controls[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]{width:100px;margin-left:.5rem;margin-right:.5rem}.zoom-controls[_ngcontent-%COMP%]   .header-divider[_ngcontent-%COMP%]{width:1px;height:24px;background:var(--glass-border);margin-left:.5rem;margin-right:.5rem}.svg-render-container[_ngcontent-%COMP%]{position:relative;width:100%;flex-grow:1;min-height:500px;display:flex;align-items:center;justify-content:center;background-color:var(--bg-overlay, var(--bg-secondary));overflow:hidden;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}.svg-render-container[_ngcontent-%COMP%]:active{cursor:grabbing}.svg-render-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-sm);color:var(--text-secondary);opacity:.6}.svg-render-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:400;line-height:1.6;letter-spacing:0;width:40px;height:40px}.svg-render-container[_ngcontent-%COMP%]   .glass-preloader[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-sm);background:var(--glass-bg);backdrop-filter:blur(8px) saturate(200%);-webkit-backdrop-filter:blur(8px) saturate(200%);box-shadow:0 10px 40px var(--glass-shadow),inset 1px 1px 1px #fff6,inset -1px -1px 2px var(--glass-inset-dark),inset 0 10px 20px #ffffff1a;border:1px solid var(--glass-border);z-index:10}.svg-render-container[_ngcontent-%COMP%]   .error-snackbar[_ngcontent-%COMP%]{position:absolute;bottom:var(--spacing-md);left:50%;transform:translate(-50%);display:flex;align-items:center;gap:var(--spacing-sm);padding:.5rem 1rem;border-radius:.25rem;background:var(--error);color:var(--text-inverse);font-size:.875rem;font-weight:700;line-height:1.6;letter-spacing:0;box-shadow:var(--glass-shadow);z-index:20}.svg-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;transform-origin:center center;will-change:transform;filter:drop-shadow(var(--shadow-drop-md));pointer-events:none}"]})};export{Ht as HalftoneEditorComponent};
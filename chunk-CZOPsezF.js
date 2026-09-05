import {b0 as S,T,aK as Dr,aA as o0,cj as er,h as hn,b9 as pe$1,n as ne,ce as ue,cB as Io,cf as en,dn as jo,ct as fo,a as gE,dp as A,cW as Yf,a_ as s0,bK as iD,C as jE,bL as sD,B as pi,E as Fc,a8 as Fp,V as VE,R as Lv,Z as Lp,H as Up,bb as Bp,a5 as Pc,X as Xp,b2 as zp,b3 as cD,b4 as lD,aV as kc,aW as mo,bz as So,dq as f,aX as y0,a3 as rD,D as kD,ab as $c}from'./main-IRXR4U7N.js';var $=["text"],tt=[[["mat-icon"]],"*"],et=["mat-icon","*"];function it(e,o){if(e&1&&Fp(0,"mat-pseudo-checkbox",1),e&2){let t=rD();Lp("disabled",t.disabled)("state",t.selected?"checked":"unchecked");}}function nt(e,o){if(e&1&&Fp(0,"mat-pseudo-checkbox",3),e&2){let t=rD();Lp("disabled",t.disabled);}}function ot(e,o){if(e&1&&(pi(0,"span",4),kD(1),Fc()),e&2){let t=rD();Lv(),$c("(",t.group.label,")");}}var at=new S("MAT_OPTION_PARENT_COMPONENT"),rt=new S("MatOptgroup");var _=class{source;isUserInput;constructor(o,t=false){this.source=o,this.isUserInput=t;}},J=(()=>{class e{_element=T(Dr);_changeDetectorRef=T(o0);_parent=T(at,{optional:true});group=T(rt,{optional:true});_signalDisableRipple=false;_selected=false;_active=false;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=T(er).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t);}_disabled=hn(false);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return !!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new pe$1;_text;_stateChanges=new ne;constructor(){let t=T(ue);t.load(Io),t.load(en),this._signalDisableRipple=!!this._parent&&jo(this._parent.disableRipple);}get active(){return this._active}get viewValue(){return (this._text?.nativeElement.textContent||"").trim()}select(t=true){this._selected||(this._selected=true,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent());}deselect(t=true){this._selected&&(this._selected=false,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent());}focus(t,n){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(n);}setActiveStyles(){this._active||(this._active=true,this._changeDetectorRef.markForCheck());}setInactiveStyles(){this._active&&(this._active=false,this._changeDetectorRef.markForCheck());}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!fo(t)&&(this._selectViaInteraction(),t.preventDefault());}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:true,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(true));}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t);}}ngOnDestroy(){this._stateChanges.complete();}_emitSelectionChangeEvent(t=false){this.onSelectionChange.emit(new _(this,t));}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=gE({type:e,selectors:[["mat-option"]],viewQuery:function(n,i){if(n&1&&zp($,7),n&2){let a;cD(a=lD())&&(i._text=a.first);}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,i){n&1&&Up("click",function(){return i._selectViaInteraction()})("keydown",function(l){return i._handleKeydown(l)}),n&2&&(Bp("id",i.id),Pc("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),Xp("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled));},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",s0]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:et,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,i){n&1&&(iD(tt),jE(0,it,1,2,"mat-pseudo-checkbox",1),sD(1),pi(2,"span",2,0),sD(4,1),Fc(),jE(5,nt,1,1,"mat-pseudo-checkbox",3),jE(6,ot,2,1,"span",4),Fp(7,"div",5)),n&2&&(VE(i.multiple?0:-1),Lv(5),VE(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),Lv(),VE(i.group&&i.group._inert?6:-1),Lv(),Lp("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple));},dependencies:[A,Yf],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return e})();function Ct(e,o,t){if(t.length){let n=o.toArray(),i=t.toArray(),a=0;for(let l=0;l<e+1;l++)n[l].group&&n[l].group===i[a]&&a++;return a}return 0}function wt(e,o,t,n){return e<t?e:e+o>t+n?Math.max(0,e-n+o):t}var It=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=kc({type:e});static \u0275inj=mo({imports:[So,f,J,y0]})}return e})();export{Ct as C,It as I,J,at as a,rt as r,wt as w};
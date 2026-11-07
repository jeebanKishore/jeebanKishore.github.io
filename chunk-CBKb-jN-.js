import{A as Eg,At as Qr,Br as tg,Bt as Tl,Dr as oI,Gn as fi,Hn as fV,It as Rw,Jr as uj,Kn as fj,Ln as ee,Nr as qh,Q as Ki,Qt as Vh,S as Cl,Sr as nb,U as Hi,_r as m,a as $h,et as LD,fi as xw,g as Aw,hi as yr,ht as Nw,ii as wl,kn as cw,li as xl,lr as kn,mn as Zh,ni as we,or as jh,rt as M,vn as _l,yn as _w,zr as sw}from"./chunk-Di2q8XhG.js";import{C as Mo,H as am,P as Te,h as In,p as Go,t as $o,tt as nt$1}from"./chunk-p33yfgCv.js";import{i as Q}from"./main-TOPCNPGP.js";import{t as n}from"./chunk-Ba8jeQYI.js";var nt=new M(`MAT_OPTION_PARENT_COMPONENT`);var it=new M(`MatOptgroup`);var wt=(()=>{class n{label;disabled=!1;_labelId=m(In).getId(`mat-optgroup-label-`);_inert;constructor(){let t=m(nt,{optional:!0});this._inert=t?.inertGroups??!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`*`,[[`mat-option`],[`ng-container`]]];return LD({type:n,selectors:[[`mat-optgroup`]],hostAttrs:[1,`mat-mdc-optgroup`],hostVars:3,hostBindings:function(r,o){r&2&&wl(`role`,o._inert?null:`group`)(`aria-disabled`,o._inert?null:o.disabled.toString())(`aria-labelledby`,o._inert?null:o._labelId)},inputs:{label:`label`,disabled:[2,`disabled`,`disabled`,fj]},exportAs:[`matOptgroup`],features:[Eg([{provide:it,useExisting:n}])],ngContentSelectors:[`*`,`mat-option, ng-container`],decls:5,vars:4,consts:[[`role`,`presentation`,1,`mat-mdc-optgroup-label`,3,`id`],[1,`mdc-list-item__primary-text`]],template:function(r,o){r&1&&(Nw(t),Cl(0,`span`,0)(1,`span`,1),nb(2),xw(3),_l()(),xw(4,1)),r&2&&(tg(`mdc-list-item--disabled`,o.disabled),$h(`id`,o._labelId),oI(2),xl(``,o.label,` `))},styles:[`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2})})()}return n})();var E=class{source;isUserInput;constructor(c,t=!1){this.source=c,this.isUserInput=t}};var ot=(()=>{class n{_element=m(Qr);_changeDetectorRef=m(uj);_parent=m(nt,{optional:!0});group=m(it,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(In).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=kn(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new we;_text;_stateChanges=new ee;constructor(){let t=m(nt$1);t.load($o),t.load(Te),this._signalDisableRipple=!!this._parent&&fi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,i){let m=this._getHostElement();typeof m.focus==`function`&&m.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Mo(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new E(this,t))}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`text`],i=[[[`mat-icon`]],`*`],m=[`mat-icon`,`*`];function r(a,l){if(a&1&&Vh(0,`mat-pseudo-checkbox`,1),a&2){let e=_w();jh(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function o(a,l){if(a&1&&Vh(0,`mat-pseudo-checkbox`,3),a&2){let e=_w();jh(`disabled`,e.disabled)}}function at(a,l){if(a&1&&(Hi(0,`span`,4),nb(1),Tl()),a&2){let e=_w();oI(),xl(`(`,e.group.label,`)`)}}return LD({type:n,selectors:[[`mat-option`]],viewQuery:function(l,e){if(l&1&&Zh(t,7),l&2){let u;Aw(u=Rw())&&(e._text=u.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(l,e){l&1&&qh(`click`,function(){return e._selectViaInteraction()})(`keydown`,function(lt){return e._handleKeydown(lt)}),l&2&&($h(`id`,e.id),wl(`aria-selected`,e.selected)(`aria-disabled`,e.disabled.toString()),tg(`mdc-list-item--selected`,e.selected)(`mat-mdc-option-multiple`,e.multiple)(`mat-mdc-option-active`,e.active)(`mdc-list-item--disabled`,e.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,fj]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:m,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(l,e){l&1&&(Nw(i),sw(0,r,1,2,`mat-pseudo-checkbox`,1),xw(1),Hi(2,`span`,2,0),xw(4,1),Tl(),sw(5,o,1,1,`mat-pseudo-checkbox`,3),sw(6,at,2,1,`span`,4),Vh(7,`div`,5)),l&2&&(cw(e.multiple?0:-1),oI(5),cw(!e.multiple&&e.selected&&!e.hideSingleSelectionIndicator?5:-1),oI(),cw(e.group&&e.group._inert?6:-1),oI(),jh(`matRippleTrigger`,e._getHostElement())(`matRippleDisabled`,e.disabled||e.disableRipple))},dependencies:[Q,am],styles:[`.mat-mdc-option {
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
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
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
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();function Mt(n,c,t){if(t.length){let i=c.toArray(),m=t.toArray(),r=0;for(let o=0;o<n+1;o++)i[o].group&&i[o].group===m[r]&&r++;return r}return 0}function Nt(n,c,t,i){return n<t?n:n+c>t+i?Math.max(0,n-i+c):t}var Dt=(()=>{class n$1{static ɵfac=function(i){return new(i||n$1)};static ɵmod=Ki({type:n$1});static ɵinj=yr({imports:[Go,n,ot,fV]})}return n$1})();export{nt as a,it as i,Mt as n,ot as o,Nt as r,wt as s,Dt as t};
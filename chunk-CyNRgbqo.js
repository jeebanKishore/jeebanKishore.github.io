import{n as s,t as r}from"./chunk-C-7EWX3l.js";import{A as Ed,Ar as rI,Br as uV,C as Cl,Cn as at$1,Dn as bl,Dt as Sh,E as Dl,En as bg,Et as Sd,Ft as Tl,Gn as fg,Gr as uw,H as IT,Hr as ue$1,In as dg,Ir as tb,M as Fe,Mn as cj,Mt as Sw,Or as qh,P as Fh,Pr as sb,Q as Kh,Sn as ag,St as Rh,T as Cw,Vn as eg,Vt as Uh,Wn as ey,Wr as uj,Wt as Um,X as KI,Xr as wc,Xt as Vh,Y as K,Zr as we,Zt as Vi,_n as _h,_r as m,ar as jh,br as me,c as Al,ci as yg,cn as Y$1,cr as kn,ct as Mw,di as yw,dt as Nw,en as Wh,f as Aw,gi as zr,gt as Pe,hi as zh,ht as PD,in as Ww,j as FE,jn as cg,kn as bv,lt as Nl,on as Xi,p as B,q as Ji,qr as vd,qt as V,rn as Wo,rr as iw,rt as M,s as Ad,u as As,ui as yr,ut as Ns,wn as aw,wr as ov,xt as Qh,zn as dw}from"./chunk-DO2LSRoZ.js";import{A as Pr,C as Mo,F as Vu,N as Sr,O,P as Te,W as cr,g as It,h as In,j as Rm,k as Pm,o as Cr,t as $o,tt as nt$1,z as _n}from"./chunk-DhXXdPOG.js";import{l as mt}from"./chunk-7VHTyizf.js";import{l as Oe,o as M$1,u as P}from"./chunk-CS8fQTjw.js";import{A as wt,M as yt,O as ui,a as Ei,g as _t,h as Zt$1,j as ye,k as ve,n as Ci,r as Ct,s as Gn,v as bt,x as ft}from"./chunk-DwvMSRfw.js";import{n as Y$2}from"./chunk-BPOXu8Yr.js";var et=new M(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>m(Al)});var U=`Method not implemented`;var v=class{locale;_localeChanges=new K;localeChanges=this._localeChanges;setTime(d,e,t,a){throw new Error(U)}getHours(d){throw new Error(U)}getMinutes(d){throw new Error(U)}getSeconds(d){throw new Error(U)}parseTime(d,e){throw new Error(U)}addSeconds(d,e){throw new Error(U)}getValidDateOrNull(d){return this.isDateInstance(d)&&this.isValid(d)?d:null}deserialize(d){return d==null||this.isDateInstance(d)&&this.isValid(d)?d:this.invalid()}setLocale(d){this.locale=d,this._localeChanges.next()}compareDate(d,e){return this.getYear(d)-this.getYear(e)||this.getMonth(d)-this.getMonth(e)||this.getDate(d)-this.getDate(e)}compareTime(d,e){return this.getHours(d)-this.getHours(e)||this.getMinutes(d)-this.getMinutes(e)||this.getSeconds(d)-this.getSeconds(e)}sameDate(d,e){if(d&&e){let t=this.isValid(d),a=this.isValid(e);return t&&a?!this.compareDate(d,e):t==a}return d==e}sameTime(d,e){if(d&&e){let t=this.isValid(d),a=this.isValid(e);return t&&a?!this.compareTime(d,e):t==a}return d==e}clampDate(d,e,t){return e&&this.compareDate(d,e)<0?e:t&&this.compareDate(d,t)>0?t:d}};var Y=new M(`mat-date-formats`);var ee=(()=>{class r{changes=new K;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||r)};static ɵprov=Fe({token:r,factory:r.ɵfac})}return r})();var ma=0;var pe=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=ma++;cssClasses;constructor(d,e,t,a,n,i=d,c){this.value=d,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=i,this.rawValue=c,this.cssClasses=n instanceof Set?Array.from(n):n}};var ha={passive:!1,capture:!0};var Ee={passive:!0,capture:!0};var Zt={passive:!0};var J=(()=>{class r{_elementRef=m(zr);_ngZone=m(me);_platform=m(O);_intl=m(ee);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new we;previewChange=new we;activeDateChange=new we;dragStarted=new we;dragEnded=new we;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=m(ue$1);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=m(wc),t=m(In);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),m(nt$1).load($o),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,n=[e.listen(a,`touchmove`,this._touchmoveHandler,ha),e.listen(a,`mouseenter`,this._enterHandler,Ee),e.listen(a,`focus`,this._enterHandler,Ee),e.listen(a,`mouseleave`,this._leaveHandler,Ee),e.listen(a,`blur`,this._leaveHandler,Ee),e.listen(a,`mousedown`,this._mousedownHandler,Zt),e.listen(a,`touchstart`,this._mousedownHandler,Zt)];this._platform.isBrowser&&n.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:n}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?n-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){FE(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return nt(e,this.startValue,this.endValue)}_isRangeEnd(e){return rt(e,this.startValue,this.endValue)}_isInRange(e){return it(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return nt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[t][a-1];if(!n){let i=this.rows[t-1];n=i&&i[i.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[t][a+1];if(!n){let i=this.rows[t+1];n=i&&i[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return rt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return it(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return nt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return rt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return it(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Xt(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),at(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=at(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Xt(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=at(e);if(t){let a=t.getAttribute(`data-mat-row`),n=t.getAttribute(`data-mat-col`);if(a&&n)return this.rows[parseInt(a)]?.[parseInt(n)]||null}return null}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){function e(o,p){return this._trackRow(p)}let t=(o,p)=>p.id;function a(o,p){if(o&1&&(Tl(0,`tr`,0)(1,`td`,3),tb(2),Cl()()),o&2){let s=Cw();rI(),Kh(`padding-top`,s._cellPadding)(`padding-bottom`,s._cellPadding),Dl(`colspan`,s.numCols),rI(),Nl(` `,s.label,` `)}}function n(o,p){if(o&1&&(Tl(0,`td`,3),tb(1),Cl()),o&2){let s=Cw(2);Kh(`padding-top`,s._cellPadding)(`padding-bottom`,s._cellPadding),Dl(`colspan`,s._firstRowOffset),rI(),Nl(` `,s._firstRowOffset>=s.labelMinRequiredCells?s.label:``,` `)}}function i(o,p){if(o&1){let s=yw();Tl(0,`td`,6)(1,`button`,7),qh(`click`,function(I){let _=vd(s).$implicit,Oe=Cw(2);return Ed(Oe._cellClicked(_,I))})(`focus`,function(I){let _=vd(s).$implicit,Oe=Cw(2);return Ed(Oe._emitActiveDateChange(_,I))}),Tl(2,`span`,8),tb(3),Cl(),Vh(4,`span`,9),Cl()()}if(o&2){let s=p.$implicit,m=p.$index,I=Cw().$index,_=Cw();Kh(`width`,_._cellWidth)(`padding-top`,_._cellPadding)(`padding-bottom`,_._cellPadding),Dl(`data-mat-row`,I)(`data-mat-col`,m),rI(),Ww(s.cssClasses),eg(`mat-calendar-body-disabled`,!s.enabled)(`mat-calendar-body-active`,_._isActiveCell(I,m))(`mat-calendar-body-range-start`,_._isRangeStart(s.compareValue))(`mat-calendar-body-range-end`,_._isRangeEnd(s.compareValue))(`mat-calendar-body-in-range`,_._isInRange(s.compareValue))(`mat-calendar-body-comparison-bridge-start`,_._isComparisonBridgeStart(s.compareValue,I,m))(`mat-calendar-body-comparison-bridge-end`,_._isComparisonBridgeEnd(s.compareValue,I,m))(`mat-calendar-body-comparison-start`,_._isComparisonStart(s.compareValue))(`mat-calendar-body-comparison-end`,_._isComparisonEnd(s.compareValue))(`mat-calendar-body-in-comparison-range`,_._isInComparisonRange(s.compareValue))(`mat-calendar-body-preview-start`,_._isPreviewStart(s.compareValue))(`mat-calendar-body-preview-end`,_._isPreviewEnd(s.compareValue))(`mat-calendar-body-in-preview`,_._isInPreview(s.compareValue)),Uh(`tabIndex`,_._isActiveCell(I,m)?0:-1),Dl(`aria-label`,s.ariaLabel)(`aria-disabled`,!s.enabled||null)(`aria-pressed`,_._isSelected(s.compareValue))(`aria-current`,_.todayValue===s.compareValue?`date`:null)(`aria-describedby`,_._getDescribedby(s.compareValue)),rI(),eg(`mat-calendar-body-selected`,_._isSelected(s.compareValue))(`mat-calendar-body-comparison-identical`,_._isComparisonIdentical(s.compareValue))(`mat-calendar-body-today`,_.todayValue===s.compareValue),rI(),Nl(` `,s.displayValue,` `)}}function c(o,p){if(o&1&&(Tl(0,`tr`,1),iw(1,n,2,6,`td`,4),uw(2,i,5,49,`td`,5,t),Cl()),o&2){let s=p.$implicit,m=p.$index,I=Cw();rI(),aw(m===0&&I._firstRowOffset?1:-1),rI(),dw(s)}}return PD({type:r,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[ov],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(p,s){p&1&&(iw(0,a,3,6,`tr`,0),uw(1,c,4,1,`tr`,1,e,!0),Tl(3,`span`,2),tb(4),Cl(),Tl(5,`span`,2),tb(6),Cl(),Tl(7,`span`,2),tb(8),Cl(),Tl(9,`span`,2),tb(10),Cl()),p&2&&(aw(s._firstRowOffset<s.labelMinRequiredCells?0:-1),rI(),dw(s.rows),rI(2),Uh(`id`,s._startDateLabelId),rI(),Nl(` `,s.startDateAccessibleName,`
`),rI(),Uh(`id`,s._endDateLabelId),rI(),Nl(` `,s.endDateAccessibleName,`
`),rI(),Uh(`id`,s._comparisonStartDateLabelId),rI(),cg(` `,s.comparisonDateAccessibleName,` `,s.startDateAccessibleName,`
`),rI(),Uh(`id`,s._comparisonEndDateLabelId),rI(),cg(` `,s.comparisonDateAccessibleName,` `,s.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})})()}return r})();function tt(r){return r?.nodeName===`TD`}function at(r){let d;return tt(r)?d=r:tt(r.parentNode)?d=r.parentNode:tt(r.parentNode?.parentNode)&&(d=r.parentNode.parentNode),d?.getAttribute(`data-mat-row`)!=null?d:null}function nt(r,d,e){return e!==null&&d!==e&&r<e&&r===d}function rt(r,d,e){return d!==null&&d!==e&&r>=d&&r===e}function it(r,d,e,t){return t&&d!==null&&e!==null&&d!==e&&r>=d&&r<=e}function Xt(r){let d=r.changedTouches[0];return document.elementFromPoint(d.clientX,d.clientY)}var x=class{start;end;_disableStructuralEquivalency;constructor(d,e){this.start=d,this.end=e}};var ue=(()=>{class r{selection;_adapter;_selectionChanged=new K;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){KI()};static ɵprov=V({token:r,factory:r.ɵfac})}return r})();var _a=(()=>{class r extends ue{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new r(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||r)(Y$1(v))};static ɵprov=V({token:r,factory:r.ɵfac})}return r})();var ra={provide:ue,useFactory:()=>m(ue,{optional:!0,skipSelf:!0})||new _a(m(v))};var ia=new M(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var ot=7;var ga=0;var Jt=(()=>{class r{_changeDetectorRef=m(cj);_dateFormats=m(Y,{optional:!0});_dateAdapter=m(v,{optional:!0});_dir=m(IT,{optional:!0});_rangeStrategy=m(ia,{optional:!0});_rerenderSubscription=B.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new we;_userSelection=new we;dragStarted=new we;dragEnded=new we;activeDateChange=new we;_matCalendarBody;_monthLabel=kn(``);_weeks=kn([]);_firstWeekOffset=kn(0);_rangeStart=kn(null);_rangeEnd=kn(null);_comparisonRangeStart=kn(null);_comparisonRangeEnd=kn(null);_previewStart=kn(null);_previewEnd=kn(null);_isRange=kn(!1);_todayDate=kn(null);_weekdays=kn([]);constructor(){m(nt$1).load(Te),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ey(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),n,i;this._selected instanceof x?(n=this._getDateInCurrentMonth(this._selected.start),i=this._getDateInCurrentMonth(this._selected.end)):n=i=this._getDateInCurrentMonth(this._selected),(n!==t||i!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Mo(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((ot+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%ot),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,n=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&a){let i=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);i&&(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),n=this._dateAdapter.getDayOfWeekNames(`long`).map((i,c)=>({long:i,narrow:t[c],id:ga++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let n=0,i=this._firstWeekOffset();n<e;n++,i++){i==ot&&(a.push([]),i=0);let c=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),o=this._shouldEnableDate(c),p=this._dateAdapter.format(c,this._dateFormats.display.dateA11yLabel),s=this.dateClass?this.dateClass(c,`month`):void 0;a[a.length-1].push(new pe(n+1,t[n],p,o,s,this._getCellCompareValue(c),c))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(t,a,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof x?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=(a,n)=>n.id;function t(a,n){if(a&1&&(Vi(0,`th`,2)(1,`span`,6),tb(2),bl(),Vi(3,`span`,3),tb(4),bl()()),a&2){let i=n.$implicit;rI(2),ag(i.long),rI(2),ag(i.narrow)}}return PD({type:r,selectors:[[`mat-month-view`]],viewQuery:function(n,i){if(n&1&&Qh(J,5),n&2){let c;Sw(c=Aw())&&(i._matCalendarBody=c.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[ov],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(n,i){n&1&&(Vi(0,`table`,0)(1,`thead`,1)(2,`tr`),uw(3,t,5,2,`th`,2,e),bl(),Vi(5,`tr`,3),jh(6,`th`,4),bl()(),Vi(7,`tbody`,5),Wh(`selectedValueChange`,function(o){return i._dateSelected(o)})(`activeDateChange`,function(o){return i._updateActiveDate(o)})(`previewChange`,function(o){return i._previewChanged(o)})(`dragStarted`,function(o){return i.dragStarted.emit(o)})(`dragEnded`,function(o){return i._dragEnded(o)})(`keyup`,function(o){return i._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return i._handleCalendarBodyKeydown(o)}),bl()()),n&2&&(rI(3),dw(i._weekdays()),rI(4),Fh(`label`,i._monthLabel())(`rows`,i._weeks())(`todayValue`,i._todayDate())(`startValue`,i._rangeStart())(`endValue`,i._rangeEnd())(`comparisonStart`,i._comparisonRangeStart())(`comparisonEnd`,i._comparisonRangeEnd())(`previewStart`,i._previewStart())(`previewEnd`,i._previewEnd())(`isRange`,i._isRange())(`labelMinRequiredCells`,3)(`activeCell`,i._dateAdapter.getDate(i.activeDate)-1)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName))},dependencies:[J],encapsulation:2})})()}return r})();var A=24;var st=4;var ea=(()=>{class r{_changeDetectorRef=m(cj);_dateAdapter=m(v,{optional:!0});_dir=m(IT,{optional:!0});_rerenderSubscription=B.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),oa(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new we;yearSelected=new we;activeDateChange=new we;_matCalendarBody;_years=kn([]);_todayYear=kn(0);_selectedYear=kn(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ey(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let n=0,i=[];n<A;n++)i.push(t+n),i.length==st&&(a.push(i.map(c=>this._createCellForYear(c))),i=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),n=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-st);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,st);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,A-le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-A*10:-A);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?A*10:A);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),n=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new pe(e,a,a,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof x){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||r)};static ɵcmp=PD({type:r,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,a){if(t&1&&Qh(J,5),t&2){let n;Sw(n=Aw())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(Vi(0,`table`,0)(1,`thead`,1)(2,`tr`),jh(3,`th`,2),bl()(),Vi(4,`tbody`,3),Wh(`selectedValueChange`,function(i){return a._yearSelected(i)})(`activeDateChange`,function(i){return a._updateActiveDate(i)})(`keyup`,function(i){return a._handleCalendarBodyKeyup(i)})(`keydown`,function(i){return a._handleCalendarBodyKeydown(i)}),bl()()),t&2&&(rI(4),Fh(`rows`,a._years())(`todayValue`,a._todayYear())(`startValue`,a._selectedYear())(`endValue`,a._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._getActiveCell()))},dependencies:[J],encapsulation:2})}return r})();function oa(r,d,e,t,a){let n=r.getYear(d),i=r.getYear(e),c=sa(r,t,a);return Math.floor((n-c)/A)===Math.floor((i-c)/A)}function le(r,d,e,t){return ba(r.getYear(d)-sa(r,e,t),A)}function sa(r,d,e){let t=0;return e?t=r.getYear(e)-A+1:d&&(t=r.getYear(d)),t}function ba(r,d){return(r%d+d)%d}var ta=(()=>{class r{_changeDetectorRef=m(cj);_dateFormats=m(Y,{optional:!0});_dateAdapter=m(v,{optional:!0});_dir=m(IT,{optional:!0});_rerenderSubscription=B.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new we;monthSelected=new we;activeDateChange=new we;_matCalendarBody;_months=kn([]);_yearLabel=kn(``);_todayMonth=kn(null);_selectedMonth=kn(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ey(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let n=this._getDateFromMonth(t);this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),i=this.dateClass?this.dateClass(a,`year`):void 0;return new pe(e,t.toLocaleUpperCase(),n,this._shouldEnableMonth(e),i)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let n=a;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>n}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<n}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof x?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||r)};static ɵcmp=PD({type:r,selectors:[[`mat-year-view`]],viewQuery:function(t,a){if(t&1&&Qh(J,5),t&2){let n;Sw(n=Aw())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(Vi(0,`table`,0)(1,`thead`,1)(2,`tr`),jh(3,`th`,2),bl()(),Vi(4,`tbody`,3),Wh(`selectedValueChange`,function(i){return a._monthSelected(i)})(`activeDateChange`,function(i){return a._updateActiveDate(i)})(`keyup`,function(i){return a._handleCalendarBodyKeyup(i)})(`keydown`,function(i){return a._handleCalendarBodyKeydown(i)}),bl()()),t&2&&(rI(4),Fh(`label`,a._yearLabel())(`rows`,a._months())(`todayValue`,a._todayMonth())(`startValue`,a._selectedMonth())(`endValue`,a._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._dateAdapter.getMonth(a.activeDate)))},dependencies:[J],encapsulation:2})}return r})();var da=(()=>{class r{_intl=m(ee);calendar=m(dt);_dateAdapter=m(v,{optional:!0});_dateFormats=m(Y,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){m(nt$1).load(Te);let e=m(cj);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-A))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:A))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):oa(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-le(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+A-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1))]}_periodButtonLabelId=m(In).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){return PD({type:r,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:[`*`],decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(a,n){a&1&&(Mw(),Vi(0,`div`,0)(1,`div`,1)(2,`span`,2),tb(3),bl(),Vi(4,`button`,3),Wh(`click`,function(){return n.currentPeriodClicked()}),Vi(5,`span`,4),tb(6),bl(),Sd(),Vi(7,`svg`,5),jh(8,`polygon`,6),bl()(),Ad(),jh(9,`div`,7),Nw(10),Vi(11,`button`,8),Wh(`click`,function(){return n.previousClicked()}),Sd(),Vi(12,`svg`,9),jh(13,`path`,10),bl()(),Ad(),Vi(14,`button`,11),Wh(`click`,function(){return n.nextClicked()}),Sd(),Vi(15,`svg`,9),jh(16,`path`,12),bl()()()()),a&2&&(rI(2),Fh(`id`,n._periodButtonLabelId),rI(),ag(n.periodButtonDescription),rI(),Dl(`aria-label`,n.periodButtonLabel)(`aria-describedby`,n._periodButtonLabelId),rI(2),ag(n.periodButtonText),rI(),eg(`mat-calendar-invert`,n.calendar.currentView!==`month`),rI(4),Fh(`disabled`,!n.previousEnabled())(`matTooltip`,n.prevButtonLabel),Dl(`aria-label`,n.prevButtonLabel),rI(3),Fh(`disabled`,!n.nextEnabled())(`matTooltip`,n.nextButtonLabel),Dl(`aria-label`,n.nextButtonLabel))},dependencies:[Rm,Pr,ye],encapsulation:2})})()}return r})();var dt=(()=>{class r{_dateAdapter=m(v,{optional:!0});_dateFormats=m(Y,{optional:!0});_changeDetectorRef=m(cj);_elementRef=m(zr);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new we;yearSelected=new we;monthSelected=new we;viewChanged=new we(!0);_userSelection=new we;_userDragDrop=new we;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new K;constructor(){this._intlChanges=m(ee).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new _t(this.headerComponent||da),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=t||a||e.dateFilter;if(n&&!n.firstChange){let i=this._getCurrentViewComponent();i&&(this._elementRef.nativeElement.contains(_n())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),i._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof x||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){function e(i,c){}function t(i,c){if(i&1){let o=yw();Vi(0,`mat-month-view`,4),fg(`activeDateChange`,function(s){vd(o);let m=Cw();return sb(m.activeDate,s)||(m.activeDate=s),Ed(s)}),Wh(`_userSelection`,function(s){vd(o);let m=Cw();return Ed(m._dateSelected(s))})(`dragStarted`,function(s){vd(o);let m=Cw();return Ed(m._dragStarted(s))})(`dragEnded`,function(s){vd(o);let m=Cw();return Ed(m._dragEnded(s))}),bl()}if(i&2){let o=Cw();dg(`activeDate`,o.activeDate),Fh(`selected`,o.selected)(`dateFilter`,o.dateFilter)(`maxDate`,o.maxDate)(`minDate`,o.minDate)(`dateClass`,o.dateClass)(`comparisonStart`,o.comparisonStart)(`comparisonEnd`,o.comparisonEnd)(`startDateAccessibleName`,o.startDateAccessibleName)(`endDateAccessibleName`,o.endDateAccessibleName)(`activeDrag`,o._activeDrag)}}function a(i,c){if(i&1){let o=yw();Vi(0,`mat-year-view`,5),fg(`activeDateChange`,function(s){vd(o);let m=Cw();return sb(m.activeDate,s)||(m.activeDate=s),Ed(s)}),Wh(`monthSelected`,function(s){vd(o);let m=Cw();return Ed(m._monthSelectedInYearView(s))})(`selectedChange`,function(s){vd(o);let m=Cw();return Ed(m._goToDateInView(s,`month`))}),bl()}if(i&2){let o=Cw();dg(`activeDate`,o.activeDate),Fh(`selected`,o.selected)(`dateFilter`,o.dateFilter)(`maxDate`,o.maxDate)(`minDate`,o.minDate)(`dateClass`,o.dateClass)}}function n(i,c){if(i&1){let o=yw();Vi(0,`mat-multi-year-view`,6),fg(`activeDateChange`,function(s){vd(o);let m=Cw();return sb(m.activeDate,s)||(m.activeDate=s),Ed(s)}),Wh(`yearSelected`,function(s){vd(o);let m=Cw();return Ed(m._yearSelectedInMultiYearView(s))})(`selectedChange`,function(s){vd(o);let m=Cw();return Ed(m._goToDateInView(s,`year`))}),bl()}if(i&2){let o=Cw();dg(`activeDate`,o.activeDate),Fh(`selected`,o.selected)(`dateFilter`,o.dateFilter)(`maxDate`,o.maxDate)(`minDate`,o.minDate)(`dateClass`,o.dateClass)}}return PD({type:r,selectors:[[`mat-calendar`]],viewQuery:function(c,o){if(c&1&&Qh(Jt,5)(ta,5)(ea,5),c&2){let p;Sw(p=Aw())&&(o.monthView=p.first),Sw(p=Aw())&&(o.yearView=p.first),Sw(p=Aw())&&(o.multiYearView=p.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[yg([ra]),ov],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(c,o){if(c&1&&(Rh(0,e,0,0,`ng-template`,0),Vi(1,`div`,1),iw(2,t,1,11,`mat-month-view`,2)(3,a,1,6,`mat-year-view`,3)(4,n,1,6,`mat-multi-year-view`,3),bl()),c&2){let p;Fh(`cdkPortalOutlet`,o._calendarHeaderPortal),rI(2),aw((p=o.currentView)===`month`?2:p===`year`?3:p===`multi-year`?4:-1)}},dependencies:[Gn,cr,Jt,ta,ea],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

button.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return r})();var fa=new M(`mat-datepicker-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=m(ue$1);return()=>bt(r)}});var la=(()=>{class r{_elementRef=m(zr);_animationsDisabled=It();_changeDetectorRef=m(cj);_globalModel=m(ue);_dateAdapter=m(v);_ngZone=m(me);_rangeSelectionStrategy=m(ia,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new K;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(m(nt$1).load(Te),this._closeButtonText=m(ee).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=m(wc);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,n=t instanceof x;if(n&&this._rangeSelectionStrategy){let i=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(i,this)}else a&&(n||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){function e(t,a){}return PD({type:r,selectors:[[`mat-datepicker-content`]],viewQuery:function(a,n){if(a&1&&Qh(dt,5),a&2){let i;Sw(i=Aw())&&(n._calendar=i.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(a,n){a&2&&(Ww(n.color?`mat-`+n.color:``),eg(`mat-datepicker-content-touch`,n.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!n._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(a,n){a&1&&(Vi(0,`div`,0)(1,`mat-calendar`,1),Wh(`yearSelected`,function(c){return n.datepicker._selectYear(c)})(`monthSelected`,function(c){return n.datepicker._selectMonth(c)})(`viewChanged`,function(c){return n.datepicker._viewChanged(c)})(`_userSelection`,function(c){return n._handleUserSelection(c)})(`_userDragDrop`,function(c){return n._handleUserDragDrop(c)}),bl(),Rh(2,e,0,0,`ng-template`,2),Vi(3,`button`,3),Wh(`focus`,function(){return n._closeButtonFocused=!0})(`blur`,function(){return n._closeButtonFocused=!1})(`click`,function(){return n.datepicker.close()}),tb(4),bl()()),a&2&&(eg(`mat-datepicker-content-container-with-custom-header`,n.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,n._actionsPortal),Dl(`aria-modal`,!0)(`aria-labelledby`,n._dialogLabelId??void 0),rI(),Ww(n.datepicker.panelClass),Fh(`id`,n.datepicker.id)(`startAt`,n.datepicker.startAt)(`startView`,n.datepicker.startView)(`minDate`,n.datepicker._getMinDate())(`maxDate`,n.datepicker._getMaxDate())(`dateFilter`,n.datepicker._getDateFilter())(`headerComponent`,n.datepicker.calendarHeaderComponent)(`selected`,n._getSelected())(`dateClass`,n.datepicker.dateClass)(`comparisonStart`,n.comparisonStart)(`comparisonEnd`,n.comparisonEnd)(`startDateAccessibleName`,n.startDateAccessibleName)(`endDateAccessibleName`,n.endDateAccessibleName),rI(),Fh(`cdkPortalOutlet`,n._actionsPortal),rI(),eg(`cdk-visually-hidden`,!n._closeButtonFocused),Fh(`color`,n.color||`primary`),rI(),ag(n._closeButtonText))},dependencies:[Sr,dt,Gn,Rm],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})})()}return r})();var aa=(()=>{class r{_injector=m(ue$1);_viewContainerRef=m(Xi);_dateAdapter=m(v,{optional:!0});_dir=m(IT,{optional:!0});_model=m(ue);_animationsDisabled=It();_scrollStrategy=m(fa);_inputStateChanges=B.EMPTY;_document=m(Pe);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition=`start`;yPosition=`below`;restoreFocus=!0;yearSelected=new we;monthSelected=new we;viewChanged=new we(!0);dateClass;openedStream=new we;closedStream=new we;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Vu(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=m(In).getId(`mat-datepicker-`);_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new K;_changeDetectorRef=m(cj);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof Zt$1&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=_n(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus==`function`,t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:n}=this._componentRef;a._animationDone.pipe(As(1)).subscribe(()=>{let i=this._document.activeElement;e&&(!i||i===this._document.activeElement||n.nativeElement.contains(i))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new _t(la,this._viewContainerRef),a=this._overlayRef=Ct(this._injector,new yt({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?`cdk-overlay-dark-backdrop`:`mat-overlay-transparent-backdrop`,this._backdropHarnessClass],direction:this._dir||`ltr`,scrollStrategy:e?Ci(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?`dialog`:`popup`}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(n=>{n&&n.preventDefault(),this.close()}),a.keydownEvents().subscribe(n=>{let i=n.keyCode;(i===38||i===40||i===37||i===39||i===33||i===34)&&n.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||FE(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Ei(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=wt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(`.mat-datepicker-content`).withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition===`end`?`end`:`start`,a=t===`start`?`end`:`start`,n=this.yPosition===`above`?`bottom`:`top`,i=n===`top`?`bottom`:`top`;return e.withPositions([{originX:t,originY:i,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:i}])}_getCloseStream(e){let t=[`ctrlKey`,`shiftKey`,`metaKey`];return Um(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(at$1(a=>a.keyCode===27&&!Mo(a)||this.datepickerInput&&Mo(a,`altKey`)&&a.keyCode===38&&t.every(n=>!Mo(a,n)))))}static ɵfac=function(t){return new(t||r)};static ɵdir=_h({type:r,inputs:{calendarHeaderComponent:`calendarHeaderComponent`,startAt:`startAt`,startView:`startView`,color:`color`,touchUi:[2,`touchUi`,`touchUi`,uj],disabled:[2,`disabled`,`disabled`,uj],xPosition:`xPosition`,yPosition:`yPosition`,restoreFocus:[2,`restoreFocus`,`restoreFocus`,uj],dateClass:`dateClass`,panelClass:`panelClass`,opened:[2,`opened`,`opened`,uj]},outputs:{yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,openedStream:`opened`,closedStream:`closed`},features:[ov]})}return r})();var vn=(()=>{class r extends aa{static ɵfac=(()=>{let e;return function(a){return(e||(e=bv(r)))(a||r)}})();static ɵcmp=PD({type:r,selectors:[[`mat-datepicker`]],exportAs:[`matDatepicker`],features:[yg([ra,{provide:aa,useExisting:r}]),Sh],decls:0,vars:0,template:function(t,a){},encapsulation:2})}return r})();var Q=class{target;targetElement;value=null;constructor(d,e){this.target=d,this.targetElement=e,this.value=this.target.value}};var ya=(()=>{class r{_elementRef=m(zr);_dateAdapter=m(v,{optional:!0});_dateFormats=m(Y,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new we;dateInput=new we;stateChanges=new K;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=B.EMPTY;_localeSubscription=B.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new Q(this,this._elementRef.nativeElement)),this.dateChange.emit(new Q(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){va(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){Mo(e,`altKey`)&&e.keyCode===40&&[`ctrlKey`,`shiftKey`,`metaKey`].every(n=>!Mo(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,n=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let i=!this._dateAdapter.sameDate(n,this.value);!n||i?this._cvaOnChange(n):t&&!this.value&&this._cvaOnChange(n),!i&&a!==this._lastValueValid&&this._validatorOnChange(),i&&(this._assignValue(n),this.dateInput.emit(new Q(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Q(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):``}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static ɵfac=function(t){return new(t||r)};static ɵdir=_h({type:r,inputs:{value:`value`,disabled:[2,`disabled`,`disabled`,uj]},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[ov]})}return r})();function va(r,d){let e=Object.keys(r);for(let t of e){let{previousValue:a,currentValue:n}=r[t];if(d.isDateInstance(a)&&d.isDateInstance(n)){if(!d.sameDate(a,n))return!0}else return!0}return!1}var Da={provide:P,useExisting:Wo(()=>ca),multi:!0};var Ca={provide:M$1,useExisting:Wo(()=>ca),multi:!0};var ca=(()=>{class r extends ya{_formField=m(mt,{optional:!0});_closedSubscription=B.EMPTY;_openedSubscription=B.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=kn(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Oe.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute(`aria-labelledby`)}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static ɵfac=function(t){return new(t||r)};static ɵdir=_h({type:r,selectors:[[`input`,`matDatepicker`,``]],hostAttrs:[1,`mat-datepicker-input`],hostVars:6,hostBindings:function(t,a){t&1&&Wh(`input`,function(i){return a._onInput(i)})(`change`,function(){return a._onChange()})(`blur`,function(){return a._onBlur()})(`keydown`,function(i){return a._onKeydown(i)}),t&2&&(Uh(`disabled`,a.disabled),Dl(`aria-haspopup`,a._datepicker?`dialog`:null)(`aria-owns`,a._ariaOwns())(`min`,a.min?a._dateAdapter.toIso8601(a.min):null)(`max`,a.max?a._dateAdapter.toIso8601(a.max):null)(`data-mat-calendar`,a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:`matDatepicker`,min:`min`,max:`max`,dateFilter:[0,`matDatepickerFilter`,`dateFilter`]},exportAs:[`matDatepickerInput`],features:[yg([Da,Ca,{provide:Y$2,useExisting:r}]),Sh]})}return r})();var wa=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵdir=_h({type:r,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return r})();var ka=(()=>{class r{_intl=m(ee);_changeDetectorRef=m(cj);_stateChanges=B.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=m(new bg(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Ns(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Ns(),a=this.datepicker?Um(this.datepicker.openedStream,this.datepicker.closedStream):Ns();this._stateChanges.unsubscribe(),this._stateChanges=Um(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[`button`],t=[[[``,`matDatepickerToggleIcon`,``]]],a=[`[matDatepickerToggleIcon]`];function n(i,c){i&1&&(Sd(),Vi(0,`svg`,2),jh(1,`path`,3),bl())}return PD({type:r,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(c,o,p){if(c&1&&zh(p,wa,5),c&2){let s;Sw(s=Aw())&&(o._customIcon=s.first)}},viewQuery:function(c,o){if(c&1&&Qh(e,5),c&2){let p;Sw(p=Aw())&&(o._button=p.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(c,o){c&1&&Wh(`click`,function(s){return o._open(s)}),c&2&&(Dl(`tabindex`,null)(`data-mat-calendar`,o.datepicker?o.datepicker.id:null),eg(`mat-datepicker-toggle-active`,o.datepicker&&o.datepicker.opened)(`mat-accent`,o.datepicker&&o.datepicker.color===`accent`)(`mat-warn`,o.datepicker&&o.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,uj],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[ov],ngContentSelectors:a,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(c,o){c&1&&(Mw(t),Vi(0,`button`,1,0),iw(2,n,2,0,`svg`,2),Nw(3),bl()),c&2&&(Fh(`tabIndex`,o.disabled?-1:o.tabIndex)(`disabled`,o.disabled)(`disableRipple`,o.disableRipple),Dl(`aria-haspopup`,o.datepicker?`dialog`:null)(`aria-label`,o.ariaLabel||o._intl.openCalendarLabel)(`aria-expanded`,o.datepicker?o.datepicker.opened:null),rI(2),aw(o._customIcon?-1:2))},dependencies:[Pr],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})})()}return r})();var Dn=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=Ji({type:r});static ɵinj=yr({providers:[ee],imports:[Pm,ve,Cr,ui,la,ka,da,uV,ft]})}return r})();var Ma=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var Aa=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function pt(r,d){let e=Array(r);for(let t=0;t<r;t++)e[t]=d(t);return e}var Sa=(()=>{class r$1 extends v{_matDateLocale=m(et,{optional:!0});constructor(){super();let e=m(et,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return pt(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return pt(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return pt(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let n=this._createDateWithOverflow(e,t,a);return n.getMonth(),n}today(){return new Date}parse(e,t){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let a=new Intl.DateTimeFormat(this.locale,s(r({},t),{timeZone:`utc`}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(Ma.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,n){let i=this.clone(e);return i.setHours(t,a,n,0),i}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let n=this._parseTimeString(a);if(n===null){let i=a.replace(/[^0-9:(AM|PM)]/gi,``).trim();i.length>0&&(n=this._parseTimeString(i))}return n||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let n=new Date;return n.setFullYear(e,t,a),n.setHours(0,0,0,0),n}_2digit(e){return(`00`+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(Aa);if(t){let a=parseInt(t[1]),n=parseInt(t[2]),i=t[3]==null?void 0:parseInt(t[3]),c=t[4];if(a===12?a=c===`AM`?0:a:c===`PM`&&(a+=12),ut(a,0,23)&&ut(n,0,59)&&(i==null||ut(i,0,59)))return this.setTime(this.today(),a,n,i||0)}return null}static ɵfac=function(t){return new(t||r$1)};static ɵprov=Fe({token:r$1,factory:r$1.ɵfac,autoProvided:!1})}return r$1})();function ut(r,d,e){return!isNaN(r)&&r>=d&&r<=e}var xa={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};var xn=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=Ji({type:r});static ɵinj=yr({providers:[Ia()]})}return r})();function Ia(r=xa){return[{provide:v,useClass:Sa},{provide:Y,useValue:r}]}export{vn as a,ka as i,Ia as n,xn as o,ca as r,Dn as t};
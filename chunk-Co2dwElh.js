import {v as ve,n as ne}from'./chunk-D4mcw3PJ.js';import'./chunk-DorNt6WZ.js';import {f}from'./chunk-DTg2RBS5.js';import {q as qe,O as Oe}from'./chunk-BirVUhg-.js';import {E}from'./chunk-Dnc7AG_N.js';import {h as hn,r as rw,an as s,ao as r,a as gE,x as xi,y as yt,N as Ni,b as xn,ap as jt$1,aq as Fe,ar as Qt$1,S as Sh,l as Ih,m as zs,f as ci,i as ui,K as pi,V as kD,X as Fc,as as uh,Y as Up,ag as _I,ad as $E,R as jE,a0 as Lv,at as lh,ah as SI,a3 as Lp,af as UE,a1 as VE,au as kc,av as mo,aw as ro,ax as So,ay as y0,D as f$1,az as ty,aA as Np,aB as iD,aC as sD,aD as ph,aE as Pf,aF as om,ac as Fp,ab as Pc,_ as Xp,aG as zp,aH as cD,aI as lD,aJ as Gp,a7 as ZE,a8 as bu,aK as LD,aa as _u,a9 as rD,a2 as sh,aL as ah,T,aM as S,aN as Cp,aO as Dr,aP as be,aQ as P,aR as $e,aS as Wn,aT as j,aU as ue,aV as Io,aW as or,aX as bt,aY as he,aZ as Ig}from'./main-JQB2RYXI.js';var jt=["*"],Vt=`.mdc-list {
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
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
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
  height: var(--mat-list-list-item-two-line-container-height, 64px);
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
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
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
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
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
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
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
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
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
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
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
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
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
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Nt=["unscopedContent"],Qt=["text"],Ht=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Wt=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Gt=new S("ListOption"),qt=(()=>{class i{_elementRef=T(Dr);static \u0275fac=function(e){return new(e||i)};static \u0275dir=Cp({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Ut=(()=>{class i{_elementRef=T(Dr);static \u0275fac=function(e){return new(e||i)};static \u0275dir=Cp({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),Kt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=Cp({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Dt=(()=>{class i{_listOption=T(Gt,{optional:true});_isAlignedAtStart(){return !this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Cp({type:i,hostVars:4,hostBindings:function(e,n){e&2&&Xp("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart());}})}return i})(),Xt=(()=>{class i extends Dt{static \u0275fac=(()=>{let t;return function(n){return (t||(t=ty(i)))(n||i)}})();static \u0275dir=Cp({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Np]})}return i})(),Zt=(()=>{class i extends Dt{static \u0275fac=(()=>{let t;return function(n){return (t||(t=ty(i)))(n||i)}})();static \u0275dir=Cp({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Np]})}return i})(),Yt=new S("MAT_LIST_CONFIG"),N=(()=>{class i{_isNonInteractive=true;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Pf(t);}_disableRipple=false;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Pf(t));}_disabled=hn(false);_defaultOptions=T(Yt,{optional:true});static \u0275fac=function(e){return new(e||i)};static \u0275dir=Cp({type:i,hostVars:1,hostBindings:function(e,n){e&2&&Pc("aria-disabled",n.disabled);},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),$t=(()=>{class i{_elementRef=T(Dr);_ngZone=T(be);_listBase=T(N,{optional:true});_platform=T(P);_hostElement;_isButtonElement;_noopAnimations=$e();_avatars;_icons;set lines(t){this._explicitLines=Wn(t,null),this._updateItemLines(false);}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Pf(t);}_disableRipple=false;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Pf(t));}_disabled=hn(false);_subscriptions=new j;_rippleRenderer=null;_hasUnscopedTextContent=false;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){T(ue).load(Io);let t=T(or,{optional:true});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button");}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(true);}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents();}_hasIconOrAvatar(){return !!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new bt(this,this._ngZone,this._hostElement,this._platform,T(he)),this._rippleRenderer.setupTriggerEvents(this._hostElement);}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ig(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(false)));});}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o);}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text");}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()));}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Cp({type:i,contentQueries:function(e,n,o){if(e&1&&Gp(o,Xt,4)(o,Zt,4),e&2){let r;cD(r=lD())&&(n._avatars=r),cD(r=lD())&&(n._icons=r);}},hostVars:4,hostBindings:function(e,n){e&2&&(Pc("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),Xp("mdc-list-item--disabled",n.disabled));},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Et=(()=>{class i extends N{static \u0275fac=(()=>{let t;return function(n){return (t||(t=ty(i)))(n||i)}})();static \u0275cmp=gE({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ph([{provide:N,useExisting:i}]),Np],ngContentSelectors:jt,decls:1,vars:0,template:function(e,n){e&1&&(iD(),sD(0));},styles:[Vt],encapsulation:2})}return i})(),Ft=(()=>{class i extends $t{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Pf(t);}_activated=false;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return (t||(t=ty(i)))(n||i)}})();static \u0275cmp=gE({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,o){if(e&1&&Gp(o,Ut,5)(o,qt,5)(o,Kt,5),e&2){let r;cD(r=lD())&&(n._lines=r),cD(r=lD())&&(n._titles=r),cD(r=lD())&&(n._meta=r);}},viewQuery:function(e,n){if(e&1&&zp(Nt,5)(Qt,5),e&2){let o;cD(o=lD())&&(n._unscopedContent=o.first),cD(o=lD())&&(n._itemText=o.first);}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(Pc("aria-current",n._getAriaCurrent()),Xp("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations));},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Np],ngContentSelectors:Wt,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(iD(Ht),sD(0),pi(1,"span",1),sD(2,1),sD(3,2),pi(4,"span",2,0),Up("cdkObserveContent",function(){return n._updateItemLines(true)}),sD(6,3),Fc()(),sD(7,4),sD(8,5),Fp(9,"div",3));},dependencies:[om],encapsulation:2})}return i})();var Pt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=kc({type:i});static \u0275inj=mo({imports:[ro,So,f,y0,f$1]})}return i})();var ti=(i,a)=>a.id;function ii(i,a){if(i&1){let t=ZE();pi(0,"mat-list-item",7)(1,"mat-checkbox",8),uh("ngModelChange",function(n){let o=bu(t).$implicit;return LD(o.completed,n)||(o.completed=n),_u(n)}),Up("change",function(){let n=bu(t).$implicit,o=rD();return _u(o.updateTodo(n))}),Fc(),_I(),pi(2,"span",9),kD(3),Fc(),pi(4,"button",10),Up("click",function(){let n=bu(t).$implicit,o=rD();return _u(o.deleteTodo(n.id))}),pi(5,"mat-icon"),kD(6,"delete"),Fc()()();}if(i&2){let t=a.$implicit;Xp("completed",t.completed),Lv(),lh("ngModel",t.completed),SI(),Lv(2),sh(t.text);}}function ei(i,a){if(i&1){let t=ZE();pi(0,"button",12),Up("click",function(){bu(t);let n=rD(2);return _u(n.clearCompleted())}),kD(1,"Clear completed"),Fc();}}function ni(i,a){if(i&1){let t=ZE();pi(0,"div",6)(1,"span"),kD(2),Fc(),pi(3,"div",11)(4,"button",12),Up("click",function(){bu(t);let n=rD();return _u(n.setFilter("all"))}),kD(5,"All"),Fc(),pi(6,"button",12),Up("click",function(){bu(t);let n=rD();return _u(n.setFilter("active"))}),kD(7,"Active"),Fc(),pi(8,"button",12),Up("click",function(){bu(t);let n=rD();return _u(n.setFilter("completed"))}),kD(9,"Completed"),Fc()(),jE(10,ei,2,0,"button",13),Fc();}if(i&2){let t=rD();Lv(2),ah("",t.activeTodosCount()," ",t.activeTodosCount()===1?"item":"items"," left"),Lv(2),Xp("active",t.filter()==="all"),Lv(2),Xp("active",t.filter()==="active"),Lv(2),Xp("active",t.filter()==="completed"),Lv(2),VE(t.completedTodosCount()>0?10:-1);}}var Rt=class i{nextId=1;todos=hn([]);newTodoText="";filter=hn("all");filteredTodos=rw(()=>{let a=this.todos();switch(this.filter()){case "active":return a.filter(e=>!e.completed);case "completed":return a.filter(e=>e.completed);default:return a}});activeTodosCount=rw(()=>this.todos().filter(a=>!a.completed).length);completedTodosCount=rw(()=>this.todos().filter(a=>a.completed).length);addTodo(){let a=this.newTodoText.trim();a&&(this.todos.update(t=>[...t,{id:this.nextId++,text:a,completed:false}]),this.newTodoText="");}updateTodo(a){this.todos.update(t=>t.map(e=>e.id===a.id?s(r({},e),{completed:a.completed}):e));}deleteTodo(a){this.todos.update(t=>t.filter(e=>e.id!==a));}setFilter(a){this.filter.set(a);}clearCompleted(){this.todos.update(a=>a.filter(t=>!t.completed));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=gE({type:i,selectors:[["app-todo"]],decls:12,vars:3,consts:[[1,"todo-container"],[1,"todo-input"],["matInput","","placeholder","Add a new task",3,"ngModelChange","keyup.enter","ngModel"],["mat-icon-button","","matSuffix","",3,"click","disabled"],[1,"todo-list"],[1,"todo-item",3,"completed"],[1,"todo-footer"],[1,"todo-item"],[3,"ngModelChange","change","ngModel"],[1,"todo-text"],["mat-icon-button","",3,"click"],[1,"filter-buttons"],["mat-button","",3,"click"],["mat-button",""]],template:function(t,e){t&1&&(pi(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),kD(3,"What needs to be done?"),Fc(),pi(4,"input",2),uh("ngModelChange",function(o){return LD(e.newTodoText,o)||(e.newTodoText=o),o}),Up("keyup.enter",function(){return e.addTodo()}),Fc(),_I(),pi(5,"button",3),Up("click",function(){return e.addTodo()}),pi(6,"mat-icon"),kD(7,"add"),Fc()()(),pi(8,"mat-list",4),$E(9,ii,7,4,"mat-list-item",5,ti),Fc(),jE(11,ni,11,9,"div",6),Fc()),t&2&&(Lv(4),lh("ngModel",e.newTodoText),SI(),Lv(),Lp("disabled",!e.newTodoText.trim()),Lv(4),UE(e.filteredTodos()),Lv(2),VE(e.todos().length>0?11:-1));},dependencies:[xi,yt,Ni,xn,qe,Oe,jt$1,Fe,Qt$1,Sh,Ih,zs,Pt,Et,Ft,ve,ne,ci,ui,E],styles:[".todo-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}.todo-input[_ngcontent-%COMP%]{width:100%;margin-bottom:var(--spacing-md)}.todo-list[_ngcontent-%COMP%]{background:var(--glass-bg);-webkit-backdrop-filter:blur(var(--blur-sm));backdrop-filter:blur(var(--blur-sm));border-radius:var(--radius-md);padding:0;margin-bottom:var(--spacing-md)}.todo-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:var(--spacing-sm) var(--spacing-md);border-bottom:1px solid var(--glass-border)}.todo-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.todo-item.completed[_ngcontent-%COMP%]   .todo-text[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.5}.todo-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin-right:1rem}.todo-item[_ngcontent-%COMP%]   .todo-text[_ngcontent-%COMP%]{flex:1}.todo-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-md);background:var(--glass-bg);-webkit-backdrop-filter:blur(var(--blur-sm));backdrop-filter:blur(var(--blur-sm));border-radius:var(--radius-md)}.todo-footer[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]{display:flex;gap:var(--spacing-sm)}.todo-footer[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:var(--glass-inset)!important}"]})};export{Rt as TodoComponent};
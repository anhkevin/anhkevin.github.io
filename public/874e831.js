(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{314:function(t,o,n){t.exports={}},321:function(t,o,n){"use strict";n(314)},328:function(t,o,n){"use strict";n.r(o);var e={name:"ImagePopup",props:{imageSrc:{type:String,required:!0}},data:function(){return{showModal:!1}},methods:{openModal:function(){this.showModal=!0},closeModal:function(){this.showModal=!1}}},l=(n(321),n(55)),component=Object(l.a)(e,(function(){var t=this,o=t._self._c;return o("div",[t.showModal?o("div",{staticClass:"modal-overlay",on:{click:function(o){return o.target!==o.currentTarget?null:t.closeModal.apply(null,arguments)}}},[o("div",{staticClass:"modal-content"},[o("img",{attrs:{src:t.imageSrc,alt:"Popup Image"}}),t._v(" "),o("button",{staticClass:"close-button",on:{click:t.closeModal}},[t._v("Close")])])]):t._e()])}),[],!1,null,"4b609ebd",null);o.default=component.exports}}]);
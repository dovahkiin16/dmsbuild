(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e353c28"],{"0798":function(e,t,r){"use strict";var a=r("5530"),n=r("ade3"),o=(r("caad"),r("0c18"),r("10d2")),s=r("afdd"),i=r("9d26"),c=r("f2e7"),l=r("7560"),u=r("2b0e"),m=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=r("58df"),v=r("d9bd");t["a"]=Object(d["a"])(o["a"],c["a"],m).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(s["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(i["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(v["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,r){},"2e5d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("Breadcrumbs",{attrs:{title:"Inventory Logs Forms (CSM)",icon:"mdi-needle",items:e.breadcrumbsItems}}),r("DashboardTitle"),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("IncomingVaccinesForm")],1),r("v-col",{attrs:{cols:"6"}},[r("OutgoingVaccinesForm")],1)],1)],1)},n=[],o=r("a6a3"),s=r("bfc7"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-card-title",[e._v(" Incoming Vaccines Form ")]),r("v-card-text",[r("v-alert",{attrs:{border:"left",type:e.alert.type,color:e.alert.color,dismissible:""},model:{value:e.alert.isOpen,callback:function(t){e.$set(e.alert,"isOpen",t)},expression:"alert.isOpen"}},[e._v(" "+e._s(e.alert.message)+" ")]),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Storage Unit",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{attrs:{label:"Storage Unit*","item-text":"name","item-value":"id",items:e.storageUnits,disabled:e.isSaving,"error-messages":a},model:{value:e.form.storage_unit_id,callback:function(t){e.$set(e.form,"storage_unit_id",t)},expression:"form.storage_unit_id"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Amount",rules:"required|numeric"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{label:"Amount*",disabled:e.isSaving,"error-messages":a},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Manufacturer",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{attrs:{label:"Manufacturer*",items:e.manufacturers,disabled:e.isSaving,"error-messages":a},model:{value:e.form.manufacturer,callback:function(t){e.$set(e.form,"manufacturer",t)},expression:"form.manufacturer"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Expiration",rules:"required|logs_expiration_date"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{label:"Expiration*",disabled:e.isSaving,"error-messages":a},model:{value:e.form.expiration,callback:function(t){e.$set(e.form,"expiration",t)},expression:"form.expiration"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Serial",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{label:"Serial*",disabled:e.isSaving,"error-messages":a},model:{value:e.form.serial,callback:function(t){e.$set(e.form,"serial",t)},expression:"form.serial"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Lot Number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{label:"Lot Number*",disabled:e.isSaving,"error-messages":a},model:{value:e.form.lot_no,callback:function(t){e.$set(e.form,"lot_no",t)},expression:"form.lot_no"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Notes",disabled:e.isSaving},model:{value:e.form.comments,callback:function(t){e.$set(e.form,"comments",t)},expression:"form.comments"}})],1)],1),r("span",{staticClass:"text-caption"},[e._v(" * Field is required ")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",disabled:e.isSaving},on:{click:e.clear}},[e._v(" Clear ")]),r("v-btn",{attrs:{color:"success",disabled:a||e.isSaving,loading:e.isSaving},on:{click:e.save}},[e._v(" Save ")])],1)]}}])})],1)},c=[],l=r("5530"),u=r("1da1"),m=(r("96cf"),r("7bb1")),d=r("bc3a"),v=r.n(d),f=r("cf78"),p={name:"CsmIncomingVaccinesForm",components:{ValidationProvider:m["b"],ValidationObserver:m["a"]},data:function(){return{alert:{isOpen:!1,type:"success",message:"Incoming vaccine log saved",color:"success"},form:{storage_unit_id:void 0,amount:void 0,comments:"",expiration:"",manufacturer:"",serial:"",lot_no:""},isSaving:!1,storageUnits:[],manufacturers:f["a"]}},mounted:function(){this.fetchStorageUnits()},methods:{save:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSaving=!0,r="http://172.1.1.2:3000",a=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(a)}},t.prev=4,o=Object(l["a"])(Object(l["a"])({},e.form),{},{transaction_type:"incoming"}),t.next=8,v.a.post("".concat(r,"/vaccine-logs"),o,n);case 8:e.form.serial="",e.form.lot_no="",e.$refs.observer.reset(),e.successAlert(),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),401===(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.status)?(localStorage.removeItem("dms-token"),e.$router.push("/csm/login").catch()):400===t.t0.response.status?(e.alert.type="error",e.alert.message=t.t0.response.data.message,e.alert.isOpen=!0):e.somethingWentWrongAlert();case 17:e.isSaving=!1;case 18:case"end":return t.stop()}}),t,null,[[4,14]])})))()},fetchStorageUnits:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="http://172.1.1.2:3000",a=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(a)}},t.prev=3,t.next=6,v.a.get("".concat(r,"/storage-units"),n);case 6:o=t.sent,s=o.data,e.storageUnits=s,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](3),401===(null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i?void 0:i.status)&&(localStorage.removeItem("dms-token"),e.$router.push("/csm/login").catch()),e.somethingWentWrongAlert();case 15:case"end":return t.stop()}}),t,null,[[3,11]])})))()},somethingWentWrongAlert:function(){this.alert.type="warning",this.alert.color="warning",this.alert.message="Something went wrong. Please contact your IT admin.",this.alert.isOpen=!0},successAlert:function(){this.alert.type="success",this.alert.color="success",this.alert.message="Form successfully submitted",this.alert.isOpen=!0},clear:function(){this.form.storage_unit_id=void 0,this.form.amount=void 0,this.form.manufacturer="",this.form.expiration="",this.form.serial="",this.form.lot_no="",this.form.comments=""}}},h=p,g=r("2877"),b=r("6544"),_=r.n(b),x=r("0798"),S=r("8336"),k=r("b0af"),y=r("99d9"),w=r("62ad"),$=r("0fd9"),O=r("b974"),A=r("2fa4"),C=r("8654"),V=Object(g["a"])(h,i,c,!1,null,null,null),B=V.exports;_()(V,{VAlert:x["a"],VBtn:S["a"],VCard:k["a"],VCardActions:y["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:w["a"],VRow:$["a"],VSelect:O["a"],VSpacer:A["a"],VTextField:C["a"]});var I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-card-title",[e._v(" Outgoing Vaccines Form ")]),r("v-card-text",[r("v-alert",{attrs:{border:"left",type:e.alert.type,color:e.alert.color,dismissible:""},model:{value:e.alert.isOpen,callback:function(t){e.$set(e.alert,"isOpen",t)},expression:"alert.isOpen"}},[e._v(" "+e._s(e.alert.message)+" ")]),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Receiving team",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{attrs:{label:"Receiving team*","item-text":"name","item-value":"id",items:e.teams,disabled:e.isSaving,"error-messages":a},model:{value:e.form.team_id,callback:function(t){e.$set(e.form,"team_id",t)},expression:"form.team_id"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Storage Unit",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{attrs:{label:"Storage Unit*","item-text":"name","item-value":"id",items:e.storageUnits,disabled:e.isSaving,"error-messages":a},on:{change:e.storageUpdate},model:{value:e.form.storage_unit_id,callback:function(t){e.$set(e.form,"storage_unit_id",t)},expression:"form.storage_unit_id"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Manufacturer",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{attrs:{label:"Manufacturer*",items:e.manufacturers,disabled:e.isSaving||!e.form.storage_unit_id,"error-messages":a},on:{change:e.mfrUpdate},model:{value:e.form.manufacturer,callback:function(t){e.$set(e.form,"manufacturer",t)},expression:"form.manufacturer"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Serial",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{attrs:{label:"Serial*",items:e.serials,disabled:e.isSaving||!e.form.manufacturer,"error-messages":a},on:{change:e.serialUpdate},model:{value:e.form.serial,callback:function(t){e.$set(e.form,"serial",t)},expression:"form.serial"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Lot Number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{attrs:{label:"Lot Number*",items:e.lots,disabled:e.isSaving||!e.form.serial,"error-messages":a},on:{change:e.lotUpdate},model:{value:e.form.lot_no,callback:function(t){e.$set(e.form,"lot_no",t)},expression:"form.lot_no"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Amount",rules:"required|min_value:1|max_value:"+e.vaccineAmount},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{label:"Amount*",disabled:e.isSaving||!e.vaccineAmount,"error-messages":a,hint:e.vaccineAmount?"Available "+e.vaccineAmount:""},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Notes",disabled:e.isSaving},model:{value:e.form.comments,callback:function(t){e.$set(e.form,"comments",t)},expression:"form.comments"}})],1)],1),r("span",{staticClass:"text-caption"},[e._v(" * Field is required ")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",disabled:e.isSaving},on:{click:e.clear}},[e._v(" Clear ")]),r("v-btn",{attrs:{color:"success",disabled:a||e.isSaving,loading:e.isSaving},on:{click:e.save}},[e._v(" Save ")])],1)]}}])})],1)},R=[],U=(r("99af"),r("d81d"),r("4de4"),{name:"CsmOutgoingVaccinesForm",components:{ValidationProvider:m["b"],ValidationObserver:m["a"]},data:function(){return{alert:{isOpen:!1,type:"success",message:"Outgoing vaccine log saved",color:"success"},form:{team_id:void 0,storage_unit_id:void 0,manufacturer:"",serial:"",lot_no:"",amount:void 0,comments:""},isSaving:!1,teams:[],storageUnits:[],manufacturers:[],serials:[],lots:[],vaccines:[],vaccineAmount:0}},mounted:function(){this.fetchStorageUnits(),this.fetchTeams()},methods:{save:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSaving=!0,r="http://172.1.1.2:3000",a=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(a)}},t.prev=4,o=Object(l["a"])(Object(l["a"])({},e.form),{},{transaction_type:"outgoing"}),t.next=8,v.a.post("".concat(r,"/vaccine-logs"),o,n);case 8:e.successAlert(),e.clear(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),401===(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.status)?(localStorage.removeItem("dms-token"),e.$router.push("/csm/login").catch()):400===t.t0.response.status?(e.alert.type="error",e.alert.message=t.t0.response.data.message,e.alert.isOpen=!0):e.somethingWentWrongAlert();case 15:e.isSaving=!1;case 16:case"end":return t.stop()}}),t,null,[[4,12]])})))()},fetchStorageUnits:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="http://172.1.1.2:3000",a=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(a)}},t.prev=3,t.next=6,v.a.get("".concat(r,"/storage-units"),n);case 6:o=t.sent,s=o.data,e.storageUnits=s,t.next=18;break;case 11:if(t.prev=11,t.t0=t["catch"](3),401!==(null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i?void 0:i.status)){t.next=17;break}return localStorage.removeItem("dms-token"),e.$router.push("/csm/login").catch(),t.abrupt("return");case 17:e.somethingWentWrongAlert();case 18:case"end":return t.stop()}}),t,null,[[3,11]])})))()},fetchTeams:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="http://172.1.1.2:3000",a=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(a)}},t.prev=3,t.next=6,v.a.get("".concat(r,"/teams"),n);case 6:o=t.sent,e.teams=o.data,t.next=17;break;case 10:if(t.prev=10,t.t0=t["catch"](3),401!==(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.status)){t.next=16;break}return localStorage.removeItem("dms-token"),e.$router.push("/admin/login"),t.abrupt("return");case 16:e.somethingWentWrongAlert();case 17:case"end":return t.stop()}}),t,null,[[3,10]])})))()},somethingWentWrongAlert:function(){this.alert.type="warning",this.alert.message="Something went wrong. Please contact your IT admin.",this.alert.isOpen=!0},successAlert:function(){this.alert.type="success",this.alert.message="Form successfully submitted",this.alert.isOpen=!0},clear:function(){this.form.team_id=void 0,this.form.storage_unit_id=void 0,this.form.amount=void 0,this.form.manufacturer="",this.form.serial="",this.form.lot_no="",this.form.comments="",this.$refs.observer.reset()},storageUpdate:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.form.storage_unit_id){t.next=2;break}return t.abrupt("return");case 2:return r="http://172.1.1.2:3000",a=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(a)}},t.prev=5,t.next=8,v.a.get("".concat(r,"/vaccine-logs/storage-units/").concat(e.form.storage_unit_id),n);case 8:o=t.sent,s=o.data,e.form.serial="",e.form.lot_no="",e.form.manufacturer="",e.manufacturers=s.map((function(e){return e.manufacturer})),e.vaccines=s,t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](5),401===(null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i?void 0:i.status)&&(localStorage.removeItem("dms-token"),e.$router.push("/csm/login").catch()),e.somethingWentWrongAlert();case 21:case"end":return t.stop()}}),t,null,[[5,17]])})))()},mfrUpdate:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.form.manufacturer,e.form.manufacturer){t.next=3;break}return t.abrupt("return");case 3:e.serials=e.vaccines.filter((function(e){return e.manufacturer===r})).map((function(e){return e.serial})),e.form.serial="",e.form.lot_no="";case 6:case"end":return t.stop()}}),t)})))()},serialUpdate:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.form,a=r.manufacturer,n=r.serial,e.form.serial){t.next=3;break}return t.abrupt("return");case 3:e.lots=e.vaccines.filter((function(e){return e.manufacturer===a&&e.serial===n})).map((function(e){return e.lot_no}));case 4:case"end":return t.stop()}}),t)})))()},lotUpdate:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s,i,c,l,u,m,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.form,a=r.storage_unit_id,n=r.manufacturer,o=r.serial,s=r.lot_no,e.form.lot_no){t.next=3;break}return t.abrupt("return");case 3:return e.lots=e.vaccines.filter((function(e){return e.manufacturer===n})).filter((function(e){return e.serial===o})).filter((function(e){return e.lot_no===s})).map((function(e){return e.lot_no})),i="http://172.1.1.2:3000",c=localStorage.getItem("dms-token"),l={headers:{Authorization:"Bearer ".concat(c)}},t.prev=7,t.next=10,v.a.get("".concat(i,"/vaccine-logs/storage-units/").concat(a,"/manufacturers/").concat(n,"/serials/").concat(o,"/lots/").concat(s),l);case 10:u=t.sent,m=u.data,e.vaccineAmount=m.vaccine.amount,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](7),401===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)&&(localStorage.removeItem("dms-token"),e.$router.push("/csm/login").catch()),e.somethingWentWrongAlert();case 19:case"end":return t.stop()}}),t,null,[[7,15]])})))()}}}),j=U,W=Object(g["a"])(j,I,R,!1,null,null,null),T=W.exports;_()(W,{VAlert:x["a"],VBtn:S["a"],VCard:k["a"],VCardActions:y["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:w["a"],VRow:$["a"],VSelect:O["a"],VSpacer:A["a"],VTextField:C["a"]});var F={name:"CsmNewInventoryLogs",components:{DashboardTitle:s["a"],Breadcrumbs:o["a"],IncomingVaccinesForm:B,OutgoingVaccinesForm:T},data:function(){return{breadcrumbsItems:[{text:"Home",disabled:!1},{text:"Inventory Logs Forms",disabled:!1}]}}},q=F,E=r("a523"),L=Object(g["a"])(q,a,n,!1,null,null,null);t["default"]=L.exports;_()(L,{VCol:w["a"],VContainer:E["a"],VRow:$["a"]})},cf78:function(e,t,r){"use strict";t["a"]=["Sinovac-CoronaVac","Sinopharm BBIBP","Bharat Biotech","Anhui Zhifei Longcom","Novavax","Clover Biopharmaceuticals","Johnson & Johnson/Janssen","Gamaleya, Sputnik V","Oxford, AstraZeneca","BioNTech, Pfizer","Moderna"]}}]);
//# sourceMappingURL=chunk-4e353c28.01753012.js.map
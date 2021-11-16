(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc462"],{"4cda":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("Breadcrumbs",{attrs:{title:"Vaccine Inventory Logs (CSM)",icon:"mdi-post",items:e.breadcrumbsItems}}),a("DashboardTitle"),a("VaccineLogsTable")],1)},n=[],s=a("a6a3"),i=a("bfc7"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto"},[a("v-card-title",[a("v-row",[a("v-col",[e._v(" Vaccine inventory logs ")]),a("v-spacer"),a("v-col",[a("v-select",{attrs:{label:"Storage filter",items:e.storages},model:{value:e.storageFilter,callback:function(t){e.storageFilter=t},expression:"storageFilter"}})],1),a("v-col",[a("v-select",{attrs:{label:"Manufacturer filter",items:e.mfrs},model:{value:e.mfrFilter,callback:function(t){e.mfrFilter=t},expression:"mfrFilter"}})],1),a("v-col",{staticClass:"ml-2"},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search (Serial/Lot)","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),a("v-data-table",{attrs:{headers:e.headers,items:e.filteredItems,loading:e.isLoadingItems,search:e.search,"item-key":"id"},scopedSlots:e._u([{key:"item.transaction_type",fn:function(t){var a=t.item;return[e._v(" "+e._s("incoming"===a.transaction_type?"Incoming":"Outgoing")+" ")]}},{key:"item.created_at",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatDate(a.created_at))+" ")]}}])})],1)},c=[],l=a("2909"),u=a("1da1"),m=(a("96cf"),a("159b"),a("caad"),a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("bc3a")),d=a.n(m),f=a("b166"),v={name:"CsmVaccineLogsTable",data:function(){return{headers:[{text:"Transaction",value:"transaction_type",filterable:!1},{text:"Amount",value:"amount",filterable:!1},{text:"Manufacturer",value:"manufacturer",filterable:!1},{text:"Storage",value:"storage_unit_name",filterable:!1},{text:"Serial",value:"serial"},{text:"Lot number",value:"lot_no"},{text:"Notes",value:"comments",filterable:!0},{text:"Timestamp",value:"created_at",filterable:!1}],alert:{isOpen:!1,type:"warning",message:"Something went wrong. Please contact your IT.",color:"warning"},items:[],storages:[],isLoadingItems:!1,search:"",mfrFilter:"All",storageFilter:"Any"}},created:function(){this.fetchVaccineLogs(),this.fetchStorageUnits()},computed:{mfrs:function(){var e=[];return this.items.forEach((function(t){e.includes(t.manufacturer)||e.push(t.manufacturer)})),console.log(this.items),["All"].concat(e)},filteredItems:function(){var e=this,t=this.items;return"All"!==this.mfrFilter&&(t=t.filter((function(t){return t.manufacturer===e.mfrFilter}))),"Any"!==this.storageFilter&&(t=t.filter((function(t){return t.storage_unit_name===e.storageFilter}))),t}},methods:{fetchStorageUnits:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="http://172.1.1.2:3000",r=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(r)}},t.prev=3,t.next=6,d.a.get("".concat(a,"/storage-units"),n);case 6:s=t.sent,i=s.data,o=i.map((function(e){return e.name})),e.storages=["Any"].concat(Object(l["a"])(o)),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](3),401===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)&&(localStorage.removeItem("dms-token"),e.$router.push("/csm/login")),e.alert.isOpen=!0;case 16:case"end":return t.stop()}}),t,null,[[3,12]])})))()},fetchVaccineLogs:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoadingItems=!0,a="http://172.1.1.2:3000",r=localStorage.getItem("dms-token"),n={headers:{Authorization:"Bearer ".concat(r)}},t.prev=4,t.next=7,d.a.get("".concat(a,"/vaccine-logs"),n);case 7:s=t.sent,i=s.data,e.items=i,e.isLoadingItems=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](4),401===(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o?void 0:o.status)&&(localStorage.removeItem("dms-token"),e.$router.push("/csm/login")),e.alert.isOpen=!0;case 17:case"end":return t.stop()}}),t,null,[[4,13]])})))()},formatDate:function(e){return Object(f["a"])(new Date(e),"PPpp")}}},g=v,h=a("2877"),p=a("6544"),b=a.n(p),x=a("b0af"),_=a("99d9"),w=a("62ad"),k=a("8fea"),I=a("0fd9"),V=a("b974"),y=a("2fa4"),S=a("8654"),L=Object(h["a"])(g,o,c,!1,null,null,null),F=L.exports;b()(L,{VCard:x["a"],VCardTitle:_["d"],VCol:w["a"],VDataTable:k["a"],VRow:I["a"],VSelect:V["a"],VSpacer:y["a"],VTextField:S["a"]});var T={name:"CsmInventoryLogs",components:{DashboardTitle:i["a"],Breadcrumbs:s["a"],VaccineLogsTable:F},data:function(){return{breadcrumbsItems:[{text:"Home",disabled:!1},{text:"Vaccine Inventory Logs",disabled:!1}]}}},O=T,A=a("a523"),C=Object(h["a"])(O,r,n,!1,null,null,null);t["default"]=C.exports;b()(C,{VContainer:A["a"]})}}]);
//# sourceMappingURL=chunk-2d0cc462.e2caffcb.js.map
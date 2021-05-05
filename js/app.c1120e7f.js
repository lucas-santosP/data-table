(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/data-table/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e79":function(e,t,n){"use strict";n("373b")},"2b75":function(e,t,n){},"2d51":function(e,t,n){"use strict";n("e6cc")},"373b":function(e,t,n){},"3a58":function(e,t,n){"use strict";n("a604")},"3c45":function(e,t,n){"use strict";n("f4f2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-transition",appear:""}},[n("div",{staticClass:"page-wrapper"},[n("h1",{staticClass:"page-title"},[e._v("Users List")]),n("main",[n("SectionAddUser"),n("TableUsers")],1)])])},s=[],o=n("5530"),i=n("2f62"),l=(n("b0c0"),n("359c")),c=n.n(l),u=n("ec26");c.a.locale="pt_BR";for(var d=[],p=10,f=0;f<p;f++){var m={id:Object(u["a"])(),name:c.a.name.findName(),phone:c.a.phone.phoneNumber("(##) #####-####")};d.push(m)}var h=d,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"wrapper"},[n("VButton",{on:{click:function(t){return e.$refs.modalAddUser.open()}}},[n("font-awesome-icon",{attrs:{icon:["fas","plus"]}}),e._v(" Add new user ")],1),n("VButton",{attrs:{variant:"red"},on:{click:e.clearAllUsers}},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}}),e._v(" Delete all users ")],1),n("VModal",{ref:"modalAddUser",attrs:{title:"Add new user"}},[n("form",{staticClass:"form-modal-add",on:{submit:function(t){return t.preventDefault(),e.submitFormAdd(t)}}},[n("VInput",{attrs:{label:"Name",id:"addName",placeholder:"Ex: Lucas Santos"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}}),n("VInputTel",{attrs:{label:"Phone",id:"addPhone",placeholder:"Ex: (##) #####-####"},model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",t)},expression:"userForm.phone"}}),n("div",{staticClass:"modal-btn-group"},[n("VButton",{attrs:{variant:"gray"},on:{click:e.closeModalAddUser}},[e._v("Cancel")]),n("VButton",{attrs:{type:"submit"}},[e._v("Add")])],1)],1)])],1)},v=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:"v-button "+e.variant,attrs:{type:e.type},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},y=[],U={name:"VButton",props:{type:{type:String,default:"button"},variant:{type:String,default:""}}},g=U,w=(n("fa3c"),n("2877")),O=Object(w["a"])(g,_,y,!1,null,"b0198a1c",null),x=O.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-wrapper"},[n("table",{staticClass:"table"},[n("thead",[n("tr",e._l(e.theadCols,(function(t){return n("th",{key:t.text,style:{width:t.width,textAlign:t.align}},[e._v(" "+e._s(t.text)+" ")])})),0)]),n("tbody",[e._t("tbody")],2)])])},j=[],V={name:"VTable",props:{theadCols:{type:Array,required:!0}}},k=V,F=(n("3a58"),Object(w["a"])(k,C,j,!1,null,"148b5ae8",null)),S=F.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-transition"}},[e.isOpen?n("div",{staticClass:"wrapper"},[n("div",{staticClass:"modal-overlay",on:{click:function(t){return t.stopPropagation(),e.close(t)}}}),n("div",{staticClass:"modal",on:{click:function(e){e.stopPropagation()}}},[n("header",[n("h2",{staticClass:"title"},[e._v(e._s(e.title))]),n("button",{staticClass:"btn-close",on:{click:e.close}},[n("font-awesome-icon",{staticClass:"times-icon",attrs:{icon:["fas","times"]}})],1)]),n("main",[e._t("default")],2)])]):e._e()])},A=[],P={name:"VModal",props:{title:{type:String,default:""}},data:function(){return{isOpen:!1}},methods:{open:function(){this.isOpen=!0,document.activeElement.blur()},close:function(){this.isOpen=!1}}},E=P,M=(n("f35b"),Object(w["a"])(E,$,A,!1,null,"14ddcb50",null)),B=M.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-row"},[e.label?n("label",{staticClass:"label",attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),n("div",{staticClass:"input-wrapper"},[n("input",{ref:"input",attrs:{id:e.id,type:"text",placeholder:e.placeholder,autocomplete:e.autocomplete},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])])},T=[],D={name:"VInput",props:{id:{type:String,required:!0},value:{type:String,required:!0},label:{type:String,default:""},placeholder:{type:String,default:""},autocomplete:{type:String,default:"off"}},methods:{focus:function(){this.$refs.input.focus()}}},N=D,q=(n("3c45"),Object(w["a"])(N,I,T,!1,null,"72e7a8ca",null)),J=q.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-row"},[e.label?n("label",{staticClass:"label",attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],attrs:{id:e.id,type:"tel",placeholder:e.placeholder,autocomplete:e.autocomplete},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])])},R=[],z=n("3a60"),G={name:"VInputTel",directives:{mask:z["mask"]},props:{id:{type:String,required:!0},value:{type:String,required:!0},label:{type:String,default:""},placeholder:{type:String,default:""},autocomplete:{type:String,default:"off"}}},H=G,K=(n("1e79"),Object(w["a"])(H,L,R,!1,null,"6cd864b6",null)),Q=K.exports,W={name:"SectionAddUser",components:{VModal:B,VButton:x,VInput:J,VInputTel:Q},data:function(){return{userForm:{name:"",phone:""}}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["addUser","setUsers"])),{},{submitFormAdd:function(){try{this.addUser(this.userForm),this.closeModalAddUser()}catch(e){alert(e.message)}},closeModalAddUser:function(){this.$refs.modalAddUser.close(),this.clearUserForm()},clearUserForm:function(){this.userForm={name:"",phone:""}},clearAllUsers:function(){this.setUsers([])}})},X=W,Y=(n("85c9"),Object(w["a"])(X,b,v,!1,null,"5cea65c0",null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("VTable",{staticClass:"v-table",attrs:{theadCols:e.theadCols},scopedSlots:e._u([{key:"tbody",fn:function(){return[e.users.length?e._e():n("tr",[n("td",{attrs:{colspan:"3"}},[e._v("No users found")])]),e._l(e.users,(function(t){return n("tr",{key:t.id,class:{"row-highlight":e.checkPhonePrefix(t.phone)}},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.phone))]),n("td",{staticClass:"td-actions"},[n("VButton",{attrs:{variant:"green"},on:{click:function(n){return e.openModalUpdateUser(t)}}},[n("font-awesome-icon",{attrs:{icon:["fas","edit"]}}),e._v(" Edit ")],1),n("VButton",{attrs:{variant:"red"},on:{click:function(n){return e.openModalDeleteUser(t)}}},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}}),e._v(" Delete ")],1)],1)])}))]},proxy:!0}])}),n("VModal",{ref:"modalUpdateUser",attrs:{title:"Edit user"}},[n("form",{staticClass:"form-modal-edit",on:{submit:function(t){return t.preventDefault(),e.submitFormEdit(t)}}},[n("VInput",{attrs:{label:"Name",id:"editName"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}}),n("VInputTel",{attrs:{label:"Phone",id:"editPhone"},model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",t)},expression:"userForm.phone"}}),n("div",{staticClass:"modal-btn-group"},[n("VButton",{attrs:{variant:"gray"},on:{click:function(t){return e.$refs.modalUpdateUser.close()}}},[e._v(" Cancel ")]),n("VButton",{attrs:{type:"submit"}},[e._v("Save")])],1)],1)]),n("VModal",{ref:"modalDeleteUser",attrs:{title:"Delete user"}},[n("div",{staticClass:"div-modal-delete"},[n("p",[e._v(" Are you sure you want to delete the user "),n("b",[e._v(e._s(e.userForm.name))]),e._v(" ? ")]),n("div",{staticClass:"modal-btn-group"},[n("VButton",{attrs:{variant:"gray"},on:{click:function(t){return e.$refs.modalDeleteUser.close()}}},[e._v(" Cancel ")]),n("VButton",{attrs:{variant:"red"},on:{click:e.confirmDeleteUser}},[e._v("Confirm")])],1)])])],1)},te=[],ne=(n("caad"),n("2532"),{name:"TableUsers",components:{VTable:S,VModal:B,VInput:J,VInputTel:Q,VButton:x},data:function(){return{userForm:{name:"",phone:""},theadCols:[{text:"Name",width:"200px"},{text:"Phone",width:"150px"},{text:"Actions",align:"center",width:"175px"}]}},computed:Object(o["a"])({},Object(i["c"])(["users"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["editUser","deleteUser"])),{},{openModalUpdateUser:function(e){this.userForm=Object(o["a"])({},e),this.$refs.modalUpdateUser.open()},openModalDeleteUser:function(e){this.userForm=Object(o["a"])({},e),this.$refs.modalDeleteUser.open()},submitFormEdit:function(){try{this.editUser(this.userForm),this.$refs.modalUpdateUser.close(),this.userForm={name:"",phone:""}}catch(e){alert(e.message)}},confirmDeleteUser:function(){try{this.deleteUser(this.userForm),this.$refs.modalDeleteUser.close(),this.userForm={name:"",phone:""}}catch(e){alert(e.message)}},checkPhonePrefix:function(e){return e.includes("(11)")}})}),re=ne,ae=(n("2d51"),Object(w["a"])(re,ee,te,!1,null,"72a2a66b",null)),se=ae.exports,oe={name:"App",components:{SectionAddUser:Z,TableUsers:se},created:function(){this.setUsers(h)},methods:Object(o["a"])({},Object(i["b"])(["setUsers"]))},ie=oe,le=(n("cdc5"),Object(w["a"])(ie,a,s,!1,null,"f6933832",null)),ce=le.exports,ue=(n("c860"),n("ecee")),de=n("c074"),pe=n("ad3d");n("ac1f"),n("1276"),n("53194"),n("c740"),n("4de4");function fe(e){var t=e.name.replace(/\s\s+/g," ").split(" ");if(!t[1])throw new Error("Invalid name, required at least 2 words");if(t[0].length<3||t[1].length<3)throw new Error("Invalid name, each word required at least 3 characters");if(15!==e.phone.length)throw new Error("Invalid phone number format")}r["a"].use(i["a"]);var me=new i["a"].Store({state:{users:[]},mutations:{setUsers:function(e,t){e.users=t},addUser:function(e,t){fe(t),e.users.unshift(Object(o["a"])(Object(o["a"])({},t),{},{id:Object(u["a"])()}))},editUser:function(e,t){fe(t);var n=e.users.findIndex((function(e){return e.id===t.id}));if(-1===n)throw new Error("Unable to update, invalid user received");r["a"].set(e.users,n,Object(o["a"])({},t))},deleteUser:function(e,t){e.users=e.users.filter((function(e){return e.id!==t.id}))}}}),he=me;ue["c"].add([de["c"],de["b"],de["d"],de["a"]]),r["a"].component("font-awesome-icon",pe["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ce)},store:he}).$mount("#app")},"85c9":function(e,t,n){"use strict";n("dabc")},a604:function(e,t,n){},c860:function(e,t,n){},cdc5:function(e,t,n){"use strict";n("2b75")},dabc:function(e,t,n){},e6cc:function(e,t,n){},f35b:function(e,t,n){"use strict";n("f666")},f4f2:function(e,t,n){},f640:function(e,t,n){},f666:function(e,t,n){},fa3c:function(e,t,n){"use strict";n("f640")}});
//# sourceMappingURL=app.c1120e7f.js.map
"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[529],{7883:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:t.pages.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},r=[],i={props:{pages:{type:Object}},methods:{changePage(t){this.$emit("update",t)}}},o=i,n=a(1001),l=(0,n.Z)(o,s,r,!1,null,null,null),c=l.exports},3529:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"orders mt-3"},[e("table",{staticClass:"table table-striped"},[t._m(0),e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.created.timestamp))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",{staticClass:"text-center"},[t._v(t._s(a.payment))]),e("td",{staticClass:"text-right"},[t._v(t._s(Math.round(a.amount)))]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:a.id},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var s=a.paid,r=e.target,i=!!r.checked;if(Array.isArray(s)){var o=null,n=t._i(s,o);r.checked?n<0&&t.$set(a,"paid",s.concat([o])):n>-1&&t.$set(a,"paid",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(a,"paid",i)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("span",{staticClass:"text-success font-weight-bolder"},[t._v("已付款")]):e("span",[t._v("尚未付款")])])])]),e("td",{attrs:{scope:"row"}},[t._v(t._s(a.created.datetime))]),e("td",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.aaa",modifiers:{aaa:!0}}],on:{click:function(e){return t.getOrder_List(a.id)}}},[t._v("查看詳細資料")])],1)])})),0)]),e("b-modal",{attrs:{id:"aaa",centered:"",title:"商品內容","hide-footer":""}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"name"}},[t._v("收件人")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order_user.name,expression:"order_user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.order_user.name},on:{input:function(e){e.target.composing||t.$set(t.order_user,"name",e.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"tel"}},[t._v("收件人手機")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order_user.tel,expression:"order_user.tel"}],staticClass:"form-control",attrs:{type:"text",id:"tel"},domProps:{value:t.order_user.tel},on:{input:function(e){e.target.composing||t.$set(t.order_user,"tel",e.target.value)}}})])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("寄送地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order_user.address,expression:"order_user.address"}],staticClass:"form-control",attrs:{type:"text",id:"address"},domProps:{value:t.order_user.address},on:{input:function(e){e.target.composing||t.$set(t.order_user,"address",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("電子郵件")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order_user.email,expression:"order_user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.order_user.email},on:{input:function(e){e.target.composing||t.$set(t.order_user,"email",e.target.value)}}})]),e("hr"),e("button",{staticClass:"btn btn-block",attrs:{type:"submit"}},[t._v("儲存變更")])]),t.orders[0]?e("pagination",{attrs:{pages:t.pagination},on:{update:t.getOeders}}):t._e()],1)},r=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("訂單編號")]),e("th",{attrs:{scope:"col"}},[t._v("購買項目")]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("付款方式")]),e("th",{staticClass:"text-right",attrs:{scope:"col"}},[t._v("應付金額")]),e("th",{attrs:{scope:"col"}},[t._v("是否付款")]),e("th",{attrs:{scope:"col"}},[t._v("下單時間")])])])}],i=a(7883),o={name:"MyOrders",data(){return{orders:[],pagination:{},isLoading:!1,order_user:[]}},components:{pagination:i.Z},created(){this.getOeders()},methods:{getOeders(t=1){this.isLoading=!0;const e=`https://course-ec-api.hexschool.io/api/d25970ec-b87b-44f6-9785-9bdbbcd8dc56/ec/orders?page=${t}`;this.$http.get(e).then((t=>{this.orders=t.data.data,this.pagination=t.data.meta.pagination}))},getOrder_List(t){const e=`https://course-ec-api.hexschool.io/api/d25970ec-b87b-44f6-9785-9bdbbcd8dc56/ec/orders/${t}`;this.$http.get(e).then((t=>{this.order_user=t.data.data.user}))}}},n=o,l=a(1001),c=(0,l.Z)(n,s,r,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=529.0eb78171.js.map
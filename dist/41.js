/*! NutUI v1.2.7 Tue Jun 05 2018 15:50:15 GMT+0800 (CST) */
webpackJsonpnutui([41],{1008:function(t,v,_){(t.exports=_(2)()).push([t.i,"",""])},1108:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"吸边拖拽组件。",showQrCode:!0}}),t._v(" "),_("h5",[t._v("基本用法")]),t._v(" "),_("h6",[t._v("可控制移动方向，垂直移动(h)，水平移动(v)")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),_("h6",[t._v("可设置距离边界的值来限制拖动范围")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),_("h6",[t._v("可设置是否吸边")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("isSide")]),t._v(" "),_("td",[t._v("是否吸边")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("direction")]),t._v(" "),_("td",[t._v("移动方向")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v('"h"')]),t._v(" "),_("td",[t._v('"h"/"v"/"n"')])]),t._v(" "),_("tr",[_("td",[t._v("boundary")]),t._v(" "),_("td",[t._v("距边界距离")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("{ \n                  top:20,\n                  left:0,\n                  right:20,\n                  bottom:20\n              }")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("宽")]),t._v(" "),_("td",[t._v("Number,String")]),t._v(" "),_("td",[t._v("50")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("高")]),t._v(" "),_("td",[t._v("Number,String")]),t._v(" "),_("td",[t._v("50")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("opacity")]),t._v(" "),_("td",[t._v("透明度")]),t._v(" "),_("td",[t._v("Number,String")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("unit")]),t._v(" "),_("td",[t._v("距离单位")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v('"px"')]),t._v(" "),_("td",[t._v('"px"/"rem"')])]),t._v(" "),_("tr",[_("td",[t._v("zIndex")]),t._v(" "),_("td",[t._v("样式层级")]),t._v(" "),_("td",[t._v("Number,String")]),t._v(" "),_("td",[t._v("11")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("opacity")]),t._v(" "),_("td",[t._v("透明度")]),t._v(" "),_("td",[t._v("Number,String")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("--")])])])])])}]}},1202:function(t,v,_){var e=_(1008);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("877f36f4",e,!0,{})},855:function(t,v,_){var e=_(1)(_(948),_(1108),function(t){_(1202)},"data-v-3dd570a7",null);t.exports=e.exports},948:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{direction:"h",boundary:{top:200,bottom:20,left:0,right:20},demo1:'<nut-drag \ndirection="h"\n></nut-drag>',demo2:'<nut-drag \n:boundary="{top: 20, bottom: 20}"\n></nut-drag>',demo3:'<nut-drag \n:isSide="true"\n></nut-drag>'}},methods:{changeMove:function(t,v){var _=v.currentTarget,e=_.parentElement.children;this.removeClass(e),_.classList.add("curr"),this.direction=t},changeBoundary:function(t,v){var _=v.currentTarget,e=_.parentElement.children;this.removeClass(e),_.classList.add("curr"),this.boundary="y"==t?{top:20,bottom:20,left:0,right:20}:{top:0,bottom:0,left:0,right:0}},removeClass:function(t){for(var v in t)!0===t.hasOwnProperty(v)&&(t[v].className="button-primary")}}}}});
/*! NutUI v1.2.7 Tue Jun 05 2018 15:50:15 GMT+0800 (CST) */
webpackJsonpnutui([57],{1002:function(t,e,x){(t.exports=x(2)()).push([t.i,"",""])},1101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",[x("nut-demoheader",{attrs:{name:t.$route.name}}),t._v(" "),x("h5",[t._v("示例")]),t._v(" "),x("p",[t._v("默认用法")]),t._v(" "),x("nut-textbox"),t._v(" "),x("p",[t._v("自定义高度:5rem")]),t._v(" "),x("nut-textbox",{attrs:{txtAreaH:5,maxNum:300}}),t._v(" "),x("p",[t._v("自定义提示语")]),t._v(" "),x("nut-textbox",{attrs:{placeText:"请填写详细情况请填写详细情况"}}),t._v(" "),x("p",[t._v("自定义字数限制")]),t._v(" "),x("nut-textbox",{attrs:{maxNum:100}}),t._v(" "),x("p",[t._v("限制字数不可超出")]),t._v(" "),x("nut-textbox",{attrs:{switchMax:!0,maxNum:10,txtAreaH:2,textBgColor:"#efefef"}}),t._v(" "),x("p",[t._v("字数超出报错")]),t._v(" "),x("nut-textbox",{attrs:{maxNum:10,txtAreaH:2},on:{errorFunc:t.overLength}}),t._v(" "),x("p",[t._v("自定义文本框背景色")]),t._v(" "),x("nut-textbox",{attrs:{switchMax:!0,maxNum:10,txtAreaH:2,textBgColor:"#feefef"}}),t._v(" "),x("p",[t._v("不显示字数限制")]),t._v(" "),x("nut-textbox",{attrs:{limitShow:!1,maxNum:10}})],1)},staticRenderFns:[]}},1196:function(t,e,x){var n=x(1002);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);x(3)("7a49f32a",n,!0,{})},838:function(t,e,x){var n=x(1)(x(931),x(1101),function(t){x(1196)},"data-v-32722a99",null);t.exports=n.exports},931:function(t,e,x){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=x(20);(n=o)&&n.__esModule;e.default={data:function(){return{demo1:"<nut-textbox></nut-textbox>",demo2:'<nut-textbox :txtAreaH="100"></nut-textbox>',demo3:"<nut-textbox :placeText='\"请填写详细情况请填写详细情况\"'></nut-textbox>",demo4:'<nut-textbox :maxNum="100"></nut-textbox>',demo5:'<nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="20"></nut-textbox>',demo6:'<nut-textbox :maxNum="10" txtAreaH="20"  @errorFunc="overLength" ></nut-textbox>\nmethods:{\n    overLength(){\n        alert("字数超出");\n    }\n}',demo7:'<nut-textbox \n:switchMax="true" \n:maxNum="10" \n:txtAreaH="20" \ntextBgColor="#feefef">\n</nut-textbox>',demo8:'<nut-textbox \n:limitShow="false"\n:switchMax="true" \n:maxNum="10" >\n</nut-textbox>'}},methods:{overLength:function(){alert("字数超出")}}}}});
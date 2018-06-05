/*! NutUI v1.2.7 Tue Jun 05 2018 15:50:15 GMT+0800 (CST) */
webpackJsonpnutui([66],{1061:function(n,e,t){(n.exports=t(2)()).push([n.i,".demo1-select{border:1px solid #ccc;height:40px;line-height:40px;padding-left:10px;display:block}.demo-select{width:100%}",""])},1161:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("nut-demoheader",{attrs:{name:n.$route.name}}),n._v(" "),t("h5",[n._v("示例")]),n._v(" "),t("p",[n._v("默认用法")]),n._v(" "),t("nut-select",{staticClass:"demo1-select",attrs:{selected:n.demo1.selected,data:n.demo1.data},on:{change:n.demo1Change}},[n._v(n._s(n.demo1.selected))]),n._v(" "),t("p",[n._v("显示内容自定义Slot")]),n._v(" "),t("nut-select",{staticClass:"demo-select",attrs:{selected:n.demo2.selected,data:n.demo2.data},on:{change:n.demo2Change}},[n._t("default",[t("a",{staticClass:"button button-primary"},[n._v(n._s(n.demo2.selected))])])],2),n._v(" "),t("p",[n._v("异步加载")]),n._v(" "),t("nut-select",{staticClass:"demo-select",attrs:{selected:n.demo3.selected,data:n.demo3.data,async:!0},on:{change:n.demo3Change,slideEnd:n.slideEnd}},[n._t("default",[t("a",{staticClass:"button button-primary"},[n._v(n._s(n.demo3.selected))])])],2),n._v(" "),t("div",{attrs:{id:"demo-select"}})],1)},staticRenderFns:[]}},1255:function(n,e,t){var s=t(1061);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(3)("2e6ab8a8",s,!0,{})},828:function(n,e,t){var s=t(1)(t(921),t(1161),function(n){t(1255)},null,null);n.exports=s.exports},921:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:{data:[{n:"北京",s:[{n:"海淀区"},{n:"通州区"}]},{n:"上海",s:[{n:"浦东新区"},{n:"其他区"}]},{n:"河北省",s:[{n:"石家庄市",s:[{n:"城东区"},{n:"城西区"}]},{n:"秦皇岛市"}]},{n:"上海",s:[{n:"浦东新区"},{n:"其他区"}]},{n:"上海",s:[{n:"浦东新区"},{n:"其他区"}]},{n:"上海",s:[{n:"浦东新区"},{n:"其他区"}]},{n:"上海",s:[{n:"浦东新区"},{n:"其他区"}]},{n:"上海",s:[{n:"浦东新区"},{n:"其他区"}]},{n:"上海",s:[{n:"浦东新区"},{n:"其他区"}]}],selected:"河北省-石家庄市-城东区",txt:'<nut-select class="demo1-select" \n                  :selected="demo1.selected" \n                  :data="demo1.data" \n                  @change="demo1Change">{{demo1.selected}}</nut-select>\n                  export default {\n                    methods:{\n                      demo1Change(val) {\n                        this.demo1.selected = val.join(\'-\');\n                      }\n                    }\n                  }'},demo2:{selected:"2018-11",data:[{n:"2017",s:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"},{n:"7"},{n:"8"},{n:"9"},{n:"10"},{n:"11"},{n:"12"}]},{n:"2018",s:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"},{n:"7"},{n:"8"},{n:"9"},{n:"10"},{n:"11"},{n:"12"}]},{n:"2019",s:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"},{n:"7"},{n:"8"},{n:"9"},{n:"10"},{n:"11"},{n:"12"}]},{n:"2020",s:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"},{n:"7"},{n:"8"},{n:"9"},{n:"10"},{n:"11"},{n:"12"}]},{n:"2021",s:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"},{n:"7"},{n:"8"},{n:"9"},{n:"10"},{n:"11"},{n:"12"}]},{n:"2022",s:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"},{n:"7"},{n:"8"},{n:"9"},{n:"10"},{n:"11"},{n:"12"}]},{n:"2023",s:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"},{n:"7"},{n:"8"},{n:"9"},{n:"10"},{n:"11"},{n:"12"}]}],txt:'<nut-select\n        :selected="demo2.selected" \n        :data="demo2.data" \n        @change="demo2Change">\n        <slot><button>{{demo2.selected}}</button></slot>\n        </nut-select>\n        export default {\n          methods:{\n            demo2Change(val) {\n              this.demo2.selected = val.join(\'-\');\n            }\n          }\n        }        \n        '},demo3:{selected:"1",data:[{n:"1"},{n:"2"},{n:"3"},{n:"4"},{n:"5"},{n:"6"}],txt:'\n            <nut-select\n        :selected="demo3.selected" \n        :data="demo3.data"\n        :async = true\n        @change="demo3Change"\n        @slideEnd="slideEnd">\n        <slot><button>{{demo3.selected}}</button></slot>\n        </nut-select>\n        export default {\n          methods:{\n            slideEnd(val, $select) {\n              console.log(val);\n              $select.updateSelect([{"n": parseInt(Math.random()*10)},{"n": parseInt(Math.random()*10)}]);\n            },\n            demo3Change(val) {\n              this.demo3.selected = val.join(\'-\');\n            }\n          }\n        }'}}},methods:{demo1Change:function(n){for(var e=[],t=0;t<n.length;t++)e.push(n[t].n);this.demo1.selected=e.join("-")},demo2Change:function(n){for(var e=[],t=0;t<n.length;t++)e.push(n[t].n);this.demo2.selected=e.join("-")},demo3Change:function(n){for(var e=[],t=0;t<n.length;t++)e.push(n[t].n);this.demo3.selected=e.join("-")},slideEnd:function(n,e){console.log(n),n.length<3&&e.updateSelect([{n:parseInt(10*Math.random())},{n:parseInt(10*Math.random())}])}}}}});
/*! NutUI v1.2.7 Tue Jun 05 2018 15:50:15 GMT+0800 (CST) */
webpackJsonpnutui([98],{1171:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),n("h3",[e._v("示例1")]),e._v(" "),n("nut-timer",{attrs:{timespacer:6e8},on:{"end-timer":e.endTimer1}}),e._v(" "),n("h3",[e._v("示例2")]),e._v(" "),n("nut-timer",{attrs:{timespacer:"600000000",formater:"dd天hh时mm分ss秒",starttime:"2018-06-05 12:30:30",endtime:"2018-06-06 10:13:30"},on:{"end-timer":e.endTimer2}})],1)},staticRenderFns:[]}},839:function(e,t,n){var r=n(1)(n(932),n(1171),null,null,null);e.exports=r.exports},932:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){},methods:{endTimer1:function(){console.log("示例1倒计时结束了！")},endTimer2:function(){console.log("示例2倒计时结束了！")}}}}});
/*! NutUI v1.2.7 Tue Jun 05 2018 15:50:15 GMT+0800 (CST) */
webpackJsonpnutui([89],{1074:function(e,i,n){(e.exports=n(2)()).push([e.i,"",""])},1175:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",[n("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),n("br"),e._v(" "),n("div",[n("span",[e._v("申请地区："+e._s(e.locationName))]),e._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(i){e.showChoose=!0}}},[e._v("点我出现")])]),e._v(" "),n("nut-choose",{attrs:{visibile:e.showChoose,needCache:!0,listData:e.chooseData},on:{"init-choose":e.initChoose,"close-choose":e.closeChoose,"choose-item":e.closeItem}})],1)},staticRenderFns:[]}},1268:function(e,i,n){var o=n(1074);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("48f1e57e",o,!0,{})},804:function(e,i,n){var o=n(1)(n(896),n(1175),function(e){n(1268)},null,null);e.exports=o.exports},896:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{showChoose:!1,loading:!1,chooseData:[],locationName:"",cityId:"",cityName:"",provinceName:"",provinceId:""}},methods:{initChoose:function(){this.chooseData=[{name:"北京",id:1},{name:"上海",id:2},{name:"天津",id:3},{name:"重庆",id:4},{name:"河北",id:5},{name:"山西",id:6},{name:"河南",id:7},{name:"辽宁",id:8},{name:"吉林",id:9},{name:"黑龙江",id:10},{name:"内蒙古",id:11},{name:"江苏",id:12},{name:"山东",id:13},{name:"安徽",id:14},{name:"浙江",id:15},{name:"福建",id:16},{name:"湖北",id:17},{name:"湖南",id:18},{name:"广东",id:19},{name:"广西",id:20},{name:"江西",id:21},{name:"四川",id:22},{name:"海南",id:23},{name:"贵州",id:24},{name:"云南",id:25},{name:"西藏",id:26},{name:"陕西",id:27},{name:"甘肃",id:28},{name:"青海",id:29},{name:"宁夏",id:30},{name:"新疆",id:31},{name:"台湾",id:32}]},closeChoose:function(){this.showChoose=!1,console.log("关闭了弹框")},closeItem:function(e,i){console.log("当前选中的数据:"),console.log(e);1==i&&(this.cityId=e.id,this.cityName=e.name,1==e.id?this.chooseData=[{id:2816,name:"密云区"},{id:72,name:"朝阳区"}]:2==e.id?this.chooseData=[{id:21,name:"浦东新区"},{id:22,name:"徐汇区"},{id:22,name:"长宁"}]:(this.locationName=this.cityName+" "+this.provinceName,this.closeChoose())),2==i&&(this.provinceId=e.id,this.provinceName=e.name,this.locationName=this.cityName+" "+this.provinceName,this.closeChoose())}},mounted:function(){}}}});
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{302:function(e,t,a){},331:function(e,t,a){"use strict";var s=a(302);a.n(s).a},336:function(e,t,a){"use strict";a.r(t);a(80),a(312);var s,l=a(313),i=a(314),n=a.n(i),r={name:"Example",data:function(){return{user:"user",group:"",id:"",width:null,height:null,mode:"",checked:!1,options:[{value:"scale",label:"scale"},{value:"fit",label:"fit"},{value:"cover",label:"cover"},{value:"thumb",label:"thumb"}]}},computed:{params:function(){return this.checked?{width:this.width,height:this.height,method:this.mode}:null}},mounted:function(){this.$message({message:"本应用已经是完全体，只要把pdf打包成zip上传就行，随便怎么打包都会遍历到Orz",type:"success"})},methods:{diyUpload:(s=Object(l.a)(regeneratorRuntime.mark((function e(t){var a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t.file,t.file.name),a.append("user",this.user),a.append("group",this.group),a.append("id",this.id),e.prev=5,e.next=8,n()({method:"post",url:"https://ppap.ltd/service/upload",data:a,headers:{"Content-Type":"multipart/form-data"},responseType:"arraybuffer"});case 8:s=e.sent,this.success(s.data,t.file.name),this.$message({message:"".concat(t.file.name,"成功解析!"),type:"success"}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),this.$message({message:"【".concat(e.t0,"】有问题，【1】不要用360浏览器 【2】是否上传的是zip压缩包？"),type:"error"});case 17:case"end":return e.stop()}}),e,this,[[5,13]])}))),function(e){return s.apply(this,arguments)}),success:function(e,t){var a=new Blob([e]),s=window.URL.createObjectURL(a),l=document.createElement("a");l.style.display="none",l.href=s,l.download=t,document.querySelectorAll("body")[0].appendChild(l),l.click(),l.remove()},progress:function(e,t){t.name=t.name+"->【压缩ing】"},preview:function(e){}}},p=(a(331),a(1)),o=Object(p.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"flexColumn"}},[a("div",{attrs:{id:"handlePic"}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"",data:e.params,"http-request":e.diyUpload,"on-preview":e.preview,"on-progress":e.progress}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("\n        将文件拖到此处，或\n        "),a("em",[e._v("点击上传")])]),e._v(" "),e.checked?a("el-alert",{attrs:{slot:"tip",title:"高级说明",type:"success",description:"通过勾选'高级'传递参数,对图片进行二次处理（拉伸,切割等）","show-icon":""},slot:"tip"}):a("el-alert",{attrs:{slot:"tip",title:"简单说明(上传zip压缩包就行)",type:"success",description:"基于pdf2json&pdfjs开发,使用过程中有任何疑问联系王建丰(IaaS)","show-icon":""},slot:"tip"})],1),e._v(" "),a("div",{staticClass:"wrapper"},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}},[a("template",{slot:"prepend"},[e._v("人名后缀")])],2),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("template",{slot:"prepend"},[e._v("班组(Excel表格)")])],2),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}},[a("template",{slot:"prepend"},[e._v("员工编号(Excel表格)")])],2)],1),e._v(" "),a("el-timeline",[a("el-timeline-item",{attrs:{timestamp:"2020/12/7",placement:"top"}},[a("el-card",[a("h4",[e._v("上线")]),e._v(" "),a("p",[e._v("小王 提交于 2020/12/7")])])],1),e._v(" "),a("el-timeline-item",{attrs:{timestamp:"2020/12/8",placement:"top"}},[a("el-card",[a("h4",[e._v("支持生成Excel")]),e._v(" "),a("p",[e._v("小王 提交于 2020/12/8")])])],1),e._v(" "),a("el-timeline-item",{attrs:{timestamp:"2020/12/10",placement:"top"}},[a("el-card",[a("h4",[e._v("优化文件处理逻辑，更加傻瓜了")]),e._v(" "),a("p",[e._v("小王 提交于 2020/12/10")])])],1),e._v(" "),a("el-timeline-item",{attrs:{timestamp:"2020/12/14",placement:"top"}},[a("el-card",[a("h4",[e._v("校验码缺失的问题修复了")]),e._v(" "),a("p",[e._v("小王 提交于 2020/12/14")])])],1)],1)],1)])}),[],!1,null,null,null);t.default=o.exports}}]);
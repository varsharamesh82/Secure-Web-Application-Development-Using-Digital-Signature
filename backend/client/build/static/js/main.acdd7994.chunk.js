(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(34),s=a.n(r),i=(a(60),a(7)),l=a(8),c=a(10),u=a(9),h=a(17),g=a(3),m=(a(61),a(1)),p=a.n(m),d=a(6),f=a(2),v=a.n(f),b=a(18),E=a(15),x=(a(80),a(5)),y=a.n(x),S={Region:{position:"absolute",border:"1px dashed rgba(0,0,0,0.5)",outline:"1px dashed rgba(255,255,255,0.5)",cursor:"move"},RegionHandleSE:{position:"absolute",bottom:-4,right:-4,width:8,height:8,outline:"1px solid rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.5)",cursor:"se-resize"},RegionHandleSW:{position:"absolute",bottom:-4,left:-4,width:8,height:8,outline:"1px solid rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.5)",cursor:"sw-resize"},RegionHandleNW:{position:"absolute",top:-4,left:-4,width:8,height:8,outline:"1px solid rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.5)",cursor:"nw-resize"},RegionHandleNE:{position:"absolute",top:-4,right:-4,width:8,height:8,outline:"1px solid rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.5)",cursor:"ne-resize"},RegionSelect:{position:"relative",display:"inline-block"}},w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"renderHandles",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{"data-dir":"se",style:S.RegionHandleSE}),o.a.createElement("div",{"data-dir":"sw",style:S.RegionHandleSW}),o.a.createElement("div",{"data-dir":"nw",style:S.RegionHandleNW}),o.a.createElement("div",{"data-dir":"ne",style:S.RegionHandleNE}))}},{key:"render",value:function(){var e={width:this.props.width+"%",height:this.props.height+"%",left:"".concat(this.props.x,"%"),top:"".concat(this.props.y,"%")},t={data:this.props.data,isChanging:this.props.changing,index:this.props.index};return o.a.createElement("div",{style:y()({},S.Region,e,this.props.customStyle,this.props.data.regionStyle),onMouseDown:this.props.onCropStart,onTouchStart:this.props.onCropStart,"data-wrapper":"wrapper"},this.props.handles?this.renderHandles():null,this.props.dataRenderer?this.props.dataRenderer(t):null)}}]),a}(n.Component),C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onComponentMouseTouchDown=n.onComponentMouseTouchDown.bind(Object(E.a)(n)),n.onDocMouseTouchMove=n.onDocMouseTouchMove.bind(Object(E.a)(n)),n.onDocMouseTouchEnd=n.onDocMouseTouchEnd.bind(Object(E.a)(n)),n.onRegionMoveStart=n.onRegionMoveStart.bind(Object(E.a)(n)),n.regionCounter=0,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.onDocMouseTouchMove),document.addEventListener("touchmove",this.onDocMouseTouchMove),document.addEventListener("mouseup",this.onDocMouseTouchEnd),document.addEventListener("touchend",this.onDocMouseTouchEnd),document.addEventListener("touchcancel",this.onDocMouseTouchEnd)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.onDocMouseTouchMove),document.removeEventListener("touchmove",this.onDocMouseTouchMove),document.removeEventListener("mouseup",this.onDocMouseTouchEnd),document.removeEventListener("touchend",this.onDocMouseTouchEnd),document.removeEventListener("touchcancel",this.onDocMouseTouchEnd)}},{key:"getClientPos",value:function(e){var t,a;return e.touches?(t=e.touches[0].pageX,a=e.touches[0].pageY):(t=e.pageX,a=e.pageY),{x:t,y:a}}},{key:"onDocMouseTouchMove",value:function(e){if(this.isChanging){var t,a,n,o,r,s,i,l,c=this.regionChangeIndex,u=this.props.regions[c],h=this.getClientPos(e),g=this.regionChangeData;if(g.isMove)t=(h.x+g.clientPosXOffset-g.imageOffsetLeft)/g.imageWidth*100,a=(h.y+g.clientPosYOffset-g.imageOffsetTop)/g.imageHeight*100,n=u.width,o=u.height,this.props.constraint&&(t+n>=100&&(t=Math.round(100-n)),a+o>=100&&(a=Math.round(100-o)),t<=0&&(t=0),a<=0&&(a=0));else r=(g.clientPosXStart-g.imageOffsetLeft)/g.imageWidth*100,s=(g.clientPosYStart-g.imageOffsetTop)/g.imageHeight*100,i=(h.x-g.imageOffsetLeft)/g.imageWidth*100,l=(h.y-g.imageOffsetTop)/g.imageHeight*100,t=Math.min(r,i),a=Math.min(s,l),n=Math.abs(r-i),o=Math.abs(s-l),this.props.constraint&&(i>=100&&(t=r,n=100-r),l>=100&&(a=s,o=100-s),i<=0&&(t=0,n=r),l<=0&&(a=0,o=s));var m={x:t,y:a,width:n,height:o,isChanging:!0};this.props.onChange([].concat(Object(b.a)(this.props.regions.slice(0,c)),[y()({},u,m)],Object(b.a)(this.props.regions.slice(c+1))))}}},{key:"onDocMouseTouchEnd",value:function(){if(this.isChanging){this.isChanging=!1;var e=this.regionChangeIndex,t=this.props.regions[e];this.regionChangeIndex=null,this.regionChangeData=null,this.props.onChange([].concat(Object(b.a)(this.props.regions.slice(0,e)),[y()({},t,{new:!1,isChanging:!1})],Object(b.a)(this.props.regions.slice(e+1))))}}},{key:"onComponentMouseTouchDown",value:function(e){if(!(e.target.dataset.wrapper||e.target.dataset.dir||function e(t,a){return null!==t&&(!!a(t)||e(t.parentNode,a))}(e.target,(function(e){return e.dataset&&e.dataset.wrapper})))){e.preventDefault();var t=this.getClientPos(e),a=this.getElementOffset(this.refs.image),n=(t.x-a.left)/this.refs.image.offsetWidth*100,o=(t.y-a.top)/this.refs.image.offsetHeight*100;this.isChanging=!0;var r={x:n,y:o,width:0,height:0,new:!0,data:{index:this.regionCounter},isChanging:!0};this.regionCounter+=1,this.regionChangeData={imageOffsetLeft:a.left,imageOffsetTop:a.top,clientPosXStart:t.x,clientPosYStart:t.y,imageWidth:this.refs.image.offsetWidth,imageHeight:this.refs.image.offsetHeight,isMove:!1},this.props.regions.length<this.props.maxRegions?(this.props.onChange(this.props.regions.concat(r)),this.regionChangeIndex=this.props.regions.length):(this.props.onChange([].concat(Object(b.a)(this.props.regions.slice(0,this.props.maxRegions-1)),[r])),this.regionChangeIndex=this.props.maxRegions-1)}}},{key:"getElementOffset",value:function(e){var t=e.getBoundingClientRect(),a=document.documentElement;return{top:t.top+window.pageYOffset-a.clientTop,left:t.left+window.pageXOffset-a.clientLeft}}},{key:"onRegionMoveStart",value:function(e,t){if(e.target.dataset.wrapper||e.target.dataset.dir){e.preventDefault();var a,n,o=this.getClientPos(e),r=this.getElementOffset(this.refs.image),s=this.props.regions[t],i=s.x/100*this.refs.image.offsetWidth+r.left,l=s.y/100*this.refs.image.offsetHeight+r.top,c=s.width/100*this.refs.image.offsetWidth,u=s.height/100*this.refs.image.offsetHeight,h=i-o.x,g=l-o.y,m=e.target.dataset.dir;m?"se"===m?(a=i,n=l):"sw"===m?(a=i+c,n=l):"nw"===m?(a=i+c,n=l+u):"ne"===m&&(a=i,n=l+u):(a=o.x,n=o.y),this.isChanging=!0,this.regionChangeData={imageOffsetLeft:r.left,imageOffsetTop:r.top,clientPosXStart:a,clientPosYStart:n,clientPosXOffset:h,clientPosYOffset:g,imageWidth:this.refs.image.offsetWidth,imageHeight:this.refs.image.offsetHeight,isMove:!m,resizeDir:m},this.regionChangeIndex=t}}},{key:"renderRect",value:function(e,t){var a=this;return o.a.createElement(w,{x:e.x,y:e.y,width:e.width,height:e.height,handles:!e.new,data:e.data,key:t,index:t,customStyle:this.props.regionStyle,dataRenderer:this.props.regionRenderer,onCropStart:function(e){return a.onRegionMoveStart(e,t)},changing:t===this.regionChangeIndex})}},{key:"render",value:function(){var e=this.props.regions;return o.a.createElement("div",{ref:"image",style:y()({},S.RegionSelect,this.props.style),className:this.props.className,onTouchStart:this.onComponentMouseTouchDown,onMouseDown:this.onComponentMouseTouchDown},e.map(this.renderRect.bind(this)),this.props.debug?o.a.createElement("table",{style:{position:"absolute",right:0,top:0}},o.a.createElement("tbody",null,e.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,"x: ",Math.round(e.x,1)),o.a.createElement("td",null,"y: ",Math.round(e.y,1)),o.a.createElement("td",null,"width: ",Math.round(e.width,1)),o.a.createElement("td",null,"height: ",Math.round(e.height,1)))})))):null,this.props.children)}}]),a}(n.Component);C.defaultProps={maxRegions:1/0,debug:!1,regions:[],constraint:!1};var k=C,O=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getFields=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.props),e.next=3,v.a.get("/api/"+localStorage.getItem("status")+"/getFields/"+n.props.csv,{headers:{"x-auth-token":localStorage.getItem("token")}});case 3:t=e.sent,console.log(t.data),n.setState({fields:t.data});case 6:case"end":return e.stop()}}),e)}))),n.SaveCoordinates=function(){try{n.state.regions[0].data.dataType?(n.state.textBox[n.state.regions[0].data.dataType]=n.state.regions[0],console.log(n.state.textBox),n.setState({regions:[]})):alert("Choose a field")}catch(e){}},n.SendCoordinate=Object(d.a)(p.a.mark((function e(){var t,a,o,r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==(t=document.getElementById("name").value).length){e.next=4;break}return e.abrupt("return",alert("Name cant be empty"));case 4:if(0!==(a=document.getElementById("msg").value).length){e.next=7;break}return e.abrupt("return",alert("Message Cant be Empty"));case 7:for(console.log(n.state.textBox),(o={name:t,msg:a}).cert=n.props.path,o.csv=n.props.csv,o.coordinates=[],r=Object.keys(n.state.textBox),s=0;s<r.length;s++)o.coordinates.push({fieldName:r[s],x:12*n.state.textBox[r[s]].x,y:6*n.state.textBox[r[s]].y,width:12*n.state.textBox[r[s]].width,height:6*n.state.textBox[r[s]].height});return e.next=16,v.a.post("/api/"+localStorage.getItem("status")+"/saveCoordinates",o,{headers:{"x-auth-token":localStorage.getItem("token")}});case 16:return i=e.sent,console.log(i),e.next=20,v.a.post("/api/"+localStorage.getItem("status")+"/putName/"+i.data._id,{},{headers:{"x-auth-token":localStorage.getItem("token")}});case 20:i=e.sent,console.log(i),alert("Process Initiated. Sending Mails Now. Thank you for Using this site."),localStorage.removeItem("token"),window.location.reload(!1),e.next=31;break;case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0),alert("Something went wrong.");case 31:case"end":return e.stop()}}),e,null,[[0,27]])}))),n.regionRenderer=n.regionRenderer.bind(Object(E.a)(n)),n.onChange=n.onChange.bind(Object(E.a)(n)),n.state={textBox:{},fields:[],regions:[]},n}return Object(l.a)(a,[{key:"onChange",value:function(e){this.setState({regions:e})}},{key:"componentDidMount",value:function(){this.getFields()}},{key:"changeRegionData",value:function(e,t){var a,n=this.state.regions[e];switch(t.target.value){case"1":a="rgba(0, 255, 0, 0.5)";break;case"2":a="rgba(0, 0, 255, 0.5)";break;case"3":a="rgba(255, 0, 0, 0.5)";break;default:a="rgba(0, 0, 0, 0.5)"}n.data.regionStyle={background:a},this.onChange([].concat(Object(b.a)(this.state.regions.slice(0,e)),[y()({},n,{data:y()({},n.data,{dataType:t.target.value})})],Object(b.a)(this.state.regions.slice(e+1))))}},{key:"regionRenderer",value:function(e){var t=this;if(!e.isChanging)return o.a.createElement("div",{style:{position:"absolute",right:0,bottom:"-1.5em"}},o.a.createElement("select",{onChange:function(a){return t.changeRegionData(e.index,a)},value:e.data.dataType},o.a.createElement("option",{default:!0,value:0},"Choose"),this.state.fields.map((function(e){return o.a.createElement("option",{value:e},e)}))))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.textBox);return o.a.createElement(n.Fragment,null,o.a.createElement(n.Fragment,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},o.a.createElement("input",{type:"text",id:"name",placeholder:"Enter Event Name"}),o.a.createElement("input",{type:"text",id:"msg",placeholder:"Enter message to be sent"}),o.a.createElement("input",{type:"email",id:"email",placeholder:"Feedback Email"})),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{flexGrow:1,flexShrink:1,width:"50%"}},o.a.createElement(k,{maxRegions:1,regions:this.state.regions,regionStyle:{background:"rgba(255, 0, 0, 0.5)"},constraint:!0,onChange:this.onChange,regionRenderer:this.regionRenderer,style:{border:"1px solid black"}},o.a.createElement("img",{src:"/api/sendImage/"+this.props.path,width:"1164",height:"800"})))),o.a.createElement("button",{onClick:function(){e.SaveCoordinates()}},"Set Box"),o.a.createElement("button",{onClick:function(){e.SendCoordinate()}},"Submit Details"),o.a.createElement("div",null,t.length>0?o.a.createElement(n.Fragment,null,o.a.createElement("h3",null,"Selected Boxes"),o.a.createElement("div",null,o.a.createElement("ul",null,Object.keys(this.state.textBox).map((function(t){return console.log(e.state.textBox[t]),o.a.createElement("li",null,"".concat(t," (").concat(e.state.textBox[t].x,"+").concat(e.state.textBox[t].width,",").concat(e.state.textBox[t].y,"+").concat(e.state.textBox[t].height,")"))}))))):null),o.a.createElement("p",null,"Select something with your mouse on the left side")))}}]),a}(n.Component),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e.handleChange=function(t){return function(a){var n=a.target.files[0];console.log(t,n),"csv"===t?(e.formData1.set(t,n),console.log(1)):e.formData2.set(t,n),e.state[t]=n,console.log(e.state)}},e.formData1=new FormData,e.formData2=new FormData,e.uploadCSV=function(){var t=Object(d.a)(p.a.mark((function t(a){var n,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.formData1,console.log(e.state.csv),n.csv=e.state.csv,console.log(n),t.next=7,v.a.post("/api/"+localStorage.getItem("status")+"/saveCSV",n,{headers:{"x-auth-token":localStorage.getItem("token"),"Content-Type":"application/json"}});case 7:return o=t.sent,console.log(o),t.next=11,v.a.get("/api/"+localStorage.getItem("status")+"/getFields/"+o.data.csvFile,{headers:{"x-auth-token":localStorage.getItem("token")}});case 11:if(-1!==t.sent.data.indexOf("email")){t.next=15;break}return t.abrupt("return",alert("'email' Field is not available in CSV."));case 15:e.state.uuid=o.data.uuid,e.state.csvFile=o.data.csvFile,document.getElementById("csvForm").hidden=!0,document.getElementById("certForm").hidden=!1;case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.uploadCert=function(){var t=Object(d.a)(p.a.mark((function t(a){var n,o,r,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.formData2,o=e.state.cert.name.split(".")[e.state.cert.name.split(".").length-1],console.log(o),r={headers:{"x-auth-token":localStorage.getItem("token"),extension:o}},console.log(n),t.next=8,v.a.post("/api/"+localStorage.getItem("status")+"/saveCert/"+e.state.uuid,n,r);case 8:s=t.sent,console.log(s),e.state.certFile=s.data.certFile,document.getElementById("csvForm").hidden=!0,document.getElementById("certForm").hidden=!0,e.setState({a:"a"});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(n.Fragment,null,localStorage.getItem("token")?o.a.createElement(n.Fragment,null,o.a.createElement("form",{id:"csvForm"},o.a.createElement("label",null,"Upload CSV here"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"btn btn-block btn-success"},o.a.createElement("input",{onChange:this.handleChange("csv"),type:"file",name:"csv",accept:".csv",placeholder:"chooseAFile"}))),o.a.createElement("button",{onClick:function(t){return e.uploadCSV(t)},className:"btn btn-success m-3"},"Upload CSV")),o.a.createElement("form",{id:"certForm",hidden:!0},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Upload Certificate pic here"),o.a.createElement("input",{onChange:this.handleChange("cert"),type:"file",name:"cert",accept:"image/*",placeholder:"chooseAFile"})),o.a.createElement("button",{className:"btn",onClick:function(t){e.uploadCert(t)}},"Upload")),this.state.certFile?o.a.createElement(O,{hidden:!0,path:this.state.certFile,csv:this.state.csvFile}):null):o.a.createElement(g.a,{to:"/login"}))}}]),a}(o.a.Component),M=a(20),D=a(24),N=a(27),T=(a(87),function(){var e=Object(n.useState)({email:"",password:""}),t=Object(N.a)(e,2),a=t[0],r=t[1],s=a.email,i=a.password,l=function(e){return r(Object(D.a)(Object(D.a)({},a),{},Object(M.a)({},e.target.name,e.target.value)))},c=function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.a.post("/api/studentLogin",{email:s,password:i});case 4:n=e.sent,console.log(n.status),localStorage.setItem("token",n.data.token),localStorage.setItem("status","student"),e.next=28;break;case 10:if(e.prev=10,e.t0=e.catch(1),console.log(e.t0.response),400!==e.t0.response.status){e.next=28;break}return e.prev=14,e.next=17,v.a.post("/api/teacherLogin",{email:s,password:i});case 17:n=e.sent,console.log(n.status),localStorage.setItem("token",n.data.token),localStorage.setItem("status","teacher"),e.next=28;break;case 23:return e.prev=23,e.t1=e.catch(14),console.log(e.t1.response),alert("Invalid Credentials"),e.abrupt("return");case 28:console.log(a),window.open("/#/","_self");case 30:case"end":return e.stop()}}),e,null,[[1,10],[14,23]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(n.Fragment,null,o.a.createElement("section",{className:"container"},o.a.createElement("h1",{className:"large text-primary"},"Sign In"),o.a.createElement("p",{className:"lead"},o.a.createElement("i",{className:"fas fa-user"})," Sign Into Your Account"),o.a.createElement("form",{className:"form",onSubmit:function(e){return c(e)}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"email",placeholder:"Email Address",onChange:function(e){return l(e)},value:s,name:"email"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){return l(e)},name:"password",value:i,minLength:"6"})),o.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Login",s:!0})),o.a.createElement("p",{className:"my-1"},"Don't have an account? ",o.a.createElement(h.b,{to:"/register"},"Sign Up"))))}),I=function(e){var t=Object(n.useState)({name:"",email:"",password:"",password2:"",school:"SCSE"}),a=Object(N.a)(t,2),r=a[0],s=a[1],i=r.name,l=r.email,c=r.password,u=r.password2,g=r.school,m=function(e){return s(Object(D.a)(Object(D.a)({},r),{},Object(M.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(d.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c===u){e.next=5;break}alert("Passwords do not match"),e.next=12;break;case 5:return console.log("Success!"),e.next=8,v.a.post("/api/register",{name:i,email:l,password:c,school:g});case 8:a=e.sent,console.log(a),localStorage.setItem("token",a.data.token),window.open("/","_self");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(n.Fragment,null,o.a.createElement("section",{className:"container"},o.a.createElement("h1",{className:"large text-primary"},"Sign Up"),o.a.createElement("p",{className:"lead"},o.a.createElement("i",{className:"fas fa-user"})," Create Your Account"),o.a.createElement("form",{className:"form",onSubmit:function(e){return f(e)}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",placeholder:"Name",onChange:function(e){return m(e)},name:"name",value:i,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"email",placeholder:"Email Address",onChange:function(e){return m(e)},value:l,name:"email"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){return m(e)},name:"password",value:c,minLength:"6"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",placeholder:"Confirm Password",onChange:function(e){return m(e)},name:"password2",value:u,minLength:"6"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{onChange:function(e){return m(e)},name:"school",value:g,required:!0},o.a.createElement("option",{value:"SCOPE"},"SCOPE"),o.a.createElement("option",{value:"SENSE"},"SENSE"),o.a.createElement("option",{value:"SAS"},"SAS"),o.a.createElement("option",{value:"VITSOL"},"VITSOL"))),o.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Register"})),o.a.createElement("p",{className:"my-1"},"Already have an account? ",o.a.createElement(h.b,{to:"login"},"Sign In"))))},R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isLoading:!0,found:!1},e.checkValidity=Object(d.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("/api/verifyExistance/"+e.props.match.params.id);case 3:return a=t.sent,t.next=6,v.a.get("/api/verify/"+e.props.match.params.id);case 6:a=t.sent,console.log(a.data),e.setState({isLoading:!1,found:!0}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),e.setState({isLoading:!1}),console.log(t.t0.response,t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.checkValidity()}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,this.state.isLoading?o.a.createElement("p",null,"Loading Your Certificate"):o.a.createElement(n.Fragment,null,this.state.found?o.a.createElement("img",{src:"/api/verify/"+this.props.match.params.id}):o.a.createElement("p",null,"The link is bogus")))}}]),a}(o.a.Component),F=a(54),L=a.n(F),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inSchoolTab:"all",isLoading:!0,tab:"personal",data:[]},e.getPersonalStats=Object(d.a)(p.a.mark((function t(){var a,n,o,r,s,i,l,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/api/getPersonalReport",{headers:{"x-auth-token":localStorage.getItem("token")}});case 2:for(a=t.sent,console.log(a.data),a=a.data,n=Object.keys(a),o=[],r=0;r<n.length;r++)for(console.log(a[n[r]]),s=Object.keys(a[n[r]]),console.log(s),i=0,l=0;l<s.length;l++){for(console.log(a[n[r]][s[l]]),c=0;c<a[n[r]][s[l]].length;c++)i+=a[n[r]][s[l]][c].count;o.unshift({text:[s[l]],value:i})}console.log(o),e.setState({isLoading:!1,reports:a,data:o});case 10:case"end":return t.stop()}}),t)}))),e.getSchoolStats=Object(d.a)(p.a.mark((function t(){var a,n,o,r,s,i,l,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/api/getSchoolReport/SCSE");case 2:for(a=(a=t.sent).data,console.log(a),n=Object.keys(a.date),o=[],r=0;r<n.length;r++)for(console.log(a.date[n[r]]),s=Object.keys(a.date[n[r]]),console.log(s),i=0,l=0;l<s.length;l++){for(console.log(a.date[n[r]][s[l]]),c=0;c<a.date[n[r]][s[l]].length;c++)i+=a.date[n[r]][s[l]][c].count;o.unshift({text:[s[l]],value:i})}return e.state.scse=o,t.next=11,v.a.get("/api/getSchoolReport/SCOPE");case 11:return a=t.sent,console.log(a.data),t.next=15,v.a.get("/api/getSchoolReport/SENCE");case 15:return a=t.sent,e.state.sense=a.data,t.next=19,v.a.get("/api/getSchoolReport/SAS");case 19:return a=t.sent,e.state.sas=a.data,t.next=23,v.a.get("/api/getSchoolReport/VITSOL");case 23:a=t.sent,e.state.vitsol=a.data,console.log(e.state);case 26:case"end":return t.stop()}}),t)}))),e.onChange=function(t){t.preventDefault(),e.setState(Object(M.a)({},t.target.id,t.target.value)),"personal"===t.target.value?e.getPersonalStats():e.getSchoolStats()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getPersonalStats()}},{key:"render",value:function(){var e=this,t=this.state,a=t.tab,r=t.reports,s=t.isLoading,i=t.data,l=t.inSchoolTab;return console.log(r),o.a.createElement(n.Fragment,null,s?null:o.a.createElement(n.Fragment,null,o.a.createElement("select",{className:"custom-select",value:a,onChange:function(t){return e.onChange(t)},name:"tab",id:"tab",required:!0},o.a.createElement("option",{value:"personal"},"Personal"),o.a.createElement("option",{value:"school"},"School")),"personal"===a?o.a.createElement(n.Fragment,null,o.a.createElement(L.a,{data:i,ylabel:"Quantity",margin:{top:20,right:20,bottom:30,left:40},width:500,height:500})):o.a.createElement(n.Fragment,null,o.a.createElement("h3",null,"School"),o.a.createElement("select",{className:"custom-select",value:l,onChange:function(t){return e.onChange(t)},id:"inSchoolTab",name:"inSchoolTab"},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"scse"},"SCSE")),"all"===l?o.a.createElement(n.Fragment,null):null)))}}]),a}(o.a.Component),P=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleFiles=function(e){var t=new FileReader;t.onload=function(e){alert(t.result)},t.readAsText(e[0])},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h2",null,"Kartik Narang 18BCE1199"),o.a.createElement("h2",null,"Sumit Ajmera 18BCE1233"),o.a.createElement("h2",null,"Aadhitya Swarnesh 18BCE1087"),o.a.createElement(h.a,null,o.a.createElement(g.d,null,o.a.createElement(g.b,{path:"/",exact:!0,component:j}),o.a.createElement(g.b,{path:"/login",exact:!0,component:T}),o.a.createElement(g.b,{path:"/register",exact:!0,component:I}),o.a.createElement(g.b,{path:"/report",exact:!0,component:B}),o.a.createElement(g.b,{path:"/verify/:id",exact:!0,component:R})))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a(105)},60:function(e,t,a){},61:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.acdd7994.chunk.js.map
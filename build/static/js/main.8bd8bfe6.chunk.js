(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t){e.exports={dashboard24HoursPerformanceChart:{data:function(e){return{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],datasets:[{borderColor:"#6bd098",backgroundColor:"#6bd098",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[300,310,316,322,330,326,333,345,338,354]},{borderColor:"#f17e5d",backgroundColor:"#f17e5d",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[320,340,365,360,370,385,390,384,408,420]},{borderColor:"#fcc468",backgroundColor:"#fcc468",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[370,394,415,409,425,445,460,450,478,484]}]}},options:{legend:{display:!1},tooltips:{enabled:!1},scales:{yAxes:[{ticks:{fontColor:"#9f9f9f",beginAtZero:!1,maxTicksLimit:5},gridLines:{drawBorder:!1,zeroLineColor:"#ccc",color:"rgba(255,255,255,0.05)"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent",display:!1},ticks:{padding:20,fontColor:"#9f9f9f"}}]}}},dashboardEmailStatisticsChart:{data:function(e){return{labels:[1,2,3],datasets:[{label:"Emails",pointRadius:0,pointHoverRadius:0,backgroundColor:["#e3e3e3","#4acccd","#fcc468","#ef8157"],borderWidth:0,data:[342,480,530,120]}]}},options:{legend:{display:!1},pieceLabel:{render:"percentage",fontColor:["white"],precision:2},tooltips:{enabled:!1},scales:{yAxes:[{ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}},dashboardNASDAQChart:{data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[0,19,15,20,30,40,40,50,25,30,50,70],fill:!1,borderColor:"#fbc658",backgroundColor:"transparent",pointBorderColor:"#fbc658",pointRadius:4,pointHoverRadius:4,pointBorderWidth:8},{data:[0,5,10,12,20,27,30,34,42,45,55,63],fill:!1,borderColor:"#51CACF",backgroundColor:"transparent",pointBorderColor:"#51CACF",pointRadius:4,pointHoverRadius:4,pointBorderWidth:8}]},options:{legend:{display:!1,position:"top"}}}}},264:function(e,t,a){"use strict";a.r(t);var n,r,l=a(1),c=a.n(l),s=a(22),o=a.n(s),i=a(21),m=a(268),u=a(269),d=a(265),p=(a(95),a(97),a(99),a(5)),E=a(6),h=a(8),b=a(7),f=a(9),g=a(267),v=a(43),N=a(16),y=a(262),O=a(2),k=a(46),x=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.children.length;t++)e.push(c.a.createElement("i",{className:this.props.children[t].i,key:t})),e.push(" "+this.props.children[t].t),t!==this.props.children.length-1&&e.push(c.a.createElement("br",null));return c.a.createElement("div",{className:"stats"},e)}}]),t}(c.a.Component),j=a(24),C=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:12,sm:6,md:6,lg:3},c.a.createElement(O.b,{className:"card-stats"},c.a.createElement(O.c,null,c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:5,md:4},c.a.createElement("div",{className:"icon-big text-center"},c.a.createElement("i",{className:"nc-icon nc-globe text-warning"}))),c.a.createElement(O.g,{xs:7,md:8},c.a.createElement("div",{className:"numbers"},c.a.createElement("p",{className:"card-category"},"Capacity"),c.a.createElement(O.f,{tag:"p"},"150GB"))))),c.a.createElement(O.d,null,c.a.createElement("hr",null),c.a.createElement(x,null,[{i:"fas fa-sync-alt",t:"Update Now"}])))),c.a.createElement(O.g,{xs:12,sm:6,md:6,lg:3},c.a.createElement(O.b,{className:"card-stats"},c.a.createElement(O.c,null,c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:5,md:4},c.a.createElement("div",{className:"icon-big text-center"},c.a.createElement("i",{className:"nc-icon nc-money-coins text-success"}))),c.a.createElement(O.g,{xs:7,md:8},c.a.createElement("div",{className:"numbers"},c.a.createElement("p",{className:"card-category"},"Revenue"),c.a.createElement(O.f,{tag:"p"},"$ 1,345"))))),c.a.createElement(O.d,null,c.a.createElement("hr",null),c.a.createElement(x,null,[{i:"far fa-calendar",t:"Last day"}])))),c.a.createElement(O.g,{xs:12,sm:6,md:6,lg:3},c.a.createElement(O.b,{className:"card-stats"},c.a.createElement(O.c,null,c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:5,md:4},c.a.createElement("div",{className:"icon-big text-center"},c.a.createElement("i",{className:"nc-icon nc-vector text-danger"}))),c.a.createElement(O.g,{xs:7,md:8},c.a.createElement("div",{className:"numbers"},c.a.createElement("p",{className:"card-category"},"Errors"),c.a.createElement(O.f,{tag:"p"},"23"))))),c.a.createElement(O.d,null,c.a.createElement("hr",null),c.a.createElement(x,null,[{i:"far fa-clock",t:"In the last hour"}])))),c.a.createElement(O.g,{xs:12,sm:6,md:6,lg:3},c.a.createElement(O.b,{className:"card-stats"},c.a.createElement(O.c,null,c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:5,md:4},c.a.createElement("div",{className:"icon-big text-center"},c.a.createElement("i",{className:"nc-icon nc-favourite-28 text-primary"}))),c.a.createElement(O.g,{xs:7,md:8},c.a.createElement("div",{className:"numbers"},c.a.createElement("p",{className:"card-category"},"Followers"),c.a.createElement(O.f,{tag:"p"},"+45K"))))),c.a.createElement(O.d,null,c.a.createElement("hr",null),c.a.createElement(x,null,[{i:"fas fa-sync-alt",t:"Update now"}]))))),c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:12},c.a.createElement(O.b,null,c.a.createElement(O.e,null,c.a.createElement(O.f,null,"Users Behavior"),c.a.createElement("p",{className:"card-category"},"24 Hours performance")),c.a.createElement(O.c,null,c.a.createElement(k.a,{data:j.dashboard24HoursPerformanceChart.data,options:j.dashboard24HoursPerformanceChart.options,width:400,height:100})),c.a.createElement(O.d,null,c.a.createElement("hr",null),c.a.createElement(x,null,[{i:"fas fa-history",t:" Updated 3 minutes ago"}]))))),c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:12,sm:12,md:4},c.a.createElement(O.b,null,c.a.createElement(O.e,null,c.a.createElement(O.f,null,"Email Statistics"),c.a.createElement("p",{className:"card-category"},"Last Campaign Performance")),c.a.createElement(O.c,null,c.a.createElement(k.b,{data:j.dashboardEmailStatisticsChart.data,options:j.dashboardEmailStatisticsChart.options})),c.a.createElement(O.d,null,c.a.createElement("div",{className:"legend"},c.a.createElement("i",{className:"fa fa-circle text-primary"})," Opened"," ",c.a.createElement("i",{className:"fa fa-circle text-warning"})," Read"," ",c.a.createElement("i",{className:"fa fa-circle text-danger"})," Deleted"," ",c.a.createElement("i",{className:"fa fa-circle text-gray"})," Unopened"),c.a.createElement("hr",null),c.a.createElement(x,null,[{i:"fas fa-calendar-alt",t:" Number of emails sent"}])))),c.a.createElement(O.g,{xs:12,sm:12,md:8},c.a.createElement(O.b,{className:"card-chart"},c.a.createElement(O.e,null,c.a.createElement(O.f,null,"NASDAQ: AAPL"),c.a.createElement("p",{className:"card-category"},"Line Chart With Points")),c.a.createElement(O.c,null,c.a.createElement(k.a,{data:j.dashboardNASDAQChart.data,options:j.dashboardNASDAQChart.options,width:400,height:100})),c.a.createElement(O.d,null,c.a.createElement("div",{className:"chart-legend"},c.a.createElement("i",{className:"fa fa-circle text-info"})," Tesla Model S"," ",c.a.createElement("i",{className:"fa fa-circle text-warning"})," BMW 5 Series"),c.a.createElement("hr",null),c.a.createElement(x,null,[{i:"fas fa-check",t:" Data information certified"}]))))))}}]),t}(c.a.Component),w=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"author"},c.a.createElement("a",{href:this.props.link?this.props.link:"#"},c.a.createElement("img",{className:"avatar border-gray",src:this.props.avatar,alt:this.props.avatarAlt}),c.a.createElement("h5",{className:"title"},this.props.title)),c.a.createElement("p",{className:"description"},this.props.description))}}]),t}(c.a.Component),D=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={focus:!1},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.label,n=t.addonLeft,r=t.addonRight,l=t.formGroupProps,s=t.labelProps,o=t.inputProps,i=t.inputGroupProps,m=t.inputGroupAddonProps,u=" ";return void 0!==i&&void 0!==i.className&&(u+=i.className+" "),void 0!==n||void 0!==r?c.a.createElement(O.p,Object.assign({},i,{className:u+(this.state.focus?"input-group-focus":"")}),void 0!==n?c.a.createElement(O.q,m,n):"",c.a.createElement(O.o,Object.assign({},o,{onFocus:function(t){return e.setState({focus:!0})},onBlur:function(t){return e.setState({focus:!1})}})),void 0!==r?c.a.createElement(O.q,m,r):""):"radio"===o.type||"checkbox"===o.type?c.a.createElement(O.n,Object.assign({},l,{className:"radio"===o.type?"form-check-radio":""}),c.a.createElement(O.s,s,c.a.createElement(O.o,o),c.a.createElement("span",{className:"form-check-sign"}),a||"")):c.a.createElement(O.n,l,a?c.a.createElement(O.s,s,a):"",c.a.createElement(O.o,o))}}]),t}(c.a.Component),S=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.ncols.length;t++)e.push(c.a.createElement("div",{key:t,className:this.props.ncols[t]},c.a.createElement(D,this.props.proprieties[t])));return c.a.createElement("div",{className:"row"},e)}}]),t}(l.Component),A=a(89),P=a(3),L=a.n(P),H=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.simple,a=e.round,n=e.icon,r=e.neutral,l=e.leftLabel,s=e.rightLabel,o=e.wd,i=e.link,m=e.fab,u=e.className,d=Object(A.a)(e,["simple","round","icon","neutral","leftLabel","rightLabel","wd","link","fab","className"]),p=L()({"btn-simple":t,"btn-round":a,"btn-icon":n,"btn-neutral":r,"btn-wd":o,"btn-link":i,"btn-fab":m});return void 0!==u&&(p+=" "+u),c.a.createElement(O.a,Object.assign({className:p},d),l?c.a.createElement("span",{className:"btn-label"},c.a.createElement("i",{className:l})," "):null,this.props.children,s?c.a.createElement("span",{className:"btn-label btn-label-right"},c.a.createElement("i",{className:s})," "):null)}}]),t}(l.Component),B=a(19),U=a.n(B),Y=["Partner","Time","Note"],M=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.records;return c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:12},c.a.createElement(O.b,null,c.a.createElement(O.c,{style:{overflow:"auto",maxHeight:"80vh"}},c.a.createElement(O.z,{size:"sm",hover:!0},c.a.createElement("thead",{className:"text-danger"},c.a.createElement("tr",null,Y.map(function(e){return c.a.createElement("th",{key:e},e)}))),c.a.createElement("tbody",null,e.map(function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.partner.username),c.a.createElement("td",null,U()(e.time).format("HH:mm DD/MM/YYYY")),c.a.createElement("td",null,e.note))})))))))}}]),t}(c.a.Component),R=a(87),T=a.n(R),W=a(27),z=a.n(W),I="http://api.most.bkchain.tk/admin",F=function(){return z.a.get(I+"/user",{headers:{}}).then(function(e){return e.data}).then(function(e){return e})},V=function(){return z.a.get(I+"/poll",{headers:{}}).then(function(e){return e.data}).then(function(e){return e})},J=function(){return z.a.get(I+"/vote",{headers:{}}).then(function(e){return e.data}).then(function(e){return console.log(e),e})},_=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={user:{},records:[]},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e=this;(function(e){return z.a.get(I+"/user/"+e,{headers:{}}).then(function(e){return e.data}).then(function(e){return e})})((this.props.match.params||{}).username).then(function(t){var a;e.setState({user:t}),(a=t.id,z.a.get(I+"/record/"+a,{headers:{}}).then(function(e){return e.data}).then(function(e){return e})).then(function(t){return e.setState({records:t})}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.user;return c.a.createElement("div",{className:"content"},c.a.createElement(O.y,null,c.a.createElement(O.g,{md:4,xs:12},c.a.createElement(O.b,{className:"card-user"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:T.a,alt:"Banner"})),c.a.createElement(O.c,null,c.a.createElement(w,{avatar:e.photoUrl||"/default-avatar.png",avatarAlt:"...",title:e?e.firstName+" "+e.lastName:"",description:"@"+e.username||""}),c.a.createElement("p",{className:"description text-center"},e.company||""," ",c.a.createElement("br",null),e.position||"")),c.a.createElement(O.d,null,c.a.createElement("hr",null),c.a.createElement("div",{className:"button-container"},c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:6,sm:6,md:6,lg:3,className:"ml-auto"},c.a.createElement("h5",null,"12",c.a.createElement("br",null),c.a.createElement("small",null,"Files"))),c.a.createElement(O.g,{xs:6,sm:6,md:6,lg:4,className:"mr-auto ml-auto"},c.a.createElement("h5",null,"2GB",c.a.createElement("br",null),c.a.createElement("small",null,"Used"))),c.a.createElement(O.g,{lg:3,className:"mr-auto"},c.a.createElement("h5",null,"24,6$",c.a.createElement("br",null),c.a.createElement("small",null,"Spent"))))))),c.a.createElement(O.b,null,c.a.createElement(O.e,null,c.a.createElement(O.f,{tag:"h4"},"Contacts")),c.a.createElement(O.c,null,c.a.createElement("ul",{className:"list-unstyled team-members"},(e.contacts||[]).map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:2,md:2},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:e.photoUrl||"/default-avatar.png",alt:"Avatar",className:"img-circle img-no-padding img-responsive"}))),c.a.createElement(O.g,{xs:7,md:7},(e.firstName||"")+" "+(e.lastName||""),c.a.createElement("br",null),c.a.createElement("span",{className:"text-danger"},c.a.createElement("small",null,"@",e.username||""))),c.a.createElement(O.g,{xs:3,md:3,className:"text-right"},c.a.createElement("a",{href:"/users/"+e.username,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(H,{size:"sm",color:"danger",round:!0,icon:!0,outline:!0},c.a.createElement("i",{className:"fa fa-ellipsis-h"}))))))}))))),c.a.createElement(O.g,{md:8,xs:12},c.a.createElement(O.b,{className:"card-user"},c.a.createElement(O.e,null,c.a.createElement(O.f,null,"Edit Profile")),c.a.createElement(O.c,null,c.a.createElement("form",null,c.a.createElement(S,{ncols:["col-md-5 pr-1","col-md-3 px-1","col-md-4 pl-1"],proprieties:[{label:"Organization",inputProps:{type:"text",disabled:!0,defaultValue:"BKU Blockchain Inc."}},{label:"Username",inputProps:{type:"text",defaultValue:e.username||""}},{label:"Email address",inputProps:{type:"email",defaultValue:e.email||"",placeholder:"Email"}}]}),c.a.createElement(S,{ncols:["col-md-6 pr-1","col-md-6 pl-1"],proprieties:[{label:"First Name",inputProps:{type:"text",placeholder:"First Name",defaultValue:e.firstName||""}},{label:"Last Name",inputProps:{type:"text",placeholder:"Last Name",defaultValue:e.lastName||""}}]}),c.a.createElement(S,{ncols:["col-md-12"],proprieties:[{label:"Company",inputProps:{type:"text",placeholder:"Company",defaultValue:e.company||""}}]}),c.a.createElement(S,{ncols:["col-md-12"],proprieties:[{label:"Position",inputProps:{type:"text",placeholder:"Position",defaultValue:e.position||""}}]}),c.a.createElement(O.y,null,c.a.createElement("div",{className:"update ml-auto mr-auto"},c.a.createElement(H,{color:"primary",round:!0},"Update Profile")))))),c.a.createElement(O.b,{className:"card-user"},c.a.createElement(O.e,null,c.a.createElement(O.f,null,"Records")),c.a.createElement(O.c,null,c.a.createElement(M,{records:this.state.records}))))))}}]),t}(c.a.Component),G=["","Username","Email","Tel","Photo","Name","Company","Position"],K=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={users:[]},F().then(function(e){return a.setState({users:e})}).catch(function(e){return console.log(e)}),a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:12},c.a.createElement(O.b,null,c.a.createElement(O.e,null,c.a.createElement(O.f,{tag:"h4"},"Users")),c.a.createElement(O.c,{style:{overflow:"auto",maxHeight:"80vh"}},c.a.createElement(O.z,{size:"sm",hover:!0},c.a.createElement("thead",{className:"text-danger"},c.a.createElement("tr",null,G.map(function(e,t){return t===G.length-1?c.a.createElement("th",{key:e,className:"text-right"},e):c.a.createElement("th",{key:e},e)}))),c.a.createElement("tbody",{style:{overflow:"auto"}},this.state.users.map(function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,c.a.createElement(y.a,{to:"/users/"+e.username},c.a.createElement("i",{className:"fa fa-link text-danger"}))),c.a.createElement("td",null,c.a.createElement(y.a,{to:"/users/"+e.username,style:{color:"#176075"}},e.username)),c.a.createElement("td",null,e.email),c.a.createElement("td",{className:"text-right"},e.tel),c.a.createElement("td",{className:"text-center"},c.a.createElement("img",{src:e.photoUrl,alt:"Avatar",width:30,style:{borderRadius:"50%"}})),c.a.createElement("td",null,(e.firstName||"")+" "+(e.lastName||"")),c.a.createElement("td",null,e.company),c.a.createElement("td",{className:"text-right"},e.position))}))))))))}}]),t}(c.a.Component),Q=["","Event ID","Owner ID","Contract Address","Start Date","End Date","No.Cand","Title"],q=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={polls:[]},V().then(function(e){return a.setState({polls:e})}).catch(function(e){return console.log(e)}),a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:12},c.a.createElement(O.b,null,c.a.createElement(O.e,null,c.a.createElement(O.f,{tag:"h4"},"Polls")),c.a.createElement(O.c,{style:{overflow:"auto",maxHeight:"80vh"}},c.a.createElement(O.z,{size:"sm",hover:!0},c.a.createElement("thead",{className:"text-danger"},c.a.createElement("tr",null,Q.map(function(e){return c.a.createElement("th",{key:e},e)}))),c.a.createElement("tbody",null,this.state.polls.map(function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,c.a.createElement(y.a,{to:"/polls/"+e.id},c.a.createElement("i",{className:"fa fa-link text-danger"}))),c.a.createElement("td",null,e.eventID),c.a.createElement("td",null,e.ownerID),c.a.createElement("td",null,c.a.createElement("a",{href:"https://ropsten.etherscan.io/address/"+e.eth.contractAddress,style:{color:"#176075"}},e.eth.contractAddress)),c.a.createElement("td",{className:"text-right"},U()(e.startDate).format("HH:mm DD/MM/YYYY")),c.a.createElement("td",{className:"text-right"},U()(e.endDate).format("HH:mm DD/MM/YYYY")),c.a.createElement("td",{className:"text-center"},e.candidates.length),c.a.createElement("td",null,e.title))}))))))))}}]),t}(c.a.Component),$=["","ID","User ID","Transaction Hash","Poll ID","Contract Address","Start Date","End Date"],X=[{path:"/dashboard",name:"Dashboard",icon:"nc-icon nc-bank",component:C},{noSidebar:!0,path:"/users/:username",component:_},{path:"/users",name:"Users",icon:"nc-icon nc-badge",component:K},{path:"/polls",name:"Polls",icon:"nc-icon nc-money-coins",component:q},{path:"/votes",name:"Votes",icon:"nc-icon nc-chart-bar-32",component:function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={votes:[]},J().then(function(e){return a.setState({votes:e})}).catch(function(e){return console.log(e)}),a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(O.y,null,c.a.createElement(O.g,{xs:12},c.a.createElement(O.b,null,c.a.createElement(O.e,null,c.a.createElement(O.f,{tag:"h4"},"Votes")),c.a.createElement(O.c,{style:{overflow:"auto",maxHeight:"80vh"}},c.a.createElement(O.z,{size:"sm",hover:!0},c.a.createElement("thead",{className:"text-danger"},c.a.createElement("tr",null,$.map(function(e){return c.a.createElement("th",{key:e},e)}))),c.a.createElement("tbody",null,this.state.votes.map(function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,c.a.createElement("i",{className:"fa fa-link text-danger"})),c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.userID),c.a.createElement("td",null,c.a.createElement("a",{href:"https://ropsten.etherscan.io/tx/"+e.eth.txHash,style:{color:"#176075"}},e.eth.txHash)),c.a.createElement("td",null,e.pollID.id),c.a.createElement("td",null,c.a.createElement("a",{href:"https://ropsten.etherscan.io/address/"+e.pollID.eth.contractAddress,style:{color:"#176075"}},e.pollID.eth.contractAddress)),c.a.createElement("td",{className:"text-right"},U()(e.pollID.startDate).format("HH:mm DD/MM/YYYY")),c.a.createElement("td",{className:"text-right"},U()(e.pollID.endDate).format("HH:mm DD/MM/YYYY")))}))))))))}}]),t}(c.a.Component)},{redirect:!0,path:"/",pathTo:"/dashboard",name:"Dashboard"}],Z=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={isOpen:!1,dropdownOpen:!1,color:"transparent"},a.toggle=a.toggle.bind(Object(N.a)(Object(N.a)(a))),a.dropdownToggle=a.dropdownToggle.bind(Object(N.a)(Object(N.a)(a))),a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"toggle",value:function(){this.state.isOpen?this.setState({color:"transparent"}):this.setState({color:"dark"}),this.setState({isOpen:!this.state.isOpen})}},{key:"dropdownToggle",value:function(e){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"getBrand",value:function(){var e,t=this;return X.map(function(a,n){return a.collapse?a.views.map(function(a,n){return a.path===t.props.location.pathname&&(e=a.name),null}):(a.redirect,a.path===t.props.location.pathname&&(e=a.name)),null}),e}},{key:"openSidebar",value:function(){document.documentElement.classList.toggle("nav-open"),this.refs.sidebarToggle.classList.toggle("toggled")}},{key:"updateColor",value:function(){window.innerWidth<993&&this.state.isOpen?this.setState({color:"dark"}):this.setState({color:"transparent"})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor.bind(this))}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&(document.documentElement.classList.toggle("nav-open"),this.refs.sidebarToggle.classList.toggle("toggled"))}},{key:"render",value:function(){var e=this;return c.a.createElement(O.v,{color:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"dark":this.state.color,expand:"lg",className:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"navbar-absolute fixed-top":"navbar-absolute fixed-top "+("transparent"===this.state.color?"navbar-transparent ":"")},c.a.createElement(O.i,{fluid:!0},c.a.createElement("div",{className:"navbar-wrapper"},c.a.createElement("div",{className:"navbar-toggle"},c.a.createElement("button",{type:"button",ref:"sidebarToggle",className:"navbar-toggler",onClick:function(){return e.openSidebar()}},c.a.createElement("span",{className:"navbar-toggler-bar bar1"}),c.a.createElement("span",{className:"navbar-toggler-bar bar2"}),c.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),c.a.createElement(O.w,{href:"/"},this.getBrand())),c.a.createElement(O.x,{onClick:this.toggle},c.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),c.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),c.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),c.a.createElement(O.h,{isOpen:this.state.isOpen,navbar:!0,className:"justify-content-end"},c.a.createElement("form",null,c.a.createElement(O.p,{className:"no-border"},c.a.createElement(O.o,{placeholder:"Search..."}),c.a.createElement(O.q,{addonType:"append"},c.a.createElement(O.r,null,c.a.createElement("i",{className:"nc-icon nc-zoom-split"}))))),c.a.createElement(O.t,{navbar:!0},c.a.createElement(O.u,null,c.a.createElement(y.a,{to:"#pablo",className:"nav-link btn-magnify"},c.a.createElement("i",{className:"nc-icon nc-layout-11"}),c.a.createElement("p",null,c.a.createElement("span",{className:"d-lg-none d-md-block"},"Stats")))),c.a.createElement(O.j,{nav:!0,isOpen:this.state.dropdownOpen,toggle:function(t){return e.dropdownToggle(t)}},c.a.createElement(O.m,{caret:!0,nav:!0},c.a.createElement("i",{className:"nc-icon nc-bell-55"}),c.a.createElement("p",null,c.a.createElement("span",{className:"d-lg-none d-md-block"},"Some Actions"))),c.a.createElement(O.l,{right:!0},c.a.createElement(O.k,{tag:"a"},"Action"),c.a.createElement(O.k,{tag:"a"},"Another Action"),c.a.createElement(O.k,{tag:"a"},"Something else here"))),c.a.createElement(O.u,null,c.a.createElement(y.a,{to:"#pablo",className:"nav-link btn-rotate"},c.a.createElement("i",{className:"nc-icon nc-settings-gear-65"}),c.a.createElement("p",null,c.a.createElement("span",{className:"d-lg-none d-md-block"},"Account"))))))))}}]),t}(c.a.Component),ee=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"+(this.props.default?" footer-default":"")},c.a.createElement(O.i,{fluid:!!this.props.fluid},c.a.createElement(O.y,null,c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"http://most.bkchain.tk",target:"_blank"},"BKU Blockchain")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://blog.creative-tim.com",target:"_blank"},"Blog")),c.a.createElement("li",null,c.a.createElement("a",{href:"http://most.bkchain.tk/license",target:"_blank"},"Licenses")))),c.a.createElement("div",{className:"credits ml-auto"},c.a.createElement("div",{className:"copyright"},"\xa9 ",1900+(new Date).getYear(),", made with ",c.a.createElement("i",{className:"fa fa-heart heart"})," by BKU Blockchain")))))}}]),t}(c.a.Component),te=a(266),ae=a(88),ne=a.n(ae),re=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).activeRoute.bind(Object(N.a)(Object(N.a)(a))),a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(n=new v.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&n.destroy()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"sidebar","data-color":this.props.bgColor,"data-active-color":this.props.activeColor},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"http://most.bkchain.tk",className:"simple-text logo-mini"},c.a.createElement("div",{className:"logo-img"},c.a.createElement("img",{src:ne.a,alt:"most-logo"}))),c.a.createElement("a",{href:"http://most.bkchain.tk",className:"simple-text logo-normal"},"BKU Blockchain")),c.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},c.a.createElement(O.t,null,this.props.routes.map(function(t,a){return t.redirect?null:t.noSidebar?null:c.a.createElement("li",{className:e.activeRoute(t.path)+(t.pro?" active-pro":""),key:a},c.a.createElement(te.a,{to:t.path,className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:t.icon}),c.a.createElement("p",null,t.name)))}))))}}]),t}(c.a.Component),le=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleActiveClick=function(e){a.setState({activeColor:e})},a.handleBgClick=function(e){a.setState({backgroundColor:e})},a.state={backgroundColor:"black",activeColor:"info"},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(r=new v.a(this.refs.mainPanel),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(r.destroy(),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentDidUpdate",value:function(e){"PUSH"===e.history.action&&(this.refs.mainPanel.scrollTop=0,document.scrollingElement.scrollTop=0)}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(re,Object.assign({},this.props,{routes:X,bgColor:this.state.backgroundColor,activeColor:this.state.activeColor})),c.a.createElement("div",{className:"main-panel",ref:"mainPanel"},c.a.createElement(Z,this.props),c.a.createElement(u.a,null,X.map(function(e,t){return e.redirect?c.a.createElement(g.a,{from:e.path,to:e.pathTo,key:t}):c.a.createElement(d.a,{path:e.path,component:e.component,key:t})})),c.a.createElement(ee,{fluid:!0})))}}]),t}(c.a.Component),ce=[{path:"/login",name:"Login",component:function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Login")}}]),t}(c.a.Component)},{path:"/",name:"Home",component:le}],se=Object(i.a)();o.a.render(c.a.createElement(m.a,{history:se},c.a.createElement(u.a,null,ce.map(function(e,t){return c.a.createElement(d.a,{path:e.path,key:t,component:e.component})}))),document.getElementById("root"))},87:function(e,t,a){e.exports=a.p+"static/media/banner_avatar.a6f24e7d.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/logo_white.181c89d7.png"},90:function(e,t,a){e.exports=a(264)},97:function(e,t,a){},99:function(e,t,a){}},[[90,2,1]]]);
//# sourceMappingURL=main.8bd8bfe6.chunk.js.map
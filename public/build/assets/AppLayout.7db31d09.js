import{o,e as n,a as e,d as j,j as x,k as T,l as F,h as a,n as f,f as p,t as y,m as k,p as N,q as D,r as g,s as C,v as L,x as B,b as u,w as i,T as E,c as v,L as S,H as I,g as h,F as $,i as z,y as A}from"./app.89693943.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";const V={},H={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),q=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),U=[R,q];function G(l,r){return o(),n("svg",H,U)}const J=O(V,[["render",G]]),K={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Q={class:"flex items-center justify-between flex-wrap"},W={class:"w-0 flex-1 flex items-center min-w-0"},X={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Z=[Y],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),se=[te],oe={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ne=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ae=[ne],ie={__name:"Banner",setup(l){const r=j(!0),s=x(()=>{var t;return((t=T().props.value.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),c=x(()=>{var t;return((t=T().props.value.jetstream.flash)==null?void 0:t.banner)||""});return F(c,async()=>{r.value=!0}),(t,_)=>(o(),n("div",null,[r.value&&a(c)?(o(),n("div",{key:0,class:f({"bg-indigo-500":a(s)=="success","bg-red-700":a(s)=="danger"})},[e("div",K,[e("div",Q,[e("div",W,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":a(s)=="success","bg-red-600":a(s)=="danger"}])},[a(s)=="success"?(o(),n("svg",X,Z)):p("",!0),a(s)=="danger"?(o(),n("svg",ee,se)):p("",!0)],2),e("p",oe,y(a(c)),1)]),e("div",re,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":a(s)=="success","hover:bg-red-600 focus:bg-red-600":a(s)=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=k(d=>r.value=!1,["prevent"]))},ae,2)])])])],2)):p("",!0)]))}},le={class:"relative"},P={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const r=l;let s=j(!1);const c=d=>{s.value&&d.key==="Escape"&&(s.value=!1)};N(()=>document.addEventListener("keydown",c)),D(()=>document.removeEventListener("keydown",c));const t=x(()=>({48:"w-48"})[r.width.toString()]),_=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top");return(d,m)=>(o(),n("div",le,[e("div",{onClick:m[0]||(m[0]=M=>C(s)?s.value=!a(s):s=!a(s))},[g(d.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=M=>C(s)?s.value=!1:s=!1)},null,512),[[B,a(s)]]),u(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[L(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[a(t),a(_)]]),style:{display:"none"},onClick:m[2]||(m[2]=M=>C(s)?s.value=!1:s=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[g(d.$slots,"content")],2)],2),[[B,a(s)]])]),_:3})]))}},de={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ue=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(r,s)=>(o(),n("div",null,[l.as=="button"?(o(),n("button",de,[g(r.$slots,"default")])):l.as=="a"?(o(),n("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[g(r.$slots,"default")],8,ue)):(o(),v(a(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:i(()=>[g(r.$slots,"default")]),_:3},8,["href"]))]))}},ce={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const r=l,s=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(c,t)=>(o(),v(a(S),{href:l.href,class:f(a(s))},{default:i(()=>[g(c.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const r=l,s=x(()=>r.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(c,t)=>(o(),n("div",null,[l.as=="button"?(o(),n("button",{key:0,class:f([a(s),"w-full text-left"])},[g(c.$slots,"default")],2)):(o(),v(a(S),{key:1,href:l.href,class:f(a(s))},{default:i(()=>[g(c.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},fe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ge={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"ml-3 relative"},we={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},ke=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ce=e("div",{class:"border-t border-gray-100"},null,-1),je=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Be=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Ae={class:"ml-3 relative"},Pe={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Fe=["src","alt"],Ne={key:1,class:"inline-flex rounded-md"},De={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ie=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Oe=e("div",{class:"border-t border-gray-100"},null,-1),Ve=["onSubmit"],He={class:"-mr-2 flex items-center sm:hidden"},Re={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},qe={class:"pt-2 pb-3 space-y-1"},Ue={class:"pt-4 pb-1 border-t border-gray-200"},Ge={class:"flex items-center px-4"},Je={key:0,class:"shrink-0 mr-3"},Ke=["src","alt"],Qe={class:"font-medium text-base text-gray-800"},We={class:"font-medium text-sm text-gray-500"},Xe={class:"mt-3 space-y-1"},Ye=["onSubmit"],Ze=e("div",{class:"border-t border-gray-200"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ot=["onSubmit"],rt={class:"flex items-center"},nt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},at=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[at],lt={key:0,class:"bg-white shadow"},dt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={__name:"AppLayout",props:{title:String},setup(l){const r=j(!1),s=t=>{A.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},c=()=>{A.Inertia.post(route("logout"))};return(t,_)=>(o(),n("div",null,[u(a(I),{title:l.title},null,8,["title"]),u(ie),e("div",he,[e("nav",pe,[e("div",fe,[e("div",ge,[e("div",me,[e("div",ve,[u(a(S),{href:t.route("dashboard")},{default:i(()=>[u(J,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",_e,[u(ce,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[h(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(o(),v(P,{key:0,align:"right",width:"60"},{trigger:i(()=>[e("span",we,[e("button",xe,[h(y(t.$page.props.user.current_team.name)+" ",1),ke])])]),content:i(()=>[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:0},[Se,u(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:i(()=>[h(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),v(w,{key:0,href:t.route("teams.create")},{default:i(()=>[h(" Create New Team ")]),_:1},8,["href"])):p("",!0),Ce,je,(o(!0),n($,null,z(t.$page.props.user.all_teams,d=>(o(),n("form",{key:d.id,onSubmit:k(m=>s(d),["prevent"])},[u(w,{as:"button"},{default:i(()=>[e("div",Te,[d.id==t.$page.props.user.current_team_id?(o(),n("svg",Le,ze)):p("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,Me))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",Ae,[u(P,{align:"right",width:"48"},{trigger:i(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),n("button",Pe,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Fe)])):(o(),n("span",Ne,[e("button",De,[h(y(t.$page.props.user.name)+" ",1),Ee])]))]),content:i(()=>[Ie,u(w,{href:t.route("profile.show")},{default:i(()=>[h(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(w,{key:0,href:t.route("api-tokens.index")},{default:i(()=>[h(" API Tokens ")]),_:1},8,["href"])):p("",!0),Oe,e("form",{onSubmit:k(c,["prevent"])},[u(w,{as:"button"},{default:i(()=>[h(" Log Out ")]),_:1})],40,Ve)]),_:1})])]),e("div",He,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:_[0]||(_[0]=d=>r.value=!r.value)},[(o(),n("svg",Re,[e("path",{class:f({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",qe,[u(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[h(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ue,[e("div",Ge,[t.$page.props.jetstream.managesProfilePhotos?(o(),n("div",Je,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ke)])):p("",!0),e("div",null,[e("div",Qe,y(t.$page.props.user.name),1),e("div",We,y(t.$page.props.user.email),1)])]),e("div",Xe,[u(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:i(()=>[h(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:i(()=>[h(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:k(c,["prevent"])},[u(b,{as:"button"},{default:i(()=>[h(" Log Out ")]),_:1})],40,Ye),t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:1},[Ze,et,u(b,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:i(()=>[h(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),v(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:i(()=>[h(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),tt,st,(o(!0),n($,null,z(t.$page.props.user.all_teams,d=>(o(),n("form",{key:d.id,onSubmit:k(m=>s(d),["prevent"])},[u(b,{as:"button"},{default:i(()=>[e("div",rt,[d.id==t.$page.props.user.current_team_id?(o(),n("svg",nt,it)):p("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,ot))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),n("header",lt,[e("div",dt,[g(t.$slots,"header")])])):p("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{ht as _};

(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("AppBar"),n("v-main",{staticClass:"pt-custom",style:[e.$vuetify.theme.dark?null:{"background-color":"#F5F5F5"}]},[n("div",{staticClass:"mx-7"},[n("router-view")],1)]),n("v-footer",{attrs:{padless:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Kvacker")])])],1),n("v-snackbar",{attrs:{color:"success black--text",top:"",transition:"slide-y-transition",elevation:"24"},model:{value:e.showBackOnline,callback:function(t){e.showBackOnline=t},expression:"showBackOnline"}},[e._v(" "+e._s(e.textOn)+" ")]),n("v-snackbar",{attrs:{color:"error",top:"",transition:"slide-y-transition",elevation:"24"},model:{value:e.offLine,callback:function(t){e.offLine=t},expression:"offLine"}},[e._v(" "+e._s(e.textOff)+" ")])],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"ma-sm-7 animate__animated animate__fadeInDown",style:[e.$vuetify.theme.dark?null:{"background-color":"#fff"}],attrs:{app:"",rounded:"lg",elevation:6}},[n("v-avatar",{attrs:{color:e.$vuetify.breakpoint.smAndDown?"grey darken-1":"transparent",size:"32"}}),n("v-tabs",{staticClass:"ml-n9",attrs:{centered:""}},[n("v-tab",{on:{click:function(t){return e.goHome()}}},[e._v(" Home ")]),n("v-tab",{on:{click:function(t){return e.goDebug()}}},[e._v(" Debug ")]),n("v-tab",{on:{click:function(t){return e.goAbout()}}},[e._v(" About ")])],1),n("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{color:"grey darken-1 shrink",size:"32"}})],1)},l=[],c={data:function(){return{}},methods:{goHome:function(){this.$router.push({name:"Home"})},goAbout:function(){this.$router.push({name:"About"})},goDebug:function(){this.$router.push({name:"Debug"})}}},u=c,d=(n("ca27"),n("2877")),m=n("6544"),p=n.n(m),v=n("40dc"),f=n("8212"),h=n("71a3"),b=n("fe57"),g=Object(d["a"])(u,o,l,!1,null,"aac7b5fc",null),_=g.exports;p()(g,{VAppBar:v["a"],VAvatar:f["a"],VTab:h["a"],VTabs:b["a"]});var k={components:{AppBar:_},data:function(){return{onLine:navigator.onLine,showBackOnline:!1,textOn:"You are back online!",textOff:"Application is offline!"}},computed:{offLine:function(){return!this.onLine}},methods:{updateOnlineStatus:function(e){var t=e.type;this.onLine="online"===t}},watch:{onLine:function(e){var t=this;e&&(this.showBackOnline=!0,setTimeout((function(){t.showBackOnline=!1}),5e3))}},mounted:function(){window.addEventListener("online",this.updateOnlineStatus),window.addEventListener("offline",this.updateOnlineStatus)},beforeDestroy:function(){window.removeEventListener("online",this.updateOnlineStatus),window.removeEventListener("offline",this.updateOnlineStatus)}},x=k,S=(n("f720"),n("7496")),y=n("62ad"),w=n("553a"),C=n("f6c4"),O=n("2db4"),E=Object(d["a"])(x,r,i,!1,null,"655caa1e",null),V=E.exports;p()(E,{VApp:S["a"],VCol:y["a"],VFooter:w["a"],VMain:C["a"],VSnackbar:O["a"]});var T=n("f309"),D=n("fcf4"),N=(n("5363"),n("7756")),$=n.n(N),j=n("da5b"),A=n.n(j);a["a"].use(T["a"]),a["a"].component("my-component",{methods:{changeLocale:function(){this.$vuetify.lang.current="cs"}}});var P=new T["a"]({lang:{locales:{cs:$.a,en:A.a},current:"cs"},theme:{themes:{light:{primary:D["a"].green,secondary:D["a"].deepOrange,accent:D["a"].shades.black,error:D["a"].red.accent3,success:D["a"].green.accent3},dark:{primary:D["a"].green.accent3,secondary:D["a"].deepOrange.accent3,accent:D["a"].shades.black,error:D["a"].red.accent3,success:D["a"].green.accent3}}},icons:{iconfont:"mdi"}}),F=n("9483");Object(F["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].use(s["a"]);var L=new s["a"].Store({state:{user:{firstName:"",lastName:"",email:"",selectedAdditionalTokens:[],additionalTokensData:[]},stepper:{step:1},darkmode:!1,pagesVisited:{Home:!1,About:!1}},mutations:{SET_FIRSTNAME:function(e,t){e.user.firstName=t},SET_LASTNAME:function(e,t){e.user.lastName=t},SET_EMAIL:function(e,t){e.user.email=t},SET_SELECTED_TOKENS:function(e,t){e.user.selectedAdditionalTokens=t},SET_TOKENS_DATA:function(e,t){e.user.additionalTokensData.push(t)},INCREMENT_STEP:function(e){e.stepper.step+=1},SET_DARKMODE:function(e){e.darkmode=!e.darkmode},SET_PAGEVISITED:function(e,t){e.pagesVisited[t]=!0}},actions:{setName:function(e,t){e.commit("SET_FIRSTNAME",t.firstName),e.commit("SET_LASTNAME",t.lastName)},setEmail:function(e,t){e.commit("SET_EMAIL",t)},setSelectedTokens:function(e,t){e.commit("SET_SELECTED_TOKENS",t)},setTokensData:function(e,t){e.commit("SET_TOKENS_DATA",t)},incrementStep:function(e){e.commit("INCREMENT_STEP")},setDarkmode:function(e){e.commit("SET_DARKMODE")},setPageVisited:function(e,t){e.commit("SET_PAGEVISITED",t)}},modules:{},getters:{getUserName:function(e){return e.user.firstName+" "+e.user.lastName},getEmail:function(e){return e.user.email},getSelectedTokens:function(e){return e.user.selectedAdditionalTokens},getTokensData:function(e){return e.user.additionalTokensData},getStep:function(e){return e.stepper.step},getDarkmodeStatus:function(e){return e.darkmode},getHomePageVisited:function(e){return e.pagesVisited.Home}}}),q=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[n("v-col",{staticClass:" mt-7 d-none d-lg-block",attrs:{lg:"3"}},[n("v-sheet",{class:[e.showAnimation?"animate__animated animate__fadeInUp":""],attrs:{rounded:"lg",elevation:6}},[n("WellcomePanel")],1)],1),n("v-col",{staticClass:" mt-7 d-lg-none",attrs:{md:"12",cols:"12"}},[n("v-sheet",{class:[e.showAnimation?"animate__animated animate__fadeInUp":""],attrs:{rounded:"lg",elevation:6}},[n("WellcomePanel")],1)],1),n("v-col",{staticClass:" mt-7",attrs:{cols:"12",sm:"12",md:"7",lg:"6"}},[n("v-sheet",{class:[e.showAnimation?"animate__animated animate__fadeInUp ":""],attrs:{rounded:"lg","min-height":"420",elevation:6}},[n("MainPanel")],1)],1),n("v-col",{staticClass:" mt-7",attrs:{sm:"12",md:"4",lg:"2"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("v-sheet",{class:[e.showAnimation?"animate__animated animate__fadeInUp":""],attrs:{rounded:"lg",elevation:6}},[n("CustomizationPanel")],1)],1)],1),n("v-row",[n("v-col",{staticClass:"mt-7"},[n("v-sheet",{class:[e.showAnimation?"animate__animated animate__fadeInUp":""],attrs:{rounded:"lg","min-height":"200",elevation:6}},[n("HelpPanel")],1)],1)],1)],1)],1)],1)},M=[],B=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"pa-6 d-block d-sm-none d-lg-block"},[e._m(0),n("p",{staticClass:"text-h6 text-justify-left font-weight-regular mb-3"},[n("v-icon",{staticClass:"mr-2 secondary--text"},[e._v("mdi-card-account-details")]),e._v(" Insert your ID card ")],1),n("p",{staticClass:"text-h6 text-justify-left font-weight-regular mb-3"},[n("v-icon",{staticClass:"mr-2 secondary--text"},[e._v("mdi-account-edit")]),e._v(" Fill data on this page ")],1),n("p",{staticClass:"text-h6 text-justify-left font-weight-regular mb-3"},[n("v-icon",{staticClass:"mr-2 secondary--text"},[e._v("mdi-check-circle")]),e._v(" Done, now you get access ")],1)]),n("div",{staticClass:"pa-6 d-none d-sm-block d-lg-none"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("h1",{staticClass:"text-h3 text-justify-left font-weight-medium mb-5"},[e._v(" Let's get "),n("strong",{staticClass:"text-h2 font-weight-bold primary--text"},[e._v("started!")])])]),n("v-col",{attrs:{cols:"6"}},[n("p",{staticClass:"text-h6 text-justify-left font-weight-regular mb-3"},[n("v-icon",{staticClass:"mr-2 secondary--text"},[e._v("mdi-card-account-details")]),e._v(" Insert your ID card ")],1),n("p",{staticClass:"text-h6 text-justify-left font-weight-regular mb-3"},[n("v-icon",{staticClass:"mr-2 secondary--text"},[e._v("mdi-account-edit")]),e._v(" Fill data on this page ")],1),n("p",{staticClass:"text-h6 text-justify-left font-weight-regular mb-3"},[n("v-icon",{staticClass:"mr-2 secondary--text"},[e._v("mdi-check-circle")]),e._v(" Done, now you get access ")],1)])],1)],1)],1)])}),H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"text-h3 text-justify-left font-weight-medium mb-5"},[e._v(" Let's get "),n("strong",{staticClass:"text-h2 font-weight-bold primary--text"},[e._v("started!")])])}],W=n("a523"),R=n("132d"),U=n("0fd9"),K={},z=Object(d["a"])(K,B,H,!1,null,null,null),G=z.exports;p()(z,{VCol:y["a"],VContainer:W["a"],VIcon:R["a"],VRow:U["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-6"},[n("p",{staticClass:"text-h5 text-justify-left font-weight-medium"},[e._v(" Need help? ")]),n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" Where should I inser my card? ")]),n("v-expansion-panel-content",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" What are tokens? ")]),n("v-expansion-panel-content",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" My card got declined. ")]),n("v-expansion-panel-content",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)],1)],1)},Y=[],Q=n("cd55"),X=n("49e2"),Z=n("c865"),ee=n("0393"),te={},ne=Object(d["a"])(te,J,Y,!1,null,null,null),ae=ne.exports;p()(ne,{VExpansionPanel:Q["a"],VExpansionPanelContent:X["a"],VExpansionPanelHeader:Z["a"],VExpansionPanels:ee["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-6"},[n("p",{staticClass:"text-h5 text-justify-left font-weight-medium"},[e._v(" Please enter your credentials ")]),n("v-stepper",{staticClass:"hidden-sm-and-down",attrs:{vertical:""},model:{value:e.stepNumber,callback:function(t){e.stepNumber=t},expression:"stepNumber"}},[n("v-stepper-step",{attrs:{complete:e.stepNumber>1,step:"1"}},[e._v(" Tell us who you are "),n("small",[e._v("Insert your first and last name")])]),n("v-stepper-content",{attrs:{step:"1"}},[n("FormS1")],1),n("v-stepper-step",{attrs:{complete:e.stepNumber>2,step:"2"}},[e._v(" How can we get in touch "),n("small",[e._v("Email will do")])]),n("v-stepper-content",{attrs:{step:"2"}},[n("FormS2")],1),n("v-stepper-step",{attrs:{complete:e.stepNumber>3,step:"3"}},[e._v(" Chose additional tokens "),n("small",[e._v("They will be used for authentication")])]),n("v-stepper-content",{attrs:{step:"3"}},[n("FormS3")],1),n("v-stepper-step",{attrs:{complete:e.stepNumber>4,step:"4"}},[e._v(" Fill information "),n("small",[e._v("Set token's values")])]),n("v-stepper-content",{attrs:{step:"4"}},[n("FormS4")],1)],1),n("v-stepper",{staticClass:"hidden-md-and-up",model:{value:e.stepNumber,callback:function(t){e.stepNumber=t},expression:"stepNumber"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:e.stepNumber>1,step:"1"}},[e._v(" Tell us who you are ")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.stepNumber>2,step:"2"}},[e._v(" How can we get in touch ")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.stepNumber>3,step:"3"}},[e._v(" Chose additional tokens ")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.stepNumber>4,step:"4"}},[e._v(" Fill information ")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("FormS1")],1),n("v-stepper-content",{attrs:{step:"2"}},[n("FormS2")],1),n("v-stepper-content",{attrs:{step:"3"}},[n("FormS3")],1),n("v-stepper-content",{attrs:{step:"4"}},[n("FormS4")],1)],1)],1)],1)},re=[],ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"First Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{"error-messages":a,label:"First Name",required:"",outlined:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})]}}],null,!0)})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"Last Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{"error-messages":a,label:"Last Name",required:"",outlined:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})]}}],null,!0)})],1)],1),n("v-row",[n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:a,color:"primary"},on:{click:e.nextStep}},[e._v(" Continue ")]),n("v-btn",{attrs:{text:""},on:{click:e.clear}},[e._v(" Cancel ")])],1)],1)],1)]}}])})},oe=[],le=n("5530"),ce=n("4c93"),ue=n("7bb1");Object(ue["d"])("eager"),Object(ue["c"])("required",Object(le["a"])(Object(le["a"])({},ce["c"]),{},{message:"{_field_} can not be empty"}));var de={components:{ValidationProvider:ue["b"],ValidationObserver:ue["a"]},data:function(){return{firstName:"",lastName:""}},methods:{nextStep:function(){this.saveData(),this.increment()},saveData:function(){this.$store.dispatch("setName",{firstName:this.firstName,lastName:this.lastName})},increment:function(){this.$store.dispatch("incrementStep")},submit:function(){this.$refs.observer.validate()},clear:function(){this.firstName="",this.lastName="",this.$refs.observer.reset()}}},me=de,pe=n("8336"),ve=n("8654"),fe=Object(d["a"])(me,ie,oe,!1,null,null,null),he=fe.exports;p()(fe,{VBtn:pe["a"],VCol:y["a"],VContainer:W["a"],VRow:U["a"],VTextField:ve["a"]});var be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{"error-messages":a,label:"E-mail",required:"",outlined:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)})],1)],1),n("v-row",[n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:a,color:"primary"},on:{click:e.nextStep}},[e._v(" Continue ")]),n("v-btn",{attrs:{text:""},on:{click:e.clear}},[e._v(" Cancel ")])],1)],1)],1)]}}])})},ge=[];Object(ue["d"])("eager"),Object(ue["c"])("required",Object(le["a"])(Object(le["a"])({},ce["c"]),{},{message:"{_field_} can not be empty"})),Object(ue["c"])("email",Object(le["a"])(Object(le["a"])({},ce["a"]),{},{message:"Email must be valid"}));var _e={components:{ValidationProvider:ue["b"],ValidationObserver:ue["a"]},data:function(){return{email:""}},methods:{nextStep:function(){this.saveData(),this.increment()},saveData:function(){this.$store.dispatch("setEmail",this.email)},increment:function(){this.$store.dispatch("incrementStep")},submit:function(){this.$refs.observer.validate()},clear:function(){this.email="",this.$refs.observer.reset()}}},ke=_e,xe=Object(d["a"])(ke,be,ge,!1,null,null,null),Se=xe.exports;p()(xe,{VBtn:pe["a"],VCol:y["a"],VContainer:W["a"],VRow:U["a"],VTextField:ve["a"]});var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-select",{attrs:{items:e.items,"error-messages":a,label:"Select","data-vv-name":"select",required:"",multiple:"",hint:"Pick one or more","persistent-hint":"",outlined:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]}}],null,!0)})],1)],1),n("v-row",[n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:a,color:"primary"},on:{click:e.nextStep}},[e._v(" Continue ")]),n("v-btn",{attrs:{text:""},on:{click:e.clear}},[e._v(" Cancel ")])],1)],1)],1)]}}])})},we=[];Object(ue["d"])("eager"),Object(ue["c"])("required",Object(le["a"])(Object(le["a"])({},ce["c"]),{},{message:"{_field_} can not be empty"}));var Ce={components:{ValidationProvider:ue["b"],ValidationObserver:ue["a"]},data:function(){return{select:[],items:["Work position","Country","Sex","Age","Departement"]}},methods:{nextStep:function(){this.saveData(),this.increment()},saveData:function(){this.$store.dispatch("setSelectedTokens",this.select)},increment:function(){this.$store.dispatch("incrementStep")},submit:function(){this.$refs.observer.validate()},clear:function(){this.select=[],this.$refs.observer.reset()}}},Oe=Ce,Ee=n("b974"),Ve=Object(d["a"])(Oe,ye,we,!1,null,null,null),Te=Ve.exports;p()(Ve,{VBtn:pe["a"],VCol:y["a"],VContainer:W["a"],VRow:U["a"],VSelect:Ee["a"]});var De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("v-container",{attrs:{fluid:""}},[e.workPosition?n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-select",{attrs:{items:e.workPositions,"error-messages":a,label:"Work position","data-vv-name":"select",required:"",hint:"Pick one","persistent-hint":"",outlined:""},model:{value:e.selectedWorkPosition.data,callback:function(t){e.$set(e.selectedWorkPosition,"data",t)},expression:"selectedWorkPosition.data"}})]}}],null,!0)})],1)],1):e._e(),e.sex?n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-select",{attrs:{items:e.sexes,"error-messages":a,label:"Sex","data-vv-name":"select",required:"",hint:"Pick one","persistent-hint":"",outlined:""},model:{value:e.selectedSex.data,callback:function(t){e.$set(e.selectedSex,"data",t)},expression:"selectedSex.data"}})]}}],null,!0)})],1)],1):e._e(),e.country?n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-select",{attrs:{items:e.countries,"error-messages":a,label:"Country","data-vv-name":"select",required:"",hint:"Pick one","persistent-hint":"",outlined:""},model:{value:e.selectedCountry.data,callback:function(t){e.$set(e.selectedCountry,"data",t)},expression:"selectedCountry.data"}})]}}],null,!0)})],1)],1):e._e(),e.departement?n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-select",{attrs:{items:e.departements,"error-messages":a,label:"Departement","data-vv-name":"select",required:"",hint:"Pick one","persistent-hint":"",outlined:""},model:{value:e.selectedDepartement.data,callback:function(t){e.$set(e.selectedDepartement,"data",t)},expression:"selectedDepartement.data"}})]}}],null,!0)})],1)],1):e._e(),e.age?n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("validation-provider",{attrs:{name:"Age",rules:"required|numeric"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{"error-messages":a,label:"Age",required:"",outlined:""},model:{value:e.selectedAge.data,callback:function(t){e.$set(e.selectedAge,"data",t)},expression:"selectedAge.data"}})]}}],null,!0)})],1)],1):e._e(),n("v-row",[n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:a,color:"primary"},on:{click:e.nextStep}},[e._v(" Finish ")]),n("v-btn",{attrs:{text:""},on:{click:e.clear}},[e._v(" Cancel ")])],1)],1)],1)]}}])})},Ne=[];n("c975");Object(ue["d"])("eager"),Object(ue["c"])("required",Object(le["a"])(Object(le["a"])({},ce["c"]),{},{message:"{_field_} can not be empty"})),Object(ue["c"])("numeric",Object(le["a"])(Object(le["a"])({},ce["b"]),{},{message:"{_field_} must be a number"}));var $e={components:{ValidationProvider:ue["b"],ValidationObserver:ue["a"]},data:function(){return{selectedWorkPosition:{type:"Work position",data:""},workPositions:["CEO","Developer","IT","Accountant"],selectedSex:{type:"Sex",data:""},sexes:["Male","Female"],selectedCountry:{type:"Country",data:""},countries:["Czech Republic","Germany","Poland","Austria","Slovakia"],selectedDepartement:{type:"Departement",data:""},departements:["FEKT","FIT","CESA"],selectedAge:{type:"Age",data:""}}},methods:{isSelected:function(e){return this.selectedAdditionalTokens.indexOf(e)>-1},nextStep:function(){this.saveData(),this.increment()},saveData:function(){this.isFilled(this.selectedWorkPosition),this.isFilled(this.selectedSex),this.isFilled(this.selectedCountry),this.isFilled(this.selectedDepartement),this.isFilled(this.selectedAge)},isFilled:function(e){""!==e.data&&this.$store.dispatch("setTokensData",e)},increment:function(){this.$store.dispatch("incrementStep")},submit:function(){this.$refs.observer.validate()},clear:function(){this.selectedWorkPosition.data="",this.selectedSex.data="",this.selectedCountry.data="",this.selectedDepartement.data="",this.selectedAge.data="",this.$refs.observer.reset()}},computed:{selectedAdditionalTokens:function(){return this.$store.getters.getSelectedTokens},workPosition:function(){return this.isSelected("Work position")},sex:function(){return this.isSelected("Sex")},country:function(){return this.isSelected("Country")},departement:function(){return this.isSelected("Departement")},age:function(){return this.isSelected("Age")}}},je=$e,Ae=Object(d["a"])(je,De,Ne,!1,null,null,null),Pe=Ae.exports;p()(Ae,{VBtn:pe["a"],VCol:y["a"],VContainer:W["a"],VRow:U["a"],VSelect:Ee["a"],VTextField:ve["a"]});var Fe={components:{FormS1:he,FormS2:Se,FormS3:Te,FormS4:Pe},data:function(){return{e1:1}},computed:{stepNumber:function(){return this.$store.getters.getStep}}},Le=Fe,qe=n("ce7e"),Ie=n("7e85"),Me=n("e516"),Be=n("9c54"),He=n("56a4"),We=Object(d["a"])(Le,se,re,!1,null,null,null),Re=We.exports;p()(We,{VDivider:qe["a"],VStepper:Ie["a"],VStepperContent:Me["a"],VStepperHeader:Be["a"],VStepperItems:Be["b"],VStepperStep:He["a"]});var Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-6"},[n("p",{staticClass:"text-h5 text-justify-left font-weight-medium"},[e._v(" Customization ")]),n("v-switch",{attrs:{label:"Turn dark mode "+e.status},on:{click:e.changeDarkmodeStatus},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)},Ke=[],ze={methods:{changeDarkmodeStatus:function(){this.$store.dispatch("setDarkmode")}},computed:{status:function(){return 0==this.$store.getters.getDarkmodeStatus?"on":"off"}}},Ge=ze,Je=n("b73d"),Ye=Object(d["a"])(Ge,Ue,Ke,!1,null,null,null),Qe=Ye.exports;p()(Ye,{VSwitch:Je["a"]});var Xe={components:{WellcomePanel:G,HelpPanel:ae,MainPanel:Re,CustomizationPanel:Qe},data:function(){return{name:"Home",showAnimation:!0}},methods:{setVisited:function(){this.$store.getters.getHomePageVisited?this.showAnimation=!1:this.showAnimation=!0,this.$store.dispatch("setPageVisited",this.name)}},mounted:function(){this.setVisited()}},Ze=Xe,et=n("8dd9"),tt=Object(d["a"])(Ze,I,M,!1,null,null,null),nt=tt.exports;p()(tt,{VCol:y["a"],VContainer:W["a"],VRow:U["a"],VSheet:et["a"]});var at=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12",sm:"5",lg:"3"}},[n("v-sheet",{attrs:{rounded:"lg",elevation:6}},[n("div",{staticClass:"pa-6"},[n("p",{staticClass:"text-h5 text-center font-weight-black"},[e._v(" Kvacker ")]),n("p",{staticClass:"text-caption text-center font-weight-light"},[e._v(" Version 0.1 (hghv2) ")]),n("p",{staticClass:"text-body1 text-center"},[e._v(" Front-end web application for authentication system. ")])])])],1)],1)],1)},st=[],rt={},it=Object(d["a"])(rt,at,st,!1,null,null,null),ot=it.exports;p()(it,{VCol:y["a"],VContainer:W["a"],VRow:U["a"],VSheet:et["a"]});var lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-7"},[n("v-sheet",{attrs:{elevation:"6",rounded:"lg"}},[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v(" Name ")]),n("th",{staticClass:"text-left"},[e._v(" Data ")])])]),n("tbody",[n("tr",[n("td",[e._v("Name")]),n("td",[e._v(e._s(e.name))])]),n("tr",[n("td",[e._v("Email")]),n("td",[e._v(e._s(e.email))])]),n("tr",[n("td",[e._v("Selected tokens")]),n("td",[e._v(e._s(e.tokens))])]),n("tr",[n("td",[e._v("Tokens data")]),n("td",[e._v(e._s(e.tokensData))])]),n("tr",[n("td",[e._v("Darkmode status")]),n("td",[e._v(e._s(e.darkmode))])]),n("tr",[n("td",[e._v("Online")]),n("td",[e._v(e._s(e.onLine)+" | Show back online: "+e._s(e.showBackOnline))])]),n("tr",[n("td",[e._v("Height")]),n("td",[e._v(e._s(e.hgh)+" ")])])])]},proxy:!0}])})],1)],1)},ct=[],ut={data:function(){return{onLine:navigator.onLine,showBackOnline:!1}},computed:{name:function(){return this.$store.getters.getUserName},step:function(){return this.$store.getters.getStep},email:function(){return this.$store.getters.getEmail},tokens:function(){return this.$store.getters.getSelectedTokens},tokensData:function(){return this.$store.getters.getTokensData},darkmode:function(){return this.$store.getters.getDarkmodeStatus},offLine:function(){return!this.onLine},hgh:function(){return this.$vuetify.breakpoint.height}},methods:{updateOnlineStatus:function(e){var t=e.type;this.onLine="online"===t}},watch:{onLine:function(e){var t=this;e&&(this.showBackOnline=!0,setTimeout((function(){t.showBackOnline=!1}),5e3))}},mounted:function(){window.addEventListener("online",this.updateOnlineStatus),window.addEventListener("offline",this.updateOnlineStatus)},beforeDestroy:function(){window.removeEventListener("online",this.updateOnlineStatus),window.removeEventListener("offline",this.updateOnlineStatus)}},dt=ut,mt=n("1f4f"),pt=Object(d["a"])(dt,lt,ct,!1,null,null,null),vt=pt.exports;p()(pt,{VSheet:et["a"],VSimpleTable:mt["a"]}),a["a"].use(q["a"]);var ft=[{path:"/",name:"Home",component:nt},{path:"/debug",name:"Debug",component:vt},{path:"/about",name:"About",component:ot}],ht=new q["a"]({routes:ft}),bt=ht;a["a"].config.productionTip=!1,new a["a"]({vuetify:P,store:L,router:bt,render:function(e){return e(V)}}).$mount("#app"),a["a"].use(s["a"])},c544:function(e,t,n){},ca27:function(e,t,n){"use strict";n("c544")},ead2:function(e,t,n){},f720:function(e,t,n){"use strict";n("ead2")}});
//# sourceMappingURL=app.e90d5973.js.map
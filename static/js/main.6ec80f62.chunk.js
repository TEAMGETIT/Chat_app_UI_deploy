(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},134:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(23),c=a.n(n),o=(a(77),a(7)),u=a(8),i=a(10),l=a(9),d=a(11),p=a(17),E=(a(82),a(83),a(42)),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).updateInput=function(e,t){"newgroupName"===t?a.setState({newgroupName:e.target.value}):""!==e.target.value?a.props.getUser(e.target.value):a.setState({userSuggestions:[]})},a.createGroup=function(e){a.props.createGroup({groupName:a.state.newgroupName,members:a.state.members}),a.setState({chipValue:[],userSuggestions:[]}),e()},a.sendInvite=function(e){a.props.sendInvite({toUser:e||a.state.members}),a.setState({chipValue:[],userSuggestions:[]}),a.close()},a.pushUser=function(e){"Groups"===a.state.popupType||a.state.groupName?(a.setState({members:a.state.members.concat(Number(e.user_id)),chipValue:a.state.chipValue.concat(e),userSuggestions:[]}),a.userInput.value=""):a.sendInvite(e.user_id)},a.generateAutoSuggest=function(){if(a.state.userSuggestions&&a.state.userSuggestions.length>0)return r.a.createElement("div",{className:"auto-suggestions"},a.state.userSuggestions.map(function(e){return r.a.createElement("div",{className:"suggestion",onClick:function(){return a.pushUser(e)}},r.a.createElement("span",null,e.user_name))}))},a.inviteMembers=function(e){a.props.addUser(a.state.members,a.state.groupName),a.clearVal(e)},a.clearVal=function(e){a.setState({chipValue:[],userSuggestions:[]}),e()},a.generateGroupElements=function(e){return r.a.createElement("div",{className:"custom-popup-content"},r.a.createElement("h3",null,"Create Group"),r.a.createElement("p",null,"Groups are where your members communicate. They're best when organized around a topic - #leads for example"),r.a.createElement("div",{className:"input-holder"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{onChange:function(e){return a.updateInput(e,"newgroupName")}})),r.a.createElement("div",{className:"input-holder"},r.a.createElement("label",null,"Send Invites To"),r.a.createElement("div",{className:"chips-input",onClick:function(){a.userInput.focus()}},a.state.chipValue.map(function(e){return r.a.createElement("div",{className:"chip"},e.user_name,r.a.createElement("span",{className:"chip-close"},r.a.createElement("i",{class:"fas fa-times"})))}),r.a.createElement("input",{type:"text",ref:function(e){return a.userInput=e},onChange:function(e){return a.updateInput(e,"members")}})),a.generateAutoSuggest()),r.a.createElement("button",{className:"btn create",onClick:function(){return a.createGroup(e)}},"Create Channel"),r.a.createElement("button",{className:"btn",onClick:function(){return a.clearVal(e)}},"Cancel"))},a.generateAddMembersElements=function(e){return a.close=e,r.a.createElement("div",{className:"custom-popup-content"},r.a.createElement("h3",null,"Add Member"),r.a.createElement("div",{className:"input-holder"},r.a.createElement("label",null,"Send Invites To"),r.a.createElement("input",{onChange:function(e){return a.updateInput(e,"member")}}),a.generateAutoSuggest()),r.a.createElement("button",{className:"btn create",onClick:function(){return a.sendInvite(null)}},"Create Channel"),r.a.createElement("button",{className:"btn",onClick:e},"Cancel"))},a.generateGroupInviteElement=function(e){return r.a.createElement("div",{className:"custom-popup-content"},r.a.createElement("h3",null,"Add Member"),r.a.createElement("div",{className:"input-holder"},r.a.createElement("label",null,"Send Invites To"),r.a.createElement("div",{className:"chips-input",onClick:function(){a.userInput.focus()}},a.state.chipValue.map(function(e){return r.a.createElement("div",{className:"chip"},e.user_name,r.a.createElement("span",{className:"chip-close"},r.a.createElement("i",{class:"fas fa-times"})))}),r.a.createElement("input",{type:"text",ref:function(e){return a.userInput=e},onChange:function(e){return a.updateInput(e,"members")}})),a.generateAutoSuggest()),r.a.createElement("button",{className:"btn create",onClick:function(){return a.inviteMembers(e)}},"Add Member"),r.a.createElement("button",{className:"btn",onClick:function(){return a.clearVal(e)}},"Cancel"))},a.state={popupType:a.props.popupType,newgroupName:"",members:[],chipValue:[],userSuggestions:[],userSearchInfocus:!1,groupName:null},a.userInput="",a.close="",a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.popupType!==this.props.popupType&&this.setState({popupType:e.popupType}),e.groupName&&e.groupName!==this.props.groupName&&this.setState({groupName:e.groupName}),e.userSuggestions!==this.props.userSuggestions&&this.setState({userSuggestions:e.userSuggestions})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"common-popup"},this.state.groupName?r.a.createElement(E.a,{trigger:r.a.createElement("i",{className:"fas fa-cog"}),modal:!0,backdrop:"static"},function(t){return e.generateGroupInviteElement(t)}):r.a.createElement(E.a,{trigger:r.a.createElement("span",{className:"add-icon"},"+"),modal:!0,backdrop:"static"},function(t){return"Groups"===e.state.popupType?e.generateGroupElements(t):e.generateAddMembersElements(t)}))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).setCurrentSelected=function(e,t){a.setState({currentSelected:"Groups"===t?"G"+e.group_id:"I"+e.user_id}),a.props.getConversationHistory("Groups"===t?e.group_id:e.user_id,t)},a.createGroup=function(e){a.props.createGroup(e)},a.sendInvite=function(e){var t=!1;a.props.directMessage&&a.props.directMessage.forEach(function(a){a.user_id===e.toUser&&(t=!0)}),t?a.setCurrentSelected({user_id:e.toUser},"Im"):a.props.sendInvite(e)},a.getUnreadMessage=function(e,t){return"Groups"===t&&a.state.unreadMessage["Groups"+e.group_id]?r.a.createElement("span",{className:"unread-message"},a.state.unreadMessage["Groups"+e.group_id]):"Groups"!==t&&a.state.unreadMessage["Im"+e.user_id]?r.a.createElement("span",{className:"unread-message"},a.state.unreadMessage["Im"+e.user_id]):void 0},a.generateListItems=function(e,t){var s=function(e,a){return("Groups"===t?"G"+a.group_id:"I"+a.user_id)===e?"list-item-content selected":"list-item-content"};return r.a.createElement("div",{className:"list-item-holder"},r.a.createElement("div",{className:"list-item-header"},t,r.a.createElement("span",{className:"add-icon"},r.a.createElement(m,{popupType:t,createGroup:a.createGroup,sendInvite:a.sendInvite,getUser:a.props.getUser,userSuggestions:a.state.userSuggestions}))),e?e.map(function(e){return r.a.createElement("div",{className:s(a.state.currentSelected,e),onClick:function(){return a.setCurrentSelected(e,t)}},"Groups"===t?"#":r.a.createElement("i",{class:"fas fa-circle"})," ","Groups"===t?e.group_name:e.user_name," ",a.getUnreadMessage(e,t))}):"")},a.state={groups:[],directMessage:[],threads:[],currentSelected:null,userSuggestions:[],unreadMessage:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e),e.groups===this.props.groups&&e.directMessage===this.props.directMessage&&this.props.threads===e.threads||this.setState({groups:e.groups,directMessage:e.directMessage,threads:e.threads,userName:e.userDetails.user_name}),e.userSuggestions&&e.userSuggestions!==this.props.userSuggestions&&this.setState({userSuggestions:e.userSuggestions}),e.unreadMessage!==this.props.unreadMessage&&(console.log(e.unreadMessage),this.setState({unreadMessage:e.unreadMessage}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"side-bar-component"},r.a.createElement("div",{className:"current-user-name"},r.a.createElement("span",null,"Chat App"),r.a.createElement("p",null,this.state.userName)),this.generateListItems(this.state.groups,"Groups"),this.generateListItems(this.state.directMessage,"Direct Message"))}}]),t}(r.a.Component),g={GET_INITIAL_DATA:"GET_INITIAL_DATA",GET_INITIAL_DATA_SUCESS:"GET_INITIAL_DATA_SUCESS",GET_INDIVIDUAL_CONVERSATION_HISTORY:"GET_INDIVIDUAL_CONVERSATION_HISTORY",GET_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS:"GET_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS",SEND_INDIVIDUAL_MESSAGE:"SEND_INDIVIDUAL_MESSAGE",SET_CURRENT_MODE_DETAILS:"SET_CURRENT_MODE_DETAILS",SET_CURRENT_USER:"SET_CURRENT_USER",SEND_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS:"SEND_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS",GET_GROUP_CONVERSATION_HISTORY:"GET_GROUP_CONVERSATION_HISTORY",GET_GROUP_CONVERSATION_HISTORY_SUCCESS:"GET_GROUP_CONVERSATION_HISTORY_SUCCESS",CREATE_GROUP:"CREATE_GROUP",CREATE_GROUP_SUCCESS:"CREATE_GROUP_SUCCESS",SEND_GROUP_MESSAGE:"SEND_GROUP_MESSAGE",CREATE_IM:"CREATE_IM",CREATE_IM_SUCESS:"CREATE_IM_SUCESS",SEARCH_USER:"SEARCH_USER",SEARCH_USER_SUCESS:"SEARCH_USER_SUCESS",GET_CHANNEL_DETAILS:"GET_CHANNEL_DETAILS",GET_CHANNEL_DETAILS_SUCESS:"GET_CHANNEL_DETAILS_SUCESS",UPDATE_UNREAD_DETAILS:"UPDATE_UNREAD_DETAILS",PUSH_MESSAGE:"PUSH_MESSAGE",UPDATE_GROUP:"UPDATE_GROUP",SEND_THREAD_MESSAGE:"SEND_THREAD_MESSAGE",SEND_THREAD_MESSAGE_SUCESS:"SEND_THREAD_MESSAGE_SUCESS",GET_THREAD_CONVERSATION_HISTORY:"GET_THREAD_CONVERSATION_HISTORY",GET_THREAD_CONVERSATION_HISTORY_SUCESS:"GET_THREAD_CONVERSATION_HISTORY_SUCESS"},h=a(43),_=a.n(h),I={GET_INITIAL_DETAILS:{endPoint:"getInitialDetails",method:"GET",containsParams:!0},GET_INDIVIDUAL_CONVERSATION:{endPoint:"getMessageHistoryForUsers",method:"GET",containsParams:!0},SEND_INDIVIDUAL_MESSAGE:{endPoint:"sendDirectMessage",method:"POST",containsParams:!0},GET_GROUP_CONVERSATION:{endPoint:"getMessageHistoryForGroup",method:"GET",containsParams:!0},CREATE_GROUP:{endPoint:"createGroup",method:"POST",containsParams:!0},SEND_GROUP_MESSAGE:{endPoint:"sendGroupMessage",method:"POST",containsParams:!0},CREATE_IM:{endPoint:"createIm",method:"POST",containsParams:!0},SEARCH_USER:{endPoint:"searchUsers",method:"GET",containsParams:!0},GET_CHANNEL_DETAILS:{endPoint:"getChannelDetails",method:"GET",containsParams:!0},UPDATE_GROUP:{endPoint:"updateGroup",method:"POST",containsParams:!0},SEND_THREAD_MESSAGE:{endPoint:"sendThreadMessage",method:"POST",containsParams:!0},GET_THREAD_CONVERSATION_HISTORY:{endPoint:"getThreadMessage",method:"GET",containsParams:!0}};function f(e){switch(e.requestData.method){case"GET":return _.a.get(e.requestData.request.href).then(function(e){return e.data});case"POST":return _.a.post(e.requestData.request.href,e.requestData.payload).then(function(e){return e.data});default:return}}function v(e){var t=I[e.apiName],a=new URL("http://localhost:3001/api/"+t.endPoint);return t.containsParams&&e.params&&Object.keys(e.params).forEach(function(t,s){a.searchParams.append(t,e.params[t])}),{method:t.method,request:a,payload:e.payload}}function T(e){return{type:g.GET_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS,data:e}}function N(e){return{type:g.SEND_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS,data:e}}function O(e){return{type:g.CREATE_IM_SUCESS,data:e}}function A(e){return{type:g.SEND_THREAD_MESSAGE_SUCESS,data:e}}function b(e){return{type:g.GET_THREAD_CONVERSATION_HISTORY_SUCESS,data:e}}function U(e){return{type:g.CREATE_GROUP_SUCCESS,data:e}}function D(e){return{type:g.GET_INITIAL_DATA_SUCESS,data:e}}function R(e){var t={apiName:"SEARCH_USER"};t.params=e;var a=v(t);return{type:g.SEARCH_USER,requestData:a}}function C(e){return{type:g.SEARCH_USER_SUCESS,data:e}}function G(e){return{type:g.GET_CHANNEL_DETAILS_SUCESS,data:e}}var M=a(26),y=a.n(M),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).listenMessageVal=function(e){e.on("emit message",function(e){var t;Number(e.fromUser)!==a.state.userDetails.user_id&&("Groups"===a.state.selectedMode&&a.state.selectedMode+a.state.selectedId!==e.type+e.id||"Groups"!==a.state.selectedMode&&(a.state.userDetails.user_id<a.state.selectedId?a.state.userDetails.user_id+":"+a.state.selectedId:a.state.selectedId+":"+a.state.userDetails.user_id)!==e.id)?a.props.dispatch((t={id:"Groups"!==e.type?e.fromUser:e.id,mode:e.type},{type:g.UPDATE_UNREAD_DETAILS,data:t})):Number(e.fromUser)!==a.state.userDetails.user_id&&a.props.dispatch(function(e){return{type:g.PUSH_MESSAGE,data:e}}(e))})},a.createInitialConnection=function(e,t,s){e&&e.forEach(function(e){a.connectedSockets.includes("Groups/"+e.group_id)||(a.connectedSockets.push("Groups/"+e.group_id),a.connect("Groups/"+e.group_id))}),t&&t.forEach(function(e){var t="Im/"+(s<e.user_id?s+":"+e.user_id:e.user_id+":"+s);a.connectedSockets.includes(t)||(a.connectedSockets.push(t),a.connect(t))})},a.connect=function(e){var t=y.a.connect("http://localhost:3002/"+e);return a.listenMessageVal(t),t},a.listenVal=function(e){e.on("Update New Group",function(e){Number(e.created_by)!==a.state.userDetails.user_id&&a.props.dispatch(U(e))}),e.on("Update New Im",function(e){a.props.dispatch(O(e))})},a.connectUser=function(e){var t=y.a.connect("http://localhost:3002/"+e);return a.listenVal(t),t},a.getConversationHistory=function(e,t){var s;a.props.dispatch(function(e){var t={apiName:"GET_CHANNEL_DETAILS"};t.params=e;var a=v(t);return{type:g.GET_CHANNEL_DETAILS,requestData:a}}({type:t,id:e})),a.props.dispatch("Groups"===t?function(e){var t={apiName:"GET_GROUP_CONVERSATION"};t.params=e;var a=v(t);return{type:g.GET_GROUP_CONVERSATION_HISTORY,requestData:a}}({id:e}):function(e){var t={apiName:"GET_INDIVIDUAL_CONVERSATION"};t.params=e;var a=v(t);return{type:g.GET_INDIVIDUAL_CONVERSATION_HISTORY,requestData:a}}({fromUser:a.state.userDetails.user_id,toUser:e})),a.props.dispatch((s={id:e,type:t},{type:g.SET_CURRENT_MODE_DETAILS,data:s}))},a.createGroup=function(e){var t={groupName:e.groupName,members:e.members.concat(Number(a.props.currentUserId)),time:parseInt(((new Date).getTime()/1e3).toFixed(0)),createdBy:a.props.currentUserId};a.props.dispatch(function(e){var t={apiName:"CREATE_GROUP"};t.payload=e;var a=v(t);return{type:g.CREATE_GROUP,requestData:a}}(t))},a.getUser=function(e){a.props.dispatch(R({searchString:e}))},a.sendInvite=function(e){var t={toUser:e.toUser,time:parseInt(((new Date).getTime()/1e3).toFixed(0)),fromUser:a.props.currentUserId};a.props.dispatch(function(e){var t={apiName:"CREATE_IM"};t.payload=e;var a=v(t);return{type:g.CREATE_IM,requestData:a}}(t)),t.userName=a.props.userDetails.user_name},a.state={userDetails:a.props.userDetails,userSuggestions:a.props.userSuggestions,socket:"",selectedMode:"",selectedId:"",unreadMessage:{}},a.connectedSockets=[],a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.userDetails&&e.userDetails!==this.props.userDetails&&this.setState({userDetails:e.userDetails,socket:this.connectUser("User/"+e.userDetails.user_id)}),e.groups&&e.groups!==this.props.groups&&this.createInitialConnection(e.groups,null),e.directMessage&&e.directMessage!==this.props.directMessage&&this.createInitialConnection(null,e.directMessage,e.userDetails.user_id||this.props.userDetails.user_id),e.userSuggestions&&this.props.userSuggestions!==e.userSuggestions&&this.setState({userSuggestions:e.userSuggestions}),e.selectedId===this.props.selectedId&&e.selectedMode===this.props.selectedMode||this.setState({selectedMode:e.selectedMode,selectedId:e.selectedId}),e.unreadMessage!==this.state.unreadMessage&&this.setState({unreadMessage:e.unreadMessage})}},{key:"render",value:function(){return r.a.createElement(S,{userDetails:this.state.userDetails,groups:this.props.groups,directMessage:this.props.directMessage,threads:this.state.threads,getConversationHistory:this.getConversationHistory,createGroup:this.createGroup,sendInvite:this.sendInvite,getUser:this.getUser,userSuggestions:this.state.userSuggestions,unreadMessage:this.props.unreadMessage})}}]),t}(r.a.Component);var w=Object(p.b)(function(e){return{userDetails:e.userDetails,groups:e.groups,directMessage:e.directMessage,threads:e.threads,currentUserId:e.currentUserId,userSuggestions:e.userSuggestions,selectedId:e.selectedId,selectedMode:e.selectedMode,unreadMessage:e.unreadMessage}})(j),k=(a(129),a(130),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={channelDetails:{},userSuggestions:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.channelDetails&&(this.setState({channelDetails:e.channelDetails,addUser:e.addUser}),console.log(e.addUser)),e.userSuggestions&&e.userSuggestions!==this.userSuggestions&&this.setState({userSuggestions:e.userSuggestions})}},{key:"render",value:function(){var e=this.state.channelDetails;return r.a.createElement("div",{className:"details-bar"},r.a.createElement("div",{className:"message-area-details"},r.a.createElement("div",{className:"message-area-title"},e&&"Groups"===e.type?"#"+e.group_name:e.user_name),e&&"Groups"===e.type?r.a.createElement("div",{className:"message-area-content"},r.a.createElement("span",{className:"content"},r.a.createElement("i",{className:"far fa-star"})),r.a.createElement("span",{className:"content"},r.a.createElement("i",{className:"far fa-user"})," ",e.members.length)):""),r.a.createElement("div",{className:"search-area-details"},r.a.createElement("div",{className:"search-container"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{type:"text",placeholder:"Search..."})),r.a.createElement(m,{addUser:this.state.addUser,getUser:this.props.getUser,userSuggestions:this.state.userSuggestions,groupName:e.group_name})))}}]),t}(r.a.Component)),x=(a(131),a(69)),P=a.n(x),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).createThread=function(e){a.props.openThreadWindow(e)},a.generateMessageContent=function(e){var t="";return e?e.map(function(e){var s=new Date(1e3*e.time).toLocaleDateString("en-US"),n=t!==s;return t=n?s:t,r.a.createElement("div",null,n?r.a.createElement("div",{className:"display-date"},r.a.createElement("div",{className:"date-border"}),r.a.createElement("span",null,s)):"",r.a.createElement("div",{className:"message-content-holder"},r.a.createElement("div",{className:"profile-img-holder"},r.a.createElement("img",{src:P.a})),r.a.createElement("div",{className:"message-content"},r.a.createElement("span",{className:"user-name"},e.userName||e.user_name),r.a.createElement("span",null,new Date(1e3*e.time).toLocaleTimeString("en-US")," "),a.props.isTread?"":r.a.createElement("i",{class:"far fa-comment-dots reply",onClick:function(){return a.createThread(e)}}),r.a.createElement("p",{className:"message"},e.message," "))),e.threads_count>0?r.a.createElement("div",null,e.threads_count," Relpies"):"")}):""},a.state={conversations:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({conversations:e.conversations})}},{key:"render",value:function(){return r.a.createElement("div",{class:"external-holder"},this.generateMessageContent(this.state.conversations))}}]),t}(r.a.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).sendMessage=function(e){"Enter"===e.key&&(a.props.sendMessage(e.target.value),e.target.value="")},a.openThreadWindow=function(e){a.props.getThreadsHistroy(e),a.setState({messageWindowWidth:"65%",threadDetails:e})},a.sendThreadMessage=function(e){"Enter"===e.key&&(a.props.sendMessage(e.target.value,a.state.threadDetails),e.target.value="")},a.state={conversations:[],userSuggestions:[],messageWindowWidth:"87%",threadDetails:null,threads:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.conversations&&this.setState({conversations:e.conversations}),e.userSuggestions&&e.userSuggestions!==this.userSuggestions&&this.setState({userSuggestions:e.userSuggestions}),e.threads&&this.props.threads!==e.threads&&this.setState({threads:e.threads})}},{key:"render",value:function(){var e=this;return this.props.channelDetails?r.a.createElement("div",{className:"message-area"},r.a.createElement(k,{channelDetails:this.props.channelDetails,getUser:this.props.getUser,userSuggestions:this.state.userSuggestions,addUser:this.props.addUser}),r.a.createElement("div",{className:"message-display-area",style:{width:this.state.messageWindowWidth}},r.a.createElement(H,{conversations:this.state.conversations,openThreadWindow:this.openThreadWindow})),r.a.createElement("div",{className:"message-entry-area",style:{width:this.state.messageWindowWidth}},r.a.createElement("input",{placeholder:"Enter Messge here",onKeyDown:this.sendMessage})),"65%"===this.state.messageWindowWidth?r.a.createElement("div",{class:"thread-area"},r.a.createElement("div",{className:"thread-header"},r.a.createElement("span",null,"Threads"),r.a.createElement("p",null,this.state.threadDetails.userName),r.a.createElement("i",{class:"fas fa-times",onClick:function(){return e.setState({messageWindowWidth:"87%"})}})),r.a.createElement("div",{className:"threads-message-holder"},r.a.createElement(H,{conversations:this.state.threads,isTread:!0})),r.a.createElement("div",{className:"thread-entry-area"},r.a.createElement("input",{placeholder:"Enter Messge here",onKeyDown:this.sendThreadMessage}))):""):""}}]),t}(r.a.Component),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).connect=function(e,t){var s="";return s="Groups"===e?e+"/"+t:"Im/"+(a.state.currentUserId<t?a.state.currentUserId+":"+t:t+":"+a.state.currentUserId),y.a.connect("http://localhost:3002/"+s)},a.sendMessage=function(e,t){if(t){var s={id:t.chat_id,time:parseInt(((new Date).getTime()/1e3).toFixed(0)),fromUser:Number(a.state.currentUserId),message:e,userName:a.props.userDetails.user_name,chat_type:"Groups"!==a.state.selectedMode?"Im":"Groups",users_id:t.users_id,group_id:t.group_id};a.props.dispatch(function(e){var t={apiName:"SEND_THREAD_MESSAGE"};t.payload=e;var a=v(t);return{type:g.SEND_THREAD_MESSAGE,requestData:a}}(s))}else{var r={type:a.state.selectedMode,id:a.state.selectedId,time:parseInt(((new Date).getTime()/1e3).toFixed(0)),fromUser:a.state.currentUserId,message:e};"Groups"!==a.state.selectedMode&&(r.id=a.state.currentUserId<a.state.selectedId?a.state.currentUserId+":"+a.state.selectedId:a.state.selectedId+":"+a.state.currentUserId),a.props.dispatch("Groups"===a.state.selectedMode?function(e){var t={apiName:"SEND_GROUP_MESSAGE"};t.payload=e;var a=v(t);return{type:g.SEND_GROUP_MESSAGE,requestData:a}}(r):function(e){var t={apiName:"SEND_INDIVIDUAL_MESSAGE"};t.payload=e;var a=v(t);return{type:g.SEND_INDIVIDUAL_MESSAGE,requestData:a}}(r)),r.userName=a.props.userDetails.user_name,a.state.socket.emit("receive message",r)}},a.getUser=function(e){a.props.dispatch(R({searchString:e}))},a.addUser=function(e,t){a.props.dispatch(function(e){var t={apiName:"UPDATE_GROUP"};t.payload=e;var a=v(t);return{type:g.UPDATE_GROUP,requestData:a}}({id:a.state.selectedId,members:e,groupName:t}))},a.getThreadsHistroy=function(e){console.log(e);var t={chat_id:e.chat_id,chat_type:"Groups"!==a.state.selectedMode?"Im":"Groups"};e.group_id?t.group_id=e.group_id:t.users_id=e.users_id,a.props.dispatch(function(e){var t={apiName:"GET_THREAD_CONVERSATION_HISTORY"};t.params=e;var a=v(t);return{type:g.GET_THREAD_CONVERSATION_HISTORY,requestData:a}}(t))},a.state={conversations:[],currentUserId:null,selectedId:null,selectedMode:null,socket:"",userSuggestions:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.conversations&&this.props.conversations!==e.conversations&&this.setState({conversations:e.conversations}),e.currentUserId&&this.setState({currentUserId:e.currentUserId}),e.selectedId&&this.props.selectedId!==e.selectedId&&this.setState({selectedId:e.selectedId,selectedMode:e.selectedMode,socket:this.connect(e.selectedMode,e.selectedId)}),e.userSuggestions&&this.props.userSuggestions!==e.userSuggestions&&this.setState({userSuggestions:e.userSuggestions}),e.threads&&this.props.threads!==e.threads&&this.setState({threads:e.threads})}},{key:"render",value:function(){return r.a.createElement(L,{conversations:this.state.conversations,sendMessage:this.sendMessage,channelDetails:this.props.channelDetails,getUser:this.getUser,userSuggestions:this.state.userSuggestions,addUser:this.addUser,threads:this.state.threads,getThreadsHistroy:this.getThreadsHistroy})}}]),t}(r.a.Component);var Y=Object(p.b)(function(e){return{conversations:e.conversations,threads:e.threads,currentUserId:e.currentUserId,selectedId:e.selectedId,selectedMode:e.selectedMode,userDetails:e.userDetails,channelDetails:e.channelDetails,userSuggestions:e.userSuggestions}})(V),q=(a(132),a(133),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={userDetails:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(function(e){var t={apiName:"GET_INITIAL_DETAILS"};t.params=e;var a=v(t);return{type:g.GET_INITIAL_DATA,requestData:a}}({userId:this.props.currentUserId}))}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"side-bar"},r.a.createElement(w,null)),r.a.createElement("div",{className:"main-area"},r.a.createElement(Y,null)))}}]),t}(r.a.Component));var W=Object(p.b)(function(e){return{currentUserId:e.currentUserId}})(q),B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))},F=(a(134),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).storeUserId=function(e){a.setState({userId:e.target.value})},a.login=function(){a.props.login(a.state.userId)},a.state={userId:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"authentication"},r.a.createElement("div",{class:"authentication-form-login"},r.a.createElement("h3",null,"Login"),r.a.createElement("div",{className:"input-holder"},r.a.createElement("label",null,"User Id"),r.a.createElement("input",{type:"text",placeholder:"User Id",onChange:this.storeUserId})),r.a.createElement("div",{className:"input-holder"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"Password"})),r.a.createElement("div",{class:"remember-me"}),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"button-holder"},r.a.createElement("button",{type:"button",class:"btn custom-btn center-block",onClick:this.login},"Login")))),r.a.createElement("a",{href:"https://www.freepik.com/free-photos-vectors/background"},"Background vector created by designertale - www.freepik.com"),r.a.createElement("a",{href:"https://www.freepik.com/free-photos-vectors/business"},"Business photo created by freepik - www.freepik.com"))}}]),t}(r.a.Component));var K=a(20),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).checkLogin=function(e){var t;a.props.dispatch((t={id:e},{type:g.SET_CURRENT_USER,data:t}))},a.state={userDetails:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e),e.currentUserId&&this.props.history.push("/message")}},{key:"render",value:function(){return r.a.createElement(F,{login:this.checkLogin})}}]),t}(r.a.Component);var z=Object(K.f)(Object(p.b)(function(e){return{currentUserId:e.currentUserId}})(X)),J=a(40),Q=a(21),Z=a(71),$={userDetails:{},groups:[],directMessage:[],threads:[],conversations:[],currentUserId:null,selectedId:null,selectedMode:null,userSuggestions:[],channelDetails:"",unreadMessage:{}};var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.GET_INITIAL_DATA_SUCESS:var a=t.data;return Object.assign({},e,{userDetails:a,groups:a.groups||[],directMessage:a.im_users||[],threads:a.threads||[]});case g.GET_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS:return Object.assign({},e,{conversations:t.data});case g.SET_CURRENT_MODE_DETAILS:var s=("Groups"!==t.data.type?"Im":"Groups")+t.data.id,r=Object.assign({},e.unreadMessage);return r[s]=0,Object.assign({},e,{selectedId:t.data.id,selectedMode:t.data.type,unreadMessage:r});case g.SEND_INDIVIDUAL_CONVERSATION_HISTORY_SUCESS:return Object.assign({},e,{conversations:e.conversations.concat(t.data)});case g.SET_CURRENT_USER:return Object.assign({},e,{currentUserId:t.data.id});case g.CREATE_GROUP_SUCCESS:return Object.assign({},e,{groups:e.groups.concat(t.data)});case g.CREATE_IM_SUCESS:return Object.assign({},e,{directMessage:e.directMessage.concat(t.data)});case g.SEARCH_USER_SUCESS:return Object.assign({},e,{userSuggestions:t.data});case g.GET_CHANNEL_DETAILS_SUCESS:return Object.assign({},e,{channelDetails:t.data});case g.UPDATE_UNREAD_DETAILS:var n=("Groups"!==t.data.mode?"Im":"Groups")+t.data.id,c=Object.assign({},e.unreadMessage);return c[n]=e.unreadMessage[n]?e.unreadMessage[n]+1:1,Object.assign({},e,{unreadMessage:c});case g.PUSH_MESSAGE:return Object.assign({},e,{conversations:e.conversations.concat(t.data)});case g.SEND_THREAD_MESSAGE_SUCESS:return Object.assign({},e,{threads:e.threads.concat(t.data)});case g.GET_THREAD_CONVERSATION_HISTORY_SUCESS:return Object.assign({},e,{threads:t.data});default:return e}},te=a(3),ae=a.n(te),se=a(4),re=ae.a.mark(Ue),ne=ae.a.mark(De),ce=ae.a.mark(Re),oe=ae.a.mark(Ce),ue=ae.a.mark(Ge),ie=ae.a.mark(Me),le=ae.a.mark(ye),de=ae.a.mark(je),pe=ae.a.mark(we),Ee=ae.a.mark(ke),me=ae.a.mark(xe),Se=ae.a.mark(Pe),ge=ae.a.mark(He),he=ae.a.mark(Le),_e=ae.a.mark(Ve),Ie=ae.a.mark(Ye),fe=ae.a.mark(qe),ve=ae.a.mark(We),Te=ae.a.mark(Be),Ne=ae.a.mark(Fe),Oe=ae.a.mark(Ke),Ae=ae.a.mark(Xe),be=ae.a.mark(ze);function Ue(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(D(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},re,null,[[0,9]])}function De(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(T(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},ne,null,[[0,9]])}function Re(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(N(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},ce,null,[[0,9]])}function Ce(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(U(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},oe,null,[[0,9]])}function Ge(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(O(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},ue,null,[[0,9]])}function Me(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(C(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},ie,null,[[0,9]])}function ye(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(G(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},le,null,[[0,9]])}function je(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(se.a)(f,e);case 3:t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},de,null,[[0,6]])}function we(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(A(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},pe,null,[[0,9]])}function ke(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(f,e);case 3:if(!(t=a.sent)){a.next=7;break}return a.next=7,Object(se.c)(b(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},Ee,null,[[0,9]])}function xe(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.GET_INITIAL_DATA,Ue);case 2:case"end":return e.stop()}},me)}function Pe(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.GET_INDIVIDUAL_CONVERSATION_HISTORY,De);case 2:case"end":return e.stop()}},Se)}function He(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.GET_GROUP_CONVERSATION_HISTORY,De);case 2:case"end":return e.stop()}},ge)}function Le(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.SEND_INDIVIDUAL_MESSAGE,Re);case 2:case"end":return e.stop()}},he)}function Ve(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.SEND_GROUP_MESSAGE,Re);case 2:case"end":return e.stop()}},_e)}function Ye(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.CREATE_GROUP,Ce);case 2:case"end":return e.stop()}},Ie)}function qe(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.CREATE_IM,Ge);case 2:case"end":return e.stop()}},fe)}function We(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.SEARCH_USER,Me);case 2:case"end":return e.stop()}},ve)}function Be(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.GET_CHANNEL_DETAILS,ye);case 2:case"end":return e.stop()}},Te)}function Fe(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.UPDATE_GROUP,je);case 2:case"end":return e.stop()}},Ne)}function Ke(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.SEND_THREAD_MESSAGE,we);case 2:case"end":return e.stop()}},Oe)}function Xe(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(g.GET_THREAD_CONVERSATION_HISTORY,ke);case 2:case"end":return e.stop()}},Ae)}function ze(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.b)(xe);case 2:return e.next=4,Object(se.b)(Pe);case 4:return e.next=6,Object(se.b)(He);case 6:return e.next=8,Object(se.b)(Le);case 8:return e.next=10,Object(se.b)(Ye);case 10:return e.next=12,Object(se.b)(Ve);case 12:return e.next=14,Object(se.b)(qe);case 14:return e.next=16,Object(se.b)(We);case 16:return e.next=18,Object(se.b)(Be);case 18:return e.next=20,Object(se.b)(Fe);case 20:return e.next=22,Object(se.b)(Ke);case 22:return e.next=24,Object(se.b)(Xe);case 24:case"end":return e.stop()}},be)}var Je=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=Object(Z.a)(),t=Object(Q.d)(ee,Object(Q.a)(e));return e.run(ze),t}(),Qe=r.a.createElement(p.a,{store:Je},r.a.createElement(J.a,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/",component:z}),r.a.createElement(K.a,{path:"/message",component:B}))));c.a.render(Qe,document.getElementById("root"))},69:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAArlBMVEUrrHaFzq/5+fnG5tmn2sWR07eGzrB8yqmHz7F1x6WP0rV0x6SW1Lqi2cK44M/Q6t/q8+9It4l9y6q13843sH7z9/XO6d1hwJjE5dhlwpswrnnc7ueU07lqxJ5OuYzw9vM7soDe7+gvrXgzr3u24M5DtYXS6+BavZTm8u13yKf09/ZBtIS14M40r3uL0LM5sX+Q0rYvrXnA5NXx9vTU7OK/49TB5NXl8vbn8/ZEvt988mh+AAAAvUlEQVR4Ae3M1UEDURSGwcuP++K2gsMqEu+/sbzG9YufKWBcP1tqt+1GNSTaoaJdKtqjov1JowO1O5w0OlK740mjEyo6paIzKjqnIg+KLgRFl1R0BUXXN1C0Lyi6haI7QdE9FD2IiR6foMgXEwViojBioucXIdHrtpDo7V1I9PEpJPr6FhLFiYgozSQgyotIQPTz60lTR39BlkhTR8V/SRIQaUTlykBVJ8iqRRZZZFGNUXcNyMwjiyyyyCKLmut8a+hc1LxTAAAAAElFTkSuQmCC"},72:function(e,t,a){e.exports=a(137)},77:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.6ec80f62.chunk.js.map
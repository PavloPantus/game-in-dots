(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),s=n.n(o),u=n(1),c=(n(25),Object(u.b)(function(e){return{}},{})(function(e){var t=e.leader;return a.a.createElement("div",{className:"leader"},a.a.createElement("span",{className:"leader__name"},t.winner),a.a.createElement("span",{className:"leader__date"},t.date))})),l=(n(26),n(4)),d=n.n(l),i="https://starnavi-frontend-test-task.herokuapp.com",f=function(e){var t,n;return d.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(fetch("".concat(i,"/").concat(e)));case 2:return t=r.sent,r.next=5,d.a.awrap(t.json());case 5:return n=r.sent,r.abrupt("return",n);case 7:case"end":return r.stop()}})},E=function(e){return e.leaders},p=function(){return function(e){f("winners").then(function(t){e({type:"UPDATE_LEADERS",payload:t})}).catch().finally()}},m={loadLeaders:p},h=Object(u.b)(function(e){return{leaders:E(e)}},m)(function(e){var t=e.leaders,n=e.loadLeaders;return Object(r.useEffect)(function(){n()},[n]),a.a.createElement("section",{className:"leaders-bord"},a.a.createElement("h2",{className:"leaders-bord__heading"},"Leader Bord"),t.slice(-15).map(function(e){return a.a.createElement(c,{key:e.id,leader:e})}))}),y=function(e){return e.presets},_=(n(28),n(13)),v=n.n(_),S=function(e){return e.gameStarted},g=function(e){return{type:"SET_GAME_STARTED",payload:e}},R=function(e){return e.notUsedIndexes},U=function(e){return e.activeRandomSquare},w=n(7),N=function(e){return e.userWonIndexes},T=function(e){return{type:"CLEAR_USER_WON_INDEXES",payload:e}},I=function(e){return e.userLostIndexes},x=function(e){return{type:"CLEAR_USER_LOST_INDEXES",payload:e}},A=function(e){return e.currentGameMode},O=function(e){return e.showResults},D=function(e){return{type:"SET_SHOW_RESULTS",payload:e}},b=function(e){return e.winner},L=function(e){return e.currentPlayer},P={setGameStarted:g,updateNotUsedIndexes:function(e){return{type:"UPDATE_NOT_USED_INDEXES",payload:e}},setActiveRandomSquare:function(e){return{type:"SET_RANDOM_SQUARE",payload:e}},updateUserWonIndexes:function(e){return{type:"UPDATE_USER_WON_INDEXES",payload:e}},updateUserLostIndexes:function(e){return{type:"UPDATE_USER_LOST_INDEXES",payload:e}},clearUserWonIndexes:T,clearUserLostIndexes:x,setShowResults:D,setWinner:function(e){return{type:"SET_WINNER",payload:e}},sendWinnerInfoToServer:function(e){return function(t){return function(e){var t,n;return d.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(fetch("".concat(i,"/winners"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 2:return t=r.sent,r.next=5,d.a.awrap(t.json());case 5:return n=r.sent,console.log("\u0423\u0441\u043f\u0435\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"),r.abrupt("return",n);case 8:case"end":return r.stop()}})}(e)}},loadLeadrs:p},M=Object(u.b)(function(e){return{gameStarted:S(e),notUsedIndexes:R(e),activeRandomSquare:U(e),userWonIndexes:N(e),userLostIndexes:I(e),currentGameMode:A(e),presets:y(e),currentPlayer:L(e)}},P)(function(e){var t=e.currentGameMode,n=e.gameStarted,o=e.setGameStarted,s=e.notUsedIndexes,u=e.updateNotUsedIndexes,c=e.setActiveRandomSquare,l=e.activeRandomSquare,d=e.updateUserWonIndexes,i=e.userWonIndexes,f=e.updateUserLostIndexes,E=e.userLostIndexes,p=e.presets,m=e.clearUserWonIndexes,h=e.clearUserLostIndexes,y=e.setShowResults,_=e.setWinner,S=e.currentPlayer,g=e.sendWinnerInfoToServer,R=e.loadLeadrs,U=Object(r.useMemo)(function(){console.log("counting");for(var e=[],n=0;n<Math.pow(t?p[t].field:5,2);n+=1)e.push(n);return e},[t,p]);Object(r.useEffect)(function(){for(var e=[],n=0;n<Math.pow(t?p[t].field:5,2);n+=1)e.push(n);u(e)},[t,p,u]);return Object(r.useEffect)(function(){var e,r;if(n){if(E.length>s.length/2||i.length>s.length/2){_(i.length>E.length?S:"Computer"),m(),h(),y(!0),o(!1);var a=(new Date).toLocaleString();g({winner:i.length>E.length?S:"Computer",date:a}).then(function(){R()}).catch(function(e){console.log(e)})}var u=s.filter(function(e){return-1===i.indexOf(e)&&-1===E.indexOf(e)}),l=(r=u.length,Math.floor(Math.random()*r));c(u[l]),e=setInterval(function(){f(u[l])},t?p[t].delay:1e3)}return function(){clearInterval(e)}},[n,i,E,s,c,t,p,_,S,m,h,y,o,g,R,f]),a.a.createElement("section",{style:{gridGap:"0",gridTemplateColumns:"repeat(".concat(t?p[t].field:5,", 30px)")},className:"game-board"},U.map(function(e,t){return a.a.createElement("div",{key:e,className:v()("game-board__square",{"active-random":t===l,"user-won-square":i.includes(t),"user-lost-square":E.includes(t)}),onMouseDown:function(){t===l&&d(t)}})}))});var W={loadPresets:function(){return function(e){f("game-settings").then(function(t){e({type:"SET_PRESETS",payload:t})}).catch().finally()}},setCurrentGameMode:function(e){return{type:"UPDATE_CURRENT_GAME_MODE",payload:e}},setCurrentPlayer:function(e){return{type:"UPDATE_CURRENT_PLAYER",payload:e}},setGameStarted:g,setShowResults:D,clearUserWonIndexes:T,clearUserLostIndexes:x},j=Object(u.b)(function(e){return{presets:y(e),currentGameMode:A(e),currentPlayer:L(e),showResults:O(e),winner:b(e)}},W)(function(e){var t=e.loadPresets,n=e.presets,o=e.currentGameMode,s=e.setCurrentGameMode,u=e.currentPlayer,c=e.setCurrentPlayer,l=e.setGameStarted,d=e.setShowResults,i=e.showResults,f=e.winner,E=e.clearUserWonIndexes,p=e.clearUserLostIndexes;Object(r.useEffect)(function(){t()},[t]);var m=Object(r.useRef)(null),y=Object(r.useRef)(null);return a.a.createElement("div",{className:"App"},a.a.createElement("section",{className:"game-section"},a.a.createElement("div",{className:"game-section__select-game-parameters"},a.a.createElement("select",{ref:m,onChange:function(e){l(!1),E(),p(),console.log(e.target.value),s(e.target.value)},value:o,className:"game-section__select-game-mode",required:!0},a.a.createElement("option",{value:""},"Pick game mode"),Object.keys(n).map(function(e){return a.a.createElement("option",{key:e,value:e},{easyMode:"Easy Mode",normalMode:"Normal Mode",hardMode:"Hard Mode"}[e])})),a.a.createElement("input",{ref:y,className:"game-section__input-player-name",type:"text",placeholder:"Enter your name",value:u,onChange:function(e){c(e.target.value)}}),a.a.createElement("button",{type:"button",className:"game-section__play-button",onClick:function(e){d(!1),E(),p(),""!==o?""!==u?l(!0):y.current.focus():m.current.focus()}},f?"PLAY AGAIN":"PLAY"),i&&a.a.createElement("div",{className:"game-section__results"},f," ","won!")),a.a.createElement(M,null)),a.a.createElement(h,null))}),C=n(5),G=n(14),k=Object(C.c)({leaders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LEADERS":return t.payload;default:return e}},presets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRESETS":return t.payload;default:return e}},currentGameMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENT_GAME_MODE":return t.payload;default:return e}},currentPlayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENT_PLAYER":return t.payload;default:return e}},userWonIndexes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER_WON_INDEXES":return[].concat(Object(w.a)(e),[t.payload]);case"CLEAR_USER_WON_INDEXES":return[];default:return e}},userLostIndexes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER_LOST_INDEXES":return[].concat(Object(w.a)(e),[t.payload]);case"CLEAR_USER_LOST_INDEXES":return[];default:return e}},gameStarted:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_STARTED":return t.payload;default:return e}},activeRandomSquare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RANDOM_SQUARE":return t.payload;default:return e}},notUsedIndexes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NOT_USED_INDEXES":return t.payload;default:return e}},showResults:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHOW_RESULTS":return t.payload;default:return e}},winner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WINNER":return t.payload;default:return e}}}),q=Object(C.d)(k,Object(C.a)(G.a));n(29);s.a.render(a.a.createElement(u.a,{store:q},a.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.98d35538.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5264:function(e,t,a){e.exports=a(5359)},5269:function(e,t,a){},5271:function(e,t,a){},5359:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),i=a.n(l),s=(a(5269),a(30)),o=a(12),r=a(19),d=a(20),m=a(22),u=a(21),h=a(23),b=a(1),v=(a(5271),[{name:"Abhishek",company:"BAsic Company",last_updated:"27/07",status:"active",notes:"White"},{name:"Anurag",company:"Advanced Company",last_updated:"29/09",status:"inactive",notes:"Honesty is the best policy"},{name:"Arpit",company:"Belong",last_updated:"26/06",status:"active",notes:"Gwalior"}]),p=a(7),k=["Name","Company","Status","Last Updated","Notes"],f={name:5,company:4,status:3,last_updated:2,notes:1},y=document.getElementById("root"),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).el=document.createElement("div"),a.state={name:null,company:null,status:null,last_updated:null,notes:null},a.saveText=a.saveText.bind(Object(b.a)(Object(b.a)(a))),a.sendData=a.sendData.bind(Object(b.a)(Object(b.a)(a))),a.hideModal=a.hideModal.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){y.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){y.removeChild(this.el)}},{key:"saveText",value:function(e){e.preventDefault(),this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"sendData",value:function(e){var t=this,a=this.props.sendDataToParent,n=!0;Object.keys(this.state).forEach(function(e){t.state[e]||(alert("Please fill your ".concat(e," details")),n=!1)}),n&&a(this.state)}},{key:"hideModal",value:function(){var e=this.props.hideModal;e()}},{key:"render",value:function(){var e=this;return i.a.createPortal(c.a.createElement("div",{className:"container-modal"},c.a.createElement("div",{className:"modal-wrapper"},c.a.createElement("div",{onClick:this.hideModal},c.a.createElement(p.d,null)),c.a.createElement("div",{className:"input-wrapper"},k.map(function(t,a){return c.a.createElement("input",{type:"text",className:"inputContainer",onChange:e.saveText,placeholder:"Enter your ".concat(t),name:Object.keys(f)[a],required:!0})})),c.a.createElement("div",{className:"add-member",onClick:this.sendData},"Add Members"))),this.el)}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={team_data:null,showModal:!1,selectAll:!1,check:null,ascendingName:null},a.mainCheckbox=c.a.createRef(),a.handleShow=a.handleShow.bind(Object(b.a)(Object(b.a)(a))),a.handleHide=a.handleHide.bind(Object(b.a)(Object(b.a)(a))),a.addData=a.addData.bind(Object(b.a)(Object(b.a)(a))),a.sortByName=a.sortByName.bind(Object(b.a)(Object(b.a)(a))),a.deleteItem=a.deleteItem.bind(Object(b.a)(Object(b.a)(a))),a.checkItem=a.checkItem.bind(Object(b.a)(Object(b.a)(a))),a.checkMainBox=a.checkMainBox.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=[];v.forEach(function(t,a){e.push(!1)}),this.setState({team_data:this.arrangeData(v),check:e})}},{key:"saveStateToLocalStorage",value:function(){for(var e in this.state)localStorage.setItem(e,JSON.stringify(this.state[e]))}},{key:"UpdateWithLocalStorage",value:function(){for(var e in this.state)if(window.localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),this.setState(Object(o.a)({},e,t))}catch(a){this.setState(Object(o.a)({},e,t))}}}},{key:"componentDidMount",value:function(){this.UpdateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this))}},{key:"componentDidUpdate",value:function(e,t){this.state.check.every(function(e){return e})?this.mainCheckbox.current.checked=!0:this.mainCheckbox.current.checked=!1}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"handleShow",value:function(){this.setState({showModal:!0})}},{key:"handleHide",value:function(){this.setState({showModal:!1})}},{key:"checkMainBox",value:function(){var e=this.state,t=e.check,a=e.selectAll,n=t.map(function(e){return!a});this.setState({check:n,selectAll:!a})}},{key:"sortByName",value:function(e){var t,a=this.state,n=a.team_data,c=a.ascendingName;t=c?n.sort(function(e,t){return t[0].localeCompare(e[0])}):n.sort(function(e,t){return e[0].localeCompare(t[0])}),this.setState({team_data:t,ascendingName:!c})}},{key:"deleteItem",value:function(e){e.preventDefault();var t=this.state,a=t.team_data,n=t.check,c=e.currentTarget.parentElement.getAttribute("data-idx");a.splice(c,1),n.splice(c,1),this.setState({team_data:a,check:n})}},{key:"addData",value:function(e){var t=this.state,a=t.team_data,n=t.check,c=this.arrangeData([e])[0],l=Object(s.a)(a).concat([c]);this.setState({showModal:!1,team_data:l,check:Object(s.a)(n).concat([!1])})}},{key:"checkItem",value:function(e){var t=this.state.check,a=e.target.parentElement.getAttribute("data-idx");t[a]=!t[a],this.setState({check:t})}},{key:"arrangeData",value:function(e){var t,a=[];return e.forEach(function(e,t){a.push([])}),e.forEach(function(e,n){(t=Object.keys(e).sort(function(e,t){return f[t]-f[e]})).forEach(function(c,l){a[n].push(e[t[l]])})}),a}},{key:"render",value:function(){var e=this,t=this.state,a=t.team_data,n=t.showModal,l=t.check,i=t.ascendingName,s=i?p.c:p.b;return c.a.createElement("div",{className:"App"},n&&c.a.createElement(O,{sendDataToParent:this.addData,hideModal:this.handleHide}),c.a.createElement("div",{className:"team-heading"},c.a.createElement("div",{className:"team-member"},"Team Members"),c.a.createElement("div",{className:"add-member",onClick:this.handleShow},"Add Members",c.a.createElement(p.a,null))),c.a.createElement("div",{className:"table-content"},c.a.createElement("div",{className:"title-heading",onClick:this.sortByName},c.a.createElement("input",{type:"checkbox",className:"table-header-cell",name:"select-all",ref:this.mainCheckbox,onClick:this.checkMainBox}),k.map(function(e,t){return"Name"===e?c.a.createElement("div",{key:t,className:"table-header-cell"},e,null!==i&&c.a.createElement(s,null)):c.a.createElement("div",{key:t,className:"table-header-cell"},e)}),c.a.createElement("div",{className:"table-header-cell"}," ")),c.a.createElement("div",{className:"table-body"},a.map(function(t,a){return c.a.createElement("div",{"data-idx":a,className:"team-row"},c.a.createElement("input",{onChange:e.checkItem,className:"team-field",type:"checkbox",name:"row".concat(a),checked:l[a]}),t.map(function(e,t){return c.a.createElement("div",{className:"team-field",key:t},e)}),c.a.createElement("div",{className:"team-field",onClick:e.deleteItem},c.a.createElement(p.e,null)))}))))}}]),t}(n.Component);i.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[5264,2,1]]]);
//# sourceMappingURL=main.ca09bc6b.chunk.js.map
webpackJsonp([10],{324:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function e(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{!a&&c.return&&c.return()}finally{if(n)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_family=__webpack_require__(5),_utils=__webpack_require__(7),_constant=__webpack_require__(19),_mockjs=__webpack_require__(21),_mockjs2=_interopRequireDefault(_mockjs);__webpack_require__(456);var Checker=function(_Component){function Checker(props){_classCallCheck(this,Checker);var _this=_possibleConstructorReturn(this,(Checker.__proto__||Object.getPrototypeOf(Checker)).call(this,props));return _this.switchMod=function(e,t){e.preventDefault(),_this.setState({mod:t})},_this.switchItf=function(e,t){e.preventDefault(),_this.setState({itf:t},function(){_this.handleRequest()})},_this.handleRequest=function(){var _this$state$itf=_this.state.itf,repositoryId=_this$state$itf.repositoryId,method=_this$state$itf.method,url=_this$state$itf.url,target=_this.state.target+"/app/mock/"+repositoryId+"/"+method+"/"+url,proxy=_constant.serve+"/proxy?target="+target,requests=[fetch(_constant.serve+"/app/mock/schema/"+_this.state.itf.id).then(function(e){return e.json()}),fetch(proxy).then(function(e){return e.json()})];Promise.all(requests).then(function(_ref){var _ref2=_slicedToArray(_ref,2),schema=_ref2[0],data=_ref2[1],_Mock$valid=_mockjs2.default.valid,Diff=_Mock$valid.Diff,Assert=_Mock$valid.Assert,nextMatch=Assert.match;Assert.match=function(type,path,actual,expected,result,message){"string"==typeof expected&&(expected=eval("("+expected+")")),nextMatch(type,path,actual,expected,result,message)};for(var result=Diff.diff(schema,data),i=0;i<result.length;i++)console.warn(Assert.message(result[i]))})},_this.state={mod:null,itf:null,target:_constant.serve},_this}return _inherits(Checker,_Component),_createClass(Checker,[{key:"render",value:function(){var e=this,t=this.props.repository;if(t.fetching)return _react2.default.createElement(_utils.Spin,null);t=t.data;var r=this.state.mod||t.modules[0],a=this.state.itf||r.interfaces[0];return _react2.default.createElement("section",{className:"Checker"},_react2.default.createElement("div",{className:"card-mods clearfix"},_react2.default.createElement("span",{className:"card-title"},"模块："),t.modules.map(function(t){return _react2.default.createElement(_family.Link,{key:t.id,to:"",onClick:function(r){return e.switchMod(r,t)},className:t.id===r.id?"active":""},t.name)})),_react2.default.createElement("div",{className:"card-itfs clearfix"},_react2.default.createElement("span",{className:"card-title"},"接口："),r.interfaces.map(function(t){return _react2.default.createElement(_family.Link,{key:t.id,to:"",onClick:function(r){return e.switchItf(r,t)},className:t.id===a.id?"active":""},t.name)})),_react2.default.createElement("div",null,_react2.default.createElement("input",{value:this.state.target,onChange:function(t){return e.setState({target:t.target.value})},className:"form-control"})),_react2.default.createElement("div",{className:"card-result"},_react2.default.createElement("div",{className:"card-title"},_constant.serve+"/app/mock/data/"+a.id),_react2.default.createElement("pre",null,JSON.stringify(this.state.result,null,2))))}},{key:"componentWillReceiveProps",value:function(e){var t=this,r=e.repository;if(r=r.data,r.id){var a=this.state.mod||r.modules[0],n=this.state.itf||a.interfaces[0];fetch(_constant.serve+"/app/mock/data/"+n.id).then(function(e){return e.json()}).then(function(e){t.setState({result:e})})}}}]),Checker}(_react.Component);Checker.contextTypes={store:_family.PropTypes.object.isRequired},Checker.propTypes={repository:_family.PropTypes.object.isRequired};var mapStateToProps=function(e){return{auth:e.auth,repository:e.repository}},mapDispatchToProps={};exports.default=(0,_family.connect)(mapStateToProps,mapDispatchToProps)(Checker)},438:function(e,t,r){t=e.exports=r(15)(),t.push([e.id,".Checker{padding:2rem}.Checker .card-itfs .card-title,.Checker .card-mods .card-title{float:left;width:5rem;font-size:1.4rem}.Checker .card-itfs a,.Checker .card-mods a{float:left;margin-right:1rem;width:10rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#666}.Checker .card-itfs a.active,.Checker .card-mods a.active{color:#4a7bf7}.Checker .card-result{margin-top:1rem}.Checker .card-result .card-title{font-size:1.4rem;margin-bottom:1rem}",""])},456:function(e,t,r){var a=r(438);"string"==typeof a&&(a=[[e.id,a,""]]);r(17)(a,{});a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=10.ff7e64e3.chunk.js.map
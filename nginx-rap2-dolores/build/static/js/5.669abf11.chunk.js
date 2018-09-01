webpackJsonp([5],{355:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=l(n),u=a(120),c=l(u);t.default=function(){return r.default.createElement("div",null,["top","right","bottom","left"].map(function(e){return r.default.createElement(c.default,{key:e,placement:e,title:e,content:"Envy is the ulcer of the soul.",className:"btn btn-default mr10"},"Popover on ",e)}))}},356:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_mockjs=__webpack_require__(21);__webpack_require__(467);var TYPES=["String","Number","Boolean","Object","Array","Function","RegExp"],fixValue=function fixValue(_ref){var type=_ref.type,rule=_ref.rule,value=_ref.value;switch(type){case"String":return value;case"Number":try{return eval("("+value+")")}catch(e){return 1}case"Boolean":try{return eval("("+value+")")}catch(e){return!0}case"Function":case"RegExp":try{return eval("("+value+")")}catch(e){console.warn(type,value)}break;case"Object":return{};case"Array":return[];default:return value}},StringRuleEditor=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onChange=function(){},a.state={rule:"",count:1,min:3,max:7,value:""},a}return _inherits(t,e),_createClass(t,[{key:"get",value:function(){switch(this.state.rule){case"":return _defineProperty({},"name",""+this.state.value);case"|count":return _defineProperty({},"name|"+this.state.count,""+this.state.value);case"|min-max":return _defineProperty({},"name|"+this.state.min+"-"+this.state.max,""+this.state.value);default:console.warn("错误的生成规则")}}},{key:"render",value:function(){var e=this;return _react2.default.createElement("section",{className:"RuleEditor"},_react2.default.createElement("table",{className:"table"},_react2.default.createElement("thead",null,_react2.default.createElement("tr",null,_react2.default.createElement("td",null,"-"),_react2.default.createElement("td",null,"生成规则"),_react2.default.createElement("td",null,"-"),_react2.default.createElement("td",null,"初始值"))),_react2.default.createElement("tbody",null,_react2.default.createElement("tr",null,_react2.default.createElement("td",null,"字符串"),_react2.default.createElement("td",null,_react2.default.createElement("select",{value:this.state.rule,onChange:function(t){return e.setState({rule:t.target.value})},className:"rule"},_react2.default.createElement("option",{value:""},"固定值"),_react2.default.createElement("option",{value:"|count"},"重复固定次数"),_react2.default.createElement("option",{value:"|min-max"},"重复随机次数"))),_react2.default.createElement("td",null,"|count"===this.state.rule&&_react2.default.createElement("span",null,_react2.default.createElement("span",null,"重复"),_react2.default.createElement("input",{value:this.state.count,onChange:function(t){return e.setState({count:t.target.value})},className:"count"}),_react2.default.createElement("span",null,"次")),"|min-max"===this.state.rule&&_react2.default.createElement("span",null,_react2.default.createElement("span",null,"重复次数"),_react2.default.createElement("div",null,"大于等于 ",_react2.default.createElement("input",{value:this.state.min,onChange:function(t){return e.setState({min:t.target.value})},className:"min"})),_react2.default.createElement("div",null,"小于等于 ",_react2.default.createElement("input",{value:this.state.max,onChange:function(t){return e.setState({max:t.target.value})},className:"max"})))),_react2.default.createElement("td",null,_react2.default.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},className:"value"}))))))}},{key:"componentDidUpdate",value:function(){}}]),t}(_react.Component),IntegerRuleEditor=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onChange=function(){console.log(a.get())},a.state={type:"",count:1,min:3,max:7,value:""},a}return _inherits(t,e),_createClass(t,[{key:"get",value:function(){switch(this.state.type){case"":return _defineProperty({},"name",this.state.value);case"|min-max":return _defineProperty({},"name|"+this.state.min+"-"+this.state.max,1);default:console.warn("错误的生成规则")}}},{key:"render",value:function(){var e=this;return _react2.default.createElement("section",{className:"RuleEditor"},_react2.default.createElement("span",null,"整数"),_react2.default.createElement("select",{value:this.state.type,onChange:function(t){return e.setState({type:t.target.value})},className:"type"},_react2.default.createElement("option",{value:""},"固定值"),_react2.default.createElement("option",{value:"|min-max"},"随机值")),_react2.default.createElement("div",null,""===this.state.type?_react2.default.createElement("span",null,_react2.default.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},className:"value"})):null,"|min-max"===this.state.type?_react2.default.createElement("span",null,_react2.default.createElement("span",null,"大于等于"),_react2.default.createElement("input",{value:this.state.min,onChange:function(t){return e.setState({min:t.target.value})},className:"min"}),_react2.default.createElement("span",null,"，小于等于"),_react2.default.createElement("input",{value:this.state.max,onChange:function(t){return e.setState({max:t.target.value})},className:"max"})):null))}},{key:"componentDidUpdate",value:function(){var e=this.get();console.log(e,"=>",(0,_mockjs.mock)(e))}}]),t}(_react.Component),FloatRuleEditor=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onChange=function(){console.log(a.get())},a.state={type:"",count:1,min:3,max:7,dmin:3,dmax:7,value:""},a}return _inherits(t,e),_createClass(t,[{key:"get",value:function(){switch(this.state.type){case"":return _defineProperty({},"name",+this.state.value);case"|min-max.dmin-dmax":return _defineProperty({},"name|"+this.state.min+"-"+this.state.max+"."+this.state.dmin+"-"+this.state.dmax,1);default:console.warn("错误的生成规则")}}},{key:"render",value:function(){var e=this;return _react2.default.createElement("section",{className:"RuleEditor"},_react2.default.createElement("span",null,"浮点数"),_react2.default.createElement("select",{value:this.state.type,onChange:function(t){return e.setState({type:t.target.value})},className:"type"},_react2.default.createElement("option",{value:""},"固定值"),_react2.default.createElement("option",{value:"|min-max.dmin-dmax"},"随机值")),_react2.default.createElement("div",null,""===this.state.type?_react2.default.createElement("span",null,_react2.default.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},className:"value"})):null,"|min-max.dmin-dmax"===this.state.type?_react2.default.createElement("span",null,_react2.default.createElement("span",null,"整数部分"),_react2.default.createElement("span",null,"大于等于"),_react2.default.createElement("input",{value:this.state.min,onChange:function(t){return e.setState({min:t.target.value})},className:"min"}),_react2.default.createElement("span",null,"，小于等于"),_react2.default.createElement("input",{value:this.state.max,onChange:function(t){return e.setState({max:t.target.value})},className:"max"}),_react2.default.createElement("span",null,"，小数部分保留"),_react2.default.createElement("input",{value:this.state.dmin,onChange:function(t){return e.setState({dmin:t.target.value})},className:"min"}),_react2.default.createElement("span",null,"到"),_react2.default.createElement("input",{value:this.state.dmax,onChange:function(t){return e.setState({dmax:t.target.value})},className:"max"}),_react2.default.createElement("span",null,"位")):null))}},{key:"componentDidUpdate",value:function(){var e=this.get();console.log(e,"=>",(0,_mockjs.mock)(e))}}]),t}(_react.Component),PropertyEditor=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={name:"name",type:"String",rule:"",value:""},a}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this,t=_defineProperty({},this.state.name+"|"+this.state.rule,fixValue(this.state)),a=(0,_mockjs.mock)(t);return _react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-12"},_react2.default.createElement(StringRuleEditor,null),_react2.default.createElement(IntegerRuleEditor,null),_react2.default.createElement(FloatRuleEditor,null),_react2.default.createElement("hr",null)),_react2.default.createElement("div",{className:"col-6"},_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("label",{className:"control-label"},"属性名："),_react2.default.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},className:"form-control"})),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("label",{className:"control-label"},"类型："),_react2.default.createElement("select",{name:"type",value:this.state.type,onChange:function(t){return e.setState({type:t.target.value})},className:"form-control"},TYPES.map(function(e){return _react2.default.createElement("option",{key:e,value:e},e)}))),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("label",{className:"control-label"},"生成规则："),_react2.default.createElement("input",{type:"text",value:this.state.rule,onChange:function(t){return e.setState({rule:t.target.value})},className:"form-control"})),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("label",{className:"control-label"},"初始值："),_react2.default.createElement("input",{type:"text",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},className:"form-control"}))),_react2.default.createElement("div",{className:"col-6"},_react2.default.createElement("pre",null,JSON.stringify(t,null,2)),_react2.default.createElement("pre",null,JSON.stringify(a,null,2))))}}]),t}(_react.Component);exports.default=PropertyEditor},361:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=l(n),u=a(121),c=l(u),o=a(21),s=function(){return{background:o.Random.color()}};t.default=function(){return r.default.createElement(c.default,{group:"depth-0"},r.default.createElement("ul",null,r.default.createElement("li",{className:"sortable p6",style:s()},r.default.createElement("div",{className:"flex-row"},r.default.createElement("div",{className:"flex-col flex-col-40"},"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),r.default.createElement("div",{className:"flex-col flex-col-30"},"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"),r.default.createElement("div",{className:"flex-col flex-col-30"},"ccccccccccccccccccccccccccccccccccccc")),r.default.createElement("div",{className:"flex-row"},r.default.createElement("div",{className:"flex-col flex-col-40"},"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),r.default.createElement("div",{className:"flex-col flex-col-30"},"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"),r.default.createElement("div",{className:"flex-col flex-col-30"},"ccccccccccccccccccccccccccccccccccccc")),r.default.createElement("span",null,"仓库1"),r.default.createElement(c.default,{group:"depth-1.1"},r.default.createElement("ul",null,r.default.createElement("li",{className:"sortable p6",style:s()},r.default.createElement("span",null,"模块1.1"),r.default.createElement(c.default,{group:"depth-1.2"},r.default.createElement("ul",null,r.default.createElement("li",{className:"sortable p6",style:s()},"接口1.1.1"),r.default.createElement("li",{className:"sortable p6",style:s()},"接口1.1.2"),r.default.createElement("li",{className:"sortable p6",style:s()},"接口1.1.3")))),r.default.createElement("li",{className:"sortable p6",style:s()},"模块1.2"),r.default.createElement("li",{className:"sortable p6",style:s()},"模块1.3")))),r.default.createElement("li",{className:"sortable p6",style:s()},r.default.createElement("span",null,"仓库2"),r.default.createElement(c.default,{group:"depth-2.1"},r.default.createElement("ul",null,r.default.createElement("li",{className:"sortable p6",style:s()},r.default.createElement("span",null,"模块2.1"),r.default.createElement(c.default,{group:"depth-2.2"},r.default.createElement("ul",null,r.default.createElement("li",{className:"sortable p6",style:s()},"接口2.1.1"),r.default.createElement("li",{className:"sortable p6",style:s()},"接口2.2.2"),r.default.createElement("li",{className:"sortable p6",style:s()},"接口2.2.3")))),r.default.createElement("li",{className:"sortable p6",style:s()},"模块2.2"),r.default.createElement("li",{className:"sortable p6",style:s()},"模块2.3")))),r.default.createElement("li",{className:"sortable p6",style:s()},"团队"),r.default.createElement("li",{className:"sortable p6",style:s()},"用户")))}},362:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=l(n),u=a(86),c=l(u);t.default=function(){return r.default.createElement(c.default,{rows:"5",className:"form-control"})}},363:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=l(n),u=a(87),c=l(u);t.default=function(){return r.default.createElement(c.default,null)}},364:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=a(1),i=l(s);a(132);var f=a(13),d=function(e){function t(e){r(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleSeed=function(e){var t={seed:e};a.setState(t,function(){var t=a.props.onSeed;t(e)})},a.handleSelect=function(e,t){e.preventDefault();var l={seed:"",value:[].concat(n(a.state.value),[t])};a.setState(l,a.handleChange)},a.handleRemove=function(e){var t={value:a.state.value.filter(function(t){return t!==e})};a.setState(t,a.handleChange)},a.handleChange=function(){var e=a.props.onChange;e(a.state.value),a.$seed.focus(),a.setState({options:[]})},a.state={seed:"",value:e.value||[],options:e.options||[]},a}return c(t,e),o(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value||[],options:e.options||[]})}},{key:"render",value:function(){var e=this,t=this.props.placeholder;return i.default.createElement("div",{className:"TagsInput clearfix",onClick:function(t){return e.$seed.focus()}},this.state.value.map(function(t){return i.default.createElement("span",{key:t.id,className:"tag"},i.default.createElement("span",{className:"label"},t.label),i.default.createElement("span",{className:"remove",onClick:function(a){return e.handleRemove(t)}},i.default.createElement(f.GoX,null)))}),i.default.createElement("div",{className:"dropdown"},i.default.createElement("input",{className:"dropdown-input",value:this.state.seed,placeholder:t,autoComplete:"off",onChange:function(t){return e.handleSeed(t.target.value)},ref:function(t){e.$seed=t}}),this.state.options.length?i.default.createElement("div",{className:"dropdown-menu",ref:function(t){e.$optons=t}},this.state.options.map(function(t){return i.default.createElement("a",{key:t.id,href:"",className:"dropdown-item",onClick:function(a){return e.handleSelect(a,t)}},t.label)})):null))}}]),t}(s.Component);t.default=d},365:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function l(n,r){try{var u=t[n](r),c=u.value}catch(e){return void a(e)}return u.done?void e(c):Promise.resolve(c).then(function(e){l("next",e)},function(e){l("throw",e)})}return l("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(24),s=l(o),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),f=a(1),d=l(f),m=a(364),p=l(m),_=a(21),v=a(56),h=l(v),E=function(e){function t(e){var a=this;r(this,t);var l=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.handleSeed=function(){var e=n(s.default.mark(function e(t){var n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return l.setState({options:[]}),e.abrupt("return");case 3:return e.next=5,h.default.fetchUserList({name:t});case 5:n=e.sent,l.setState({options:n.data.map(function(e){return{id:e.id,label:e.fullname}})});case 7:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),l.handleChange=function(e){console.log(e),l.setState({members:e,options:[]})},l.state={members:(0,_.mock)({"list|10":[{id:"@int",label:"@cname"}]}).list,options:[]},l}return c(t,e),i(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(p.default,{value:this.state.members,options:this.state.options,placeholder:"名称检索",onSeed:this.handleSeed,onChange:this.handleChange}))}}]),t}(f.Component);t.default=E},367:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=l(n),u=a(5),c=a(355),o=l(c),s=a(363),i=l(s),f=a(362),d=l(f),m=a(365),p=l(m),_=a(356),v=l(_),h=a(361),E=l(h);a(473),t.default=function(){return r.default.createElement("section",{className:"Utils"},r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement(u.Link,{to:"/utils/popover"},"Popover")),r.default.createElement("li",null,r.default.createElement(u.Link,{to:"/utils/spin"},"Spin")),r.default.createElement("li",null,r.default.createElement(u.Link,{to:"/utils/smarttextarea"},"SmartTextarea")),r.default.createElement("li",null,r.default.createElement(u.Link,{to:"/utils/tagsinput"},"TagsInput")),r.default.createElement("li",null,r.default.createElement(u.Link,{to:"/utils/property/editor"},"PropertyEditor")),r.default.createElement("li",null,r.default.createElement(u.Link,{to:"/utils/property/modal"},"Modal")),r.default.createElement("li",null,r.default.createElement(u.Link,{to:"/utils/property/rsortable"},"Modal"))),r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{path:"/utils/popover",component:o.default}),r.default.createElement(u.Route,{path:"/utils/spin",component:i.default}),r.default.createElement(u.Route,{path:"/utils/smarttextarea",component:d.default}),r.default.createElement(u.Route,{path:"/utils/tagsinput",component:p.default}),r.default.createElement(u.Route,{path:"/utils/property/editor",component:v.default}),r.default.createElement(u.Route,{path:"/utils/rsortable",component:E.default})))}},442:function(e,t,a){t=e.exports=a(15)(),t.push([e.id,".RuleEditor .rule-wrapper,.RuleEditor .type{-ms-flex-preferred-size:10rem;flex-basis:10rem}.RuleEditor .drange-wrapper,.RuleEditor .range-wrapper,.RuleEditor .rule-wrapper{padding-right:1rem}.RuleEditor .value-wrapper{-ms-flex-preferred-size:15rem;flex-basis:15rem}.RuleEditor select{width:10rem}.RuleEditor input.count,.RuleEditor input.dcount,.RuleEditor input.dmax,.RuleEditor input.dmin,.RuleEditor input.max,.RuleEditor input.min,.RuleEditor input.value{padding:.5rem .75rem;border:1px solid #d1d5da;border-radius:.4rem;box-shadow:none;outline:none;width:4rem;text-align:center}.RuleEditor input.value{width:8rem}",""])},443:function(e,t,a){t=e.exports=a(15)(),t.push([e.id,".Utils{padding:2rem}",""])},467:function(e,t,a){var l=a(442);"string"==typeof l&&(l=[[e.id,l,""]]);a(17)(l,{});l.locals&&(e.exports=l.locals)},473:function(e,t,a){var l=a(443);"string"==typeof l&&(l=[[e.id,l,""]]);a(17)(l,{});l.locals&&(e.exports=l.locals)}});
//# sourceMappingURL=5.669abf11.chunk.js.map
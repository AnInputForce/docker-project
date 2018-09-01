webpackJsonp([9],{349:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a(1),u=r(c),d=a(11),m=a(7);a(462);var f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props,a=e.counter,r=e.users,n=e.organizations,o=e.repositories,l=e.interfaces,s=this.props,c=s.analyticsRepositoriesCreated,d=s.analyticsRepositoriesUpdated,f=s.analyticsUsersActivation,p=s.analyticsRepositoriesActivation;f=f.map(function(e){return{label:e.fullname||e.empId||e.userId,value:e.value}}),p=p.map(function(e){return{label:e.name||e.repositoryId,value:e.value}});var y=[["版本",a.version,""],["用户",r.pagination.total,"人"],["模拟",a.mock,"次"],["团队",n.pagination.total,"个"],["仓库",o.pagination.total,"个"],["接口",l.pagination.total,"个"]];return u.default.createElement("article",{className:"Status"},u.default.createElement("div",{className:"body"},u.default.createElement("div",{className:"row mb20"},y.map(function(e){var t=i(e,3),a=t[0],r=t[1],n=t[2];return u.default.createElement("div",{key:a,className:"col-12 col-sm-6 col-md-4 col-lg-2"},u.default.createElement("div",{className:"card"},u.default.createElement("div",{className:"card-block"},u.default.createElement("div",{className:"card-title name"},a),u.default.createElement("div",null,u.default.createElement("span",{className:"value techfont"},r),u.default.createElement("span",{className:"unit"},n)))))})),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6 chart"},u.default.createElement("div",{className:"header"},u.default.createElement("span",{className:"title"},"最近 30 天新建仓库数")),u.default.createElement(m.RChart,{type:"line",data:t.adapt(c,"新建仓库数"),options:{}})),u.default.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6 chart"},u.default.createElement("div",{className:"header"},u.default.createElement("span",{className:"title"},"最近 30 天活跃仓库数")),u.default.createElement(m.RChart,{type:"line",data:t.adapt(d,"活跃仓库数"),options:{}})),u.default.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6 chart"},u.default.createElement("div",{className:"header"},u.default.createElement("span",{className:"title"},"最近 30 天活跃用户排行")),u.default.createElement(m.RChart,{type:"horizontalBar",data:t.adapt(f,"操作"),options:{}})),u.default.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6 chart"},u.default.createElement("div",{className:"header"},u.default.createElement("span",{className:"title"},"最近 30 天活跃仓库排行")),u.default.createElement(m.RChart,{type:"horizontalBar",data:t.adapt(p,"操作"),options:{}})))))}}],[{key:"adapt",value:function(e,t){return{labels:e.map(function(e){return e.label}),datasets:[{label:t||"-",data:e.map(function(e){return e.value}),backgroundColor:m.RChart.COLORS.blue,borderColor:m.RChart.COLORS.blue,borderWidth:1,fill:!1}]}}}]),t}(c.Component),p=function(e){return{counter:e.counter,users:e.users,organizations:e.organizations,repositories:e.repositories,interfaces:e.interfaces,analyticsRepositoriesCreated:e.analyticsRepositoriesCreated.data,analyticsRepositoriesUpdated:e.analyticsRepositoriesUpdated.data,analyticsUsersActivation:e.analyticsUsersActivation.data,analyticsRepositoriesActivation:e.analyticsRepositoriesActivation.data}},y={};t.default=(0,d.connect)(p,y)(f)},440:function(e,t,a){t=e.exports=a(15)(),t.push([e.id,".Status{padding:2rem}.Status>.header{margin-bottom:3rem}.Status>.header>.title{font-size:2rem}.Status .body{text-align:center}.Status .body .card{margin-bottom:1rem;border-radius:.4rem}.Status .body .card .name{font-size:1rem}.Status .body .card .value{font-size:5rem}.Status .body .card .unit{margin-left:5px;font-size:1rem;color:#ccc}.Status .body .chart>.header>.title{font-size:2rem;margin-bottom:1rem}",""])},462:function(e,t,a){var r=a(440);"string"==typeof r&&(r=[[e.id,r,""]]);a(17)(r,{});r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=9.62a9072f.chunk.js.map
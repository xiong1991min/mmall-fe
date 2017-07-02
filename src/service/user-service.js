/*
* @Author: Administrator
* @Date:   2017-06-28 22:41:22
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-07-02 10:05:52
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
	// 用户登录
	login : function (resolve,reject){
		_mm.request({
			url     : _mm.getServerUrl('/user/login.do'),
			data    : userInfo,
			method  : 'POST',
			success : resolve,
			error   : reject  
		});
	},
	// 检查登录状态
	checkLogin : function (resolve,reject){
		_mm.request({
			url     : _mm.getServerUrl('/user/get_user_info.do'),
			method  : 'POST',
			success : resolve,
			error   : reject  
		});
	},
	// 登出
	logout : function (resolve,reject){
		_mm.request({
			url     : _mm.getServerUrl('/user/logout.do'),
			method  : 'POST',
			success : resolve,
			error   : reject  
		});
	},
} 

module.exports = _user;
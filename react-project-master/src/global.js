/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 17:16:52
 * @LastEditTime: 2019-08-06 17:17:20
 * @LastEditors: 陈佳
 */
window.onload = function(){getRem(750,100)};/*640代表设计师给的设计稿的宽度*/			
         	window.onresize = function(){getRem(750,100)};
        	function getRem(pwidth,prem)
        	{	var html = document.getElementsByTagName("html")[0];
           		var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
            	html.style.fontSize = oWidth/pwidth*prem + "px";
         	}
/*
	节点分三类：
	1、元素节点	<div></div>
	2、文本节点	纯文本
	3、属性节点 标签的属性id="box"

	DOM操作必须等到HTML文档加载完毕，才可以获取。
	1、把<script>移后
	HTMLDIVElement表示div的节点对象
	IE是以COM实现的DOM，所以只会返回一个Object
	2、用onload事件来加载HTML(预加载html，后执行)
	表示当网页所有内容加载完毕后，再执行的代码
*/
	window.onload=function(){
		if(document.getElementById){
			var box=document.getElementById('box');
			alert(box);
		}else{
			alert('浏览器不兼容，请更换！');
		}
		//tagName获取元素节点的标签名
		alert(box.tagName);
		//获取元素节点的文本(包含标签)
		alert(box.innerHTML);
		
		alert(box.id);				//获取元素ID的属性值(id名)
		alert(box.title);			//title属性值
		alert(box.style);			//获取style属性对象
		alert(box.style.color);		//获取style属性对象的属性值
		alert(box.className);		//获取class属性的值
		alert(box.bbb);				//自定义属性直接获取（非IE不支持），尽可能不去使用。
	}

































































































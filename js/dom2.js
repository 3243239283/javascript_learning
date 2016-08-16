/*
	innerHTML:获取元素节点的文本(包含标签),也可以操作元素节点的文本。

	window.onload=function(){
		var txt=document.getElementById('txt');
		txt.innerHTML='修改后的文字<strong>重点文字</strong>';	//赋值可以解析html，不是单纯的文本，包含html。
	}

	//getElementsByTagName()
	window.onload=function(){
		var lis=document.getElementsByTagName('li');		//参数传递标签名，返回一个数组集合。
		alert(lis.length);									//返回数组的数量
		alert(lis[0]);										//HTMLLIElement,li的节点对象
	}

	//getElementsByTagName()
	window.onload=function(){
		var lis=document.getElementsByTagName('li');		//参数传递标签名，返回一个数组集合。
		alert(lis.length);									//返回数组的数量
		alert(lis[0]);										//HTMLLIElement,li的节点对象
		alert(lis[0].tagName);								//LI
		alert(lis[0].innerHTML);							//第一个li内的元素节点的文本(包含标签)
		
		var body=document.getElementsByTagName('body')[0];	//找到body节点
		alert(body);

		var all=document.getElementsByTagName('*');		//找到所有的元素节点
		alert(all.length);								//打印出节点的长度，IE会比其他浏览器多一个。因为它将<!DOCTYPE html>文档声明也算做一个标签来返回长度。
		alert(all[0].tagName);							//打印第一个节点的标签名
		
		//getAttribute()
		var box=document.getElementsByName('test')[0];
		alert(box);											//IE在获取<div>内的name属性时是获取不到的，因为name属性本身不是<div>的属性，所有IE会undifind。一般name属性只应用与<input>
		alert(box.id);
		alert(box.bbb);										//自定义属性，W3C不合法，但IE是支持的
		alert(box.getAttribute('bbb'));						//IE无法获取

		//跨浏览器获取className
		if(box.getAttribute('className') == null){
			box.getAttribute('class');
		}else{
			box.getAttribute('className');
		}

		//setAttribute()
		var box=document.getElementById('txt');
		box.setAttribute('title','标题');			//创建一个属性及赋值
		box.setAttribute('align','center');			//
		box.setAttribute('bbb','ddd');				//修改属性值
		box.setAttribute('style','color:green');	//IE7以下style及onclick无效果，避免使用

		//removeAttribute()
		var box=document.getElementById('txt');
		box.removeAttribute('style');					//移除属性



	}

*/

function abc(){
	alert('abc');
}


window.onload=function(){
	var box=document.getElementById('txt');
	
}





































/*
	window.onload=function(){
		var box=document.getElementById('box');
		alert(box);
		alert(box.nodeName);						//获取元素节点的标签名，等同于tagName
		alert(box.nodeType);						//获取 元素节点的类型值:1  属性节点类型值:2  文本节点类型值:3
		alert(box.nodeValue);						//元素节点本身没有内容 null
		//node本身把节点指针放在<div></div>上，本身是没有value的

		//如果要输出<div>中包含的文本内容，那么可以用到innerHTML
		alert(box.innerHTML);						//获取元素节点里面的内容
		//node只能获取当前节点的东西
		//文本节点不等于文本内容

		//获取当前元素的子节点（第一个子节点为“测试内容”文本节点，第二个子节点为“<em>倾斜</em>”元素节点,第三个子节点为“内容”文本节点）
		alert(box.childNodes.length);						//获取当前元素节点的所有子节点列表。(测试内容<em>倾斜</em>内容)
		alert(box.childNodes[0]);							//Object Text 表示一个文本节点对象
		alert(box.childNodes[0].nodeType);					//文本节点类型值:3
		alert(box.childNodes[0].nodeValue);					//获取文本节点的文本内容
		alert(box.childNodes[1]);							//Object HTMLElement 表示一个元素节点对象
		alert(box.childNodes[1].nodeType);					//元素节点的类型值:1
		alert(box.childNodes[1].nodeValue);					//null 元素节点本身没有内容
		alert(box.childNodes[2]);							//Object Text 表示一个文本节点对象
		alert(box.childNodes[2].nodeType);					//文本节点类型值:3
		alert(box.childNodes[2].nodeValue);					//获取文本节点的文本内容
		alert(box.childNodes[0].innerHTML);					//当前的文本是无法找到里面的内容的 undefined
		alert(box.childNodes[1].innerHTML);					//当前元素节点是可以找到里面的内容的 “倾斜”
		alert(box.childNodes[2].innerHTML);					//当前的文本是无法找到里面的内容的 undefined
		
		//通过判断节点类型来获取不同的输出
		for(var i=0;i<box.childNodes.length;i++){
			if(box.childNodes[i].nodeType === 1){
				alert('元素节点:'+box.childNodes[i].nodeName);
			}else if(box.childNodes[i].nodeType === 3){
				alert('文本节点:'+box.childNodes[i].nodeValue);
			}
		}


		var pox=document.getElementById('pox');
		//pox.innerHTML='测试<strong>pox</strong>';						//可以包含html
		//pox.nodeValue='测试pox';										//nodeValue必须在当前节点操作
		pox.childNodes[0].nodeValue='测试<strong>pox</strong>';			//不能包含html

	}
*/
window.onload=function(){
	var box=document.getElementById('box');
	var pox=document.getElementById('pox');
	
}





































































































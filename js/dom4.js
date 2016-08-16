window.onload=function(){
	var box=document.getElementById('box')
	var p=document.createElement('p');			//创建一个元素节点p，还未添加到文档中去
	box.appendChild(p);							//将新节点p添加到id=box的div子节点列表的末尾上

	var text=document.createTextNode('测试div4');	//创建一个文本节点
	p.appendChild(text);							//把文本添加在p里
	//box.appendChild(text);
	box.parentNode.insertBefore(p,box);				//在box父节点添加一个p，就是在box前面添加一个元素节点
}






























﻿/*浮动窗口*/
(function(){
	var n=0;
	var obj=document.getElementById("AdLayer");
	if(!obj){return false;}
	var x=0;
	var fe=$("#AdLayer");
	window.onscroll=function(){
		obj.style.top=(document.body.scrollTop||document.documentElement.scrollTop)+n+'px';
		x=(document.body.scrollTop||document.documentElement.scrollTop)+n;
		if(x==0){fe.fadeOut().hide()}else{fe.fadeIn().show()};
	};
	window.onresize=function(){obj.style.top=(document.body.scrollTop||document.documentElement.scrollTop)+n+'px'};
})();

/*懒人图库 www.lanrentuku.com */


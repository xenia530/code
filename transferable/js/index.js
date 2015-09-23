// JavaScript Document

function getobjbyid(id){
	if(!document.getElementById)return false;
	if(typeof id==="string"){
		if(document.getElementById && document.getElementById(id)) {
			return document.getElementById(id);
			}
		else if (document.all && document.all(id)) {
			return document.all(id);
			}
		else if (document.layers && document.layers[id]) {
			return document.layers[id];
			}
		else{
			return false;
			}	
		}
		else{return id;}
	}



function tagshow(im,sum,l){
	for (i = 1;i<=sum;i++){
	if (im == i)
	{

	getobjbyid("b" + l + "_" + im).className = "on"

	getobjbyid("c" + l + "_" + im).style.display = "block"
		}
	else
	
	{

	getobjbyid("b" + l + "_" + i).className = "off"
	getobjbyid("c" + l + "_" + i).style.display = "none"
}
		
}
}



	

function show(tag){	
	
	getobjbyid(tag).style.display = "block"
 <!--  getobjbyid(tag).style.marginLeft =  "-100px;"-->
	}



function hide(tag){
	
	
	getobjbyid(tag).style.display = "none"
	
}


function srcMarquee(){
this.ID = document.getElementById(arguments[0]);
if(!this.ID){this.ID = -1;return;}
this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.Correct = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
this.Step = 1;
this.Timer = 30;
this.DirectionArray = {"top":0 , "bottom":1 , "left":2 , "right":3};
if(typeof arguments[1] == "number")this.Direction = arguments[1];
if(typeof arguments[2] == "number")this.Step = arguments[2];
if(typeof arguments[3] == "number")this.Width = arguments[3];
if(typeof arguments[4] == "number")this.Height = arguments[4];
if(typeof arguments[5] == "number")this.Timer = arguments[5];
if(typeof arguments[6] == "number")this.DelayTime = arguments[6];
if(typeof arguments[7] == "number")this.WaitTime = arguments[7];
if(typeof arguments[8] == "number")this.ScrollStep = arguments[8]
this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
this.ID.noWrap = true;
this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
if(arguments.length >= 7)this.Start();
}
srcMarquee.prototype.Start = function(){
if(this.ID == -1)return;
if(this.WaitTime < 800)this.WaitTime = 800;
if(this.Timer < 20)this.Timer = 20;
if(this.Width == 0)this.Width = parseInt(this.ID.style.width);
if(this.Height == 0)this.Height = parseInt(this.ID.style.height);
if(typeof this.Direction == "string")this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()];
this.HalfWidth = Math.round(this.Width / 2);
this.BakStep = this.Step;
this.ID.style.width = this.Width;
this.ID.style.height = this.Height;
if(typeof this.ScrollStep != "number")this.ScrollStep = this.Direction > 1 ? this.Width : this.Height;
var msobj = this;
var timer = this.Timer;
var delaytime = this.DelayTime;
var waittime = this.WaitTime;
msobj.StartID = function(){msobj.Scroll()}
msobj.Continue = function(){
if(msobj.MouseOver == 1){
setTimeout(msobj.Continue,delaytime);
     }
     else{ clearInterval(msobj.TimerID);
msobj.CTL = msobj.Stop = 0;
msobj.TimerID = setInterval(msobj.StartID,timer);
     }
    }
msobj.Pause = function(){
msobj.Stop = 1;
clearInterval(msobj.TimerID);
setTimeout(msobj.Continue,delaytime);
    }
msobj.Begin = function(){
   msobj.ClientScroll = msobj.Direction > 1 ? msobj.ID.scrollWidth : msobj.ID.scrollHeight;
   if((msobj.Direction <= 1 && msobj.ClientScroll <msobj.Height) || (msobj.Direction > 1 && msobj.ClientScroll <msobj.Width))return;
   msobj.ID.innerHTML += msobj.ID.innerHTML;
   msobj.TimerID = setInterval(msobj.StartID,timer);
   if(msobj.ScrollStep < 0)return;
   msobj.ID.onmousemove = function(event){
       if(msobj.ScrollStep == 0 && msobj.Direction > 1){
var event = event || window.event;
if(window.event){
if(msobj.IsNotOpera){msobj.EventLeft = event.srcElement.id == msobj.ID.id ? event.offsetX - msobj.ID.scrollLeft : event.srcElement.offsetLeft - msobj.ID.scrollLeft + event.offsetX;}
else{msobj.ScrollStep = null;return;}
}
else{msobj.EventLeft = event.layerX - msobj.ID.scrollLeft;}
msobj.Direction = msobj.EventLeft > msobj.HalfWidth ? 3 : 2;
msobj.AbsCenter = Math.abs(msobj.HalfWidth - msobj.EventLeft);
msobj.Step = Math.round(msobj.AbsCenter * (msobj.BakStep*2) / msobj.HalfWidth);
}
}
msobj.ID.onmouseover = function(){
if(msobj.ScrollStep == 0)return;
msobj.MouseOver = 1;
clearInterval(msobj.TimerID);
}
msobj.ID.onmouseout = function(){
if(msobj.ScrollStep == 0){
if(msobj.Step == 0)msobj.Step = 1;
return;
}
msobj.MouseOver = 0;
if(msobj.Stop == 0){
clearInterval(msobj.TimerID);
msobj.TimerID = setInterval(msobj.StartID,timer);
}}}
setTimeout(msobj.Begin,waittime);
}
srcMarquee.prototype.Scroll = function(){
switch(this.Direction){
case 0:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollTop >= this.ClientScroll){this.ID.scrollTop -= this.ClientScroll;}
this.ID.scrollTop += this.Step;
}
break;
case 1:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollTop <= 0){this.ID.scrollTop += this.ClientScroll;}
this.ID.scrollTop -= this.Step;
}
break;
case 2:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollLeft >= this.ClientScroll){this.ID.scrollLeft -= this.ClientScroll;}
this.ID.scrollLeft += this.Step;
}
break;
case 3:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollLeft <= 0){this.ID.scrollLeft += this.ClientScroll;}
this.ID.scrollLeft -= this.Step;
}
break;
}
} 

var timeout2=3000;  //切换时间
var timeout3=5000; //mouse over 后切换时间
var now_content=0;
var total_content=5;
var way=1;
var start_content=Math.round(Math.random()*(total_content-1))+1; //除广告为第一显示外
function content_mouse(num){
  now_content=num;
  window.clearInterval(theTimer2);   
  for (var i=1;i<=total_content;i++){
  document.getElementById('divhl0'+i).style.display='none';
  }
  document.getElementById('divhl0'+num).style.display='block';
  theTimer2=setTimeout(function(){change_content();}, timeout2);
}


function getobjbyid(id){
	if(!document.getElementById)return false;
	if(typeof id==="string"){
		if(document.getElementById && document.getElementById(id)) {
			return document.getElementById(id);
			}
		else if (document.all && document.all(id)) {
			return document.all(id);
			}
		else if (document.layers && document.layers[id]) {
			return document.layers[id];
			}
		else{
			return false;
			}	
		}
		else{return id;}
	}



function tagshow(im,sum,l){
	for (i = 1;i<=sum;i++){
	if (im == i)
	{

	getobjbyid("b" + l + "_" + im).className = "on"

	getobjbyid("c" + l + "_" + im).style.display = "block"
		}
	else
	
	{

	getobjbyid("b" + l + "_" + i).className = "off"
	getobjbyid("c" + l + "_" + i).style.display = "none"
}
		
}
}



	




function checktj()
{
if (document.Form2.sbmc.value=="")
{
alert("商标名称不能为空")
document.Form2.sbmc.focus()

return false;
}
if (document.Form2.sbzch.value=="")
{
alert("商标注册号不能为空")
document.Form2.sbzch.focus()
return false;
}
if (document.Form2.lb.value=="")
{
alert("商标类别没选")
document.Form2.lb.focus()
return false;
}

if (document.Form2.dh.value=="")
{
alert("联系电话不能为空")
document.Form2.dh.focus()
return false;
}
document.Form2.submit() 
}





	var $=function(tagName){
			return document.getElementsByTagName(tagName);
		}
			function check_id(id_name){
				var reId=/^[\w\u0391-\uFFE5]+$/;
				var b_id=reId.test(id_name);
				if(!b_id){
					$("span")[0].innerHTML="<img src='images/yesno.gif'/> 请输入";
				
				
				}
				else{
					checkid(id_name);
				}
			}

function checkid(regid){	
	var xmlhttp;
	try{
		xmlhttp=new XMLHttpRequest();
		}
	catch(e){
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4){
		if (xmlhttp.status==200){
			var data=xmlhttp.responseText;
			id_result(data);
			}
		else{
			$("span")[0].innerHTML="检测失败,请联系管理员";
			}
		}
	else{
		$("span")[0].innerHTML='<img src="images/loading.gif"/>';
		}
	}
	xmlhttp.open("post", "cs/check_id.asp", true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xmlhttp.send("regid="+escape(regid));
}
function id_result(data){
	var resultbox=$("span")[0];
	if(data==1){
		resultbox.innerHTML='<img src="images/yesok.gif"/> 可提交';
	
		}
	else{
		resultbox.innerHTML='<img src="images/yesno.gif"/> 已存在';

	}
}


	
           



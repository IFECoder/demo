function $(selector,content){
	if( selector.charAt(0) === "#" ){
		return document.getElementById(selector.slice(1))
	}else{
		content = content || document;
		return 	content.getElementsByTagName(selector);
	};
};
function getStyle( obj,attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];		
};
function doMove(obj,attr,target,speed,callBack){
	var cur = parseInt( getStyle(obj,attr) );

	//速度 正负取决于 当前位置和目标点的大小
	// 当前位置  < 目标点 速度是正的
	// 当前位置  > 目标点 速度是负的
	speed = cur < target ? Math.abs(speed) : -Math.abs(speed);
	//var timer = null;
	clearInterval(obj.timer);  //先清除，在开启
	obj.timer = setInterval(function (){
		cur += speed;
		if(  cur >= target && speed > 0 ||  cur <= target && speed < 0){
			clearInterval(obj.timer);
			cur = target;
			obj.style[attr] = cur + "PX";	

			/*if( typeof callBack === "function"){
				callBack();
			}*/

			typeof callBack === "function" &&　callBack();
		}else{
			obj.style[attr] = cur + "PX";	
		}

		
	},30);
}
setTimeout(function(){
	$('#pages1 .covers_lantern').addClass('p1-covers_lantern');
	 $('#pages1 #logo').addClass('p1-logo')
},200)
//初始化，页面刷新的动画
var data=['答案1','答案2','答案3','答案4','答案5','答案6','答案7','答案8','答案9'];
var resultNum=0;
var onOff = true;
function dengMi(index,objInputVal,objSure,objShowLant,objPagesBtn,objTangyuan) {//每个灯谜页面的竞猜
	objInputVal.on('focus',inputVal);//?能不能用focus
	function inputVal() {
		$(this).val('');
		$(this).addClass('inputChange');
	}

	objSure.on('touchend',isSure);
	function isSure() {
		var userVal=objInputVal.val();
		var answer=data[index-2];
		if (answer===userVal) {
			//resultNum++;通过相等进行加一的操作
			$(this).hide();
			objShowLant.show();
			objShowLant.addClass('lantern');
		}
	}
	objPagesBtn.on('touchend',look);
	function look() {
		$(this).css('background','none').html(data[index-2]);
		objTangyuan.addClass('p3-tangyuan2');
	}
}
var s = new Slider({
	pagination: true,
	"loop": true,
	"callback":function(index) {
		if(index===0){
			$('#pages1 .covers_lantern').addClass('p1-covers_lantern');
			$('#pages1 #logo').addClass('p1-logo');
		}
		if(index===1){
			$('#pages2 #word1').addClass('p2-word1');
			$('#pages2 #word2').addClass('p2-word2');
			$('#pages2 #pages2_lantern').addClass('p1-logo');
			$('#pages2 #pages2_btn').on('touchend',startGame);
			function startGame() {
			/*暂时是这种想法*/
			if (onOff) {
				for(var i=0; i<3; i++) {
					s.arrElement[i].style.display = 'block';
					s.arrElement[i].style[s.SuportCss('transition')] = 'none';
					s.arrElement[i].style[s.SuportCss('transform')] = 'translate3d('+((i-1)*s.cellWidth+s.offset*1)+'px, '+((i-1)*s.cellHeight+s.offset*0)+'px, 0)';
				}
				s.goIndex('+1');
				onOff = false;
			}
			}
		}
		if(index===2){
			dengMi(index,$('#pages3 .inputVal'),$('#pages3 .sure'),$('#pages3 .show_lantern'),$('#pages3 .pages_btn'),$('#pages3 .tangyuan2'));
			
		}
		if(index===3){
			dengMi(index,$('#pages4 .inputVal'),$('#pages4 .sure'),$('#pages4 .show_lantern'),$('#pages4 .pages_btn'),$('#pages4 .tangyuan2'));
		}
		if(index===4){
			dengMi(index,$('#pages5 .inputVal'),$('#pages5 .sure'),$('#pages5 .show_lantern'),$('#pages5 .pages_btn'),$('#pages5 .tangyuan2'));
		}
		if(index===5){
			dengMi(index,$('#pages6 .inputVal'),$('#pages6 .sure'),$('#pages6 .show_lantern'),$('#pages6 .pages_btn'),$('#pages6 .tangyuan2'));
		}
		if(index===6){
			dengMi(index,$('#pages7 .inputVal'),$('#pages7 .sure'),$('#pages7 .show_lantern'),$('#pages7 .pages_btn'),$('#pages7 .tangyuan2'));
		}
		if(index===7){
			dengMi(index,$('#pages8 .inputVal'),$('#pages8 .sure'),$('#pages8 .show_lantern'),$('#pages8 .pages_btn'),$('#pages8 .tangyuan2'));		
		}
		if(index===8){
			dengMi(index,$('#pages9 .inputVal'),$('#pages9 .sure'),$('#pages9 .show_lantern'),$('#pages9 .pages_btn'),$('#pages9 .tangyuan2'));
		}
		if(index===9){
			dengMi(index,$('#pages10 .inputVal'),$('#pages10 .sure'),$('#pages10 .show_lantern'),$('#pages10 .pages_btn'),$('#pages10 .tangyuan2'));	
		}
		if(index===10){
			dengMi(index,$('#pages11 .inputVal'),$('#pages11 .sure'),$('#pages11 .show_lantern'),$('#pages11 .pages_btn'),$('#pages11 .tangyuan2'));
		}
		if(index===11){
			var str="";
			resultNum=$('.lantern').length;
			for (var i = 0; i<resultNum; i++) {
				str+='<li class="lantern_num"><img src="img/pages_lantern.png" alt=""></li>'
			}
			$('#pages12 #total').html(str);
			$('#pages12 #share_btn').on('touchend',WeiXinShareBtn);//分享出的是一个成绩单，如何实现link？
			function WeiXinShareBtn() { 
				 if(typeof WeixinJSBridge == "undefined") { 
					 alert("请先通过微信搜索“中国网信网”公众号,并通过微信分享文章"); 
				 } else { 
				 WeixinJSBridge.invoke('shareTimeline', { 
					 "title": "中国网信网", 
					 "link": "http://www.xxx.com", 
					 "desc": "猜灯谜", 
					 "img_url": "http://www.xxx.com/assets/images/apple-touch-icon.png" 
					 }); 
				 } 
			 }
			
		}
	}
})

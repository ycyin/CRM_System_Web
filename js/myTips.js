//********************************************************************************************//
//
//作者：yinyicao@foxmail.com
//时间：2019-06-10
//描述：自定义的layer弹层组件，方便调用
//
//********************************************************************************************//

//简单的msg消息
function SimpleMsg(tipString) {
	layer.msg(tipString);
}

//简单的、有图标的，时间默认3秒
function MsgWithIcon(tipString,icon) {
	layer.msg(tipString, {
		icon: icon,
		time: 3000
	});
}

//简单的、有图标的，有动画的、时间默认3秒
function MsgWithIcon_Anim(tipString,icon,anim) {
	layer.msg(tipString, {
		icon: icon,
		anim: anim,
		time: 3000
	});
}
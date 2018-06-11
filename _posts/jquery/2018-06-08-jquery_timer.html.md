---
classes: wide
title: JQuery_timer
date: 2018-06-08
tags: jquery
---

[JQuery timer](../postdata/jquery_timer.html)

CSS
=====

```css
<style type="text/css">
	*{margin:0;padding:0;}
	a{text-decoration:none;}
	#logIn_wrap{position:relative;width:500px;height:300px;margin:0 auto;border:1px solid lightpink}
	.login_area{width:100%;height:40px;line-height:40px;text-indent:10px;border-bottom:1px solid lightblue;}
	.login_area .login_timer{display:inline-block; margin-right:5px;}
	.login_area .login_continue{display:inline-block; margin-right:10px;color:#db0000}
	
	.timeout_area{display:none;width:300px;height:200px;position:absolute;top:50%;left:50%;margin:-100px 0 0 -150px;border:1px solid lightblue}
	.timeout_area p{text-align:center;padding:30px 0;font-size:13px;}
	.timeout_area p span{display:inline-block;margin-left:3px;color:#db0000;}
	.timeout_area .btn_area{text-align:center;margin:15px 0;}
	.btn{display:inline-block; height:25px; padding: 0 14px 0; border:1px solid #304a8a; background:#3f5a9d; font-size:13px; color:#fff; line-height:25px;}
</style>
```

JAVASCRIPT
=====

```javascript
<script type="text/javascript">
	var LOGIN_INIT_TIME = 1 * 60;			// 10분
	var LOGIN_ALARM_OPEN_TIME = 60;	// 1분
	var _login_second = 0;
	var _login_timer = null;
	var _focusObj = null;

	$(function(){
		_login_second = LOGIN_INIT_TIME;
		_updateLoginTime();

		// TIMER
		var _login_timer = setInterval(function(){
			// 10분이 지났을 때
			if(_login_second == 0){
				clearInterval(_login_timer);
				_login_timer = null;
				alert("10분이 지났습니다.");
				_logOut();
				return;
			}
			_login_second--;
			_updateLoginTime();
		}, 1000);
	});

	function _logOut(){
		location.href = "https://www.wetax.go.kr/main/";
	}

	function _updateLoginTime(){
		$("#login_text").text(_timeToText(_login_second));
		
		// 로그인 시간이 1분이하가 됐을 때 팝업에 초 표시
		if(_login_second <= LOGIN_ALARM_OPEN_TIME){

			// 60초가 됐을 때 로그인 팝업 띄우기
			if(_login_second == LOGIN_ALARM_OPEN_TIME){
				_showLoginAlarm();
			}
			$("#login_timeout_text").text(_login_second);
		}

		function _timeToText(second){
			var min = Math.floor(second / 60);		// 60으로 나눈 몫
			var sec = Math.floor(second % 60);		// 60으로 나눈 나머지
			var text = "";

			// 1분 이하 남았을 때는 분을 표기하지 않음
			if(min > 0){
				text += min + "분 ";
			}
			text += sec + "초";
			return text;
		}
	}

	function _showLoginAlarm(){
		_focusObj = $(":focus");
		$("#login_timeout").show();
		$("#login_timeout a:eq(0)").focus();
	}

	function _hideLoginAlarm(){
		$("#login_timeout").hide();

		// focus 리셋
		if(_focusObj != undefined){
			_focusObj .focus();
			_focusObj  = null;
		}

		// 10분으로 리셋시키기
		_login_second = LOGIN_INIT_TIME;
		_updateLoginTime();
	}

	// 연장
	function _loginAreaGoKeep(){
		_hideLoginAlarm();

		/*
		$.get("<c:url value='/'/>a/main", function(data, status) {
			if (data == 'OK') {
				_hideLoginAlarm();
			}
		});
		*/
	}

</script>
```
  
HTML
=====

```html
<div id="logIn_wrap">
	<div class="login_area">
		<span class="login_timer" id="login_text">10분 0초</span><a href="javascript:void(0);" class="login_continue" onclick="_loginAreaGoKeep(); return false;">[연장]</a>
	</div>

	<div class="timeout_area" id="login_timeout">
		<p>자동 로그아웃 예정입니다. 남은시간 <span id="login_timeout_text">60</span> 초</p>
		<div class="btn_area">
			<a href="javascript:void(0);" class="btn" onclick="_loginAreaGoKeep(); return false;">로그인 연장</a>
			<a href="javascript:void(0);" class="btn" onclick="_logOut(); return false;">로그아웃</a>
		</div>
	</div>
</div>
```

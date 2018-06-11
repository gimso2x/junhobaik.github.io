---
classes: wide
title: JQuery_inputNumberonly
date: 2018-06-11
tags: jquery
---

[JQuery inputNumberonly](../postdata/jquery_inputNumberonly.html)

CSS
=====

```css
#wrap{padding:20px;}
h1{font-size:18px;margin-bottom:20px;}
```

JAVASCRIPT
=====

```javascript
$(function(){
	//input text 숫자만 입력받기
	$('input[type="text"]').on('keyup change',function() {
		$(this).val( $(this).val().replace(/[^0-9]/g,"") );
	});


	//라디오박스 value 합			
	$('button').on('click',function(){
		var radio_sum = 0;

		$('input[type="radio"]:checked').each(function() {
		radio_sum += parseInt($(this).val());
		// console.log("radio_sum : " + radio_sum);
		});

		$('.radioSum').text(radio_sum);
	});
})
```

HTML
=====

```html
<div id="wrap">
	<h1>input text 숫자만 입력받기</h1>
	<input type="text" />

	<br/><br/>
	<hr />

	<h1>라디오박스 value 합</h1>
	<ul>
		<li>
			3<input type="radio" name="radio1" value="3" />
			2<input type="radio" name="radio1" value="2"/>
			1<input type="radio" name="radio1" value="1"/>
		</li>
		<li>
			3<input type="radio" name="radio2" value="3"/>
			2<input type="radio" name="radio2" value="2"/>
			1<input type="radio" name="radio2" value="1"/>
		</li>
	</ul>
	<button>값 합계</button>
	<div>radio 값 : <span class="radioSum"></span></div>
</div>
```
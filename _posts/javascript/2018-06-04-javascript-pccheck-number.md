---
classes: wide
title: JAVASCRIPT pccheck number
date: 2018-06-04
tags: javascript
---

[JAVASCRIPT pccheck number](../postdata/javascript-pccheck-number.html)

CSS
=====

```javascript
// ======= 숫자 콤마 입력 ==========
		function numberWithCommas(x) { // 숫자 3자리 단위마다 콤마 함수
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		
		$(function() {
			var numberText = $('.numberConvert').text();
			$('.numberConvert').text(numberWithCommas(numberText));
		});

		// ========= 모바일, PC 구분 ==========
		var isSmart = {
			value: navigator.userAgent.match("iPhone|iPad|Android|Mobile|Windows CE|Windows Phone|Opera Mini") != null
		};
		
		$(function() {
        if(isSmart.value){ // 모바일일 경우
        $('#pcsort').text('모바일입니다.');
      }

      if(!isSmart.value){ // PC일 경우
        $('#pcsort').text('PC입니다.');
      }
		});
```
  
HTML
=====

```html
<div class="section_box">
  <h1>숫자 콤마 입력</h1>
  <span class="numberConvert">3000000</span>원
</div>

<div class="section_box">
  <h1>PC 모바일 구분</h1>
  <span id="pcsort"></span>
</div>	
```

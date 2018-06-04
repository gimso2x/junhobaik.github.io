---
classes: wide
title: JAVASCRIPT input-check-radio
date: 2018-06-04
tags: javascript
---

[JAVASCRIPT input-check-radio](../postdata/javascript-input-check-radio.html)

CSS
=====

```script
// ======= 체크박스 모두체크 기능 ==========
$(function(){
  //체크박스 모두동의
  $('#total_agree').click(function() {
    $('.agree2').prop('checked', this.checked);
  });
  //체크박스 모두 다 체크되면 위항목도 체크
  $('.agree2').click(function(){
    if($('.agree2').length == $('.agree2:checked').length){
      $('#total_agree').prop('checked',true);
    }else{
      $('#total_agree').prop('checked',false);
    }
  });
});


// ========= 라디오버튼 다시누를시 선택해제 ==========
$(document).on("click", "input[type='radio']", function(){
  thisRadio = $(this);
  if (thisRadio.hasClass("imChecked")) {
    thisRadio.removeClass("imChecked");
    thisRadio.prop('checked', false);
  } else {
    thisRadio.prop('checked', true);
    thisRadio.addClass("imChecked");
  };
})
```
  
HTML
=====

```html
<div class="section_box">
  <h1>체크박스 모두체크 기능</h1>
  <input type="checkbox" id="total_agree" name="total_agree"><label for="total_agree">모두체크</label>

  <input type="checkbox" class="agree2" name="check1">
  <input type="checkbox" class="agree2" name="check2">
  <input type="checkbox" class="agree2" name="check3">

</div>

<div class="section_box">
  <h1>라디오 다시체크시 해제</h1>
  <input type="radio" name="a22" />
  <input type="radio" name="a22" />
  <input type="radio" name="a22" />
</div>	
```

---
classes: wide
title: JQuery_qna
date: 2018-06-28
tags: jquery
---

[JQuery qna](../postdata/jquery_qna.html)

CSS
=====

```css
#wrap{width:600px;border: 1px solid #000;}
.accodion>li{background: #eee;border-bottom: 1px solid #000;}
.accodion a{display: block;height: 20px;width:100%;}
.accodion li ul.depth2{display: none;height: 20px;background: gray;height:100%;}
.accodion li ul.depth2 li a{color:#fff;}
.accodion li ul.depth2 li a:hover{color:#000;background:#fff;;}
```

JAVASCRIPT
=====

```javascript
$(function(){
    $('.accodion a').on('click',function(){
        var li = $(this).parent();
        $('.accodion li .depth2').slideUp();
        if(!li.children('.depth2').is(":visible")){
            li.children('.depth2').slideDown();
        }
    });
})
```

HTML
=====

```html
<div id="wrap">
    <ul class="accodion">
        <li><a href="javascript:void(0)">아코디언1</a>
            <ul class="depth2">
                <li><a href="javascript:void(0);">아코디언하부1-1</a></li>
                <li><a href="javascript:void(0);">아코디언하부1-2</a></li>
            </ul>	
        </li>
        <li><a href="javascript:void(0)">아코디언1</a>
            <ul class="depth2">
                <li><a href="javascript:void(0);">아코디언하부1-1</a></li>
                <li><a href="javascript:void(0);">아코디언하부1-2</a></li>
            </ul>	
        </li>
        <li><a href="javascript:void(0)">아코디언1</a>
            <ul class="depth2">
                <li><a href="javascript:void(0);">아코디언하부1-1</a></li>
                <li><a href="javascript:void(0);">아코디언하부1-2</a></li>
            </ul>	
        </li>
        <li><a href="javascript:void(0)">아코디언1</a>
            <ul class="depth2">
                <li><a href="javascript:void(0);">아코디언하부1-1</a></li>
                <li><a href="javascript:void(0);">아코디언하부1-2</a></li>
            </ul>	
        </li>
    </ul>
</div>
```

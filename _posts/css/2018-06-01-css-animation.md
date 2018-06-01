---
classes: wide
title: CSS animation
date: 2018-06-01
tags: css
---

[CSS animation](../postdata/css-animation.html)

CSS
=====

```css
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
		
/*		//무한깜빡이*/
		.scroll_area>div{width: 50px;height: 50px;}
        .scroll_area .scroll_l {
/*            position: absolute;*/
/*            left: 0;*/
/*            bottom: 10px;*/
/*            transition-delay: .5s;*/
            -webkit-animation: scroll 1s ease  infinite;
            -moz-animation: scroll 1s ease  infinite;
            animation: scroll 1s ease  infinite;
            display: block;
			background: red;
        }

        .scroll_area .scroll_s {
/*            position: absolute;*/
/*            left: 0px;*/
/*            bottom: 0px;*/
            transition-delay: .5s;
            -webkit-animation: scroll 1s ease .2s infinite;
            -moz-animation: scroll 1s ease .2s infinite;
            animation: scroll 1s ease .2s infinite;
            display: block;
			background: blue;
        }

        @-webkit-keyframes scroll {
            0% {opacity: 0;}
            50% {opacity: 1;}
            100% {opacity: 0;}
        }

        @keyframes scroll {
            0% {opacity: 0;}
            50% {opacity: 1;}
            100% {opacity: 0;}
        }

/*		회전*/
		.area{background: gold;width: 50px;height: 50px}
		.area{
    -webkit-animation: spin 4s linear;
    -moz-animation: spin 4s linear;
    animation: spin 4s linear;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(720deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(720deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(720deg); transform:rotate(720deg); } }
```
  
HTML
=====

```html
<h1>무한깜빡이</h1>
<div class="scroll_area">
  <div class="scroll_l">		
  </div>
  <div class="scroll_s">
  </div>
</div>
<hr>
<h1>회전</h1>

<div class="area">
</div>
```

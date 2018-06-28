---
classes: wide
title: JQuery_tab_list_change
date: 2018-06-28
tags: jquery
---

[JQuery tab_list_change](../postdata/jquery_tab_list_change.html)

CSS
=====

```css
#wrap{width: 800px;margin: auto;}
.sort{margin-bottom: 50px;}
.sort::after{content:'';clear: both;display: block;}
.sort li{float:left;width: 50%;text-align: center;}
.sort li a{display: inline-block;background: #eee;padding: 10px;}

.div_wrap{width:600px;margin: auto;overflow: hidden;}
.box{background: black;margin: -10px;}
.box::after{content:'';clear: both;display: block;}
.box li{float:left;width:25%;padding: 10px;}
.box div{background: red;color:#fff;text-align: center;}

.box.v2 li{width:100%;}
```

JAVASCRIPT
=====

```javascript
$(function() {
    $('.sort a').click(function() {
        var sort_a = $(this).attr('href');

        if (sort_a == "#image") {
            $('.box').removeClass('v2');
        }
        if (sort_a == "#list") {
            $('.box').addClass('v2');
        }
    });
});
```

HTML
=====

```html
<div id="wrap">
    <ul class="sort">
        <li><a href="#image">이미지형</a></li>
        <li><a href="#list">목록형</a></li>
    </ul>

    <div class="div_wrap">
        <ul class="box">
            <li>
                <div>1</div>
            </li>
            <li>
                <div>2</div>
            </li>
            <li>
                <div>3</div>
            </li>
            <li>
                <div>4</div>
            </li>
            <li>
                <div>5</div>
            </li>
            <li>
                <div>6</div>
            </li>
        </ul>
    </div>
</div>
```
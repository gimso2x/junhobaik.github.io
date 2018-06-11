---
classes: wide
title: JQuery_chartjs
date: 2018-06-11
tags: jquery
---

[JQuery chartjs](../postdata/jquery_chartjs.html)

CSS
=====

```css
.dim-layer { display: none; position: fixed; _position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 9998; }
.dim-layer .dimBg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000; opacity: .5; filter: alpha(opacity=50); }
.dim-layer .pop_menu {
    display: block;
    position: absolute;
    top: 0;
    left: -320px;
    width: 320px;
    height: 100%;
    z-index: 9001;
    opacity: 0;
    background: #eaecee;
}
.close{float: right;}
```

JAVASCRIPT
=====

```javascript
$(function() {
    // menu open
    //모바일gnb메뉴
    $('.menu_a').on('click',function() {
        $('.dim-layer').css('display', 'block');
        $('.pop_menu').animate({
            opacity: '1',
            left: '0'
        }, 200, "linear");
        // if (winSize < 768){
        //     $('body').css({overflow:'hidden'});
        // }

    })
    $('.dimBg, .close').on('click', function() {
        $('.dim-layer').css('display', 'none');
        $('.pop_menu').css({
            opacity: '0',
            left: '-320px'
        });
        // if (winSize < 768){
        //     $('body').css({overflow:'visible'});
        // }
    })
}); // end ready
```

HTML
=====

```html
<div class="wrap">
    <div class="mobile_header_menu">
        <a href="javascript:void(0);" class="menu_a">
            메뉴열기버튼
        </a>
        <div class="dim-layer">
            <div class="dimBg"></div>
            <div class="pop_menu">
                <div class="pop_menu_header">
                    전체메뉴
                    <a href="javascript:void(0);" class="close">닫기버튼</a>
                </div>
                <div class="pop_menu_content">
                    XX님 반갑습니다
                </div>
            </div>
        </div>
    </div>
</div>
```
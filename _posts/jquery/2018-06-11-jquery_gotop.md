---
classes: wide
title: JQuery_gotop
date: 2018-06-11
tags: jquery
---

[JQuery gotop](../postdata/jquery_gotop.html)

CSS
=====

```css
/* BackToTop button css */
#scroll {
    position:fixed;
    right:10px;
    bottom:10px;
    cursor:pointer;
    width:50px;
    height:50px;
    background-color:#272727;
    text-indent:-9999px;
    display:none;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
}
#scroll span {
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-8px;
    margin-top:-12px;
    height:0;
    width:0;
    border:8px solid transparent;
    border-bottom-color:#ffffff
}
```

JAVASCRIPT
=====

```javascript
$(document).ready(function(){
    scrollFade();

    $(window).on('scroll resize', function(){
        scrollFade();
    });

    $('#scroll').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    function scrollFade(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    }
});
```

HTML
=====

```html
<div style="height:1900px;background:lightblue;">2</div>
<!-- BackToTop Button -->
<a href="javascript:void(0);" id="scroll" title="Scroll to Top">Top<span></span></a>
```
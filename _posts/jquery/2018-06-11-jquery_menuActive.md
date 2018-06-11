---
classes: wide
title: JQuery_menuActive
date: 2018-06-11
tags: jquery
---

[JQuery menuActive](../postdata/jquery_menuActive.html)

CSS
=====

```css
#wrap{width: 800px;}
header{position: fixed;top: 0;width: 800px;height:52px;background:gray;}
header::after{content:'';display:block;clear:both;}
h1.logo{padding: 20px;float:left;cursor:pointer;color:#fff;}
ul{display: inline-block;float:right;}
ul::after{content:"";display: block;clear: both;}
ul li{float:left;}
ul li a{display: inline-block;padding: 20px;color:#fff !important;}
ul li.active a{color:red !important;}

section{height:1000px;width:100%;}
section#main{background:rgb(255, 205, 86)}
section#portfolio{background:rgb(75, 192, 192)}
section#about{background:rgb(153, 102, 255)}
section#contact{background:rgb(255, 99, 132)}
```

JAVASCRIPT
=====

```javascript
$(function(){
    $(window).on('scroll', function() {
    var scTop = $(window).scrollTop(),
        mh = $('header').height(),
        sec1 = $('#main').offset().top,
        sec2 = $('#portfolio').offset().top,
        sec3 = $('#about').offset().top,
        sec4 = $('#contact').offset().top;
    if (scTop >= 0) {
        $('.gnb li').removeClass('active')
    }
    if (scTop >= sec1 - mh) {
        $('.gnb li').eq(0).addClass('active').siblings().removeClass('active');
    }
    if (scTop >= sec2 - mh) {
        $('.gnb li').eq(1).addClass('active').siblings().removeClass('active');
    }
    if (scTop >= sec3 - mh) {
        $('.gnb li').eq(2).addClass('active').siblings().removeClass('active');
    }
    if (scTop >= sec4 - mh) {
        $('.gnb li').eq(3).addClass('active').siblings().removeClass('active');
    }
    });
    $('.logo').on('click', function() {
        $('html, body').stop().animate({
            'scrollTop': 0
        }, 300);
        return false;
    });
    $('.gnb li a').on('click', function() {
        var scrollPosition = $($(this).attr("href")).offset().top;
        $('html,body').stop().animate({
            scrollTop: scrollPosition
        }, 600);
        return false;
    });
});
```

HTML
=====

```html
<div id="wrap">
    <header>
        <h1 class="logo">로고</h1>
        <ul class="gnb">
            <li><a href="#main">main</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </header>
    <div id="container">
        <section id="main"></section>
        <section id="portfolio"></section>
        <section id="about"></section>
        <section id="contact"></section>
    </div>
</div>
```
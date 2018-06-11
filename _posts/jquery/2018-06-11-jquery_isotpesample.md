---
classes: wide
title: JQuery_isotpesample
date: 2018-06-11
tags: jquery
---

[JQuery isotpesample](../postdata/jquery_isotpesample.html)

CSS
=====

```css
h1{font-size:30px;}
h1 ~ div{line-height:50px;}
```

JAVASCRIPT
=====

```javascript
$(window).load(function(){
    var $container = $('.pofol_contents');
    $container.isotope({
        filter:'*',
        masonry:{
            fitWidth:true,//센터정렬
            gutter:20 //좌우간격
        }
    });

    $('.pofol_menu a').on('click', function(){
        $(this).addClass('current').siblings().removeClass();
        var filterValue = $( this ).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });

        return false;
    });
});
```

HTML
=====

```html
<h1>isotope 플러그인 샘플</h1>
<div class="pofol_menu">
    <a href="#" data-filter="*" class="current">All</a>
    <a href="#" data-filter=".responsive">반응형</a>
    <a href="#" data-filter=".website">웹사이트</a>
    <a href="#" data-filter=".mobile">모바일</a>
</div>

<div class="pofol_contents">
    <div class="responsive mobile">
        <div style="width:200px;height:200px;background:lightblue;">11</div>
    </div>
    <div class="website mobile">
        <div style="width:200px;height:200px;background:lightblue;">22</div>
    </div>
    <div class="mobile">
        <div style="width:200px;height:200px;background:lightblue;">33</div>
    </div>
    <div class="website">
        <div style="width:200px;height:200px;background:lightblue;">44</div>
    </div>
    <div class="responsive">
        <div style="width:200px;height:200px;background:lightblue;">55</div>
    </div>
</div>
```
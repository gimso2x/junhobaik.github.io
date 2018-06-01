---
classes: wide
title: css 이용 div_list(동일간격)
date: 2018-06-01
tags: css
---

[css 이용 div_list(동일간격)](../postdata/css-div-list.html)

CSS
=====

```css
*{ margin: 0; padding: 0; box-sizing: border-box; }
ul,li{list-style: none;}

.wrap{width: 600px;margin: 0 auto; overflow: hidden;}
ul{background: black;margin:-10px;}
ul::after{content:'';clear: both;display: block;}
li{float:left;width:25%;padding: 10px;}
li>div{background: red;}
```
  
HTML
=====

```html
<div class="wrap">
    <ul>
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
```

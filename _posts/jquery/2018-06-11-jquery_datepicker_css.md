---
classes: wide
title: JQuery_datepicker_css
date: 2018-06-11
tags: jquery
---

[JQuery datepicker_css](../postdata/jquery_datepicker_css.html)
**JQuery UI 사용**

CSS
=====

```css
/* reset */

* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0
}

/* DatePicker Container */

#datepicker {
    border: 1px solid #e0e0e0;
    height: 33px;
    padding: 5px;
}

.ui-datepicker {
    width: 216px;
    height: auto;
    margin: 5px auto 0;
    font: 9pt Arial, sans-serif;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .5);
}

.ui-datepicker a {
    text-decoration: none;
}

/* DatePicker Table */

.ui-datepicker table {
    width: 100%;
}

.ui-datepicker-header {
    background: #000;
    color: #e0e0e0;
    font-weight: bold;
    -webkit-box-shadow: inset 0px 1px 1px 0px rgba(250, 250, 250, 2);
    -moz-box-shadow: inset 0px 1px 1px 0px rgba(250, 250, 250, .2);
    box-shadow: inset 0px 1px 1px 0px rgba(250, 250, 250, .2);
    text-shadow: 1px -1px 0px #000;
    filter: dropshadow(color=#000, offx=1, offy=-1);
    line-height: 30px;
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: #111;
}

.ui-datepicker-title {
    text-align: center;
}

.ui-datepicker-prev,
.ui-datepicker-next {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    /* line-height: 600%; overflow: hidden; */
}

.ui-datepicker-prev:hover,
.ui-datepicker-next:hover {
    color: #fff;
}

.ui-datepicker-prev {
    float: left;
    background-position: center -30px;
}

.ui-datepicker-next {
    float: right;
    background-position: center 0px;
}

.ui-datepicker thead {
    background-color: #f7f7f7;
    background-image: -moz-linear-gradient(top, #f7f7f7 0%, #f1f1f1 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f7f7f7), color-stop(100%, #f1f1f1));
    background-image: -webkit-linear-gradient(top, #f7f7f7 0%, #f1f1f1 100%);
    background-image: -o-linear-gradient(top, #f7f7f7 0%, #f1f1f1 100%);
    background-image: -ms-linear-gradient(top, #f7f7f7 0%, #f1f1f1 100%);
    background-image: linear-gradient(top, #f7f7f7 0%, #f1f1f1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#f1f1f1', GradientType=0);
    border-bottom: 1px solid #bbb;
}

.ui-datepicker th {
    text-transform: uppercase;
    font-size: 6pt;
    padding: 5px 0;
    color: #666666;
    text-shadow: 1px 0px 0px #fff;
    filter: dropshadow(color=#fff, offx=1, offy=0);
}

.ui-datepicker tbody td {
    padding: 0;
    border-right: 1px solid #bbb;
    background: #fff;
}

.ui-datepicker tbody td:last-child {
    border-right: 0px;
}

.ui-datepicker tbody tr {
    border-bottom: 1px solid #bbb;
}

.ui-datepicker tbody tr:last-child {
    border-bottom: 0px;
}

.ui-datepicker td span,
.ui-datepicker td a {
    display: inline-block;
    font-weight: bold;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #666666;
    text-shadow: 1px 1px 0px #fff;
    filter: dropshadow(color=#fff, offx=1, offy=1);
}

.ui-datepicker-calendar .ui-state-default {
    background: #ededed;
    background: -moz-linear-gradient(top, #ededed 0%, #dedede 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ededed), color-stop(100%, #dedede));
    background: -webkit-linear-gradient(top, #ededed 0%, #dedede 100%);
    background: -o-linear-gradient(top, #ededed 0%, #dedede 100%);
    background: -ms-linear-gradient(top, #ededed 0%, #dedede 100%);
    background: linear-gradient(top, #ededed 0%, #dedede 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#dedede', GradientType=0);
    -webkit-box-shadow: inset 1px 1px 0px 0px rgba(250, 250, 250, .5);
    -moz-box-shadow: inset 1px 1px 0px 0px rgba(250, 250, 250, .5);
    box-shadow: inset 1px 1px 0px 0px rgba(250, 250, 250, .5);
}

.ui-datepicker-calendar .ui-state-hover {
    background: #f7f7f7;
}

.ui-datepicker-calendar .ui-state-active {
    background: #6eafbf;
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, .1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, .1);
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, .1);
    color: #e0e0e0;
    text-shadow: 0px 1px 0px #4d7a85;
    filter: dropshadow(color=#4d7a85, offx=0, offy=1);
    border: 1px solid #55838f;
    position: relative;
    margin: -1px;
    box-sizing: content-box;
}

.ui-datepicker-unselectable .ui-state-default {
    background: #f4f4f4;
    color: #b4b3b3;
}

.ui-datepicker-calendar td:first-child .ui-state-active {
    width: 29px;
    margin-left: 0;
}

.ui-datepicker-calendar td:last-child .ui-state-active {
    width: 29px;
    margin-right: 0;
}

.ui-datepicker-calendar tr:last-child .ui-state-active {
    height: 29px;
    margin-bottom: 0;
}
```

JAVASCRIPT
=====

```javascript
$(function () {
    //달력
    useDatepicker();
    $(".datepicker").datepicker();
});

// 달력
function useDatepicker() {
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전',
        nextText: '다음',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
}
```

HTML
=====

```html
<input type="text" class="datepicker">
```

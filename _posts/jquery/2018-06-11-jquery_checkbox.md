---
classes: wide
title: JQuery_checkbox
date: 2018-06-11
tags: jquery
---

[JQuery checkbox](../postdata/jquery_checkbox.html)

JAVASCRIPT
=====

```javascript
$(function () {
    //#checkAll,#checkAll2 : 전체 체크하는 체크박스 ID
    //chekcs,checks2 : 밑에 체크박스들 Classs
    $('#checkAll').checkAll('checks');
    $('#checkAll2').checkAll('checks2');
});

$.fn.checkAll = function (checks) {
    var $checkAll = this;
    var $checks = $('.' + checks);

    // 모두 동의 체크박스 클릭시
    this.click(function () {
        $checks.prop('checked', this.checked);
    });

    // 하부 체크박스 클릭시
    $checks.click(function () {
        if ($checks.length == $('.' + checks + ':checked').length) {
            $checkAll.prop('checked', true);
        } else {
            $checkAll.prop('checked', false);
        }
    });
};
```

HTML
=====

```html
<table>
    <tr>
        <h2>체크1</h2>
        <th>모두체크</th>
        <td>
            <input type="checkbox" id="checkAll">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks">
        </td>
    </tr>
</table>
<hr>

<table>
    <tr>
        <h2>체크2</h2>
        <th>모두체크</th>
        <td>
            <input type="checkbox" id="checkAll2">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks2">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks2">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks2">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks2">
        </td>
    </tr>
    <tr>
        <th></th>
        <td>
            <input type="checkbox" class="checks2">
        </td>
    </tr>
</table>
```
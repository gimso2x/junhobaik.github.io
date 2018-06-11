---
classes: wide
title: JQuery_img_selectoption
date: 2018-06-11
tags: jquery
---

[JQuery img_selectoption](../postdata/jquery_img_selectoption.html)

CSS
=====

```css
.drop-down {
            position: relative;
            display: inline-block;
            width: auto;
            margin-top: 0;
        }

        .drop-down select {
            display: none;
        }

        .drop-down .button {
            cursor: pointer;
            width: 117px;
            border: 1px solid #e0e0e0;
            position: relative;

        }

        .drop-down .button span {
            background-position: left 4px center !important;
            background: no-repeat;
            padding: 9px 15px 10px 31px;
            font-size: 15px;
            display: inline-block;
        }

        .drop-down .button a.select-list-link {
            position: absolute;
            display: block;
            right: 8px;
            top: 50%;
            margin-top: -4.5px;
            background: url(../img/input_arrow.png) no-repeat;
            width: 13px;
            height: 9px;
        }

        .drop-down .select-list {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            margin-top: 33px;
            padding: 0;
            border: 1px solid #e0e0e0;
            border-top: none;
        }

        .drop-down .select-list li {
            display: none;
        }

        .drop-down .select-list li span {
            display: inline-block;
            width: 115px;
            padding: 11px 15px 11px 31px;
            background-position: left 4px center;
            background-repeat: no-repeat;
            font-size: 14px;
            text-align: left;
            color: #777;
            opacity: 0.7;
            box-sizing: border-box;
            cursor: pointer;
        }

        .drop-down .select-list li span:hover,
        .drop-down .select-list li span:focus {
            opacity: 1;
            background-color: #f0f5ff;
            background-repeat: no-repeat;
        }
```

JAVASCRIPT
=====

```javascript
$(document).ready(function() {

    $('.drop-down').each(function(idx) {

        var dropDown = $(this);

        /*	드롭다운 디자인 부분	*/
        dropDown.append('<div class="button"></div>');
        dropDown.append('<ul class="select-list"></ul>');
        dropDown.find('select option').each(function(i) {
            var bg = $(this).css('background-image');
            dropDown.find('.select-list').append('<li class="clsAnchor"><span value="' + $(this).val() + '" class="' + $(this).attr('class') + '" style=background-image:' + bg + '>' + $(this).text() + '</span></li>');
        });

        /*	드롭다운 option	*/
        dropDown.find('.button').html('<span style=background-image:' + dropDown.find('select').find(':selected').css('background-image') + '>' + dropDown.find('select').find(':selected').text() + '</span>' +
            '<a href="javascript:void(0);" class="select-list-link"></a>');
        dropDown.find('ul li').each(function() {
            if ($(this).find('span').text() == dropDown.find('select').find(':selected').text()) {
                $(this).addClass('active');
            }
        });

        /*	드룹다운 onclick	*/
        dropDown.find('.select-list span').on('click', function() {
            var dd_text = $(this).text();
            var dd_img = $(this).css('background-image');
            var dd_val = $(this).attr('value');
            dropDown.find('.button').html('<span style=background-image:' + dd_img + '>' + dd_text + '</span>' + '<a href="javascript:void(0);" class="select-list-link"></a>');
            $('.drop-down .select-list span').parent().removeClass('active');
            $(this).parent().addClass('active');
            dropDown.find('select[name=options]').val(dd_val);
            dropDown.find('.select-list li').slideUp();
        });

        dropDown.find('.button').on('click', function() {
            dropDown.find('ul li').slideToggle();
        });

    });
    /* End */
});
```

HTML
=====

```html
<div class="wrap">
    <div class="drop-down">
        <select name="options">
            <option class="en" value="en" style="background-image:url('../img/en.png');">준비중</option>
            <option class="fr" value="fr" style="background-image:url('../img/fr.png');">부분준비</option>
            <option class="nl" value="nl" style="background-image:url('../img/nl.png');">준비완료</option>
            <option class="nl" value="nl" style="background-image:url('../img/nl.png');">준비불가</option>
            <option class="nl" value="nl" style="background-image:url('../img/nl.png');">메모확인</option>
        </select>
    </div>

    <div class="drop-down">
        <select name="options">
            <option class="en" value="en" style="background-image:url('../img/en.png');">준비중</option>
            <option class="fr" value="fr" style="background-image:url('../img/fr.png');">부분준비</option>
            <option class="nl" value="nl" style="background-image:url('../img/nl.png');">준비완료</option>
            <option class="nl" value="nl" style="background-image:url('../img/nl.png');">준비불가</option>
            <option class="nl" value="nl" style="background-image:url('../img/nl.png');">메모확인</option>
        </select>
    </div>
</div>
```
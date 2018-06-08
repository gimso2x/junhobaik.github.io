---
classes: wide
title: jquery_tab
date: 2018-06-08
tags: jquery
---

[JQuery tab](../postdata/jquery_tab.html)

CSS
=====

```css
.wrap { width: 600px; margin: 10px auto; }
h1{font-size: 30px;margin-bottom: 20px;color:#000;}
hr{margin: 30px 0;}

/* ============= 탭 CSS ============= */

.tab .tab_menu:after { content: ""; display: block; height: 0; line-height: 0; clear: both; }

/* 탭 - 탭메뉴  */
.tab .tab_menu>li { float: left; width: 33.3333%; }
.tab .tab_menu>li:first-child>a { margin-left: 0;}
.tab .tab_menu>li>a {
	display: block;
	position: relative;
	text-align: center;
	text-decoration: none;
	padding: 14px 16px;
	cursor: pointer;
	border: 1px solid #666;
	margin-left: -1px;
}

/* 탭 - 탭메뉴 - current 활성화 */
.tab ul.tab_menu>li.current a { font-weight: bold; border: 1px solid red; z-index: 1; }

/* 탭 - 탭내용 */
.tab .tab_content {
	display: none;
	padding: 6px 12px;
	border: 1px solid #666;
	min-height: 100px;
	margin-top: 10px;
}

/* 탭 - 탭내용 - current 활성화 */
.tab .tab_content.current {
	display: block;
}

/* //============= 탭 CSS =============// */
```

JAVASCRIPT
=====

```javascript
$(function() {

// 탭1-----------------------------------------
$('.tab_wrap').tabMenu();
$('.tab_wrap2').tabMenu();

// //탭1-------------------------------------------

});//$(function()  end

// 탭1 탭메뉴
$.fn.tabMenu = function () {
this.each(function () {
	var $tab_menu = $(this).find('ul.tab_menu>li');
	var $tab_content = $(this).find('.tab_content_wrap');

	$tab_menu.on('click', function (e) {
		e.preventDefault();
		var _idx = $tab_menu.index(this);

		// tab_menu
		$(this).addClass('current').siblings().removeClass('current');

		//tab_content
		$tab_content.find('.tab_content').eq(_idx).addClass('current').siblings().removeClass('current');

	});
});
};
// //탭1 탭메뉴
```
  
HTML
=====

```html
<div class="wrap">
	<h1>탭1</h1>
	<div class="tab_wrap">
		<div class="tab">
			<ul class="tab_menu">
				<li class="current"><a href="javascript:void(0);">탭1</a></li>
				<li><a href="javascript:void(0);">탭2</a></li>
				<li><a href="javascript:void(0);">탭3</a></li>
			</ul>

			<div class="tab_content_wrap">
				<div class="tab_content current">
					contents1
				</div>

				<div class="tab_content">
					contents2
				</div>

				<div class="tab_content">
					contents3
				</div>
			</div>
		</div>
	</div>

	<hr />

	<div class="tab_wrap2">
		<div class="tab">
			<ul class="tab_menu">
				<li class="current"><a href="javascript:void(0);">탭1</a></li>
				<li><a href="javascript:void(0);">탭2</a></li>
				<li><a href="javascript:void(0);">탭3</a></li>
			</ul>

			<div class="tab_content_wrap">
				<div class="tab_content current">
					contents1
				</div>

				<div class="tab_content">
					contents2
				</div>

				<div class="tab_content">
					contents3
				</div>
			</div>
		</div>
	</div>
</div>
```

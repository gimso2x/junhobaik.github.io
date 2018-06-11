---
classes: wide
title: JQuery_familysite
date: 2018-06-11
tags: jquery
---

[JQuery familysite](../postdata/jquery_familysite.html)

HTML
=====

```html
<form onsubmit="return false;">
	<fieldset>
	<legend>관련사이트</legend>
		<ul>
			<li>
				<select id="search_cat1" title="관련사이트 선택">
					<option value="">소속기관 홈페이지</option>
					<option value="http://www.logodi.go.kr/">지방자치인재개발원</option>
					<option value="http://www.archives.go.kr/">국가기록원</option>
					<option value="http://www.chungsa.go.kr/">정부청사관리본부</option>
					<option value="http://www.ibuk5do.go.kr/">이북5도위원회</option>
					<option value="http://www.rrncc.go.kr/">주민등록번호변경위원회</option>
					<option value="http://www.ndti.go.kr/">국가민방위재난안전교육원</option>
					<option value="http://www.nfs.go.kr/">국립과학수사연구원</option>
					<option value="http://www.nirs.go.kr/">국가정보자원관리원</option>
					<option value="http://www.ndmi.go.kr/">국립재난안전연구원</option>
				</select>
				<a href="#" title="새창" onclick="_goSite('search_cat1'); return false;">이동</a>
			</li>
			<li>
				<select id="search_cat2" title="관련사이트 선택">
					<option value="">산하기관 홈페이지</option>
					<option value="http://www.nia.or.kr">한국정보화진흥원</option>
					<option value="http://www.kdemo.or.kr">민주화운동기념사업회</option>
					<option value="http://www.ilje.or.kr">일제강제동원피해자지원재단</option>
					<option value="http://www.krila.re.kr">한국지방행정연구원</option>
					<option value="http://www.poba.or.kr">대한지방행정공제회</option>
					<option value="http://www.lofa.or.kr">한국지방재정공제회</option>
					<option value="http://www.kolop.or.kr">한국지역진흥재단</option>
					<option value="http://www.klid.or.kr">한국지역정보개발원</option>
					<option value="http://www.erc.re.kr">지방공기업평가원</option>
					<option value="http://www.koelsa.or.kr">한국승강기안전공단</option>
				</select>
				<a href="#" title="새창" onclick="_goSite('search_cat2'); return false;">이동</a>
			</li>
		</ul>
	</fieldset>
</form>
```

JAVASCRIPT
=====

```javascript
function _goSite(item) {
	var $id = "#" + item;
	var siteVal = $($id).val();
	
	if(siteVal == "") {
		alert("관련사이트를 선택하세요.");
		site.focus();
	} else {
		window.open(siteVal, '', '');
	}
}
```

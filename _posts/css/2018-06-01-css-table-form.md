---
classes: wide
title: CSS table form
date: 2018-06-01
tags: css
---

[CSS table form](../postdata/css-table-form.html)

CSS
=====

```css
h1 {font-size: 30px; padding: 20px; border-bottom: 3px solid #eee; margin-bottom: 20px;}

#wrap { width: 1000px; padding: 20px; }

/* bbs_list */
.form_control { padding: 5px 12px; font-size: 14px; color: #555; border: 1px solid #ccc; border-radius: 4px; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s; -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }
.form_control:focus{ border-color: #66afe9; outline: 0; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6); box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6); }
.btn_control{display: inline-block; padding: 5px 12px; font-size: 14px;background: #fff; border: 1px solid #ccc; border-radius: 4px; text-decoration: none;font-weight: bold;color:#555;}
.btn_control:hover{background: #e6e6e6; border-color: #adadad;}
.bbs_list .search_box{width: 100%; text-align: right; background-color: #fbfbfb; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;padding: 7px;margin-bottom: 10px;}
.bbs_list table{margin-bottom: 10px;}
.bbs_list table tr th{font-size: 14px;border-top: 2px solid #337ab7;background: #fbfbfb;}
.bbs_list table th, .bbs_list table td{border-bottom: 1px solid #ddd;color:#555;text-align: center;padding: 10px;}
.bbs_list table td:nth-of-type(2){text-align: left;}
.bbs_list table tr.notice{background-color: #effbff;}
.bbs_list table tr.notice td:nth-of-type(1){color: #0e7bc2;}
.bbs_list table tr.notice td:nth-of-type(2){color: #0e7bc2;font-weight: 700;}
.btn_wrap{margin-bottom: 10px;text-align: right;}
.bbs_list .paging_wrap{text-align: center;}
.bbs_list .paging_wrap a{padding: 9px;font-size: 15px;font-weight: normal;}
.bbs_list .paging_wrap a.active{background-color: #337ab7; border-color: #2e6da4;color:#fff;font-weight: bold;}
/* // bbs_list */

/* bbs_view */
.bbs_view .view_tit{border-top: 2px solid #337ab7;border-bottom:1px solid #ddd;background: #fbfbfb;padding: 18px;}
.bbs_view .view_tit .title{font-size: 16px;font-weight: bold;color:#000;}
.bbs_view .view_tit .other{text-align: right;padding-top: 10px;}
.bbs_view .view_tit .other span{border-left: 1px solid #ccc;margin-left: 10px;padding-left: 10px;}
.bbs_view .view_tit .other span:nth-of-type(1){border-left: 0;}
.bbs_view .view_contents{padding: 18px;border-bottom: 1px solid #ddd;}
/* // bbs_view */

/* bbs_form */
.bbs_form .view_tit{border-top: 2px solid #337ab7;border-bottom:1px solid #ddd;background: #fbfbfb;padding: 18px;}
.bbs_form .view_tit .title{font-size: 16px;font-weight: bold;color:#000;}
.bbs_form .view_contents{padding: 18px;border-bottom: 1px solid #ddd;margin-bottom: 10px;}
.bbs_form .view_contents label{margin-right: 20px;}
.bbs_form .view_contents .input_wrap{margin-bottom: 10px;}
/* // bbs_form */
```
  
HTML
=====

```html
<div id="wrap">
    <!-- 게시판 list -->
    <h1>게시판 list</h1>
    <div class="bbs_list">
        <!-- 검색부분 -->
        <div class="search_box">
            <select class="form_control" name="">
              <option value="">전체글</option>
              <option value="">제목</option>
              <option value="">내용</option>
              <option value="">작성자</option>
            </select>
            <input type="text" name="" value="" class="form_control">
            <button type="button" name="button" class="btn_control">검색</button>
        </div>
        <!-- // 검색부분 -->

        <!-- 리스트부분 -->
        <table>
            <colgroup>
                <col style="width:10%;">
                <col style="width:60%;">
                <col style="width:10%;">
                <col style="width:10%;">
                <col style="width:10%;">
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>이름</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <tr class="notice">
                    <td>공지</td>
                    <td>네이버 지식IN을 통해 재능 기부</td>
                    <td>관리자</td>
                    <td>17-06-22</td>
                    <td>381</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>네이버 지식IN을 통해 재능 기부</td>
                    <td>관리자</td>
                    <td>17-06-22</td>
                    <td>381</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>네이버 지식IN을 통해 재능 기부</td>
                    <td>관리자</td>
                    <td>17-06-22</td>
                    <td>381</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>네이버 지식IN을 통해 재능 기부</td>
                    <td>관리자</td>
                    <td>17-06-22</td>
                    <td>381</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>네이버 지식IN을 통해 재능 기부</td>
                    <td>관리자</td>
                    <td>17-06-22</td>
                    <td>381</td>
                </tr>
            </tbody>
        </table>
        <!-- // 리스트부분 -->
        <div class="btn_wrap">
            <button class="btn_control">글쓰기</button>
        </div>
        <div class="paging_wrap">
            <a href="javascript:void(0);" class="btn_control active">1</a>
            <a href="javascript:void(0);" class="btn_control">2</a>
            <a href="javascript:void(0);" class="btn_control">3</a>
            <a href="javascript:void(0);" class="btn_control">4</a>
        </div>
    </div>
    <!-- // 게시판 list -->

    <!-- 게시판 view -->
    <h1>게시판 view</h1>

    <div class="bbs_view">
        <div class="view_tit">
            <p class="title">네이버 지식IN을 통해 재능 기부</p>
            <p class="other"><span>홍길동</span><span>날짜 : 17-06-22</span><span>조회수 : 381</span></p>
        </div>
        <div class="view_contents">
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box;
            word-break:break-all;
            -webkit-text-size-adjust:none;
            }
            html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video
            {margin:0;padding:0;border:0;font-size: 100%;vertical-align: baseline;}
            html,body{width:100%;min-height:100%;}
            body{font-size:12px;line-height:1;font-family:'맑은 고딕','dotum',sans-serif;color:#666;letter-spacing: -0.5px;}
            nav,ol,ul,li{list-style:none;}
            label,input,button,select,img{vertical-align:middle}
            input,button{margin:0;padding:0;font-family:'맑은 고딕','dotum',sans-serif;font-size:1rem;}
            button{cursor:pointer;}
            img,input,select,textarea,button{vertical-align:middle;}
            textarea,select{font-family:'맑은 고딕','dotum',sans-serif;font-size:1rem;}
            select{margin:0;background-color:#fff;}
            h1,h2,h3,h4,h5,h6,b,strong{font-weight:700;}
            address,cite,em,i{font-style:normal;}
            a:link,a:visited{color:#666;text-decoration:none}
            a:hover,a:focus,a:active{color:#3399cc;background-color:transparent;}
            table{width:100%;border-collapse:collapse;border-spacing:0}
            caption,legend{position:absolute;top:0;left:0;width:1px;height:1px;font-size:1px;text-indent:-20000px;}
        </div>
    </div>
    <!-- // 게시판 view -->

    <!-- 게시판 write_form -->
    <h1>게시판 write_form</h1>

    <div class="bbs_form">
        <div class="view_tit">
            <p class="title">글쓰기</p>
        </div>
        <form action="">
            <fieldset>
            <legend>글쓰기</legend>
            <div class="view_contents">
                <div class="input_wrap">
                    <label for="subject">제목</label>
                    <input type="text" class="form_control" id="subject">
                </div>
                <div class="input_wrap">
                    <label for="name">이름</label>
                    <input type="text" class="form_control" id="name">
                </div>
            </div>
            <div class="btn_wrap">
                <button class="btn_control">글쓰기</button>
            </div>
        </fieldset>
    </form>
    </div>
    <!-- // 게시판 write_form -->
</div>
```

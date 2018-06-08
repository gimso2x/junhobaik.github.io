<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>jquery_mobole_gnb_pop</title>
    <link rel="stylesheet" href="https://gimso2x.github.io/wiki/postdata/reset.css">
    <style>
        .dim-layer { display: none; position: fixed; _position: absolute; top: 0; right: 0; width: 100%; height: 100%; z-index: 9998; }
        .dim-layer .dimBg { position: absolute; top: 0; right: 0; width: 100%; height: 100%; background: #000; opacity: .5; filter: alpha(opacity=50); }
        .dim-layer .pop_menu {
            display: block;
            position: absolute;
            top: 0;
            right: -320px;
            width: 320px;
            height: 100%;
            z-index: 9001;
            opacity: 0;
            background: #eaecee;
        }
        .close{float: right;}
    </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript">
        $(function() {
            // menu open
            //모바일gnb메뉴
            $('.menu_a').on('click',function() {
                $('.dim-layer').css('display', 'block');
                $('.pop_menu').animate({
                    opacity: '1',
                    right: '0'
                }, 200, "linear");
                // if (winSize < 768){
                //     $('body').css({overflow:'hidden'});
                // }

            })
            $('.dimBg, .close').on('click', function() {
                $('.dim-layer').css('display', 'none');
                $('.pop_menu').css({
                    opacity: '0',
                    right: '-320px'
                });
                // if (winSize < 768){
                //     $('body').css({overflow:'visible'});
                // }
            })
        }); // end ready
    </script>
</head>

<body>
    <div class="wrap">
        <div class="mobile_header_menu">
            <a href="javascript:void(0);" class="menu_a">
                메뉴열기버튼
            </a>
            <div class="dim-layer">
                <div class="dimBg"></div>
                <div class="pop_menu">
                    <div class="pop_menu_header">
                        전체메뉴
                        <a href="javascript:void(0);" class="close">닫기버튼</a>
                    </div>
                    <div class="pop_menu_content">
                        XX님 반갑습니다
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

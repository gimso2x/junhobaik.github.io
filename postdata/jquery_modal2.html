<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>jquery_modal</title>
    <link rel="stylesheet" href="http://camel.dothome.co.kr/source/css/reset.css">
    <style>
        .dim_layerpop {
            display: none;
            position: fixed;
            _position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
        }

        .dim_layerpop .dimBg_layerpop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: .5;
            filter: alpha(opacity=50);
        }

        .pop-layer {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 350px;
            height: auto;
            background-color: #fff;
            border: 1px solid #3a3f4c;
            z-index: 10;
        }
    </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            // 레이어 팝업 - 클릭할 클래스
            $('.pop_button').popLayer();

        }); // end ready

        // 레이어팝업 플러그인
        (function ($) {
            function PopLayer(selector) {
                this.init(selector);
                this.openEvent();
            }

            PopLayer.prototype.init = function (selector) {
                // 레이어 뒤 스크롤 방지
                $('body').css({
                    overflow: 'hidden'
                });
                //컨텐츠 정의
                $el = $(selector).attr('href');

                
            };

            PopLayer.prototype.openEvent = function () {
                var objThis = this;

                // 백그라운드 fadeIn
                $('.dim_layerpop').fadeIn();
                // 컨텐츠 fadeIn
                $($el).fadeIn();

				// 화면 너비 높이, 컨텐츠 너비 높이
                $elWidth = $($el).outerWidth();
                $elHeight = $($el).outerHeight();
                docWidth = $(document).width();
                docHeight = $(document).height();

                // 화면의 중앙에 레이어를 띄운다.
                if ($elHeight < docHeight || $elWidth < docWidth) {
                    $($el).css({
                        marginTop: -$elHeight / 2,
                        marginLeft: -$elWidth / 2
                    });
                } else {
                    $($el).css({
                        top: 0,
                        left: 0
                    });
                }

                $($el).find('.btn_close').click(function () {
                    objThis.closeEvent();
                });

                $('.dim_layerpop>.dimBg_layerpop').click(function () {
                    objThis.closeEvent();
                });
            };

            PopLayer.prototype.closeEvent = function () {
                $('.dim_layerpop').fadeOut();
                $($el).fadeOut();
                $('body').css({
                    overflow: 'visible'
                });
                return false;
            };

            $.fn.popLayer = function () {

                this.click(function () {
                    new PopLayer(this);
                });

            };
            // //레이어팝업 플러그인
        })(jQuery);
    </script>
</head>

<body>
    <div class="wrap">
        <a href="#layer" class="pop_button">팝업레이어</a>
        <a href="#layer2" class="pop_button">팝업레이어2</a>
        <a href="#layer3" class="pop_button">팝업레이어3</a>
    </div>

    <!-- 레이어 팝업-->
    <div class="dim_layerpop">
        <div class="dimBg_layerpop"></div>
        <div id="layer" class="pop-layer">
            <div class="pop-container">
                <a href="#n" class="btn_close">닫기</a>
                <div class="pop-header">
                    레이어1 헤더
                </div>
                <div class="pop-conts">
                    레이어1 내용
                </div>
            </div>
        </div>

        <div id="layer2" class="pop-layer">
            <div class="pop-container">
                <a href="#n" class="btn_close">닫기</a>
                <div class="pop-header">
                    레이어2 헤더
                </div>
                <div class="pop-conts">
                    레이어2 내용
                </div>
            </div>
        </div>

        <div id="layer3" class="pop-layer">
            <div class="pop-container">
                <a href="#n" class="btn_close">닫기</a>
                <div class="pop-header">
                    레이어3 헤더
                </div>
                <div class="pop-conts">
                    레이어3 내용
                </div>
            </div>
        </div>
    </div>
    <!--// 레이어 팝업-->
</body>

</html>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
	<link rel="stylesheet" href="https://gimso2x.github.io/wiki/postdata/reset.css">
    <style>
		#wrap{padding:20px;}
		h1{font-size:18px;margin-bottom:20px;}
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript">
        $(function(){
			//input text 숫자만 입력받기
			$('input[type="text"]').on('keyup change',function() {
				$(this).val( $(this).val().replace(/[^0-9]/g,"") );
			});


			//라디오박스 value 합			
			$('button').on('click',function(){
				var radio_sum = 0;

				$('input[type="radio"]:checked').each(function() {
				radio_sum += parseInt($(this).val());
				// console.log("radio_sum : " + radio_sum);
				});

				$('.radioSum').text(radio_sum);
			});


        })
    </script>
</head>
<body>
    <div id="wrap">
		<h1>input text 숫자만 입력받기</h1>
		<input type="text" />



		<br/><br/>
		<hr />



		<h1>라디오박스 value 합</h1>
		<ul>
			<li>
				3<input type="radio" name="radio1" value="3" />
				2<input type="radio" name="radio1" value="2"/>
				1<input type="radio" name="radio1" value="1"/>
			</li>
			<li>
				3<input type="radio" name="radio2" value="3"/>
				2<input type="radio" name="radio2" value="2"/>
				1<input type="radio" name="radio2" value="1"/>
			</li>
		</ul>
		<button>값 합계</button>
		<div>radio 값 : <span class="radioSum"></span></div>
    </div>
</body>
</html>

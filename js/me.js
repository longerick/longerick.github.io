$(function(){
	$.ajax({
		type:'POST',
		url:'http://localhost/resume/json/img.json',
		dataType:'json',
		beforeSend:function(XMLHttpRequest){
			/*$('<img src="images/load.gif" />').appendTo('.me_pic ul li');*/
			$('.me_load').html('<img src="images/load.gif" />');
		},
		success:function(data){
			$('.me_load').empty();
			$(data).each(function(index){
				var str='<li><div><img src="'+data[index].src+'"/></div><p>'+data[index].tit+'</p></li>';
				$('.me_pic ul').append(str);
			})
		},
		complete:function(){
			$('.me_pic ul li:gt(7)').hide();
			var total_img=$('.me_pic ul li').length;
			console.log(total_img);
			var current_num=8;
			var current_page=1;
			var total_page=Math.round(total_img/current_num);
			$('.all').text(total_page);
			$('.now_page').text(current_page);
			$('.next').click(function(){
				if(current_page==total_page){
					return false;
				}
				else{
					$('.now_page').html(++current_page);
					$('.me_pic ul li').each(function(index){
						var begin=current_num*(current_page-1);
						var end=current_num*current_page;
						if(index>=begin && index<end){
							$(this).show();
						}
						else{
							$(this).hide();
						}
					})
				}
			})

			$('.prev').click(function(){
				if(current_page==1){
					return false;
				}
				else{
					$('.now_page').html(--current_page);
					$('.me_pic ul li').each(function(index){
						var begin=current_num*(current_page-1);
						var end=current_num*current_page;
						if(index>=begin && index<end){
							$(this).show();
						}
						else{
							$(this).hide();
						}
					})
				}
			})
		}
	})
	
})


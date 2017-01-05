$(function(){
	$.ajax({
		type:'GET',
		url:'http://localhost/resume/img.json',
		dataType:'json',
		success:function(data){
			$(data).each(function(index){
				console.log(data[index].src);
				var str='<li><div><img src="'+data[index].src+'"/></div><p>'+data[index].tit+'</p></li>';
				$('.me_pic ul').append(str);

			})
		}
	})
	$('.me_pic ul li:gt(8)').hide();
})


	


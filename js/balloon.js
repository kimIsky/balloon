$(".main_logo").on("click", function(){
	let i = 1;
	while( i < 15 ){
		$(".balloon_"+i ).css("top", Math.floor((Math.random()*60)+20)+"%").css("left", Math.floor((Math.random()*60)+5)+"%");	
		i++;
	}
	$(".main_logo").hide();
	$(".main_box div").css("display", "block");
});

let idx = 0;
$(".balloon_1, .balloon_3, .balloon_5, .balloon_7, .balloon_9, .balloon_11, .balloon_13").one("click", function(e){
	$(e.target).children().css("visibility", "visible");
	$(e.target).css("top", "-100%").css("transition", "2s");
	const change_title =  $(e.target).children().html();
	let i = 1;
	while( i < 8 ){
		if( $("header p:nth-child("+i+")").html() == change_title){
			$("header p:nth-child("+i+")").css("background-color", "black").css("color", "yellow");
		}
		i++;
	}	
	idx++;
	idx == 7 && $(".input_box").css("visibility", "visible");									
});

$(".balloon_2, .balloon_4, .balloon_6, .balloon_8, .balloon_10, .balloon_12, .balloon_14").on("click", function(e){
	$(e.target).css("visibility", "hidden");
});	


$("#return_bt").on("click", function(){
	location.reload();
});
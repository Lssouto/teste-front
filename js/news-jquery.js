$(document).ready(function(){
	$(".content-oc").hide();
});

$(".item-1").mouseenter(function(){
	$(".content-1").hide();
	$(".content-oc-1").show();
});
$(".item-1").mouseleave(function(){
	$(".content-oc-1").hide();
	$(".content-1").show();
});

$(".item-2").mouseenter(function(){
	$(".content-2").hide();
	$(".content-oc-2").show();
});
$(".item-2").mouseleave(function(){
	$(".content-oc-2").hide();
	$(".content-2").show();
});

$(".item-3").mouseenter(function(){
	$(".content-3").hide();
	$(".content-oc-3").show();
});
$(".item-3").mouseleave(function(){
	$(".content-oc-3").hide();
	$(".content-3").show();
});


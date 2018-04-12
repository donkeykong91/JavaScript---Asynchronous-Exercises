function fromEvent(el, eventType) {
	return ASQ.react(function(proceed) {
		$(el).bind(eventType, proceed);
	});
}

$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list");

	// $btn.click(function(evt){
	// 	// TODO
	// });

	let rsq = fromEvent($btn, "click");

	// TODO: setup sampled sequence, populate $list
	rsq.val(function(evt) {
		console.log("Hello");
	}).val(function(){
		sleep(500);
	});
});

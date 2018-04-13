$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list");

	$btn.click(
		ASQ.csp.putAsync(ch, evt);
	);

	ASQ().runner(
		ASQ.csp.go(function*() {
				yield ASQ.csp.take(ch);
				yield ASQ.csp.timeout(500);
				$list.append($("<div>" + msg + "</div>"));
			}
		);
	);
});

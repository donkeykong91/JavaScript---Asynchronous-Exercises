function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	// what do we do here?
	return Promise(
		executor function(resolve) {
			fakeAjax(file, resolve);
	});
}

// request an array of files at once in "parallel"
// ???

var getFile1 = getFile(file);
var getFile2 = getFile(file);
var getFile3 = getFile(file);

ASQ()
.getFile1()
.val(output)
.seq(function() {
	return getFile2;
})
.val(output)
.seq(function() {
	return getFile3;
})
.val(output)
.val(function() {
	output("Complete1");
});

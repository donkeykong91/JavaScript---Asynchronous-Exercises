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
	// return a promise
	return new Promise(
		function executor(reslove) {
			fakeAjax(file, resolve);
	});
}

var getFile1 = getFile("file1");
var getFile2 = getFile("file2");
var getFile3 = getFile("file3");

getFile1()
.then(output)
.then(function() {
	return getFile2();
})
.then(output)
.then(function() {
	return getFile3();
})
.then(output)
.then(function() {
	output("Complete!");
});
// request all files at once in "parallel"
// ???

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
	let text;
	fakeAjax(file, function() {
		text = file;
	});
	// return a promise
	return new Promise(
		function(reslove, reject) {
			if (text) resolve(text);
			else error();
	});
}

function finish() {
	output(arguments[0]);
	output("Complete!");
}

function error() {
	output("Something when wrong!");
}

var getFile1 = getFile("file1");
var getFile2 = getFile("file2");
var getFile3 = getFile("file3");

getFile1()
.then(function(text) {
	output(text);
	return getFile2();
})
.then(function(text) {
	output(text);
	return getFile3();
})
.then(
	finish,
	error
);
// request all files at once in "parallel"
// ???

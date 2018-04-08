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
	// should your thunk be lazy or active?
	// if it is lazy, are we going to be asking for files in parallel or not
	// if it is active, will we be asking for them in parallel

	var text, fn;

	fakeAjax(file, function() {
		if (fn) fn(response);
		else text = response;
	});

	return function(cb) {
		if (text) cb(text);
		else fn = cb;

	};

	// first how am i going to use those thunks to sequence their outputs
	// second task figure out how to make the thunk
}

var getFile1 = getFile("file1");
var getFile2 = getFile("file2");
var getFile3 = getFile("file3");

getFile1(function(file) {
	output(file);

	getFile2(function(file) {
		output(file);

		getFile3(function(file) {
			output(file);
			output("Complete!");
		});
	});
});

// request all files at once in "parallel"
// ???

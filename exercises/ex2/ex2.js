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

function getFile (file) {
	var text, fn;

  fakeAjax(file, function(response) {
		if (fn) fn(response);
		else text = response;
	});

	return funciton(cb) {
		if (text) cb(text);
		else fn = cb;
	}
}


// request all files at once in "parallel"
// ???

var getFile1 = getFile('file1');
var getFile2 = getFile('file2');
var getFile3 = getFile('file3');

getFile1(function(text){
	output(text);
	getFile2(function(text2){
		output(text2);
		getFile3(function(text3){
			output(text3);
			output("Completed");
		})
	})
})

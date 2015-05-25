var jsdom = require("jsdom");

console.log('fetching...');

function parsePrice($) {
	return $("#priceblock_ourprice").text();
}

function parseTitle($) {
	return $('h1#title').text().trim();
}

jsdom.env({
	url: "http://www.amazon.co.uk/AKG-High-Performance-Foldable-Headset-In-Line/dp/B005LBQ7BY",
	scripts: ["http://code.jquery.com/jquery.js"],
	done: function(errors, window) {
		var $ = window.$;
		console.log(parseTitle($));
		console.log(parsePrice($));
	}
});

jsdom.env({
	url: "http://www.amazon.co.uk/product-reviews/B005LBQ7BY",
	scripts: ["http://code.jquery.com/jquery.js"],
	done: function(errors, window) {
		var $ = window.$;
		$('div.reviewText').each(function() {
			console.log($(this).text().trim());
		});
	}
});
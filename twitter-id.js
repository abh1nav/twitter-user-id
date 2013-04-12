$(document).ready(function() {
	var i, tweet, user_id, all_tweets, a_tag, tweets, update;
	update = function() {
		all_tweets = $("div.stream-item-header");
		tweets = _.filter(all_tweets, function(tw) {
			if(typeof $(tw).attr("tweet-id-loaded") === 'undefined') {
				return tw;
			}
		});

		for(i = 0; i < tweets.length; i++) {
			tweet = tweets[i];
			a_tag = $(tweet).children()[0];
			user_id = $(a_tag).attr("data-user-id");
			$(tweet).append('<div><small class="time"><br><br><span>User ID:</span><br><span class="tweet-id-user-id">' + user_id + '</span></small></div>');
			$(tweet).attr("tweet-id-loaded", "true");
		}

		setTimeout(update, 5000);
	};

	update();
});
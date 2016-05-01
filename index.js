var killFeeds = function () {
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');

    feed.children().remove();
    $('.cardRightCol').remove();
}

window.setInterval(killFeeds, 100);
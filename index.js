var killFeeds = function () {

  /* Facebook Feed */
  var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
  feed.children().remove();
  $('.cardRightCol').remove();

  /* Youtube Feed */
  $('#feed').remove();
  $('.appbar-nav-menu').remove();
  $('#guide-container').remove();
  $('#autoplay-checkbox').attr('checked', false);
  $('#watch7-sidebar-contents').remove();
}

window.setInterval(killFeeds, 100);
var killFeeds = function () {
  /* Youtube Feed */
  if (window.location.pathname === "/") {
    $("#page-manager").remove();
    $("#home-container-media").remove();
    $("#guide-content").remove();
  }
  $("#related").remove();
  /* Hide Explore Feed */
  $(".ytd-page-manager[page-subtype='explore']").remove();
  $(".ytd-page-manager[page-subtype='subscriptions']").remove();
  $(".ytd-mini-guide-renderer[aria-label='Explore']").remove();
  $(".ytd-mini-guide-renderer[aria-label='Shorts']").remove();
  $(".ytd-guide-entry-renderer[title='Explore']").remove();
  $(".ytd-guide-entry-renderer[title='Shorts']").remove();

  /* HN Feed */
  $(".itemlist").remove();

  /* Reddit Feed */
  $("#2x-container").remove();
};

window.setInterval(killFeeds, 200);

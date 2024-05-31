var killFeeds = function () {
  /* Youtube Feed */

  // if current url contains reddit.com then redirect to google.com
  if (window.location.href.indexOf("reddit.com") > -1) {
    window.location.href = "https://google.com";
  }

  if (window.location.pathname === "/") {
    var pageManager = document.getElementById("page-manager");
    if (pageManager) pageManager.remove();

    var homeContainerMedia = document.getElementById("home-container-media");
    if (homeContainerMedia) homeContainerMedia.remove();

    var guideContent = document.getElementById("guide-content");
    if (guideContent) guideContent.remove();
  }

  var related = document.getElementById("related");
  if (related) related.remove();

  /* Hide Explore Feed */
  var exploreFeeds = document.querySelectorAll(
    ".ytd-page-manager[page-subtype='explore'], .ytd-page-manager[page-subtype='subscriptions'], .ytd-mini-guide-renderer[aria-label='Explore'], .ytd-mini-guide-renderer[aria-label='Shorts'], .ytd-guide-entry-renderer[title='Explore'], .ytd-guide-entry-renderer[title='Shorts']"
  );
  exploreFeeds.forEach(function (element) {
    element.remove();
  });
};

window.setInterval(killFeeds, 150);

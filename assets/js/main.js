var pageName;

$(window).on("load", function () {
  // Get the page name for displaying correct images.
  pageName = getPageFromURI(document.documentURI);
});
setInterval(function () {
  var screenWidth = $(document).width();
  var element = document.getElementById('responsive-image');

  // Screen with is 980px or greater.
  if (screenWidth >= 980) {
    if (element.style.content !== 'url("assets/images/980-' + pageName + '.jpg")') {
      element.style.content = 'url("assets/images/980-' + pageName + '.jpg")';
    }
    return true;
  }

  // Screen width is between 768px and 979px.
  if (screenWidth >= 768 && screenWidth <= 979) {
    if (element.style.content !== 'url("assets/images/768-' + pageName + '.jpg")') {
      element.style.content = 'url("assets/images/768-' + pageName + '.jpg")';
    }
    return true;
  }

  // Screen width is 640px or less.
  if (screenWidth <= 640) {
    if (element.style.content !== 'url("assets/images/640-' + pageName + '.jpg")') {
      element.style.content = 'url("assets/images/640-' + pageName + '.jpg")';
    }
    return true;
  }

  return false;
}, 250);
// Get the name of the page from the uri.
function getPageFromURI(uri) {
  var splitURI = uri.split('/');
  var pageName = splitURI[splitURI.length - 1].replace('.html', '');

  if (!pageName) {
    pageName = "index";
  }

  return pageName;
}

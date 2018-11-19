// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      
      // What should happen?
      var imageAddress = document.querySelector('.photo-show__img').src;
      
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": imageAddress});
    }
  }
);
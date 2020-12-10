chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.executeScript({
    file: "let-me-read.js",
  });
  chrome.tabs.insertCSS({
    file: "let-me-read.css",
  });
});

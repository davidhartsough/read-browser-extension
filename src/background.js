chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["let-me-read.js"],
    });
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["let-me-read.css"],
    });
  }
});

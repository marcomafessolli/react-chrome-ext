export const executeScript = async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  if (!tab?.id) {
    return;
  }

  await chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    files: [
      "vendor/react.development.js",
      "vendor/react-dom.development.js",
      "root.mjs",
    ],
  });

  await chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    func: () => {
      // @ts-ignore
      window.initContent();
    },
  });
};

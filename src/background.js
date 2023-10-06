// Distributed under the MIT License
// Copyright (c) 2023 Nikita Voronchev <n.voronchev@gmail.com>

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.storage.local.get(["jiraUrl"]).then((result) => {
        if (tab && tab.url && result.jiraUrl && tab.url.startsWith(result.jiraUrl))
        {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
            });
        }
    });
});

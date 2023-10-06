// Distributed under the MIT License
// Copyright (c) 2023 Nikita Voronchev <n.voronchev@gmail.com>

const saveOptions = () => {
    jiraUrl = document.getElementById("jira-url");
    if (jiraUrl) {
        chrome.storage.local.set({ "jiraUrl": jiraUrl.value });
    }
};

const restoreOptions = () => {
    chrome.storage.local.get(["jiraUrl"]).then((result) => {
        document.getElementById("jira-url").value = result.jiraUrl;
    });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
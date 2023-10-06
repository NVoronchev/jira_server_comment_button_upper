// Distributed under the MIT License
// Copyright (c) 2023 Nikita Voronchev <n.voronchev@gmail.com>

addCommentCtrl = document.querySelector("#addcomment");
activityModuleCtrl = document.querySelector("#activitymodule");
if (addCommentCtrl && activityModuleCtrl) {
    addCommentCtrl.parentNode.insertBefore(addCommentCtrl, activityModuleCtrl);
}

try {
    // ".issue-container #issue-comment-add"
    issueCommentAddCssRule = [...document.styleSheets]
        .flatMap(s => [...s.cssRules])
        .find(i => String(i.selectorText).includes('#issue-comment-add'));
} catch (error) {
    issueCommentAddCssRule = null;
}
if (issueCommentAddCssRule) {
    issueCommentAddCssRule.style.paddingBottom = 0;
}

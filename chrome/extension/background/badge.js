chrome.browserAction.onClicked.addListener(function (tabA) { handleIconClick() });
// when clicked on browser action

const handleIconClick = () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("window.html") });
  // let distRules = getFromStorage('distRules')
  // distRules.forEach(rule => {
  //   processRule(rule)
  // })
  // // open https://www.youtube.com/playlist?list=WL
}

chrome.storage.local.get('todos', (obj) => {
  let todos = obj.todos;
  if (todos) {
    todos = JSON.parse(todos);
    const len = todos.filter(todo => !todo.marked).length;
    if (len > 0) {
      chrome.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '1' });
  }
});

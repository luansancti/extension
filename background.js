console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        txt: "hello"
    }
    console.log("button clicked!!");

    chrome.tabs.sendMessage(tab.id, msg)
}


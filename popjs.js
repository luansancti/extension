document.addEventListener('DOMContentLoaded', () => {
    botao = document.getElementById('btn')

    botao.addEventListener('click', () => { mostraHello() })
})
var a = {
    txt: "hello"
}



function mostraHello() {
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs)

    function gotTabs(tabs) {
        let msg = {
            txt: "hello"
        }
        chrome.tabs.sendMessage(tabs[0].id, msg)

    }
}


console.log("Ai meu cu")

$('#btn').click(function () {
    console.log("clicados")
})



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === "hello") {
        console.log("mensagem enviada")
        /*
        for (para of body) {
            para.style["background-color"] = '#FF00FF';
        }
        */
        divtext = document.getElementsByClassName('qtext');
        p = document.querySelector('.qtext p').textContent;
        window.open('http://google.com/search?q='+p);


    }
    //    console.log(message.txt)

}

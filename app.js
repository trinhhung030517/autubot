const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("Speech Recognition Started!")
}

recognition.onresult = function (event) {
    console.log(event);

    const spokenwords = event.results[0][0].transcript;

    console.log("spoken words are", spokenwords);
    computerSpeech(spokenwords);
}

function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "Vietnamese";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;

    determineWords(speech,words);

    window.speechSynthesis.speak(speech);
}

function determineWords(speech,words) {
    if(words.includes("bạn có khỏe không")){
        speech.text = 'tôi khỏe, cảm ơn!';
    }

    if(words.includes("tôi là ai")){
        speech.text = 'bạn là chủ nhân của tôi!';
    }

    if(words.includes("có đúng tôi là chủ nhân không")){
        speech.text = 'bạn là chủ nhân của tôi!';
    }

    if(words.includes("mở facebook")){
        speech.text = 'facebook của bạn sẽ được mở ngay đây!';
        window.open("https://www.facebook.com/");
    }

    if(words.includes("mở google")){
        speech.text = 'google của bạn sẽ được mở ngay đây!';
        window.open("https://www.google.com/");
    }

    if(words.includes("mở youtobe")){
        speech.text = 'youtobe của bạn sẽ được mở ngay đây!';
        window.open("https://www.youtube.com/");
    }
}

button.addEventListener("click", ()=> {
    recognition.start();
})
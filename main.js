
document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input");

    let botDiv = document.getElementById("bot");
    var msg="Heyyy!! Welcome to our amazing website. How we may help you?";

    botDiv.innerHTML="Bot: " + msg;
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
            talk();
            inputField.value='';
    }
  });
});



function talk(){
    var know={
        "Hi":   "Hello ....I'm Bot",
        "hi":  "Hello....I'm Bot",
        "What's your task":  "I will guide you along our food menu",
        "What services do you provide":  "I will guide you along our food menu",
        "What's the menu":  "Which one would you like to select from Burger,Pizza,Desserts and Shakes",
        "Burger":  "Aloo tikki,Paneer,Cheese,Spicy paneer,Paneer corn and Black Bean Burgers",
        "Pizza":  "Margherita,Peppy Paneer,Mexican Green wave,Deluxe veggie,cheese n corn,veggy paradise",
        "Dessert":  "Coffee truffle,Chocolate mousse,Apple pie,Lemon tart,Choco brownie,Oreo cake",
        "Shakes":  "Chocohip,Strawberry,Mango smoothie,Vanilla malt,Sharjah,Oreo Shakes",
        "Cheese and corn pizza price":  "Rs.150",
        "Margherita price":  "Rs.110",
        "Peppy Paneer pizza price":  "Rs.100",
        "Mexican Green wave pizza price":  "Rs.210",
        "Deluxe veggie pizza price":  "Rs.110",
        "Veggy paradise pizza price":  "Rs.230",
        "Aloo tikki burger price":  "Rs.210",
        "Paneer burger price":  "Rs.110",
        "Cheese burger price":  "Rs.180",
        "Spicy paneer burger price":  "Rs.130",
        "Black bean burger price":  "Rs.210",
        "Paneer corn burger price":  "Rs.210",
        "Coffee truffle price":  "Rs.110",
        "Chocolate Mousse price":  "Rs.130",
        "Apple pie price":  "Rs.150",
        "Lemon tart price":  "Rs.180",
        "Chocolate brownie price":  "Rs.130",
        "Oreo cake price":  "Rs.250",
        "Chocochip shake price":  "Rs.210",
        "Strawberry shake price":  "Rs.230",
        "Mango smoothie price":  "Rs.200",
        "Vanilla malt shake price":  "Rs.115",
        "Sharjah shake price":  "Rs.210",
        "Oreo shake price":  "Rs.210",
    };


    var alternatives=["Sorry","Try Again"];

    var user=document.getElementById('input').value;
    document.getElementById('user').innerHTML="You: "+user+"<br>";
    if(user in know)
    {
        document.getElementById('bot').innerHTML="Bot: "+know[user]+"<br>";
        speak(know[user]);
    }

    else
    {
        var product=alternatives[Math.floor(Math.random() * alternatives.length)];
        document.getElementById('bot').innerHTML="Bot: " + product;
        speak(product);
    }
};

/**function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  const userDiv = document.getElementById("user");
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.getElementById("bot");
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);
}**/

const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 0.8;
  u.pitch = 1; //0-2 interval
  synth.speak(u);
  debugger
}

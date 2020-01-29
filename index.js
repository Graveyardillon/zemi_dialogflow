const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Exam Intent', (conv, params) => {
	let speak = "たいおうしていません。";
  	
  	switch(params.Ryou-Entity) {
      case "寮生活":
        
    }
});
// GOAL: stampare a schermo il contenuto di
// una variabile dentro un h1
// BONUS: utilizzare un data come nome del file
// immagine in un tag img
function initVue() {
  new Vue({
    el: '#app',
    data: {
      // 'given_name': '',
      // 'lastname': '',
      // 'bgClasses': 'bg-green',
      // 'counter': 0,
      "text": "Esempio testo nell'h1"
    },
    methods: {
      // fullName: function() {
      //   //todo
      //   //...
      //   return this.given_name + ' ' + this.lastname;
      // },
      // printMore: function() {
      //   this.counter+=1;
      // },
      // printLess: function() {
      //   this.counter-=1;
      // }
    }
  });
}

function initJQuery() {
  const initText = 'Hello World!!';
  $('#input-msg').val(initText);
  $('#text-msg').text(initText);
  $('#input-msg').keyup(function() {
    const input = $(this);
    const text = input.val();
    $('#input-msg').text(text);
  });
}

function init() {
  initVue();
  // initJQuery();
}
$(init);

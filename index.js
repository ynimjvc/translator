const NEW = 'new';
const OLD = 'old';

const dictionary = [
  ['No fucking way', 'I\'m not certain that\'s feasable'],
  ['You\'ve gotta be shitting me', 'Really?'],
  ['Tell someone who gives a fuck', 'Perhaps you should check with person in charge'],
  ['It\'s not my fucking problem', 'I wasn\'t involved with the project'],
  ['What the fuck', 'Interesting behavior'],
  ['Fuck it, it won\'t work', 'I\'m not certain we can implement this'],
  ['Why the fuck didn\'t you tell me sooner', 'I\'ll try to schedule that'],
  ['When the fuck do they expect me to do this', 'Perhaps I can work late'],
  ['Who the fuck cares', 'Are you sure this is a problem'],
  ['He\'s got his head up his ass', 'He\'s not familiar with the process'],
  ['Eat shit and die, mother-fucker', 'Excuse me, sir'],
  ['Eat shit and die', 'Excuse me'],
  ['Eat shit', 'You don\'t say'],
  ['What the fuck do they want from me', 'They weren\'t happy with it'],
  ['Kiss my ass', 'So you\'d like my help with it'],
  ['Fuck it, I\'m on salary', 'I\'m a bit overloaded at the moment'],
  ['Shove it up your ass', 'I don\'t think you understand'],
  ['This job sucks', 'I love the challenge'],
  ['Who the hell died and made you boss', 'Would you want me to take care of this'],
  ['Blow me', 'I see'],
  ['Blow yourself', 'Do you see'],
  ['Another fucking meeting', 'Yes, we should discuss this'],
  ['I really don\'t give a shit', 'I don\'t think it will be a problem'],
  ['He\'s a fucking retard', 'He\'s a bit confused'],
  ['I fucking told you so', 'I mentioned this once before'],
];

const sourceElement = document.getElementById('source');
const targetElement = document.getElementById('target');
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

let mode = [OLD, NEW];

function updateMode() {
  sourceElement.innerText = mode[0];
  targetElement.innerText = mode[1];
}

function switchMode() {
  mode = mode.reverse();
  updateMode();
}

function translate() {
  const input = inputElement.value;

  const source = (mode[0] === OLD) ? 0 : 1;
  const target = (source === 0) ? 1 : 0;

  outputElement.value = dictionary.reduce((result, phrase) => {
    const regexp = new RegExp(phrase[source], 'gi');
    result = result.replace(regexp, phrase[target]);

    return result;
  }, input);
}

// init
updateMode();
document.getElementById('switch').onclick = switchMode;
document.getElementById('translate').onclick = translate;
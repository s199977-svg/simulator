let round = null;
let timerId = null;
let nextQuestionId = null;

function createQuestions() {
  const questions = [];
  for (let first = 2; first <= 9; first += 1) {
    for (let second = 2; second <= 9; second += 1) questions.push({ first, second, answer: first * second });
  }
  for (let index = questions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [questions[index], questions[swapIndex]] = [questions[swapIndex], questions[index]];
  }
  return questions;
}

function showSetup() {
  clearInterval(timerId);
  clearTimeout(nextQuestionId);
  timerId = null;
  nextQuestionId = null;
  round = null;
  document.querySelector('#setup-screen').classList.remove('hidden');
  document.querySelector('#play-screen').classList.add('hidden');
  document.querySelector('#result-screen').classList.add('hidden');
}

function renderQuestion() {
  if (!round || !round.active) return;
  if (round.answered >= round.total) {
    finishRound('count');
    return;
  }
  const question = round.questions[round.answered];
  document.querySelector('#question-count').textContent = `문제 ${round.answered + 1} / ${round.total}`;
  document.querySelector('#factor-one').textContent = question.first;
  document.querySelector('#factor-two').textContent = question.second;
  document.querySelector('#answer-input').value = '';
  document.querySelector('#answer-input').disabled = false;
  document.querySelector('#submit-answer').disabled = false;
  document.querySelector('#feedback').textContent = '';
  document.querySelector('#answer-input').focus();
}

function updateTimer() {
  if (!round || !round.active) return;
  const remaining = Math.max(0, round.deadline - performance.now());
  const timer = document.querySelector('#timer-value');
  timer.textContent = (remaining / 1000).toFixed(1);
  timer.closest('.timer').classList.toggle('urgent', remaining <= 8000);
  if (remaining === 0) finishRound('time');
}

function finishRound(reason) {
  if (!round || !round.active) return;
  round.active = false;
  clearInterval(timerId);
  clearTimeout(nextQuestionId);
  timerId = null;
  nextQuestionId = null;
  document.querySelector('#play-screen').classList.add('hidden');
  document.querySelector('#result-screen').classList.remove('hidden');
  document.querySelector('#result-title').textContent = reason === 'count' ? '선택한 문항을 모두 풀었어요!' : '30초 도전이 끝났어요!';
  document.querySelector('#result-message').textContent = reason === 'count'
    ? '정해 둔 문항을 시간 안에 모두 풀었어요. 훌륭해요!'
    : '다음 도전에서는 몇 문제를 더 맞힐 수 있을까요?';
  document.querySelector('#result-correct').textContent = round.correct;
  document.querySelector('#result-answered').textContent = round.answered;
  const accuracy = round.answered ? Math.round((round.correct / round.answered) * 100) : 0;
  document.querySelector('#result-accuracy').textContent = `${accuracy}%`;
}

function startRound(total) {
  clearInterval(timerId);
  clearTimeout(nextQuestionId);
  round = {
    total,
    answered: 0,
    correct: 0,
    questions: createQuestions(),
    deadline: performance.now() + 30000,
    active: true
  };
  document.querySelector('#setup-screen').classList.add('hidden');
  document.querySelector('#result-screen').classList.add('hidden');
  document.querySelector('#play-screen').classList.remove('hidden');
  document.querySelector('#correct-total').textContent = '0';
  document.querySelector('#progress-text').textContent = `0 / ${total}`;
  document.querySelector('#progress-bar').style.width = '0%';
  document.querySelector('#timer-value').closest('.timer').classList.remove('urgent');
  renderQuestion();
  updateTimer();
  timerId = setInterval(updateTimer, 100);
}

document.querySelectorAll('[data-count]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#question-total').value = button.dataset.count;
    document.querySelectorAll('.preset').forEach((preset) => preset.classList.toggle('selected', preset === button));
  });
});

document.querySelector('#question-total').addEventListener('input', (event) => {
  document.querySelectorAll('.preset').forEach((button) => {
    button.classList.toggle('selected', button.dataset.count === event.target.value);
  });
});

document.querySelector('#setup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const total = Number(document.querySelector('#question-total').value);
  if (!Number.isInteger(total) || total < 1 || total > 64) {
    document.querySelector('#question-total').reportValidity();
    return;
  }
  startRound(total);
});

document.querySelector('#answer-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!round || !round.active) return;
  const input = document.querySelector('#answer-input');
  if (!input.value) return;
  const question = round.questions[round.answered];
  round.answered += 1;
  const isCorrect = Number(input.value) === question.answer;
  if (isCorrect) round.correct += 1;
  document.querySelector('#correct-total').textContent = round.correct;
  document.querySelector('#progress-text').textContent = `${round.answered} / ${round.total}`;
  document.querySelector('#progress-bar').style.width = `${(round.answered / round.total) * 100}%`;
  document.querySelector('#feedback').textContent = isCorrect
    ? '정답이에요!'
    : `아쉬워요. ${question.first} × ${question.second} = ${question.answer}`;
  input.disabled = true;
  document.querySelector('#submit-answer').disabled = true;
  if (round.answered >= round.total) {
    finishRound('count');
    return;
  }
  nextQuestionId = setTimeout(renderQuestion, 350);
});

document.querySelector('#retry-button').addEventListener('click', showSetup);

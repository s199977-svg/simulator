const STORAGE_KEY = 'concept-quest-v1';

const starterConcepts = [
  {
    id: 'water-cycle',
    subject: '과학',
    unit: '물의 순환과 날씨',
    title: '물질은 어떻게 순환할까?',
    question: '태양 에너지는 지구의 물을 어떻게 움직이게 할까요?',
    concept: '물은 증발, 응결, 강수의 과정을 거치며 지구 곳곳을 순환합니다. 태양 에너지는 물을 증발시키고, 중력은 물이 땅으로 다시 흐르도록 돕습니다. 물의 순환은 에너지의 이동과 서로 연결된 과정으로 이루어집니다.',
    notice: '비가 그친 뒤 운동장에 고인 물이 시간이 지나면 사라집니다. 그 물은 어디로 갔을까요? 물이 눈에 보이지 않게 된 것과 실제로 없어진 것은 같은 뜻일까요?',
    quiz: {
      prompt: '맑은 날 젖은 운동장이 마르는 현상을 가장 잘 설명한 것은 무엇인가요?',
      options: ['물이 사라져 더 이상 존재하지 않는다.', '태양 에너지를 받은 물이 수증기가 되어 공기 중으로 이동한다.', '중력이 물을 하늘로 끌어올린다.'],
      answer: 1,
      explanation: '물이 증발하면 액체에서 기체인 수증기로 상태가 바뀝니다. 물질은 사라진 것이 아니라 공기 중으로 이동한 거예요.'
    },
    transfer: '운동장에 그늘막을 설치하면 비 온 뒤 물이 마르는 속도는 어떻게 달라질까요? 태양 에너지와 증발 개념을 사용해 설명해 보세요.',
    color: '#7658df',
    soft: '#f0edff',
    symbol: '◉'
  },
  {
    id: 'living-things',
    subject: '과학',
    unit: '생물과 환경',
    title: '생물은 환경과 어떻게 연결될까?',
    question: '한 생물의 변화는 주변 생물에게 어떤 영향을 줄까요?',
    concept: '생태계에서 생물은 먹이 관계, 서식지, 물질과 에너지의 흐름으로 서로 연결되어 있습니다. 한 부분의 변화는 다른 부분에도 영향을 주며, 생태계의 균형은 여러 관계가 함께 작용한 결과입니다.',
    notice: '어떤 숲에서 나무가 크게 줄어들면 그곳에 사는 동물과 토양에는 어떤 변화가 생길까요? 처음 떠오르는 생각과 그 까닭을 적어 보세요.',
    quiz: {
      prompt: '숲에서 나무가 줄어들었을 때 일어날 수 있는 변화로 가장 알맞은 것은 무엇인가요?',
      options: ['나무와 관계된 다른 생물의 먹이와 서식 환경도 달라질 수 있다.', '나무만 영향을 받고 다른 생물은 모두 그대로이다.', '숲의 생물 사이의 관계가 더 이상 존재하지 않는다.'],
      answer: 0,
      explanation: '생물은 먹이와 서식 환경으로 연결되어 있어 한 부분의 변화가 다른 생물에게도 영향을 줄 수 있습니다.'
    },
    transfer: '학교 화단에 꽃이 줄어들었다고 상상해 보세요. 영향을 받을 수 있는 생물을 하나 고르고, 어떤 관계 때문에 영향을 받는지 설명해 보세요.',
    color: '#45a989',
    soft: '#eaf8f2',
    symbol: '❋'
  },
  {
    id: 'fractions',
    subject: '수학',
    unit: '분수의 의미',
    title: '분수는 무엇을 나타낼까?',
    question: '같은 양도 기준이 달라지면 어떻게 다르게 표현될까요?',
    concept: '분수는 전체를 똑같이 나눈 것 중 일부를 나타냅니다. 분수의 크기를 이해하려면 무엇을 전체로 정했는지, 전체를 몇 부분으로 나누었는지 함께 살펴야 합니다.',
    notice: '피자 한 판을 똑같이 4조각으로 나누어 1조각을 먹었습니다. 1/4이라고 말할 때, 무엇이 1이고 무엇이 4인지 자기 말로 설명해 보세요.',
    quiz: {
      prompt: '분수 3/5가 나타내는 의미로 가장 알맞은 것은 무엇인가요?',
      options: ['전체를 3부분으로 나눈 뒤 5부분을 고른 것', '전체를 똑같이 5부분으로 나눈 것 중 3부분', '전체를 5개 모아 3개로 나눈 것'],
      answer: 1,
      explanation: '분모 5는 전체를 똑같이 나눈 부분의 수, 분자 3은 그중에서 선택한 부분의 수를 나타냅니다.'
    },
    transfer: '같은 크기의 초콜릿 한 판을 친구와 나누려고 합니다. 2명이 나눌 때와 4명이 나눌 때 한 사람이 받는 양을 분수로 쓰고 비교해 보세요.',
    color: '#e2a04b',
    soft: '#fff5e8',
    symbol: '◴'
  }
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      concepts: Array.isArray(saved.concepts) ? saved.concepts : [],
      progress: saved.progress && typeof saved.progress === 'object' ? saved.progress : {},
      xp: Number.isFinite(saved.xp) ? Math.max(0, saved.xp) : 0,
      streak: Number.isFinite(saved.streak) ? Math.max(0, saved.streak) : 0,
      lastStudyDate: typeof saved.lastStudyDate === 'string' ? saved.lastStudyDate : null
    };
  } catch {
    return { concepts: [], progress: {}, xp: 0, streak: 0, lastStudyDate: null };
  }
}

let state = loadState();
let activeView = 'home';
let activeConceptId = null;
let toastTimer;
let gugudanSession = null;
let gugudanTimer = null;
let gugudanNextQuestionTimer = null;

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast('저장 공간이 부족해 학습 내용을 저장하지 못했어요.');
  }
}

function allConcepts() {
  return [...starterConcepts, ...state.concepts];
}

function progressFor(id) {
  const progress = state.progress[id];
  return progress || { step: 0, completed: false, reflection: '', transfer: '', quizCorrect: false };
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function updateDashboard() {
  const level = Math.floor(state.xp / 100) + 1;
  document.querySelector('#xp-total').textContent = state.xp;
  document.querySelector('#xp-next').textContent = 100 - (state.xp % 100);
  document.querySelector('#completed-count').textContent = Object.values(state.progress).filter((item) => item.completed).length;
  document.querySelector('#level-number').textContent = level;
  document.querySelector('#level-caption').textContent = level >= 5 ? '개념 연결 전문가' : level >= 3 ? '연결을 찾는 탐험가' : '호기심 많은 탐험가';
  document.querySelector('#streak-count').textContent = state.streak;
}

function cardMarkup(concept) {
  const progress = progressFor(concept.id);
  const percent = progress.completed ? 100 : Math.round((progress.step / 4) * 100);
  return `<article class="concept-card" style="--accent:${esc(concept.color || '#7658df')};--soft:${esc(concept.soft || '#f0edff')}">
    <div class="concept-card-top"><span class="subject-chip">${esc(concept.subject || '나의 개념')}</span><span class="card-symbol">${esc(concept.symbol || '✦')}</span></div>
    <h3>${esc(concept.title)}</h3><p class="unit-name">${esc(concept.unit)}</p>
    <p class="question-preview">${esc(concept.question)}</p>
    <div class="card-bottom"><span class="card-progress"><span class="mini-progress"><i style="width:${percent}%"></i></span>${percent}%</span><button class="card-action" data-open="${esc(concept.id)}">${progress.completed ? '다시 보기' : progress.step ? '이어서 하기' : '모험 시작'} →</button></div>
  </article>`;
}

function renderConcepts(query = '') {
  const concepts = allConcepts();
  const needle = query.trim().toLocaleLowerCase('ko');
  const filtered = concepts.filter((concept) => `${concept.title} ${concept.unit} ${concept.subject} ${concept.question}`.toLocaleLowerCase('ko').includes(needle));
  document.querySelector('#home-concept-grid').innerHTML = concepts.slice(0, 3).map(cardMarkup).join('');
  document.querySelector('#all-concept-grid').innerHTML = filtered.length
    ? filtered.map(cardMarkup).join('')
    : '<div class="empty-state">검색 결과가 없어요.<br>다른 개념이나 단원 이름으로 검색해 보세요.</div>';
  document.querySelector('#collection-count').textContent = `${concepts.length}개의 모험`;
}

function showView(view) {
  activeView = view;
  document.querySelectorAll('.view').forEach((section) => section.classList.add('hidden'));
  document.querySelector(`#${view}-view`).classList.remove('hidden');
  document.querySelectorAll('.nav-link').forEach((button) => button.classList.toggle('active', button.dataset.view === view));
  document.querySelector('#breadcrumb-current').textContent = {
    home: '내 학습',
    concepts: '개념 모험',
    gugudan: '구구단 챌린지'
  }[view] || '내 학습';
}

function lessonMarkup(concept) {
  const progress = progressFor(concept.id);
  const step = Math.min(progress.step, 3);
  const steps = ['개념 만나기', '질문 탐구하기', '이해 확인하기', '새롭게 적용하기'];
  const stepLabels = ['개념 만나기', '질문 탐구', '이해 확인', '새롭게 적용'];
  let activity = '';

  if (step === 0) {
    activity = `<div class="activity-kicker">01 · NOTICE & WONDER</div><h2>먼저, 현상을 관찰해요</h2>
      <p class="activity-intro">설명을 읽기 전에 내가 알고 있는 것과 궁금한 점을 떠올려 보세요.</p>
      <div class="concept-explain">${esc(concept.notice)}</div>
      <label class="prompt-label" for="reflection-input">무엇이 궁금한가요? 자유롭게 적어 보세요.</label>
      <textarea class="reflection-input" id="reflection-input" placeholder="예: 물은 어디로 갔을까? 왜 시간이 지나자 물이 줄어들었을까?">${esc(progress.reflection || '')}</textarea>
      <div class="activity-actions"><span class="activity-tip">✦ 생각을 기록하면 다음에 다시 볼 수 있어요.</span><button class="primary-button activity-next" data-next>탐구 시작하기 →</button></div>`;
  } else if (step === 1) {
    activity = `<div class="activity-kicker">02 · BUILD UNDERSTANDING</div><h2>핵심 개념을 연결해요</h2>
      <p class="activity-intro">중요한 내용을 읽고, 처음 떠올린 질문과 연결해 보세요.</p>
      <div class="concept-explain">${esc(concept.concept)}</div>
      <label class="prompt-label" for="reflection-input">처음 생각과 달라진 점이나 새로 알게 된 점은 무엇인가요?</label>
      <textarea class="reflection-input" id="reflection-input" placeholder="나의 관찰이나 질문을 개념과 연결해 적어 보세요.">${esc(progress.reflection || '')}</textarea>
      <div class="activity-actions"><span class="activity-tip">깊이 생각할수록 오래 기억돼요.</span><button class="primary-button activity-next" data-next>이해 확인하기 →</button></div>`;
  } else if (step === 2) {
    const options = concept.quiz.options.map((option, index) => {
      let outcome = '';
      if (progress.quizCorrect && index === concept.quiz.answer) outcome = 'correct';
      else if (progress.quizAnswered && !progress.quizCorrect && index === progress.quizSelection) outcome = 'incorrect';
      return `<button class="quiz-option ${outcome}" data-answer="${index}" ${progress.quizCorrect ? 'disabled' : ''}><span class="option-letter">${String.fromCharCode(65 + index)}</span>${esc(option)}</button>`;
    }).join('');
    activity = `<div class="activity-kicker">03 · CHECK YOUR THINKING</div><h2>개념으로 설명해 볼까요?</h2>
      <p class="activity-intro">외운 문장을 고르는 게 아니라, 상황을 가장 잘 설명하는 생각을 찾아요.</p>
      <div class="concept-explain">${esc(concept.quiz.prompt)}</div>${options}
      ${progress.quizAnswered ? `<div class="feedback-box ${progress.quizCorrect ? 'success' : 'retry'}">${progress.quizCorrect ? `좋아요! ${esc(concept.quiz.explanation)}` : '이 선택을 다시 생각해 보세요. 개념 설명을 읽고 다른 답을 골라 볼 수 있어요.'}</div>` : ''}
      <div class="activity-actions"><span class="activity-tip">${progress.quizAnswered ? (progress.quizCorrect ? '다음 단계로 이동할 수 있어요.' : '개념을 다시 읽고 답을 바꿔 보세요.') : '정답을 선택하면 설명을 확인할 수 있어요.'}</span>${progress.quizAnswered && progress.quizCorrect ? '<button class="primary-button activity-next" data-next>새로운 상황에 적용 →</button>' : ''}</div>`;
  } else {
    activity = `<div class="activity-kicker">04 · TRANSFER & REFLECT</div><h2>새로운 상황에 적용해요</h2>
      <p class="activity-intro">배운 개념이 다른 상황에서도 어떻게 쓰이는지 설명해 보세요.</p>
      <div class="concept-explain">${esc(concept.transfer)}</div>
      <label class="prompt-label" for="transfer-input">나의 설명</label>
      <textarea class="reflection-input" id="transfer-input" placeholder="개념을 사용해 나의 생각과 이유를 적어 보세요.">${esc(progress.transfer || '')}</textarea>
      <div class="activity-actions"><span class="activity-tip">나만의 말로 설명하는 것이 가장 중요해요.</span><button class="primary-button activity-next" data-finish>${progress.completed ? '모험 완료!' : '모험 완료하기 ✦'}</button></div>`;
  }

  const progressPercent = progress.completed ? 100 : Math.round((progress.step / 4) * 100);
  return `<div class="lesson-hero"><div class="lesson-meta"><span class="subject-chip">${esc(concept.subject || '나의 개념')}</span><span>${esc(concept.unit)}</span></div><h1>${esc(concept.title)}</h1><p class="subheading">핵심 질문 · ${esc(concept.question)}</p></div>
    <div class="lesson-layout"><main class="lesson-main">
      ${progress.completed ? `<div class="finish-panel"><div class="finish-medal">✦</div><div class="activity-kicker">QUEST COMPLETE</div><h2>개념 모험 완료!</h2><p>질문을 탐구하고, 개념을 확인하고, 새로운 상황에 적용했어요.<br>배운 내용을 나만의 언어로 설명해 보세요.</p><div class="xp-reward">✦ +50 XP 획득</div><br><button class="primary-button activity-next" data-restart>개념 다시 탐험하기</button></div>` : `<div class="activity-card">${activity}</div>`}
    </main><aside class="lesson-aside"><h3>모험 여정</h3><div class="step-list">${steps.map((label, index) => `<button class="step-button ${step === index ? 'active' : ''} ${progress.step > index ? 'complete' : ''}" data-step="${index}"><span class="step-number">${progress.step > index ? '✓' : index + 1}</span>${stepLabels[index]}</button>`).join('')}</div><div class="aside-progress"><i style="width:${progressPercent}%"></i></div><span class="aside-small">${progressPercent}% 여정 완료</span></aside></div>`;
}

function openConcept(id) {
  const concept = allConcepts().find((item) => item.id === id);
  if (!concept) return;
  activeView = 'lesson';
  activeConceptId = id;
  document.querySelector('#lesson-content').innerHTML = lessonMarkup(concept);
  document.querySelectorAll('.view').forEach((section) => section.classList.add('hidden'));
  document.querySelector('#lesson-view').classList.remove('hidden');
  document.querySelectorAll('.nav-link').forEach((button) => button.classList.toggle('active', button.dataset.view === 'concepts'));
  document.querySelector('#breadcrumb-current').textContent = concept.title;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getActiveProgress() {
  if (!state.progress[activeConceptId]) state.progress[activeConceptId] = { step: 0, completed: false, reflection: '', transfer: '', quizCorrect: false };
  return state.progress[activeConceptId];
}

function updateStreak() {
  const today = new Date().toLocaleDateString('sv-SE');
  if (state.lastStudyDate === today) return;
  const previous = new Date();
  previous.setDate(previous.getDate() - 1);
  const yesterday = previous.toLocaleDateString('sv-SE');
  state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

function makeGugudanQuestions() {
  const questions = [];
  for (let first = 2; first <= 9; first += 1) {
    for (let second = 2; second <= 9; second += 1) {
      questions.push({ first, second, answer: first * second });
    }
  }
  for (let index = questions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [questions[index], questions[swapIndex]] = [questions[swapIndex], questions[index]];
  }
  return questions;
}

function showGugudanSetup() {
  clearInterval(gugudanTimer);
  clearTimeout(gugudanNextQuestionTimer);
  gugudanTimer = null;
  gugudanNextQuestionTimer = null;
  gugudanSession = null;
  document.querySelector('#gugudan-setup').classList.remove('hidden');
  document.querySelector('#gugudan-active').classList.add('hidden');
  document.querySelector('#gugudan-result').classList.add('hidden');
}

function renderGugudanQuestion() {
  if (!gugudanSession || !gugudanSession.active) return;
  if (gugudanSession.answered >= gugudanSession.total) {
    finishGugudan('count');
    return;
  }
  const question = gugudanSession.questions[gugudanSession.answered];
  document.querySelector('#gugudan-question-count').textContent = `문제 ${gugudanSession.answered + 1} / ${gugudanSession.total}`;
  document.querySelector('#gugudan-equation').textContent = `${question.first} × ${question.second}`;
  document.querySelector('#gugudan-answer').value = '';
  document.querySelector('#gugudan-answer').disabled = false;
  document.querySelector('#gugudan-submit').disabled = false;
  document.querySelector('#gugudan-feedback').textContent = '';
  document.querySelector('#gugudan-answer').focus();
}

function updateGugudanTimer() {
  if (!gugudanSession || !gugudanSession.active) return;
  const remaining = Math.max(0, gugudanSession.deadline - performance.now());
  const timer = document.querySelector('#gugudan-timer');
  timer.textContent = (remaining / 1000).toFixed(1);
  timer.closest('.timer-display').classList.toggle('urgent', remaining <= 8000);
  if (remaining === 0) finishGugudan('time');
}

function finishGugudan(reason) {
  if (!gugudanSession || !gugudanSession.active) return;
  gugudanSession.active = false;
  clearInterval(gugudanTimer);
  clearTimeout(gugudanNextQuestionTimer);
  gugudanTimer = null;
  gugudanNextQuestionTimer = null;
  document.querySelector('#gugudan-active').classList.add('hidden');
  document.querySelector('#gugudan-result').classList.remove('hidden');
  document.querySelector('#gugudan-result-title').textContent = reason === 'count' ? '선택한 문항을 모두 풀었어요!' : '30초 도전이 끝났어요!';
  document.querySelector('#gugudan-result-message').textContent = reason === 'count'
    ? '정해 둔 문항을 시간 안에 모두 풀었어요. 훌륭해요!'
    : '다음 도전에서는 몇 문제를 더 맞힐 수 있을까요?';
  document.querySelector('#gugudan-result-correct').textContent = gugudanSession.correct;
  document.querySelector('#gugudan-result-answered').textContent = gugudanSession.answered;
  const accuracy = gugudanSession.answered
    ? Math.round((gugudanSession.correct / gugudanSession.answered) * 100)
    : 0;
  document.querySelector('#gugudan-result-accuracy').textContent = `${accuracy}%`;
}

function startGugudan(count) {
  clearInterval(gugudanTimer);
  clearTimeout(gugudanNextQuestionTimer);
  gugudanSession = {
    total: count,
    answered: 0,
    correct: 0,
    questions: makeGugudanQuestions(),
    deadline: performance.now() + 30000,
    active: true
  };
  document.querySelector('#gugudan-setup').classList.add('hidden');
  document.querySelector('#gugudan-result').classList.add('hidden');
  document.querySelector('#gugudan-active').classList.remove('hidden');
  document.querySelector('#gugudan-correct').textContent = '0';
  document.querySelector('#gugudan-progress').textContent = `0 / ${count}`;
  document.querySelector('#gugudan-progress-bar').style.width = '0%';
  document.querySelector('#gugudan-feedback').textContent = '';
  document.querySelector('#gugudan-timer').closest('.timer-display').classList.remove('urgent');
  renderGugudanQuestion();
  updateGugudanTimer();
  gugudanTimer = setInterval(updateGugudanTimer, 100);
}

document.addEventListener('click', (event) => {
  const nav = event.target.closest('[data-view]');
  if (nav) {
    showView(nav.dataset.view);
    if (nav.dataset.view === 'concepts') renderConcepts(document.querySelector('#concept-search').value);
  }
  const go = event.target.closest('[data-go]');
  if (go) {
    showView(go.dataset.go);
    if (go.dataset.go === 'concepts') renderConcepts();
  }
  const preset = event.target.closest('[data-count]');
  if (preset) {
    document.querySelector('#gugudan-count').value = preset.dataset.count;
    document.querySelectorAll('.preset-button').forEach((button) => button.classList.toggle('selected', button === preset));
  }
  if (event.target.closest('#gugudan-retry')) showGugudanSetup();
  const open = event.target.closest('[data-open]');
  if (open) openConcept(open.dataset.open);
  if (event.target.closest('#back-to-concepts')) {
    showView('concepts');
    renderConcepts(document.querySelector('#concept-search').value);
  }
  const next = event.target.closest('[data-next]');
  if (next) {
    const progress = getActiveProgress();
    const reflection = document.querySelector('#reflection-input');
    if (reflection) progress.reflection = reflection.value.trim();
    if (progress.step === 2 && !progress.quizCorrect) return;
    progress.step = Math.min(progress.step + 1, 3);
    saveState();
    openConcept(activeConceptId);
  }
  const answer = event.target.closest('[data-answer]');
  if (answer) {
    const concept = allConcepts().find((item) => item.id === activeConceptId);
    const progress = getActiveProgress();
    progress.quizAnswered = true;
    progress.quizSelection = Number(answer.dataset.answer);
    progress.quizCorrect = progress.quizSelection === concept.quiz.answer;
    if (progress.quizCorrect && !progress.quizRewarded) {
      progress.quizRewarded = true;
      state.xp += 10;
    }
    saveState();
    updateDashboard();
    openConcept(activeConceptId);
  }
  const finish = event.target.closest('[data-finish]');
  if (finish) {
    const transfer = document.querySelector('#transfer-input');
    const progress = getActiveProgress();
    progress.transfer = transfer.value.trim();
    if (!progress.completed) {
      progress.completed = true;
      progress.step = 4;
      const earnedReward = !progress.completionRewarded;
      if (earnedReward) {
        state.xp += 50;
        progress.completionRewarded = true;
      }
      updateStreak();
      showToast(earnedReward ? '개념 모험을 완료했어요! +50 XP' : '개념 모험을 완료했어요!');
    } else {
      showToast('이미 완료한 모험이에요. 다시 탐험해 보세요!');
    }
    saveState();
    updateDashboard();
    renderConcepts();
    openConcept(activeConceptId);
  }
  const restart = event.target.closest('[data-restart]');
  if (restart) {
    const progress = getActiveProgress();
    progress.step = 0;
    progress.completed = false;
    progress.quizAnswered = false;
    progress.quizCorrect = false;
    progress.quizRewarded = false;
    progress.quizSelection = null;
    progress.transfer = '';
    saveState();
    renderConcepts();
    openConcept(activeConceptId);
  }
  const stepButton = event.target.closest('[data-step]');
  if (stepButton) {
    const requested = Number(stepButton.dataset.step);
    const progress = getActiveProgress();
    if (requested <= progress.step) {
      if (requested === 2 && !progress.quizCorrect) {
        showToast('앞 단계를 완료하고 문제를 풀어야 다음으로 갈 수 있어요.');
        return;
      }
      openConcept(activeConceptId);
      progress.step = requested;
      saveState();
      openConcept(activeConceptId);
    } else {
      showToast('모험 순서대로 진행해 주세요.');
    }
  }
  if (event.target.closest('#reset-progress')) document.querySelector('#reset-dialog').showModal();
});

document.querySelector('#add-concept-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#new-title').value.trim();
  const unit = document.querySelector('#new-unit').value.trim();
  const question = document.querySelector('#new-question').value.trim();
  const conceptText = document.querySelector('#new-concept').value.trim();
  const transferText = document.querySelector('#new-transfer').value.trim();
  if (!title || !unit || !question || !conceptText) return;
  const id = `custom-${Date.now()}`;
  state.concepts.push({
    id, subject: unit.split(/[·|/]/)[0].trim() || '나의 개념', unit, title, question,
    concept: conceptText,
    notice: `교과서에서 '${title}'이(가) 사용된 예시나 현상을 찾아보세요. 무엇이 궁금한지, 이미 알고 있는 것은 무엇인지 적어 보세요.`,
    quiz: {
      prompt: `교과서의 '${title}' 개념을 가장 잘 이해했는지 확인하는 방법은 무엇일까요?`,
      options: ['핵심 낱말을 그대로 외워 말한다.', '개념의 뜻과 관계를 내 말로 설명하고 예를 든다.', '교과서의 제목을 다시 읽는다.'],
      answer: 1,
      explanation: '개념의 의미와 관계를 자신의 말로 설명하고 새로운 예에 적용할 수 있으면 깊이 이해한 것입니다.'
    },
    transfer: transferText || `'${title}' 개념을 교과서와 다른 일상생활의 상황에 적용해 보세요. 어떤 점에서 이 개념이 도움이 되나요?`,
    color: '#7658df', soft: '#f0edff', symbol: '✦'
  });
  saveState();
  renderConcepts();
  event.target.reset();
  showToast('새 개념 모험을 만들었어요!');
});

document.querySelector('#gugudan-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const count = Number(document.querySelector('#gugudan-count').value);
  if (!Number.isInteger(count) || count < 1 || count > 64) {
    document.querySelector('#gugudan-count').reportValidity();
    return;
  }
  startGugudan(count);
});

document.querySelector('#gugudan-count').addEventListener('input', (event) => {
  const count = event.target.value;
  document.querySelectorAll('.preset-button').forEach((button) => {
    button.classList.toggle('selected', button.dataset.count === count);
  });
});

document.querySelector('#gugudan-answer-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!gugudanSession || !gugudanSession.active) return;
  const answerInput = document.querySelector('#gugudan-answer');
  if (!answerInput.value) return;
  const question = gugudanSession.questions[gugudanSession.answered];
  const answer = Number(answerInput.value);
  gugudanSession.answered += 1;
  const correct = answer === question.answer;
  if (correct) gugudanSession.correct += 1;
  document.querySelector('#gugudan-correct').textContent = gugudanSession.correct;
  document.querySelector('#gugudan-progress').textContent = `${gugudanSession.answered} / ${gugudanSession.total}`;
  document.querySelector('#gugudan-progress-bar').style.width = `${(gugudanSession.answered / gugudanSession.total) * 100}%`;
  document.querySelector('#gugudan-feedback').textContent = correct
    ? '정답이에요!'
    : `아쉬워요. ${question.first} × ${question.second} = ${question.answer}`;
  answerInput.disabled = true;
  document.querySelector('#gugudan-submit').disabled = true;
  if (gugudanSession.answered >= gugudanSession.total) {
    finishGugudan('count');
    return;
  }
  gugudanNextQuestionTimer = setTimeout(renderGugudanQuestion, 350);
});

document.querySelector('#concept-search').addEventListener('input', (event) => renderConcepts(event.target.value));
document.querySelector('#reset-dialog').addEventListener('close', (event) => {
  if (event.target.returnValue !== 'confirm') return;
  state.progress = {};
  state.xp = 0;
  state.streak = 0;
  state.lastStudyDate = null;
  saveState();
  updateDashboard();
  renderConcepts();
  if (activeView === 'lesson' && activeConceptId) openConcept(activeConceptId);
  showToast('학습 기록을 초기화했어요.');
});

renderConcepts();
updateDashboard();

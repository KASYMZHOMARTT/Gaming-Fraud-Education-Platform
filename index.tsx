import React, { useState } from 'react';
import { Shield, AlertTriangle, Book, Award, CheckCircle, XCircle, ChevronRight, Trophy, Target } from 'lucide-react';

const GamingFraudEducation = () => {
  const [activeTab, setActiveTab] = useState('types');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const fraudTypes = [
    {
      id: 1,
      title: "Читтер (Cheats)",
      description: "Ойынның кодын өзгерту арқылы артықшылық алу",
      examples: ["Aimbot - автоматты нысанаға алу", "Wallhack - қабырғалар арқылы көру", "Speedhack - жылдамдықты арттыру"],
      danger: "high"
    },
    {
      id: 2,
      title: "Ботлар",
      description: "Автоматты түрде ойнайтын бағдарламалар",
      examples: ["Farming боттары - ресурс жинау", "Rank boosting боттары", "Spam боттары"],
      danger: "medium"
    },
    {
      id: 3,
      title: "Фишинг",
      description: "Жалған сайттар арқылы аккаунт ақпаратын ұрлау",
      examples: ["Жалған кіру беттері", "Тегін скиндер ұсынысы", "Фейк турнирлер"],
      danger: "high"
    },
    {
      id: 4,
      title: "Account Takeover",
      description: "Басқа ойыншының аккаунтын ұрлау",
      examples: ["Құпия сөзді бұзу", "Keylogger бағдарламалары", "Social engineering"],
      danger: "high"
    },
    {
      id: 5,
      title: "Match Fixing",
      description: "Ойын нәтижесін алдын ала келісу",
      examples: ["Әдейі жеңілу", "Командалық алаяқтық", "Betting manipulation"],
      danger: "medium"
    },
    {
      id: 6,
      title: "Scamming",
      description: "Ойыншыларды алдау және заттарын ұрлау",
      examples: ["Trade scam", "Жалған лотереялар", "Pyramid schemes"],
      danger: "high"
    }
  ];

  const protectionMethods = [
    {
      category: "Аккаунт қауіпсіздігі",
      methods: [
        "Күшті құпия сөз қолдану (12+ символ, әріптер, сандар, белгілер)",
        "2FA (екі факторлы аутентификация) қосу",
        "Құпия сөзді ешкіммен бөліспеу",
        "Әр платформаға әртүрлі құпия сөз қолдану"
      ]
    },
    {
      category: "Фишингтен қорғану",
      methods: [
        "URL мекенжайын мұқият тексеру",
        "Ресми сайттардан ғана кіру",
        "Күдікті хабарламаларға сілтемелерді ашпау",
        "Email адресін тексеру"
      ]
    },
    {
      category: "Читерлерден қорғану",
      methods: [
        "Тек ресми серверлерде ойнау",
        "Anti-cheat бағдарламалары бар ойындарды таңдау",
        "Күдікті ойыншыларды report жасау",
        "Ойын файлдарын тексеру"
      ]
    },
    {
      category: "Scam-нан қорғану",
      methods: [
        "Тым жақсы ұсыныстарға сенбеу",
        "Trade-тарды тек қауіпсіз платформалар арқылы жасау",
        "Алдын ала төлем сұрайтындарға сенбеу",
        "Ойыншының репутациясын тексеру"
      ]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "CS:GO Skin Scam",
      situation: "Ойыншы Telegram-да хабарлама алды: 'Сіз турнирде жеңдіңіз! $500 құндылықтағы скиндер алу үшін сайтқа кіріңіз'",
      mistake: "Күдікті сілтемеге басып, аккаунт деректерін енгізді",
      result: "Барлық қымбат скиндері ұрланды ($2,400 шығын)",
      lesson: "Ешқашан күдікті сілтемелерге баспаңыз. Ресми арналар арқылы ғана растаңыз."
    },
    {
      id: 2,
      title: "Dota 2 Boosting Scam",
      situation: "Ойыншы арзан rank boosting қызметін тапты. MMR көтеру үшін аккаунт деректерін берді",
      mistake: "Белгісіз адамға толық қолжетімділік берді",
      result: "Аккаунт ұрланды, барлық заттар сатылды",
      lesson: "Ешқашан аккаунт деректеріңізді бөліспеңіз. Boosting қызметтері қауіпті және заңсыз."
    },
    {
      id: 3,
      title: "Valorant Aimbot Detection",
      situation: "Ойыншы жеңіл жеңіс үшін aimbot орнатты. Бірнеше ойында күдікті статистика жинады",
      mistake: "Читтер пайдаланып, әділ емес артықшылық алды",
      result: "Vanguard anti-cheat анықтады, аккаунт тұрақты ban алды",
      lesson: "Читтер қысқа мерзімді артықшылық береді, бірақ ұзақ мерзімді зардаптары зор. Әділ ойнаңыз!"
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Фишинг сайтын қалай анықтауға болады?",
      options: [
        "Тегін скиндер ұсынады",
        "URL мекенжайында қателер бар",
        "HTTPS емес, HTTP қолданады",
        "Барлық жауаптар дұрыс"
      ],
      correct: 3
    },
    {
      id: 2,
      question: "Ең қауіпсіз құпия сөз қайсысы?",
      options: [
        "password123",
        "мен_ойыншымын",
        "Gr8!G@m3r#2024$Secure",
        "12345678"
      ],
      correct: 2
    },
    {
      id: 3,
      question: "2FA (Two-Factor Authentication) не үшін керек?",
      options: [
        "Ойынды жылдамырақ жүктеу үшін",
        "Аккаунтқа қосымша қорғаныс қабаты қосу үшін",
        "Скиндер алу үшін",
        "Rank көтеру үшін"
      ],
      correct: 1
    },
    {
      id: 4,
      question: "Trade жасау кезінде не істеу керек?",
      options: [
        "Тез арада келісу",
        "Заттарды мұқият тексеру",
        "Алдымен өз заттарыңды беру",
        "Күту қажет емес"
      ],
      correct: 1
    },
    {
      id: 5,
      question: "Егер читтер пайдаланатын ойыншыны көрсеңіз не істеу керек?",
      options: [
        "Өзіңіз де читтер қолдану",
        "Ойыннан шығу",
        "Report жасау және дәлелдер жинау",
        "Ештеңе істемеу"
      ],
      correct: 2
    }
  ];

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitQuiz = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) correct++;
    });
    setScore(correct);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black bg-opacity-40 backdrop-blur-sm border-b border-purple-500">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-purple-400" />
            <div>
              <h1 className="text-3xl font-bold">Онлайн ойындардағы алаяқтық</h1>
              <p className="text-purple-300">Білім беру платформасы</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('types')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'types'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Book className="w-5 h-5 inline mr-2" />
            Алаяқтық түрлері
          </button>
          <button
            onClick={() => setActiveTab('protection')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'protection'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Shield className="w-5 h-5 inline mr-2" />
            Қорғану әдістері
          </button>
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'cases'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Target className="w-5 h-5 inline mr-2" />
            Case Study
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Award className="w-5 h-5 inline mr-2" />
            Тест
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Fraud Types */}
        {activeTab === 'types' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Алаяқтық түрлері</h2>
            {fraudTypes.map(fraud => (
              <div key={fraud.id} className="bg-slate-800 bg-opacity-60 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-purple-300">{fraud.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    fraud.danger === 'high' ? 'bg-red-600' : 'bg-orange-600'
                  }`}>
                    {fraud.danger === 'high' ? 'Жоғары қауіп' : 'Орташа қауіп'}
                  </span>
                </div>
                <p className="text-slate-300 mb-4">{fraud.description}</p>
                <div>
                  <p className="font-semibold text-purple-300 mb-2">Мысалдар:</p>
                  <ul className="space-y-1">
                    {fraud.examples.map((example, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Protection Methods */}
        {activeTab === 'protection' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Қорғану әдістері</h2>
            {protectionMethods.map((category, idx) => (
              <div key={idx} className="bg-slate-800 bg-opacity-60 backdrop-blur rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.methods.map((method, midx) => (
                    <li key={midx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Case Studies */}
        {activeTab === 'cases' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Нақты жағдайлар (Case Study)</h2>
            {caseStudies.map(cases => (
              <div key={cases.id} className="bg-slate-800 bg-opacity-60 backdrop-blur rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-purple-300 mb-4">{cases.title}</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4 border border-blue-700">
                    <p className="font-semibold text-blue-300 mb-2">Жағдай:</p>
                    <p className="text-slate-300">{cases.situation}</p>
                  </div>
                  
                  <div className="bg-red-900 bg-opacity-30 rounded-lg p-4 border border-red-700">
                    <p className="font-semibold text-red-300 mb-2">Қате:</p>
                    <p className="text-slate-300">{cases.mistake}</p>
                  </div>
                  
                  <div className="bg-orange-900 bg-opacity-30 rounded-lg p-4 border border-orange-700">
                    <p className="font-semibold text-orange-300 mb-2">Нәтиже:</p>
                    <p className="text-slate-300">{cases.result}</p>
                  </div>
                  
                  <div className="bg-green-900 bg-opacity-30 rounded-lg p-4 border border-green-700">
                    <p className="font-semibold text-green-300 mb-2">Сабақ:</p>
                    <p className="text-slate-300">{cases.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quiz */}
        {activeTab === 'quiz' && (
          <div className="bg-slate-800 bg-opacity-60 backdrop-blur rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-2">
              <Trophy className="w-7 h-7" />
              Білімді тексеру
            </h2>
            
            {!quizSubmitted ? (
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <div key={q.id} className="bg-slate-700 bg-opacity-50 rounded-lg p-5">
                    <p className="font-semibold text-lg mb-4 text-purple-200">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, oidx) => (
                        <button
                          key={oidx}
                          onClick={() => handleQuizAnswer(q.id, oidx)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                            quizAnswers[q.id] === oidx
                              ? 'bg-purple-600 text-white'
                              : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={submitQuiz}
                  disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all"
                >
                  Тексеру
                </button>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8">
                  <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-3xl font-bold mb-2">Сіздің нәтижеңіз</h3>
                  <p className="text-5xl font-bold text-yellow-300 mb-2">
                    {score} / {quizQuestions.length}
                  </p>
                  <p className="text-xl">
                    {score === quizQuestions.length && "Керемет! Барлық жауаптар дұрыс! 🎉"}
                    {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && "Өте жақсы! 👏"}
                    {score >= quizQuestions.length * 0.6 && score < quizQuestions.length * 0.8 && "Жақсы нәтиже! 👍"}
                    {score < quizQuestions.length * 0.6 && "Материалды қайта оқып шығыңыз 📚"}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="bg-slate-700 bg-opacity-50 rounded-lg p-5 text-left">
                      <p className="font-semibold mb-3 text-purple-200">
                        {idx + 1}. {q.question}
                      </p>
                      {q.options.map((option, oidx) => (
                        <div
                          key={oidx}
                          className={`px-4 py-2 rounded mb-2 flex items-center gap-2 ${
                            oidx === q.correct
                              ? 'bg-green-600 bg-opacity-30 border border-green-500'
                              : quizAnswers[q.id] === oidx
                              ? 'bg-red-600 bg-opacity-30 border border-red-500'
                              : 'bg-slate-600 bg-opacity-30'
                          }`}
                        >
                          {oidx === q.correct && <CheckCircle className="w-5 h-5 text-green-400" />}
                          {quizAnswers[q.id] === oidx && oidx !== q.correct && <XCircle className="w-5 h-5 text-red-400" />}
                          <span>{option}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={resetQuiz}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all"
                >
                  Қайтадан өту
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 py-8 mt-8 border-t border-slate-700">
        <div className="text-center text-slate-400">
          <p className="mb-2">💡 Есте сақтаңыз: Қауіпсіздік - бұл тұрақты процесс!</p>
          <p className="text-sm">Өз білімдеріңізді үнемі жаңартып отырыңыз</p>
        </div>
      </div>
    </div>
  );
};

export default GamingFraudEducation;
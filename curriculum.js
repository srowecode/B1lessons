const b1Curriculum = [
    {
        id: 1,
        chapter: "Chapter 1: First Meetings",
        type: "opinion",
        title: "Lesson 1: Opinion Exchange - Meeting strangers",
        goal: "Discuss first impressions and ask polite questions using indirect question structures. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(第一印象について話し合い、間接疑問文を使って丁寧に質問する。)</span>",
        questions: [
            { eng: "1. How do you feel when you meet new people at a business event?", jpn: "1. ビジネスイベントで新しい人に会うとき、どう感じますか？" },
            { eng: "2. Why is it sometimes difficult to talk to a complete stranger?", jpn: "2. 全く見知らぬ人と話すのが時に難しいのはなぜですか？" },
            { eng: "3. What is the best topic to discuss when you first meet someone?", jpn: "3. 初対面の人と話すときに最適な話題は何ですか？" },
            { eng: "4. Do you usually shake hands or bow when introducing yourself?", jpn: "4. 自己紹介をするときは、普段握手をしますか、それともお辞儀をしますか？" },
            { eng: "5. Why is body language important for making a good first impression?", jpn: "5. 良い第一印象を与えるために、なぜボディーランゲージが重要なのですか？" },
            { eng: "6. What kinds of personal questions should you avoid asking right away?", jpn: "6. すぐに聞くべきではない個人的な質問にはどのようなものがありますか？" },
            { eng: "7. Why do some people feel nervous when meeting strangers?", jpn: "7. 見知らぬ人に会うと緊張する人がいるのはなぜですか？" },
            { eng: "8. How does a smile change a person's first impression?", jpn: "8. 笑顔は人の第一印象をどのように変えますか？" },
            { eng: "9. Have you ever made a bad first impression on someone?", jpn: "9. 誰かに悪い第一印象を与えてしまったことはありますか？" },
            { eng: "10. How do you usually introduce yourself to a new colleague?", jpn: "10. 新しい同僚には普段どのように自己紹介しますか？" }
        ],
        vocab: [
            { eng: "Acquaintance", jpn: "知人" },
            { eng: "Interact", jpn: "交流する" },
            { eng: "Encounter", jpn: "遭遇する / 出会い" },
            { eng: "Approach", jpn: "アプローチする / 近づく" },
            { eng: "Establish", jpn: "確立する / 築く" },
            { eng: "Maintain", jpn: "維持する" },
            { eng: "Appropriate", jpn: "適切な" },
            { eng: "Fascinating", jpn: "魅力的な" },
            { eng: "Engaging", jpn: "魅力のある / 引き込まれる" },
            { eng: "Atmosphere", jpn: "雰囲気" },
            { eng: "Genuine", jpn: "本物の / 心からの" },
            { eng: "Perception", jpn: "認識 / 知覚" },
            { eng: "Observe", jpn: "観察する" },
            { eng: "Hesitate", jpn: "ためらう" }
        ],
        grammarPoints: [
            {
                point: "1. Questions: Indirect Questions (Wh- words)",
                explanation: "To ask a question politely to a stranger, start with a phrase like 'Could you tell me...' or 'Do you know...' followed by the question word. The word order then becomes a normal statement (Subject + Verb).",
                explanationJpn: "見知らぬ人に丁寧に質問するには、「Could you tell me...」や「Do you know...」などのフレーズの後に疑問詞を続けます。その後の語順は普通の肯定文（主語＋動詞）になります。",
                examples: [
                    { eng: "Could you tell me where the station is?", jpn: "駅がどこにあるか教えていただけますか？" },
                    { eng: "Do you know what time the meeting starts?", jpn: "会議が何時に始まるか知っていますか？" }
                ]
            },
            {
                point: "2. Questions: Indirect Questions (Yes/No)",
                explanation: "If the original question is a Yes/No question, use 'if' or 'whether' after the polite opening phrase.",
                explanationJpn: "元の質問が「はい/いいえ」で答えられる質問の場合は、丁寧な出だしのフレーズの後に「if」または「whether」（〜かどうか）を使用します。",
                examples: [
                    { eng: "Do you know if the manager is in the office?", jpn: "マネージャーがオフィスにいるかどうか知っていますか？" },
                    { eng: "Could you tell me whether this seat is taken?", jpn: "この席が空いているかどうか教えていただけますか？" }
                ]
            }
        ],
        expressions: [
            { eng: "Actually", jpn: "実は / 実際には" },
            { eng: "After all", jpn: "結局のところ / 何しろ〜だから" },
            { eng: "In my opinion", jpn: "私の意見では" },
            { eng: "For instance", jpn: "例えば" },
            { eng: "To sum up", jpn: "要約すると" }
        ],
        homework: {
            vocab: [
                { eng: "Figure out", jpn: "理解する、解決する", exEng: "I need to figure out how to use this app.", exJpn: "このアプリの使い方を理解する必要がある。" },
                { eng: "Find out", jpn: "見つける、解明する", exEng: "We will find out the results tomorrow.", exJpn: "明日結果が判明する。" },
                { eng: "Point out", jpn: "指摘する", exEng: "She pointed out my mistake politely.", exJpn: "彼女は私の間違いを丁寧に指摘した。" },
                { eng: "Carry out", jpn: "実行する", exEng: "They will carry out the plan next week.", exJpn: "彼らは来週その計画を実行する。" },
                { eng: "Stand out", jpn: "目立つ", exEng: "His bright red jacket makes him stand out.", exJpn: "彼の明るい赤いジャケットは彼を目立たせる。" },
                { eng: "Rule out", jpn: "除外する", exEng: "We cannot rule out any possibilities.", exJpn: "私たちはどんな可能性も除外できない。" },
                { eng: "Work out", jpn: "運動する、解決する", exEng: "I work out at the gym on weekends.", exJpn: "私は週末にジムで運動する。" },
                { eng: "Turn out", jpn: "～という結果になる", exEng: "The meeting turned out to be very useful.", exJpn: "その会議はとても役に立つという結果になった。" },
                { eng: "Hand out", jpn: "配る", exEng: "Please hand out these documents.", exJpn: "これらの書類を配ってください。" },
                { eng: "Fill out", jpn: "記入する", exEng: "You must fill out this form.", exJpn: "この用紙に記入しなければならない。" },
                { eng: "Leave out", jpn: "省く、仲間外れにする", exEng: "Do not leave out any important details.", exJpn: "重要な詳細を一つも省かないでください。" },
                { eng: "Drop out", jpn: "退学する、脱落する", exEng: "He decided to drop out of the course.", exJpn: "彼はそのコースを脱落することを決めた。" },
                { eng: "Break out", jpn: "勃発する、発生する", exEng: "A fire broke out in the kitchen.", exJpn: "キッチンで火事が発生した。" },
                { eng: "Run out", jpn: "使い果たす", exEng: "We have run out of printer paper.", exJpn: "プリンターの紙を使い果たしてしまった。" },
                { eng: "Pass out", jpn: "気絶する、配る", exEng: "It was so hot that he passed out.", exJpn: "とても暑かったので彼は気絶した。" },
                { eng: "Check out", jpn: "確認する", exEng: "You should check out that new restaurant.", exJpn: "あの新しいレストランをチェックするべきだ。" },
                { eng: "Come out", jpn: "現れる、発売される", exEng: "The new movie will come out next month.", exJpn: "その新しい映画は来月公開される。" },
                { eng: "Bring out", jpn: "引き出す、世に出す", exEng: "Competition brings out the best in him.", exJpn: "競争は彼の最高の部分を引き出す。" },
                { eng: "Hang out", jpn: "遊ぶ、ぶらぶらする", exEng: "Let's hang out at the cafe after work.", exJpn: "仕事の後、カフェで遊ぼう。" },
                { eng: "Speak out", jpn: "はっきりと意見を言う", exEng: "You should speak out if you disagree.", exJpn: "反対ならはっきりと意見を言うべきだ。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me. Could you tell me if you are the new software engineer?", jpn: "すみません。あなたが新しいソフトウェアエンジニアかどうか教えていただけますか？" },
                { speaker: "B", eng: "Yes, I am. My name is David.", jpn: "はい、そうです。私の名前はデビッドです。" },
                { speaker: "A", eng: "Nice to meet you, David. I'm Sarah. Do you know where your desk is?", jpn: "はじめまして、デビッド。私はサラです。ご自分のデスクがどこにあるかご存知ですか？" },
                { speaker: "B", eng: "No, I haven't found it yet. To be honest, I feel a little nervous about meeting so many strangers.", jpn: "いいえ、まだ見つけていません。正直に言うと、たくさんの見知らぬ人に会うことに少し緊張しています。" },
                { speaker: "A", eng: "Don't worry, everyone is very friendly. I can show you where the break room is.", jpn: "心配しないで、みんなとてもフレンドリーですよ。休憩室がどこにあるか案内できます。" },
                { speaker: "B", eng: "That's good to hear. Could you tell me what time everyone usually eats lunch?", jpn: "それを聞いて安心しました。みんな普段何時に昼食をとるか教えていただけますか？" },
                { speaker: "A", eng: "Usually around noon. You will hang out with us today, right?", jpn: "たいてい正午くらいです。今日は私たちと一緒に過ごしますよね？" },
                { speaker: "B", eng: "I would love to. Do you know if there are any good restaurants nearby?", jpn: "ぜひお願いします。近くに良いレストランがあるかご存知ですか？" },
                { speaker: "A", eng: "Absolutely. We usually interact casually at a cafe down the street.", jpn: "もちろんです。私たちは普段、通りを少し行ったところにあるカフェでカジュアルに交流しています。" },
                { speaker: "B", eng: "That sounds like a great atmosphere. I won't hesitate to join you.", jpn: "素晴らしい雰囲気のようですね。ためらわずに参加しようと思います。" },
                { speaker: "A", eng: "Please do. We appreciate genuine curiosity. Could you tell me where you worked before?", jpn: "ぜひそうしてください。私たちは純粋な好奇心を歓迎します。以前はどこで働いていたか教えていただけますか？" },
                { speaker: "B", eng: "I worked in marketing for three years. But programming is much more fascinating to me.", jpn: "マーケティングで3年間働いていました。でも、プログラミングの方が私にとってはるかに魅力的です。" },
                { speaker: "A", eng: "I agree. Maintaining your skills is a fun challenge.", jpn: "同感です。スキルを維持することは楽しい挑戦ですよね。" },
                { speaker: "B", eng: "Definitely. I look forward to working with everyone here.", jpn: "間違いありません。ここで皆さんと一緒に働くのを楽しみにしています。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: What do you usually do to make a good first impression when you meet a stranger?",
                promptJpn: "「見知らぬ人に会うとき、良い第一印象を与えるために普段何をしますか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Psychology of First Impressions)",
                instruction: "Read this authentic article to learn more about the psychology behind meeting new people. This section does not recycle lesson grammar, but provides real-world context.",
                eng: "Did you know that it only takes a few seconds to make a first impression? When we meet a stranger, our brains quickly decide if the person is friendly or dangerous. This fast reaction kept people safe in the past. Today, in the business world, it means your first greeting is very important. Body language plays a big part in this process. Making eye contact and offering a warm smile are essential behaviors. These simple actions quickly make the other person feel comfortable and show that you care about the conversation.\n\nAt work, a confident introduction can help you look professional. A firm handshake and a clear, polite voice show that you are capable. On the other hand, looking at your phone, hesitating, or avoiding eye contact can make the situation awkward. People notice body language immediately. If you look nervous or bored, it is very difficult to change that bad impression later, even if you are great at your job.\n\nAlso, it is necessary to ask interesting questions. When you find out what the other person likes, it is easier to build a connection. A good conversation needs both people to participate actively. If you focus on creating a friendly and welcoming atmosphere, your professional relationships will be much more successful.",
                jpn: "第一印象を決めるのに数秒しかかからないことを知っていましたか？見知らぬ人に会うとき、私たちの脳は相手がフレンドリーか危険かを素早く判断します。この素早い反応は、過去に人々を安全に保ちました。今日、ビジネスの世界では、あなたの最初の挨拶が非常に重要であることを意味します。ボディーランゲージはこのプロセスにおいて大きな役割を果たします。アイコンタクトを取り、温かい笑顔を見せることは不可欠な行動です。これらの単純な行動は、すぐに相手を安心させ、あなたが会話を気にかけていることを示します。\n\n職場で自信を持って自己紹介することは、プロフェッショナルに見せるのに役立ちます。しっかりとした握手と、明確で礼儀正しい声は、あなたが有能であることを示します。一方で、スマホを見たり、ためらったり、アイコンタクトを避けたりすると、状況が気まずくなる可能性があります。人々はボディーランゲージにすぐに気づきます。もしあなたが緊張したり退屈しているように見えれば、たとえ仕事ができても、後からその悪い印象を変えるのは非常に困難です。\n\nまた、興味深い質問をすることも必要です。相手の好きなことを見つけると、つながりを築くのが簡単になります。良い会話には、双方が積極的に参加する必要があります。フレンドリーで歓迎される雰囲気を作ることに集中すれば、プロフェッショナルな関係ははるかに成功するでしょう。"
            }
        }
    },
    {
        id: 2,
        chapter: "Chapter 1: First Meetings",
        type: "transactional",
        title: "Lesson 2: How to welcome guests",
        goal: "Welcome guests to the office, introduce others, and offer refreshments or assistance. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(オフィスにゲストを歓迎し、他の人を紹介し、飲み物や手助けを申し出る。)</span>",
        vocab: [
            { eng: "Hospitality", jpn: "おもてなし" },
            { eng: "Representative", jpn: "代表者 / 担当者" },
            { eng: "Accompany", jpn: "同行する" },
            { eng: "Beverage", jpn: "飲み物" },
            { eng: "Refreshment", jpn: "軽食 / 飲み物" },
            { eng: "Facility", jpn: "施設" },
            { eng: "Itinerary", jpn: "旅程 / 予定表" },
            { eng: "Premises", jpn: "敷地 / 構内" },
            { eng: "Escort", jpn: "案内する / 護衛する" },
            { eng: "Coordinate", jpn: "調整する" },
            { eng: "Briefing", jpn: "事前説明 / ブリーフィング" },
            { eng: "Familiarize", jpn: "慣れさせる" },
            { eng: "Headquarters", jpn: "本社" },
            { eng: "Accommodation", jpn: "宿泊施設" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Welcome to our office.</span> Please, <span class='swappable'>do come in and make yourself comfortable.</span>", jpn: "私たちのオフィスへようこそ。どうぞ、お入りになっておくつろぎください。" },
            { speaker: "B", eng: "Thank you. <span class='swappable'>It's a pleasure to be here.</span>", jpn: "ありがとうございます。ここに来られて嬉しいです。" },
            { speaker: "A", eng: "How was your journey? <span class='swappable'>Can I get you something to drink?</span>", jpn: "道中はいかがでしたか？何かお飲み物をお持ちしましょうか？" },
            { speaker: "B", eng: "A glass of water would be fine, thank you. <span class='swappable'>I really appreciate your hospitality.</span>", jpn: "お水で結構です、ありがとうございます。あなたのおもてなしに本当に感謝しています。" },
            { speaker: "A", eng: "You're welcome. <span class='swappable'>Let me take your coat.</span> Before the meeting, I would like to introduce you to our representative.", jpn: "どういたしまして。コートをお預かりします。会議の前に、私たちの担当者を紹介させてください。" },
            { speaker: "B", eng: "That sounds great. <span class='swappable'>I look forward to meeting them.</span>", jpn: "それは素晴らしい。お会いできるのを楽しみにしています。" }
        ],
        expressions: [
            { category: "1. Introducing Others (他人を紹介する)", options: ["I would like to introduce you to my manager.", "Let me introduce you to the team.", "This is Sarah from the Marketing department."] },
            { category: "2. Expressing gratitude (感謝を伝える)", options: ["I really appreciate your hospitality.", "Thank you for welcoming me.", "I am very grateful for the invitation."] },
            { category: "3. Responding to Gratitude (感謝に答える)", options: ["It's a pleasure to have you here.", "You're very welcome.", "We are glad you could come."] },
            { category: "4. Welcoming politely (丁寧な歓迎)", options: ["Welcome to our office.", "It's great to finally meet you in person.", "Please, do come in."] },
            { category: "5. Offering refreshments (飲み物を勧める)", options: ["Can I get you something to drink?", "Would you like some tea or coffee?", "How about a glass of water?"] },
            { category: "6. Offering assistance (手助けを申し出る)", options: ["Let me take your coat.", "Can I help you with your luggage?", "Please let me know if you need anything."] }
        ],
        grammarPoints: [
            {
                point: "1. Modals: Offering things and help (Would you / Can I)",
                explanation: "When welcoming guests, use 'Would you like' to politely offer food or drinks, and 'Can I' to offer general assistance.",
                explanationJpn: "ゲストを歓迎するときは、「Would you like」を使って食べ物や飲み物を丁寧に勧め、「Can I」を使って一般的な手助けを申し出ます。",
                examples: [
                    { eng: "Would you like a cup of coffee?", jpn: "コーヒーはいかがですか？" },
                    { eng: "Can I help you with your bags?", jpn: "荷物をお持ちしましょうか？" }
                ]
            },
            {
                point: "2. Verbs: Offering to do something (Let me)",
                explanation: "Use 'Let me' followed by a base verb to politely offer to perform an action for your guest. It demonstrates excellent hospitality.",
                explanationJpn: "「Let me」の後に動詞の原形を続けて、ゲストのために何か行動を起こすことを丁寧に申し出ます。これは素晴らしいおもてなしを示します。",
                examples: [
                    { eng: "Let me take your coat.", jpn: "コートをお預かりします（私に取らせてください）。" },
                    { eng: "Let me introduce you to the team.", jpn: "チームにあなたを紹介させてください。" }
                ]
            }
        ],
        clickingGames: [
            { prompt: "何かお飲み物をお持ちしましょうか？", target: "Can I get you something to drink?", words: ["Can", "I", "get", "you", "something", "to", "drink?"] },
            { prompt: "コーヒーはいかがですか？", target: "Would you like a cup of coffee?", words: ["Would", "you", "like", "a", "cup", "of", "coffee?"] },
            { prompt: "コートをお預かりします。", target: "Let me take your coat.", words: ["Let", "me", "take", "your", "coat."] },
            { prompt: "チームにあなたを紹介させてください。", target: "Let me introduce you to the team.", words: ["Let", "me", "introduce", "you", "to", "the", "team."] },
            { prompt: "荷物をお持ちしましょうか？", target: "Can I help you with your luggage?", words: ["Can", "I", "help", "you", "with", "your", "luggage?"] }
        ],
        dropdownGames: [
            { before: "Please,", options: ["do", "does", "did"], answer: "do", after: " come in and relax." },
            { before: "", options: ["Can I", "Would you", "Let me"], answer: "Can I", after: " get you something to drink?" },
            { before: "", options: ["Let me", "Would you", "Can I"], answer: "Would you", after: " like some tea or coffee?" },
            { before: "", options: ["Let me", "Would you", "Can I"], answer: "Let me", after: " take your coat." },
            { before: "I would like to", options: ["introduce", "introducing", "introduced"], answer: "introduce", after: " you to our representative." },
            { before: "I really appreciate your", options: ["hospitality", "hospital", "hospitable"], answer: "hospitality", after: " today." },
            { before: "It's a", options: ["pleasure", "please", "pleasant"], answer: "pleasure", after: " to meet you in person." },
            { before: "How was your", options: ["journey", "journeying", "journeys"], answer: "journey", after: " from the airport?" },
            { before: "We are glad you could", options: ["come", "came", "coming"], answer: "come", after: " today." },
            { before: "Please let me", options: ["know", "knowing", "known"], answer: "know", after: " if you need anything." }
        ],
        roleplay: {
            a: "You are hosting a client at your office. Welcome them, ask about their journey, and offer them a drink or assistance with their coat using 'Can I', 'Would you like', or 'Let me'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはオフィスでクライアントを接待しています。彼らを歓迎し、道中について尋ね、「Can I」「Would you like」「Let me」を使って飲み物やコートを預かる手助けを申し出てください。)</span>",
            b: "You are the visiting client. Express your gratitude for their hospitality. Accept the drink or assistance politely. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは訪問しているクライアントです。彼らのおもてなしに感謝の意を表してください。飲み物や手助けを丁寧に受け入れてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Back out", jpn: "手を引く、約束を破る", exEng: "You promised to help, you can't back out now.", exJpn: "手伝うと約束したのだから、今さら手を引くことはできない。" },
                { eng: "Blow out", jpn: "吹き消す", exEng: "Make a wish and blow out the candles.", exJpn: "願い事をしてキャンドルを吹き消してください。" },
                { eng: "Cross out", jpn: "線を引いて消す", exEng: "Cross out the wrong answers on the test.", exJpn: "テストの間違った答えを線で消してください。" },
                { eng: "Eat out", jpn: "外食する", exEng: "We usually eat out on Friday nights.", exJpn: "私たちはたいてい金曜日の夜に外食します。" },
                { eng: "Get out", jpn: "出る、逃げる、秘密が漏れる", exEng: "The secret managed to get out.", exJpn: "その秘密はなんとか漏れてしまった。" },
                { eng: "Help out", jpn: "助ける", exEng: "I need someone to help out with the event.", exJpn: "イベントを手伝ってくれる人が必要です。" },
                { eng: "Keep out", jpn: "中に入れない、立ち入り禁止", exEng: "The sign on the door said 'Keep Out'.", exJpn: "ドアの標識には「立ち入り禁止」と書かれていた。" },
                { eng: "Lay out", jpn: "設計する、広げる、説明する", exEng: "Let me lay out the plan for you.", exJpn: "あなたに計画を説明させてください。" },
                { eng: "Look out", jpn: "気をつける", exEng: "Look out! There is a car coming.", exJpn: "気をつけて！車が来ています。" },
                { eng: "Make out", jpn: "理解する、判読する", exEng: "I can't make out what the sign says.", exJpn: "標識に何と書いてあるか判読できない。" },
                { eng: "Pick out", jpn: "選ぶ", exEng: "Can you help me pick out a gift?", exJpn: "贈り物を選ぶのを手伝ってくれませんか？" },
                { eng: "Put out", jpn: "火を消す", exEng: "The firefighters put out the fire quickly.", exJpn: "消防士たちは素早く火を消した。" },
                { eng: "Sell out", jpn: "売り切れる", exEng: "The concert tickets will sell out fast.", exJpn: "コンサートのチケットはすぐに売り切れるだろう。" },
                { eng: "Sort out", jpn: "整理する、解決する", exEng: "We need to sort out this problem.", exJpn: "私たちはこの問題を解決する必要がある。" },
                { eng: "Spell out", jpn: "詳しく説明する", exEng: "Do I have to spell out exactly what I mean?", exJpn: "私が言いたいことを正確に詳しく説明しなければなりませんか？" },
                { eng: "Wipe out", jpn: "完全に破壊する", exEng: "The virus could wipe out all our data.", exJpn: "ウイルスは私たちのすべてのデータを破壊する可能性がある。" },
                { eng: "Strike out", jpn: "失敗する、三振する", exEng: "He tried to start a business but struck out.", exJpn: "彼は起業しようとしたが失敗した。" },
                { eng: "Take out", jpn: "取り出す、持ち帰る", exEng: "Let's take out the trash before we leave.", exJpn: "出かける前にゴミを出そう。" },
                { eng: "Try out", jpn: "試してみる", exEng: "I want to try out the new software.", exJpn: "新しいソフトウェアを試してみたい。" },
                { eng: "Wear out", jpn: "疲れ果てさせる、すり減る", exEng: "Walking all day will wear you out.", exJpn: "一日中歩くと疲れ果ててしまう。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "Welcome to Tokyo! Please, do come in. How was your flight?", jpn: "東京へようこそ！どうぞ、お入りください。フライトはいかがでしたか？" },
                { speaker: "B", eng: "It was a bit tiring, but I'm glad to be here. I really appreciate your hospitality.", jpn: "少し疲れましたが、ここに来られて嬉しいです。あなたのおもてなしに本当に感謝しています。" },
                { speaker: "A", eng: "We are so happy you arrived safely. Let me take your coat and luggage.", jpn: "無事に到着されて大変嬉しいです。コートと荷物をお預かりします（私に取らせてください）。" },
                { speaker: "B", eng: "Thank you so much. I need to sort out my schedule for tomorrow.", jpn: "本当にありがとうございます。明日のスケジュールを整理する必要があります。" },
                { speaker: "A", eng: "Of course. Can I get you something to drink while you rest? Would you like some tea?", jpn: "もちろんです。休んでいる間に何かお飲み物をお持ちしましょうか？お茶はいかがですか？" },
                { speaker: "B", eng: "Tea would be wonderful, thank you. Are we meeting the rest of the team later?", jpn: "お茶をいただけると素晴らしいです、ありがとうございます。後で他のチームメンバーにお会いしますか？" },
                { speaker: "A", eng: "Yes! Let me introduce you to the project manager first. Then we will eat out at a nice restaurant.", jpn: "はい！まずはプロジェクトマネージャーにあなたを紹介させてください。それから、素敵なレストランで外食します。" },
                { speaker: "B", eng: "I would love to. I want to familiarize myself with the local culture.", jpn: "ぜひお願いします。地元の文化に慣れ親しみたいと思っています。" },
                { speaker: "A", eng: "We have arranged some delicious Japanese food. Who is coordinating your afternoon briefing tomorrow?", jpn: "美味しい日本食を手配しています。明日の午後のブリーフィングは誰が調整していますか？" },
                { speaker: "B", eng: "I believe Sarah is. Are we taking a tour of the headquarters afterward?", jpn: "サラだと思います。その後、本社の見学ツアーはありますか？" },
                { speaker: "A", eng: "Yes, I will personally escort you around the premises.", jpn: "はい、私が個人的に敷地内をご案内いたします。" },
                { speaker: "B", eng: "Excellent. I am looking forward to a very productive week.", jpn: "素晴らしいですね。非常に生産的な一週間になることを楽しみにしています。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph explaining how you would welcome a new employee to your company.",
                promptJpn: "新入社員を会社でどのように歓迎するかを説明する短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Art of Corporate Hospitality)",
                instruction: "Read this authentic article to learn more about the importance of business hospitality. This section focuses on real-world context rather than recycling lesson grammar.",
                eng: "When international clients visit a company headquarters, making them feel welcome is very important for any business. Traveling for work can be exhausting, especially after a long flight and a big time difference. A warm, professional greeting at reception can quickly reduce stress and help tired visitors feel comfortable. Corporate hospitality begins long before the business meetings start. Providing good service creates a positive environment for future discussions.\n\nClear communication is essential when guests arrive. Giving simple directions and offering help with luggage or coats shows respect. It shows that the host company really cares about the visitor's comfort. Also, a staff member should guide guests around the building so they never feel lost in a large office.\n\nAfter guests rest at their hotel, managers usually share a detailed schedule for the week. Good hosts also arrange friendly social events to build better relationships outside of work. Planning a welcome dinner or a local tour is a great way to create strong personal connections. Building trust begins with the very first handshake. If a company handles the plans well, the business relationship will likely be more successful and long-lasting.",
                jpn: "海外のクライアントが本社を訪れる際、彼らを歓迎されていると感じさせることは、どんなビジネスにとっても非常に重要です。仕事のための移動は、特に長時間のフライトと大きな時差の後は、非常に疲れることがあります。受付での温かくプロフェッショナルな挨拶は、すぐにストレスを減らし、疲れた訪問者を安心させるのに役立ちます。企業のおもてなしは、ビジネス会議が始まるずっと前から始まります。良いサービスを提供することは、将来の話し合いに向けたポジティブな環境を作り出します。\n\nゲストが到着した際、明確なコミュニケーションは不可欠です。簡単な道順を伝えたり、荷物やコートの手助けを申し出ることは、敬意を示します。それは、ホスト企業が訪問者の快適さを本当に気にかけていることを示します。また、広いオフィスで迷子になったと感じさせないように、スタッフがゲストをビル内で案内するべきです。\n\nゲストがホテルで休んだ後、マネージャーは通常、その週の詳細なスケジュールを共有します。良いホストはまた、仕事以外のより良い関係を築くために、フレンドリーな社交イベントを手配します。歓迎の夕食や地元のツアーを計画することは、強固な個人的なつながりを作る素晴らしい方法です。信頼を築くことは、最初の握手から始まります。企業がこれらの計画をうまく処理すれば、ビジネス関係はより成功し、長続きする可能性が高くなります。"
            }
        }
    },{
        id: 3,
        chapter: "Chapter 1: First Meetings",
        type: "opinion",
        title: "Lesson 3: Opinion Exchange - First impressions",
        goal: "Discuss first impressions using multiple adjectives and correct adjective order. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(複数の形容詞や正しい形容詞の語順を使って、第一印象について話し合う。)</span>",
        questions: [
            { eng: "1. What factors influence your first impression of a new colleague?", jpn: "1. 新しい同僚の第一印象にはどのような要素が影響しますか？" },
            { eng: "2. Do you think a person's appearance accurately reflects their personality?", jpn: "2. 人の外見は、その人の性格を正確に反映していると思いますか？" },
            { eng: "3. How important is posture when evaluating someone's confidence?", jpn: "3. 誰かの自信を評価する際、姿勢はどのくらい重要ですか？" },
            { eng: "4. Why do some people try to hide their genuine emotions during a first encounter?", jpn: "4. 初対面の際に、本物の感情を隠そうとする人がいるのはなぜですか？" },
            { eng: "5. Describe a time when your first impression of someone was completely wrong.", jpn: "5. 誰かに対する第一印象が完全に間違っていた時のことを説明してください。" },
            { eng: "6. How can a professional dress code impact the atmosphere of a workplace?", jpn: "6. プロフェッショナルな服装規定は、職場の雰囲気にどのような影響を与えますか？" },
            { eng: "7. What characteristics make a person seem approachable to you?", jpn: "7. どのような特徴が、その人を親しみやすい（話しかけやすい）と思わせますか？" },
            { eng: "8. Do you think expressive people are easier to trust than quiet people?", jpn: "8. 表現力豊かな人は、静かな人よりも信頼しやすいと思いますか？" },
            { eng: "9. How do cultural differences affect our perception of politeness?", jpn: "9. 文化の違いは、礼儀正しさに対する私たちの認識にどう影響しますか？" },
            { eng: "10. In what ways can you improve the first impression you give to others?", jpn: "10. 他人に与える第一印象を改善するには、どのような方法がありますか？" }
        ],
        vocab: [
            { eng: "Appearance", jpn: "外見 / 身なり" },
            { eng: "Evaluate", jpn: "評価する" },
            { eng: "Approachable", jpn: "親しみやすい / 話しかけやすい" },
            { eng: "Expressive", jpn: "表現力豊かな" },
            { eng: "Posture", jpn: "姿勢" },
            { eng: "Sincere", jpn: "誠実な" },
            { eng: "Professional", jpn: "プロフェッショナルな / 専門的な" },
            { eng: "Energetic", jpn: "エネルギッシュな / 活力のある" },
            { eng: "Reliable", jpn: "信頼できる" },
            { eng: "Attitude", jpn: "態度 / 心構え" },
            { eng: "Perceive", jpn: "知覚する / 認識する" },
            { eng: "Judgment", jpn: "判断" },
            { eng: "Deceptive", jpn: "人を欺くような / 当てにならない" },
            { eng: "Characteristic", jpn: "特徴 / 特性" }
        ],
        grammarPoints: [
            {
                point: "1. Adjectives (Multiple points 1): Linking descriptors",
                explanation: "When describing a person with multiple positive or negative traits, link the adjectives using 'and'. This creates a balanced, clear sentence.",
                explanationJpn: "複数の肯定的な、または否定的な特徴で人を描写する場合、形容詞を「and」でつなぎます。これにより、バランスの取れた明確な文が作成されます。",
                examples: [
                    { eng: "Our new manager is sincere and approachable.", jpn: "私たちの新しいマネージャーは誠実で親しみやすいです。" },
                    { eng: "The client was impatient and demanding.", jpn: "そのクライアントはせっかちで要求が多かったです。" }
                ]
            },
            {
                point: "2. Adjectives (Multiple points 2): Order of adjectives",
                explanation: "When placing multiple adjectives before a noun, general opinions always come before specific facts (like size, age, or color).",
                explanationJpn: "名詞の前に複数の形容詞を置く場合、一般的な意見（opinion）は常に具体的な事実（サイズ、年齢、色など）の前に来ます。",
                examples: [
                    { eng: "He showed me his stylish, new phone.", jpn: "彼は私に、彼のスタイリッシュな新しいスマホを見せてくれました。" },
                    { eng: "She is an energetic, young professional.", jpn: "彼女はエネルギッシュで若いプロフェッショナルです。" }
                ]
            }
        ],
        expressions: [
            { eng: "Additionally", jpn: "さらに / 加えて" },
            { eng: "In contrast", jpn: "対照的に" },
            { eng: "Generally speaking", jpn: "一般的に言えば" },
            { eng: "As a rule", jpn: "原則として / 一般的に" },
            { eng: "Overall", jpn: "全体的に" }
        ],
        homework: {
            vocab: [
                { eng: "Set up", jpn: "設立する、準備する", exEng: "We need to set up the conference room.", exJpn: "会議室を準備する必要があります。" },
                { eng: "Give up", jpn: "諦める", exEng: "Do not give up on your career goals.", exJpn: "キャリアの目標を諦めないでください。" },
                { eng: "Take up", jpn: "始める、占める", exEng: "I decided to take up programming recently.", exJpn: "最近、プログラミングを始めることにしました。" },
                { eng: "Bring up", jpn: "話題を持ち出す", exEng: "She brought up a fascinating point during the meeting.", exJpn: "彼女は会議中に魅力的な話題を持ち出しました。" },
                { eng: "Build up", jpn: "築き上げる", exEng: "It takes time to build up trust with clients.", exJpn: "クライアントとの信頼を築き上げるには時間がかかります。" },
                { eng: "Catch up", jpn: "追いつく、近況を報告し合う", exEng: "Let's catch up over lunch next week.", exJpn: "来週のランチで近況を報告し合いましょう。" },
                { eng: "Cheer up", jpn: "元気づける", exEng: "I bought him a coffee to cheer him up.", exJpn: "彼を元気づけるためにコーヒーを買いました。" },
                { eng: "End up", jpn: "最終的に〜になる", exEng: "We ended up choosing the second option.", exJpn: "最終的に私たちは2番目の選択肢を選ぶことになりました。" },
                { eng: "Grow up", jpn: "成長する", exEng: "He grew up in a small town.", exJpn: "彼は小さな町で成長しました。" },
                { eng: "Keep up", jpn: "維持する、ついていく", exEng: "It is hard to keep up with the latest technology.", exJpn: "最新のテクノロジーについていくのは大変です。" },
                { eng: "Look up", jpn: "調べる、見上げる", exEng: "You can look up the definition online.", exJpn: "オンラインでその定義を調べることができます。" },
                { eng: "Make up", jpn: "構成する、作り上げる", exEng: "They make up the majority of our customers.", exJpn: "彼らは私たちの顧客の大部分を構成しています。" },
                { eng: "Pick up", jpn: "拾う、迎えに行く、習得する", exEng: "I managed to pick up some Spanish while traveling.", exJpn: "旅行中にスペイン語を少し習得することができました。" },
                { eng: "Show up", jpn: "現れる", exEng: "He didn't show up for the initial interview.", exJpn: "彼は最初の面接に現れませんでした。" },
                { eng: "Speak up", jpn: "大きな声で話す、意見を言う", exEng: "Please speak up so everyone can hear you.", exJpn: "みんなに聞こえるように大きな声で話してください。" },
                { eng: "Stay up", jpn: "起きている", exEng: "I had to stay up late to finish the report.", exJpn: "レポートを終わらせるために夜遅くまで起きていなければなりませんでした。" },
                { eng: "Turn up", jpn: "音量を上げる、現れる", exEng: "An unexpected problem turned up yesterday.", exJpn: "昨日、予期せぬ問題が現れました。" },
                { eng: "Wake up", jpn: "目を覚ます", exEng: "I wake up early to exercise before work.", exJpn: "仕事の前に運動するため、早く目を覚まします。" },
                { eng: "Warm up", jpn: "準備運動をする、温める", exEng: "We should warm up before the presentation.", exJpn: "プレゼンテーションの前に準備運動（リハーサル）をすべきです。" },
                { eng: "Wrap up", jpn: "締めくくる", exEng: "Let's wrap up this meeting before noon.", exJpn: "正午までにこの会議を締めくくりましょう。" }
            ],
            reading1: {
                title: "Task 2: Reading (Review Model: Assessing Character)",
                instruction: "Read the blog post. Notice how the writer recycles the lesson's vocabulary, grammar (multiple adjectives), and transitional expressions.",
                eng: "Generally speaking, evaluating someone's character based solely on their appearance can be deceptive. In my previous job, I met a manager who seemed strict and demanding. However, my initial perception was completely wrong. He was actually a sincere and approachable leader. Additionally, he always maintained excellent posture, which made him look like a confident, experienced professional. In contrast, another colleague dressed beautifully but lacked a reliable attitude. Overall, I believe that observing how someone interacts with others is more valuable than analyzing their clothes.",
                jpn: "一般的に言えば、外見だけで誰かの性格を評価することは当てにならない場合があります。前の職場で、私は厳格で要求が多そうに見えるマネージャーに会いました。しかし、私の最初の認識は完全に間違っていました。彼は実際には誠実で親しみやすいリーダーでした。さらに、彼は常に素晴らしい姿勢を維持しており、それが彼を自信に満ちた経験豊かなプロフェッショナルに見せていました。対照的に、別の同僚は美しく服を着こなしていましたが、信頼できる態度に欠けていました。全体的に、誰かが他人とどのように交流するかを観察することは、その人の服を分析することよりも価値があると私は信じています。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Have you had a chance to evaluate the new marketing candidate yet?", jpn: "新しいマーケティングの候補者を評価する機会はもうありましたか？" },
                { speaker: "B", eng: "Yes, I interviewed him this morning. He seems very energetic and creative.", jpn: "はい、今朝彼と面接しました。彼はとてもエネルギッシュで創造的に見えます。" },
                { speaker: "A", eng: "That's great. Was his appearance professional?", jpn: "それは素晴らしいですね。彼の外見はプロフェッショナルでしたか？" },
                { speaker: "B", eng: "Absolutely. He wore a stylish, blue suit and maintained great posture.", jpn: "間違いありません。彼はスタイリッシュな青いスーツを着て、素晴らしい姿勢を保っていました。" },
                { speaker: "A", eng: "Posture is crucial. It shows that a person is confident and reliable.", jpn: "姿勢は極めて重要です。それはその人が自信に満ち、信頼できることを示します。" },
                { speaker: "B", eng: "I agree. Additionally, his communication style was very expressive.", jpn: "同感です。さらに、彼のコミュニケーションスタイルは非常に表現力豊かでした。" },
                { speaker: "A", eng: "Did he seem approachable? We need someone who works well in a team.", jpn: "彼は親しみやすそうでしたか？チームでうまく働ける人が必要なのです。" },
                { speaker: "B", eng: "Yes, he smiled often and gave sincere answers. He didn't hesitate at all.", jpn: "はい、彼はよく微笑み、誠実な回答をしていました。全くためらいがありませんでした。" },
                { speaker: "A", eng: "In contrast, the previous candidate seemed a bit deceptive, didn't she?", jpn: "対照的に、前の候補者は少し当てにならないように見えましたよね？" },
                { speaker: "B", eng: "Yes. Her attitude was polite, but her responses felt rehearsed.", jpn: "ええ。彼女の態度は礼儀正しかったですが、回答がリハーサルされたもののように感じました。" },
                { speaker: "A", eng: "Overall, do you think we should offer this new candidate the position?", jpn: "全体的に見て、この新しい候補者に役職をオファーすべきだと思いますか？" },
                { speaker: "B", eng: "Generally speaking, I highly recommend him. He left a fantastic impression.", jpn: "一般的に言えば、彼を強くお勧めします。彼は素晴らしい印象を残しました。" },
                { speaker: "A", eng: "Excellent. Let's set up a final meeting to wrap up the hiring process.", jpn: "素晴らしい。採用プロセスを締めくくるために最終会議を設定しましょう。" },
                { speaker: "B", eng: "I will bring up the contract details during the meeting. I'll send you the invite now.", jpn: "会議中に契約の詳細を持ち出しますね。今すぐ招待状を送ります。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: Describe a person you respect using multiple adjectives. What makes their appearance or attitude stand out?",
                promptJpn: "「あなたが尊敬する人物を、複数の形容詞を使って説明してください。その人の外見や態度の何が際立っていますか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Halo Effect in Professional Environments)",
                instruction: "Read this authentic article to learn more about the psychology of perception. This section focuses on real-world context rather than recycling lesson grammar.",
                eng: "When you walk into a professional environment, your appearance and behavior immediately begin broadcasting messages to the people around you. Psychologists often refer to this phenomenon as the \"halo effect.\" The halo effect occurs when our overall impression of a person influences how we feel and think about their specific character traits. For example, if a manager encounters an employee who is wearing a clean, professional suit and maintaining excellent posture, the manager is likely to assume that the employee is also reliable, intelligent, and hardworking. This cognitive bias demonstrates why professional appearance is incredibly vital in the corporate world.\n\nHowever, judging someone exclusively on their initial presentation can sometimes be deceptive. A candidate might perform perfectly during a short interview, demonstrating an energetic and expressive attitude, but struggle with actual daily tasks. Conversely, a quiet and seemingly unapproachable programmer might possess exceptional coding skills and genuine dedication to the company. Relying solely on the halo effect can lead human resources departments to make poor hiring decisions. Therefore, while a positive first impression creates a strong foundation, professionals must continuously observe performance to accurately evaluate their colleagues.\n\nTo navigate these social dynamics successfully, individuals should strive to align their outward appearance with their internal competencies. Dressing appropriately for your industry shows respect for your environment and helps you establish credibility instantly. Furthermore, cultivating a sincere and approachable demeanor ensures that your colleagues feel comfortable cooperating with you. By understanding how human perception works, you can strategically manage the impressions you project, ensuring that your valuable skills are recognized and respected by your peers.",
                jpn: "プロフェッショナルな環境に足を踏み入れると、あなたの外見や行動はすぐに周囲の人々へメッセージを発信し始めます。心理学者はしばしばこの現象を「ハロー効果」と呼びます。ハロー効果とは、ある人物に対する私たちの全体的な印象が、その人の特定の性格的特徴について私たちがどう感じ、どう考えるかに影響を与えるときに発生します。例えば、マネージャーが清潔でプロフェッショナルなスーツを着て素晴らしい姿勢を保っている従業員に遭遇した場合、マネージャーはその従業員が信頼でき、知的で、勤勉でもあると思い込む可能性が高くなります。この認知バイアスは、企業の世界においてプロフェッショナルな外見が信じられないほど重要である理由を示しています。\n\nしかし、最初の見せ方だけで誰かを判断することは、時として当てにならない場合があります。候補者は短い面接の中で完璧なパフォーマンスを見せ、エネルギッシュで表現豊かな態度を示すかもしれませんが、実際の日常業務には苦労するかもしれません。逆に、静かで一見親しみにくそうなプログラマーが、並外れたコーディングスキルと会社への純粋な献身を持っていることもあります。ハロー効果だけに頼ることは、人事部門が不十分な採用決定を下す原因になり得ます。したがって、肯定的な第一印象は強力な基盤を作りますが、プロフェッショナルは同僚を正確に評価するために継続的にパフォーマンスを観察しなければなりません。\n\nこれらの社会的な力学をうまく乗り切るために、個人は自分の外見と内面の能力を一致させるよう努めるべきです。業界にふさわしい服装をすることは、環境への敬意を示し、即座に信頼性を確立するのに役立ちます。さらに、誠実で親しみやすい態度を育むことで、同僚があなたと快適に協力できるようになります。人間の知覚がどのように機能するかを理解することで、自分が与える印象を戦略的に管理し、自分の価値あるスキルが同僚に認識され、尊重されることを確実にすることができるのです。"
            }
        }
    },
    {
        id: 4,
        chapter: "Chapter 1: First Meetings",
        type: "transactional",
        title: "Lesson 4: How to exchange contact details",
        goal: "Ask for contact information politely and offer various networking choices. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(連絡先情報を丁寧に尋ね、様々なネットワーキングの選択肢を提案する。)</span>",
        vocab: [
            { eng: "Contact", jpn: "連絡先 / 連絡する" },
            { eng: "Details", jpn: "詳細" },
            { eng: "Network", jpn: "人脈 / ネットワーク" },
            { eng: "Connect", jpn: "つながる / 接続する" },
            { eng: "Profile", jpn: "プロフィール" },
            { eng: "Convenient", jpn: "便利な / 都合の良い" },
            { eng: "Exchange", jpn: "交換する" },
            { eng: "Business card", jpn: "名刺" },
            { eng: "Platform", jpn: "プラットフォーム" },
            { eng: "Application", jpn: "アプリケーション" },
            { eng: "Preferred", jpn: "好ましい / 希望の" },
            { eng: "Reach", jpn: "連絡を取る" },
            { eng: "Update", jpn: "最新情報 / 更新する" },
            { eng: "Inform", jpn: "知らせる" }
        ],
        dialogue: [
            { speaker: "A", eng: "It was wonderful speaking with you today. <span class='swappable'>Could you possibly share your contact details?</span>", jpn: "今日はお話しできて素晴らしかったです。あなたの連絡先を教えていただくことは可能でしょうか？" },
            { speaker: "B", eng: "Of course. <span class='swappable'>Would you mind connecting on LinkedIn?</span>", jpn: "もちろんです。LinkedInでつながってもよろしいですか？" },
            { speaker: "A", eng: "That works perfectly. <span class='swappable'>Is email also a convenient way to reach you?</span>", jpn: "それで完璧です。メールもあなたに連絡を取るのに便利な方法ですか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>my preferred platform for daily updates is email.</span>", jpn: "はい、日々の最新情報について私が希望するプラットフォームはメールです。" },
            { speaker: "A", eng: "Excellent. <span class='swappable'>Let me give you my business card as well.</span>", jpn: "素晴らしい。私の名刺も渡させてください。" },
            { speaker: "B", eng: "Thank you. <span class='swappable'>I will inform you when I send the digital invitation.</span>", jpn: "ありがとうございます。デジタルの招待状を送る際にお知らせしますね。" }
        ],
        expressions: [
            { category: "1. Asking indirectly (間接的に尋ねる)", options: ["Could you possibly share your contact details?", "I was wondering if we could exchange emails.", "Would it be possible to get your business card?"] },
            { category: "2. Asking for permission (許可を求める)", options: ["Would you mind connecting on LinkedIn?", "Do you mind if I send you a quick message later?", "Would it be okay to call you tomorrow?"] },
            { category: "3. Confirming convenience (都合を確認する)", options: ["Is email also a convenient way to reach you?", "What is the best way to contact you?", "Are you reachable via this messaging application?"] },
            { category: "4. Stating preferences (好みを述べる)", options: ["My preferred platform for daily updates is email.", "I usually use this networking application.", "I prefer discussing details over a phone call."] },
            { category: "5. Offering items (物を提供する)", options: ["Let me give you my business card as well.", "Here is a link to my professional profile.", "I can forward my details to your assistant."] },
            { category: "6. Promising future action (将来の行動を約束する)", options: ["I will inform you when I send the digital invitation.", "I will reach out to you next Monday.", "I will update you as soon as possible."] }
        ],
        grammarPoints: [
            {
                point: "1. Modals: Polite requests (Could you possibly...)",
                explanation: "To make a request sound extremely polite and unassertive in business, add 'possibly' after 'Could you' or 'Could I'.",
                explanationJpn: "ビジネスで要求を極めて丁寧に、かつ控えめに聞こえさせるには、「Could you」や「Could I」の後に「possibly」を加えます。",
                examples: [
                    { eng: "Could you possibly share your contact details?", jpn: "連絡先を教えていただくことは可能でしょうか？" },
                    { eng: "Could I possibly borrow your pen for a moment?", jpn: "少しの間、ペンをお借りすることは可能でしょうか？" }
                ]
            },
            {
                point: "2. Modals: Asking permission (Would you mind...)",
                explanation: "Use 'Would you mind' followed by a gerund (-ing verb) to formally ask for permission. Note: Answering 'No' means 'I do not mind' (Yes, you can do it).",
                explanationJpn: "「Would you mind」の後に動名詞（-ing形の動詞）を続けて、正式に許可を求めます。注意：「No」と答えることは「気にしません（はい、やっていいですよ）」を意味します。",
                examples: [
                    { eng: "Would you mind connecting on LinkedIn?", jpn: "LinkedInでつながってもよろしいですか（気にしませんか）？" },
                    { eng: "Would you mind exchanging business cards?", jpn: "名刺を交換してもよろしいですか？" }
                ]
            }
        ],
        clickingGames: [
            { prompt: "あなたの連絡先を教えていただくことは可能でしょうか？", target: "Could you possibly share your contact details?", words: ["Could", "you", "possibly", "share", "your", "contact", "details?"] },
            { prompt: "LinkedInでつながってもよろしいですか？", target: "Would you mind connecting on LinkedIn?", words: ["Would", "you", "mind", "connecting", "on", "LinkedIn?"] },
            { prompt: "メールも便利な連絡方法ですか？", target: "Is email a convenient way to reach you?", words: ["Is", "email", "a", "convenient", "way", "to", "reach", "you?"] },
            { prompt: "私が希望するプラットフォームはメールです。", target: "My preferred platform is email.", words: ["My", "preferred", "platform", "is", "email."] },
            { prompt: "私の名刺も渡させてください。", target: "Let me give you my business card.", words: ["Let", "me", "give", "you", "my", "business", "card."] }
        ],
        dropdownGames: [
            { before: "Could you", options: ["possibly", "probably", "mostly"], answer: "possibly", after: " send me an email tomorrow?" },
            { before: "Would you", options: ["mind", "care", "like"], answer: "mind", after: " exchanging business cards right now?" },
            { before: "What is the most", options: ["convenient", "convenience", "convene"], answer: "convenient", after: " time to call you?" },
            { before: "My", options: ["preferred", "prefer", "preference"], answer: "preferred", after: " application for chatting is Slack." },
            { before: "I will", options: ["inform", "information", "informative"], answer: "inform", after: " you when the meeting starts." },
            { before: "Is it okay if I", options: ["reach", "reach out", "reaching"], answer: "reach", after: " you by phone next week?" },
            { before: "Let me", options: ["give", "gave", "giving"], answer: "give", after: " you a link to my professional profile." },
            { before: "I was", options: ["wondering", "wonder", "wondered"], answer: "wondering", after: " if we could connect online." },
            { before: "Would it be", options: ["possible", "possibly", "possibility"], answer: "possible", after: " to get your contact details?" },
            { before: "Would you mind", options: ["updating", "update", "updated"], answer: "updating", after: " me on the project status?" }
        ],
        roleplay: {
            a: "You just finished a great business meeting. Politely ask your partner for their contact details using 'Could you possibly...'. Ask if they use a specific platform like LinkedIn. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは素晴らしいビジネス会議を終えたところです。「Could you possibly...」を使って、パートナーの連絡先を丁寧に尋ねてください。LinkedInなどの特定のプラットフォームを使っているか尋ねてください。)</span>",
            b: "Agree to share your details. Explain what your preferred method of contact is (e.g., email or a messaging application). Ask for permission to send them a message using 'Would you mind...'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(連絡先を共有することに同意してください。あなたが希望する連絡方法（メールやメッセージングアプリなど）は何か説明してください。「Would you mind...」を使って、彼らにメッセージを送ってもよいか許可を求めてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Put on", jpn: "着る、身につける", exEng: "Please put on your formal suit for the event.", exJpn: "イベントにはフォーマルなスーツを着用してください。" },
                { eng: "Take on", jpn: "引き受ける、雇う", exEng: "Our company will take on three new developers.", exJpn: "当社は3人の新しい開発者を雇い入れます。" },
                { eng: "Carry on", jpn: "続ける", exEng: "We must carry on with the project despite the delay.", exJpn: "遅延にもかかわらず、私たちはプロジェクトを続けなければなりません。" },
                { eng: "Hold on", jpn: "待つ、持ちこたえる", exEng: "Please hold on for a moment while I check the file.", exJpn: "ファイルを確認する間、少々お待ちください。" },
                { eng: "Keep on", jpn: "〜し続ける", exEng: "If you keep on practicing, you will improve rapidly.", exJpn: "練習し続ければ、急速に上達するでしょう。" },
                { eng: "Go on", jpn: "続く、起こる", exEng: "The meeting will go on until five o'clock.", exJpn: "会議は5時まで続きます。" },
                { eng: "Call on", jpn: "訪問する、要求する", exEng: "The manager may call on you to present the data.", exJpn: "マネージャーはデータを提供するためにあなたを指名する（要求する）かもしれません。" },
                { eng: "Count on", jpn: "頼る、当てにする", exEng: "You can count on me to finish the report on time.", exJpn: "時間通りにレポートを終わらせるよう私を頼って（当てにして）ください。" },
                { eng: "Depend on", jpn: "〜による、依存する", exEng: "The final budget will depend on the client's decision.", exJpn: "最終的な予算はクライアントの決定によります。" },
                { eng: "Focus on", jpn: "集中する", exEng: "We need to focus on our marketing strategy this quarter.", exJpn: "今四半期はマーケティング戦略に集中する必要があります。" },
                { eng: "Insist on", jpn: "強く要求する、主張する", exEng: "The client insists on a completely flawless design.", exJpn: "クライアントは完全に無傷（完璧）なデザインを強く要求しています。" },
                { eng: "Log on", jpn: "ログインする", exEng: "You must log on to the secure network first.", exJpn: "まず安全なネットワークにログインしなければなりません。" },
                { eng: "Pass on", jpn: "伝える、譲る", exEng: "Could you pass on this message to the director?", exJpn: "このメッセージをディレクターに伝えていただけますか？" },
                { eng: "Rely on", jpn: "頼る、信頼する", exEng: "We rely on accurate data to make business decisions.", exJpn: "私たちはビジネスの決定を下すために正確なデータに頼っています。" },
                { eng: "Turn on", jpn: "電源を入れる", exEng: "Do not forget to turn on the projector before the presentation.", exJpn: "プレゼンテーションの前にプロジェクターの電源を入れるのを忘れないでください。" },
                { eng: "Work on", jpn: "取り組む", exEng: "I will work on fixing the software bugs tomorrow.", exJpn: "明日、ソフトウェアのバグ修正に取り組みます。" },
                { eng: "Try on", jpn: "試着する", exEng: "I need to try on this jacket to see if it fits.", exJpn: "サイズが合うか確認するためにこのジャケットを試着する必要があります。" },
                { eng: "Catch on", jpn: "流行する、理解する", exEng: "The new social media application is starting to catch on.", exJpn: "その新しいソーシャルメディアアプリは流行し始めています。" },
                { eng: "Get on", jpn: "乗る、仲良くやる", exEng: "We need to get on the train before it departs.", exJpn: "出発する前に電車に乗らなければなりません。" },
                { eng: "Move on", jpn: "次に進む", exEng: "After solving that issue, let's move on to the next topic.", exJpn: "その問題を解決した後、次の話題に進みましょう。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "It was wonderful speaking with you today at the conference.", jpn: "本日はカンファレンスでお話しできて素晴らしかったです。" },
                { speaker: "B", eng: "I agree. It is always great to expand my professional network.", jpn: "同感です。プロフェッショナルな人脈を広げるのは常に素晴らしいことです。" },
                { speaker: "A", eng: "Could you possibly share your contact details with me?", jpn: "連絡先を私に教えていただくことは可能でしょうか？" },
                { speaker: "B", eng: "Of course. Would you mind connecting on LinkedIn?", jpn: "もちろんです。LinkedInでつながってもよろしいですか？" },
                { speaker: "A", eng: "Not at all. I will look up your profile right away.", jpn: "全く構いません。すぐにあなたのプロフィールを調べます。" },
                { speaker: "B", eng: "Excellent. Is email also a convenient way to reach you during the week?", jpn: "素晴らしい。平日に連絡を取るにはメールも便利な方法ですか？" },
                { speaker: "A", eng: "Yes, I check my inbox frequently. However, my preferred platform for quick updates is Slack.", jpn: "はい、頻繁に受信トレイをチェックします。しかしながら、素早い最新情報について私が希望するプラットフォームはSlackです。" },
                { speaker: "B", eng: "I see. I usually rely on email for formal requests.", jpn: "なるほど。私は通常、正式な依頼にはメールを頼りにしています。" },
                { speaker: "A", eng: "That makes sense. Let me give you my physical business card as well.", jpn: "それは理にかなっていますね。私の物理的な名刺も渡させてください。" },
                { speaker: "B", eng: "Thank you very much. I will pass on your details to my manager.", jpn: "どうもありがとうございます。あなたの詳細をマネージャーに伝えておきます。" },
                { speaker: "A", eng: "I appreciate that. Could you possibly inform me when your team makes a decision?", jpn: "感謝します。あなたのチームが決定を下した時にお知らせいただくことは可能でしょうか？" },
                { speaker: "B", eng: "Definitely. I will update you as soon as we finish the review.", jpn: "間違いありません。レビューが終わり次第、最新情報をお知らせします。" },
                { speaker: "A", eng: "Perfect. I look forward to working on this project together.", jpn: "完璧です。このプロジェクトに一緒に取り組めるのを楽しみにしています。" },
                { speaker: "B", eng: "Me too. Have a safe trip back to the headquarters.", jpn: "私もです。本社まで気をつけてお帰りください。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: What is your preferred platform for professional networking, and why?",
                promptJpn: "「あなたが仕事上の人脈作りに希望するプラットフォームは何ですか？またそれはなぜですか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Evolution of Business Networking)",
                instruction: "Read this authentic article to learn more about professional networking. This section provides real-world context for B1 learners.",
                eng: "Exchanging contact details has always been a fundamental part of the business world. For decades, the paper business card was the most important tool for professionals. When two people met at a conference, handing out a nicely printed card was the standard way to establish a connection. Today, however, the landscape of professional networking has evolved significantly. While business cards are still useful in many cultures, digital platforms have become the preferred method for maintaining relationships.\n\nApplications like LinkedIn allow professionals to share much more than just a phone number and an email address. A comprehensive digital profile showcases a person's entire work history, their specific skills, and endorsements from previous colleagues. Consequently, many modern workers prefer to connect online. When you meet someone new, it is very common to ask, \"Would you mind connecting on LinkedIn?\" This approach is not only convenient, but it also ensures that you will not lose their contact information if you accidentally misplace a small piece of paper.\n\nFurthermore, the way we follow up has changed. In the past, people relied heavily on formal phone calls to propose new projects. Nowadays, communication is much faster. After a brief encounter, you might simply send a quick message to inform the other person about a relevant opportunity. However, it is vital to respect personal boundaries. Some individuals still prefer strict email communication for official business matters. Therefore, asking \"Is this a convenient way to reach you?\" demonstrates excellent professional etiquette and helps build lasting trust.",
                jpn: "連絡先を交換することは、常にビジネスの世界における基本的な部分でした。何十年もの間、紙の名刺はプロフェッショナルにとって最も重要なツールでした。2人がカンファレンスで会ったとき、きれいに印刷された名刺を配ることが、つながりを築く標準的な方法でした。しかし今日、プロフェッショナルな人脈作りの状況は大きく進化しました。多くの文化において名刺はいまだに有用ですが、デジタルプラットフォームが関係を維持するための希望される方法となっています。\n\nLinkedInのようなアプリケーションは、プロフェッショナルが単なる電話番号やメールアドレス以上のものを共有することを可能にします。包括的なデジタルプロフィールは、その人の全職歴、特定のスキル、そして以前の同僚からの推薦を披露します。その結果、多くの現代の労働者はオンラインでつながることを好みます。新しい人に会ったとき、「LinkedInでつながってもよろしいですか？」と尋ねるのは非常に一般的です。このアプローチは便利であるだけでなく、小さな紙切れをうっかり紛失してしまっても、相手の連絡先情報を失うことがないことを保証してくれます。\n\nさらに、フォローアップの方法も変化しました。過去には、新しいプロジェクトを提案するために、人々はフォーマルな電話に大きく依存していました。最近では、コミュニケーションはずっと速くなっています。短い出会いの後、関連する機会について相手に知らせるために、単に短いメッセージを送るかもしれません。しかしながら、個人の境界線を尊重することは極めて重要です。公式なビジネスの事柄については、いまだに厳格なメールでのコミュニケーションを好む人もいます。したがって、「これはあなたに連絡を取るのに便利な方法ですか？」と尋ねることは、優れたプロフェッショナルとしてのエチケットを示し、長続きする信頼を築くのに役立ちます。"
            }
        }
    },
    {
        id: 5,
        chapter: "Chapter 1: First Meetings",
        type: "opinion",
        title: "Lesson 5: Opinion Exchange - Office relationships",
        goal: "Discuss workplace harmony and describe habits using specific adverbs of frequency. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(職場の調和について話し合い、特定の頻度の副詞を使って習慣を説明する。)</span>",
        questions: [
            { eng: "1. How often do you collaborate with colleagues from different departments?", jpn: "1. どのくらいの頻度で異なる部署の同僚と協力しますか？" },
            { eng: "2. Do you think it is possible to be close friends with your manager?", jpn: "2. マネージャーと親友になることは可能だと思いますか？" },
            { eng: "3. What is the best way to resolve tension between two coworkers?", jpn: "3. 2人の同僚間の緊張を解決する最良の方法は何ですか？" },
            { eng: "4. Why is finding a compromise so important in team projects?", jpn: "4. チームプロジェクトにおいて妥協点を見つけることがそれほど重要なのはなぜですか？" },
            { eng: "5. Have you ever had a mentor who significantly guided your career?", jpn: "5. あなたのキャリアを大いに導いてくれたメンターを持ったことはありますか？" },
            { eng: "6. How do frequent team-building events affect office relationships?", jpn: "6. 頻繁なチームビルディングイベントはオフィスの人間関係にどのような影響を与えますか？" },
            { eng: "7. Is it better to address a conflict immediately or wait until people calm down?", jpn: "7. 対立にはすぐに対処する方が良いですか、それとも人々が落ち着くまで待つ方が良いですか？" },
            { eng: "8. How often do you feel stressed by a lack of communication at work?", jpn: "8. 職場でのコミュニケーション不足によって、どのくらいの頻度でストレスを感じますか？" },
            { eng: "9. What qualities are necessary to build a strong bond with your team?", jpn: "9. チームとの強い絆を築くために必要な資質は何ですか？" },
            { eng: "10. Should companies encourage employees to socialize after working hours?", jpn: "10. 企業は就業時間後に従業員が交流することを奨励すべきですか？" }
        ],
        vocab: [
            { eng: "Collaborate", jpn: "協力する / 共同作業する" },
            { eng: "Tension", jpn: "緊張 / 対立" },
            { eng: "Resolve", jpn: "解決する" },
            { eng: "Compromise", jpn: "妥協 / 妥協する" },
            { eng: "Mentor", jpn: "メンター / 指導者" },
            { eng: "Bond", jpn: "絆 / 結びつき" },
            { eng: "Conflict", jpn: "対立 / 衝突" },
            { eng: "Harmony", jpn: "調和" },
            { eng: "Appreciate", jpn: "感謝する / 評価する" },
            { eng: "Encourage", jpn: "励ます / 促進する" },
            { eng: "Frequent", jpn: "頻繁な" },
            { eng: "Significant", jpn: "重要な / かなりの" },
            { eng: "Address", jpn: "対処する / 取り組む" },
            { eng: "Colleague", jpn: "同僚" }
        ],
        grammarPoints: [
            {
                point: "1. Adverbs of Frequency: Mid/Front position",
                explanation: "Adverbs like 'usually', 'often', and 'sometimes' describe how frequently an action happens. You can place them before the main verb, or at the front of the sentence for emphasis.",
                explanationJpn: "「usually」「often」「sometimes」などの副詞は、行動がどのくらいの頻度で起こるかを説明します。これらは主動詞の前、あるいは強調のために文の先頭に置くことができます。",
                examples: [
                    { eng: "Usually, I work until 5 PM.", jpn: "たいてい、私は午後5時まで働きます。" },
                    { eng: "Sometimes, we collaborate with the design team.", jpn: "時々、私たちはデザインチームと協力します。" }
                ]
            },
            {
                point: "2. Adverbs of Frequency: After the 'be' verb",
                explanation: "When a sentence uses the 'be' verb (am, is, are, was, were), the frequency adverb MUST be placed exactly after the 'be' verb, not before it.",
                explanationJpn: "文で「be動詞」（am, is, are, was, were）を使用する場合、頻度の副詞は必ずbe動詞の直後に置かなければならず、前には置きません。",
                examples: [
                    { eng: "I am always happy to help my colleagues.", jpn: "同僚を助けるのはいつでも嬉しいです。" },
                    { eng: "She is rarely late for morning meetings.", jpn: "彼女が朝の会議に遅れることはめったにありません。" }
                ]
            }
        ],
        expressions: [
            { eng: "Specifically", jpn: "具体的に言うと" },
            { eng: "Ordinarily", jpn: "普通は / 通常は" },
            { eng: "Due to", jpn: "〜が原因で / 〜のために" },
            { eng: "At the same time", jpn: "同時に" },
            { eng: "To be honest", jpn: "正直に言うと" }
        ],
        homework: {
            vocab: [
                { eng: "Take off", jpn: "離陸する、脱ぐ、急に成功する", exEng: "The new app really took off last month.", exJpn: "その新しいアプリは先月本当に急に成功しました。" },
                { eng: "Put off", jpn: "延期する", exEng: "We had to put off the meeting until tomorrow.", exJpn: "私たちは会議を明日まで延期しなければなりませんでした。" },
                { eng: "Call off", jpn: "中止する", exEng: "They decided to call off the event due to rain.", exJpn: "雨のため、彼らはイベントを中止することに決めました。" },
                { eng: "Turn off", jpn: "電源を切る", exEng: "Please turn off your computer before leaving.", exJpn: "帰る前にコンピューターの電源を切ってください。" },
                { eng: "Show off", jpn: "見せびらかす", exEng: "He likes to show off his technical skills.", exJpn: "彼は自分の技術的スキルを見せびらかすのが好きです。" },
                { eng: "Pay off", jpn: "報われる、完済する", exEng: "All your hard work will pay off eventually.", exJpn: "あなたのすべての努力は最終的に報われるでしょう。" },
                { eng: "Set off", jpn: "出発する、引き起こす", exEng: "We will set off for the conference early in the morning.", exJpn: "私たちは朝早くカンファレンスに向けて出発します。" },
                { eng: "Drop off", jpn: "降ろす、減る", exEng: "Sales usually drop off during the winter holidays.", exJpn: "売上は通常、冬休みの間に減ります。" },
                { eng: "Cut off", jpn: "切り離す、遮断する", exEng: "The storm cut off our internet connection.", exJpn: "嵐が私たちのインターネット接続を遮断しました。" },
                { eng: "Lay off", jpn: "解雇する", exEng: "The company had to lay off twenty employees.", exJpn: "会社は20人の従業員を解雇しなければなりませんでした。" },
                { eng: "Go off", jpn: "鳴る、爆発する、悪くなる", exEng: "My alarm clock goes off at 6 AM every day.", exJpn: "私の目覚まし時計は毎日午前6時に鳴ります。" },
                { eng: "Log off", jpn: "ログオフする", exEng: "Remember to log off from the server securely.", exJpn: "サーバーから安全にログオフすることを忘れないでください。" },
                { eng: "Break off", jpn: "関係を断つ、急に話をやめる", exEng: "They decided to break off their business partnership.", exJpn: "彼らはビジネスの提携関係を断つことを決定しました。" },
                { eng: "Sign off", jpn: "承認する、放送を終える", exEng: "The manager needs to sign off on this budget.", exJpn: "マネージャーはこの予算を承認する必要があります。" },
                { eng: "Tell off", jpn: "叱る", exEng: "The boss told him off for being late again.", exJpn: "上司は彼がまた遅刻したことで彼を叱りました。" },
                { eng: "Wear off", jpn: "次第に消える", exEng: "The excitement of the new job will wear off soon.", exJpn: "新しい仕事の興奮はすぐに消えるでしょう。" },
                { eng: "Ward off", jpn: "追い払う、防ぐ", exEng: "We updated the firewall to ward off cyber attacks.", exJpn: "サイバー攻撃を防ぐためにファイアウォールを更新しました。" },
                { eng: "Kick off", jpn: "開始する", exEng: "We will kick off the marketing campaign next Monday.", exJpn: "来週の月曜日にマーケティングキャンペーンを開始します。" },
                { eng: "Brush off", jpn: "無視する、軽くあしらう", exEng: "He tried to brush off the customer's complaint.", exJpn: "彼は顧客の苦情を軽くあしらおうとしました。" },
                { eng: "Pull off", jpn: "困難なことをやってのける", exEng: "I am amazed that our team managed to pull off this project.", exJpn: "私たちのチームがこのプロジェクトをなんとかやってのけたことに驚いています。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "Usually, I work alone, but this new project requires lots of teamwork.", jpn: "たいてい私は一人で働きますが、この新しいプロジェクトにはたくさんのチームワークが必要です。" },
                { speaker: "B", eng: "I understand. I am always happy to collaborate with different departments.", jpn: "わかります。私はいつも喜んで異なる部署と協力しますよ。" },
                { speaker: "A", eng: "To be honest, I feel a little tension with the design team.", jpn: "正直に言うと、デザインチームとの間に少し緊張を感じているんです。" },
                { speaker: "B", eng: "Why is that? Are they frequently missing deadlines?", jpn: "それはなぜですか？彼らは頻繁に締め切りを逃しているのですか？" },
                { speaker: "A", eng: "Not exactly. They are rarely late, but they refuse to compromise on features.", jpn: "そうではありません。彼らが遅れることはめったにありませんが、機能について妥協することを拒否するのです。" },
                { speaker: "B", eng: "I see. Ordinarily, the best way to resolve this is a face-to-face meeting.", jpn: "なるほど。普通は、これを解決する最良の方法は対面での会議ですね。" },
                { speaker: "A", eng: "You're right. Sometimes, emails cause too many misunderstandings.", jpn: "その通りですね。時々、メールは多すぎる誤解を引き起こします。" },
                { speaker: "B", eng: "Exactly. Specifically, you should address the conflict before it grows.", jpn: "まさに。具体的に言うと、対立が大きくなる前に対処すべきです。" },
                { speaker: "A", eng: "I will set up a meeting tomorrow. Thanks to your advice, I feel better.", jpn: "明日会議を設定します。あなたのアドバイスのおかげで気分が良くなりました。" },
                { speaker: "B", eng: "I am glad to help. Maintaining harmony is crucial for a strong bond.", jpn: "お役に立てて嬉しいです。強い絆のためには調和を維持することが極めて重要です。" },
                { speaker: "A", eng: "Yes, I agree. At the same time, we must ensure the product is good.", jpn: "はい、同感です。同時に、私たちは製品が良いものであることを保証しなければなりません。" },
                { speaker: "B", eng: "Of course. If we encourage open communication, the project will pull off perfectly.", jpn: "もちろんです。オープンなコミュニケーションを奨励すれば、プロジェクトは完璧に成功する（やってのけられる）でしょう。" },
                { speaker: "A", eng: "I will keep that in mind. Let's wrap up for today.", jpn: "それを覚えておきます。今日はここで締めくくりましょう。" },
                { speaker: "B", eng: "Sounds good. See you tomorrow morning.", jpn: "いいですね。また明日の朝。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: What is the most effective way to maintain harmony in the office?",
                promptJpn: "「オフィスで調和を維持する最も効果的な方法は何ですか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (Navigating Workplace Relationships)",
                instruction: "Read this authentic article to learn more about workplace dynamics. This section provides real-world context for B1 learners.",
                eng: "Building strong office relationships is one of the most significant challenges in any professional environment. Employees spend a massive portion of their lives at work, meaning that workplace harmony directly impacts both mental health and company productivity. When coworkers collaborate smoothly, projects advance quickly and stress levels remain low. However, tension and conflict are sometimes inevitable when individuals with different personalities and goals must interact daily.\n\nUsually, the root cause of workplace tension is a lack of clear communication. For example, a developer might feel frustrated if a project manager frequently changes deadlines without explaining the reason. If these small frustrations are not addressed, they can grow into major conflicts that damage the team's bond. Human resources experts always suggest resolving issues immediately through open, respectful dialogue. It is crucial to remember that finding a compromise is not a sign of weakness; rather, it is a professional skill that keeps projects moving forward.\n\nMentorship also plays a vital role in maintaining a positive atmosphere. Junior employees who have a reliable mentor often feel more confident and less isolated. A good mentor encourages growth and provides guidance during difficult transitions. Companies that actively encourage these supportive relationships usually see a significant drop in employee turnover. Ultimately, while you do not need to be best friends with everyone in your department, cultivating an environment of mutual respect and appreciation will ensure that your career continues to thrive.",
                jpn: "強固なオフィスの人間関係を築くことは、あらゆるプロフェッショナルな環境において最も重要な課題の1つです。従業員は人生の大部分を職場で過ごすため、職場の調和はメンタルヘルスと会社の生産性の両方に直接影響を与えます。同僚がスムーズに協力すれば、プロジェクトは迅速に進み、ストレスレベルは低く保たれます。しかし、異なる性格や目標を持つ個人が日常的に交流しなければならない場合、緊張や対立は時に避けられないものです。\n\n通常、職場の緊張の根本的な原因は明確なコミュニケーションの欠如です。例えば、プロジェクトマネージャーが理由を説明せずに頻繁に締め切りを変更すると、開発者はフラストレーションを感じるかもしれません。これらの小さな不満に対処しないと、チームの絆を破壊する大きな対立へと発展する可能性があります。人事の専門家は常に、オープンで敬意を持った対話を通じて問題を直ちに解決することを提案しています。妥協点を見つけることは弱さの表れではなく、むしろプロジェクトを前進させ続けるためのプロフェッショナルなスキルであることを覚えておくことが極めて重要です。\n\nメンターシップもまた、前向きな雰囲気を維持する上で不可欠な役割を果たします。頼りになるメンターを持つ若手従業員は、しばしばより自信を持ち、孤立感を感じにくくなります。優れたメンターは成長を促し、困難な移行期に指導を提供します。これらの協力的な関係を積極的に奨励する企業は、通常、従業員の離職率の大幅な低下を経験します。最終的に、部署の全員と親友になる必要はありませんが、相互の尊重と感謝の環境を育むことで、あなたのキャリアが繁栄し続けることが保証されるでしょう。"
            }
        }
    },{
        id: 6,
        chapter: "Chapter 1: First Meetings",
        type: "casestudy",
        title: "Lesson 6: Case Study - The Disastrous Welcome",
        goal: "Analyze a complex business failure, discuss regrets using past modals, and propose a multi-step solution. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(複雑なビジネスの失敗を分析し、過去の法助動詞を使って後悔について話し合い、複数ステップの解決策を提案する。)</span>",
        vocab: [
            { eng: "Apologize", jpn: "謝罪する" },
            { eng: "Offend", jpn: "怒らせる / 気分を害する" },
            { eng: "Protocol", jpn: "手順 / 規定" },
            { eng: "Clarify", jpn: "明確にする" },
            { eng: "Embarrassing", jpn: "恥ずかしい" },
            { eng: "Ignore", jpn: "無視する" },
            { eng: "Sincere", jpn: "誠実な / 心からの" },
            { eng: "Address", jpn: "宛てる / 呼称する / 対処する" },
            { eng: "Client", jpn: "クライアント / 顧客" },
            { eng: "Reputation", jpn: "評判" },
            { eng: "Crucial", jpn: "極めて重要な" },
            { eng: "Frustrated", jpn: "イライラした / 失望した" },
            { eng: "Manners", jpn: "マナー / 礼儀" },
            { eng: "Overlook", jpn: "見落とす / 見逃す" }
        ],
        situation: {
            eng: "Apex Solutions hosted a welcome event for a crucial international client, Mr. Robertson. The event was a complete disaster, and the client is threatening to cancel their million-dollar contract. The failure was not just one mistake; the entire team lacked basic professionalism. Multiple staff members made different social errors, ruining the first impression. The company's reputation is heavily damaged, and management needs a comprehensive plan to fix the relationship and improve future greetings.",
            jpn: "Apex Solutions社は、極めて重要な海外のクライアントであるロバートソン氏のために歓迎イベントを主催しました。イベントは完全に失敗に終わり、クライアントは100万ドルの契約をキャンセルすると脅しています。失敗は一つのミスだけではありませんでした。チーム全体に基本的なプロ意識が欠けていたのです。複数のスタッフがそれぞれ異なる社会的なミスを犯し、第一印象を台無しにしました。会社の評判は大きく傷つき、経営陣は関係を修復し、将来の挨拶を改善するための包括的な計画を必要としています。"
        },
        people: [
            {
                name: "Person 1: Ken (Junior Sales)",
                eng: "I was extremely nervous. I shouldn't have relied on my memory. I forgot the client's name and repeatedly addressed him as 'Mr. Robinson' all evening. I wish I had checked his business card.",
                jpn: "私は極度に緊張していました。自分の記憶に頼るべきではありませんでした。クライアントの名前を忘れ、一晩中彼を『ロビンソン氏』と繰り返し呼んでしまいました。彼の名刺を確認しておけばよかったです。"
            },
            {
                name: "Person 2: Lisa (Manager)",
                eng: "I should have made polite small talk to break the ice. Instead, I ignored him during dinner and aggressively pushed the business contract right away. He looked very uncomfortable.",
                jpn: "緊張をほぐすために丁寧な雑談をするべきでした。その代わりに、私は夕食中に彼を無視し、すぐにビジネスの契約を強引に推し進めました。彼はとても不快そうに見えました。"
            },
            {
                name: "Person 3: Alex (Designer)",
                eng: "I arrived 20 minutes late to the dinner. I shouldn't have worn casual jeans and a t-shirt to a formal business event. I didn't realize the dress code was so strict.",
                jpn: "私は夕食会に20分遅れて到着しました。フォーマルなビジネスイベントにカジュアルなジーンズとTシャツを着て行くべきではありませんでした。服装規定がそれほど厳しいとは気づきませんでした。"
            },
            {
                name: "Person 4: Emma (Receptionist)",
                eng: "When Mr. Robertson first arrived at the office, I was looking at my phone. I didn't stand up, smile, or offer to take his coat. I should have greeted him professionally.",
                jpn: "ロバートソン氏が最初にオフィスに到着したとき、私はスマホを見ていました。立ち上がったり、微笑んだり、コートを預かると申し出たりしませんでした。プロとして彼に挨拶するべきでした。"
            },
            {
                name: "Person 5: Mr. Robertson (Client)",
                eng: "The entire team lacks basic manners. They got my name wrong, they dressed poorly, the manager ignored me, and the receptionist was rude. If they act like this, I cannot trust them with my business.",
                jpn: "チーム全体に基本的なマナーが欠けています。彼らは私の名前を間違え、服装もひどく、マネージャーは私を無視し、受付係は無礼でした。彼らがこのような振る舞いをするなら、私は自分のビジネスで彼らを信頼することはできません。"
            }
        ],
        grammarPoints: [
            {
                point: "1. Modals: Advice about the past (Should have + PP)",
                explanation: "To express that an action was a good idea in the past but it did not happen (a missed opportunity or mistake), use 'should have' followed by the past participle verb.",
                explanationJpn: "過去においてある行動が良いアイデアであったが、実現しなかったこと（逃した機会や間違い）を表現するには、「should have」の後に過去分詞の動詞を続けます。",
                examples: [
                    { eng: "Ken should have checked the business card.", jpn: "ケンは名刺を確認すべきでした（確認しなかった）。" },
                    { eng: "Alex shouldn't have worn jeans.", jpn: "アレックスはジーンズを履くべきではありませんでした（履いてしまった）。" }
                ]
            },
            {
                point: "2. Modals: Regrets (I wish I had / hadn't)",
                explanation: "To express personal regret about your own past actions, you can use 'I wish I had' + past participle, or 'I wish I hadn't' + past participle.",
                explanationJpn: "自分自身の過去の行動に対する個人的な後悔を表現するには、「I wish I had + 過去分詞」、または「I wish I hadn't + 過去分詞」を使用できます。",
                examples: [
                    { eng: "I wish I hadn't made that embarrassing mistake.", jpn: "あんな恥ずかしい間違いをしなければよかったと願っています。" },
                    { eng: "I wish I had smiled at the client.", jpn: "クライアントに微笑みかければよかったです。" }
                ]
            }
        ],
        discussionPoints: [
            { eng: "What are the four different mistakes the team made when meeting the client?", jpn: "チームがクライアントに会ったときに犯した4つの異なるミスは何ですか？" },
            { eng: "How did a lack of internal communication contribute to Alex's mistake?", jpn: "社内コミュニケーションの欠如は、アレックスのミスにどのように寄与しましたか？" },
            { eng: "What is the most professional way for the company to apologize to the client now?", jpn: "今、会社がクライアントに謝罪する最もプロフェッショナルな方法は何ですか？" },
            { eng: "What new rules or protocols should Apex Solutions create to prevent this in the future?", jpn: "将来これを防ぐために、Apex Solutionsはどのような新しいルールやプロトコルを作成すべきですか？" }
        ],
        expressions: [
            { eng: "In hindsight", jpn: "後知恵で / 今振り返ってみると" },
            { eng: "Unfortunately", jpn: "残念ながら" },
            { eng: "To clarify", jpn: "明確にするために" },
            { eng: "Regardless of", jpn: "〜に関わらず" },
            { eng: "Moving forward", jpn: "今後は / 前進するために" }
        ],
        roleplay: "Role-play a crisis meeting between Lisa (Manager) and the HR Director. Discuss the multiple things that went wrong during the welcome event using past modals (should have, shouldn't have). Then, create a 3-step action plan to save the contract and train the staff. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(リサ（マネージャー）と人事ディレクターの間の危機対策会議のロールプレイを行ってください。過去の法助動詞（should have, shouldn't have）を使って歓迎イベント中にうまくいかなかった複数の事柄について話し合ってください。その後、契約を守りスタッフを訓練するための3ステップの行動計画を作成してください。)</span>",
        homework: {
            vocab: [
                { eng: "Break in", jpn: "押し入る、会話に割り込む", exEng: "I didn't want to break in while they were arguing.", exJpn: "彼らが言い争っている間、私は会話に割り込みたくありませんでした。" },
                { eng: "Check in", jpn: "チェックインする、様子を確認する", exEng: "I will check in with you tomorrow morning.", exJpn: "明日の朝、あなたの様子を確認します（連絡します）。" },
                { eng: "Fill in", jpn: "記入する、代わりを務める", exEng: "Could you fill in for me at the meeting?", exJpn: "会議で私の代わりを務めていただけませんか？" },
                { eng: "Give in", jpn: "屈する、提出する", exEng: "The company finally gave in to the union's demands.", exJpn: "会社はついに労働組合の要求に屈しました。" },
                { eng: "Join in", jpn: "参加する", exEng: "Everyone is welcome to join in the discussion.", exJpn: "誰でもディスカッションへの参加を歓迎します。" },
                { eng: "Plug in", jpn: "電源に接続する", exEng: "Please plug in the laptop before it dies.", exJpn: "バッテリーが切れる前にノートパソコンを電源に接続してください。" },
                { eng: "Settle in", jpn: "落ち着く、慣れる", exEng: "It took him a few weeks to settle in at the new office.", exJpn: "彼が新しいオフィスに慣れるのに数週間かかりました。" },
                { eng: "Take in", jpn: "吸収する、理解する", exEng: "There was too much information to take in at once.", exJpn: "一度に理解するには情報が多すぎました。" },
                { eng: "Turn in", jpn: "提出する、寝る", exEng: "You must turn in your report by Friday.", exJpn: "金曜日までにレポートを提出しなければなりません。" },
                { eng: "Drop in", jpn: "ふらりと立ち寄る", exEng: "Feel free to drop in if you are in the area.", exJpn: "近くにいる時は気軽に立ち寄ってください。" },
                { eng: "Look into", jpn: "調査する", exEng: "The IT department will look into the server issue.", exJpn: "IT部門がサーバーの問題を調査します。" },
                { eng: "Bump into", jpn: "ばったり出会う", exEng: "I bumped into our old manager at the coffee shop.", exJpn: "コーヒーショップで昔のマネージャーにばったり出会いました。" },
                { eng: "Look in", jpn: "少しのぞいてみる、様子を見る", exEng: "Can you look in on the new intern today?", exJpn: "今日、新しいインターンの様子を見てくれませんか？" },
                { eng: "Move in", jpn: "引っ越してくる", exEng: "Our startup will move in to the new building next month.", exJpn: "私たちのスタートアップは来月新しいビルに引っ越します。" },
                { eng: "Hand in", jpn: "提出する", exEng: "Did you hand in your resignation letter?", exJpn: "辞表は提出しましたか？" },
                { eng: "Step in", jpn: "介入する", exEng: "The manager had to step in to stop the argument.", exJpn: "マネージャーは口論を止めるために介入しなければなりませんでした。" },
                { eng: "Fit in", jpn: "溶け込む、適合する", exEng: "He is struggling to fit in with the corporate culture.", exJpn: "彼は企業文化に溶け込むのに苦労しています。" },
                { eng: "Opt in", jpn: "参加・加入を選ぶ", exEng: "Users must opt in to receive marketing emails.", exJpn: "ユーザーはマーケティングメールを受け取るために加入を選択しなければなりません。" },
                { eng: "Rush into", jpn: "急いで〜する", exEng: "We shouldn't rush into a decision without all the facts.", exJpn: "すべての事実が揃わずに急いで決定を下すべきではありません。" },
                { eng: "Dive into", jpn: "没頭する、飛び込む", exEng: "Let's dive into the sales data from last quarter.", exJpn: "前四半期の販売データに飛び込んで（没頭して）みましょう。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "Lisa, we need to address the email from Mr. Robertson. The client is highly offended.", jpn: "リサ、ロバートソン氏からのメールに対処する必要があります。クライアントは非常に腹を立てています。" },
                { speaker: "B", eng: "I know. I feel awful. The welcome dinner was a complete disaster.", jpn: "わかっています。最悪な気分です。歓迎の夕食会は完全に大失敗でした。" },
                { speaker: "A", eng: "Ken shouldn't have called him Mr. Robinson. It was incredibly unprofessional.", jpn: "ケンは彼をロビンソン氏と呼ぶべきではありませんでした。信じられないほどプロ意識に欠けていました。" },
                { speaker: "B", eng: "I agree. But I share the blame. In hindsight, I should have made small talk instead of pushing the contract immediately.", jpn: "同感です。でも私にも責任があります。今振り返ってみると、すぐに契約を押し付けるのではなく、雑談をするべきでした。" },
                { speaker: "A", eng: "Exactly. Furthermore, why was Alex wearing jeans? He should have dressed formally.", jpn: "その通りです。さらに、なぜアレックスはジーンズを履いていたのですか？彼はフォーマルな服を着るべきでした。" },
                { speaker: "B", eng: "I wish I had informed the team about the strict dress code. I completely overlooked it.", jpn: "厳しい服装規定についてチームに知らせておけばよかったです。完全に忘れていました（見落としていました）。" },
                { speaker: "A", eng: "To make matters worse, Emma ignored him at the reception desk. She shouldn't have been looking at her phone.", jpn: "さらに悪いことに、エマは受付で彼を無視しました。彼女はスマホを見ているべきではありませんでした。" },
                { speaker: "B", eng: "You are right. We made too many mistakes. How should we reply to his email?", jpn: "あなたの言う通りです。私たちはあまりにも多くのミスを犯しました。彼のメールにどう返信するべきでしょうか？" },
                { speaker: "A", eng: "We must write a sincere apology email right now. We cannot make any excuses.", jpn: "今すぐ誠実な謝罪メールを書かなければなりません。言い訳は一切できません。" },
                { speaker: "B", eng: "Understood. Moving forward, I will create a strict protocol for welcoming international clients.", jpn: "承知しました。今後は、海外のクライアントを歓迎するための厳格なプロトコルを作成します。" },
                { speaker: "A", eng: "Good. We should have trained the staff better. Let's look into setting up a meeting to retrain everyone.", jpn: "良いですね。私たちはスタッフをより良く訓練しておくべきでした。全員を再訓練するための会議を設定することを検討（調査）しましょう。" },
                { speaker: "B", eng: "I will set it up today. Thank you for stepping in to help me.", jpn: "今日設定します。助けるために介入してくれてありがとうございます。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: Describe a time when multiple things went wrong at work or school. What should you and your team have done differently?",
                promptJpn: "「職場や学校で複数のことがうまくいかなかった時のことを説明してください。あなたとチームはどう違った行動をとるべきでしたか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Cost of Bad First Impressions)",
                instruction: "Read this authentic article to learn more about social dynamics in business. This section provides real-world context for B1 learners.",
                eng: "In the business world, making a good first impression is very important. When a company meets a new international client, small details can have huge results. While good technical skills and product knowledge are important, human relationships are the true foundation of corporate success. A bad first meeting can severely damage a company's professional reputation. Often, a failed meeting is not caused by just one mistake. Usually, it is a combination of many small errors made by different team members.\n\nFor example, imagine a welcome event where the receptionist is looking at her phone instead of greeting the guest. Then, the sales team forgets the client's name. Finally, the project manager wears dirty, casual clothes to a formal dinner. None of these mistakes are related to the actual business contract, but together, they send a very clear message: the company is careless. If an employee realizes they have made a mistake, they should apologize immediately. Ignoring an error or hoping the client will forget it usually makes the situation worse. Clients want to feel valued and respected. If a company shows a lack of attention to basic personal details, the client will naturally think that the company will also be careless with their money and projects.\n\nTo prevent these disasters, companies must have strong protocols for communication. Managers should train their staff on proper business manners, dress codes, and cultural etiquette before a big meeting happens. The most effective strategy for solving a crisis is absolute honesty. A sincere, direct apology without excuses is crucial. Professionals should admit their mistakes, express true regret, and promise that the error will not happen again. By taking responsibility and learning from these awkward moments, organizations can actually build stronger trust with their partners.",
                jpn: "ビジネスの世界では、良い第一印象を与えることが非常に重要です。会社が新しく海外のクライアントに会うとき、小さな細部が大きな結果をもたらす可能性があります。優れた技術スキルや製品知識も重要ですが、人間関係こそが企業の成功の真の基盤です。最悪な最初の会議は、会社のプロとしての評判に深刻なダメージを与える可能性があります。多くの場合、失敗した会議はたった一つのミスによって引き起こされるわけではありません。通常、それは異なるチームメンバーが犯した多くの小さなエラーの組み合わせなのです。\n\n例えば、受付係がゲストに挨拶する代わりに自分のスマホを見ている歓迎イベントを想像してみてください。次に、営業チームがクライアントの名前を忘れます。最後に、プロジェクトマネージャーがフォーマルな夕食会に汚れたカジュアルな服を着て行きます。これらのミスのどれも実際のビジネス契約には関係ありませんが、それらが合わさることで非常に明確なメッセージを送ることになります。すなわち、その会社は不注意であるということです。もし従業員がミスをしたことに気づいたら、すぐに謝罪すべきです。エラーを無視したり、クライアントが忘れてくれることを望んだりすることは、たいてい状況を悪化させます。クライアントは自分が価値を置かれ、尊重されていると感じたいのです。もし会社が基本的な個人的な詳細への注意の欠如を示せば、クライアントは当然、その会社が彼らのお金やプロジェクトに対しても不注意であると考えるでしょう。\n\nこれらの大惨事を防ぐために、企業はコミュニケーションのための強力なプロトコルを持たなければなりません。マネージャーは、大きな会議が起こる前に、適切なビジネスマナー、服装規定、および文化的なエチケットについてスタッフを訓練すべきです。危機を解決するための最も効果的な戦略は、絶対的な正直さです。言い訳のない、誠実で直接的な謝罪が極めて重要です。プロフェッショナルは自分たちのミスを認め、純粋な後悔を表明し、そのエラーが二度と起こらないことを約束すべきです。責任を取り、これらの気まずい瞬間から学ぶことで、組織は実際にパートナーとより強い信頼を築くことができるのです。"
            }
        }
    },{
        id: 7,
        chapter: "Chapter 1: First Meetings",
        type: "speakingtest",
        title: "Lesson 7: Speaking Test - People you know",
        goal: "Prepare and deliver a short speech about a memorable first encounter using the PREP method. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(PREP法を使って、記憶に残る初対面についての短いスピーチを準備し、発表する。)</span>",
        vocab: [
            { eng: "Memorable", jpn: "記憶に残る" },
            { eng: "Impact", jpn: "影響 / インパクト" },
            { eng: "Professionalism", jpn: "プロ意識" },
            { eng: "Approachable", jpn: "親しみやすい" },
            { eng: "Genuine", jpn: "本物の / 誠実な" },
            { eng: "Establish", jpn: "確立する / 築く" },
            { eng: "Fascinating", jpn: "魅力的な" },
            { eng: "Hesitate", jpn: "ためらう" },
            { eng: "Maintain", jpn: "維持する" },
            { eng: "Perceive", jpn: "知覚する / 認識する" },
            { eng: "Sincere", jpn: "誠実な" },
            { eng: "Characteristic", jpn: "特徴 / 特性" },
            { eng: "Encounter", jpn: "遭遇する / 出会い" },
            { eng: "Influence", jpn: "影響を与える" }
        ],
        prompt: {
            main: "Describe a time when you met an important colleague or client for the first time.",
            bulletPoints: [
                "Say who the person was and where you met them",
                "Describe their appearance and attitude",
                "Say how you initiated the conversation",
                "Explain why this first impression was memorable or significant"
            ]
        },
        exampleSpeech: {
            eng: "Today, I would like to talk about a memorable first encounter I had with our current regional director. Her name is Ms. Carter, and we met at a corporate networking event two years ago.\n\nWhen she first entered the room, her professionalism was immediately clear. She maintained excellent posture and wore a sharp, navy-blue suit. Despite her high rank, her attitude was incredibly approachable. I noticed that she made genuine eye contact with everyone she spoke to.\n\nTo break the ice, I didn't hesitate to approach her. I introduced myself firmly and asked her about the opening presentation. She gave a fascinating response, and we quickly established a solid connection. I made sure to maintain a polite tone and an engaging smile throughout our chat.\n\nIn my opinion, this encounter was highly significant because it taught me the power of a sincere attitude. Her characteristics proved that you can be highly successful while remaining warm and accessible to junior staff.",
            jpn: "本日は、現在の地域ディレクターとの記憶に残る初対面についてお話ししたいと思います。彼女の名前はカーター氏で、2年前の企業のネットワーキングイベントで出会いました。\n\n彼女が最初に部屋に入ってきたとき、そのプロ意識はすぐに明らかでした。彼女は素晴らしい姿勢を維持し、シャープな紺色のスーツを着ていました。高い役職にもかかわらず、彼女の態度は信じられないほど親しみやすいものでした。彼女は話しかけるすべての人と純粋なアイコンタクトを取っていることに気づきました。\n\n緊張をほぐすために、私はためらわずに彼女に近づきました。しっかりと自己紹介をし、冒頭のプレゼンテーションについて彼女に尋ねました。彼女は魅力的な返答をしてくれ、私たちはすぐに確かなつながりを築きました。私は会話中、礼儀正しいトーンと魅力的な笑顔を維持するよう努めました。\n\n私の意見では、この出会いは誠実な態度の力を教えてくれたため、非常に重要なものでした。彼女の特徴は、若手スタッフに対して温かく接しやすくありながらも、大きな成功を収めることができると証明してくれました。"
        },
        homework: {
            vocab: [
                { eng: "Figure out", jpn: "理解する、解決する", exEng: "I need to figure out how to operate this new software.", exJpn: "この新しいソフトウェアの操作方法を理解する必要がある。" },
                { eng: "Find out", jpn: "見つける、解明する", exEng: "We will find out the client's decision tomorrow.", exJpn: "明日クライアントの決定が判明する。" },
                { eng: "Point out", jpn: "指摘する", exEng: "She politely pointed out the error in the financial report.", exJpn: "彼女は財務報告書のエラーを丁寧に指摘した。" },
                { eng: "Carry out", jpn: "実行する", exEng: "The team will carry out the marketing strategy next week.", exJpn: "チームは来週そのマーケティング戦略を実行する。" },
                { eng: "Stand out", jpn: "目立つ", exEng: "Her impressive presentation skills made her stand out.", exJpn: "彼女の印象的なプレゼンスキルは彼女を目立たせた。" },
                { eng: "Rule out", jpn: "除外する", exEng: "We cannot rule out any potential security risks.", exJpn: "私たちは潜在的なセキュリティリスクを一つも除外できない。" },
                { eng: "Work out", jpn: "運動する、解決する", exEng: "I am confident we can work out a reasonable compromise.", exJpn: "合理的な妥協点を解決（見つけ出す）できると確信しています。" },
                { eng: "Turn out", jpn: "～という結果になる", exEng: "The initial proposal turned out to be highly successful.", exJpn: "最初の提案は非常に成功するという結果になった。" },
                { eng: "Hand out", jpn: "配る", exEng: "The assistant will hand out the meeting agendas shortly.", exJpn: "アシスタントがまもなく会議のアジェンダを配布します。" },
                { eng: "Fill out", jpn: "記入する", exEng: "Please fill out this application form completely.", exJpn: "この申請用紙に完全に記入してください。" },
                { eng: "Leave out", jpn: "省く", exEng: "Do not leave out any relevant statistics in your summary.", exJpn: "要約から関連する統計を一切省かないでください。" },
                { eng: "Drop out", jpn: "脱落する", exEng: "The startup had to drop out of the bidding process.", exJpn: "そのスタートアップは入札プロセスから脱落せざるを得なかった。" },
                { eng: "Break out", jpn: "発生する", exEng: "A serious debate broke out during the board meeting.", exJpn: "役員会議中に深刻な議論が発生した。" },
                { eng: "Run out", jpn: "使い果たす", exEng: "We have run out of budget for this quarter.", exJpn: "今四半期の予算を使い果たしてしまった。" },
                { eng: "Pass out", jpn: "気絶する、配る", exEng: "The manager will pass out the performance reviews.", exJpn: "マネージャーが人事評価を配布します。" },
                { eng: "Check out", jpn: "確認する", exEng: "You should check out the competitor's new website.", exJpn: "競合他社の新しいウェブサイトを確認するべきだ。" },
                { eng: "Come out", jpn: "発売される", exEng: "Our new product line will come out in the spring.", exJpn: "私たちの新製品ラインは春に発売される。" },
                { eng: "Bring out", jpn: "引き出す", exEng: "A competitive environment brings out his leadership qualities.", exJpn: "競争の激しい環境は彼のリーダーシップの資質を引き出す。" },
                { eng: "Hang out", jpn: "ぶらぶらする", exEng: "Colleagues frequently hang out at the cafe after work.", exJpn: "同僚たちは仕事の後、頻繁にカフェで過ごす。" },
                { eng: "Speak out", jpn: "意見を言う", exEng: "Employees are encouraged to speak out during brainstorming sessions.", exJpn: "従業員はブレインストーミングのセッション中に意見を言うことが奨励されている。" }
            ],
            reading1: {
                title: "Task 2: Reading (Review Model: A Memorable Speech)",
                instruction: "Read the speech draft. Notice how the writer recycles the lesson's vocabulary, grammar (past modals), and transitional expressions.",
                eng: "In my opinion, meeting an important client for the first time is always challenging. Actually, I recently encountered a CEO who left a memorable impact on me. At first, I hesitated to approach her. In hindsight, I shouldn't have felt so nervous. I eventually figured out a polite way to introduce myself. We had a fascinating conversation about market trends. To sum up, her genuine professionalism and approachable attitude made her stand out. I wish I hadn't worried so much beforehand, because establishing a solid connection turned out to be quite natural.",
                jpn: "私の意見では、重要なクライアントに初めて会うことは常に挑戦的です。実は、私は最近、私に記憶に残る影響を残したCEOに遭遇しました。最初は彼女にアプローチするのをためらいました。後から考えると、あんなに緊張すべきではありませんでした。私は最終的に、礼儀正しく自己紹介する方法を考え出しました。私たちは市場のトレンドについて魅力的な会話をしました。要約すると、彼女の純粋なプロ意識と親しみやすい態度は、彼女を際立たせていました。事前にあんなに心配しなければよかったと思います。なぜなら、しっかりとしたつながりを築くことは非常に自然なことだという結果になったからです。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Are you ready for your speaking test on first impressions?", jpn: "第一印象についてのスピーキングテストの準備はできていますか？" },
                { speaker: "B", eng: "I think so. I am going to discuss a memorable encounter with a senior colleague.", jpn: "そう思います。先輩同僚との記憶に残る出会いについて話すつもりです。" },
                { speaker: "A", eng: "That sounds interesting. What specific characteristics made them stand out?", jpn: "それは面白そうですね。どのような具体的な特徴が彼らを際立たせていたのですか？" },
                { speaker: "B", eng: "Their genuine professionalism. They maintained excellent eye contact and a sincere smile.", jpn: "彼らの純粋なプロ意識です。彼らは素晴らしいアイコンタクトと誠実な笑顔を維持していました。" },
                { speaker: "A", eng: "Did you hesitate to approach them initially?", jpn: "最初は彼らにアプローチするのをためらいましたか？" },
                { speaker: "B", eng: "Yes, I did. I shouldn't have been so nervous. It created unnecessary tension.", jpn: "はい、ためらいました。あんなに緊張すべきではありませんでした。不要な緊張を生んでしまいました。" },
                { speaker: "A", eng: "It's normal to feel anxious. How did you figure out a way to break the ice?", jpn: "不安を感じるのは普通のことです。緊張をほぐす方法をどのように見つけ出したのですか？" },
                { speaker: "B", eng: "I asked a simple, indirect question about the conference schedule.", jpn: "カンファレンスのスケジュールについて、シンプルで間接的な質問をしました。" },
                { speaker: "A", eng: "That's a smart strategy. Did the conversation turn out to be engaging?", jpn: "それは賢い戦略ですね。会話は魅力的なものになりましたか？" },
                { speaker: "B", eng: "Absolutely. We found out we share similar interests in technology.", jpn: "間違いありません。私たちがテクノロジーに対して似たような興味を共有していることが判明しました。" },
                { speaker: "A", eng: "It sounds like you successfully established a valuable connection.", jpn: "価値あるつながりを築くことに見事成功したようですね。" },
                { speaker: "B", eng: "I did. To sum up, maintaining an approachable attitude is crucial for anyone.", jpn: "はい。要約すると、親しみやすい態度を維持することは誰にとっても極めて重要です。" },
                { speaker: "A", eng: "I completely agree. Good luck with your presentation tomorrow.", jpn: "完全に同意します。明日のプレゼンテーション頑張ってください。" },
                { speaker: "B", eng: "Thank you. I will carry out your advice and speak confidently.", jpn: "ありがとうございます。あなたのアドバイスを実行して、自信を持って話します。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: Describe a memorable first encounter you had with a professional colleague. What characteristics made them stand out?",
                promptJpn: "「プロフェッショナルな同僚との記憶に残る初対面について説明してください。どのような特徴が彼らを際立たせていましたか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (Networking and Lasting Impressions)",
                instruction: "Read this authentic article to learn more about professional encounters. This section provides real-world context for B1 learners.",
                eng: "In the professional sphere, building a robust network requires more than simply exchanging business cards. Meaningful networking relies on establishing genuine connections through memorable first encounters. When you attend a corporate seminar or an industry conference, you constantly interact with individuals who could influence your career path. Therefore, the ability to project a sincere, approachable demeanor is an incredibly valuable skill.\n\nMany professionals mistakenly believe that dominating a conversation demonstrates confidence and competence. However, research indicates that the most successful networkers are exceptional listeners. When you actively observe someone's body language and ask thoughtful, open-ended questions, you create an engaging atmosphere. This approach makes the other person feel valued rather than interrogated. For instance, if you notice a colleague hesitating during a group discussion, warmly inviting them to share their perspective can leave a remarkably positive and lasting impact.\n\nFurthermore, follow-up communication is just as critical as the initial meeting. A polite email sent a few days after an event proves your reliability and reinforces the favorable impression you established. A brief message mentioning a specific topic you discussed ensures that you stand out from the dozens of other people they met. By treating every new acquaintance with respect and demonstrating a genuine interest in their professional journey, you cultivate a network built on mutual trust and shared value.",
                jpn: "プロフェッショナルの領域において、強固なネットワークを構築するには、単に名刺を交換する以上のことが求められます。意味のあるネットワーキングは、記憶に残る初対面を通じて純粋なつながりを確立することに依存しています。企業のセミナーや業界のカンファレンスに参加するとき、あなたは自分のキャリアパスに影響を与える可能性のある人々と絶えず交流します。したがって、誠実で親しみやすい態度を示す能力は、信じられないほど価値のあるスキルです。\n\n多くのプロフェッショナルは、会話を支配することが自信と有能さを示すと誤解しています。しかし、研究によると、最も成功しているネットワーカーは例外的に聞き上手であることが示されています。相手のボディーランゲージを積極的に観察し、思慮深く開かれた質問をすることで、あなたは魅力的な雰囲気を作り出します。このアプローチにより、相手は尋問されているのではなく、価値を認められていると感じます。例えば、グループディスカッション中に同僚がためらっていることに気づいた場合、彼らの視点を共有するよう温かく促すことで、驚くほど肯定的で持続的な影響を残すことができます。\n\nさらに、フォローアップのコミュニケーションは最初の出会いと同じくらい重要です。イベントの数日後に送られる丁寧なメールは、あなたの信頼性を証明し、あなたが確立した好印象を強化します。あなたが話し合った特定の話題に触れた短いメッセージは、彼らが出会った他の何十人もの人々からあなたを確実に際立たせます。すべての新しい知人を敬意を持って扱い、彼らのプロフェッショナルとしての道のりに純粋な関心を示すことで、あなたは相互の信頼と共有される価値に基づいて構築されたネットワークを育むのです。"
            }
        }
    },
    {
        id: 8,
        chapter: "Chapter 2: Small Talk",
        type: "opinion",
        title: "Lesson 8: Opinion Exchange - Weekend plans",
        goal: "Discuss weekend activities and leisure using the present perfect tense for life experiences. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(現在完了形の経験用法を使って、週末のアクティビティや余暇について話し合う。)</span>",
        questions: [
            { eng: "1. Have you ever tried an extreme sport during your weekend?", jpn: "1. 週末にエクストリームスポーツに挑戦したことはありますか？" },
            { eng: "2. How do you usually unwind after a stressful week at work?", jpn: "2. 職場でストレスの多い一週間を過ごした後、普段どのようにリラックスしますか？" },
            { eng: "3. What is the most fascinating exhibition you have ever visited?", jpn: "3. これまでに訪れた中で最も魅力的な展覧会は何ですか？" },
            { eng: "4. Why is it crucial for employees to separate leisure from professional duties?", jpn: "4. 従業員が余暇を仕事の義務から切り離すことが極めて重要なのはなぜですか？" },
            { eng: "5. Have you ever participated in a local volunteer activity?", jpn: "5. 地元のボランティア活動に参加したことはありますか？" },
            { eng: "6. Do you prefer exploring a vibrant city or strolling through a quiet park?", jpn: "6. 活気ある都市を探索するのと、静かな公園を散歩するのとでは、どちらが好きですか？" },
            { eng: "7. How often do you catch up with former colleagues on your days off?", jpn: "7. 休日に前の同僚とどのくらいの頻度で近況を報告し合いますか？" },
            { eng: "8. What is the most exhausting outing you have ever organized?", jpn: "8. これまでに計画した中で最も疲れ果てるお出かけは何でしたか？" },
            { eng: "9. Why do some professionals hesitate to take their paid vacation days?", jpn: "9. 一部のプロフェッショナルが有給休暇を取るのをためらうのはなぜですか？" },
            { eng: "10. Have you ever traveled to a destination completely spontaneously?", jpn: "10. 全くの無計画で（自発的に）目的地へ旅行したことはありますか？" }
        ],
        vocab: [
            { eng: "Leisure", jpn: "余暇 / レジャー" },
            { eng: "Recreation", jpn: "気晴らし / レクリエーション" },
            { eng: "Unwind", jpn: "くつろぐ / リラックスする" },
            { eng: "Participate", jpn: "参加する" },
            { eng: "Exhibition", jpn: "展覧会 / 展示" },
            { eng: "Venue", jpn: "開催地 / 会場" },
            { eng: "Refreshing", jpn: "爽快な / すがすがしい" },
            { eng: "Exhausting", jpn: "疲れ果てさせる" },
            { eng: "Explore", jpn: "探索する" },
            { eng: "Outing", jpn: "お出かけ / 遠足" },
            { eng: "Stroll", jpn: "散歩する" },
            { eng: "Passionate", jpn: "情熱的な" },
            { eng: "Vibrant", jpn: "活気のある" },
            { eng: "Spontaneous", jpn: "自発的な / 無計画の" }
        ],
        grammarPoints: [
            {
                point: "1. Present Perfect: Life Experiences (Have you ever...?)",
                explanation: "Use the present perfect tense ('have' + past participle) to talk about experiences you have had at some point in your life, up to now. The exact time is not important.",
                explanationJpn: "現在完了形（'have' + 過去分詞）を使用して、これまでの人生のどこかの時点での経験について話します。正確な時期は重要ではありません。",
                examples: [
                    { eng: "Have you ever visited that new art museum?", jpn: "あの新しい美術館を訪れたことはありますか？" },
                    { eng: "I have never tried an extreme sport.", jpn: "私はエクストリームスポーツに挑戦したことがありません。" }
                ]
            },
            {
                point: "2. Present Perfect vs. Past Simple",
                explanation: "Use the present perfect for general experiences. However, if you mention a specific time in the past (like 'last weekend' or 'yesterday'), you must switch to the past simple tense.",
                explanationJpn: "一般的な経験には現在完了形を使用します。しかし、「先週末」や「昨日」など、過去の特定の時間を述べる場合は、過去形に切り替えなければなりません。",
                examples: [
                    { eng: "I have seen that exhibition. I went there last Saturday.", jpn: "その展覧会は見たことがあります。先週の土曜日に行きました。" },
                    { eng: "Have you ever been to Paris? Yes, I traveled there in 2019.", jpn: "パリに行ったことはありますか？はい、2019年に旅行しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "Personally", jpn: "個人的には" },
            { eng: "Generally", jpn: "一般的に / 大まかに" },
            { eng: "As a result", jpn: "その結果" },
            { eng: "However", jpn: "しかしながら" },
            { eng: "In fact", jpn: "実際には / それどころか" }
        ],
        homework: {
            vocab: [
                { eng: "Back out", jpn: "手を引く", exEng: "The sponsor decided to back out of the agreement.", exJpn: "スポンサーは合意から手を引くことを決定した。" },
                { eng: "Blow out", jpn: "吹き消す、パンクする", exEng: "The tire blew out while we were driving on the highway.", exJpn: "高速道路を運転中にタイヤがパンクした。" },
                { eng: "Cross out", jpn: "線を引いて消す", exEng: "Please cross out any irrelevant information on the document.", exJpn: "書類上の無関係な情報は線で消してください。" },
                { eng: "Eat out", jpn: "外食する", exEng: "We prefer to eat out at vibrant local restaurants.", exJpn: "私たちは活気ある地元のレストランで外食することを好みます。" },
                { eng: "Get out", jpn: "出る、逃げる", exEng: "It is crucial to get out of the office and unwind.", exJpn: "オフィスから出てリラックスすることは極めて重要だ。" },
                { eng: "Help out", jpn: "手伝う", exEng: "I occasionally help out at the community recreation center.", exJpn: "私はたまに地域のレクリエーションセンターで手伝いをします。" },
                { eng: "Keep out", jpn: "中に入れない", exEng: "Security guards will keep out unauthorized personnel.", exJpn: "警備員は無許可の人員を立ち入り禁止にします。" },
                { eng: "Lay out", jpn: "設計する、説明する", exEng: "The manager will lay out the itinerary for the outing.", exJpn: "マネージャーはお出かけの旅程を説明します。" },
                { eng: "Look out", jpn: "気をつける", exEng: "Look out for unpredictable weather during your hike.", exJpn: "ハイキング中は予測不可能な天気に気をつけてください。" },
                { eng: "Make out", jpn: "理解する、判読する", exEng: "I could barely make out the sign in the dense fog.", exJpn: "濃い霧の中で標識をかろうじて判読できた。" },
                { eng: "Pick out", jpn: "選ぶ", exEng: "She took hours to pick out a suitable venue.", exJpn: "彼女は適切な会場を選ぶのに何時間もかけた。" },
                { eng: "Put out", jpn: "消す、発行する", exEng: "The company put out a press release regarding the event.", exJpn: "会社はそのイベントに関するプレスリリースを発行した。" },
                { eng: "Sell out", jpn: "売り切れる", exEng: "Tickets for the exhibition usually sell out rapidly.", exJpn: "その展覧会のチケットは通常急速に売り切れる。" },
                { eng: "Sort out", jpn: "整理する、解決する", exEng: "We need to sort out our transportation arrangements.", exJpn: "私たちは交通手段の手配を整理（解決）する必要がある。" },
                { eng: "Spell out", jpn: "詳しく説明する", exEng: "Let me spell out the primary goals of this project.", exJpn: "このプロジェクトの主要な目標を詳しく説明させてください。" },
                { eng: "Wipe out", jpn: "一掃する、ひどく疲れさせる", exEng: "That exhausting workout completely wiped me out.", exJpn: "あの疲れ果てるトレーニングで私は完全にヘトヘトになった。" },
                { eng: "Strike out", jpn: "失敗する", exEng: "Our initial marketing strategy unfortunately struck out.", exJpn: "私たちの初期のマーケティング戦略は残念ながら失敗した。" },
                { eng: "Take out", jpn: "持ち出す、取り出す", exEng: "I will take out the necessary documents from the archive.", exJpn: "アーカイブから必要な書類を取り出します。" },
                { eng: "Try out", jpn: "試してみる", exEng: "Have you ever tried out scuba diving?", exJpn: "スキューバダイビングを試してみたことはありますか？" },
                { eng: "Wear out", jpn: "疲れ果てさせる、すり減る", exEng: "Consistent overtime will eventually wear out your employees.", exJpn: "絶え間ない残業は最終的に従業員を疲れ果てさせる。" }
            ],
            reading1: {
                title: "Task 2: Reading (Review Model: Weekend Recreation)",
                instruction: "Read the blog post. Notice how the writer recycles the lesson's vocabulary, grammar (present perfect), and transitional expressions.",
                eng: "Personally, I believe that recreation is vital for professionals. Have you ever felt completely wiped out after a busy week? In fact, I have experienced severe burnout in the past. As a result, I try out new leisure activities every weekend to unwind. For example, I recently explored a vibrant local art exhibition. Have you ever strolled through a quiet museum to relax? However, I generally avoid exhausting outings. I prefer activities that are refreshing and calm. I haven't participated in any extreme sports yet, but I am passionate about photography.",
                jpn: "個人的に、プロフェッショナルにとってレクリエーションは不可欠だと信じています。忙しい一週間の後に完全にヘトヘトになったと感じたことはありますか？実際、私は過去に深刻な燃え尽き症候群を経験したことがあります。その結果、リラックスするために毎週末新しいレジャー活動を試しています。例えば、最近活気ある地元のアート展を探索しました。リラックスするために静かな美術館を散歩したことはありますか？しかしながら、私は一般的に疲れ果てるようなお出かけは避けます。爽快で穏やかなアクティビティを好みます。エクストリームスポーツにはまだ参加したことがありませんが、写真には情熱を注いでいます。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "The week is finally over. Do you have any plans for the weekend?", jpn: "ようやく一週間が終わりましたね。週末の予定は何かありますか？" },
                { speaker: "B", eng: "Yes, I plan to unwind. I am visiting a photography exhibition downtown.", jpn: "はい、リラックスする予定です。ダウンタウンの写真展を訪れます。" },
                { speaker: "A", eng: "That sounds refreshing. Have you ever been to that venue before?", jpn: "それは爽快そうですね。以前その会場に行ったことはありますか？" },
                { speaker: "B", eng: "No, I haven't. Actually, it is a brand-new gallery. What about you?", jpn: "いいえ、ありません。実は、真新しいギャラリーなんです。あなたはどうですか？" },
                { speaker: "A", eng: "I usually stay home, but I am going hiking. Have you ever tried mountain climbing?", jpn: "普段は家にいますが、ハイキングに行くんです。登山に挑戦したことはありますか？" },
                { speaker: "B", eng: "Yes, I have! I climbed Mount Fuji three years ago. It was exhausting.", jpn: "はい、あります！3年前に富士山に登りました。疲れ果てました。" },
                { speaker: "A", eng: "I bet it was. Personally, I prefer a gentle stroll in a quiet area.", jpn: "きっとそうだったでしょうね。個人的には、静かな場所での穏やかな散歩が好きです。" },
                { speaker: "B", eng: "I agree. Nature is a great way to escape the vibrant city atmosphere.", jpn: "同感です。自然は活気ある都市の雰囲気から逃れる素晴らしい方法です。" },
                { speaker: "A", eng: "Exactly. It is crucial to separate work from your personal leisure time.", jpn: "その通りです。仕事と個人の余暇時間を切り離すことは極めて重要です。" },
                { speaker: "B", eng: "In fact, I frequently mute my email notifications on Saturdays.", jpn: "実際、私は土曜日には頻繁にメールの通知をミュートにします。" },
                { speaker: "A", eng: "That is a wise decision. As a result, you return to work feeling energized.", jpn: "それは賢明な決断ですね。その結果、活力を得て仕事に戻ることができますから。" },
                { speaker: "B", eng: "Absolutely. We should catch up on Monday and share our experiences.", jpn: "間違いありません。月曜日に近況を報告し合って、私たちの経験を共有しましょう。" },
                { speaker: "A", eng: "I look forward to it. Have a delightful outing at the exhibition.", jpn: "楽しみにしています。展覧会で楽しいお出かけを。" },
                { speaker: "B", eng: "Thank you. Try not to wipe yourself out on the hike!", jpn: "ありがとう。ハイキングでヘトヘトになりすぎないようにしてくださいね！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: What is the most memorable leisure activity you have ever participated in? Use the PREP method, and include the present perfect tense.",
                promptJpn: "「これまでに参加した中で最も記憶に残るレジャー活動は何ですか？」という質問に答える短い段落を書いてください。PREP法を使用し、現在完了形を含めてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Psychology of Weekend Recovery)",
                instruction: "Read this authentic article to learn more about work-life balance. This section provides real-world context for B1 learners.",
                eng: "For professionals working in demanding corporate environments, the weekend is not merely a break; it is an essential period for psychological and physical recovery. Researchers define effective leisure as activities that allow individuals to entirely detach from their professional responsibilities. Have you ever noticed that checking emails on a Saturday morning leaves you feeling exhausted by Monday? Constant connectivity blurs the boundary between the office and the home, preventing the brain from genuinely unwinding.\n\nExperts recommend engaging in active recreation to combat mental fatigue. While spending the entire weekend watching television seems relaxing, studies indicate that participating in novel activities—such as exploring a vibrant neighborhood, visiting a cultural exhibition, or trying out a new sport—is actually more effective for recharging your energy. These spontaneous outings stimulate different areas of the brain and provide a refreshing contrast to repetitive daily tasks. Furthermore, physical activities like strolling through a park or hiking in nature reduce stress hormones and improve overall wellbeing.\n\nHowever, it is crucial not to overschedule your days off. Planning too many exhausting events can make your weekend feel like another demanding job. The key is balance. Allocating time for quiet reflection, catching up with close friends, and pursuing passionate hobbies allows workers to return to the office feeling motivated and creative. Ultimately, treating your leisure time with the same respect as your professional schedule is vital for long-term career success and personal happiness.",
                jpn: "厳しい企業環境で働くプロフェッショナルにとって、週末は単なる休みではありません。それは心理的、肉体的な回復のための不可欠な期間です。研究者たちは、効果的な余暇とは、個人が職業上の責任から完全に切り離されることを可能にする活動であると定義しています。土曜日の朝にメールをチェックすると、月曜日までに疲れ果ててしまうことに気づいたことはありますか？絶え間ない接続性はオフィスと家庭の境界を曖昧にし、脳が純粋にリラックスするのを妨げます。\n\n専門家は、精神的な疲労と闘うために積極的なレクリエーションに従事することを推奨しています。週末中ずっとテレビを見て過ごすことはリラックスできるように思えますが、研究によると、活気ある近所を探索したり、文化的な展覧会を訪れたり、新しいスポーツを試したりするといった斬新な活動に参加する方が、実際にはエネルギーを充電するのにより効果的であることが示されています。これらの自発的なお出かけは、脳の異なる領域を刺激し、反復的な日常業務に爽快な対比を提供します。さらに、公園の散歩や自然の中でのハイキングといった身体活動は、ストレスホルモンを減らし、全体的な幸福感を向上させます。\n\nしかしながら、休日の予定を詰め込みすぎないことが極めて重要です。疲れ果てるようなイベントを計画しすぎると、週末が別の厳しい仕事のように感じられてしまいます。鍵となるのはバランスです。静かに物思いにふけるための時間を割り当て、親しい友人たちと近況を報告し合い、情熱的な趣味を追求することで、労働者はやる気と創造性に満ちた状態でオフィスに戻ることができます。最終的に、余暇時間を仕事のスケジュールと同じ敬意を持って扱うことが、長期的なキャリアの成功と個人の幸福にとって不可欠なのです。"
            }
        }
    },
    {
        id: 9,
        chapter: "Chapter 2: Small Talk",
        type: "transactional",
        title: "Lesson 9: How to start a chat",
        goal: "Start a conversation naturally, introduce topics, and change the subject politely. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(自然に会話を始め、話題を導入し、丁寧に話題を変える。)</span>",
        vocab: [
            { eng: "Mention", jpn: "言及する / 触れる" },
            { eng: "Bring up", jpn: "（話題を）持ち出す" },
            { eng: "Notice", jpn: "気づく" },
            { eng: "Regard", jpn: "〜に関して / 見なす" },
            { eng: "Concerning", jpn: "〜に関する" },
            { eng: "Shift", jpn: "移す / 移行する" },
            { eng: "Transition", jpn: "移行 / 推移" },
            { eng: "Interrupt", jpn: "遮る / 中断する" },
            { eng: "Observe", jpn: "観察する / 気づく" },
            { eng: "State", jpn: "述べる" },
            { eng: "Recall", jpn: "思い出す" },
            { eng: "Proceed", jpn: "進む / 続ける" },
            { eng: "Relevant", jpn: "関連のある" },
            { eng: "Discuss", jpn: "話し合う" }
        ],
        dialogue: [
            { speaker: "A", eng: "Good morning. <span class='swappable'>Did you happen to catch the news yesterday?</span>", jpn: "おはようございます。昨日のニュースは偶然ご覧になりましたか？" },
            { speaker: "B", eng: "Yes, I did. <span class='swappable'>I noticed they mentioned the upcoming tech expo.</span>", jpn: "ええ、見ましたよ。彼らが今度のテクノロジー博覧会に言及しているのに気づきました。" },
            { speaker: "A", eng: "Exactly. <span class='swappable'>Regarding that topic, are we planning to attend?</span>", jpn: "その通りです。その話題に関してですが、私たちは参加する予定ですか？" },
            { speaker: "B", eng: "I believe so. The manager brought it up during the briefing.", jpn: "そうだと思います。マネージャーがブリーフィング中にその話題を持ち出しましたから。" },
            { speaker: "A", eng: "<span class='swappable'>I don't mean to change the subject, but</span> have you finished the budget report?", jpn: "話題を変えるつもりはないのですが、予算報告書は終わりましたか？" },
            { speaker: "B", eng: "Not yet. <span class='swappable'>I will proceed by submitting it this afternoon.</span>", jpn: "まだです。今日の午後に提出することで進めます。" }
        ],
        expressions: [
            { category: "1. Introducing a topic (話題を導入する)", options: ["Did you happen to catch the news yesterday?", "I was wondering if you saw the latest email.", "Have you heard about the upcoming changes?"] },
            { category: "2. Bringing up new topics (新しい話題を持ち出す)", options: ["Regarding that topic, are we planning to attend?", "Concerning the project, when is the deadline?", "Speaking of the expo, who is going?"] },
            { category: "3. Changing the subject (話題を変える)", options: ["I don't mean to change the subject, but...", "Before I forget, I wanted to mention...", "Moving on to something else, did you know..."] },
            { category: "4. Noting observations (気づいたことを述べる)", options: ["I noticed they mentioned the upcoming tech expo.", "I observed that the client was very happy.", "I recall you stating that earlier."] },
            { category: "5. Interrupting politely (丁寧に遮る)", options: ["Sorry to interrupt, but I have a quick question.", "Excuse me, can I bring up a relevant point?", "If I may interrupt for a second..."] },
            { category: "6. Explaining methods (方法を説明する)", options: ["I will proceed by submitting it this afternoon.", "We can solve it by updating the software.", "You learn best by observing experts."] }
        ],
        grammarPoints: [
            {
                point: "1. Prepositions: 'By' + Gerund (-ing) for Methods",
                explanation: "To explain the specific method or action used to achieve a result, use the preposition 'by' followed directly by a gerund (-ing verb).",
                explanationJpn: "結果を達成するために使用される具体的な方法や行動を説明するには、前置詞「by」の直後に動名詞（-ing形の動詞）を続けて使用します。",
                examples: [
                    { eng: "We improved sales by updating our website.", jpn: "私たちはウェブサイトを更新することによって売上を向上させました。" },
                    { eng: "You can reach the manager by calling this number.", jpn: "この番号に電話することで、マネージャーに連絡を取ることができます。" }
                ]
            },
            {
                point: "2. Phrases: 'Speaking of' / 'Regarding'",
                explanation: "To transition to a topic that is related to the current conversation, use 'Speaking of [noun]' or 'Regarding [noun]'. These are highly authentic ways to shift a chat naturally.",
                explanationJpn: "現在の会話に関連する話題に移行するには、「Speaking of [名詞]（〜と言えば）」や「Regarding [名詞]（〜に関して）」を使用します。これらは自然に会話を移行させる非常に本物らしい方法です。",
                examples: [
                    { eng: "Speaking of the project, did you finish your task?", jpn: "プロジェクトと言えば、あなたのタスクは終わりましたか？" },
                    { eng: "Regarding your request, we have approved it.", jpn: "あなたのご要望に関して、私たちはそれを承認しました。" }
                ]
            }
        ],
        clickingGames: [
            { prompt: "話題を変えるつもりはないのですが…", target: "I don't mean to change the subject, but...", words: ["I", "don't", "mean", "to", "change", "the", "subject,", "but..."] },
            { prompt: "昨日のニュースは偶然ご覧になりましたか？", target: "Did you happen to catch the news yesterday?", words: ["Did", "you", "happen", "to", "catch", "the", "news", "yesterday?"] } ,
            { prompt: "ソフトウェアを更新することでそれを解決できます。", target: "We can solve it by updating the software.", words: ["We", "can", "solve", "it", "by", "updating", "the", "software."] },
            { prompt: "その話題に関して、私たちは参加する予定ですか？", target: "Regarding that topic, are we planning to attend?", words: ["Regarding", "that", "topic,", "are", "we", "planning", "to", "attend?"] },
            { prompt: "忘れる前に、言っておきたいことがありました。", target: "Before I forget, I wanted to mention...", words: ["Before", "I", "forget,", "I", "wanted", "to", "mention..."] }
        ],
        dropdownGames: [
            { before: "Did you", options: ["happen", "happening", "happens"], answer: "happen", after: " to catch the news yesterday?" },
            { before: "", options: ["Regarding", "Regard", "Regards"], answer: "Regarding", after: " the new schedule, when do we start?" },
            { before: "I don't mean to", options: ["change", "shift", "interrupt"], answer: "change", after: " the subject, but what time is it?" },
            { before: "We can save time", options: ["by", "with", "for"], answer: "by", after: " automating the process." },
            { before: "", options: ["Speaking", "Talking", "Saying"], answer: "Speaking", after: " of lunch, I am quite hungry." },
            { before: "I", options: ["noticed", "noticing", "notice"], answer: "noticed", after: " they mentioned the budget cuts." },
            { before: "Before I", options: ["forget", "forgetting", "forgot"], answer: "forget", after: ", we need to sign the contract." },
            { before: "Sorry to", options: ["interrupt", "interrupting", "interrupted"], answer: "interrupt", after: ", but I have a relevant question." },
            { before: "He improved his skills", options: ["by", "on", "in"], answer: "by", after: " practicing every weekend." },
            { before: "I will proceed", options: ["by", "for", "to"], answer: "by", after: " submitting the report now." }
        ],
        roleplay: {
            a: "You are chatting with a coworker. Introduce a new topic naturally ('Did you happen to...'). Then, politely interrupt the conversation to change the subject using 'Before I forget...'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(同僚と雑談しています。「Did you happen to...」を使って自然に新しい話題を導入してください。その後、「Before I forget...」を使って丁寧に会話を遮り、話題を変えてください。)</span>",
            b: "Respond to your coworker's topic. Then, use 'Regarding...' or 'Speaking of...' to ask a follow-up question. Finally, explain how you will complete a task using 'by + -ing'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(同僚の話題に答えてください。その後、「Regarding...」または「Speaking of...」を使って追加の質問をしてください。最後に、「by + -ing」を使ってタスクをどのように完了させるか説明してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Figure out", jpn: "理解する、解決する", exEng: "I need to figure out how to use this app.", exJpn: "このアプリの使い方を理解する必要がある。" },
                { eng: "Find out", jpn: "見つける、解明する", exEng: "We will find out the results tomorrow.", exJpn: "明日結果が判明する。" },
                { eng: "Point out", jpn: "指摘する", exEng: "She pointed out my mistake politely.", exJpn: "彼女は私の間違いを丁寧に指摘した。" },
                { eng: "Carry out", jpn: "実行する", exEng: "They will carry out the plan next week.", exJpn: "彼らは来週その計画を実行する。" },
                { eng: "Stand out", jpn: "目立つ", exEng: "His bright red jacket makes him stand out.", exJpn: "彼の明るい赤いジャケットは彼を目立たせる。" },
                { eng: "Rule out", jpn: "除外する", exEng: "We cannot rule out any possibilities.", exJpn: "私たちはどんな可能性も除外できない。" },
                { eng: "Work out", jpn: "運動する、解決する", exEng: "I work out at the gym on weekends.", exJpn: "私は週末にジムで運動する。" },
                { eng: "Turn out", jpn: "～という結果になる", exEng: "The meeting turned out to be very useful.", exJpn: "その会議はとても役に立つという結果になった。" },
                { eng: "Hand out", jpn: "配る", exEng: "Please hand out these documents.", exJpn: "これらの書類を配ってください。" },
                { eng: "Fill out", jpn: "記入する", exEng: "You must fill out this form.", exJpn: "この用紙に記入しなければならない。" },
                { eng: "Leave out", jpn: "省く、仲間外れにする", exEng: "Do not leave out any important details.", exJpn: "重要な詳細を一つも省かないでください。" },
                { eng: "Drop out", jpn: "退学する、脱落する", exEng: "He decided to drop out of the course.", exJpn: "彼はそのコースを脱落することを決めた。" },
                { eng: "Break out", jpn: "勃発する、発生する", exEng: "A fire broke out in the kitchen.", exJpn: "キッチンで火事が発生した。" },
                { eng: "Run out", jpn: "使い果たす", exEng: "We have run out of printer paper.", exJpn: "プリンターの紙を使い果たしてしまった。" },
                { eng: "Pass out", jpn: "気絶する、配る", exEng: "It was so hot that he passed out.", exJpn: "とても暑かったので彼は気絶した。" },
                { eng: "Check out", jpn: "確認する", exEng: "You should check out that new restaurant.", exJpn: "あの新しいレストランをチェックするべきだ。" },
                { eng: "Come out", jpn: "現れる、発売される", exEng: "The new movie will come out next month.", exJpn: "その新しい映画は来月公開される。" },
                { eng: "Bring out", jpn: "引き出す、世に出す", exEng: "Competition brings out the best in him.", exJpn: "競争は彼の最高の部分を引き出す。" },
                { eng: "Hang out", jpn: "遊ぶ、ぶらぶらする", exEng: "Let's hang out at the cafe after work.", exJpn: "仕事の後、カフェで遊ぼう。" },
                { eng: "Speak out", jpn: "はっきりと意見を言う", exEng: "You should speak out if you disagree.", exJpn: "反対ならはっきりと意見を言うべきだ。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "Good morning, Ken. Did you happen to catch the news yesterday?", jpn: "おはよう、ケン。昨日のニュースは偶然ご覧になりましたか？" },
                { speaker: "B", eng: "Yes, I did. I noticed they mentioned the upcoming tech expo in Tokyo.", jpn: "ええ、見ましたよ。彼らが東京での今度のテクノロジー博覧会に言及しているのに気づきました。" },
                { speaker: "A", eng: "Exactly. Regarding that topic, are we planning to attend this year?", jpn: "その通りです。その話題に関してですが、今年は参加する予定ですか？" },
                { speaker: "B", eng: "I believe so. The manager brought it up during the briefing yesterday.", jpn: "そうだと思います。マネージャーが昨日のブリーフィング中にその話題を持ち出しましたから。" },
                { speaker: "A", eng: "That's great. We can learn a lot by observing the new software demonstrations.", jpn: "それは素晴らしい。新しいソフトウェアのデモンストレーションを観察することで、多くを学ぶことができますね。" },
                { speaker: "B", eng: "I agree. Speaking of software, I don't mean to change the subject, but did you fix the bug?", jpn: "同感です。ソフトウェアの話と言えば、話題を変えるつもりはないのですが、バグは直しましたか？" },
                { speaker: "A", eng: "Not entirely. I am trying to figure out the root cause of the error.", jpn: "完全には。エラーの根本原因を解明しようとしているところです。" },
                { speaker: "B", eng: "If I may interrupt for a second, I found a solution by searching the company forum.", jpn: "少し遮らせてもらえれば、会社のフォーラムを検索することで解決策を見つけましたよ。" },
                { speaker: "A", eng: "Oh, really? That is highly relevant. Could you point out the link to me?", jpn: "おお、本当ですか？それは非常に関連性がありますね。私にそのリンクを教えて（指摘して）いただけませんか？" },
                { speaker: "B", eng: "Sure. I will proceed by sending it to your email right now.", jpn: "もちろんです。今すぐあなたのメールに送信することで進めます。" },
                { speaker: "A", eng: "Thanks. Before I forget, we also need to fill out the expo registration forms.", jpn: "ありがとう。忘れる前に、博覧会の登録用紙にも記入する必要があります。" },
                { speaker: "B", eng: "Right. We shouldn't leave out any important details.", jpn: "そうですね。重要な詳細は一切省くべきではありません。" },
                { speaker: "A", eng: "I will check out the website and hand out the forms later.", jpn: "後でウェブサイトを確認して、用紙を配布します。" },
                { speaker: "B", eng: "Excellent. Let's hang out during lunch to discuss it further.", jpn: "素晴らしい。お昼休みに一緒に過ごして、さらに話し合いましょう。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph explaining how you usually start a conversation with a coworker. Use 'by + -ing' to explain your method.",
                promptJpn: "同僚との会話を普段どのように始めるかを説明する短い段落を書いてください。自分の方法を説明するために「by + -ing」を使用してください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Art of Small Talk)",
                instruction: "Read this authentic article to learn more about workplace communication. This section provides real-world context for B1 learners.",
                eng: "Small talk is often considered a minor, unimportant part of the workday. However, sociologists argue that casual conversations are the glue that holds a professional team together. Starting a chat naturally requires a certain level of social intelligence. You cannot simply walk up to a colleague and immediately demand a budget report. Instead, professionals build rapport by introducing neutral, relatable topics. Mentioning the weather, a recent sports event, or a popular news story is a safe and effective way to break the ice.\n\nOnce a conversation has started, smoothly transitioning between topics is an essential skill. Abruptly changing the subject can make you appear rude or uninterested in the other person. Skilled communicators use specific transitional phrases to bridge the gap between casual chat and business matters. Phrases like \"Speaking of the new project...\" or \"Before I forget...\" allow you to shift the focus without interrupting the natural flow of the dialogue. These expressions demonstrate that you value the interaction while still valuing your time.\n\nFurthermore, understanding how to politely interrupt is crucial in a busy office environment. If you urgently need information, barging into a room is inappropriate. Softening your interruption with phrases like \"I don't mean to change the subject, but...\" shows respect for the ongoing conversation. By mastering these linguistic tools, employees can navigate complex social dynamics, foster stronger workplace relationships, and ultimately improve overall team collaboration.",
                jpn: "雑談はしばしば、一日の仕事において些細で重要ではない部分と考えられています。しかし、社会学者は、カジュアルな会話こそがプロフェッショナルなチームをまとめる接着剤であると主張しています。自然に会話を始めるには、ある程度の社会的知性が必要です。単に同僚に歩み寄って、すぐに予算報告書を要求することはできません。代わりに、プロフェッショナルは中立的で共感できる話題を導入することによってラポール（信頼関係）を築きます。天気、最近のスポーツイベント、または人気のあるニュースの話題に言及することは、緊張をほぐすための安全で効果的な方法です。\n\nいったん会話が始まったら、話題の間をスムーズに移行することが不可欠なスキルとなります。突然話題を変えると、無礼であったり、相手に無関心であるように見えたりする可能性があります。熟練したコミュニケーターは、カジュアルな雑談とビジネスの事柄の間の橋渡しをするために、特定のつなぎのフレーズを使用します。「新しいプロジェクトと言えば…」や「忘れる前に…」といったフレーズは、対話の自然な流れを遮ることなく焦点を移すことを可能にします。これらの表現は、あなたが自分の時間を大切にしつつも、そのやり取りを重んじていることを示します。\n\nさらに、忙しいオフィス環境においては、丁寧に遮る方法を理解することが極めて重要です。緊急に情報が必要な場合でも、部屋に押し入ることは不適切です。「話題を変えるつもりはないのですが…」といったフレーズで自分の割り込みを和らげることは、進行中の会話に対する敬意を示します。これらの言語的ツールを習得することで、従業員は複雑な社会的力学をうまく乗り切り、職場の人間関係をより強固に育み、最終的にはチーム全体のコラボレーションを向上させることができるのです。"
            }
        }
    },
    {
        id: 10,
        chapter: "Chapter 2: Small Talk",
        type: "opinion",
        title: "Lesson 10: Opinion Exchange - The weather & travel",
        goal: "Discuss travel experiences and weather conditions using comparative adverbs. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(比較の副詞を使って、旅行の経験や天候の状況について話し合う。)</span>",
        questions: [
            { eng: "1. Does bad weather severely disrupt your daily commute?", jpn: "1. 悪天候はあなたの日々の通勤をひどく混乱させますか？" },
            { eng: "2. How do you prepare for unpredictable climates when traveling abroad?", jpn: "2. 海外旅行の際、予測不可能な気候にどのように備えますか？" },
            { eng: "3. Do trains operate more reliably in your city compared to other countries?", jpn: "3. あなたの都市の電車は、他の国と比較してより確実（信頼できる状態）に運行していますか？" },
            { eng: "4. What is the most pleasant destination you have ever visited?", jpn: "4. これまでに訪れた中で最も快適な目的地はどこですか？" },
            { eng: "5. Why do storms occur more frequently during certain seasons?", jpn: "5. 特定の季節に嵐がより頻繁に発生するのはなぜですか？" },
            { eng: "6. Do you react more calmly to a delayed flight now than you did in the past?", jpn: "6. 以前と比べて、今の方がフライトの遅延に対してより冷静に反応しますか？" },
            { eng: "7. How heavily does a freezing winter impact a company's productivity?", jpn: "7. 凍えるような冬は、企業の生産性にどれほど重く影響しますか？" },
            { eng: "8. Is it better to travel independently or with a guided tour group?", jpn: "8. 個人で（独立して）旅行するのと、ガイド付きツアーグループで行くのはどちらが良いですか？" },
            { eng: "9. Have you ever experienced a severe natural disaster while on vacation?", jpn: "9. 休暇中に深刻な自然災害を経験したことはありますか？" },
            { eng: "10. How quickly can a city recover from heavy snowfall?", jpn: "10. 都市は大雪からどれくらい早く回復できますか？" }
        ],
        vocab: [
            { eng: "Climate", jpn: "気候" },
            { eng: "Forecast", jpn: "予報" },
            { eng: "Unpredictable", jpn: "予測不可能な" },
            { eng: "Severe", jpn: "深刻な / 厳しい" },
            { eng: "Mild", jpn: "穏やかな" },
            { eng: "Destination", jpn: "目的地" },
            { eng: "Commute", jpn: "通勤 / 通勤する" },
            { eng: "Disrupt", jpn: "混乱させる / 中断させる" },
            { eng: "Delay", jpn: "遅延 / 遅らせる" },
            { eng: "Humid", jpn: "湿気の多い" },
            { eng: "Freezing", jpn: "凍えるような" },
            { eng: "Pleasant", jpn: "快適な / 楽しい" },
            { eng: "Occur", jpn: "起こる / 発生する" },
            { eng: "Prepare", jpn: "準備する" }
        ],
        grammarPoints: [
            {
                point: "1. Adverbs: Comparative adverbs (more + adverb)",
                explanation: "To compare how two actions are performed, use 'more' or 'less' before an adverb that ends in '-ly' (e.g., more quickly, less frequently).",
                explanationJpn: "2つの行動がどのように行われるかを比較するには、「-ly」で終わる副詞の前に「more」または「less」を使用します（例：more quickly, less frequently）。",
                examples: [
                    { eng: "Trains operate more reliably in Japan than in Europe.", jpn: "日本ではヨーロッパよりも電車が確実に（信頼できる状態で）運行しています。" },
                    { eng: "Storms occur less frequently in the winter.", jpn: "嵐は冬にはあまり頻繁に発生しません。" }
                ]
            },
            {
                point: "2. Adverbs: Irregular comparative adverbs",
                explanation: "Some adverbs have irregular comparative forms. For example, 'well' becomes 'better', 'badly' becomes 'worse', 'hard' becomes 'harder', and 'fast' becomes 'faster'.",
                explanationJpn: "一部の副詞は不規則な比較変化をします。例えば、「well」は「better」に、「badly」は「worse」に、「hard」は「harder」に、「fast」は「faster」になります。",
                examples: [
                    { eng: "She speaks English better than I do.", jpn: "彼女は私よりも上手に英語を話します。" },
                    { eng: "I drive faster when I am late for work.", jpn: "仕事に遅れそうなとき、私はより速く運転します。" }
                ]
            }
        ],
        expressions: [
            { eng: "In addition", jpn: "さらに / 加えて" },
            { eng: "On the whole", jpn: "全体的に見て" },
            { eng: "Specifically", jpn: "具体的に言うと" },
            { eng: "Provided that", jpn: "〜という条件で" },
            { eng: "In reality", jpn: "現実には / 実際には" }
        ],
        homework: {
            vocab: [
                { eng: "Back out", jpn: "手を引く", exEng: "The sponsor decided to back out of the agreement.", exJpn: "スポンサーは合意から手を引くことを決定した。" },
                { eng: "Blow out", jpn: "吹き消す、パンクする", exEng: "The tire blew out while we were driving on the highway.", exJpn: "高速道路を運転中にタイヤがパンクした。" },
                { eng: "Cross out", jpn: "線を引いて消す", exEng: "Please cross out any irrelevant information on the document.", exJpn: "書類上の無関係な情報は線で消してください。" },
                { eng: "Eat out", jpn: "外食する", exEng: "We prefer to eat out at vibrant local restaurants.", exJpn: "私たちは活気ある地元のレストランで外食することを好みます。" },
                { eng: "Get out", jpn: "出る、逃げる", exEng: "It is crucial to get out of the office and unwind.", exJpn: "オフィスから出てリラックスすることは極めて重要だ。" },
                { eng: "Help out", jpn: "手伝う", exEng: "I occasionally help out at the community recreation center.", exJpn: "私はたまに地域のレクリエーションセンターで手伝いをします。" },
                { eng: "Keep out", jpn: "中に入れない", exEng: "Security guards will keep out unauthorized personnel.", exJpn: "警備員は無許可の人員を立ち入り禁止にします。" },
                { eng: "Lay out", jpn: "設計する、説明する", exEng: "The manager will lay out the itinerary for the outing.", exJpn: "マネージャーはお出かけの旅程を説明します。" },
                { eng: "Look out", jpn: "気をつける", exEng: "Look out for unpredictable weather during your hike.", exJpn: "ハイキング中は予測不可能な天気に気をつけてください。" },
                { eng: "Make out", jpn: "理解する、判読する", exEng: "I could barely make out the sign in the dense fog.", exJpn: "濃い霧の中で標識をかろうじて判読できた。" },
                { eng: "Pick out", jpn: "選ぶ", exEng: "She took hours to pick out a suitable venue.", exJpn: "彼女は適切な会場を選ぶのに何時間もかけた。" },
                { eng: "Put out", jpn: "消す、発行する", exEng: "The company put out a press release regarding the event.", exJpn: "会社はそのイベントに関するプレスリリースを発行した。" },
                { eng: "Sell out", jpn: "売り切れる", exEng: "Tickets for the exhibition usually sell out rapidly.", exJpn: "その展覧会のチケットは通常急速に売り切れる。" },
                { eng: "Sort out", jpn: "整理する、解決する", exEng: "We need to sort out our transportation arrangements.", exJpn: "私たちは交通手段の手配を整理（解決）する必要がある。" },
                { eng: "Spell out", jpn: "詳しく説明する", exEng: "Let me spell out the primary goals of this project.", exJpn: "このプロジェクトの主要な目標を詳しく説明させてください。" },
                { eng: "Wipe out", jpn: "一掃する、ひどく疲れさせる", exEng: "That exhausting workout completely wiped me out.", exJpn: "あの疲れ果てるトレーニングで私は完全にヘトヘトになった。" },
                { eng: "Strike out", jpn: "失敗する", exEng: "Our initial marketing strategy unfortunately struck out.", exJpn: "私たちの初期のマーケティング戦略は残念ながら失敗した。" },
                { eng: "Take out", jpn: "持ち出す、取り出す", exEng: "I will take out the necessary documents from the archive.", exJpn: "アーカイブから必要な書類を取り出します。" },
                { eng: "Try out", jpn: "試してみる", exEng: "Have you ever tried out scuba diving?", exJpn: "スキューバダイビングを試してみたことはありますか？" },
                { eng: "Wear out", jpn: "疲れ果てさせる、すり減る", exEng: "Consistent overtime will eventually wear out your employees.", exJpn: "絶え間ない残業は最終的に従業員を疲れ果てさせる。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "Did you manage to get to work okay? The weather forecast was terrible.", jpn: "無事に職場に着けましたか？天気予報は最悪でしたよ。" },
                { speaker: "B", eng: "Barely. The unpredictable snow severely disrupted my commute.", jpn: "かろうじて。予測不可能な雪が私の通勤をひどく混乱させました。" },
                { speaker: "A", eng: "I know. Traffic moves much more slowly when the roads are freezing.", jpn: "わかります。道が凍結していると、交通ははるかに遅く動きますよね。" },
                { speaker: "B", eng: "In reality, I think the city handles heavy rain better than snow.", jpn: "実際には、市は大雨の方を雪よりも上手に処理すると思います。" },
                { speaker: "A", eng: "I agree. In addition, the trains operate less reliably in winter.", jpn: "同感です。さらに、冬は電車の運行の信頼性が低くなります。" },
                { speaker: "B", eng: "It's frustrating. Have you ever experienced a severe delay while traveling abroad?", jpn: "イライラしますね。海外旅行中に深刻な遅延を経験したことはありますか？" },
                { speaker: "A", eng: "Yes, once in London. We had to wait for five hours at the destination airport.", jpn: "はい、一度ロンドンで。目的地の空港で5時間も待たなければなりませんでした。" },
                { speaker: "B", eng: "That sounds exhausting. Did you react more calmly then?", jpn: "それは疲れ果てそうですね。その時、あなたはより冷静に反応しましたか？" },
                { speaker: "A", eng: "Not at all. I was very angry. But now, I try to prepare more thoroughly.", jpn: "全く。とても怒っていました。でも今は、より徹底的に準備するよう努めています。" },
                { speaker: "B", eng: "That is a wise choice. On the whole, a pleasant attitude makes delays easier to handle.", jpn: "それは賢明な選択ですね。全体的に見て、快適な（朗らかな）態度の方が遅延に対処しやすくなります。" },
                { speaker: "A", eng: "Exactly. Provided that I have a good book, I can wait patiently.", jpn: "その通りです。良い本さえ持っていれば、私は忍耐強く待つことができます。" },
                { speaker: "B", eng: "I will pack a book for my next trip. I don't want to strike out again.", jpn: "次の旅行には本を荷物に入れます。もう失敗したくありませんから。" },
                { speaker: "A", eng: "Good idea. Let's sort out our current project before the mild weather disappears.", jpn: "良い考えですね。穏やかな天気が消え去る前に、現在のプロジェクトを整理（解決）しましょう。" },
                { speaker: "B", eng: "Agreed. I will lay out the plan for you right now.", jpn: "賛成です。今すぐあなたに計画を説明します。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: Does bad weather disrupt your daily routine more severely now than in the past?",
                promptJpn: "「悪天候は、過去と比べて今の方があなたの日々のルーティンをよりひどく混乱させますか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Economic Impact of Extreme Weather)",
                instruction: "Read this authentic article to learn more about weather impacts. This section provides real-world context for B1 learners.",
                eng: "In today's highly connected global economy, unpredictable weather conditions have a profound impact on international business and daily commutes. Over the last decade, climatologists have observed that severe weather events, such as massive typhoons and freezing blizzards, occur more frequently than they did in the past. When these dramatic climate shifts happen, they severely disrupt transportation networks. For example, a sudden snowstorm can force airlines to cancel hundreds of flights, leaving business travelers stranded at their destinations and delaying crucial corporate meetings.\n\nThe economic consequences of these disruptions are massive. Companies lose millions of dollars when supply chains operate less reliably. If delivery trucks must drive more slowly due to icy roads, factories might not receive essential materials on time. In addition, local businesses suffer when extreme heat or humid conditions keep customers inside their homes. In reality, urban infrastructure in many regions is not prepared to handle these rapid changes. While some cities clear snow away extremely quickly, others struggle to restore basic services, causing widespread frustration among citizens.\n\nTo mitigate these risks, modern corporations must prepare more thoroughly. Many companies now implement flexible remote work policies, allowing employees to remain productive from home when commuting becomes too dangerous. Furthermore, logistics managers utilize advanced forecasting software to predict weather patterns more accurately, ensuring that goods can be rerouted if a severe storm is approaching. On the whole, while we cannot control the weather, society must adapt more dynamically to ensure that unpredictable climates do not permanently damage our economic stability.",
                jpn: "今日の高度につながったグローバル経済において、予測不可能な天候状況は国際ビジネスや日々の通勤に深い影響を与えています。過去10年間で、気候学者は巨大な台風や凍えるような吹雪などの厳しい気象現象が、過去よりも頻繁に発生していることを観察してきました。これらの劇的な気候の変動が起こると、交通ネットワークをひどく混乱させます。例えば、突然の吹雪は航空会社に何百ものフライトのキャンセルを強いる可能性があり、出張者を目的地で足止めさせ、極めて重要な企業会議を遅延させます。\n\nこれらの混乱による経済的影響は甚大です。サプライチェーンの確実性が低下すると（確実でない状態で稼働すると）、企業は何百万ドルもの損失を被ります。凍結した道路のために配送トラックがより遅く運転しなければならない場合、工場は不可欠な材料を時間通りに受け取れないかもしれません。加えて、極端な暑さや湿気の多い状況が顧客を家の中に留まらせる場合、地元企業は打撃を受けます。現実には、多くの地域の都市インフラはこれらの急速な変化に対処する準備ができていません。一部の都市が極めて迅速に雪を片付ける一方で、他の都市は基本的なサービスを回復するのに苦労し、市民の間に広範なフラストレーションを引き起こしています。\n\nこれらのリスクを軽減するために、現代の企業はより徹底的に準備しなければなりません。現在、多くの企業が柔軟なリモートワーク方針を導入しており、通勤が危険になりすぎた場合には従業員が自宅から生産性を維持できるようにしています。さらに、物流マネージャーは高度な予測ソフトウェアを利用して気象パターンをより正確に予測し、激しい嵐が近づいている場合には商品を迂回できるように保証しています。全体的に見て、私たちが天候をコントロールすることはできませんが、予測不可能な気候が私たちの経済的安定を永久に損なうことがないよう、社会はより動的に適応しなければならないのです。"
            }
        }
    },
    {
        id: 11,
        chapter: "Chapter 2: Small Talk",
        type: "transactional",
        title: "Lesson 11: How to end a chat politely",
        goal: "End a conversation gracefully, express enjoyment, and use gerunds after prepositions. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話を優雅に終え、楽しかったことを表現し、前置詞の後に動名詞を使用する。)</span>",
        vocab: [
            { eng: "Wrap up", jpn: "締めくくる / 終わらせる" },
            { eng: "Conclude", jpn: "結論を出す / 終える" },
            { eng: "Graceful", jpn: "優雅な / 丁寧な" },
            { eng: "Appreciate", jpn: "感謝する" },
            { eng: "Delightful", jpn: "楽しい / 愉快な" },
            { eng: "Excuse", jpn: "中座する / 言い訳" },
            { eng: "Apologize", jpn: "謝罪する" },
            { eng: "Urgent", jpn: "緊急の" },
            { eng: "Rush", jpn: "急ぐ" },
            { eng: "Schedule", jpn: "スケジュール" },
            { eng: "Informative", jpn: "有益な / 情報に富んだ" },
            { eng: "Productive", jpn: "生産的な" },
            { eng: "Pleasant", jpn: "快適な / 感じの良い" },
            { eng: "Contact", jpn: "連絡する" }
        ],
        dialogue: [
            { speaker: "A", eng: "It has been a highly <span class='swappable'>informative</span> chat, but <span class='swappable'>I should probably wrap things up now.</span>", jpn: "非常に有益な会話でしたが、そろそろ締めくくらなければなりません。" },
            { speaker: "B", eng: "I understand. <span class='swappable'>I apologize for keeping you so long.</span>", jpn: "わかります。長引かせてしまって申し訳ありません。" },
            { speaker: "A", eng: "Not at all. <span class='swappable'>I truly enjoyed speaking with you.</span>", jpn: "とんでもない。あなたとお話しできて本当に楽しかったです。" },
            { speaker: "B", eng: "Thank you. <span class='swappable'>I look forward to hearing from you soon.</span>", jpn: "ありがとうございます。近いうちにご連絡いただけるのを楽しみにしています。" },
            { speaker: "A", eng: "Absolutely. <span class='swappable'>I must excuse myself because of an urgent meeting.</span>", jpn: "もちろんです。緊急の会議があるため、中座させていただきます。" },
            { speaker: "B", eng: "No problem. Have a <span class='swappable'>productive</span> afternoon.", jpn: "問題ありません。生産的な午後をお過ごしください。" }
        ],
        expressions: [
            { category: "1. Ending a conversation (会話を終わらせる)", options: ["I should probably wrap things up now.", "I need to get back to my desk.", "I am afraid I have to leave now."] },
            { category: "2. Apologizing for ending (終わることを謝る)", options: ["I apologize for keeping you so long.", "I am sorry to rush off like this.", "Forgive me, but I have a tight schedule."] },
            { category: "3. Expressing enjoyment (楽しかったことを表現する)", options: ["I truly enjoyed speaking with you.", "It was delightful to chat with you.", "I appreciate you sharing that with me."] },
            { category: "4. Future contact (将来の連絡)", options: ["I look forward to hearing from you soon.", "I am interested in meeting you again.", "Let's keep in touch regarding the project."] },
            { category: "5. Excusing yourself (中座する)", options: ["I must excuse myself because of an urgent meeting.", "Please excuse me, I have a call waiting.", "I have to step away for a moment."] },
            { category: "6. Polite wishes (丁寧な別れの言葉)", options: ["Have a productive afternoon.", "I hope you have a pleasant weekend.", "Enjoy the rest of the conference."] }
        ],
        grammarPoints: [
            {
                point: "1. Gerunds: After prepositions (-ing verbs)",
                explanation: "When you use a verb immediately after a preposition (like in, on, at, of, for, about, to), the verb MUST be in the gerund (-ing) form.",
                explanationJpn: "前置詞（in, on, at, of, for, about, toなど）の直後に動詞を使用する場合、その動詞は必ず動名詞（-ing形）にしなければなりません。",
                examples: [
                    { eng: "I look forward to hearing from you.", jpn: "あなたからご連絡をいただけるのを楽しみにしています。（'to'は前置詞）" },
                    { eng: "She is interested in learning Java.", jpn: "彼女はJavaを学ぶことに興味があります。" }
                ]
            },
            {
                point: "2. Verbs: Expressing enjoyment + gerund",
                explanation: "Verbs like 'enjoy', 'appreciate', and 'mind' are followed by a gerund (-ing verb), not an infinitive.",
                explanationJpn: "「enjoy」「appreciate」「mind」のような動詞の後は、不定詞ではなく動名詞（-ing形の動詞）が続きます。",
                examples: [
                    { eng: "I truly enjoyed speaking with you.", jpn: "あなたとお話しできて本当に楽しかったです。" },
                    { eng: "I appreciate you taking the time to meet.", jpn: "お会いする時間を取っていただき感謝します。" }
                ]
            }
        ],
        clickingGames: [
            { prompt: "そろそろ締めくくらなければなりません。", target: "I should probably wrap things up now.", words: ["I", "should", "probably", "wrap", "things", "up", "now."] },
            { prompt: "長引かせてしまって申し訳ありません。", target: "I apologize for keeping you so long.", words: ["I", "apologize", "for", "keeping", "you", "so", "long."] },
            { prompt: "あなたとお話しできて本当に楽しかったです。", target: "I truly enjoyed speaking with you.", words: ["I", "truly", "enjoyed", "speaking", "with", "you."] },
            { prompt: "近いうちにご連絡いただけるのを楽しみにしています。", target: "I look forward to hearing from you soon.", words: ["I", "look", "forward", "to", "hearing", "from", "you", "soon."] },
            { prompt: "緊急の会議があるため中座させていただきます。", target: "I must excuse myself because of an urgent meeting.", words: ["I", "must", "excuse", "myself", "because", "of", "an", "urgent", "meeting."] }
        ],
        dropdownGames: [
            { before: "I should probably", options: ["wrap", "wrapping", "wrapped"], answer: "wrap", after: " things up now." },
            { before: "I apologize", options: ["for", "to", "in"], answer: "for", after: " keeping you waiting." },
            { before: "I truly enjoyed", options: ["speak", "speaking", "to speak"], answer: "speaking", after: " with you today." },
            { before: "I look forward to", options: ["meet", "meeting", "met"], answer: "meeting", after: " you again." },
            { before: "She is interested in", options: ["join", "joining", "joined"], answer: "joining", after: " our team." },
            { before: "I must", options: ["excuse", "apologize", "forgive"], answer: "excuse", after: " myself to take a phone call." },
            { before: "Have a", options: ["product", "productive", "producing"], answer: "productive", after: " afternoon." },
            { before: "I am sorry to", options: ["rush", "rushing", "rushed"], answer: "rush", after: " off like this." },
            { before: "We succeeded in", options: ["finish", "finishing", "finished"], answer: "finishing", after: " the project on time." },
            { before: "I appreciate you", options: ["share", "sharing", "shared"], answer: "sharing", after: " that information." }
        ],
        roleplay: {
            a: "You are talking with a client but you need to go to a meeting. End the conversation gracefully ('I should probably wrap things up'). Express that you enjoyed speaking with them using a gerund. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはクライアントと話していますが、会議に行かなければなりません。「そろそろ締めくくらなければ」と優雅に会話を終わらせてください。動名詞を使って、話せて楽しかったことを表現してください。)</span>",
            b: "Apologize for keeping them so long. State that you look forward to hearing from them in the future (use 'to + -ing'). Wish them a productive afternoon. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(長引かせたことを謝罪してください。将来彼らから連絡が来るのを楽しみにしていると述べてください（'to + -ing'を使用）。生産的な午後になるよう祈ってください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Put on", jpn: "着る、身につける", exEng: "Please put on your formal suit for the event.", exJpn: "イベントにはフォーマルなスーツを着用してください。" },
                { eng: "Take on", jpn: "引き受ける、雇う", exEng: "Our company will take on three new developers.", exJpn: "当社は3人の新しい開発者を雇い入れます。" },
                { eng: "Carry on", jpn: "続ける", exEng: "We must carry on with the project despite the delay.", exJpn: "遅延にもかかわらず、私たちはプロジェクトを続けなければなりません。" },
                { eng: "Hold on", jpn: "待つ、持ちこたえる", exEng: "Please hold on for a moment while I check the file.", exJpn: "ファイルを確認する間、少々お待ちください。" },
                { eng: "Keep on", jpn: "〜し続ける", exEng: "If you keep on practicing, you will improve rapidly.", exJpn: "練習し続ければ、急速に上達するでしょう。" },
                { eng: "Go on", jpn: "続く、起こる", exEng: "The meeting will go on until five o'clock.", exJpn: "会議は5時まで続きます。" },
                { eng: "Call on", jpn: "訪問する、要求する", exEng: "The manager may call on you to present the data.", exJpn: "マネージャーはデータを提供するためにあなたを指名する（要求する）かもしれません。" },
                { eng: "Count on", jpn: "頼る、当てにする", exEng: "You can count on me to finish the report on time.", exJpn: "時間通りにレポートを終わらせるよう私を頼って（当てにして）ください。" },
                { eng: "Depend on", jpn: "〜による、依存する", exEng: "The final budget will depend on the client's decision.", exJpn: "最終的な予算はクライアントの決定によります。" },
                { eng: "Focus on", jpn: "集中する", exEng: "We need to focus on our marketing strategy this quarter.", exJpn: "今四半期はマーケティング戦略に集中する必要があります。" },
                { eng: "Insist on", jpn: "強く要求する、主張する", exEng: "The client insists on a completely flawless design.", exJpn: "クライアントは完全に無傷（完璧）なデザインを強く要求しています。" },
                { eng: "Log on", jpn: "ログインする", exEng: "You must log on to the secure network first.", exJpn: "まず安全なネットワークにログインしなければなりません。" },
                { eng: "Pass on", jpn: "伝える、譲る", exEng: "Could you pass on this message to the director?", exJpn: "このメッセージをディレクターに伝えていただけますか？" },
                { eng: "Rely on", jpn: "頼る、信頼する", exEng: "We rely on accurate data to make business decisions.", exJpn: "私たちはビジネスの決定を下すために正確なデータに頼っています。" },
                { eng: "Turn on", jpn: "電源を入れる", exEng: "Do not forget to turn on the projector before the presentation.", exJpn: "プレゼンテーションの前にプロジェクターの電源を入れるのを忘れないでください。" },
                { eng: "Work on", jpn: "取り組む", exEng: "I will work on fixing the software bugs tomorrow.", exJpn: "明日、ソフトウェアのバグ修正に取り組みます。" },
                { eng: "Try on", jpn: "試着する", exEng: "I need to try on this jacket to see if it fits.", exJpn: "サイズが合うか確認するためにこのジャケットを試着する必要があります。" },
                { eng: "Catch on", jpn: "流行する、理解する", exEng: "The new social media application is starting to catch on.", exJpn: "その新しいソーシャルメディアアプリは流行し始めています。" },
                { eng: "Get on", jpn: "乗る、仲良くやる", exEng: "We need to get on the train before it departs.", exJpn: "出発する前に電車に乗らなければなりません。" },
                { eng: "Move on", jpn: "次に進む", exEng: "After solving that issue, let's move on to the next topic.", exJpn: "その問題を解決した後、次の話題に進みましょう。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "This tech conference has been incredibly informative so far.", jpn: "このテックカンファレンスは今のところ信じられないほど有益ですね。" },
                { speaker: "B", eng: "I agree. The presentation on AI was delightful.", jpn: "同感です。AIに関するプレゼンテーションは楽しかったです。" },
                { speaker: "A", eng: "It really was. Well, I should probably wrap things up now.", jpn: "本当にそうでした。さて、そろそろ締めくくらなければなりません。" },
                { speaker: "B", eng: "Oh, of course. I apologize for keeping you from your schedule.", jpn: "ああ、もちろんです。あなたのスケジュールから引き留めてしまって申し訳ありません。" },
                { speaker: "A", eng: "Not at all. I truly enjoyed speaking with you about the new software.", jpn: "とんでもない。新しいソフトウェアについてあなたとお話しできて本当に楽しかったです。" },
                { speaker: "B", eng: "Likewise. I appreciate you taking the time to share your insights.", jpn: "私もです。洞察を共有する時間を取っていただき感謝します。" },
                { speaker: "A", eng: "I am interested in exploring a partnership. Let me give you my card.", jpn: "パートナーシップを模索することに興味があります。私の名刺を渡させてください。" },
                { speaker: "B", eng: "Thank you. I look forward to connecting with you on LinkedIn.", jpn: "ありがとうございます。LinkedInであなたとつながるのを楽しみにしています。" },
                { speaker: "A", eng: "Excellent. I will pass on your details to my manager.", jpn: "素晴らしい。あなたの詳細をマネージャーに伝えておきます。" },
                { speaker: "B", eng: "I am hoping to schedule a formal meeting next week.", jpn: "来週正式な会議を予定したいと願っています。" },
                { speaker: "A", eng: "That sounds productive. Please excuse me, I must catch my flight.", jpn: "それは生産的そうですね。失礼します、フライトに乗らなければなりません。" },
                { speaker: "B", eng: "I am sorry to rush you. Have a pleasant journey back.", jpn: "急がせてしまって申し訳ありません。快適な帰りの旅を。" },
                { speaker: "A", eng: "Thank you. Let's keep on communicating.", jpn: "ありがとうございます。コミュニケーションを続けましょう。" },
                { speaker: "B", eng: "We will. Goodbye!", jpn: "そうしましょう。さようなら！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph explaining how you politely end a conversation with a client when you are in a rush. Use a gerund after a preposition (e.g., I look forward to working...).",
                promptJpn: "急いでいる時にクライアントとの会話をどのように丁寧に終わらせるか説明する短い段落を書いてください。前置詞の後に動名詞を使用してください（例：I look forward to working...）。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Exit Strategy: Gracefully Ending Conversations)",
                instruction: "Read this authentic article to learn more about professional communication. This section provides real-world context for B1 learners.",
                eng: "In the professional world, knowing how to start a conversation is important, but knowing how to end one gracefully is a true art form. Networking events, business lunches, and even casual office chats can easily drag on longer than intended. When a conversation consumes too much time, it can negatively impact your daily schedule and decrease your overall productivity. Therefore, developing a polite \"exit strategy\" is a crucial communication skill for any successful employee.\n\nThe secret to concluding a chat without causing offense is to express genuine appreciation before you leave. Abruptly walking away or constantly checking your watch signals disrespect. Instead, skilled communicators use transitional phrases to signal the end of the interaction. Saying \"I truly enjoyed speaking with you\" or \"I appreciate you sharing your insights\" validates the other person's time. Following this positive reinforcement, you can smoothly introduce a legitimate excuse. Phrases like \"I must excuse myself because I have an urgent meeting\" or \"I should probably wrap things up now to catch my train\" provide a respectful and understandable reason for your departure.\n\nFurthermore, referencing future contact is an excellent way to maintain the relationship. When you say, \"I look forward to hearing from you soon,\" you reassure the colleague or client that the connection is valuable, even though the immediate conversation must end. It is grammatically important to remember that prepositions like 'to' in this specific phrase must be followed by a gerund (an '-ing' verb). By mastering these polite linguistic formulas, professionals can protect their valuable time while simultaneously leaving a highly positive, lasting impression on their peers.",
                jpn: "プロフェッショナルの世界において、会話の始め方を知ることは重要ですが、会話を優雅に終わらせる方法を知ることは真の芸術です。ネットワーキングイベント、ビジネスランチ、あるいはカジュアルなオフィスの雑談でさえ、意図したよりも簡単に長引いてしまうことがあります。会話が多くの時間を消費しすぎると、あなたの日々のスケジュールに悪影響を与え、全体的な生産性を低下させる可能性があります。したがって、丁寧な「出口戦略」を開発することは、成功するあらゆる従業員にとって極めて重要なコミュニケーションスキルなのです。\n\n気分を害することなく会話を締めくくる秘訣は、立ち去る前に純粋な感謝を表現することです。突然立ち去ったり、時計を頻繁にチェックしたりすることは、無礼のサインとなります。代わりに、熟練したコミュニケーターは、やり取りの終わりを知らせるためにつなぎのフレーズを使用します。「あなたとお話しできて本当に楽しかったです」や「あなたの洞察を共有していただき感謝します」と言うことで、相手の時間の価値を認めます。この肯定的な強化に続いて、正当な言い訳をスムーズに導入することができます。「緊急の会議があるので中座しなければなりません」や「電車に乗るために、そろそろ締めくくらなければなりません」といったフレーズは、あなたの退出に対する敬意があり、理解できる理由を提供します。\n\nさらに、将来の連絡に言及することは、関係を維持するための優れた方法です。「近いうちにご連絡いただけるのを楽しみにしています」と言うとき、あなたは同僚やクライアントに対し、目の前の会話は終わらなければならないものの、そのつながりは価値あるものであると安心させます。この特定のフレーズにおける「to」のような前置詞の後には、動名詞（'-ing'動詞）が続かなければならないことを覚えておくことは文法的に重要です。これらの丁寧な言語的公式を習得することで、プロフェッショナルは自分の貴重な時間を守りつつ、同時に同僚に非常に肯定的で持続的な印象を残すことができるのです。"
            }
        }
    },
    {
        id: 12,
        chapter: "Chapter 2: Small Talk",
        type: "opinion",
        title: "Lesson 12: Opinion Exchange - Work and life balance",
        goal: "Discuss work-life balance using modal verbs of obligation. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(義務を表す法助動詞を使って、ワークライフバランスについて話し合う。)</span>",
        questions: [
            { eng: "1. Do employees have to answer work emails during the weekend?", jpn: "1. 従業員は週末に仕事のメールに返信しなければなりませんか？" },
            { eng: "2. Why must companies encourage their staff to take paid holidays?", jpn: "2. なぜ企業はスタッフに有給休暇を取るよう奨励しなければならないのですか？" },
            { eng: "3. What should a manager do if a team member is completely overworked?", jpn: "3. チームメンバーが完全に過労状態にある場合、マネージャーはどうすべきですか？" },
            { eng: "4. Do you think we should separate our professional and personal lives entirely?", jpn: "4. 仕事と私生活を完全に切り離すべきだと思いますか？" },
            { eng: "5. Why don't freelancers have to follow strict office schedules?", jpn: "5. フリーランサーが厳格なオフィスのスケジュールに従う必要がないのはなぜですか？" },
            { eng: "6. Must success always demand high levels of stress and burnout?", jpn: "6. 成功は常に高いレベルのストレスと燃え尽き症候群を要求しなければならないものですか？" },
            { eng: "7. How should you recharge your energy after a stressful project?", jpn: "7. ストレスの多いプロジェクトの後、どのようにエネルギーを充電すべきですか？" },
            { eng: "8. Do workers have to sacrifice their hobbies to get a promotion?", jpn: "8. 労働者は昇進するために趣味を犠牲にしなければなりませんか？" },
            { eng: "9. Why shouldn't we bring our workplace frustrations home with us?", jpn: "9. 職場のフラストレーションを家に持ち帰るべきではないのはなぜですか？" },
            { eng: "10. What rules must be in place to protect employee wellbeing?", jpn: "10. 従業員の幸福を守るために、どのようなルールが整備されていなければなりませんか？" }
        ],
        vocab: [
            { eng: "Balance", jpn: "バランス / 均衡" },
            { eng: "Priority", jpn: "優先事項" },
            { eng: "Overworked", jpn: "過労の" },
            { eng: "Burnout", jpn: "燃え尽き症候群" },
            { eng: "Boundary", jpn: "境界線" },
            { eng: "Separate", jpn: "切り離す / 分離する" },
            { eng: "Leisure", jpn: "余暇" },
            { eng: "Wellbeing", jpn: "幸福 / 健康" },
            { eng: "Crucial", jpn: "極めて重要な" },
            { eng: "Maintain", jpn: "維持する" },
            { eng: "Manage", jpn: "管理する / どうにかする" },
            { eng: "Stressful", jpn: "ストレスの多い" },
            { eng: "Recharge", jpn: "充電する / 休養する" },
            { eng: "Demand", jpn: "要求する / 需要" }
        ],
        grammarPoints: [
            {
                point: "1. Modals: Obligation (Must / Have to)",
                explanation: "'Must' expresses a strong internal obligation or strict rule. 'Have to' expresses an external obligation created by facts, schedules, or other people. In B1, they are often used interchangeably.",
                explanationJpn: "「Must」は強い内面的な義務や厳格なルールを表現します。「Have to」は事実やスケジュール、他人によって作られた外部からの義務を表現します。B1レベルでは、これらはしばしば互換的に使用されます。",
                examples: [
                    { eng: "We must protect employee wellbeing.", jpn: "私たちは従業員の幸福を守らなければなりません。（強いルール/信念）" },
                    { eng: "I have to finish this report by 5 PM.", jpn: "午後5時までにこの報告書を終わらせなければなりません。（外部のスケジュール）" }
                ]
            },
            {
                point: "2. Modals: Lack of obligation vs. Prohibition",
                explanation: "'Don't have to' means it is not necessary (you have a choice). 'Must not' or 'Shouldn't' means it is prohibited or a very bad idea (no choice).",
                explanationJpn: "「Don't have to」は必要ではない（選択の自由がある）ことを意味します。「Must not」や「Shouldn't」は禁止されている、あるいは非常に悪い考えである（選択の余地がない）ことを意味します。",
                examples: [
                    { eng: "You don't have to check emails on Sunday.", jpn: "日曜日にメールをチェックする必要はありません。（チェックしなくてもよい）" },
                    { eng: "You shouldn't bring work stress home.", jpn: "仕事のストレスを家に持ち帰るべきではありません。（悪いアイデア）" }
                ]
            }
        ],
        expressions: [
            { eng: "In summary", jpn: "要約すると" },
            { eng: "Ordinarily", jpn: "普通は / 通常は" },
            { eng: "Nowadays", jpn: "今日では / 最近では" },
            { eng: "Regardless of", jpn: "〜に関わらず" },
            { eng: "To point out", jpn: "指摘するために" }
        ],
        homework: {
            vocab: [
                { eng: "Put on", jpn: "着る、身につける", exEng: "Please put on your formal suit for the event.", exJpn: "イベントにはフォーマルなスーツを着用してください。" },
                { eng: "Take on", jpn: "引き受ける、雇う", exEng: "Our company will take on three new developers.", exJpn: "当社は3人の新しい開発者を雇い入れます。" },
                { eng: "Carry on", jpn: "続ける", exEng: "We must carry on with the project despite the delay.", exJpn: "遅延にもかかわらず、私たちはプロジェクトを続けなければなりません。" },
                { eng: "Hold on", jpn: "待つ、持ちこたえる", exEng: "Please hold on for a moment while I check the file.", exJpn: "ファイルを確認する間、少々お待ちください。" },
                { eng: "Keep on", jpn: "〜し続ける", exEng: "If you keep on practicing, you will improve rapidly.", exJpn: "練習し続ければ、急速に上達するでしょう。" },
                { eng: "Go on", jpn: "続く、起こる", exEng: "The meeting will go on until five o'clock.", exJpn: "会議は5時まで続きます。" },
                { eng: "Call on", jpn: "訪問する、要求する", exEng: "The manager may call on you to present the data.", exJpn: "マネージャーはデータを提供するためにあなたを指名する（要求する）かもしれません。" },
                { eng: "Count on", jpn: "頼る、当てにする", exEng: "You can count on me to finish the report on time.", exJpn: "時間通りにレポートを終わらせるよう私を頼って（当てにして）ください。" },
                { eng: "Depend on", jpn: "〜による、依存する", exEng: "The final budget will depend on the client's decision.", exJpn: "最終的な予算はクライアントの決定によります。" },
                { eng: "Focus on", jpn: "集中する", exEng: "We need to focus on our marketing strategy this quarter.", exJpn: "今四半期はマーケティング戦略に集中する必要があります。" },
                { eng: "Insist on", jpn: "強く要求する、主張する", exEng: "The client insists on a completely flawless design.", exJpn: "クライアントは完全に無傷（完璧）なデザインを強く要求しています。" },
                { eng: "Log on", jpn: "ログインする", exEng: "You must log on to the secure network first.", exJpn: "まず安全なネットワークにログインしなければなりません。" },
                { eng: "Pass on", jpn: "伝える、譲る", exEng: "Could you pass on this message to the director?", exJpn: "このメッセージをディレクターに伝えていただけますか？" },
                { eng: "Rely on", jpn: "頼る、信頼する", exEng: "We rely on accurate data to make business decisions.", exJpn: "私たちはビジネスの決定を下すために正確なデータに頼っています。" },
                { eng: "Turn on", jpn: "電源を入れる", exEng: "Do not forget to turn on the projector before the presentation.", exJpn: "プレゼンテーションの前にプロジェクターの電源を入れるのを忘れないでください。" },
                { eng: "Work on", jpn: "取り組む", exEng: "I will work on fixing the software bugs tomorrow.", exJpn: "明日、ソフトウェアのバグ修正に取り組みます。" },
                { eng: "Try on", jpn: "試着する", exEng: "I need to try on this jacket to see if it fits.", exJpn: "サイズが合うか確認するためにこのジャケットを試着する必要があります。" },
                { eng: "Catch on", jpn: "流行する、理解する", exEng: "The new social media application is starting to catch on.", exJpn: "その新しいソーシャルメディアアプリは流行し始めています。" },
                { eng: "Get on", jpn: "乗る、仲良くやる", exEng: "We need to get on the train before it departs.", exJpn: "出発する前に電車に乗らなければなりません。" },
                { eng: "Move on", jpn: "次に進む", exEng: "After solving that issue, let's move on to the next topic.", exJpn: "その問題を解決した後、次の話題に進みましょう。" }
            ],
            reading1: {
                title: "Task 2: Reading (Review Model: Setting Boundaries)",
                instruction: "Read the blog post. Notice how the writer recycles the lesson's vocabulary, grammar (modals of obligation), and transitional expressions.",
                eng: "Nowadays, burnout is a massive problem in the tech industry. In my opinion, we must establish clear boundaries between our professional and personal lives. I used to rely on my phone constantly. I felt that I had to answer emails immediately, regardless of the time. However, to point out the truth, you don't have to sacrifice your wellbeing for success. If you are overworked, you should focus on your leisure time to recharge. Ordinarily, I turn off my phone on Sundays. In summary, employees must not ignore their mental health to meet company demands.",
                jpn: "今日では、燃え尽き症候群はテック業界における巨大な問題です。私の意見では、仕事と私生活の間に明確な境界線を確立しなければなりません。私はかつて絶えずスマホに頼っていました。時間に関わらず、すぐにメールに返信しなければならないと感じていました。しかしながら、真実を指摘すると、成功のために自分の幸福を犠牲にする必要はありません。もし過労状態なら、エネルギーを充電するために余暇に集中すべきです。通常、私は日曜日にスマホの電源を切ります。要約すると、従業員は会社の要求を満たすためにメンタルヘルスを無視してはいけません。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "You look exhausted today. Did you have to work all weekend?", jpn: "今日は疲れ切っていますね。週末ずっと働かなければならなかったのですか？" },
                { speaker: "B", eng: "Yes, I did. I had to finish the budget report for the client.", jpn: "はい、そうなんです。クライアントのために予算報告書を終わらせなければなりませんでした。" },
                { speaker: "A", eng: "You shouldn't overwork yourself like that. Burnout is a real danger.", jpn: "そんな風に過労になるべきではありません。燃え尽き症候群は現実の危険ですよ。" },
                { speaker: "B", eng: "I know, but the manager insisted on getting it by Monday morning.", jpn: "わかっていますが、マネージャーが月曜日の朝までに欲しいと強く要求したんです。" },
                { speaker: "A", eng: "Still, you must maintain a boundary. You don't have to answer every demand immediately.", jpn: "それでも、境界線を維持しなければなりません。すべての要求にすぐに応える必要はないのです。" },
                { speaker: "B", eng: "It's hard. Nowadays, everyone expects you to be online 24/7.", jpn: "難しいですよ。最近では、誰もがあなたが24時間365日オンラインであることを期待していますから。" },
                { speaker: "A", eng: "Regardless of what people expect, your wellbeing is a priority.", jpn: "人々がどう期待しように関わらず、あなたの健康（幸福）が優先事項です。" },
                { speaker: "B", eng: "You are right. I really need to focus on recharging my energy.", jpn: "あなたの言う通りですね。本当にエネルギーを充電することに集中する必要があります。" },
                { speaker: "A", eng: "I would point out that taking a break actually improves your productivity.", jpn: "休息を取ることは実際に生産性を向上させるということを指摘しておきます。" },
                { speaker: "B", eng: "That is true. Ordinarily, I try to separate my tasks, but this week was crazy.", jpn: "それは事実ですね。普通はタスクを切り離そうとしているのですが、今週は異常でした。" },
                { speaker: "A", eng: "In summary, you should log off completely tonight.", jpn: "要約すると、今夜は完全にログオフすべきです。" },
                { speaker: "B", eng: "I will do that. I won't turn on my laptop after 6 PM.", jpn: "そうします。午後6時以降はノートパソコンの電源を入れません。" },
                { speaker: "A", eng: "Good. You can count on me if you need help tomorrow.", jpn: "良いですね。明日手助けが必要なら私を頼ってください。" },
                { speaker: "B", eng: "I appreciate that. I will carry on with a healthier mindset.", jpn: "感謝します。より健康的なマインドセットで続けていきます。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: What boundaries must employees set to prevent burnout? Use the PREP method, and include 'must', 'have to', or 'don't have to'.",
                promptJpn: "「燃え尽き症候群を防ぐために、従業員はどのような境界線を設定しなければなりませんか？」という質問に答える短い段落を書いてください。PREP法を使用し、「must」「have to」「don't have to」のいずれかを含めてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Myth of the 24/7 Professional)",
                instruction: "Read this authentic article to learn more about the psychology of work-life balance. This section provides real-world context for B1 learners.",
                eng: "In the modern corporate world, the concept of work-life balance has become a major topic of discussion. Thanks to smartphones and cloud computing, employees can work from anywhere at any time. While this technology offers great flexibility, it also creates a dangerous expectation: the idea that professionals must be available 24/7. Many ambitious workers feel that they have to answer emails late at night or accept client calls during the weekend to prove their dedication. However, psychologists warn that failing to separate professional duties from personal leisure time almost always leads to severe burnout.\n\nBurnout is a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress. When employees are constantly overworked, their productivity actually drops. They make more mistakes, struggle to concentrate, and lose their creative energy. To prevent this, individuals must establish firm boundaries. For example, you do not have to check your business messages while eating dinner with your family. Turning off notifications after 7 PM is a simple but highly effective way to protect your wellbeing. Your brain needs time to completely detach from work issues in order to recharge properly.\n\nFurthermore, companies have a fundamental responsibility to manage this balance. Managers shouldn't praise employees simply for working 60-hour weeks. Instead, they must evaluate staff based on the quality of their work rather than the quantity of their hours. Progressive companies nowadays actively encourage their teams to take all their paid vacation days. Ultimately, maintaining a healthy balance is crucial for both personal happiness and long-term business success. A well-rested employee is always more dependable and innovative than a stressed, exhausted one.",
                jpn: "現代の企業世界において、ワークライフバランスの概念は議論の主要なトピックとなっています。スマートフォンとクラウドコンピューティングのおかげで、従業員はいつでもどこからでも働くことができます。この技術は大きな柔軟性を提供する一方で、危険な期待、すなわちプロフェッショナルは24時間365日対応できなければならないという考えをも生み出しています。多くの野心的な労働者は、自分の献身を証明するために、夜遅くにメールに返信したり、週末にクライアントの電話を受けたりしなければならないと感じています。しかし、心理学者は、職業上の義務と個人の余暇時間を切り離すことに失敗すると、ほぼ常に深刻な燃え尽き症候群につながると警告しています。\n\n燃え尽き症候群とは、過度で長期にわたるストレスによって引き起こされる、感情的、肉体的、精神的な疲労困憊の状態です。従業員が絶えず過労状態にあると、彼らの生産性は実際に低下します。より多くのミスを犯し、集中するのに苦労し、創造的なエネルギーを失います。これを防ぐために、個人は確固たる境界線を確立しなければなりません。例えば、家族と夕食を食べている間にビジネスメッセージをチェックする必要はありません。午後7時以降に通知をオフにすることは、あなたの幸福（健康）を守るためのシンプルですが非常に効果的な方法です。あなたの脳が適切に充電するためには、仕事の問題から完全に切り離される時間が必要なのです。\n\nさらに、企業にはこのバランスを管理する根本的な責任があります。マネージャーは、単に週60時間働いているという理由で従業員を称賛すべきではありません。代わりに、労働時間の量ではなく仕事の質に基づいてスタッフを評価しなければなりません。今日、進歩的な企業は、チームに有給休暇をすべて取得するよう積極的に奨励しています。最終的に、健康的なバランスを維持することは、個人の幸福と長期的なビジネスの成功の両方にとって極めて重要です。十分に休息をとった従業員は、ストレスを抱え疲れ果てた従業員よりも、常に頼りになり革新的なのです。"
            }
        }
    },
    {
        id: 13,
        chapter: "Chapter 2: Small Talk",
        type: "casestudy",
        title: "Lesson 13: Case Study - The Broken Team",
        goal: "Analyze team dynamic issues, discuss inclusion using past continuous, and propose a solution. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(チームの動態問題を分析し、過去進行形を使ってインクルージョンについて話し合い、解決策を提案する。)</span>",
        vocab: [
            { eng: "Inclusion", jpn: "包摂 / インクルージョン" },
            { eng: "Reserved", jpn: "控えめな / 遠慮がちな" },
            { eng: "Isolate", jpn: "孤立させる" },
            { eng: "Participate", jpn: "参加する" },
            { eng: "Dynamic", jpn: "動態 / ダイナミクス" },
            { eng: "Contribution", jpn: "貢献" },
            { eng: "Overlook", jpn: "見落とす / 見逃す" },
            { eng: "Perspective", jpn: "視点 / 観点" },
            { eng: "Dominant", jpn: "支配的な / 主導的な" },
            { eng: "Interrupt", jpn: "遮る / 中断する" },
            { eng: "Encourage", jpn: "促す / 奨励する" },
            { eng: "Atmosphere", jpn: "雰囲気" },
            { eng: "Disconnect", jpn: "切断 / コミュニケーションの断絶" },
            { eng: "Burnout", jpn: "燃え尽き症候群" }
        ],
        situation: {
            eng: "TechFlow Inc. is suffering from a toxic team culture and failing projects. The workplace environment is highly dysfunctional, and the team is completely disconnected. There is no single reason for this; multiple issues are causing the breakdown in harmony and work-life balance. Employees are exhausted, communication is terrible, and the quiet workers are totally ignored. The HR Director needs to understand the different complaints from the team to create a healthier office culture.",
            jpn: "TechFlow Inc.社は、有害なチーム文化と失敗するプロジェクトに苦しんでいます。職場環境は非常に機能不全に陥っており、チームは完全にバラバラです。この原因は一つではありません。複数の問題が調和とワークライフバランスの崩壊を引き起こしているのです。従業員は疲れ果て、コミュニケーションは最悪で、静かな労働者は完全に無視されています。人事ディレクターは、より健康的なオフィス文化を作るために、チームからのさまざまな苦情を理解する必要があります。"
        },
        people: [
            {
                name: "Person 1: Mei (Reserved Developer)",
                eng: "While I was trying to share a critical database issue yesterday, two dominant guys were arguing loudly. I gave up. Also, no one ever asks about my weekend, so I feel completely isolated.",
                jpn: "昨日、私が重大なデータベースの問題を共有しようとしていた間、2人の主導的な男性が大声で言い争っていました。私は諦めました。また、誰も私の週末について尋ねてくれないので、完全に孤立していると感じます。"
            },
            {
                name: "Person 2: Dan (Manager)",
                eng: "We have strict deadlines! While the team was coding on Sunday, I was sending them urgent emails at 11 PM. Now everyone is suffering from burnout and making simple errors.",
                jpn: "私たちには厳しい締め切りがあります！日曜日、チームがコーディングしている間、私は夜の11時に彼らに緊急のメールを送っていました。今、誰もが燃え尽き症候群に苦しみ、単純なミスを犯しています。"
            },
            {
                name: "Person 3: Sarah (Marketer)",
                eng: "While I was making coffee in the break room this morning, nobody said hello. We have zero small talk. The atmosphere is freezing, and I want to quit.",
                jpn: "今朝、私が休憩室でコーヒーを入れている間、誰も挨拶しませんでした。私たちには雑談がゼロです。雰囲気は凍りついており、私は辞めたいです。"
            },
            {
                name: "Person 4: Alex (Dominant Marketer)",
                eng: "I'm just trying to get things done quickly. But while I was presenting my ideas, I noticed everyone was checking their phones. We have absolutely no team bond.",
                jpn: "私はただ物事を早く終わらせようとしているだけです。しかし、私が自分のアイデアをプレゼンしている間、全員がスマホをチェックしていることに気づきました。私たちにはチームの絆が全くありません。"
            },
            {
                name: "Person 5: HR Director",
                eng: "The team dynamic is a disaster. We have severe burnout, ignored employees, terrible communication, and zero workplace harmony. We need a comprehensive solution immediately.",
                jpn: "チームの動態は最悪です。深刻な燃え尽き症候群、無視される従業員、ひどいコミュニケーション、そして職場の調和がゼロです。私たちは直ちに包括的な解決策を必要としています。"
            }
        ],
        grammarPoints: [
            {
                point: "1. Past Continuous vs. Past Simple (Interrupted Actions)",
                explanation: "Use the past continuous (was/were + -ing) to describe an ongoing background action, and the past simple to describe a single action that interrupted it or occurred during that time.",
                explanationJpn: "過去進行形（was/were + -ing）を使用して進行中の背景の行動を説明し、過去形を使用してそれを中断した、またはその間に発生した単一の行動を説明します。",
                examples: [
                    { eng: "Mei was trying to speak when Alex interrupted her.", jpn: "アレックスが彼女を遮ったとき、メイは話そうとしていました。" },
                    { eng: "While the team was debating, Mei sat quietly.", jpn: "チームが議論している間、メイは静かに座っていました。" }
                ]
            },
            {
                point: "2. Past Continuous for Simultaneous Background Actions",
                explanation: "Use the past continuous for two or more actions happening at the exact same time in the past, linked with 'while' or 'meanwhile'.",
                explanationJpn: "「while」や「meanwhile」でつなぎ、過去の全く同じ時間に発生していた2つ以上の行動に対して過去進行形を使用します。",
                examples: [
                    { eng: "Two marketers were arguing loudly while Lisa was taking notes.", jpn: "リサがメモを取っている間、2人のマーケターが大声で議論していました。" },
                    { eng: "I was looking at my laptop while she was speaking.", jpn: "彼女が話している間、私はノートパソコンを見ていました。" }
                ]
            }
        ],
        discussionPoints: [
            { eng: "What are the four different problems causing the team's breakdown?", jpn: "チームの崩壊を引き起こしている4つの異なる問題は何ですか？" },
            { eng: "What were the team members doing while Mei was trying to participate?", jpn: "メイが参加しようとしていた間、チームメンバーは何をしていましたか？" },
            { eng: "How does the manager's behavior (Dan) contribute to the negative atmosphere?", jpn: "マネージャー（ダン）の行動は、ネガティブな雰囲気にどのように寄与していますか？" },
            { eng: "What three rules should the HR Director create to improve work-life balance, small talk, and inclusion?", jpn: "ワークライフバランス、雑談、そしてインクルージョンを改善するために、人事ディレクターはどのような3つのルールを作るべきですか？" }
        ],
        expressions: [
            { eng: "In hindsight", jpn: "後知恵で / 今振り返ってみると" },
            { eng: "To clarify", jpn: "明確にするために" },
            { eng: "Meanwhile", jpn: "その間に / 一方で" },
            { eng: "At the same time", jpn: "同時に" },
            { eng: "Moving forward", jpn: "今後は / 前進するために" }
        ],
        roleplay: "Role-play a feedback session between Dan (Manager) and the HR Director. Discuss the multiple things that were happening during yesterday's meeting using past continuous (e.g., 'while Alex was presenting, people were looking at their phones'). Then, create a 3-step action plan to fix the team's culture. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(ダン（マネージャー）と人事ディレクターの間のフィードバックセッションのロールプレイを行ってください。過去進行形を使って、昨日の会議中に起こっていた複数の事柄について話し合ってください（例：'while Alex was presenting, people were looking at their phones'）。その後、チームの文化を修復するための3ステップの行動計画を作成してください。)</span>",
        homework: {
            vocab: [
                { eng: "Bring in", jpn: "持ち込む、取り入れる", exEng: "We need to bring in external experts to help us.", exJpn: "外部の専門家を取り入れて助けてもらう必要があります。" },
                { eng: "Count in", jpn: "仲間に入れる、数に入れる", exEng: "Please count me in for the team lunch tomorrow.", exJpn: "明日のチームランチには私を仲間に入れて（数に加えて）ください。" },
                { eng: "Factor in", jpn: "計算に入れる、考慮する", exEng: "Did you factor in the additional shipping costs?", exJpn: "追加の送料を考慮に入れましたか？" },
                { eng: "Phasin", jpn: "段階的に導入する", exEng: "The company will phase in the new software over six months.", exJpn: "会社は6ヶ月かけて段階的に新しいソフトウェアを導入します。" },
                { eng: "Take in", jpn: "理解する、取り込む", exEng: "It was a lot of new information to take in during one session.", exJpn: "一度のセッションで理解するには多すぎる新しい情報でした。" },
                { eng: "Trade in", jpn: "下取りに出す", exEng: "I plan to trade in my old laptop for a newer model.", exJpn: "古いノートパソコンを下取りに出して新しいモデルにする予定です。" },
                { eng: "Check in", jpn: "確認・連絡する", exEng: "I will check in with you before the deadline.", exJpn: "締め切りの前にあなたの状況を確認します。" },
                { eng: "Break in", jpn: "割り込む、慣らす", exEng: "It is impolite to break in when someone else is speaking.", exJpn: "誰かが話している時に割り込むのは無礼です。" },
                { eng: "Drop in", jpn: "立ち寄る", exEng: "Feel free to drop in whenever you are near our office.", exJpn: "近くに来た時はいつでも気軽に立ち寄ってください。" },
                { eng: "Fill in", jpn: "穴埋めをする、代役を務める", exEng: "Can you fill in for me while I am on vacation?", exJpn: "私が休暇の間、私の代役を務めてもらえますか？" },
                { eng: "Give in", jpn: "屈する、提出する", exEng: "The team refused to give in to the tight timeline.", exJpn: "チームは厳しいタイムラインに屈することを拒否しました。" },
                { eng: "Hand in", jpn: "提出する", exEng: "Please hand in your feedback forms by the end of the day.", exJpn: "本日中にフィードバック用紙を提出してください。" },
                { eng: "Join in", jpn: "加わる、参加する", exEng: "We encouraged the quiet intern to join in the conversation.", exJpn: "私たちは大人しいインターンが会話に加わるよう促しました。" },
                { eng: "Plug in", jpn: "プラグを差し込む", exEng: "Make sure to plug in your device before updating.", exJpn: "更新する前にデバイスのプラグを差し込んでいるか確認してください。" },
                { eng: "Settle in", jpn: "落ち着く、馴染む", exEng: "How are you settling in to your new role?", exJpn: "新しい役にどのくらい馴染んできましたか？" },
                { eng: "Step in", jpn: "介入する", exEng: "Lisa had to step in when the debate became too heated.", exJpn: "議論が熱くなりすぎたとき、リサは介入しなければなりませんでした。" },
                { eng: "Turn in", jpn: "提出する", exEng: "Remember to turn in your weekly timesheet.", exJpn: "週のタイムシートを提出することを忘れないでください。" },
                { eng: "Fit in", jpn: "溶け込む、収まる", exEng: "She found it easy to fit in with her supportive colleagues.", exJpn: "彼女は協力的な同僚たちと溶け込むのが簡単だと感じました。" },
                { eng: "Opt in", jpn: "参加を選択する", exEng: "Employees can opt in to the voluntary mentoring program.", exJpn: "従業員は自主的なメンタリングプログラムへの参加を選択できます。" },
                { eng: "Rush into", jpn: "急いで〜する", exEng: "We shouldn't rush into making structural changes.", exJpn: "構造的な変更を急いで行うべきではありません。" }
            ],
            expandedDialogue: [
                { speaker: "A", eng: "Dan, we need to check in regarding the team culture. People are extremely unhappy.", jpn: "ダン、チーム文化について確認（進捗チェック）をする必要があります。人々は極めて不満に思っています。" },
                { speaker: "B", eng: "I don't understand. I am just trying to meet our deadlines.", jpn: "理解できません。私はただ締め切りに間に合わせようとしているだけです。" },
                { speaker: "A", eng: "While you were sending emails at 11 PM on Sunday, the team was trying to rest. You are causing burnout.", jpn: "あなたが日曜日の夜11時にメールを送っていた間、チームは休もうとしていました。あなたは燃え尽き症候群を引き起こしています。" },
                { speaker: "B", eng: "In hindsight, maybe that was too aggressive. But what about the meetings?", jpn: "今振り返ってみると、おそらくそれは激しすぎました。でも会議についてはどうですか？" },
                { speaker: "A", eng: "During the meeting, while Alex was presenting, everyone was looking at their phones. There is no team bond.", jpn: "会議中、アレックスがプレゼンしている間、全員が自分のスマホを見ていました。チームの絆がありません。" },
                { speaker: "B", eng: "And what about Mei? She never speaks.", jpn: "それとメイはどうですか？彼女は決して発言しません。" },
                { speaker: "A", eng: "While Alex and another guy were arguing loudly, Mei was actually trying to break in and share an idea. But you overlooked her.", jpn: "アレックスともう1人の男性が大声で言い争っていた間、メイは実際に割って入ってアイデアを共有しようとしていました。しかしあなたは彼女を見落としました。" },
                { speaker: "B", eng: "Oh, really? I didn't mean to isolate her. I was focusing on the schedule.", jpn: "あ、本当ですか？彼女を孤立させるつもりはありませんでした。私はスケジュールに集中していたのです。" },
                { speaker: "A", eng: "Also, Sarah mentioned that while she was in the break room, nobody said hello. We have zero small talk.", jpn: "また、サラは休憩室にいた間、誰も挨拶しなかったと言っていました。私たちには雑談がゼロです。" },
                { speaker: "B", eng: "I see. I didn't factor in how important a friendly atmosphere is. What should we do?", jpn: "なるほど。フレンドリーな雰囲気がいかに重要かを考慮に入れていませんでした。私たちはどうすべきですか？" },
                { speaker: "A", eng: "Moving forward, we must stop weekend emails. Second, we need to step in when dominant voices interrupt quiet workers.", jpn: "今後は、週末のメールを止めなければなりません。第二に、主導的な声が静かな労働者を遮ったときは介入する必要があります。" },
                { speaker: "B", eng: "That makes sense. We could also phase in a rule to have a 10-minute coffee chat every morning.", jpn: "それは理にかなっていますね。毎朝10分間のコーヒーチャットの時間を設けるルールを段階的に導入することもできます。" },
                { speaker: "A", eng: "That's a great suggestion. It will help everyone feel like they fit in.", jpn: "それは素晴らしい提案です。全員が溶け込んでいると感じるのに役立つでしょう。" },
                { speaker: "B", eng: "I will announce the new rules today. Thank you for pointing this out.", jpn: "今日、新しいルールを発表します。これを指摘してくれてありがとうございます。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph answering this question: Describe a time when there was bad communication or a negative atmosphere in a team. What were people doing, and what should have been done differently?",
                promptJpn: "「チーム内でコミュニケーション不足やネガティブな雰囲気だった時のことを説明してください。人々は何をしていて、どう違う行動をとるべきでしたか？」という質問に答える短い段落を書いてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (Why Team Dynamics Fail)",
                instruction: "Read this authentic article to learn more about team dynamics. This section provides real-world context for B1 learners.",
                eng: "A successful business team needs more than just smart and talented people. It needs good communication, respect, and a healthy work environment. When a company ignores team dynamics, the workplace culture can quickly become toxic. In a dysfunctional office, projects fail, employees feel stressed, and many talented workers decide to quit. Usually, a broken team is not caused by one big disaster. Instead, it is the result of many small problems that happen at the same time.\n\nOne major problem is a lack of work-life balance. Modern technology allows us to work from anywhere, but this can be dangerous. For example, if a manager sends urgent emails on a Sunday night, employees feel that they must answer immediately. While the staff is trying to rest and recharge their energy, they are forced to think about work. Over time, this constant pressure leads to severe burnout. Tired employees make more mistakes and become angry with their coworkers.\n\nAnother big issue is poor meeting culture and a lack of inclusion. In many companies, a few confident, loud employees dominate the conversation. While these dominant workers are arguing and sharing ideas, quiet and reserved employees sit silently. Often, these introverted workers have excellent technical skills and valuable solutions. However, if the atmosphere is too aggressive, they hesitate to speak. If a manager does not actively invite them to participate, their ideas are completely lost.\n\nFinally, a healthy team needs small talk. While casual chatting might seem like a waste of time, it is actually the glue that holds a group together. If no one says hello in the break room, the office feels cold and isolating. To fix a broken team, leaders must create clear rules. They need to respect weekends, stop people from interrupting in meetings, and encourage friendly, casual conversations. When everyone feels valued, the team will succeed.",
                jpn: "成功するビジネスチームには、単に賢くて才能のある人々以上のものが必要です。良好なコミュニケーション、敬意、そして健全な労働環境が必要です。企業がチームの動態を無視すると、職場の文化はすぐに有害なものになり得ます。機能不全に陥ったオフィスでは、プロジェクトは失敗し、従業員はストレスを感じ、多くの才能ある労働者が辞めることを決定します。通常、崩壊したチームは1つの大きな災害によって引き起こされるわけではありません。そうではなく、同時に起こる多くの小さな問題の結果なのです。\n\n一つの大きな問題は、ワークライフバランスの欠如です。現代のテクノロジーにより、私たちはどこからでも働くことができますが、これは危険でもあります。例えば、マネージャーが日曜日の夜に緊急のメールを送った場合、従業員はすぐに返信しなければならないと感じます。スタッフが休んでエネルギーを充電しようとしている間に、彼らは仕事について考えることを強制されます。時間が経つにつれ、この絶え間ないプレッシャーは深刻な燃え尽き症候群につながります。疲れた従業員はより多くのミスを犯し、同僚に対して怒りっぽくなります。\n\nもう一つの大きな問題は、貧弱な会議文化とインクルージョン（包摂）の欠如です。多くの企業では、少数の自信に満ちた声の大きい従業員が会話を支配します。これらの主導的な労働者が議論しアイデアを共有している間、静かで控えめな従業員は黙って座っています。多くの場合、これらの内向的な労働者は優れた技術的スキルと価値ある解決策を持っています。しかし、雰囲気が攻撃的すぎると、彼らは話すのをためらいます。もしマネージャーが彼らに参加するよう積極的に促さなければ、彼らのアイデアは完全に失われてしまいます。\n\n最後に、健康的なチームには雑談が必要です。カジュアルな会話は時間の無駄のように思えるかもしれませんが、実際にはグループをまとめる接着剤なのです。もし休憩室で誰も挨拶しなければ、オフィスは冷たく孤立しているように感じられます。崩壊したチームを修復するために、リーダーは明確なルールを作成しなければなりません。彼らは週末を尊重し、会議で人が遮るのをやめさせ、フレンドリーでカジュアルな会話を奨励する必要があります。全員が大切にされていると感じたとき、チームは成功するのです。"
            }
        }
    },
    {
        id: 14,
        chapter: "Chapter 2: Small Talk",
        type: "speakingtest",
        title: "Lesson 14: Speaking Test - Hobbies & free time",
        goal: "Prepare and deliver a short speech about a personal hobby or interest using the PREP method. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(PREP法を使って、個人的な趣味や関心事についての短いスピーチを準備し、発表する。)</span>",
        vocab: [
            { eng: "Passionate", jpn: "情熱的な" },
            { eng: "Dedicate", jpn: "捧げる / 専念する" },
            { eng: "Pursue", jpn: "追求する / 続ける" },
            { eng: "Recreation", jpn: "気晴らし / レクリエーション" },
            { eng: "Fascinating", jpn: "魅力的な" },
            { eng: "Unwind", jpn: "くつろぐ / リラックスする" },
            { eng: "Fulfill", jpn: "満たす / 達成する" },
            { eng: "Skillful", jpn: "熟練した / 上手な" },
            { eng: "Enthusiasm", jpn: "熱意 / 情熱" },
            { eng: "Consistent", jpn: "一貫した / 継続的な" },
            { eng: "Benefit", jpn: "恩恵 / 利益" },
            { eng: "Balance", jpn: "バランス" },
            { eng: "Engage", jpn: "従事する / 引き込む" },
            { eng: "Relieve", jpn: "和らげる / リフレッシュする" }
        ],
        prompt: {
            main: "Describe a hobby or free-time activity that you are passionate about pursuing.",
            bulletPoints: [
                "Say what the hobby is and how long you have been doing it",
                "Say how often you dedicate time to this activity",
                "Say how this pursuit helps you unwind or relieve stress",
                "Explain why you would recommend this activity to a colleague"
            ]
        },
        exampleSpeech: {
            eng: "Today, I would like to speak about a personal passion that helps me maintain a healthy lifestyle: landscape photography. I have been pursuing this hobby for nearly four years now.\n\nI try to dedicate time to photography almost every weekend. Ordinarily, I wake up early on Saturday mornings, take my camera, and explore quiet natural parks outside the city. Focusing on capturing beautiful light requires deep concentration, which allows my mind to completely detach from professional worries.\n\nIn my opinion, engaging in a creative recreation like photography is the ultimate way to unwind and relieve workplace stress. While my weekday schedule is often hectic and exhausting, spending hours outdoors in a peaceful atmosphere completely restores my energy and balance.\n\nTo sum up, I highly recommend pursuing a visual hobby to my colleagues because it encourages you to observe the world more carefully and provides a deeply fulfilling sense of accomplishment outside of your career.",
            jpn: "本日は、健康的なライフスタイルを維持するのに役立っている個人的な情熱、景観写真についてお話ししたいと思います。私はこの趣味を約4年間追求し続けています。\n\nほぼ毎週末、写真撮影に時間を捧げるようにしています。通常、土曜日の朝早く起き、カメラを持って都市郊外の静かな自然公園を探索します。美しい光を捉えることに集中するには深い集中力が必要であり、それによって頭を仕事の心配事から完全に切り離すことができます。\n\n私の意見では、写真撮影のような創造的なレクリエーションに従事することは、リラックスし職場のストレスを和らげる究極の方法です。平日のスケジュールはしばしば慌ただしく疲れ果てるものですが、穏やかな雰囲気の中で屋外で数時間を過ごすことは、私のエネルギーとバランスを完全に回復させてくれます。\n\n要約すると、世界をもっと注意深く観察することを促し、キャリアの外で深いやりがいのある達成感を提供してくれるため、同僚にはビジュアルな趣味を追求することを強くお勧めします。"
        },
        homework: {
            vocab: [
                { eng: "Bring about", jpn: "引き起こす、もたらす", exEng: "The new leadership helped bring about positive cultural changes.", exJpn: "新しいリーダーシップは肯定的な文化の変化をもたらすのに役立ちました。" },
                { eng: "Set about", jpn: "着手する、取りかかる", exEng: "After lunch, we immediately set about organizing the project files.", exJpn: "昼食後、私たちはすぐにプロジェクトファイルの整理に着手しました。" },
                { eng: "Come about", jpn: "起こる、生じる", exEng: "Could you explain how this misunderstanding came about?", exJpn: "この誤解がどのようにして生じたのか説明していただけますか？" },
                { eng: "Go about", jpn: "（仕事などに）精を出す、取り組む", exEng: "She went about her daily duties with great enthusiasm.", exJpn: "彼女は大きな熱意を持って日々の職務に精を出しました。" },
                { eng: "Run about", jpn: "駆け回る", exEng: "The children love to run about in the open park.", exJpn: "子供たちは開放的な公園で駆け回るのが大好きです。" },
                { eng: "Cast about", jpn: "探し回る、思いを巡らせる", exEng: "The team is casting about for a fresh marketing strategy.", exJpn: "チームは新しいマーケティング戦略を模索して（探し回って）います。" },
                { eng: "Turn about", jpn: "向きを変える", exEng: "He had to turn about and drive back to retrieve his forgotten keys.", exJpn: "彼は鍵を取り戻すために向きを変えて運転して戻らなければなりませんでした。" },
                { eng: "Kick about", jpn: "議論する、転がっている", exEng: "We spent the afternoon kicking about new product concepts.", exJpn: "私たちは午後、新製品のコンセプトについてあれこれ議論して過ごしました。" },
                { eng: "Hang about", jpn: "ぶらぶらする", exEng: "Don't hang about in the lobby after the conference finishes.", exJpn: "カンファレンスが終わった後、ロビーでぶらぶらしないでください。" },
                { eng: "Lounge about", jpn: "のんびり過ごす", exEng: "On rainy Sundays, I prefer to lounge about at home with a book.", exJpn: "雨の日曜日には、本を片手に家でのんびり過ごす方が好きです。" },
                { eng: "Knock about", jpn: "（旅などで）あちこち回る", exEng: "Before joining our company, he spent a year knocking about Europe.", exJpn: "当社に入社する前、彼は1年間ヨーロッパをあちこち旅して回っていました。" },
                { eng: "Ask about", jpn: "〜について尋ねる", exEng: "Several clients called to ask about our new pricing structure.", exJpn: "数名のクライアントが私たちの新しい料金体系について尋ねるために電話してきました。" },
                { eng: "Know about", jpn: "〜について知っている", exEng: "Do you know about the mandatory compliance training next week?", exJpn: "来週の必須コンプライアンス研修について知っていますか？" },
                { eng: "Care about", jpn: "〜を気にする、大切にする", exEng: "A dedicated manager genuinely cares about employee wellbeing.", exJpn: "献身的なマネージャーは従業員の幸福を心から大切にします。" },
                { eng: "Read about", jpn: "〜について読む", exEng: "I read about the latest market developments in the industry journal.", exJpn: "業界誌で最新の市場動向について読みました。" },
                { eng: "Worry about", jpn: "〜について心配する", exEng: "There is no need to worry about the minor formatting errors.", exJpn: "軽微なフォーマットエラーについて心配する必要はありません。" },
                { eng: "Forget about", jpn: "〜について忘れる", exEng: "Let's forget about work for a few hours and enjoy dinner.", exJpn: "数時間は仕事のことを忘れて夕食を楽しみましょう。" },
                { eng: "Talk about", jpn: "〜について話す", exEng: "We need to talk about our upcoming expansion plans.", exJpn: "私達の今後の拡大計画について話す必要があります。" },
                { eng: "Think about", jpn: "〜について考える", exEng: "Take your time to think about the job offer before accepting.", exJpn: "内定を受け入れる前に、じっくりと考えてください。" },
                { eng: "Hear about", jpn: "〜について聞く", exEng: "Did you hear about the structural changes in the marketing department?", jpn: "マーケティング部門の構造改革について聞きましたか？" }
            ],
            reading1: {
                title: "Task 2: Reading (Review Model: A Passionate Pursuit)",
                instruction: "Read the speech draft. Notice how the writer recycles the lesson's vocabulary, grammar (present perfect and modals), and transitional expressions.",
                eng: "Personally, I believe that having a passionate recreation is essential for every professional. I have been pursuing oil painting for over three years, and it has brought about amazing benefits for my mental health. Ordinarily, after a stressful week, I lounge about for an hour before I set about painting. You must dedicate time to unwind if you want to prevent burnout. In fact, engaging in art allows me to forget about corporate worries and fulfill my creative potential. To sum up, finding a consistent hobby will relieve your daily tension and bring balance to your life.",
                jpn: "個人的に、情熱を注げるレクリエーションを持つことはすべてのプロフェッショナルにとって不可欠だと信じています。私は3年以上油絵を追求し続けており、それが私のメンタルヘルスに素晴らしい恩恵をもたらしてくれました。普通、ストレスの多い一週間の後、私は絵に取りかかる前に1時間ほどのんびり過ごします。燃え尽き症候群を防ぎたいのであれば、リラックスするための時間を捧げなければなりません。実際、芸術に従事することは企業の心配事を忘れさせ、私の創造的な可能性を満たしてくれます。要約すると、一貫した趣味を見つけることは日々の緊張を和らげ、人生にバランスをもたらすでしょう。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Are you ready to deliver your speaking test on hobbies and recreation?", jpn: "趣味やレクリエーションについてのスピーキングテストを発表する準備はできていますか？" },
                { speaker: "B", eng: "I think so. I am going to talk about how I pursue photography to unwind.", jpn: "そう思います。リラックスするためにどのように写真を追求しているかについて話すつもりです。" },
                { speaker: "A", eng: "That sounds fascinating. How long have you been engaging in that activity?", jpn: "それは魅力的に聞こえますね。その活動にはどのくらい長く従事しているのですか？" },
                { speaker: "B", eng: "I have practiced it for nearly four years. I try to dedicate time to it every Saturday.", jpn: "4年近く練習しています。毎週土曜日に時間を捧げるようにしています。" },
                { speaker: "A", eng: "That requires consistent discipline. Does it truly help you relieve stress?", jpn: "それには一貫した規律が必要ですね。それは本当にストレスを和らげるのに役立ちますか？" },
                { speaker: "B", eng: "Absolutely. When I focus on taking pictures, I completely forget about work deadlines.", jpn: "間違いありません。写真撮影に集中している時は、仕事の締め切りについて完全に忘れることができます。" },
                { speaker: "A", eng: "That is a wonderful benefit. How did you first hear about this gallery group?", jpn: "それは素晴らしい恩恵ですね。最初にこのギャラリーグループについてどこで聞いたのですか？" },
                { speaker: "B", eng: "A former colleague told me about it while we were kicking about ideas for weekend outings.", jpn: "週末のお出かけのアイデアについてあれこれ議論している時に、元同僚が教えてくれました。" },
                { speaker: "A", eng: "It's great that you set about building a creative outlet outside of your career.", jpn: "キャリアの外で創造的なはけ口を構築することに着手した（取り組んだ）のは素晴らしいことです。" },
                { speaker: "B", eng: "Yes, it fulfills my need for artistic expression. In fact, it keeps my life balanced.", jpn: "はい、それは芸術的表現への私の欲求を満たしてくれます。実際、それが私の人生のバランスを保ってくれています。" },
                { speaker: "A", eng: "Would you recommend this pursuit to someone who is feeling overworked?", jpn: "過労を感じている人に、この追求（趣味）をお勧めしますか？" },
                { speaker: "B", eng: "Definitely. Everyone must find a passion that allows them to recharge effectively.", jpn: "間違いなくお勧めします。誰もが効果的に充電できる情熱を見つけなければなりません。" },
                { speaker: "A", eng: "Well said. I look forward to hearing your full speech in class.", jpn: "素晴らしい言い方ですね。クラスであなたの完全なスピーチを聞くのを楽しみにしています。" },
                { speaker: "B", eng: "Thank you! I hope my enthusiasm inspires others to pursue their own interests.", jpn: "ありがとうございます！私の熱意が他の人々にも自身の関心事を追求する刺激になれば幸いです。" }
            ],
            writingTask: {
                promptEng: "Write your own short speech describing a hobby or free-time activity that you are passionate about pursuing. Use the PREP method (Point, Reason, Example, Point) and include vocabulary from today's lesson.",
                promptJpn: "自分が情熱を注いでいる趣味や自由時間の活動を説明する短いスピーチを自分で書いてください。PREP法（Point, Reason, Example, Point）を使用し、今日のレッスンの語彙を含めてください。"
            },
            extendedReading: {
                title: "Task 4: Authentic Reading (The Science of Serious Hobbies)",
                instruction: "Read this authentic article to learn more about the psychology of leisure pursuits. This section provides real-world context for B1 learners.",
                eng: "In an era where professional demands constantly encroach upon personal life, psychologists have turned their attention toward the concept of \"serious leisure.\" Unlike passive activities—such as endlessly scrolling through social media or mindlessly watching television—a serious hobby involves the systematic pursuit of an amateur, hobbyist, or volunteer activity. Whether an individual dedicates themselves to learning a musical instrument, mastering marathon running, or practicing woodworking, these passionate endeavors require consistent effort, skill development, and genuine enthusiasm. Research demonstrates that engaging in structured recreation provides unique cognitive and emotional benefits that simple relaxation cannot replicate.\n\nOne of the primary benefits of a serious hobby is its ability to generate a psychological state known as \"flow.\" Flow occurs when a person becomes so thoroughly immersed in a challenging task that they lose track of time and self-consciousness. During flow, professional anxieties, workplace deadlines, and daily stresses temporarily vanish from awareness. Achieving this state allows the nervous system to recover from corporate burnout far more effectively than passive rest. Furthermore, mastering new skills outside of one's career provides a robust sense of self-efficacy and fulfillment. When a project at work hits an unexpected roadblock, having a fulfilling personal accomplishment to rely on buffers an individual's self-esteem.\n\nMoreover, serious leisure contributes significantly to long-term work-life balance. Employees who consistently protect time for their passions report higher job satisfaction, improved creative problem-solving abilities, and lower levels of absenteeism. By establishing clear boundaries between professional responsibilities and personal pursuits, individuals protect their mental wellbeing. Ultimately, cultivating a rich, engaging life outside of the office does not detract from career performance; rather, it provides the essential energy, resilience, and perspective necessary to excel in the modern workplace.",
                jpn: "仕事の要求が絶えず私生活を侵食する現代において、心理学者たちは「深刻なレジャー（本格的な趣味）」という概念に目を向けています。ソーシャルメディアを無限にスクロールしたり、無心でテレビを見たりするような受動的な活動とは異なり、本格的な趣味には、アマチュア、愛好家、またはボランティア活動の体系的な追求が含まれます。個人が楽器の演奏を習得すること、マラソンを極めること、あるいは木工を練習することに身を捧げるかどうかにかかわらず、これらの情熱的な試みには一貫した努力、スキルの向上、そして純粋な熱意が必要です。研究によると、構造化されたレクリエーションに従事することは、単純なリラクゼーションでは再現できないユニークな認知上および感情上の恩恵をもたらすことが示されています。\n\n本格的な趣味の主な利点の一つは、「フロー」として知られる心理状態を生み出す能力です。フローは、人が挑戦的なタスクに非常に深く没頭し、時間や自意識の感覚を失ったときに発生します。フローの間、職業上の不安、職場の締め切り、日々のストレスは意識から一時的に消え去ります。この状態を達成することで、神経系は受動的な休息よりもはるかに効果的に企業の燃え尽き症候群から回復することができます。さらに、キャリアの外で新しいスキルをマスターすることは、自己効力感と達成感の堅固な感覚を提供します。仕事でのプロジェクトが予期せぬ障害に突き当たったとき、頼れる充実した個人的な成就を持っていることが、個人の自尊心を和らげるクッションとなります。\n\nさらに、本格的なレジャーは長期的なワークライフバランスに大きく貢献します。自身の情熱のための時間を一貫して守る従業員は、より高い仕事の満足度、改善された創造的問題解決能力、そしてより低い欠勤率を報告しています。職業上の責任と個人的な追求との間に明確な境界線を確立することで、個人は自身の精神的健康を守ります。最終的に、オフィスの外で豊かで魅力的な人生を育むことは、キャリアのパフォーマンスを損なうものではありません。むしろ、現代の職場で秀でるために必要な不可欠なエネルギー、回復力、そして視点を提供するのです。"
            }
        }
    }
];
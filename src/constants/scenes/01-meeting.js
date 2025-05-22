// src/constants/scenes/01-meeting.js
export const MEETING_SCENE = {
  id: '1',
  chineseName: '会议',
  englishName: 'Meeting',
  bgColor: '#CCF656',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/01-meeting-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/01-meeting-full.png`,
  backgroundMusic: `${process.env.PUBLIC_URL}/assets/audio/01-meeting-bg-music.mp3`,
  characters: [
    {
      id: '1',
      chineseName: '艾米·钟',
      englishName: 'Amy Zhong',
      chineseRole: '风险投资分析师',
      englishRole: 'Venture Capital Analyst',
      introduction: {
        zh: '您好，我是艾米·钟，风险投资分析师，专注于区块链和新兴市场。我投资于“未被看见的未来”。',
        en: "I'm Amy Zhong, a venture capital analyst specializing in blockchain and emerging markets. I invest in the 'invisible future.'",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-1-intro.mp4`
      },
      questions: [
        {
        zh: '您与右侧穿白衬衫的女子眼神交会时，发生了什么？',
        en: "What happened when your eyes crossed with the woman in the white shirt on the right?"
        },
        {
        zh: '您手机屏幕的屏保人物是谁？',
        en: "Who's the person on your phone's screensaver?"
        }
      ],
      answers: [
        {
        zh: '她是法律顾问，总以法条压人。我厌恶她那冷漠且自以为是的正确态度。但说实话，她是会议室里唯一能让我感到紧张的人。',
        en: "She's a legal advisor, always using laws to push people around. I hate her cold, correct attitude. But honestly, she's the only person in this room who makes me nervous.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-1-answer1.mp4`
        },
        {
        zh: '那是我的母亲。她在我七岁时开始经营手工生意，她告诉我：投资不仅是数字游戏，更是价值的判断。',
        en: "That's my mother. She started her handcraft business when I was 7, and she told me: investment is never just about numbers, it's about value judgment.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-1-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-1.png`
    },
    {
      id: '2',
      chineseName: '莉拉·夏尔玛',
      englishName: 'Leela Sharma',
      chineseRole: '法律顾问',
      englishRole: 'Legal Advisor',
      introduction: {
        zh: '您好，我是莉拉·夏尔玛，法律顾问，同时兼职纪录片导演。我相信每个商业提案背后都隐藏着社会议题。',
        en: "I'm Leela Sharma, a legal advisor and part-time documentary director. I believe every business proposal hides a social issue.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-2-intro.mp4`
      },
      questions: [
        {
        zh: '您是否注意到旁边的年轻人一直在偷偷观察您？',
        en: "Did you notice the boy next to you keeps looking at you secretly?"
        },
        {
        zh: '您手腕上的珍珠手链是否具有特殊意义？',
        en: "Is the pearl bracelet on your wrist some kind of token?"
        }
      ],
      answers: [
        {
        zh: '是的，他以为我未察觉。年轻人眼中的敬佩与怀疑从不掩饰——我年轻时也曾如此。',
        en: "Yes, he thinks I haven't noticed. The admiration and doubt in young people's eyes never lie—I was once like him.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-2-answer1.mp4`
        },
        {
        zh: '这是我祖母留下的遗物。她曾是印度独立运动的地下联络员，告诉我：在强权面前，优雅是最危险的武器。',
        en: "It's a gift from my grandmother. She was an underground contact for the Indian independence movement. She told me: in the face of power, elegance is the most dangerous weapon.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-2-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-2.png`
    },
    {
      id: '3',
      chineseName: '奥斯卡·里维拉',
      englishName: 'Oscar Rivera',
      chineseRole: '人工智能研究助理',
      englishRole: 'AI Research Assistant',
      introduction: {
        zh: '我是奥斯卡·里维拉，人工智能研究助理。此行是为上司代办事务，却意外加入了这场圆桌会议。',
        en: "I'm Oscar Rivera, an AI research assistant. I’m here running an errand for my boss, but I accidentally ended up at this roundtable.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-3-intro.mp4`
      },
      questions: [
        {
        zh: '您为何如此认真地记笔记？似乎比任何人都专注。',
        en: "Why are you taking notes so seriously? You seem more focused than anyone."
        },
        {
        zh: '您注视那位穿红西装的男子时有何感受？',
        en: "What do you feel when looking at the man in the red suit?"
        }
      ],
      answers: [
        {
        zh: '我在撰写一部小说，名为《透明会议》。主角是一位不起眼的实习生，最终揭露了整个系统的虚伪。',
        en: "I’m writing a novel called 'Transparent Meeting.' The protagonist is an unremarkable intern who ultimately exposes the hypocrisy of the system.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-3-answer1.mp4`
        },
        {
        zh: '他像是小说中的反派首领。我只希望他没发现我在写他的故事。',
        en: "He looks like the villain boss in my novel. I just hope he doesn't find out I’m writing about him.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-3-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-3.png`
    },
    {
      id: '4',
      chineseName: '索菲娅·莫雷诺',
      englishName: 'Sofia Moreno',
      chineseRole: '西班牙商业记者',
      englishRole: 'Spanish Business Journalist',
      introduction: {
        zh: '我是索菲娅·莫雷诺，西班牙商业记者，目前为《经济人》撰写一篇特稿：《会场之外的操盘手》。',
        en: "I'm Sofia Moreno, a Spanish business journalist, currently writing a special report for 'Economist': 'The Power Behind the Scenes.'",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-4-intro.mp4`
      },
      questions: [
        {
        zh: '您为何不注视发言者，而是盯着文件？',
        en: "Why aren’t you looking at the speaker, but instead at the document?"
        },
        {
        zh: '您计划如何处理这些信息？',
        en: "What do you plan to do with this information?"
        }
      ],
      answers: [
        {
        zh: '因为文件不会撒谎。我已发现他过去三家公司的财务报告存在漏洞，正在等待一个提问的最佳时机。',
        en: "Because documents don’t lie. I've already found discrepancies in the financial reports of his past three companies. I'm waiting for the perfect moment to ask.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-4-answer1.mp4`
        },
        {
        zh: '视情况而定。若他选择坦诚，我会让他成为封面人物。若他继续虚张声势……那就等着上报纸头条吧。',
        en: "It depends. If he chooses honesty, I’ll make him the cover story. If he keeps bluffing... then he’ll make headlines.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-4-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-4.png`
    },
    {
      id: '5',
      chineseName: '伊藤大树',
      englishName: 'Takeshi Ito',
      chineseRole: '技术顾问',
      englishRole: 'Technical Consultant',
      introduction: {
        zh: '我是伊藤大树，来自东京的技术顾问。我习惯以沉默提问，以眼神回应。',
        en: "I'm Takeshi Ito, a technical consultant from Tokyo. I prefer to ask questions in silence and respond with a gaze.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-5-intro.mp4`
      },
      questions: [
        {
        zh: '您一直沉默不语，是因语言障碍，还是有意为之的策略？',
        en: "You haven’t spoken, is it because of language barrier, or strategy?"
        },
        {
        zh: '您电脑上的图表显示欧洲地图和橙色条形图，代表什么？',
        en: "The chart on your computer shows a map of Europe and an orange bar graph, what do they represent?"
        }
      ],
      answers: [
        {
        zh: '语言可能误导，眼神却不会。我在等待他们的矛盾自行显现。',
        en: "Language can mislead, but a gaze does not. I'm waiting for their contradictions to surface on their own.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-5-answer1.mp4`
        },
        {
        zh: '那是他们试图隐瞒的数据。我只需提出一个问题，就能让整个会议从讨论转为审判。',
        en: "That’s data they’re trying to conceal. I just need one question, and the whole meeting will shift from discussion to trial.",
        video: `${process.env.PUBLIC_URL}/assets/videos/01-meeting-5-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-5.png`
    }
  ]
}
// src/constants/scenes/04-ceremony.js
export const CEREMONY_SCENE = {
  id: '4',
  chineseName: '仪式',
  englishName: 'Ceremony',
  bgColor: '#FE7733',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/04-ceremony-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/04-ceremony-full.png`,
  backgroundMusic: `${process.env.PUBLIC_URL}/assets/audio/04-ceremony-bg-music.mp3`,
  characters: [
    {
      id: '1',
      chineseName: '乔治·萨米恩',
      englishName: 'George Samien',
      chineseRole: '退休地质学家',
      englishRole: 'Retired Geologist',
      introduction: {
        zh: '您好，我是乔治·萨米恩，一名退休地质学家。今日，我与妻子正在欧洲旅行，探寻每一条历史悠久的石板路。',
        en: "Hi, I'm George Samien, a retired geologist. Today, my wife and I are traveling through Europe, exploring every historic cobblestone road.",
        video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-1-intro.mp4`,
      },
      questions: [
        {
          zh: '乔治先生，您是如何来到这场婚礼拍摄现场的？',
          en: "Mr. George, what brought you to the wedding shoot today?",
        },
        {
          zh: '您似乎在非常专注地观察新郎新娘？',
          en: "You seem to be observing the bride and groom very intently?",
        }
      ],
      answers: [
        {
          zh: '哈哈，我原本计划参加一位老友的咖啡聚会，路过此处时看到这场婚礼拍摄，忍不住驻足观赏片刻。',
          en: "Haha, I was actually heading to a coffee meeting with an old friend, but when I saw the wedding shoot here, I couldn't resist stopping to watch for a while.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-1-answer1.mp4`,
        },
        {
          zh: '是的，年轻人的爱情总让我回忆起当年在冰岛火山口向妻子求婚的场景。那日风很大，但她的笑容格外温馨。',
          en: "Yes, young love always reminds me of the day I proposed to my wife at the edge of a volcano in Iceland. It was windy, but she smiled so warmly.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-1-answer2.mp4`,
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/04-ceremony-1.png`,
    },
    {
      id: '2',
      chineseName: '卢卡斯·席尔瓦',
      englishName: 'Lucas Silva',
      chineseRole: '婚礼摄影师',
      englishRole: 'Wedding Photographer',
      introduction: {
        zh: '您好，我是卢卡斯·席尔瓦，今日的婚礼摄影师。我从事摄影已有十年，热衷于捕捉人类情感时创造独特的瞬间之美。',
        en: "Hi, I'm Lucas Silva, the wedding photographer today. I've been into photography for 10 years, and I love creating unique moments of beauty when capturing human emotions.",
        video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-2-intro.mp4`,
      },
      questions: [
        {
          zh: '卢卡斯，您有十年的婚纱摄影经验，对今天的拍摄有何看法？',
          en: "Lucas, you've been photographing wedding shoots for 10 years. What do you think of today’s shoot?",
        },
        {
          zh: '拍摄过程中是否有令您难忘的瞬间？',
          en: "Are there any unforgettable moments during the shoot?",
        }
      ],
      answers: [
        {
          zh: '今日的拍摄尤为感人，新郎与新娘的眼神交流最令我动容，充满了深厚的信任与爱意。',
          en: "Today's shoot was especially touching. The eye contact between the bride and groom was the most moving part for me—it was filled with deep trust and love.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-2-answer1.mp4`,
        },
        {
          zh: '最深刻的瞬间是新郎因紧张而手心出汗时，新娘轻轻握住他的手。那一刻，所有的焦虑仿佛都烟消云散。',
          en: "What stood out to me was when the groom's palms were sweating with nervousness, and the bride held his hand. In that moment, all the anxiety disappeared.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-2-answer2.mp4`,
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/04-ceremony-2.png`,
    },
    {
      id: '3',
      chineseName: '丽莎·科温',
      englishName: 'Lisa Covin',
      chineseRole: '自由撰稿人',
      englishRole: 'Freelance Writer',
      introduction: {
        zh: '您好，我是丽莎·科温，一名专注旅游与人文故事的自由撰稿人。今日我正在进行街头摄影采风。',
        en: "Hi, I'm Lisa Covin, a freelance writer specializing in travel and cultural stories. Today, I'm out here doing street photography.",
        video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-3-intro.mp4`,
      },
      questions: [
        {
          zh: '丽莎，您是偶然发现这场拍摄的吗？为何笑得如此开心？',
          en: "Lisa, did you see this by chance? Why are you smiling so brightly?",
        },
        {
          zh: '您的口袋鼓鼓的，里面藏着什么秘密武器吗？',
          en: "Your pocket seems full, do you have some secret weapon in there?",
        }
      ],
      answers: [
        {
          zh: '我正在撰写一篇关于“城市微光”的文章，看到这一幕，感觉像是上天赐予的完美素材——一对新人在城市喧嚣中，拥有属于他们的宁静时刻。',
          en: "I was actually writing an article about 'Urban Glow,' and when I saw this scene, it felt like a perfect piece of material from the heavens—a couple finding their peaceful moment in the midst of the city's chaos.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-3-answer1.mp4`,
        },
        {
          zh: '哈哈，那是我的速写本！我习惯在旅途中快速记录场景细节。或许不久后，这对新人会出现在我的下一篇散文中。',
          en: "Haha, it's my sketchbook! I like to quickly jot down scene details while traveling. Who knows, these newlyweds might end up in my next essay.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-3-answer2.mp4`,
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/04-ceremony-3.png`,
    },
    {
      id: '4',
      chineseName: '艾伦·维克',
      englishName: 'Allen Wick',
      chineseRole: '摄影助理',
      englishRole: 'Photography Assistant',
      introduction: {
        zh: '您好，我是艾伦·维克，今日婚礼拍摄的摄影助理。我主要负责搬运器材、调整灯光，偶尔还需在街头协助疏导行人。',
        en: "Hi, I'm Allen Wick, the photography assistant for today’s wedding shoot. I mainly handle equipment, adjust the lights, and sometimes help clear pedestrians off the street.",
        video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-4-intro.mp4`,
      },
      questions: [
        {
          zh: '艾伦，您背着这么大的包，不觉得累吗？',
          en: "Allen, doesn't carrying such a big bag tire you out?",
        },
        {
          zh: '您似乎一直在低头调整设备，会不会觉得错过了许多浪漫瞬间？',
          en: "You seem to always be adjusting things down there, don’t you think you’re missing out on a lot of romantic moments?",
        }
      ],
      answers: [
        {
          zh: '很累！包里装着两台备用相机、三块电池、一瓶水，还有一件备用婚纱——是的，如果新娘的裙子脏了，我们得立刻更换。',
          en: "Yeah, it's tiring! I have two backup cameras, three batteries, a bottle of water, and a backup wedding dress—yep, if the bride's dress gets dirty, we need to switch it out immediately.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-4-answer1.mp4`,
        },
        {
          zh: '其实不会。我的任务是确保所有镜头运转顺畅。记录他们的幸福比自己沉浸其中更重要。真正的浪漫，在于幕后守护。',
          en: "Actually, no. My job is to make sure all the cameras work smoothly. Capturing their happiness is more important than losing myself in the moment. The real romance is in guarding the scenes behind the scenes.",
          video: `${process.env.PUBLIC_URL}/assets/videos/04-ceremony-4-answer2.mp4`,
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/04-ceremony-4.png`,
    }
  ]
};
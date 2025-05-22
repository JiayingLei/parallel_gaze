// src/constants/scenes/03-activity.js
export const ACTIVITY_SCENE = {
  id: '3',
  chineseName: '活动',
  englishName: 'Activity',
  bgColor: '#48937E',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/03-activity-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/03-activity-full.png`,
  backgroundMusic: `${process.env.PUBLIC_URL}/assets/audio/03-activity-bg-music.mp3`,
  characters: [
    {
      id: '1',
      chineseName: '玛格丽特',
      englishName: 'Margaret',
      chineseRole: '村庄裁缝',
      englishRole: 'Village Tailor',
      introduction: {
        zh: '您好，我是玛格丽特，47岁，是本村的裁缝。今日我正忙于协助庆典，为年轻姑娘们整理衣裙，确保她们在节日舞蹈中展现优雅风姿。',
        en: "Hello, I'm Margaret, 47 years old, the village tailor. I'm helping with the festival today, adjusting the girls’ dresses to make sure they look graceful during the dance.",
        video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-1-intro.mp4`
      },
      questions: [
        {
          zh: '您的表情为何显得有些紧张？',
          en: "Why do you look a little tense?"
        },
        {
          zh: '您手中的动作是什么？为何似乎在忙碌地翻找东西？',
          en: "What are you doing with your hands? Are you rummaging for something?"
        }
      ],
      answers: [
        {
          zh: '今日的庆典至关重要。我刚发现一位姑娘的裙摆线头可能松动，若在舞蹈中裂开可就麻烦了！我得趁着大家热闹时，悄悄修补这些小瑕疵。',
          en: "Oh, today's festival is very important. I just noticed one girl's hem might be loose—imagine if it tears mid-dance! I need to fix it discreetly while everyone's still distracted.",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-1-answer1.mp4`
        },
        {
          zh: '我正把手伸进围裙口袋！别小看我只是辅助角色，我可是随时携带针线的裁缝大师，随时准备应对突发情况。年轻人总忽视这些细节。',
          en: "I’m reaching into my apron pocket! Don’t underestimate me—I always carry my sewing kit, ready for emergencies. These youngsters overlook the small stuff!",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-1-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/03-activity-1.png`
    },
    {
      id: '2',
      chineseName: '克拉拉',
      englishName: 'Clara',
      chineseRole: '村庄面包师',
      englishRole: 'Village Baker',
      introduction: {
        zh: '您好，我是克拉拉，36岁，是村里的面包师。今日清晨我亲手烤制了一篮节日面包，准备在庆典结束后与大家分享。',
        en: "Hi, I'm Clara, 36 years old, the village baker. I baked a full basket of festive bread this morning to share once the celebration concludes.",
        video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-2-intro.mp4`
      },
      questions: [
        {
          zh: '您为何站得如此安静，与周围的热闹气氛略显不协调？',
          en: "Why are you standing so quietly, unlike the festive crowd?"
        },
        {
          zh: '您似乎心情复杂，显得若有所思？',
          en: "Are you feeling a little conflicted? You seem deep in thought."
        }
      ],
      answers: [
        {
          zh: '哈哈，我在偷偷观察那两位牵手跳舞的姑娘！她们练习了好几周，今天表演传统舞蹈。我既紧张又好奇，担心她们忘了舞步。',
          en: "Haha, I’m secretly watching the two girls dancing! They’ve been practicing for weeks. I’m both nervous and curious—they better not forget the moves!",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-2-answer1.mp4`
        },
        {
          zh: '是的，烤面包时我在思考村里年轻人逐渐流失的问题。希望这样的庆典能让年轻人感受到家乡的温暖，愿意传承这份传统。',
          en: "Yes. While baking, I was worrying about how our youth are leaving the village. I hope events like this make them feel rooted—help them cherish our traditions.",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-2-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/03-activity-2.png`
    },
    {
      id: '3',
      chineseName: '约翰',
      englishName: 'John',
      chineseRole: '小型农场主',
      englishRole: 'Small Farm Owner',
      introduction: {
        zh: '我是约翰，29岁，是村里的小型农场主。今日的任务是负责运送供水桶，这些水桶是庆典舞蹈表演的道具，用于营造古老传统氛围。',
        en: "I'm John, 29 years old, a small farm owner. Today I’m in charge of transporting water buckets used as props in the celebration, helping recreate a traditional atmosphere.",
        video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-3-intro.mp4`
      },
      questions: [
        {
          zh: '您提着水桶为何步伐如此匆忙？是着急吗？',
          en: "Why are you rushing with the bucket? Are you in a hurry?"
        },
        {
          zh: '您对这次庆典的工作满意吗？看起来似乎有些倔强的劲头？',
          en: "Are you satisfied with your role today? You look a little stubborn."
        }
      ],
      answers: [
        {
          zh: '是的，我得在表演开始前将水桶放置到指定位置，并为桶里的水添加冰块，确保其清爽，符合传统风味。',
          en: "Haha, yes! I need to place the buckets before the performance starts—and chill them with ice to give that traditional refreshing feel.",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-3-answer1.mp4`
        },
        {
          zh: '我对工作是满意的，但说实话，我认为男性不应只负责后勤！我们的舞步比那些年轻人更有力量。明年我要向玛格丽特申请加入男子舞队！',
          en: "I’m satisfied, sure—but honestly, why should men only handle logistics? Our moves are just as powerful! Next year, I’m applying to join Margaret’s dance crew!",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-3-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/03-activity-3.png`
    },
    {
      id: '4',
      chineseName: '艾琳',
      englishName: 'Irene',
      chineseRole: '新嫁娘',
      englishRole: 'New Bride',
      introduction: {
        zh: '我是艾琳，42岁，是村里的新嫁娘。这是婚后首次参与庆典，玛格丽特特意为我设计了一条新裙子，格外隆重。',
        en: "I'm Irene, 42 years old, a new bride in the village. This is my first festival since getting married, and Margaret made me a brand new dress—it’s quite grand.",
        video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-4-intro.mp4`
      },
      questions: [
        {
          zh: '您为何轻扶裙摆？是为了避免舞步受阻吗？',
          en: "Why are you holding your dress? Is it to help with dancing?"
        },
        {
          zh: '您的神情为何带着几分羞涩？',
          en: "Why do you look a little shy?"
        }
      ],
      answers: [
        {
          zh: '是的，我担心自己会绊倒！这场舞蹈承载着传统，若舞步出错，便是对传统的不敬。玛格丽特多次提醒我确保裙摆牢固合身。',
          en: "Yes, I’m afraid of tripping! This dance honors tradition—any mistake would be disrespectful. Margaret reminded me many times to ensure my hem is secure.",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-4-answer1.mp4`
        },
        {
          zh: '是的，因为我刚嫁入村庄，尚感陌生，而大家的目光都聚焦于我，似乎对我的表现尤为关注。不过，我会以今晚的舞步证明，我已是村里的一员。',
          en: "Well, I’m new to this village and still a bit unfamiliar. Everyone’s watching closely—but I’ll prove with my dance tonight that I belong.",
          video: `${process.env.PUBLIC_URL}/assets/videos/03-activity-4-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/03-activity-4.png`
    }
  ]
};
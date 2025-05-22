// src/constants/scenes/02-party.js
export const PARTY_SCENE = {
  id: '2',
  chineseName: '派对',
  englishName: 'Party',
  bgColor: '#F7A1B5',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/02-party-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/02-party-full.png`,
  backgroundMusic: `${process.env.PUBLIC_URL}/assets/audio/02-party-bg-music.mp3`,
  characters: [
    {
      id: '1',
      chineseName: '圣地亚戈',
      englishName: 'Santiago',
      chineseRole: '夜校学生',
      englishRole: 'Night School Student',
      introduction: {
        zh: '您好，我是圣地亚戈，平日里在夜校学习，白天从事零散工作。今天是我的生日，无人记起也无妨，我独自来此小酌一杯。',
        en: "I'm Santiago, a night school student. I work odd jobs during the day. Today is actually my birthday, but it doesn't matter if anyone remembers, I'll just have a drink by myself.",
        video: `${process.env.PUBLIC_URL}/assets/videos/02-party-1-intro.mp4`
      },
      questions: [
        {
          zh: '您提到今天是您的生日，却选择独自饮酒，是出于习惯，还是不愿麻烦他人？',
          en: "You mentioned that today is your birthday, but you chose to drink alone. Is it out of habit, or you just don’t want to bother others?"
        },
        {
          zh: '您说喜欢“在人群中隐身”，今晚您是否留意到什么特别的人或事？',
          en: "You mentioned you like to 'blend into the crowd.' Did you notice anything special tonight?"
        }
      ],
      answers: [
        {
          zh: '并非每年都如此。小时候，生日是全家最热闹的时刻，但自从搬出后，似乎无人记得这一天。久而久之，我学会了独自庆祝——无需蛋糕，仅一杯冰酒与些许背景音乐便足矣。',
          en: "It’s not always like this. When I was a kid, birthdays were the most festive days with my family. But since I moved out, no one seems to remember anymore. Over time, I learned to celebrate by myself—no need for cake, just a glass of ice wine and some background music.",
          video: `${process.env.PUBLIC_URL}/assets/videos/02-party-1-answer1.mp4`
        },
        {
          zh: '是的，那边那位戴棒球帽的摄影师很有趣。他沉默寡言，但眼神如雷达般扫视每个角落。还有那位穿灰色毛衣的女孩，她的笑容仅持续了0.3秒便收敛。我猜她比我还想早些离开。',
          en: "Yes, the photographer wearing a baseball cap over there is interesting. He doesn’t say much, but his eyes scan every corner like a radar. And the girl in the grey sweater, her smile lasted only 0.3 seconds before she pulled it back. I guess she wants to leave earlier than me.",
          video: `${process.env.PUBLIC_URL}/assets/videos/02-party-1-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/02-party-1.png`
    },
    {
      id: '2',
      chineseName: '里奥',
      englishName: 'Leo',
      chineseRole: '篮球校队替补控卫',
      englishRole: 'Basketball Reserve Point Guard',
      introduction: {
        zh: '我是里奥，篮球校队的替补控卫。今晚球队获胜后，队友提议来此放松。我刚进门就听到有人喊“里奥来了！”回头一看，有人正用手机对我拍照，颇为尴尬。',
        en: "I'm Leo, a reserve point guard on the basketball team. After our win tonight, my teammates suggested we come to relax. As soon as I walked in, someone shouted 'Little Leo is here!' I turned around, and saw someone taking a picture of me with their phone. Super awkward.",
        video: `${process.env.PUBLIC_URL}/assets/videos/02-party-2-intro.mp4`
      },
      questions: [
        {
          zh: '您提到在非球场环境中感到不自在，为何仍选择参加这场派对？',
          en: "You mentioned you don’t feel comfortable in non-court settings. So why did you choose to come to this party?"
        },
        {
          zh: '您母亲赠送的那条项链似乎对您意义重大，能否分享其背后的故事？',
          en: "That necklace your mom gave you seems really important. Can you tell me the story behind it?"
        }
      ],
      answers: [
        {
          zh: '因为我不想让大家认为我只会打球、只存在于球场。我也想尝试在喧闹人群中讲个冷笑话博人一笑，哪怕仅一次也好。',
          en: "Because I don’t want people to think I only exist on the court. I also want to try and tell a funny joke in the noisy crowd, even if it’s just once.",
          video: `${process.env.PUBLIC_URL}/assets/videos/02-party-2-answer1.mp4`
        },
        {
          zh: '那是我十四岁时随家人从阿根廷搬到这里时，母亲送我的礼物。她说：“你可能觉得自己无处归属，但别忘了你是谁。”因此，每当我感到不自信时，我会轻触这条项链，仿佛在确认自己的存在。',
          en: "It was a gift from my mom when our family moved here from Argentina when I was 14. She said, 'You might feel like you don't belong anywhere, but don’t forget who you are.' So whenever I feel insecure, I touch this necklace like I'm confirming I still exist.",
          video: `${process.env.PUBLIC_URL}/assets/videos/02-party-2-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/02-party-2.png`
    },
    {
      id: '3',
      chineseName: '普瑞安',
      englishName: 'Prian',
      chineseRole: '用户体验工程师',
      englishRole: 'UX Engineer',
      introduction: {
        zh: '我是普瑞安，一名用户体验工程师。这场派对原本不在我的计划中，我更偏好简洁的代码和逻辑结构……但朋友说我不能总是沉浸在终端界面里。',
        en: "I'm Prian, a UX engineer. This party wasn't in my plans. I prefer clean code and logical structures... But my friend said I can't live in the terminal all the time.",
        video: `${process.env.PUBLIC_URL}/assets/videos/02-party-3-intro.mp4`
      },
      questions: [
        {
          zh: '您提到通过数戴黑帽的人来缓解社交焦虑，您还尝试过其他类似的“游戏”吗？',
          en: "You mentioned you play a game of counting people wearing black hats to ease your social anxiety. Have you played other games like this?"
        },
        {
          zh: '您似乎不是轻易会被朋友“拉出来”的人，邀请您今晚外出的这位朋友对您有何特别之处？',
          en: "You don't seem like the type to be easily 'dragged out' by friends. Is the one who got you out tonight special to you?"
        }
      ],
      answers: [
        {
          zh: '当然有，我有一个“派对算法”计划：为每个人分配一个行为评分——高分代表社交活跃分子，低分则为角落里的隐形人。',
          en: "Of course, I have a 'party algorithm' plan: I assign a behavior score to each person—high score means social butterflies, while low score represents wallflowers.",
          video: `${process.env.PUBLIC_URL}/assets/videos/02-party-3-answer1.mp4`
        },
        {
          zh: '他是我大学时的室友，远比我外向，总是说我像个人工智能生成的社交克隆体。',
          en: "He's my college roommate, much more outgoing than I am. He always says I’m like an AI-generated social clone.",
          video: `${process.env.PUBLIC_URL}/assets/videos/02-party-3-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/02-party-3.png`
    },
    // {
    //   id: '4',
    //   chineseName: '维拉',
    //   englishName: 'Vera',
    //   chineseRole: '产品经理',
    //   englishRole: 'Product Manager',
    //   introduction: {
    //     zh: '您好，我是维拉，一家时尚科技初创公司的产品经理。平时我负责打造既智能又有趣的AI虚拟试衣间功能。今天来此是为了收集用户对“穿搭比例”的真实反馈。',
    //     en: "Hi, I'm Vera, a product manager at a fashion-tech startup. I’m responsible for making the AI virtual fitting room both smart and fun—today I’m here to gather real user feedback on 'outfit proportions.'",
    //     video: `${process.env.PUBLIC_URL}/assets/videos/02-party-4-intro.mp4`
    //   },
    //   questions: [
    //     {
    //       zh: '您举手的动作是在打断别人，还是在强调某事？',
    //       en: "Was the gesture you made with your hand to interrupt someone or to emphasize something?"
    //     },
    //     {
    //       zh: '您听得很专注，这是在进行用户调研吗？',
    //       en: "You seem so focused listening. Is this part of your research?"
    //     }
    //   ],
    //   answers: [
    //     {
    //       zh: '其实我在向朋友莉莉比划裙摆长度的黄金比例，我们正讨论白裙搭配深色上衣是“优雅”还是“过于平淡”。',
    //       en: "Actually, I was signaling to my friend Lily about the golden ratio of skirt length. We were debating whether a white skirt with a dark top is 'elegant' or 'too plain.'",
    //       video: `${process.env.PUBLIC_URL}/assets/videos/02-party-4-answer1.mp4`
    //     },
    //     {
    //       zh: '正是如此！我会记录每个人试衣体验的表情细节，之后用于优化算法。',
    //       en: "Exactly! I record every detail of each person's fitting experience and later fine-tune the algorithm.",
    //       video: `${process.env.PUBLIC_URL}/assets/videos/02-party-4-answer2.mp4`
    //     }
    //   ],
    //   mask: `${process.env.PUBLIC_URL}/assets/masks/02-party-4.png`
    // }
  ]
};
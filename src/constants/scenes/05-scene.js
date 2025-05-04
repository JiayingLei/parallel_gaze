// src/constants/scenes/05-scene.js
export const SCENE_SCENE = {
  id: '5',
  chineseName: '现场',
  englishName: 'Scene',
  bgColor: '#6ECE8F',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/05-scene-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/05-scene-full.png`,
  characters: [
    {
      id: '1',
      chineseName: '杰瑞',
      englishName: 'Jerry',
      chineseRole: '摄像师',
      englishRole: 'Cameraman',
      introduction: {
        zh: '我叫杰瑞，是本地电视台的资深摄像师，十五年来，我的镜头记录了无数悲喜剧。从体育赛事到午夜凶案，镜头从未离开我肩膀。',
        en: "I'm Jerry, a senior cameraman at the local TV station. For fifteen years, my lens has captured countless tragedies and comedies. From sports games to midnight crimes, the camera has never left my shoulder.",
        video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-1-intro.mp4`
      },
      questions: [
        {
          zh: '你为什么总是戴着厚厚的羽绒服？不觉得拍摄时候很碍事吗？',
          en: "Why do you always wear that thick down jacket? Doesn't it get in the way while filming?"
        },
        {
          zh: '你和那位红衣女记者关系怎么样？看起来你们很默契。',
          en: "What's your relationship with the woman in red? You two seem to work well together."
        }
      ],
      answers: [
        {
          zh: '哈哈，其实这是我的幸运外套。六年前有次深夜拍摄，一辆车突然失控冲过来，幸亏我滚进了路边的雪堆，而这件羽绒服帮我扛住了冲击。从那以后，它就成了我的‘护身符’。',
          en: "Haha, actually, it's my lucky jacket. Six years ago, while filming late at night, a car suddenly lost control. I rolled into a snowbank, and this jacket absorbed the impact. Since then, it's been my talisman.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-1-answer1.mp4`
        },
        {
          zh: '哦，琳达？我们搭档了五年了。她是我见过最冷静也最勇敢的记者。有她在，我知道我的镜头总能对准最值得记录的瞬间。',
          en: "Linda? We've worked together for five years. She's the calmest and bravest reporter I've ever met. With her around, my camera always finds the right moment.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-1-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-1.png`
    },
    {
      id: '2',
      chineseName: '马克',
      englishName: 'Mark',
      chineseRole: '男警官',
      englishRole: 'Policeman',
      introduction: {
        zh: '我是马克，重案组的中队长。这些年，我已经习惯了在第一时间冲进现场，把混乱中理出头绪。',
        en: "I'm Mark, the squad leader of the Major Crimes Unit. Over the years, I've gotten used to rushing into scenes and making sense of chaos.",
        video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-2-intro.mp4`
      },
      questions: [
        {
          zh: '你看起来比其他人冷静很多，是因为经验丰富吗？',
          en: "You seem much calmer than others—is it because of your experience?"
        },
        {
          zh: '你怎么看那个女警？她还是个新人吧。',
          en: "What do you think about the female officer? She's new, right?"
        }
      ],
      answers: [
        {
          zh: '经验当然有帮助，但真正让我冷静的是对真相的渴望。我不希望那个故事被误读或遗忘。',
          en: "Experience helps, but what keeps me calm is the desire for truth. I don't want the story to be misunderstood or forgotten.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-2-answer1.mp4`
        },
        {
          zh: '蒂娜很聪明，也有那股不服输的狠劲。她提醒我自己当年的模样——年轻，胆大，但还不懂什么时候该后退一步。',
          en: "Tina is smart and tough. She reminds me of myself when I was younger—brave, eager, but still learning when to step back.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-2-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-2.png`
    },
    {
      id: '3',
      chineseName: '蒂娜',
      englishName: 'Tina',
      chineseRole: '女警官',
      englishRole: 'Policewoman',
      introduction: {
        zh: '我是蒂娜，刑侦队的新晋队员。今天是我第一次真正参与封锁案发现场，我一直在努力不让手心冒汗。',
        en: "I'm Tina, a new member of the detective squad. This is my first time truly participating in sealing off a crime scene, and I've been trying not to let my palms sweat.",
        video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-3-intro.mp4`
      },
      questions: [
        {
          zh: '你为什么一直皱着眉头？是在紧张，还是现场有点不对劲？',
          en: "Why do you keep frowning? Are you nervous, or is there something off at the scene?"
        },
        {
          zh: '你和那位男警官是什么关系？工作上看起来你们挺熟的。',
          en: "What's your relationship with the male officer? You seem familiar at work."
        }
      ],
      answers: [
        {
          zh: '说实话，确实有点紧张。这起案件太蹊跷了，现场整洁得几乎不像有斗争过的痕迹，但又明显有人遭遇了暴力。',
          en: "Honestly, I am a bit nervous. The scene is suspiciously tidy—almost no signs of struggle, yet there's clear evidence of violence.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-3-answer1.mp4`
        },
        {
          zh: '那是马克，我的带教官。他对我特别严厉，但其实每次都会悄悄帮我补做笔录的细节。',
          en: "That's Mark, my mentor. He's strict, but he always helps me quietly with the details of reports.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-3-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-3.png`
    },
    {
      id: '4',
      chineseName: '莎莉',
      englishName: 'Sally',
      chineseRole: '现场调查员',
      englishRole: 'Field Investigator',
      introduction: {
        zh: '我是莎莉，负责现场初步痕迹采集与分析。每次案件现场的血腥和混乱都让我夜不能寐。',
        en: "I'm Sally, responsible for preliminary evidence collection and analysis. The blood and chaos of every scene often haunt my nights.",
        video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-4-intro.mp4`
      },
      questions: [
        {
          zh: '你为什么总是低头？是在找什么重要的证据吗？',
          en: "Why do you always look down? Are you searching for something important?"
        },
        {
          zh: '你怎么看身后的警官？他们真的能理解你的专业工作吗？',
          en: "What do you think of the officers behind you? Do they truly understand your work?"
        }
      ],
      answers: [
        {
          zh: '是的，我在寻找鞋印、血迹、以及任何能说明嫌疑人走向的微痕。越不起眼的地方，越可能藏着答案。',
          en: "Yes, I look for footprints, blood stains, and tiny traces that might indicate a suspect's path. The less obvious the place, the more likely it hides answers.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-4-answer1.mp4`
        },
        {
          zh: '马克和蒂娜？我们配合得很好。他们懂得尊重我们法医团队的节奏。其实上次我找不到凶器的轨迹时，就是蒂娜提醒我看车库门角落，结果还真找到了一块带血的金属片。',
          en: "Mark and Tina? We work well together. They respect our forensic pace. Last time, when I couldn't trace the weapon, Tina pointed me to the corner of the garage door—and I really did find a bloody metal piece there.",
          video: `${process.env.PUBLIC_URL}/assets/videos/05-scene-4-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-4.png`
    }
  ]    
};
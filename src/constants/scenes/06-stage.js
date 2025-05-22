// src/constants/scenes/06-stage.js
export const STAGE_SCENE = {
  id: '6',
  chineseName: '舞台',
  englishName: 'Stage',
  bgColor: '#B2A1FF',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/06-stage-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/06-stage-full.png`,
  backgroundMusic: `${process.env.PUBLIC_URL}/assets/audio/06-stage-bg-music.mp3`,
  characters: [
    {
      id: '1',
      chineseName: '豪',
      englishName: 'Jao',
      chineseRole: '数学系学生',
      englishRole: 'Math Student',
      introduction: {
        zh: '我是豪，菲律宾大学迪利曼分校数学系三年级学生。我受社团“色彩模式数学研究计划”的委派来到此处。',
        en: "I'm Jao, a junior math major from UP Diliman. I'm here on assignment from our club's 'Color Pattern Research Project'.",
        video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-1-intro.mp4`
      },
      questions: [
        {
          zh: '你笑得如此灿烂，真的只是为了进行数学实验吗？',
          en: "You're smiling so brightly—is it really just for a math experiment?"
        },
        {
          zh: '你希望从这些人群中发现什么？',
          en: "What are you trying to discover among these people?"
        }
      ],
      answers: [
        {
          zh: '其实，我第一次感受到：色彩也可以被量化，但情感却是无法预测的。',
          en: "For the first time, I realized color can be measured—but the emotion? That’s beyond prediction.",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-1-answer1.mp4`
        },
        {
          zh: '我们正在研究“色彩传播的动态模型”，但我更感兴趣的是：为何笑容会如颜料般扩散？',
          en: "We're modeling color propagation dynamics, but I think I’m more curious about why smiles spread like pigment.",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-1-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/06-stage-1.png`
    },
    {
      id: '2',
      chineseName: '利奥',
      englishName: 'Leo',
      chineseRole: '大学毕业生',
      englishRole: 'Recent Graduate',
      introduction: {
        zh: '大家好，我是利奥，今年刚从大学毕业，特意从宿务赶到马尼拉参加Color Manila活动。这是我的年度愿望清单上的第一项！',
        en: "Hi, I’m Leo. I just graduated from college and came all the way from Cebu to join Color Manila—it’s the first item on my bucket list this year!",
        video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-2-intro.mp4`
      },
      questions: [
        {
          zh: '你的头发是真正染成绿色的，还是只是沾上了颜料？',
          en: "Is your hair really dyed green or just splashed with paint?"
        },
        {
          zh: '为何选择参加Color Manila来庆祝毕业？',
          en: "Why did you choose Color Manila to celebrate graduation?"
        }
      ],
      answers: [
        {
          zh: '哈哈，是颜料！不过我可能会考虑真的染成这样——毕竟，这绿色比我原本的棕色酷多了！',
          en: "Haha, it's just paint! But maybe I’ll actually dye it—this green looks way cooler than my usual brown!",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-2-answer1.mp4`
        },
        {
          zh: '我想以此纪念自由的起点。大学毕业是一个重要的里程碑，我希望以最热烈、最鲜艳的方式告别过去的自己。',
          en: "I wanted to mark the beginning of freedom. Graduation is a milestone—and I wanted the boldest, brightest way to say goodbye to my old self.",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-2-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/06-stage-2.png`
    },
    {
      id: '3',
      chineseName: '肯',
      englishName: 'Ken',
      chineseRole: '平面设计师',
      englishRole: 'Graphic Designer',
      introduction: {
        zh: '我叫肯，25岁，在马卡蒂从事平面设计工作。我原本是陪前女友报名参加的……结果她爽约了，但我还是来了，意外结识了利奥，感觉他比她可靠多了。',
        en: "I'm Ken, 25, a graphic designer in Makati. I was supposed to come with my ex... she ghosted me, but I still came and met Leo—turns out he's more reliable anyway.",
        video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-3-intro.mp4`
      },
      questions: [
        {
          zh: '你的红色头巾是出于时尚考虑，还是为了遮阳？',
          en: "Is that red bandana a fashion statement or... for sun protection?"
        },
        {
          zh: '你和利奥聊了什么让你们成为朋友？',
          en: "What did you and Leo talk about that made you become friends?"
        }
      ],
      answers: [
        {
          zh: '实话实说，是为了遮盖秃顶。设计工作太辛苦，通宵改图让我头发都“离家出走”了。但在Color Manila，我第一次觉得秃头也能很时尚。',
          en: "Honestly? It’s for hiding my bald spot. Design life is brutal—too many all-nighters. But today, Color Manila made bald cool.",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-3-answer1.mp4`
        },
        {
          zh: '我们都觉得人生如调色盘，需大胆挥洒色彩——越是混乱越有趣。他说我是红色，他是绿色。谁说互补色不能一起创造点什么呢？',
          en: "We both think life is like a color palette—you’ve gotta splash paint on it boldly. He said I’m red, he’s green. Who says complementary colors can’t create something together?",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-3-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/06-stage-3.png`
    },
    {
      id: '4',
      chineseName: '米拉',
      englishName: 'Mira',
      chineseRole: '资深护士',
      englishRole: 'Senior Nurse',
      introduction: {
          zh: '我是米拉，拥有20年护理经验的护士。这根气球棒是我的疗愈工具——提醒我在高压的工作中，为自己和患者保留一抹色彩。',
          en: "I'm Mira, a nurse with 20 years experience. This balloon stick is my healing tool—it helps me keep some color in life for my patients and myself.",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-4-intro.mp4`
      },
      questions: [
        {
          zh: '你手持的绿色气球棒有何特别寓意吗？',
          en: "Does your green balloon stick have a special meaning?"
        },
        {
          zh: '你站在稍远的地方，是不是不太愿意靠近人群？',
          en: "You’re standing a bit far from the crowd—are you avoiding it?"
        }
      ],
      answers: [
        {
          zh: '绿色象征“生命”。在医院里，我见惯了太多的“白色”——过于冷静、理性、安静。所以今天，我想让自己也更有“生命力”。',
          en: "Green means 'life'. In hospitals, I see too much white—too calm, too rational, too quiet. Today, I want to feel a bit more alive.",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-4-answer1.mp4`
        },
        {
          zh: '是的，我一直在照顾他人，却鲜有人问我“累不累”。所以我站在边缘，用这根气球棒给自己一点存在感……其实，我很羡慕那些无忧无虑跳舞的人。',
          en: "Yes. I’m always caring for others, and no one asks if I’m tired. So I stay on the edge, this balloon stick gives me a bit of presence. Honestly, I envy those who can dance without a care.",
          video: `${process.env.PUBLIC_URL}/assets/videos/06-stage-4-answer2.mp4`
        }
      ],
      mask: `${process.env.PUBLIC_URL}/assets/masks/06-stage-4.png`
    }
  ]
};
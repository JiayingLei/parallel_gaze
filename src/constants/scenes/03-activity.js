// src/constants/scenes/03-activity.js
export const ACTIVITY_SCENE = {
  id: '3',
  chineseName: '活动',
  englishName: 'Activity',
  bgColor: '#48937E',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/03-activity-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/03-activity-full.png`,
  characters: [
    {
      id: '1',
      chineseName: '舞者',
      englishName: 'Dancer',
      mask: `${process.env.PUBLIC_URL}/assets/masks/03-activity-1.png`
    },
    {
      id: '2',
      chineseName: '鼓手',
      englishName: 'Drummer',
      mask: `${process.env.PUBLIC_URL}/assets/masks/03-activity-2.png`
    },
    {
      id: '3',
      chineseName: '观众',
      englishName: 'Audience',
      mask: `${process.env.PUBLIC_URL}/assets/masks/03-activity-3.png`
    }
  ]
};
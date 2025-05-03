// src/constants/scenes/01-meeting.js
export const MEETING_SCENE = {
  id: '1',
  chineseName: '会议',
  englishName: 'Meeting',
  bgColor: '#CCF656',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/01-meeting-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/01-meeting-full.png`,
  characters: [
    {
      id: '1',
      chineseName: '商务人士',
      englishName: 'Businessman',
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-1.png`
    },
    {
      id: '2',
      chineseName: '秘书',
      englishName: 'Secretary',
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-2.png`
    },
    {
      id: '3',
      chineseName: '客户代表',
      englishName: 'Client Representative',
      mask: `${process.env.PUBLIC_URL}/assets/masks/01-meeting-3.png`
    }
  ]
};
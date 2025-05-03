// src/constants/scenes/04-ceremony.js
export const CEREMONY_SCENE = {
  id: '4',
  chineseName: '仪式',
  englishName: 'Ceremony',
  bgColor: '#FE7733',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/04-ceremony-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/04-ceremony-full.png`,
  characters: [
    {
      id: '1',
      chineseName: '新娘',
      englishName: 'Bride',
      mask: `${process.env.PUBLIC_URL}/assets/masks/04-ceremony-1.png`
    },
    {
      id: '2',
      chineseName: '新郎',
      englishName: 'Groom',
      mask: `${process.env.PUBLIC_URL}/assets/masks/04-ceremony-2.png`
    },
    {
      id: '3',
      chineseName: '司仪',
      englishName: 'Officiant',
      mask: `${process.env.PUBLIC_URL}/assets/masks/04-ceremony-3.png`
    }
  ]
};
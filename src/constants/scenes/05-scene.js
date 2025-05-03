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
      chineseName: '摄影师',
      englishName: 'Photographer',
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-1.png`
    },
    {
      id: '2',
      chineseName: '最右警察',
      englishName: 'Rightmost Officer',
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-2.png`
    },
    {
      id: '3',
      chineseName: '黑人女警',
      englishName: 'Black Female Officer',
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-3.png`
    },
    {
      id: '4',
      chineseName: '法医',
      englishName: 'Medical Examiner',
      mask: `${process.env.PUBLIC_URL}/assets/masks/05-scene-4.png`
    }
  ]    
};
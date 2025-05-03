// src/constants/scenes/06-stage.js
export const STAGE_SCENE = {
  id: '6',
  chineseName: '舞台',
  englishName: 'Stage',
  bgColor: '#B2A1FF',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/06-stage-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/06-stage-full.png`,
  characters: [
    {
      id: '1',
      chineseName: '主唱',
      englishName: 'Vocalist',
      mask: `${process.env.PUBLIC_URL}/assets/masks/06-stage-1.png`
    },
    {
      id: '2',
      chineseName: '吉他手',
      englishName: 'Guitarist',
      mask: `${process.env.PUBLIC_URL}/assets/masks/06-stage-2.png`
    },
    {
      id: '3',
      chineseName: '观众',
      englishName: 'Audience',
      mask: `${process.env.PUBLIC_URL}/assets/masks/06-stage-3.png`
    }
  ]
};
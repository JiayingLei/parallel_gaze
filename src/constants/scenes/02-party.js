// src/constants/scenes/02-party.js
export const PARTY_SCENE = {
  id: '2',
  chineseName: '派对',
  englishName: 'Party',
  bgColor: '#F230AA',
  thumbnail: `${process.env.PUBLIC_URL}/assets/images/scenes/02-party-thumb.png`,
  full: `${process.env.PUBLIC_URL}/assets/images/scenes/02-party-full.png`,
  characters: [
    {
      id: '1',
      chineseName: '派对主角',
      englishName: 'Party Host',
      mask: `${process.env.PUBLIC_URL}/assets/masks/02-party-1.png`
    },
    {
      id: '2',
      chineseName: '调酒师',
      englishName: 'Bartender',
      mask: `${process.env.PUBLIC_URL}/assets/masks/02-party-2.png`
    },
    {
      id: '3',
      chineseName: '宾客',
      englishName: 'Guest',
      mask: `${process.env.PUBLIC_URL}/assets/masks/02-party-3.png`
    }
  ]
};
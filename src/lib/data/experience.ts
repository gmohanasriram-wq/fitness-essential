import type { Experience } from '@/types';

export const experience: Experience = {
  eyebrow: 'The experience',
  headline: ['Considered. Consistent.', 'Built to be used.'],
  pillars: [
    {
      index: '01',
      title: 'Curated equipment',
      description:
        'A selection maintained to a single standard — chosen for how it trains, not how it photographs.',
    },
    {
      index: '02',
      title: 'A clean, focused floor',
      description:
        'Immaculate, uncluttered, and set up for serious work from the moment the doors open.',
    },
    {
      index: '03',
      title: 'Staff who know the room',
      description:
        'A team present on the floor, available to assist with programming, technique, and form.',
    },
  ],
  closing:
    'No theatrics. No noise. Just the conditions required to train well, day after day.',
  image: {
    src: '/images/experience/floor-editorial.jpg',
    alt: 'Fitness Essentials training floor editorial view concept',
  },
};

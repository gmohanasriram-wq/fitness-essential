import type { Equipment } from '@/types';

export const equipment: Equipment = {
  eyebrow: 'TRAINING ENVIRONMENT',
  headline: 'Built for performance. Designed for you.',
  body: 'Our space is engineered to help you focus, train hard, and become the strongest version of yourself.',
  note: 'Temporary concept imagery shown. Actual facility photography to be inserted.',
  items: [
    {
      id: 1,
      label: 'Strength floor',
      alt: 'Strength training area with power racks and platforms',
      image: '/images/training/strength-concept.jpg',
    },
    {
      id: 2,
      label: 'Free weights',
      alt: 'Free weights dumbbell and barbell training area',
      image: '/images/training/free-weights-concept.jpg',
    },
    {
      id: 3,
      label: 'Conditioning zone',
      alt: 'Conditioning turf track, sleds, and cardio machines',
      image: '/images/training/conditioning-concept.jpg',
    },
    {
      id: 4,
      label: 'Functional zone',
      alt: 'Functional fitness rig, kettlebells, and plyo boxes',
      image: '/images/training/functional-concept.jpg',
    },
  ],
};

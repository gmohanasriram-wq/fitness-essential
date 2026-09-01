import type { Gallery } from '@/types';

export const gallery: Gallery = {
  eyebrow: 'Gallery',
  headline: 'The space, in detail.',
  body: 'Photography of the facility is being finalized. The visual system below shows the intended editorial composition.',
  note: 'Real facility imagery to be provided.',
  images: [
    {
      id: 1,
      caption: 'Training floor — wide view',
      aspect: 'wide',
      alt: 'Wide view of the training floor concept',
      image: '/images/gallery/01-training-floor-wide.jpg',
    },
    {
      id: 2,
      caption: 'Equipment — detail',
      aspect: 'tall',
      alt: 'Detail of barbell knurling and weight plates concept',
      image: '/images/gallery/02-equipment-detail.jpg',
    },
    {
      id: 3,
      caption: 'Training floor — alternate angle',
      aspect: 'wide',
      alt: 'Alternate view of the strength training area concept',
      image: '/images/gallery/03-training-floor-angle.jpg',
    },
    {
      id: 4,
      caption: 'Floor — overhead',
      aspect: 'square',
      alt: 'Overhead architectural view of the training floor concept',
      image: '/images/gallery/04-floor-overhead.jpg',
    },
    {
      id: 5,
      caption: 'Entry — main facade',
      aspect: 'wide',
      alt: 'Architectural entrance corridor and lounge concept',
      image: '/images/gallery/05-entry-facade.jpg',
    },
    {
      id: 6,
      caption: 'Interior — light study',
      aspect: 'tall',
      alt: 'Light and shadow study of the gym interior concept',
      image: '/images/gallery/06-interior-light.jpg',
    },
    {
      id: 7,
      caption: 'Floor — quiet moment',
      aspect: 'wide',
      alt: 'Quiet morning atmosphere on the training floor concept',
      image: '/images/gallery/07-quiet-moment.jpg',
    },
    {
      id: 8,
      caption: 'Equipment — portrait',
      aspect: 'square',
      alt: 'Studio portrait of premium strength equipment concept',
      image: '/images/gallery/08-equipment-portrait.jpg',
    },
  ],
};

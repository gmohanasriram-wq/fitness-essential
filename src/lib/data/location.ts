import type { Location } from '@/types';

// Verified location only: Kodungaiyur, Chennai, Tamil Nadu, India.
// No invented street address, hours, phone, or email.
export const location: Location = {
  eyebrow: 'Location',
  headline: 'Kodungaiyur, Chennai.',
  body: 'Located in Kodungaiyur, Chennai, Tamil Nadu. Use the directions link for turn-by-turn navigation.',
  cityLine: 'Kodungaiyur · Chennai · Tamil Nadu',
  // Generic Google Maps search — does not claim a specific street address.
  directionsHref: 'https://www.google.com/maps/search/?api=1&query=Fitness+Essentials+Kodungaiyur+Chennai+Tamil+Nadu',
};

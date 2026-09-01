export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg';
  children: React.ReactNode;
}

export interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg';
  external?: boolean;
  children: React.ReactNode;
}

export interface HeroData {
  headline: string[];
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image?: {
    src: string;
    alt: string;
  };
}

export interface BrandStatement {
  eyebrow: string;
  headline: string[];
  body: string;
}

export interface ExperiencePillar {
  index: string;
  title: string;
  description: string;
}

export interface Experience {
  eyebrow: string;
  headline: string[];
  pillars: ExperiencePillar[];
  closing: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface EquipmentItem {
  id: number;
  label: string;
  alt: string;
  image?: string;
}

export interface Equipment {
  eyebrow: string;
  headline: string;
  body: string;
  note: string;
  items: EquipmentItem[];
}

export interface GalleryItem {
  id: number;
  caption: string;
  aspect: 'wide' | 'tall' | 'square';
  alt: string;
  image?: string;
}

export interface Gallery {
  eyebrow: string;
  headline: string;
  body: string;
  note: string;
  images: GalleryItem[];
}

export interface Location {
  eyebrow: string;
  headline: string;
  body: string;
  cityLine: string;
  directionsHref: string;
}

export interface FinalCta {
  eyebrow: string;
  headline: string[];
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Footer {
  brand: string;
  tagline: string;
  location: string;
  copyright: string;
  quickLinks: FooterLink[];
}

export type Page = 'home' | 'gardens' | 'necessaries' | 'about';

export interface NavItem {
  id: Page;
  label: string;
}

export interface Product {
  id: number;
  name: string;
  category: 'Plants' | 'Tools' | 'Decor' | 'Organic';
  price: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string; // Short description for the card
  imageUrl: string;
  longDescription: string; // Detailed description for the detail page
  features: string[];
  process: { step: string; description: string }[];
  gallery: string[];
}

export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  };
}

export type IconName = 'leaf' | 'camera' | 'upload' | 'loader' | 'link' | 'search' | 'send' | 'facebook' | 'twitter' | 'instagram' | 'sprout' | 'recycle' | 'star' | 'event' | 'whatsapp' | 'close' | 'arrow-left' | 'arrow-right' | 'arrow-down';

export interface ServiceHighlight {
    icon: IconName;
    title: string;
    description: string;
}

export interface WhyChooseUsPoint {
    icon: IconName;
    title: string;
    description: string;
}
export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  description: string;
}

export interface Lifehack {
  id: string;
  title: string;
  description: string;
  category: LifehackCategory;
  countryId: string;
  tips: string[];
  createdAt: string;
  updatedAt: string;
}

export enum LifehackCategory {
  ACCOMMODATION = 'accommodation',
  FOOD = 'food',
  TRANSPORT = 'transport',
  SAFETY = 'safety',
  CULTURE = 'culture',
  MONEY = 'money'
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  lifehackId: string;
  createdAt: string;
  updatedAt: string;
} 
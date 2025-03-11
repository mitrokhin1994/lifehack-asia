export enum LifehackCategory {
  ACCOMMODATION = 'accommodation',
  FOOD = 'food',
  TRANSPORT = 'transport',
  SAFETY = 'safety',
  CULTURE = 'culture',
  MONEY = 'money'
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
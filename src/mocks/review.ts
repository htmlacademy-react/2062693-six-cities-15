import {Review} from '../types/review.ts';

const AVATAR_URL = process.env.AVATAR_URL;

export const reviews: Review[] = [
  {
    id: 1,
    offerId: 1,
    title: 'Beautiful',
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Ann Bryson',
    rating: 4,
    text: 'The apartment, on the other hand, was a perfect home away from home. It had a fully equipped kitchen, allowing me to cook my own meals and save some money on dining out. The living area was cozy and inviting, with a comfortable couch and a dining table where I could work or enjoy my meals. The bedroom was separate from the living area, giving me privacy and a quiet space to rest after a long day of exploring.',
    date: new Date('2023-12-01')
  },
  {
    id: 2,
    offerId: 1,
    title: 'Beautiful',
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Daniel Myers',
    rating: 5,
    text: 'One of the things I appreciated the most about my stay was the attention to detail. The room and apartment were both stocked with all the necessary toiletries and essentials, including towels, linens, and even some snacks and drinks. The owners clearly put a lot of thought into making their guests\' stay as comfortable and convenient as possible.',
    date: new Date('2023-10-06')
  },
  {
    id: 3,
    offerId: 2,
    title: 'Beautiful',
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Donna Tiner',
    rating: 3,
    text: 'I recently had the pleasure of staying in a room and apartment during my vacation and I must say, it was a wonderful experience. The room and apartment were both impeccably clean and well-maintained, making me feel comfortable and at home during my stay.',
    date: new Date('2023-06-06')
  },
  {
    id: 4,
    offerId: 2,
    title: 'Good',
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Brandon Wilkins',
    rating: 3,
    text: 'The location of the rooms and apartments was also ideal. They were situated in a quiet and safe neighborhood, yet still close to all the main attractions and public transportation. I was able to easily explore the city and then come back to a peaceful and comfortable space to relax and recharge.',
    date: new Date('2023-12-06')
  },
  {
    id: 5,
    offerId: 3,
    title: 'Not bad',
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'George Calahan',
    rating: 4,
    text: 'Overall, I highly recommend staying in rooms and apartments for anyone looking for a comfortable and convenient accommodation. The attention to detail, cleanliness, and prime location make it a great choice for both short and long-term stays. I will definitely be returning to this hidden gem for my future travels.',
    date: new Date('2024-01-11')
  },
  {
    id: 6,
    offerId: 3,
    title: 'Perfect',
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'George Calahan',
    rating: 5,
    text: 'I highly recommend trying out different types of accommodation during your travels. It not only adds variety to your trip but also allows you to immerse yourself in the local culture and experience the destination in a different way. I look forward to my future travels and the different rooms and apartments I will get to stay in.',
    date: new Date('2023-09-14')
  },
];

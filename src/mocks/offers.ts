import {OfferType} from '../types/offer.ts';

export const offers: OfferType[] = [
  {
    id: 1,
    title: 'Beautiful luxurious apartment at great location',
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    rating: 4.9,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    isPremium: false,
    isFavorite: false,
    countBedrooms: 1,
    countAdults: 2,
    houseItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine']
  },
  {
    id: 2,
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    price: 80,
    type: 'Room',
    rating: 3.9,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    },
    isPremium: false,
    isFavorite: false,
    countBedrooms: 1,
    countAdults: 2,
    houseItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine']
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    type: 'Apartment',
    rating: 4.8,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    },
    isPremium: true,
    isFavorite: false,
    countBedrooms: 3,
    countAdults: 3,
    houseItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine']
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    type: 'Apartment',
    rating: 5,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    isPremium: true,
    isFavorite: false,
    countBedrooms: 4,
    countAdults: 6,
    houseItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine']
  },
  {
    id: 5,
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    price: 80,
    type: 'Room',
    rating: 4.2,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    isPremium: false,
    isFavorite: false,
    countBedrooms: 1,
    countAdults: 2,
    houseItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine']
  }
];

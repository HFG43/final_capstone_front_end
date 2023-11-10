import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

export const experiencesData = [
  {
    experienceName: 'Experience 1',
    experienceDetails: 'Super test Experience',
    description: 'Best Experience',
    experienceFee: 15.50,
    addTestingFee: 20,
    reserveFullTable: 50,
    guests: 2,
    experienceImage: 'https://i.postimg.cc/bNX1CZRC/casa-coeli.jpg',
  },
  {
    experienceName: 'Experience 2',
    experienceDetails: 'Super 2 test Experience 2',
    description: 'Second Best Experience',
    experienceFee: 35.50,
    addTestingFee: 10,
    reserveFullTable: 40,
    guests: 20,
    experienceImage: 'https://i.postimg.cc/bNX1CZRC/casa-coeli.jpg',
  },
];

export const reservationsData = [
  {
    userID: 1,
    experienceID: 1,
    reserveDate: 2023-12-12,
    reserveCity: 'Cancun',
  },
  {
    userID: 1,
    experienceID: 2,
    reserveDate: 2023-12-25,
    reserveCity: 'Caracas',
  },
];

export const usersData = [
  {
    userID: 1,
    name: 'Test name1',
    username: 'Test username 1',
  },
];

export const experiencesFetchMockData = [
  {
    experienceName: 'Experience 1',
    experienceDetails: 'Super test Experience',
    description: 'Best Experience',
    experienceFee: 15.50,
    addTestingFee: 20,
    reserveFullTable: 50,
    guests: 2,
    experienceImage: 'https://i.postimg.cc/bNX1CZRC/casa-coeli.jpg',
  },
  {
    experienceName: 'Experience 2',
    experienceDetails: 'Super 2 test Experience 2',
    description: 'Second Best Experience',
    experienceFee: 35.50,
    addTestingFee: 10,
    reserveFullTable: 40,
    guests: 20,
    experienceImage: 'https://i.postimg.cc/bNX1CZRC/casa-coeli.jpg',
  },  
];

export const reservationsFetchMockData = [
  {
    reserveDate: 2023-12-12,
    reserveCity: 'Cancun',
  },
  {
    reserveDate: 2023-12-25,
    reserveCity: 'Caracas',
  },  
];

export const usersFetchMockData = [
  {
    name: 'Test name1',
    username: 'Test username 1',
  },
];

const mockStore = configureStore([]);
const store = mockStore({
  experiences: {
    error: null,
    status: 'idle',
    experiences: experiencesData,
  },
  reservations: {
    loading: false,
    error: null,
    currentReservations: reservationsData,
  },
  users: {
    user: usersData,
    loading: null,
    status: 'idle',
    error: null,
  }
});

export const usersMockData = {
  user: usersData,
  loading: null,
  status: 'idle',
  error: null,
};

export const experienceMockData = {
  experiences: experiencesData,
  loading: false,
  error: null,
};

export const reservationsMockData = {
  reservations: reservationsData,
  loading: false,
  error: null,
};

export default store;

export const initialStore = mockStore({
  experiences: { 
    experiences: [], 
    status: 'idle', 
    error: null 
  },
  reservations: {
    currentReservations: [], 
    loading: false, 
    error: null 
  },
  users: {
    user: { id: null, name: null, username: null },
    loading: null,
    status: 'idle',
    error: null
  }
});
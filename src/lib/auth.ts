import { User } from '@/types/user';

// Mock admin credentials - in production this would be handled by a secure backend
const ADMIN_CREDENTIALS = {
  email: 'admin@travelgo.com',
  password: 'admin123',
};

export async function signInWithEmailPassword(email: string, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check for admin credentials
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        resolve({
          id: 'admin-1',
          email: ADMIN_CREDENTIALS.email,
          firstName: 'Admin',
          lastName: 'User',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          role: 'admin',
        });
      } else {
        // Regular user authentication
        resolve({
          id: '1',
          email,
          firstName: 'John',
          lastName: 'Doe',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          role: 'user',
        });
      }
    }, 1000);
  });
}

export async function signInWithGoogle(): Promise<User> {
  // Simulate Google OAuth
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '2',
        email: 'john.doe@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        role: 'user',
      });
    }, 1000);
  });
}

export async function signInWithApple(): Promise<User> {
  // Simulate Apple OAuth
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '3',
        email: 'john.doe@icloud.com',
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        role: 'user',
      });
    }, 1000);
  });
}

export async function signInWithFacebook(): Promise<User> {
  // Simulate Facebook OAuth
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '4',
        email: 'john.doe@facebook.com',
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        role: 'user',
      });
    }, 1000);
  });
}
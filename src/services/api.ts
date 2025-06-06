import { User } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// Function to generate avatar URL using DiceBear API
const getAvatarUrl = (seed: string) => {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}`;
};

export async function fetchUsers(page: number = 1, perPage: number = 5): Promise<{
  data: User[];
  total_pages: number;
}> {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const users: Omit<User, 'avatar'>[] = await response.json();
    
    // Add avatar URLs to users
    const enrichedUsers: User[] = users.map(user => ({
      ...user,
      avatar: getAvatarUrl(user.name)
    }));

    const total_pages = Math.ceil(enrichedUsers.length / perPage);
    const start = (page - 1) * perPage;
    const data = enrichedUsers.slice(start, start + perPage);

    return { data, total_pages };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
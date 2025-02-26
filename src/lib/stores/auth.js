import { writable } from 'svelte/store';

// Store for authentication status
export const isAuthenticated = writable(false);

// Store for user details (optional)
export const user = writable(null);

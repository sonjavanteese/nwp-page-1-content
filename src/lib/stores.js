import { writable } from 'svelte/store';

export const isSb = writable(false);
export const userDb = writable(null);
export const userPf = writable(null);


import { create } from 'zustand';

const useStorage = create((set) => ({
  storage: 0,
  addStorage: (value) => set({storage: set.storage + value}),
  subStorage: (value) => set({storage: set.storage - value}),
  multStorage: (value) => set({storage: set.storage * value}),
  divStorage: (value) => set({storage: set.storage / value}),
  expStorage: (value) => set({storage: set.storage ** value}),
}));

export default useStorage;
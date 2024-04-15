import { create } from 'zustand';

const useInput = create((set) => ({
  input: '',
  typing: '',
  suggestion: '',
  setInput: (value) => set((state) => ({ input: state.input + value})),
  setTyping: (value) => set({typing: value}),
  setSuggestion: (value) => set({suggestion: value}),
}));

export default useInput;
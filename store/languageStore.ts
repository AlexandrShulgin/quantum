import { create } from 'zustand'

interface languageState {
  language: "en" | "ru",
  setEn: () => void
  setRu: () => void
}

export const useLanguageStore = create<languageState>((set) => ({
  language: "en",
  setEn: () => set((state) => ({ language: 'en' })),
  setRu: () => set((state) => ({ language: 'ru' })),
}))

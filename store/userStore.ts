import { create } from 'zustand'

interface userState {
  type: "new" | "old",
  setNew: () => void
  setOld: () => void
}

export const useUserStore = create<userState>((set) => ({
  type: "new",
  setOld: () => set((state) => ({ type: 'old' })),
  setNew: () => set((state) => ({ type: 'new' })),
}))

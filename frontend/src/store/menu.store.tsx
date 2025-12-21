import { create } from "zustand"
import { persist } from "zustand/middleware"

interface StoreState {
  menuClicked: string
  setMenuClicked: (value: string) => void
}

const useMenuStore = create<StoreState>()(
  persist(
    (set) => ({
      menuClicked: "home",

      setMenuClicked: (value) => set({ menuClicked: value }),
    }),
    {
      name: "menu",
    }
  )
)

export default useMenuStore


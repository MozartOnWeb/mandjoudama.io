import { create } from "zustand";

type Props = {
  isOpened: boolean;
  openHamburger: () => void;
  closeHamburger: () => void;
};

export const useHamburger = create<Props>((set) => ({
  isOpened: false,
  openHamburger: () => set({ isOpened: true }),
  closeHamburger: () => set({ isOpened: false }),
}));

import { create } from "zustand";

interface IuseCount {
  count: number;
  increment: () => void;
}

export const useCount = create<IuseCount>((set) => ({
  count: 0,
  increment: () => set((prevState) => ({ count: prevState.count + 1 })),
}));

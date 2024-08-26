import type { StateCreator } from "zustand";

import type { BoundStore } from "..";

interface Actions {
  toggleDarkMode: () => void;
}

interface State {
  darkMode: boolean;
}

export interface CommonSlice {
  commonSlice: Actions & State;
}

const DEFAULT_PROPS: State = {
  darkMode: false,
};

export const createCommonSlice: StateCreator<
  CommonSlice & BoundStore,
  [],
  [],
  CommonSlice
> = (set) => ({
  commonSlice: {
    ...DEFAULT_PROPS,
    toggleDarkMode: () =>
      set((state) => {
        state.commonSlice.darkMode = !state.commonSlice.darkMode;

        return state;
      }),
  },
});

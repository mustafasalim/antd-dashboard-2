import type { StateCreator } from 'zustand';

import type { BoundStore } from '..';

interface ColorActions {
  setColor: (newColor: string) => void;
}

interface ColorState {
  color: string;
}

export interface ColorSlice {
  colorSlice: ColorActions & ColorState;
}

const DEFAULT_COLOR_PROPS: ColorState = {
  color: '#ffffff', // Varsayılan renk
};

export const createColorSlice: StateCreator<
  ColorSlice & BoundStore,
  [],
  [],
  ColorSlice
> = (set) => ({
  colorSlice: {
    ...DEFAULT_COLOR_PROPS,
    setColor: (newColor: string) =>
      set((state) => {
        state.colorSlice.color = newColor;
        return state;
      }),
  },
});

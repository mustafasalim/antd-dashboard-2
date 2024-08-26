import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { name } from '../../package.json';
import { type CommonSlice, createCommonSlice } from './common-slice';
import type { ColorSlice } from './system-color-slice';
import { createColorSlice } from './system-color-slice';

export type BoundStore = CommonSlice & ColorSlice;

function partialize(state: BoundStore) {
  return {
    darkMode: state.commonSlice.darkMode,
    color: state.colorSlice.color,
  };
}

export const useStore = create<
  BoundStore,
  [
    ['zustand/immer', never],
    ['zustand/devtools', never],
    ['zustand/persist', unknown],
  ]
>(
  immer(
    devtools(
      persist(
        (...a) => ({
          ...createCommonSlice(...a),
          ...createColorSlice(...a),
        }),
        {
          name: 'eu-trms',
          partialize: (state: BoundStore) => ({
            darkMode: state.commonSlice.darkMode,
            color: state.colorSlice.color,
          }),
          merge: (persisted, currentState) => {
            const persistedState = persisted as ReturnType<typeof partialize>;
            currentState.commonSlice.darkMode = persistedState.darkMode;
            currentState.colorSlice.color = persistedState.color;
            return currentState;
          },
        },
      ),
      {
        name: `${name} Store`,
        enabled: true,
      },
    ),
  ),
);

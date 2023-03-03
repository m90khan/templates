import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
export const useGlobalState = create(
  devtools(
    (set, get) => ({
      _hasHydrated: false,

      currentFlow: null,
      setCurrentFlow: (currentFlow) => {
        set({ currentFlow: currentFlow });
      },

      scene: 'Global State'
    }),
    {
      name: 'store',
      onRehydrateStorage: () => () => {
        useGlobalState.setState({ _hasHydrated: true });
      }
    }
  )
);

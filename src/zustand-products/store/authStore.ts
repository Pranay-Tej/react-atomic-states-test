import { create } from "zustand";

type AuthStoreState = {
  userId: string | null;
  actions: {
    login: (userId: string) => void;
    logout: () => void;
  };
};
export const useAuthStore = create<AuthStoreState>((set) => ({
  userId: null,
  actions: {
    login: (userId: string) => set({ userId }),
    logout: () => set({ userId: null }),
  },
}));

export const selectUserId = (state: AuthStoreState) => state.userId;
export const selectIsAuthenticated = (state: AuthStoreState) => state.userId !== null;


export const useAuthStoreActions = () => useAuthStore((state) => state.actions);
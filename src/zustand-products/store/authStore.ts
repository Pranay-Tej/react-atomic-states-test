import { create } from "zustand";
import router from "../../router";

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
    login: (userId: string) => {
      set({ userId });
      router.navigate("/zustand-products/products"); // or use history pkg
    },
    logout: () => {
      set({ userId: null });
      router.navigate("/zustand-products/login"); // or use history pkg
    },
  },
}));

export const selectUserId = (state: AuthStoreState) => state.userId;
export const selectIsAuthenticated = (state: AuthStoreState) =>
  state.userId !== null;

export const useAuthStoreActions = () => useAuthStore((state) => state.actions);

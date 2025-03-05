import { create } from "zustand";
import { axiosConfig } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isSigningIn: false,
  isUpdatingProfile: false,
  isCheckingAUth: true,

  checkAuth: async () => {
    try {
      const res = await axiosConfig.get("/auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAUth: false });
    }
  },
}));

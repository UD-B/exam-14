import { create } from "zustand";

export const useMovieStore = create((set) => ({
  movies: '',
  loading: false,
  error: null,
  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("http://localhost:3017");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ movies: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  }
}));
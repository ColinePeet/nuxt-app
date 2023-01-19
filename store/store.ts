//store.ts
import { defineStore, acceptHMRUpdate } from "pinia";

export const useStore = defineStore("storeId", {
  state: () => {
    return {
      counter: 10,

      products: null,
    };
  },
  actions: {
    hit() {
      this.counter++;
    },

    async fetchProducts() {
      this.products = await useFetch("https://fakestoreapi.com/products");
    },
  },

  getters: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}

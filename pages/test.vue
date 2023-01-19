<script setup lang="ts">
import OperatorSimulation from "~~/components/atoms/OperatorSimulation.vue";
import { useStore } from '~~/store/store'

const store = useStore()
await store.fetchProducts()
</script>

<template>
  <div>
    <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
      Test page
    </h1>

    <OperatorSimulation />

    <NuxtLink to="/simulation-auto/step1">
      <button
        class="m-2 bg-slate-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded"
      >
        step 1
      </button>
    </NuxtLink>
    <NuxtLink to="/simulation-auto/step2">
      <button
        class="m-2 bg-slate-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded"
      >
        step 2
      </button>
    </NuxtLink>


    <ul v-if="store.products">
      <li v-for="p in store.products">{{ p }}</li>
    </ul>

  </div>
</template>



<script setup lang="ts">
import OperatorSimulation from '~~/components/atoms/OperatorSimulation.vue';
</script>

<template>
  <div>
    <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
      Homepage
    </h1>

    <OperatorSimulation />

    <NuxtLink to="/test">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test Page
      </button>
    </NuxtLink>
  </div>
</template>



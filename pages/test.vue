<template>
  <div>
    <h2>test</h2>
    {{ store }}
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/test'

// import { useStore } from '@/store'
// useCounterStore()
const store = useCounterStore()
</script>

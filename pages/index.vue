<template>
  <div>
    <h2>Home</h2>
    <p>
      lorem ipsum
      <!-- <div v-for="p in products">{{ p.title }}</div> -->
    </p>
    <NuxtLink to="/test">
      TEST VIEW LINK
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {Product} from '../types/Product'
const response = await useFetch<Array<Product>>("https://fakestoreapi.com/products")
const products = response.data

// products.value?.forEach(product => product.title)

// const x = document.querySelector<HTMLButtonElement>('button')

// x?.classList.add('f')

// const users = ref<Users>([])

// users.value.forEach(user => {
//   user.prod
// })

// const article = {name: 'Poire', price: 30}

// createArticle(article)

// async function createArticle(article: {name: string, price: number}): Promise<boolean>{
//   // fetch(../, article)
//   // Call API
//   return true
// }
 </script>

<!-- <script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script> -->

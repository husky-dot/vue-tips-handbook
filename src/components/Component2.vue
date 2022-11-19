<template>
  <h1>组件2</h1>
  <button @click="addRandomToCart">添加</button>
  <p>Cart:{{ cart }}</p>
</template>

<script setup lang="ts">
import useCart from './useCart'

const { cart, addToCart } = useCart()

const addRandomToCart = () => {
  const randomKey = Math.random().toString(16).substr(2, 8)
  const randomValue = Math.floor(Math.random() * 10)
  addToCart('comp1-' + randomKey, randomValue)
}
</script>

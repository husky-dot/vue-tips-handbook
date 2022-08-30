<template>
  <div></div>
</template>

<script setup>
const productList = [
  {
    id: '001',
    name: '商品1',
    desc: '这是一个商品',
  },
  {
    id: '002',
    name: '商品2',
    desc: '这是一个商品',
  },
  {
    id: '003',
    name: '商品3',
    desc: '这是一个商品',
  },
  {
    id: '004',
    name: '商品4',
    desc: '这是一个商品',
  },
  {
    id: '005',
    name: '商品5',
    desc: '这是一个商品',
  },
]

const obj = productList.reduce((prev, next) => {
  const { id } = next
  prev[id] = next
  return prev
}, {})

console.log(JSON.stringify(obj))
</script>

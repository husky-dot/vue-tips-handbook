<template>
  <div>
    <v-lazy-image
      src="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
      src-placeholder="https://cdn-images-1.medium.com/max/30/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
    />
  </div>
</template>

<script setup>
import VLazyImage from "v-lazy-image";
</script>

<style scoped>
.v-lazy-image {
  width: 500px;
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
  transition: opacity 0.5s, transform 0.5s;
}
.v-lazy-image-loaded {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>

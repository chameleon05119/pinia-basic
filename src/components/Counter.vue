<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <p>現在のポイント：{{ count }}</p>
  <p>現在のポイント更に倍：{{ count }}</p>
  <button type="button">加算</button>
</template>

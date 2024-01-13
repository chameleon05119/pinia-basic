<script setup lang="ts">
import { ref, computed } from "vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const count = computed((): number => {
  return counterStore.counter;
});
const doubleCount = computed((): number => {
  return counterStore.doubleCount;
});
const onIncrementClick = (): void => {
  counterStore.incrementCount();
};
const countResetClick = (): void => {
  counterStore.$reset();
};
</script>

<template>
  <p>現在のポイント：{{ count }}</p>
  <p>現在のポイント更に倍：{{ doubleCount }}</p>
  <button type="button" @click="onIncrementClick">加算</button>
  <button type="button" @click="countResetClick">カウントリセット</button>
</template>

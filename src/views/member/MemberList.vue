<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useMemberStore } from "@/stores/member";
import type { Member } from "@/interfaces";

const memberStore = useMemberStore();
const memberList = computed((): Map<number, Member> => {
  return memberStore.memberList;
});
</script>
<template>
  <h1>会員情報</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'AppTop' }"> TOP</RouterLink>
      </li>
      <li>会員リスト</li>
    </ul>
  </nav>
  <section>
    <h2>会員リスト</h2>
    <p>
      新規会員登録は<RouterLink :to="{ name: 'MemberAdd' }"> こちら</RouterLink
      >から
    </p>
    <ul>
      <li v-for="[id, member] in memberList" :key="id">
        <RouterLink :to="{ name: 'MemberDetail', params: { id: id } }">
          IDが{{ id }}の{{ member.name }}さん
        </RouterLink>
      </li>
    </ul>
  </section>
  <RouterView />
</template>

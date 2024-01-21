<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useMemberStore } from "@/stores/member";
import type { Member } from "@/interfaces";

type SplitText = {
  forwardText: string;
  backwardText: string;
};

const memberStore = useMemberStore();
memberStore.prepareMemberList();

const userInputText = ref("");
const suggestedText = ref("");

const memberList = computed((): Map<number, Member> => {
  return memberStore.memberList;
});
const isEmptyList = computed((): boolean => {
  return memberStore.isMemberListEmpty;
});
const displaySuggestedText = computed((): SplitText => {
  return separateText(suggestedText.value);
});

const fetchSuggestedText = (userInputText: string): string => {
  const suggestedText = userInputText + "えええ";
  return suggestedText;
};
const separateText = (text: string): SplitText => {
  if (!text.startsWith(userInputText.value))
    return { forwardText: "", backwardText: text };
  const splitText = {
    forwardText: userInputText.value,
    backwardText: text.substring(userInputText.value.length),
  };
  return splitText;
};

watch(userInputText, () => {
  suggestedText.value = fetchSuggestedText(userInputText.value);
});
</script>
<template>
  <h2>サジェストテスト</h2>
  <input type="text" v-model="userInputText" />
  <span v-text="displaySuggestedText.forwardText" class="forward-text" />
  <span v-text="displaySuggestedText.backwardText" class="backward-text" />
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
      <li v-if="isEmptyList">会員情報は存在しません。</li>
      <li v-for="[id, member] in memberList" :key="id">
        <RouterLink :to="{ name: 'MemberDetail', params: { id: id } }">
          IDが{{ id }}の{{ member.name }}さん
        </RouterLink>
      </li>
    </ul>
  </section>
  <RouterView />
</template>
<style scoped>
.forward-text {
  color: white;
  font-weight: 400;
}

.backward-text {
  color: white;
  font-weight: bold;
}
</style>

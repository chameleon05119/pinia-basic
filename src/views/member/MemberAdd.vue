<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import type { Member } from "@/interfaces";
import { useMemberStore } from "@/stores/member";

const router = useRouter();
const memberStore = useMemberStore();
const member: Member = reactive({
  id: 0,
  name: "",
  email: "",
  points: 0,
  note: "",
});

const onAdd = (): void => {
  memberStore.insertMember(member);
  router.push({
    name: "MemberDetail",
    params: {
      id: member.id,
    },
  });
};
</script>
<template>
  <h1>会員情報管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'AppTop' }"> TOP</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'MemberList' }"> 会員リスト</RouterLink>
      </li>
      <li>会員情報追加</li>
    </ul>
  </nav>
  <h2>会員情報追加</h2>
  <p>情報を入力し、登録ボタンを押してください。</p>
  <form @submit.prevent="onAdd">
    <dl>
      <dt>
        <label for="addId">ID&nbsp;</label>
      </dt>
      <dd>
        <input type="number" id="addId" v-model.number="member.id" required />
      </dd>
      <dt>
        <label for="addName">名前&nbsp;</label>
      </dt>
      <dd>
        <input type="text" id="addName" v-model="member.name" required />
      </dd>
      <dt>
        <label for="addEmail">メールアドレス&nbsp;</label>
      </dt>
      <dd>
        <input type="text" id="addEmail" v-model="member.email" required />
      </dd>
      <dt>
        <label for="addPoints">保有ポイント&nbsp;</label>
      </dt>
      <dd>
        <input
          type="number"
          id="addPoints"
          v-model.number="member.points"
          required
        />
      </dd>
      <dt>
        <label for="addNote">備考&nbsp;</label>
      </dt>
      <dd>
        <textarea id="addNote" v-model="member.note" />
      </dd>
    </dl>
    <button type="submit">登録</button>
  </form>
</template>

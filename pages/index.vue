<template>
  <div>
    <h1>Top</h1>
    <Menu />
    <p>count = {{ count }}</p>
    <button @click="addCount">カウントアップ</button>
    <dl v-for="(item, index) in $store.state.corona.list" v-bind:key="index">
      <dt>{{ item.name_ja }}</dt>
      <dd>
        <ul>
          <li>cases: {{ item.cases }}</li>
          <li>deaths: {{ item.deaths }}</li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
import Menu from "../components/menu.vue";
import axios from "axios";

export default {
  components: {
    Menu,
  },
  computed: {
    count() {
      return this.$store.state.counter.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit("counter/add");
    },
  },
  async asyncData({ store }) {
    if (!store.state.corona.list.length) {
      await store.dispatch("corona/fetchCoronaData");
    }
  },
};
</script>

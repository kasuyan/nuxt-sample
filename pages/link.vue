<template>
  <div>
    <h1>Link</h1>
    <p>count = {{ count }}</p>
    <Menu />
  </div>
</template>

<script>
import Menu from "../components/menu.vue";
export default {
  layout: "link",
  components: {
    Menu,
  },
  computed: {
    count() {
      return this.$store.state.counter.count;
    },
  },
};
</script>

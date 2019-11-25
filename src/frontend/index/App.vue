<template>
  <div id = "app">
    {{ result }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      result: '',
    }
  },
  methods: {
    sayHi(someone: string) {
      this.result = 'hello ' + someone;
    }
  },
  created() {
    this.sayHi("10");
  },
})
</script>
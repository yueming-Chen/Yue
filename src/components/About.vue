<template>
  <div class="container">
    <section>
      <div class="left-block"></div>
      <div class="divider"></div>
      <div class="right-block"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "aboutComponent"
};
</script>

<style lang="scss" scoped>
.container {
  .divider {
    height: 50px;
    width: 2px;
    background: black;
  }
}
</style>
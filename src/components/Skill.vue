<template>
  <div class="container">
      <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <span class="description">12312312313123123123</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "skillComponent"
};
</script>

<style lang="scss" scoped>
.container {
  column-count: 2;
  .unit {
    width: 40%;
    .show-image {
      width: 100%;
    }
  }
}
</style>

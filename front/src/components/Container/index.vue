<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
  .container{
    display: block;
    padding: 1.25rem;
    background-color:rgba(255, 255, 255, 0.9215686274509803);
    border: 1px solid #d3dce6;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(0,0,0,.04);
  }
</style>
<template>
  <div class="main">
    <div class="item">我</div>
    <div class="item">
      <div>做</div>
      <div>過</div>
      <div>一</div>
      <div>些</div>
      <div>事</div>
      <div>情</div>
    </div>
    <div class="item">
      <div>技</div>
      <div>術</div>
      <div>的</div>
      <div>玩</div>
      <div>意</div>
    </div>
    <div class="item">
      <div>將</div>
      <div>來</div>
    </div>
    <div class="item">
      <div>可</div>
      <div>以</div>
      <div>找</div>
      <div>我</div>
      <div>喝</div>
      <div>一</div>
      <div>杯</div>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  background:url('https://yueming-chen.github.io/mine/S__851976.jpg');
  height:100vh;
  width:100vw;
  display:flex;
}

.main .item{
  flex-direction:column;
  cursor:pointer;
  font-family:"microsoft jhenghei";
  flex:1;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(0,0,0,0.9);
  color:white;
  font-size:5em;
  transition:all ease-out .5s;
  flex-wrap:wrap;
}

.main .item:hover{
  background:rgba(0,0,0,0.2);
  font-size:5.4em;
}

@media screen and (max-width:380px) {
  .main{
    flex-direction:row;
  }

  .main .item{
    flex-direction:column;
  }
}
</style>

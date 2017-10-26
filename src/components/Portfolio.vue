<template>
  <div class="container">
      <div class="unit">
        <img class="show-image" src="https://yueming-chen.github.io/mine/SHOW3.png" alt="一張大大的圖片～"/>
        <h3 class="title">魚客松 亞洲鯉魚追蹤地圖</h3>
        <span class="description">現在的外來種侵入，尤其是五大湖的亞洲種特別嚴重，我在參加魚客松時特別挑了這個議題，著手並且挑了與google Map做結合，讓環境人員可以更精準的去對亞洲鯉魚做節育，主要是使用NG1與R。</span>  
      </div>
      <div class="unit">
        <img class="show-image" src="https://yueming-chen.github.io/mine/SHOW2.png" alt="一張大大的圖片～"/>
        <h3 class="title">RECIPE Managment system圖</h3>
        <span class="description">此系統與手機的食譜APP作連接，提供後台一個視覺化頁面，此採用angular1與MongoDB。</span>  
      </div>
      <div class="unit">
        <img class="show-image" src="https://yueming-chen.github.io/mine/SHOW5.png" alt="一張大大的圖片～"/>
        <h3 class="title">商品報修系統-app</h3>
        <span class="description">電子化時代來臨，當維修成為一條龍的服務，跑維修的流程就不那麼複雜了，這次與電腦公會舉辦的新創大賽，主要負責系統的架構與實作，很可惜沒有獲得評審的親睞，主要也是使用到了NG1。</span>
      </div>
      <div class="unit">
        <img class="show-image" src="https://yueming-chen.github.io/mine/SHOW10.png" alt="一張大大的圖片～"/>
        <h3 class="title">德信投顧 Line註冊</h3>
        <span class="description">line@的崛起，各家卷商都要去搶功社群的這一塊大餅，在安永金融擔任前端工程師的時期，負責客戶對我們系統的連接的橋樑，總共有兩個版本，主要是在git-flow上用jquery做的support與NG2做的新版本。</span>
      </div>
      <div class="unit">
        <img class="show-image" src="https://yueming-chen.github.io/mine/SHOW7.png" alt="一張大大的圖片～"/>
        <h3 class="title">北科大電子譜系統</h3>
        <span class="description">在音樂的圈子中，其實樂譜電子化已經開始盛行，為了讓電子化更方便，在掃描後的管理，採取全面的電子化，不管是用譜借出或自己用，都需要經過紀錄才有辦法，在伺服端可以做到電子寄譜的功用，整個檔期的音樂會可以完全依賴客戶端所提供的服務，使用了MEAN整個架構，客戶端是使用angular2來實作。
        </span>
      </div>
       <div class="unit">
        <img class="show-image" src="https://yueming-chen.github.io/mine/SHOW6.png" alt="一張大大的圖片～"/>
        <h3 class="title">議題追蹤系統</h3>
        <span class="description">github上，都有議題的追蹤系統，可以讓大家再遇到bug等等直接建立issue去做管理，這一次的動機是因為在做學校專案，想練習議題專案的實作，並且提供隊友所使用，我負責前端的部分，是採用NG1與jquery，後端則是採用laravel與mariaDB。</span>
      </div>
      <div class="unit">
        <img class="show-image" src="https://yueming-chen.github.io/mine/SHOW8.png" alt="一張大大的圖片～"/>
        <h3 class="title">樂子旅遊官方網站</h3>
      </div>
      <div>
        <router-link id="skills" to="/skills">
      走，我來談談我學過什麼東西</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "portfolioComponent"
};
</script>

<style lang="scss" scoped>
* {
  color: white;
  font-family: "microsoft jhenghei";
}
.container {
  padding: 4rem 8rem;

  background: #3c3b3f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #605c3c,
    #3c3b3f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #605c3c,
    #3c3b3f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .unit {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    .show-image {
      box-shadow: 0 0 7px 1px #888888;
      width: 100%;
    }
    .title {
      font-size: 1.4em;
      margin: 1rem;
    }
    .description {
      padding: 1rem 0px;
    }
  }
}
a {
  display: flex;
  justify-content: flex-end;
  font-size: 1.6rem;
  color: white;
  text-decoration: none;
  &::visited {
    color: white;
  }
}
</style>

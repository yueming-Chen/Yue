<template>
  <div class="container">
      <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <h3 class="title">魚客松 亞洲鯉魚追蹤地圖</h3>
        <span class="description">現在的外來種侵入，尤其是五大湖的亞洲種特別嚴重，我在參加魚客松時特別挑了這個議題，著手並且挑了與google Map做結合，讓環境人員可以更精準的去對亞洲鯉魚做節育，主要是使用NG1與R。</span>  
      </div>
      <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <h3 class="title">商品報修系統-app</h3>
        <span class="description">電子化時代來臨，當維修成為一條龍的服務，跑維修的流程就不那麼複雜了，這次與電腦公會舉辦的新創大賽，主要負責系統的架構與實作，很可惜沒有獲得評審的親睞，主要也是使用到了NG1。</span>
      </div>
      <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <h3 class="title">德信投顧 Line註冊</h3>
        <span class="description">line@的崛起，各家卷商都要去搶功社群的這一塊大餅，在安永金融擔任前端工程師的時期，負責客戶對我們系統的連接的橋樑，總共有兩個版本，主要是在git-flow上用jquery做的support與NG2做的新版本。</span>
      </div>
      <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <h3 class="title">北科大電子譜系統</h3>
        <span class="description">在音樂的圈子中，其實樂譜電子化已經開始盛行，為了讓電子化更方便，在掃描後的管理，採取全面的電子化，不管是用譜借出或自己用，都需要經過紀錄才有辦法，在伺服端可以做到電子寄譜的功用，整個檔期的音樂會可以完全依賴客戶端所提供的服務，使用了MEAN整個架構，客戶端是使用angular2來實作。
        </span>
      </div>
       <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <h3 class="title">議題追蹤系統</h3>
        <span class="description">github上，都有議題的追蹤系統，可以讓大家再遇到bug等等直接建立issue去做管理，這一次的動機是因為在做學校專案，想練習議題專案的實作，並且提供隊友所使用，我負責前端的部分，是採用NG1與jquery，後端則是採用laravel與mariaDB。</span>
      </div>
      <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <h3 class="title">樂子旅遊官方網站</h3>
      </div>
      <div class="unit">
        <img class="show-image" alt="一張大大的圖片～"/>
        <h3 class="title">invisScreen</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: "portfolioComponent"
};
</script>

<style lang="scss" scoped>
.container {
  .unit {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    .show-image {
      width: 100%;
    }
  }
}
</style>

<template >
  <div class="container">
    <section class="show-container">
      <img class="displayPhoto" src="../assets/about1.jpg" alt="豎笛照片" />
    </section>
    <section class="header">
      <div class="left-block">
        <h1 style="color:#5D576B;">Rach Chen</h1>
  			<h3 style="color:#9BC1BC;">Front-end E.</h3>
      </div>
      <div class="right-block">
        <p>葬身在前後端的浪潮中，無盡地拍打，我們無法左右自己生命的長度，但往前划，絕對是生命中需要去努力的需要，將血淚譜成夢想，我們就如同當時的萊特兄弟，有錢有勢只為了錢財所驅使去製造飛行機器的人不一樣，我們血肉之軀，是為了去滋潤每個要成長的種子，我們不奢求他茁壯，但看著自己的理想慢慢的發芽，成長，我想生命的意義，就是這個了。
			  </p>
      </div>
    </section>
    <section>
      <img class="displayPhoto" src="../assets/about2.png" alt="豎笛照片" />
    </section>
    <section class="descri">
      <div>其實我不只程式</div>
      <div>我更熱愛著音樂與音樂圈的朋友們</div>
      <div>我想著自己敲著鍵盤</div>      
      <div>能對這個式微的古典圈子有什麼影響？</div>
    </section>
    <section class="last">
      <img class="displayPhoto" src="../assets/about3.jpg" alt="豎笛照片" />
    </section>
    <section class="last link">
      <router-link id="portfolio" to="/portfolio">
        <span class="describe">走，去看看我的大學生涯做了什麼什麼有趣的作品吧!
        </span>
      </router-link>
    </section>
  </div>
  
</template>

<script>
// 補上圖片
// 補上style
export default {
  name: "aboutComponent"
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.container {
  .header {
    display: flex;
    flex-direction: row;
    padding: 2rem 8rem;
    background: #ddd;
    .left-block {
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-right: 1px solid #ccc;
      padding-right: 1rem;
      flex: 1;
    }
    .right-block {
      font-family: "Microsoft Jhenghei";
      flex: 1;
      padding-left: 1rem;
    }
  }
  .show-container {
    padding: 2rem 8rem;
    width: 100%;
    text-align: center;
    .displayPhoto {
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      width: 80vw;
    }
  }

  .descri {
    font-family: "Microsoft Jhenghei";
    padding: 2rem 10rem;
    font-size: 1.4rem;
    letter-spacing: 5px;
    color: white;
    background: #3c3b3f; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #605c3c,
      #3c3b3f
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #605c3c, #3c3b3f);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .last {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .displayPhoto {
      box-shadow: 0 2px 7px 1px #888888;
      width: 30%;
      height: 30%;
      margin-top: 2rem;
      margin-right: 5rem;
    }
    .describe {
      font-size: 1.2rem;
    }
    &.link {
      margin-top: 2rem;
      padding: 2rem 5rem;
      color: black;
      background: #ada996; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #eaeaea,
        #dbdbdb,
        #f2f2f2,
        #ada996
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #eaeaea,
        #dbdbdb,
        #f2f2f2,
        #ada996
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      a {
        font-family: "Microsoft Jhenghei";
      }
      a:visited {
        color: black;
      }
    }
  }
}
</style>


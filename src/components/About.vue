<template >
  <div class="container">
    <section class="show-container">
      <img class="displayPhoto" src="../assets/about1.jpg" alt="豎笛照片" />
    </section>
    <section class="header">
      <div class="left-block">
        <h1>Rach Chen</h1>
  			<h3>Front-end E.</h3>
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
    <section>
      
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
.container {
  .header {
    display: flex;
    flex-direction: row;
    padding: 2em 8em;
    .left-block {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-right: 1px solid #ccc;
      padding-right: 1em;
      flex: 1;
    }
    .right-block {
      flex: 1;
      padding-left: 1em;
    }
  }
  .show-container {
    // flex: 1;
    width: 100%;
    text-align: center;
    .displayPhoto {
      margin-top: 2em;
      width: 80vw;
      // height: 100vh;
    }
  }

  .descri {
    padding-left: 10em;
    font-size: 1.4em;
    letter-spacing: 5px;
  }

  .last {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    .displayPhoto {
      width: 30%;
      height: 30%;
      margin-top: 2em;
      margin-right: 5em;
    }
  }
}
</style>


<template>
  <div class="footer-warpper">
    <div class="bx-content footer-box flex align-center justify-between">
      <div class="footer-info">
        <div class="footer-item">
          <span>产品</span>
          <i></i>
          <a href="">益宣宝 </a>
          <a href="">益会宝 </a>
          <a href="">益书宝 </a>
          <a href="">益算宝 </a>
          <a href="">益问宝 </a>
          <a href="">微调研 </a>
          <a href="">会员管理</a>
          <a href="">知识管理</a>
        </div>
        <div class="footer-item">
          <span>查询</span>
          <i></i>
          <a href="">社会组织政策法规综合检索平台</a>
          <a href="">社会组织公益性捐赠税前扣除资格查询</a>
          <a href="">社会组织免税资格精准查询</a>
        </div>
        <div class="footer-item">
          <span>管理</span>
          <i></i>
          <a href="">党务管理系统 </a>
          <a href="">参政议政管理系统 </a>
          <a href="">政工管理系统 </a>
          <a href="">诚信管理系统 </a>
          <a href="">社区治理系统 </a>
          <a href="">综合服务平台CMS系统</a>
        </div>
        <div class="footer-item">
          <span>培训</span>
          <i></i>
          <a href="">视频课程 </a>
          <a href="">在线问答 </a>
          <a href="">资料下载 </a>

        </div>
        <div class="footer-item">
          <span>简介</span>
          <i></i>
          <a href="">易魔方介绍 </a>
          <a href="">易魔方荣誉 </a>
          <a href="">易魔方优势 </a>
          <a href="">易魔方理念 </a>
          <a href="">易魔方团队 </a>
          <a href="">诚聘英才 </a>
          <a href="">联系我们</a>

        </div>
      </div>
      <div class="code-box flex align-center justify-between">
        <div>
          <img src="../assets/img/ymf.jpeg" alt="">
          <p>关注易魔方</p>
        </div>
        <div>
          <img src="../assets/img/shzzfww.png" alt="">
          <p>关注社会组织服务网</p>
        </div>
      </div>
    </div>
    <div class="beian">Copyright © 益魔方 <a href="https://beian.miit.gov.cn" target="_blank">冀ICP备11046062号</a>
      京公网安备110108008324号 北京易魔方科技集团有限公司 版权所有
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer-warpper {
  height: 300px;
  background-color: #1d2128;

  .footer-box {
    height: 256px;

    .footer-info {
      .footer-item {
        display: flex;
        align-items: center;
        height: 34px;
        margin-bottom: 10px;

        span {
          font-size: 16px;
          color: #fff;
        }

        i {
          display: block;
          width: 1px;
          height: 16px;
          margin: 0 15px;
          background: #7c7d7e;
        }

        a {
          font-size: 14px;
          color: #94969f;
          margin-right: 15px;
        }
      }
    }

    .code-box {
      width: 280px;

      div {
        width: 130px;

        img {
          display: block;
          width: 117px;
          height: 117px;
          margin: 0 auto;
        }

        p {
          line-height: 40px;
          text-align: center;
          color: #fff;
        }
      }
    }
  }

  .beian {
    line-height: 44px;
    height: 44px;
    text-align: center;
    color: #87888d;
    background-color: #0e131a;

    a {
      color: #87888d;
    }
  }
}
</style>
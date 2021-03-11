<template>
  <div class="warpper">
    <!--轮播-->
    <div class="swiper-warpper">
      <vHeader class="pate-header"></vHeader>
      <el-carousel height="650px">
        <el-carousel-item v-for="item in 3" :key="item">
          <div class="slider flex align-center justify-around">
            <img src="../assets/img/banner.png" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--办公平台-->
    <div class="work-warpper padding-tb-xl">
      <div class="bx-content">
        <div class="modular-title">
          <h2>办公平台</h2>
          <p>流程安全+工作规范+效率提升 = 益魔方政务版</p>
        </div>
        <div class="flex align-center justify-between flex-wrap">
          <div class="work-item">
            <i class="iconfont iconlaba"></i>
            <h3><span>发</span>通知</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont iconxiugai"></i>
            <h3><span>收</span>材料</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont iconflag-fill"></i>
            <h3><span>抓</span>党建</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont iconjianchaxiang"></i>
            <h3><span>报</span>年检</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont iconjiaohuan"></i>
            <h3><span>做</span>换届</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont iconxinwen"></i>
            <h3><span>报</span>新闻</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont icontongji"></i>
            <h3><span>做</span>统计</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont iconxiangmuluyan"></i>
            <h3><span>管</span>项目</h3>
            <p>点击了解</p>
          </div>
          <div class="work-item">
            <i class="iconfont iconjilu-fill"></i>
            <h3><span>做</span>调研</h3>
            <p>点击了解</p>
          </div>
        </div>
      </div>
    </div>

    <!--查询平台-->
    <div class="search-warpper padding-tb-xl">
      <div class="bx-content">
        <div class="modular-title">
          <h2>查询平台</h2>
          <p>社会组织各类信息一键查询 方便快捷</p>
        </div>

        <div class="flex align-center justify-between">
          <div class="search-item">
            <img src="../assets/img/search1.png" alt="">
            <p><i class="iconfont iconshouzhi1"></i>点击立刻查询</p>
          </div>
          <div class="search-item">
            <img src="../assets/img/search2.png" alt="">
            <p><i class="iconfont iconshouzhi1"></i>点击立刻查询</p>
          </div>
          <div class="search-item">
            <img src="../assets/img/search3.png" alt="">
            <p><i class="iconfont iconshouzhi1"></i>点击立刻查询</p>
          </div>
        </div>

      </div>
    </div>

    <!--管理平台-->
    <div class="manage-warpper padding-tb-xl">
      <div class="bx-content">
        <div class="modular-title active">
          <h2>管理平台</h2>
          <p>益魔方努力成为您身边的数字化战略专家</p>
        </div>
        <div class="flex align-center justify-between flex-wrap">
          <div class="manage-item border-right border-bottom active">
            <h3 class="manage-item-title"><img src="../assets/img/manage1.png" alt="">党务管理系统</h3>
            <p class="manage-item-desc">党建的成果展示平台和工作交流平台，打造党建与业务相融合、<br/>党建与发展相结合的全新模式！</p>
            <div class="manage-item-list">
              <div>
                <i class="iconfont iconicon-test"></i>
                <p>帮您解决党建经费管理不规范、<br/>不透明、不清晰的问题</p>
              </div>
              <div>
                <i class="iconfont iconicon-test1"></i>
                <p>帮您解决党建文书书写不规范、<br/>不便捷的问题</p>
              </div>
              <div>
                <i class="iconfont iconicon-test2"></i>
                <p>帮您解决党建工作交流内容不安<br/>全、不方便的问题</p>
              </div>
              <div>
                <i class="iconfont icon4"></i>
                <p>帮您解决党员工作中党建与业务<br/>如何融合发展的问题</p>
              </div>
            </div>
          </div>
          <div class="manage-item  border-bottom ">
            <h3 class="manage-item-title"><img src="../assets/img/manage2.png" alt="">参政议政管理系统</h3>
            <p class="manage-item-desc">探索民主党派参政议政的新途径，更好地为党委政府决策提供参考<br/></p>
            <div class="manage-item-list">
              <div>
                <i class="iconfont iconicon-test"></i>
                <p>解决各级党派组织和党外人士<br/>
                  参政议政不积极问题</p>
              </div>
              <div>
                <i class="iconfont iconicon-test1"></i>
                <p>解决各级党派组织和党外人士<br/>
                  参政议政方式单一</p>
              </div>
              <div>
                <i class="iconfont iconicon-test2"></i>
                <p>更好的履行参政议政职能，加强<br/>
                  交流和学习</p>
              </div>
              <div>
                <i class="iconfont icon4"></i>
                <p>领导班子及时了解民意动向、与<br/>
                  成员互动</p>
              </div>
            </div>
          </div>
          <div class="manage-item border-right border-bottom active">
            <h3 class="manage-item-title"><img src="../assets/img/manage3.png" alt="">政工管理系统</h3>
            <p class="manage-item-desc">实现部门内部业务能力提升、服务能力加强、资源信息共享、沟通交流畅通<br/></p>
            <div class="manage-item-list">
              <div>
                <i class="iconfont iconicon-test"></i>
                <p>解决领导对基层工作把控不全面<br/>问题</p>
              </div>
              <div>
                <i class="iconfont iconicon-test1"></i>
                <p>解决机构公告及时发、定向发、<br/>反馈不及时问题</p>
              </div>
              <div>
                <i class="iconfont iconicon-test2"></i>
                <p>提升岗位人员政策解读能力和业<br/>务水平</p>
              </div>
              <div>
                <i class="iconfont icon4"></i>
                <p>提升机构人员之间的工作交流和<br/>建议反馈渠道</p>
              </div>
            </div>
          </div>
          <div class="manage-item  border-bottom ">
            <h3 class="manage-item-title"><img src="../assets/img/manage4.png" alt="">诚信管理系统</h3>
            <p class="manage-item-desc">实时管理监督加强能力建设服务党委政府</p>
            <div class="manage-item-list">
              <div>
                <i class="iconfont iconicon-test"></i>
                <p>数据模型任意搭建，满足各个<br/>领域的数据统计需求</p>
              </div>
              <div>
                <i class="iconfont iconicon-test1"></i>
                <p>数据多维度统计，从多方面<br/>反应问题</p>
              </div>
              <div class="active">
                <i class="iconfont iconicon-test2"></i>
                <p>数据实现全过程留痕，最大限度的保障数据的真实性</p>
              </div>

            </div>
          </div>
          <div class="manage-item border-right ">
            <h3 class="manage-item-title"><img src="../assets/img/manage5.png" alt="">社区治理系统</h3>
            <p class="manage-item-desc">提升基层社区自治效能激发基层社区自治活力增强基层社区凝聚力</p>
            <div class="manage-item-list">
              <div>
                <i class="iconfont iconicon-test"></i>
                <p>打通城乡社区党联系群众的“最<br/>后一公里”</p>
              </div>
              <div>
                <i class="iconfont iconicon-test1"></i>
                <p>增强基层党组织的政治功能和服<br/>务功能</p>
              </div>
              <div>
                <i class="iconfont iconicon-test2"></i>
                <p>解决资源力量和群众需求精准<br/>对接</p>
              </div>
              <div>
                <i class="iconfont icon4"></i>
                <p>提升社区居民社会参与度，提升<br/>整体工作效能</p>
              </div>
            </div>
          </div>
          <div class="manage-item   ">
            <h3 class="manage-item-title"><img src="../assets/img/manage6.png" alt="">综合服务平台CMS系统</h3>
            <p class="manage-item-desc">整合机构领域内外资源、聚集行业领域优势力量、提升各个机构之间沟通效率</p>
            <div class="manage-item-list">
              <div>
                <i class="iconfont iconicon-test"></i>
                <p>缓解各个领域资源整合难互通难<br/>的问题</p>
              </div>
              <div>
                <i class="iconfont iconicon-test1"></i>
                <p>解决行业领域相关政策获取难、<br/>解读难、检索难问题</p>
              </div>
              <div class="active">
                <i class="iconfont iconicon-test2"></i>
                <p>打通政府、专家、社团、企业等角色之间的壁垒</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!--培训平台-->
    <div class="train-warpper padding-tb-xl">
      <div class="bx-content">
        <div class="modular-title">
          <h2>培训平台</h2>
          <p>益魔方努力成为您身边的数字化战略专家</p>
        </div>

        <div class="flex align-center justify-between">
          <div class="train-item">
            <div class="train-item-title"><img src="../assets/img/train1.png" alt=""></div>
            <div class="train-some">
              <div class="train-some-item train-some-item1">
                <h3>年检课堂</h3>
                <div>
                  <span> <i class="iconfont icontime-circle"></i>共23课时</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
              <div class="train-some-item train-some-item2">
                <h3>评估课堂</h3>
                <div>
                  <span> <i class="iconfont icontime-circle"></i>共23课时</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
              <div class="train-some-item train-some-item3">
                <h3>换届课堂</h3>
                <div>
                  <span> <i class="iconfont icontime-circle"></i>共23课时</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
              <div class="train-some-item train-some-item4">
                <h3>系列课堂</h3>
                <div>
                  <span> <i class="iconfont icontime-circle"></i>共23课时</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
            </div>
            <div class="train-more">点击立刻学习课程 <i class="iconfont icongengduo"></i></div>
          </div>
          <div class="train-item">
            <div class="train-item-title"><img src="../assets/img/train2.png" alt=""></div>
            <div class="train-some">
              <div class="train-some-item train-some-item1">
                <h3>年检问答</h3>
                <div>
                  <span> <i class="iconfont icontime-circle"></i>共812个问题</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
              <div class="train-some-item train-some-item2">
                <h3>评估问答</h3>
                <div>
                  <span> <i class="iconfont iconwenhao"></i>共812个问题</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
              <div class="train-some-item train-some-item3">
                <h3>财税问答</h3>
                <div>
                  <span> <i class="iconfont iconwenhao"></i>共812个问题</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
              <div class="train-some-item train-some-item4">
                <h3>其他问答</h3>
                <div>
                  <span> <i class="iconfont iconwenhao"></i>共812个问题</span>
                  <span>有<b>234</b>人在学习</span>
                </div>
              </div>
            </div>
            <div class="train-more">点击查看更多问题 <i class="iconfont icongengduo"></i></div>
          </div>
          <div class="train-item">
            <div class="train-item-title"><img src="../assets/img/train1.png" alt=""></div>
            <div class="train-some">
              <div class="train-some-item train-some-item1">
                <h3>会费票据资料下载</h3>
                <div>
                  <span> <i class="iconfont iconziliao"></i>个文件</span>
                  <span>有<b>234</b>人在下载 </span>
                </div>
              </div>
              <div class="train-some-item train-some-item2">
                <h3>年检资料下载</h3>
                <div>
                  <span> <i class="iconfont iconziliao"></i>个文件</span>
                  <span>有<b>234</b>人在下载</span>
                </div>
              </div>
              <div class="train-some-item train-some-item3">
                <h3>评估资料下载</h3>
                <div>
                  <span> <i class="iconfont iconziliao"></i>个文件</span>
                  <span>有<b>234</b>人在下载</span>
                </div>
              </div>
              <div class="train-some-item train-some-item4">
                <h3>换届资料下载</h3>
                <div>
                  <span> <i class="iconfont iconziliao"></i>个文件</span>
                  <span>有<b>234</b>人在下载</span>
                </div>
              </div>
            </div>
            <div class="train-more">点击立刻下载资料 <i class="iconfont icongengduo"></i></div>
          </div>

        </div>
      </div>
    </div>

    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/IndexHeader.vue';
import vFooter from '@/components/IndexFooter.vue';

export default {
  data() {
    return {}
  },
  components: {
    vHeader,
    vFooter
  },
  created() {
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.warpper {
  .swiper-warpper {
    position: relative;

    .pate-header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 99;
    }

    .slider {
      height: 650px;
      overflow: hidden;
    }
  }

  .modular-title {
    margin-bottom: 50px;

    h2 {
      font-size: 42px;
      line-height: 58px;
      text-align: center;
    }

    p {
      font-size: 24px;
      line-height: 48px;
      letter-spacing: 1px;
      color: #999999;
      text-align: center;
    }

    &.active {
      h2 {
        color: #fff;
      }

      p {
        color: #fff;
      }
    }
  }

  .work-warpper {
    background-color: #fff;

    .work-item {
      width: 390px;
      height: 160px;
      padding: 30px;
      background-color: #e8f2ff;
      border-radius: 4px;
      position: relative;
      margin-bottom: 13px;
      cursor: pointer;

      &:hover {
        background-color: #0a2240;
        box-shadow: 0px 0px 8px 0px rgba(10, 34, 64, 0.1);

        h3 {
          span {
            color: #fff;
          }
        }

        p {
          background-image: linear-gradient(90deg,
              #ff9600 0%,
              #e16a12 100%);
        }
      }

      i {
        position: absolute;
        top: 23px;
        left: 23px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 48px;
        height: 48px;

        background: #ffffff;
        color: #0a2240;
        font-size: 24px;
        border-radius: 48px;
      }

      h3 {
        text-align: center;
        font-size: 42px;
        line-height: 58px;
        color: #ff9600;

        margin-bottom: 10px;

        span {
          color: #0a2240;
          margin-right: 10px;
        }
      }

      p {
        display: block;
        width: 90px;
        height: 28px;
        margin: 0 auto;
        text-align: center;
        line-height: 28px;
        font-size: 16px;
        color: #fff;
        background-color: #cadcf3;
        border-radius: 14px;
      }
    }
  }

  .search-warpper {
    background-color: #efefef;

    .search-item {
      width: 386px;
      height: 263px;
      border-radius: 10px;
      position: relative;
      cursor: pointer;

      &:hover {
        p {
          background: #ff9600;
          color: #fff;

          i {
            color: #fff;
          }
        }
      }

      p {
        position: absolute;
        top: 175px;
        left: 62px;
        width: 262px;
        height: 44px;
        text-align: center;
        line-height: 42px;
        background-color: #ffffff;
        border-radius: 22px;
        font-size: 20px;

        i {
          color: #ff9600;
          font-size: 24px;
          margin-right: 10px;
        }
      }
    }
  }

  .manage-warpper {
    background-color: #0a2240;

    .manage-item {
      width: 600px;
      height: 294px;
      padding: 40px 20px;
      position: relative;
      cursor: pointer;

      &.border-right {
        border-right: 1px dashed #40546d;
      }

      &.border-bottom {
        border-bottom: 1px dashed #40546d;
      }

      &.active {
        &:after {
          position: absolute;
          right: -6px;
          bottom: -6px;
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 12px;
          background-color: #ff9600;
          z-index: 9;
        }
      }

      &:hover {
        background: rgba(255, 255, 255, .1);
      }

      .manage-item-title {
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 24px;
        color: #ff9600;
        margin-bottom: 5px;

        img {
          width: 24px;
          margin-right: 5px;
        }
      }

      .manage-item-desc {
        line-height: 18px;
        height: 36px;
        color: #ffffff;
        margin-bottom: 5px;
      }

      .manage-item-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-right: 30px;

        div {
          display: flex;
          align-items: self-start;
          width: 257px;
          height: 66px;
          padding: 10px;
          border-radius: 2px;
          border: solid 1px #40546d;
          margin-bottom: 20px;

          &.active {
            width: 530px;
          }

          i {
            color: #ff9600;
            line-height: 24px;
            margin-right: 5px;
          }

          p {
            flex: 1;
            color: #d7d9dc;
            line-height: 24px;
          }
        }
      }
    }
  }

  .train-warpper {
    background-color: #fff;
    .train-item{
      width: 380px;
      .train-item-title{
        width: 380px;
        height: 88px;
        border-radius: 8px 8px 0px 0px;
        margin-bottom: 20px;
        cursor: pointer;
        img{
          width: 380px;
          height: 88px;
          border-radius: 8px 8px 0px 0px;
        }
      }
      .train-some{
        .train-some-item{
          width: 380px;
          height: 110px;
          padding: 20px 30px;
          margin-bottom: 15px;
          cursor: pointer;
          &.train-some-item1{
            background-image: linear-gradient(70deg,
                #016db8 0%,
                #005693 100%);
          }
          &.train-some-item2{
            background-image: linear-gradient(70deg,
                #0393b8 0%,
                #0284a6 50%,
                #007593 100%);
          }
          &.train-some-item3{
            background-image: linear-gradient(70deg,
                #00b7b3 0%,
                #019390 100%);
          }
          &.train-some-item4{
            background-image: linear-gradient(70deg,
                #026cb6 0%,
                #004793 100%);
          }
          h3{
            line-height: 56px;
            font-size: 28px;
            color: #fff;
          }
          div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            span{
              display: flex;
              align-items: center;
              b{
                color: #ff9600;
              }
              i{
                margin-right: 3px;
              }
            }
          }
        }
      }
      .train-more{
        display: flex;
        align-items: center;
        width: 380px;
        height: 72px;
        padding: 0 70px;
        font-size: 24px;
        color: #fff;
        background-color: #ff9600;
        border-radius: 0px 0px 8px 8px;
        cursor: pointer;
        i{
          color: #fff;
          margin-left: 10px;
          font-size: 28px;
        }
      }
    }
  }

}


</style>
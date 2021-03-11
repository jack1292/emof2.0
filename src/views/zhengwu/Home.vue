<template>
  <div class="home-warpper">
    <vHeader></vHeader>
    <PageTitle></PageTitle>
    <div class="flex align-start">
      <vSidebar></vSidebar>
      <div class="content-warpper">
        <router-view/>
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/Header.vue';
import PageTitle from '@/components/PageTitle.vue';
import vSidebar from '@/components/Sidebar.vue';
import vFooter from '@/components/Footer.vue';

export default {
  data() {
    return {}
  },
  components: {
    vHeader,
    PageTitle,
    vSidebar,
    vFooter
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.home-warpper {
  min-height: 100vh;
  background: url(../../assets/img/contentbg.png) no-repeat;
  background-size: 100% 100%;
  .content-warpper {
    width: 992px;
    min-height: calc(100vh - 225px);
    padding: 30px 40px;
  }
}
</style>
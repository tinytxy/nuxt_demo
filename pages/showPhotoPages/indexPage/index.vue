<template>
 <section id="html-container-index" style="position: relative;">
  <!-- 活动内容 -->
  <div id="html-template-1" class="container j-index-container" :style="pageConfig.page.style">
    <div id="act3152753824111" class="full-width">
        <!-- 主banner -->
        <img 
        :id="pageConfig.logo.id" 
        :c_typename="pageConfig.logo.c_typename"
        :c_type="pageConfig.logo.c_type" 
        :c_width="pageConfig.logo.c_width"
        :c_height="pageConfig.logo.c_height" 
        :c_desc="pageConfig.logo.c_desc" 
        :src="pageConfig.logo.src"
        class="act-logo"
        />
        <!-- logo -->
        <img 
        :id="pageConfig.mainBanner.id" 
        :c_typename="pageConfig.mainBanner.c_typename"
        :c_type="pageConfig.mainBanner.c_type" 
        :c_width="pageConfig.mainBanner.c_width"
        :c_height="pageConfig.mainBanner.c_height" 
        :c_desc="pageConfig.mainBanner.c_desc" 
        :src="pageConfig.mainBanner.src"
        class="full-width"
        v-serverFn="isClient"
        v-clientFn="isClient">
    </div>
    <div class="selectable-banner">
        <!-- 副banner -->
        <img 
        :id="pageConfig.subBanner.id"
        :c_typename="pageConfig.subBanner.c_typename"
        :c_type="pageConfig.subBanner.c_type" 
        :c_width="pageConfig.subBanner.c_width"
        :c_height="pageConfig.subBanner.c_height" 
        :c_desc="pageConfig.subBanner.c_desc" 
        :src="pageConfig.subBanner.src"
        class="full-width">
        <!-- 报名按钮 -->
        <div class="select-info">
            <div class="text-center m-b">
                <a class="btn-enroll" href="javascript:;" 
                :id="pageConfig.registerBtn.id"
                :c_typename="pageConfig.registerBtn.c_typename"
                :c_type='pageConfig.registerBtn.c_type'
                :c_innerlink="pageConfig.registerBtn.c_innerlink" 
                :c_outlink='pageConfig.registerBtn.c_outlink' 
                :c_width="pageConfig.registerBtn.c_width" 
                :c_height="pageConfig.registerBtn.c_height" 
                :c_desc="pageConfig.registerBtn.c_desc">
                    <img :src="pageConfig.registerBtn.src" />
                </a>
            </div>
            <div class="form-inline">
                <div class="form-pic">
                    <img src="http://qnfile.icareyou.net/ea8fa9d58ad441ab80b2332aade10e931560411700171.jpg"/>
                </div>
                <input type="text" class="search-input" v-model="activityCommonObj.searchName" placeholder="请输入编号/姓名" :class="readOnly">
                <button :id="pageConfig.searchBtn.id" 
                :style="pageConfig.searchBtn.style" class="act-btn search-btn j-index-search">{{pageConfig.searchBtn.c_text}}</button>
            </div>
        </div>
    </div>
    <div class="content">
        <!-- 按钮组 -->
        <ul class="tab-list m-b">
            <li>
              <img 
                :id="pageConfig.playerListBtn.id"
                :c_width="pageConfig.playerListBtn.c_width"
                :c_height="pageConfig.playerListBtn.c_height"
                :c_desc="pageConfig.playerListBtn.c_desc"
                :src="pageConfig.playerListBtn.src"
                :c_typename="pageConfig.playerListBtn.c_typename"/>
            </li>
            <li>
              <img
                :id="pageConfig.rangerListBtn.id"
                :c_width="pageConfig.rangerListBtn.c_width"
                :c_height="pageConfig.rangerListBtn.c_height"
                :c_desc="pageConfig.rangerListBtn.c_desc"
                :src="pageConfig.rangerListBtn.src"
                :c_typename="pageConfig.rangerListBtn.c_typename"/>
            </li>
        </ul>
        <!-- 参赛选手 -->
        <div id="user-list" class="user-list" v-show="!rangeVisible">
          <div class="vote-con" id="act592324923890">
              <div class="item">
                <span class="number-icon">233</span>
                <div class="item-photo">
                    <a href="javascript:;">
                        <img id="act31528357438128" src="http://qnfile.icareyou.net/jpg119_4_11_18_22_43_1557570163811zSy.jpg"/>
                    </a>
                </div>
                <div class="item-title">
                    <p class="item-info">
                      <span class="user-name">测试</span>
                    <p>   
                    <p class="vote-struct">贵阳市乌当区新天社区卫生服务中心测试</p>
                    <p style="text-align:right;"><span class="vote-num">1票</span></p>
                </div>
                <div class="item-title item-vote">
                    <button 
                    :id="pageConfig.voteBtn.id" 
                    :style="pageConfig.voteBtn.style" class="act-btn btn-pink">{{pageConfig.voteBtn.c_text}}</button>
                </div>
              </div>
              <div class="item">
                <span class="number-icon">233</span>
                <div class="item-photo">
                  <a href="javascript:;">
                    <img id="act31528473528545" src="http://qnfile.icareyou.net/jpg119_4_11_18_22_43_1557570163811zSy.jpg"/>
                  </a>
                </div>
                <div class="item-title">
                    <p class="item-info">
                      <span class="user-name">测试</span>
                    <p>   
                    <p class="vote-struct">贵阳市乌当区新天社区卫生服务中心测试</p>
                    <p style="text-align:right;"><span class="vote-num">1票</span></p>
                </div>
                <div class="item-title item-vote">
                    <button 
                    :id="pageConfig.voteBtn.id2" 
                    :style="pageConfig.voteBtn.style" class="act-btn btn-pink">{{pageConfig.voteBtn.c_text}}</button>
                </div>
              </div>
          </div>
          <div class="list-empty">没有更多数据了</div>
          <div class="navigation">
            <p :id="pageConfig.pageSize.id" 
            :c_pagesize="pageConfig.pageSize.c_pagesize">当前<span class="curpage">1</span>页 &nbsp; 共<span class="totalpage">5</span>条&nbsp;<span>每页展示<em id="act41530417882468">{{ pageConfig.pageSize.c_pagesize }}</em>条</span></p>
            <ul class="prev-next">
              <li>
                <img 
                  :id="pageConfig.prePageBtn.id"
                  :c_typename="pageConfig.prePageBtn.c_typename"
                  :c_type="pageConfig.prePageBtn.c_type" 
                  :c_width="pageConfig.prePageBtn.c_width"
                  :c_height="pageConfig.prePageBtn.c_height" 
                  :c_desc="pageConfig.prePageBtn.c_desc" 
                  :src="pageConfig.prePageBtn.src">
              </li>
              <li>
                <img 
                  :id="pageConfig.nextPageBtn.id"
                  :c_typename="pageConfig.nextPageBtn.c_typename"
                  :c_type="pageConfig.nextPageBtn.c_type" 
                  :c_width="pageConfig.nextPageBtn.c_width"
                  :c_height="pageConfig.nextPageBtn.c_height" 
                  :c_desc="pageConfig.nextPageBtn.c_desc" 
                  :src="pageConfig.nextPageBtn.src">
              </li>
            </ul>
          </div>
        </div>
        <!-- 排行榜 -->
        <div id="range-list" class="user-list" v-show="rangeVisible" style="display: none">
          <div class="rank-scroll">
            <table class="full-width">
              <thead>
                <tr>
                    <th style="width:20%">排行</th>
                    <th style="width: 60%;">名字</th>
                    <th>票数</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <span class="number badge-no1">1</span>
                      </td>
                      <td>
                          <div class="table-info">
                              <div class="cell">
                                  <a href="javascript:;">
                                      <img src="http://qnfile.icareyou.net/jpg119_4_10_10_38_13_1557455893225UrM.jpg" class="info-pic" />
                                  </a>
                              </div>
                              <div class="cell cell-info">
                                  <h4>喻小刚</h4>
                                  <small>编号:232号</small>
                              </div>
                          </div>
                      </td>
                      <td>
                          <div class="ticket-total"><span class="text-red">1800</span>票</div>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <span class="number badge-no2">2</span>
                      </td>
                      <td>
                          <div class="table-info">
                              <div class="cell">
                                  <a href="javascript:;">
                                      <img src="http://qnfile.icareyou.net/jpg119_4_10_10_38_13_1557455893225UrM.jpg" class="info-pic" />
                                  </a>
                              </div>
                              <div class="cell cell-info">
                                  <h4>喻小刚</h4>
                                  <small>编号:232号</small>
                              </div>
                          </div>
                      </td>
                      <td>
                          <div class="ticket-total"><span class="text-red">1800</span>票</div>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <span class="number badge-no3">3</span>
                      </td>
                      <td>
                          <div class="table-info">
                              <div class="cell">
                                  <a href="javascript:;">
                                      <img src="http://qnfile.icareyou.net/jpg119_4_10_10_38_13_1557455893225UrM.jpg" class="info-pic" />
                                  </a>
                              </div>
                              <div class="cell cell-info">
                                  <h4>喻小刚</h4>
                                  <small>编号:232号</small>
                              </div>
                          </div>
                      </td>
                      <td>
                          <div class="ticket-total"><span class="text-red">1800</span>票</div>
                      </td>
                  </tr>
                  <tr><td colspan="3"><h4 class="message">加载中...</h4></td></tr>
              </tbody>
            </table>
          </div>
          <div class="navigation">
              <p 
              :id="pageConfig.rangePageSize.id" :c_pagesize="pageConfig.rangePageSize.c_pagesize">当前<span class="curpage">1</span>页 &nbsp; 共<span class="totalpage">5</span>条&nbsp;<span>每页展示<em id="act4153123735791">{{ pageConfig.rangePageSize.c_pagesize }}</em>条</span></p>
              <ul class="prev-next">
                  <li>
                    <img 
                      :id="pageConfig.prePageBtn.id2"
                      :c_typename="pageConfig.prePageBtn.c_typename"
                      :c_type="pageConfig.prePageBtn.c_type" 
                      :c_width="pageConfig.prePageBtn.c_width"
                      :c_height="pageConfig.prePageBtn.c_height" 
                      :c_desc="pageConfig.prePageBtn.c_desc" 
                      :src="pageConfig.prePageBtn.src">
                  </li>
                  <li>
                    <img 
                      :id="pageConfig.nextPageBtn.id2"
                      :c_typename="pageConfig.nextPageBtn.c_typename"
                      :c_type="pageConfig.nextPageBtn.c_type" 
                      :c_width="pageConfig.nextPageBtn.c_width"
                      :c_height="pageConfig.nextPageBtn.c_height" 
                      :c_desc="pageConfig.nextPageBtn.c_desc" 
                      :src="pageConfig.nextPageBtn.src">
                  </li>
              </ul>
          </div>
        </div>
    </div>
    <div class="index-bottom">
        <div class="btn-group-info">
          <img 
          :id="pageConfig.rangeListBtn.id"   
          :c_typename="pageConfig.rangeListBtn.c_typename"
          :c_type='pageConfig.rangeListBtn.c_type'
          :c_width="pageConfig.rangeListBtn.c_width" 
          :c_height="pageConfig.rangeListBtn.c_height" 
          :c_desc="pageConfig.rangeListBtn.c_desc" 
          :src="pageConfig.rangeListBtn.src"/>
        </div>
        <div class="btn-group-info">
          <img 
          :id="pageConfig.playerIndexBtn.id"   
          :c_typename="pageConfig.playerIndexBtn.c_typename"
          :c_type='pageConfig.playerIndexBtn.c_type'
          :c_width="pageConfig.playerIndexBtn.c_width" 
          :c_height="pageConfig.playerIndexBtn.c_height" 
          :c_desc="pageConfig.playerIndexBtn.c_desc" 
          :src="pageConfig.playerIndexBtn.src"/>
        </div>
        <div class="btn-group-info">
          <img 
          :id="pageConfig.ruleBtn.id"   
          :c_typename="pageConfig.ruleBtn.c_typename"
          :c_type='pageConfig.ruleBtn.c_type'
          :c_width="pageConfig.ruleBtn.c_width" 
          :c_height="pageConfig.ruleBtn.c_height" 
          :c_desc="pageConfig.ruleBtn.c_desc" 
          :src="pageConfig.ruleBtn.src"/>
        </div>
    </div>
  </div>
 </section>
</template>

<script>
import { getActivityPageByNumber } from '@/request'
import { getToken ,getActivityCode } from '@/request/getToken'
import setFontSize from '@/assets/js/autoFontsize.min.js'
export default {
  data() {
    return {
      isClient: false,
      // 页面配置
      pageConfig: {
        page: {
          id: 'html-template-1',
          style: ''
        },
        logo: {
          id: 'act31526319445723',
          c_typename: 'logo',
          c_type: 'image',
          c_width: '135',
          c_height: '50',
          c_desc: '建议上传135x50的图片',
          src: 'http://qnfile.icareyou.net/f6ec1cb23c0740d0995c91de7a9964c21560411548597.jpg'
        },
        // 主banner
        mainBanner: {
          id: 'act31526568868457',
          c_typename: 'mainBanner',
          c_type: 'image',
          c_width: '375',
          c_height: '450',
          c_desc: '建议上传750x750的图片',
          src: 'http://qnfile.icareyou.net/e1e347fa1d3a4eb79839e40c6ba312531560307520219.jpg'
        },
        // 副banner
        subBanner: {
          id: 'act3152727598431',
          c_typename: 'subBanner',
          c_type: 'image',
          c_width: '375',
          c_height: '450',
          c_desc: '建议上传750x750的图片',
          src: 'http://qnfile.icareyou.net/223161d1afdc4d7a8757d6a79a92b42e1560411594265.jpg'
        },
        // 注册按钮
        registerBtn: {
          id: 'act31527459124456',
          c_typename: 'registerBtn',
          c_type: 'imageBtn',
          c_innerlink: '2',
          c_outlink: '',
          c_width: '182',
          c_height: '52',
          c_desc: '建议上传364x104的图片',
          src: 'http://qnfile.icareyou.net/dc0ca5c0aca14cfb8dc868ef7df00ec41560411624397.jpg'
        },
        // 搜索按钮
        searchBtn: {
          id: 'act3152814816164',
          c_typename: 'searchBtn',
          c_type: 'btn',
          c_text: '搜索',
          style: ''
        },
        // 参赛选手按钮
        playerListBtn: {
          id: 'act31528123692525',
          c_typename: 'playerListBtn',
          c_type: 'image',
          c_width: '184',
          c_height: '82',
          c_desc: '建议上传184x82的图片',
          src: 'http://qnfile.icareyou.net/34f4f47150224b62aa5ff90d149312691560411762418.jpg'
        },
        // 排行按钮
        rangerListBtn: {
          id: 'act3152823482970',
          c_typename: 'rangerListBtn',
          c_type: 'image',
          c_width: '184',
          c_height: '82',
          c_desc: '建议上传184x82的图片',
          src: 'http://qnfile.icareyou.net/bd96dda6884843719d63dc2c7699b5711560411734046.jpg'
        },
        // 分页配置
        pageSize: {
          id: 'act61214527684747',
          c_typename: 'pageSize',
          c_type: 'pageSize',
          c_pagesize: 10
        },
        // 排行榜分页
        rangePageSize: {
          id: 'act111398324601',
          c_typename: 'pageSize',
          c_type: 'pageSize',
          c_pagesize: 10
        },
        // 投票
        voteBtn: {
          id: 'act5135962301304',
          id2: 'act5141147407988',
          c_typename: 'voteBtn',
          c_type: 'btn',
          c_text: '投票',
          style: ''
        },
        // 上一页
        prePageBtn: {
          id: 'act3152978551035',
          id2: 'act514245671026',
          c_typename: 'prePageBtn',
          c_type: 'image',
          c_width: '239',
          c_height: '80',
          c_desc: '建议上传239x80的图片',
          src: 'http://qnfile.icareyou.net/547087afeea842179f2f3c3f1cf8a9591560411787452.jpg'
        },
        // 下一页
        nextPageBtn: {
          id: 'act315291899997',
          id2: 'act5142157597939',
          c_typename: 'nextPageBtn',
          c_type: 'image',
          c_width: '239',
          c_height: '80',
          c_desc: '建议上传239x80的图片',
          src: 'http://qnfile.icareyou.net/301b71ed53af45b59911c1047c839fd61560412020634.jpg'
        },
        // 悬浮按钮组
        rangeListBtn: {
          id: 'act2165045664554',
          c_typename: 'rangeListBtn',
          c_type: 'image',
          src: 'http://qnfile.icareyou.net/1b560d6dfe2d4e8e8a05fe90336cc5f61560411872708.jpg',
          c_width: '154',
          c_height: '64',
          c_desc: '建议上传154x64的图片'
        },
        playerIndexBtn: {
          id: 'act21650126678793',
          c_typename: 'playerIndexBtn',
          c_type: 'image',
          src: 'http://qnfile.icareyou.net/1c24d979349f482aafd737c2d5acb8e11560411839686.jpg',
          c_width: '154',
          c_height: '64',
          c_desc: '建议上传154x64的图片'
        },
        ruleBtn: {
          id: 'act21650195017743',
          c_typename: 'ruleBtn',
          c_type: 'image',
          src: 'http://qnfile.icareyou.net/c5f549aeb74749ac9529b28cc78c715f1560411823738.jpg',
          c_width: '154',
          c_height: '64',
          c_desc: '建议上传154x64的图片'
        }
      },
      readOnly: 'c-read-only',
      activityCommonObj: {
        searchName: '',
        voteshow: false,
        voteCon: [],
        rankCon: []
      },
      rangeVisible: false
    }
  },
  created() {
    this.getPageData()
  },
  mounted () {
    setFontSize(document, window)
    const that = this
    // 动态设置页面
    if(this.$route.query.mode === "server") {
      // 后台
      that.isClient = false
    }else if(this.$route.query.mode === "client"){
      // 居民端
      that.isClient = true
    }
  },
  components: {
    // VueDraggableResizable
  },
  methods: {
    getPageConfig: function() {
      const config = this.pageConfig
      return JSON.stringify(config)
    },
    // 设置页面配置
    setPageConfig: function(config) {
      for (const key in this.pageConfig) {
        if (config[key] === undefined) {
          alert(key + 'index')
        } else {
          this.pageConfig[key] = config[key]
        }
      }
    },
    getPageData: function(){
      getActivityPageByNumber({
        token: getToken(),
        activityCode: getActivityCode(),
        pageNumber: '1'
      }).then(res => {
        // console.log(res)
        const json = res.result.dataJson;
        const jsonObj = JSON.parse(json);
        this.setPageConfig(jsonObj);
      });
    }
  },
  directives: {
    clientFn:{
      // click
      update: function(el,binding,vnode) {
        if(binding.value){
          el.onclick = function(e){
            alert('客户端click');
          }
        }
      }
    },
    serverFn:{
      update: function(el,binding,vnode){
        if(!binding.value){
          // console.log(el)
          // click
          el.onclick = function(e){
            alert('后台配置click');
          };
          // mouseenter
          el.onmouseenter = function(e){
            console.log('后台配置mouseenter');
          };
          // mouseleave
          el.onmouseleave = function(e){
            console.log('后台配置mouseleave');
          };
        }
      }
    }
  }
}
</script>
<style scoped>
</style>

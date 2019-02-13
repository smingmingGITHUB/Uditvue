<template>
  <div id="expertInformation">
    <div class="top_e">
      <div class="title_e">
        <span>中山大学附属肿瘤医院专家介绍一览表</span>
      </div>
    </div>
    <div class="main">
      <div class="t1">
        <div class="n1" id="n1">内科</div>
        <div class="t2">
          <div class="t3">
            <div class="t4">{{list[num].deptName}}</div>
            <div class="t3_e_d" v-for="(items, index) in list[num].member[0]" :key="items.id+index">
              <div class="d1">
                <img :src="items.avatar">
              </div>
              <div class="d2">
                <div>
                  <span class="expert_name pd">{{items.name}}</span>
                  <span class="content">{{items.professionalTitle}}</span>
                </div>
                <div>
                  <span class="pd">门诊时间:</span>
                  <span class="content" v-html="items.visitTimeVal"></span>
                </div>
                <div>
                  <span class="pd">医疗特长:</span>
                  <span class="content">{{items.specialty}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="t3">
            <div class="t4">{{list[1].deptName}}</div>
            <div class="t3_e_d" v-for="(items, index) in list[1].member[0]" :key="items.id+index">
              <div class="d1">
                <img :src="items.avatar">
              </div>
              <div class="d2">
                <div>
                  <span class="expert_name pd">{{items.name}}</span>
                  <span class="content">{{items.professionalTitle}}</span>
                </div>
                <div>
                  <span class="pd">门诊时间:</span>
                  <span class="content" v-html="items.visitTimeVal"></span>
                </div>
                <div>
                  <span class="pd">医疗特长:</span>
                  <span class="content">{{items.specialty}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="t3">
            <div class="t4">{{list[2].deptName}}</div>
            <div class="t3_e_d" v-for="(items, index) in list[2].member[0]" :key="items.id+index">
              <div class="d1">
                <img :src="items.avatar">
              </div>
              <div class="d2">
                <div>
                  <span class="expert_name pd">{{items.name}}</span>
                  <span class="content">{{items.professionalTitle}}</span>
                </div>
                <div>
                  <span class="pd">门诊时间:</span>
                  <span class="content" v-html="items.visitTimeVal"></span>
                </div>
                <div>
                  <span class="pd">医疗特长:</span>
                  <span class="content">{{items.specialty}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t1">
        <div class="f1" id="f1">放疗科</div>
        <div class="t2">
          <div class="t3">
            <div class="t4">{{list[3].deptName}}</div>
            <div class="t3_e_d" v-for="(items, index) in list[3].member[0]" :key="items.id+index">
              <div class="d1">
                <img :src="items.avatar">
              </div>
              <div class="d2">
                <div>
                  <span class="expert_name pd">{{items.name}}</span>
                  <span class="content">{{items.professionalTitle}}</span>
                </div>
                <div>
                  <span class="pd">门诊时间:</span>
                  <span class="content" v-html="items.visitTimeVal"></span>
                </div>
                <div>
                  <span class="pd">医疗特长:</span>
                  <span class="content">{{items.specialty}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="t3">
            <div class="t4">{{list[4].deptName}}</div>
            <div class="t3_e_d" v-for="(items, index) in list[4].member[0]" :key="items.id+index">
              <div class="d1">
                <img :src="items.avatar">
              </div>
              <div class="d2">
                <div>
                  <span class="expert_name pd">{{items.name}}</span>
                  <span class="content">{{items.professionalTitle}}</span>
                </div>
                <div>
                  <span class="pd">门诊时间:</span>
                  <span class="content" v-html="items.visitTimeVal"></span>
                </div>
                <div>
                  <span class="pd">医疗特长:</span>
                  <span class="content">{{items.specialty}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="t3">
            <div class="t4">{{list[num1].deptName}}</div>
            <!-- 盆腔肿瘤放疗/消化道肿瘤放疗/淋巴瘤放疗 -->
            <div
              class="t3_e_d"
              v-for="(items, index) in list[num1].member[0]"
              :key="items.id+index"
            >
              <div class="d1">
                <img :src="items.avatar">
              </div>
              <div class="d2">
                <div>
                  <span class="expert_name pd">{{items.name}}</span>
                  <span class="content">{{items.professionalTitle}}</span>
                </div>
                <div>
                  <span class="pd">门诊时间:</span>
                  <span class="content" v-html="items.visitTimeVal"></span>
                </div>
                <div>
                  <span class="pd">医疗特长:</span>
                  <span class="content">{{items.specialty}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t1">
        <div class="t1_d">
          <div class="t4">{{list[numXiong].deptName}}</div>
          <!-- 胸科/肝胆胰科 -->
          <div
            class="t3_e_d"
            v-for="(items, index) in list[numXiong].member[0]"
            :key="items.id+index"
          >
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="t1_d">
          <div class="t4">{{list[numTou].deptName}}</div>
          <!-- 头颈科/神经外科 -->
          <div
            class="t3_e_d"
            v-for="(items, index) in list[numTou].member[0]"
            :key="items.id+index"
          >
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t1">
        <div class="t1_d">
          <div class="t4">{{list[numFu].deptName}}</div>
          <!-- 妇科/鼻咽科 -->
          <div class="t3_e_d" v-for="(items, index) in list[numFu].member[0]" :key="items.id+index">
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="t1_d">
          <div class="t4">{{list[numWei].deptName}}</div>
          <!-- 胃外科/泌尿外科 -->
          <div
            class="t3_e_d"
            v-for="(items, index) in list[numWei].member[0]"
            :key="items.id+index"
          >
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="t1">
        <div class="t1_d">
          <div class="t4">{{list[numJie].deptName}}</div>
          <!-- 结直肠科/中医科/核医学科 -->
          <div
            class="t3_e_d"
            v-for="(items, index) in list[numJie].member[0]"
            :key="items.id+index"
          >
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="t1_d">
          <div class="t4">{{list[numRu].deptName}}</div>
          <!-- 乳腺科/血液肿瘤科/.../体检中心 -->
          <div class="t3_e_d" v-for="(items, index) in list[numRu].member[0]" :key="items.id+index">
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t1" style="margin-right: 1rem">
        <div class="t1_d">
          <div class="t4">{{list[numWeiChuang].deptName}}</div>
          <!-- 微创介入科/综合科/骨与软组织科/临床营养科 -->
          <div
            class="t3_e_d"
            v-for="(items, index) in list[numWeiChuang].member[0]"
            :key="items.id+index"
          >
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="oldDept" class="t1_d">
          <div class="t4" style="font-size: 1.875rem">{{numMian}}</div>
          <div class="t4" style="font-size: 1.875rem">{{list[numHei].deptName}}</div>
          <!-- 黑色素瘤与肉瘤内科/儿童肿瘤科/疼痛门诊 -->
          <div
            class="t3_e_d"
            v-for="(items, index) in list[numHei].member[0]"
            :key="items.id+index"
          >
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>

        <div id="newDept" class="t1_d" style="display: none">
          <div class="t4" style="font-size: 1.875rem">{{depList[number].deptName}}</div>
          <div
            class="t3_e_d"
            v-for="(items, index) in depList[number].member[0]"
            :key="items.id+index"
          >
            <div class="d1">
              <img :src="items.avatar">
            </div>
            <div class="d2">
              <div>
                <span class="expert_name pd">{{items.name}}</span>
                <span class="content">{{items.professionalTitle}}</span>
              </div>
              <div>
                <span class="pd">门诊时间:</span>
                <span class="content" v-html="items.visitTimeVal"></span>
              </div>
              <div>
                <span class="pd">医疗特长:</span>
                <span class="content">{{items.specialty}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['color', 'colort', 'colord', 'colorf', 'colorb'],
  name: 'expertInformation',
  data() {
    return {
      setInterval: '',
      systemTime: '',
      list: [],
      page: [],
      pageSize: [],
      num: 0,

      // 放疗动态传递参
      num1: 5,
      n: 0,
      n1: 0,
      n2: 0,
      m: 0,
      // 胸科/肝胆胰科动态传递参
      numXiong: 8,
      x: 0,
      x1: 0,
      g: 0,
      // 头颈科/神经外科
      numTou: 11,
      t: 0,
      t1: 0,
      s: 0,
      //  妇科/鼻咽科
      numFu: 13,
      f: 0,
      f1: 0,
      b: 0,
      // 胃外科/泌尿外科
      numWei: 16,
      w: 0,
      w1: 0,
      wm: 0,
      // 结直肠科/中医科20/核医学科24
      numJie: 17,
      j: 0,
      j1: 0,
      j2: 0,
      jzh: 0,
      // 乳腺科/血液肿瘤科22/.../体检中心29
      numRu: 19,
      r: 0,
      r1: 0,
      r2: 0,
      rxt: 0,
      // 微创介入科15/综合科21/骨与软组织科25/临床营养科27
      numWeiChuang: 15,
      wc: 0,
      wc1: 0,
      wc2: 0,
      wc3: 0,
      wzgl: 0,
      // 黑色素瘤与肉瘤内科18/儿童肿瘤科23/疼痛门诊27
      numHei: 18,
      nh: 0,
      nh0: 0,
      nh1: 0,
      nh2: 0,
      het: 0,
      // 免疫治辽(主<黑色素瘤与肉瘤内科为子>)
      numMian: '免疫治疗',
      depList: [], // list
      length: '', // list长度
      number: 0, // list下标
      pageNewDept: [], // 页数,

      setInter: ''
    }
  },
  watch: {
    n(newValue, oldValue) {
      if (newValue === 1) {
        this.list[5] = null
        this.list[6] = null
        this.page[6] = 1
        this.expert()
        this.num1 = 6
        this.m = 1
      }
    },
    n1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[6] = null
        this.list[7] = null
        this.page[7] = 1
        this.expert()
        this.num1 = 7
        this.m = 2
      }
    },
    n2(newValue, oldValue) {
      if (newValue === 1) {
        this.list[7] = null
        this.list[5] = null
        this.page[5] = 1
        this.expert()
        this.num1 = 5
        this.m = 0
        this.n = 0
        this.n1 = 0
        this.n2 = 0
      }
    },
    // 胸科/肝胆胰科
    x(newValue, oldValue) {
      if (newValue === 1) {
        this.list[8] = null
        this.list[9] = null
        this.page[9] = 1
        this.expert()
        this.numXiong = 9
        this.g = 1
      }
    },
    x1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[9] = null
        this.list[8] = null
        this.page[8] = 1
        this.expert()
        this.numXiong = 8
        this.x = 0
        this.x1 = 0
        this.g = 0
      }
    },
    // 头颈科/神经外科
    t(newValue, oldValue) {
      if (newValue === 1) {
        this.list[11] = null
        this.list[12] = null
        this.page[12] = 1
        this.expert()
        this.numTou = 12
        this.s = 1
      }
    },
    t1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[12] = null
        this.list[11] = null
        this.page[11] = 1
        this.expert()
        this.numTou = 11
        this.s = 0
        this.t = 0
        this.t1 = 0
      }
    },
    // 妇科/鼻咽科
    f(newValue, oldValue) {
      if (newValue === 1) {
        this.list[13] = null
        this.list[10] = null
        this.page[10] = 1
        this.expert()
        this.numFu = 10
        this.b = 1
      }
    },
    f1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[10] = null
        this.list[13] = null
        this.page[13] = 1
        this.expert()
        this.numFu = 13
        this.f = 0
        this.f1 = 0
        this.b = 0
      }
    },
    // 胃外科/泌尿外科
    w(newValue, oldValue) {
      if (newValue === 1) {
        this.list[16] = null
        this.list[14] = null
        this.page[14] = 1
        this.expert()
        this.numWei = 14
        this.wm = 1
      }
    },
    w1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[14] = null
        this.list[16] = null
        this.page[16] = 1
        this.expert()
        this.numWei = 16
        this.wm = 0
        this.w = 0
        this.w1 = 0
      }
    },
    // 结直肠科/中医科20/核医学科24
    j(newValue, oldValue) {
      if (newValue === 1) {
        this.list[17] = null
        this.list[20] = null
        this.page[20] = 1
        this.expert()
        this.numJie = 20
        this.jzh = 1
      }
    },
    j1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[20] = null
        this.list[24] = null
        this.page[24] = 1
        this.expert()
        this.numJie = 24
        this.jzh = 2
      }
    },
    j2(newValue, oldValue) {
      if (newValue === 1) {
        this.list[24] = null
        this.list[17] = null
        this.page[17] = 1
        this.expert()
        this.numJie = 17
        this.jzh = 0
        this.j = 0
        this.j1 = 0
        this.j2 = 0
      }
    },
    // 乳腺科/血液肿瘤科/.../体检中心
    r(newValue, oldValue) {
      if (newValue === 1) {
        this.list[19] = null
        this.list[22] = null
        this.page[22] = 1
        this.expert()
        this.numRu = 22
        this.rxt = 1
      }
    },
    r1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[22] = null
        this.list[28] = null
        this.page[28] = 1
        this.expert()
        this.numRu = 28
        this.rxt = 2
      }
    },
    r2(newValue, oldValue) {
      if (newValue === 1) {
        this.list[28] = null
        this.list[19] = null
        this.page[19] = 1
        this.expert()
        this.numRu = 19
        this.rxt = 0
        this.r = 0
        this.r1 = 0
        this.r2 = 0
      }
    },
    // 微创介入科15/综合科21/骨与软组织科25/临床营养科27
    wc(newValue, oldValue) {
      if (newValue === 1) {
        this.list[15] = null
        this.list[21] = null
        this.page[21] = 1
        this.expert()
        this.numWeiChuang = 21
        this.wzgl = 1
      }
    },
    wc1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[21] = null
        this.list[25] = null
        this.page[25] = 1
        this.expert()
        this.numWeiChuang = 25
        this.wzgl = 2
      }
    },
    wc2(newValue, oldValue) {
      if (newValue === 1) {
        this.list[25] = null
        this.list[27] = null
        this.page[27] = 1
        this.expert()
        this.numWeiChuang = 27
        this.wzgl = 3
      }
    },
    wc3(newValue, oldValue) {
      if (newValue === 1) {
        this.list[27] = null
        this.list[15] = null
        this.page[15] = 1
        this.expert()
        this.numWeiChuang = 15
        this.wzgl = 0
        this.wc = 0
        this.wc1 = 0
        this.wc2 = 0
        this.wc3 = 0
      }
    },
    // 黑色素瘤与肉瘤内科18/儿童肿瘤科23/疼痛门诊26
    nh(newValue, oldValue) {
      if (newValue === 1) {
        this.list[18] = null
        this.list[29] = null
        this.page[29] = 1
        this.expert()
        this.numMian = ''
        this.numHei = 29
        this.het = 1
      }
    },
    nh0(newValue, oldValue) {
      if (newValue === 1) {
        this.list[29] = null
        this.list[23] = null
        this.page[23] = 1
        this.expert()
        this.numHei = 23
        this.het = 2
      }
    },
    nh1(newValue, oldValue) {
      if (newValue === 1) {
        this.list[23] = null
        this.list[26] = null
        this.page[26] = 1
        this.expert()
        this.numHei = 26
        this.het = 3
      }
    },
    nh2(newValue, oldValue) {
      if (newValue === 1) {
        document.getElementById('oldDept').style.display = 'none'
        document.getElementById('newDept').style.display = 'block'
        this.setInter = setInterval(this.checkPage2, 10000)
        this.het = 0
        this.nh = 0
        this.nh0 = 0
        this.nh1 = 0
        // this.nh2 = 0
      }
    },
    list(newValue, oldValue) {
      // 科室标题颜色
      let departmentColorTemp = localStorage.getItem('departmentColor')
      if (departmentColorTemp !== null) {
        setTimeout(() => {
          document.getElementById('n1').style.color = departmentColorTemp
          document.getElementById('f1').style.color = departmentColorTemp
          let n = document.querySelectorAll('.t4')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = departmentColorTemp
          }
        }, 50)
      } else {
        setTimeout(() => {
          document.getElementById('n1').style.color = '#fff'
          document.getElementById('f1').style.color = '#fff'
          let n = document.querySelectorAll('.t4')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = '#fff'
          }
        }, 50)
      }
      // 专家信息字体颜色
      let fontDivColorTemp = localStorage.getItem('fontDivColor')
      if (fontDivColorTemp !== null) {
        setTimeout(() => {
          let n = document.querySelectorAll('.t3_e_d')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = fontDivColorTemp
          }
        }, 50)
      } else {
        setTimeout(() => {
          let n = document.querySelectorAll('.t3_e_d')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = '#fff'
          }
        }, 50)
      }
    },
    // 边框
    colorb(newColor, oldColor) {
      let n = document.querySelectorAll('.t1')
      for (let i = 0; i < n.length; i++) {
        // n[i].style.borderRight = '2px solid' + newColor.hex
      }
    },
    // 专家信息字体颜色
    color(newColor, oldColor) {
      setTimeout(() => {
        let n = document.querySelectorAll('.t3_e_d')
        for (let i = 0; i < n.length; i++) {
          n[i].style.color = newColor.hex
        }
      }, 100)
    },
    // 标题背景颜色
    colort(newColor, oldColor) {
      document.querySelector('.top_e').style.backgroundColor = newColor.hex
    },
    // 标题字体颜色
    colorf(newColor, oldColor) {
      document.querySelector('.title_e').style.color = newColor.hex
    },
    // 科室标题字体颜色
    colord(newColor, oldColor) {
      setTimeout(() => {
        document.getElementById('n1').style.color = newColor.hex
        document.getElementById('f1').style.color = newColor.hex
        let n = document.querySelectorAll('.t4')
        for (let i = 0; i < n.length; i++) {
          n[i].style.color = newColor.hex
        }
      }, 100)
    },
    length(newValue, oldValue) {
      for (let i = 0; i < newValue; i++) {
        this.pageNewDept.push(1)
      }
      this.expertNewDept()
    }
  },
  components: {},
  mounted() {
    let _this = this
    // 初始原有科室化分页参数
    _this.$nextTick(function () {
      for (let i = 0; i < 30 + 1; i++) {
        _this.page.push(1)
      }
      for (let i = 0; i < 30 + 1; i++) {
        if (i < 8) {
          _this.pageSize.push(3)
        } else if (i === 18) {
          _this.pageSize.push(4)
        } else {
          _this.pageSize.push(5)
        }
      }
    })
    _this.$nextTick(function () {
      // 边线颜色
      let expertBorderColorTemp = localStorage.getItem('expertBorderColor')
      if (expertBorderColorTemp === null) {
        setTimeout(() => {
          let n = document.querySelectorAll('.t1')
          for (let i = 0; i < n.length; i++) {
            // n[i].style.borderRight = '2px solid #fff'
          }
        }, 1000)
      } else {
        setTimeout(() => {
          let n = document.querySelectorAll('.t1')
          for (let i = 0; i < n.length; i++) {
            // n[i].style.borderRight = '2px solid' + expertBorderColorTemp
          }
        }, 1000)
      }
      // 专家信息字体颜色
      let fontDivColorTemp = localStorage.getItem('fontDivColor')
      if (fontDivColorTemp === null) {
        setTimeout(() => {
          let n = document.querySelectorAll('.t3_e_d')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = '#fff'
          }
        }, 350)
      } else {
        setTimeout(() => {
          let n = document.querySelectorAll('.t3_e_d')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = fontDivColorTemp
          }
        }, 350)
      }
      // 科室标题字体颜色
      let departmentColorTemp = localStorage.getItem('departmentColor')
      if (departmentColorTemp === null) {
        setTimeout(() => {
          document.getElementById('n1').style.color = '#fff'
          document.getElementById('f1').style.color = '#fff'
          let n = document.querySelectorAll('.t4')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = '#fff'
          }
        }, 350)
      } else {
        setTimeout(() => {
          document.getElementById('n1').style.color = departmentColorTemp
          document.getElementById('f1').style.color = departmentColorTemp
          let n = document.querySelectorAll('.t4')
          for (let i = 0; i < n.length; i++) {
            n[i].style.color = departmentColorTemp
          }
        }, 350)
      }
      // 标题背景颜色
      let titleDivColorTemp = localStorage.getItem('titleDivColor')
      if (titleDivColorTemp === null) {
        setTimeout(() => {
          document.querySelector('.top_e').style.backgroundColor = 'rgb(105, 101, 101)'
        }, 500)
      } else {
        setTimeout(() => {
          document.querySelector('.top_e').style.backgroundColor = titleDivColorTemp
        }, 500)
      }
      // 标题字体颜色
      let titleFontColorTemp = localStorage.getItem('titleFontColor')
      if (titleFontColorTemp === null) {
        setTimeout(() => {
          document.querySelector('.title_e').style.color = 'blue'
        }, 800)
      } else {
        setTimeout(() => {
          document.querySelector('.title_e').style.color = titleFontColorTemp
        }, 800)
      }
    })
    _this.$nextTick(function () {
      let _this = this
      setInterval(_this.checkPage, 10000)
      _this.count()
      setTimeout(() => {
        _this.expert()
      }, 200)
    })
  },
  methods: {
    // 动态改变新增科室分页
    checkPage2: function () {
      let _this = this
      if (this.nh2 === 1) {
        ++_this.pageNewDept[_this.number]
        if (_this.depList[_this.number].num % 5 !== 0) {
          let count = (_this.depList[_this.number].num / 5) + 1
          if (_this.pageNewDept[_this.number] > count) {
            _this.pageNewDept[_this.number] = 1
            _this.number++
            if (_this.number > _this.length - 1) {
              clearInterval(_this.setInter)
              _this.number = 0
              let ddpt = []
              for (let i = 0; i < this.length; i++) {
                ddpt.push(1)
              }
              this.pageNewDept = ddpt
              this.expertNewDept()
              document.getElementById('oldDept').style.display = 'block'
              document.getElementById('newDept').style.display = 'none'
              this.list[26] = null
              this.list[18] = null
              this.page[18] = 1
              this.numMian = '免疫治疗'
              this.expert()
              this.numHei = 18
              this.het = 0
              this.nh = 0
              this.nh0 = 0
              this.nh1 = 0
              this.nh2 = 0
            }
          }
        } else {
          let count = _this.depList[_this.number].num / 5
          if (_this.pageNewDept[_this.number] > count) {
            _this.pageNewDept[_this.number] = 1
            _this.number++
            if (_this.number > _this.length - 1) {
              clearInterval(_this.setInter)
              _this.number = 0
              let ddpt = []
              for (let i = 0; i < this.length; i++) {
                ddpt.push(1)
              }
              this.pageNewDept = ddpt
              this.expertNewDept()
              document.getElementById('oldDept').style.display = 'block'
              document.getElementById('newDept').style.display = 'none'
              this.list[26] = null
              this.list[18] = null
              this.page[18] = 1
              this.numMian = '免疫治疗'
              this.expert()
              this.numHei = 18
              this.het = 0
              this.nh = 0
              this.nh0 = 0
              this.nh1 = 0
              this.nh2 = 0
            }
          }
        }
        _this.expertNewDept()
      }
    },
    // 新增科室总条数
    count: function () {
      let _this = this
      axios.get('http://' + localStorage.getItem('applocation') + ':' + localStorage.getItem('port') + '/mobile/countExpert', {
        params: {}
      }).then(function (response) {
        _this.length = response.data
      })
    },
    // 获取新增科室数据
    expertNewDept: function () {
      let _this = this
      axios.get('http://' + localStorage.getItem('applocation') + ':' + localStorage.getItem('port') + '/mobile/newAddDepartment', {
        params: {
          page: JSON.stringify(_this.pageNewDept)
        }
      })
        .then(function (response) {
          console.log(response.data)
          _this.depList = response.data.departmentNewList
          for (const index in _this.depList) {
            for (const i in _this.depList[index].member[0]) {
              _this.depList[index].member[0][i].avatar = 'http://' + localStorage.getItem('applocation') + ':' + localStorage.getItem('port') + _this.depList[index].member[0][i].avatar
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 获取原有科室数据
    expert: function () {
      let _this = this
      axios.get('http://' + localStorage.getItem('applocation') + ':' + localStorage.getItem('port') + '/mobile/listexpert', {
        params: {
          page: JSON.stringify(_this.page),
          pageSize: JSON.stringify(_this.pageSize)
        }
      })
        .then(function (response) {
          _this.list = response.data.listAll
          for (const index in _this.list) {
            for (const i in _this.list[index].member[0]) {
              _this.list[index].member[0][i].avatar = 'http://' + localStorage.getItem('applocation') + ':' + localStorage.getItem('port') + _this.list[index].member[0][i].avatar
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 动态改变分页参数
    checkPage: function () {
      let _this = this
      for (let p = 0; p < _this.page.length; p++) { // 页数递增
        _this.page[p]++
        if (_this.list[p].num % _this.pageSize[p] !== 0) {
          let count = (_this.list[p].num / _this.pageSize[p]) + 1
          if (_this.page[p] > count) {
            _this.page[p] = 1
            // 盆腔肿瘤放疗5/消化道肿瘤放疗6/淋巴瘤放疗7 更换list索引数据
            if (p === 5) {
              this.n = 1
            }
            if (this.m === 1) {
              if (p === 6) {
                this.n1 = 1
              }
            }
            if (this.m === 2) {
              if (p === 7) {
                this.n2 = 1
              }
            }
            // 胸科/肝胆胰科
            if (p === 8) {
              this.x = 1
            }
            if (this.g === 1) {
              if (p === 9) {
                this.x1 = 1
              }
            }
            // 头颈科/神经外科
            if (p === 11) {
              this.t = 1
            }
            if (this.s === 1) {
              if (p === 12) {
                this.t1 = 1
              }
            }
            // 妇科/鼻咽科
            if (p === 13) {
              this.f = 1
            }
            if (this.b === 1) {
              if (p === 10) {
                this.f1 = 1
              }
            }
            // 胃外科/泌尿外科
            if (p === 16) {
              this.w = 1
            }
            if (this.wm === 1) {
              if (p === 14) {
                this.w1 = 1
              }
            }
            // 结直肠科/中医科20/核医学科24
            if (p === 17) {
              this.j = 1
            }
            if (this.jzh === 1) {
              if (p === 20) {
                this.j1 = 1
              }
            }
            if (this.jzh === 2) {
              if (p === 24) {
                this.j2 = 1
              }
            }
            // 乳腺科/血液肿瘤科/.../体检中心
            if (p === 19) {
              this.r = 1
            }
            if (this.rxt === 1) {
              if (p === 22) {
                this.r1 = 1
              }
            }
            if (this.rxt === 2) {
              if (p === 28) {
                this.r2 = 1
              }
            }
            // 微创介入科15/综合科21/骨与软组织科25/临床营养科27
            if (p === 15) {
              this.wc = 1
            }
            if (this.wzgl === 1) {
              if (p === 21) {
                this.wc1 = 1
              }
            }
            if (this.wzgl === 2) {
              if (p === 25) {
                this.wc2 = 1
              }
            }
            if (this.wzgl === 3) {
              if (p === 27) {
                this.wc3 = 1
              }
            }
            // 黑色素瘤与肉瘤内科18/儿童肿瘤科23/疼痛门诊26
            if (p === 18) {
              this.nh = 1
            }
            if (this.het === 1) {
              if (p === 29) {
                this.nh0 = 1
              }
            }
            if (this.het === 2) {
              if (p === 23) {
                this.nh1 = 1
              }
            }
            if (this.het === 3) {
              if (p === 26) {
                this.nh2 = 1
              }
            }
          }
        } else {
          let count = _this.list[p].num / _this.pageSize[p]
          if (_this.page[p] > count) {
            _this.page[p] = 1
            // 盆腔肿瘤放疗5/消化道肿瘤放疗6/淋巴瘤放疗7 更换list索引数据
            if (p === 5) {
              this.n = 1
            }
            if (this.m === 1) {
              if (p === 6) {
                this.n1 = 1
              }
            }
            if (this.m === 2) {
              if (p === 7) {
                this.n2 = 1
              }
            }
            // 胸科/肝胆胰科
            if (p === 8) {
              this.x = 1
            }
            if (this.g === 1) {
              if (p === 9) {
                this.x1 = 1
              }
            }
            // 头颈科/神经外科
            if (p === 11) {
              this.t = 1
            }
            if (this.s === 1) {
              if (p === 12) {
                this.t1 = 1
              }
            }
            // 妇科/鼻咽科
            if (p === 13) {
              this.f = 1
            }
            if (this.b === 1) {
              if (p === 10) {
                this.f1 = 1
              }
            }
            // 胃外科/泌尿外科
            if (p === 16) {
              this.w = 1
            }
            if (this.wm === 1) {
              if (p === 14) {
                this.w1 = 1
              }
            }
            // 结直肠科/中医科20/核医学科24
            if (p === 17) {
              this.j = 1
            }
            if (this.jzh === 1) {
              if (p === 20) {
                this.j1 = 1
              }
            }
            if (this.jzh === 2) {
              if (p === 24) {
                this.j2 = 1
              }
            }
            // 乳腺科/血液肿瘤科/.../体检中心
            if (p === 19) {
              this.r = 1
            }
            if (this.rxt === 1) {
              if (p === 22) {
                this.r1 = 1
              }
            }
            if (this.rxt === 2) {
              if (p === 28) {
                this.r2 = 1
              }
            }
            // 微创介入科15/综合科21/骨与软组织科25/临床营养科27
            if (p === 15) {
              this.wc = 1
            }
            if (this.wzgl === 1) {
              if (p === 21) {
                this.wc1 = 1
              }
            }
            if (this.wzgl === 2) {
              if (p === 25) {
                this.wc2 = 1
              }
            }
            if (this.wzgl === 3) {
              if (p === 27) {
                this.wc3 = 1
              }
            }
            // 黑色素瘤与肉瘤内科18/儿童肿瘤科23/疼痛门诊26
            if (p === 18) {
              this.nh = 1
            }
            if (this.het === 1) {
              if (p === 29) {
                this.nh0 = 1
              }
            }
            if (this.het === 2) {
              if (p === 23) {
                this.nh1 = 1
              }
            }
            if (this.het === 3) {
              if (p === 26) {
                this.nh2 = 1
              }
            }
          }
        }
      }
      _this.expert()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  overflow: hidden;
}

#expertInformation {
  /* overflow: hidden; */
  /* height: 96vh; */
  padding: 0 0.2rem;
  width: 100vw;
}
.top_e {
  overflow: hidden;
  display: flex;
  margin: 0 0.2rem;
  height: 10vh;
  max-height: 20vh;
}
.top_e .title_e {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  align-items: center;
  width: auto;
  position: relative;
  width: 100%;
  font-size: 4.5rem /* 48/16 */;
  font-weight: bold;
}
.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
}
.t1 {
  display: flex;
  /* justify-content: center; 垂直居中*/
  align-items: center;
  flex-direction: column;
  flex: 1;
  font-size: 1.875rem /* 30/16 */;
  height: 92vh;
  width: 16.7vw;
}
.t2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem /* 24/16 */;
  width: 100%;
}
.t3 {
  flex: 1;
  width: 100%;
  height: 29vh;
}
.t4 {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.t3_e {
  display: flex;
  flex-direction: column;
}
.t1_d {
  height: 45vh;
  width: 100%;
}
.box {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.1rem;
}
.expert_name {
  height: 100%;
  font-weight: bold;
  font-size: 1.125rem;
  margin-right: 0.8rem;
}
.t1 .t2 .t3 .t3_e_d {
  height: 31% !important;
}
.t3_e_d {
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1rem /* 14/16 */;
  flex: 1;
  height: 19%;
  margin-bottom: 0.1rem;
}
.d1 {
  width: 5rem;
}
.d2 {
  margin-left: 0.5rem;
  width: 100%;
}
img {
  width: 100%;
  height: 6.125rem; /* 130/16 */
}
.pd {
  margin-right: 0.2rem;
}
</style>



<template>
  <div id="maskMap">
    <h1>
      <router-link to="/">maskMap</router-link>
    </h1>
    <div id="container" style="width: 100%; height: 500px"></div>
    <div id="panel"></div>
    <div class="box">
      <div class="box-up">
        <div class="row1">
          <div class="d1">编 号</div>
          <div class="d2">：</div>
          <span class="sp">003</span>
        </div>
        <div class="row1">
          <div class="d1">状 态</div>
          <div class="d2">：</div>正常
          <img :src="normalImg" style="height: 1.25rem">
        </div>
        <div class="row1">
          <div class="d1">金属塑料玻璃</div>
          <div class="d2">：</div>
          <span>
            20kg
            <span style="color: gray">/100kg</span>
          </span>
        </div>
        <div class="row1">
          <div class="d1">纸张纺织物</div>
          <div class="d2">：</div>
          <span>
            10kg
            <span style="color: gray">/100kg</span>
          </span>
        </div>
        <div class="row1">
          <div class="d1">厨 余 垃 圾</div>
          <div class="d2">：</div>
          <span>
            50kg
            <span style="color: gray">/100kg</span>
          </span>
        </div>
        <div class="row1">
          <div class="d1">其 他 垃 圾</div>
          <div class="d2">：</div>
          <span>
            20kg
            <span style="color: gray">/100kg</span>
          </span>
        </div>
      </div>

      <div class="box-bottom">
        <div class="row1">
          <div class="d1">回 收 人</div>
          <div class="d2">：</div>张珊珊
        </div>
        <div class="row1">
          <div class="d1">手机号码</div>
          <div class="d2">：</div>
          <span>18813469542</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import normal from '../../public/images/normal.svg' // 正常图标
import { information } from './InformationWindow.js' // 自定义消息窗体
export default {
  name: 'MaskMap',
  data() {
    return {
      normalImg: normal,
      list: [
        { cord: '001', status: '正常', metal: '20kg', paper: '10kg', kitchenWaste: '50kg', other: '20kg', recyclePersonal: '张珊珊', phone: '18813469542' }
      ]
    }
  },
  mounted() {
    const that = this
    that.$nextTick(function () {
      this.maskMap()
    })
  },
  methods: {
    maskMap() {
      const that = this
      /* eslint-disable */
      let map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 10,
        // center:[116.44923,40.207714],
        center: [113.2468110000, 23.0540310000], // 广州坐标
        /* eslint-disable */
        layers: [
          new AMap.TileLayer.RoadNet({
            zIndex: 16
          }),
          new AMap.TileLayer({
            zIndex: 6,
            opacity: 1,
            // getTileUrl: 'https://t{1,2,3,4}.tianditu.gov.cn/DataServer?T=ter_w&x=[x]&y=[y]&l=[z]'
          })]
      })
      // 比例尺
      const scale = new AMap.Scale({
        visible: true
      })
      //鹰眼
      const overView = new AMap.OverView({
        visible: true
      })
      map.addControl(overView)
      map.addControl(scale)
      new AMap.DistrictSearch({
        extensions: 'all',
        subdistrict: 0
      }).search('广州', function (status, result) {
        // 外多边形坐标数组和内多边形坐标数组
        const outer = [
          new AMap.LngLat(-360, 90, true),
          new AMap.LngLat(-360, -90, true),
          new AMap.LngLat(360, -90, true),
          new AMap.LngLat(360, 90, true),
        ]
        const holes = result.districtList[0].boundaries
        const pathArray = [
          outer
        ]
        pathArray.push.apply(pathArray, holes)
        /* eslint-disable */
        const polygon = new AMap.Polygon({
          pathL: pathArray,
          strokeColor: '#00eeff', // 多边形边线颜色
          strokeWeight: 1, // 轨道线粗细
          fillColor: '#081639', // 遮罩色
          fillOpacity: 1  // 遮罩程度
        })
        polygon.setPath(pathArray)
        map.add(polygon)

        // 定位
        /* eslint-disable */
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(20, 50),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: false,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          extensions: 'all',
        })
        map.addControl(geolocation)
        geolocation.getCurrentPosition()

        for (let i = 0; i < that.list.length; i++) {
          const status = ''
          if (that.list[i].status == '正常') {
            status = that.normalImg
          } else {
            status = that.normalImg
          }
          //实例化信息窗体
          const infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: information(status, that.list[i]),
            offset: new AMap.Pixel(16, -45)
          })
          // 坐标
          const marker = new AMap.Marker({
            map: map,
            position: [113.2468110000 - 1 * 0.02, 23.0540310000 + 5 * 0.05 * i + (1 * 0.05)]
          })
          //鼠标划入marker弹出自定义的信息窗体 map.clearInfoWindow();
          window.AMap.event.addListener(marker, 'mouseover', function () {
            infoWindow.open(map, marker.getPosition())
          })
          //鼠标划出marker弹出自定义的信息窗体 map.clearInfoWindow();
          window.AMap.event.addListener(marker, 'mouseout', function () {
            infoWindow.open(map, marker.getPosition())
            map.clearInfoWindow()
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#maskMap {
  width: 100%;
  height: 100%;
  // background-color: green;
  background-color: #081639;
}
.box {
  width: 200px;
  background-color: #ffffff;
  .box-up {
    padding: 0.2rem 0;
    padding-left: 0.2rem;
    background-color: #c4c4c4;
  }
  .box-bottom {
    background-color: #c4c4c4;
    padding-bottom: 0.2rem;
    margin-top: 0.5rem;
    padding-left: 0.2rem;
  }
}
.row1 {
  width: 100%;
  font-size: 0.875rem;
  padding-top: 0.2rem;
  display: flex;
  flex-direction: row;
  .d1 {
    text-align: left;
    padding-left: 0rem;
    width: 5.625rem;
    color: black;
  }
  span {
    padding-top: 0.2rem;
  }
}
#maskMap /deep/ .amap-container {
  border-radius: 10px;
}
</style>



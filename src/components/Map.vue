<template>
  <div style="width: 100%; height:100%">
    <h1><router-link to="/maskMap">Map</router-link></h1>
    <div id="container" style="width: 100%; height: 500px"></div>
  </div>
</template>
<script>

export default {
  name: 'Map',
  data() {
    return {
      name: 'map',
      adCode: 130000,
      depth: 2,
      /* eslint-disable */
      map: new AMap.Map('container', {
        zoom: 10,
        center: [113.2468110000, 23.0540310000], // 广州坐标
        pitch: 0,
        viewMode: '3D',
        showBuildingBlock: true
      })
    }
  },
  mounted() {
    this.$nextTick(function () {
      // 创建地图
      /* eslint-disable no-undef */
      let adCode = 440100
      let depth = 2
      /* eslint-disable */
      let map = new AMap.Map('container', {
        zoom: 10,
        center: [113.2468110000, 23.0540310000],
        pitch: 0,
        viewMode: '3D',
        showBuildingBlock: true
      })
      // 创建省份图层
      let disProvince
      // function initPro(code, dep) {
      let code = adCode
      let dep = depth
      dep = typeof dep == 'undefined' ? 2 : dep
      adCode = code
      depth = dep

      disProvince && disProvince.setMap(null)

      disProvince = new AMap.DistrictLayer.Province({
        zIndex: 12,
        adcode: [code],
        depth: dep,
        styles: {
          'fill': function (properties) {
            // properties为可用于做样式映射的字段，包含
            // NAME_CHN:中文名称
            // adcode 行政编码
            // adcode_pro 省级
            // adcode_cit 市级
            // citycode 市级城市
            // adcode
            // let adcode = properties.adcode
            return 'rgba(0, 0, 0, 0.4)'
          },
          'province-stroke': 'cornflowerblue',
          'city-stroke': 'white', // 中国地级市边界
          'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
        }
      })
      disProvince.setMap(map)
      // 定位
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        extensions: 'all',
      })
      map.addControl(geolocation)
      geolocation.getCurrentPosition()
      // 坐标
      let lnglats = [
        [113.2468110000, 23.0540310000]
      ]
      for (let i = 0; i < lnglats.length; i++) {
        let marker = new AMap.Marker({
          position: lnglats[i],
          map: map
        })
        marker.content = '我是第' + (i + 1) + '个Marker'
        marker.on('click', this.markerClick())
        marker.emit('click', { target: marker })
      }
      map.setFitView()
      // })
    })
  },
  methods: {
    markerClick() {
      // const infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)})
      // infoWindow.setContent(e.content)
      // infoWindow.open(this.map, e.target.getPosition())
    }

  }
}
</script>
<style lang="less" scoped>
// #container {
//     width: 800px;
//     height: 400px;
//     // margin: 0px;
// }
</style>
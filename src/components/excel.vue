<template>
  <div id>
    <button @click="exportExcel"></button>
    <el-table cell-mouse-enter="#" class="list" :data="listdata" ref="tableData">
      <el-table-column align="center" prop="reportUnit" label="报告单位" width="150"></el-table-column>
      <el-table-column align="center" prop="reportMan" label="上报人" width="100"></el-table-column>
      <el-table-column align="center" prop="happentime" label="发生时间" width="150"></el-table-column>
      <el-table-column align="center" prop="eventPlace" label="发生地点" width="180"></el-table-column>
      <el-table-column align="center" prop="eventPassing" label="事件经过"></el-table-column>
      <el-table-column align="center" prop="eventDetail" label="人员伤亡及设施损坏情况"></el-table-column>
      <el-table-column align="center" prop="eventLevel" label="事故等级" width="120"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import Vue from 'vue'
import { Table, TableColumn } from 'element-ui'
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: '',
  data() {
    return {
      listdata: {}
    }
  },
  methods: {
    exportExcel() {
      /* generate workbook object from table */
      let wb = XLSX.utils.table_to_book(document.querySelector('.list'))
      /* get binary string as output */
      let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheetjs.xlsx')
      } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
      return wbout
    }
  }
}
</script>
<style lang="less" scoped>
</style>


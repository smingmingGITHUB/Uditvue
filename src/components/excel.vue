<template>
  <div id>
    <el-button type="success" @click="exportExcel">导出Excel</el-button>
    <el-table cell-mouse-enter="#" class="list" :data="listdata" ref="tableData">
      <el-table-column align="center" prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column align="center" prop="sex" label="sex" width="100"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import Vue from 'vue'
import { Table, TableColumn, Button } from 'element-ui'
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Button.name, Button)

import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: '',
  data() {
    return {
      listdata: [
        {name: '贾宝玉', sex: '男'},
        {name: '林黛玉', sex: '女'},
        {name: '薛宝钗', sex: '女'}
      ]
    }
  },
  /* eslint-disable */
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


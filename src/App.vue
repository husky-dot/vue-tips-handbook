<template>
  <div class="main">
    <p>
      <el-radio-group v-model="type">
        <el-radio-button label="pie" />
        <el-radio-button label="bar" />
        <el-radio-button label="column" />
      </el-radio-group>
    </p>
    <div>
      <component :is="`${type}-chart`" :width="width" :height="height" />
    </div>
  </div>
</template>

<script>
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import ColumnChart from './components/ColumnChart.vue'

export default {
  components: {
    PieChart,
    BarChart,
    ColumnChart,
  },
  data() {
    return {
      type: 'pie',
      width: 1000,
      height: 100,
    }
  },
}
</script>

<style>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 400px;
}
</style>

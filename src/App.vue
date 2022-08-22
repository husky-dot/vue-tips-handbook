<template>
  <div>
    <MenuItem v-for="item in menuItems" @click="item.action">
      {{ item.text }}
    </MenuItem>
  </div>
</template>

<script setup>
import MenuItem from './components/MenuItem.vue'

const onCreate = () => {
  // todo
}
const onDelete = () => {
  // todo
}
const onEdit = () => {
  // todo
}
const onSearch = () => {
  // todo
}

const menuItems = [
  {
    text: '新增',
    action: onCreate,
  },
  {
    text: '删除',
    action: onDelete,
  },
  {
    text: '修改',
    action: onEdit,
  },
  {
    text: '查询',
    action: onSearch,
  },
]
</script>

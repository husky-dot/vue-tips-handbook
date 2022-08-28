<template>
  <div class="user">
    <div class="list">
      <SmallComponent label="姓名：" content="大冶" />
      <SmallComponent label="年龄：" content="40" />
    </div>
  </div>
</template>

<script>
const SmallComponent = {
  props: ['label', 'content'],
  template: `
      <div class="list__item">
        <div class="list__left">
          <div class="list__label">{{label}}：</div>
          <div class="list__content">{{ content }}</div>
        </div>
        <div class="list__right">
          <i class="list__icon">添加</i>
        </div>
      </div>
  `,
}

export default {
  components: {
    SmallComponent,
  },
}
</script>

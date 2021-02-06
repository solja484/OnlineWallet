<template>
  <div>
    <Menu active="none"></Menu>
    <Header active="outcomes" transactions="upcoming"></Header>
  </div>
</template>

<script>

import Menu from '@/components/Basic/Menu.vue'
import Header from '@/components/Basic/Header.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    Header
  }
}
</script>

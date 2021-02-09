<template>
  <div>
    <Menu active="none"></Menu>
    <Header active="outcomes" transactions="upcoming"></Header>
    <div class="justify-content-between align-top">
    <InfoField page="outcomes"></InfoField>
    <Transactions ></Transactions></div>
  </div>
</template>

<script>

import Menu from '@/components/Basic/Menu.vue'
import Header from '@/components/Basic/Header.vue'
import OutcomesBlock from '@/components/Nested/OutcomesBlock.vue'
import Transactions from '@/components/Basic/Transactions.vue'
import InfoField from "@/components/Basic/InfoField";

export default {
  name: 'Home',
  components: {
    InfoField,
    Menu,
    Header,
    OutcomesBlock,
    Transactions
  }
}
</script>



<script lang="ts" setup>
// Variables
const openFilters = ref(false);
</script>

<template>
  <button
    class="grid place-items-center p-3 rounded-full bg-white cursor-pointer shadow outline-none"
    @click="openFilters = !openFilters"
  >
    <Icon
      name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
      class="text-2xl"
    />
  </button>
  <BaseSlideover
    v-model="openFilters"
    title="Filtros"
    subtitle="Visualize e gerêncie seus filtros."
  >
    teste
  </BaseSlideover>
</template>

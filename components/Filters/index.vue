<script lang="ts" setup>
// Components
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

// Stores
import { useEquipmentsStore } from "~/stores/equipments";
const useEquipments = useEquipmentsStore();

const { models, filters } = storeToRefs(useEquipments);

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
    <!-- Filtro por módulos -->
    <Multiselect
      v-model="filters.models"
      :options="models.map(m => m.name)"
      placeholder="Modelos"
      :multiple="true"
      :clear-on-select="false"
      :allow-empty="true"
    />
  </BaseSlideover>
</template>

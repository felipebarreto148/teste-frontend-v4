<script lang="ts" setup>
// Types
import type { IEquipmentsWithMoreInfos } from "~/stores/equipments/equipments.schema";

// Stores
import { useEquipmentsStore } from "~/stores/equipments";
const useEquipments = useEquipmentsStore();

const { equipmentsWithMoreInfos } = storeToRefs(useEquipments);

// Variables
const detailsModalOpened = ref(false);
const selectedEquipment: Ref<IEquipmentsWithMoreInfos | null> = ref(null);

// Functions
async function onMapReady() {
  await Promise.all([
    useEquipments.getStates(),
    useEquipments.getEquipments(),
    useEquipments.getEquipmentsModels(),
    useEquipments.getEquipmentStateHistory(),
    useEquipments.getEquipmentsPositionHistory(),
  ]);
}

function openDetailsModal(equipment: IEquipmentsWithMoreInfos) {
  selectedEquipment.value = equipment;
  detailsModalOpened.value = true;
}
</script>

<template>
  <main class="size-full relative flex flex-col">
    <header class="flex items-center justify-between gap-3 p-3 z-999999">
      <Searcher />
      <Filters />
    </header>
    <LMap
      class="size-full absolute top-0 left-0"
      :zoom="6"
      :center="[-19.126536, -45.947756]"
      :use-global-leaflet="false"
      :zoom-control="false"
      @ready="onMapReady"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <!-- Controla o zoom -->
      <LControlZoom position="bottomright" />

      <!-- Renderiza os equipamentos no mapa -->
      <LMarker
        v-for="(equipment, index) in equipmentsWithMoreInfos"
        :key="index"
        :lat-lng="[equipment?.last_position?.lat, equipment?.last_position?.lon]"
        @click="openDetailsModal(equipment)"
      />
    </LMap>
    <BaseSlideover
      v-model="detailsModalOpened"
      :title="selectedEquipment?.name || 'Equipamento'"
      subtitle="Visualize o histórico e o trajeto percorrido pelo equipamento."
      @close="detailsModalOpened = !detailsModalOpened"
    />
  </main>
</template>

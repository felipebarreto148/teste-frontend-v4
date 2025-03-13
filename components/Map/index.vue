<script lang="ts" setup>
// Types
import type { IEquipmentsWithMoreInfos } from "~/stores/equipments/equipments.schema";

// Stores
import { useEquipmentsStore } from "~/stores/equipments";
const useEquipments = useEquipmentsStore();

const { equipmentsWithMoreInfos, selectedEquipment } =
  storeToRefs(useEquipments);

// Variables
const detailsModalOpened = ref(false);

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

function closeDetailsModal() {
  selectedEquipment.value = null;
  detailsModalOpened.value = false;
}
</script>

<template>
  <LMap
    ref="map"
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
    @close="closeDetailsModal"
  >
    <EquipmentDetails />
  </BaseSlideover>
</template>

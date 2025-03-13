<script lang="ts" setup>
// Stores
import { useEquipmentsStore } from "~/stores/equipments";
const useEquipments = useEquipmentsStore();

const { positionsByEquipmentId } = storeToRefs(useEquipments);

// Variables
const headers = [
  { name: "lat", label: "Latitude" },
  { name: "lon", label: "Longitude" },
  { name: "date", label: "Data" }
]

// Functions
</script>

<template>
  <section class="flex flex-col gap-2">
    <h3 class="font-semibold text-gray-800 text-base mb-3">
      Histórico de posições
    </h3>
    <BaseTable :headers :data="positionsByEquipmentId">
      <template #date="{ row }">
        {{ $moment(row.date).format("DD/MM/YYYY HH:ss") }}
      </template>
    </BaseTable>
  </section>
</template>

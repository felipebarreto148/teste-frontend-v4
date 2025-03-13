<script lang="ts" setup>
// Functions
async function onMapReady() {}
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
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="false"
      :zoom-control="false"
      @ready="onMapReady"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
      <!-- Controla o zoom -->
      <LControlZoom position="bottomright" />
    </LMap>
  </main>
</template>
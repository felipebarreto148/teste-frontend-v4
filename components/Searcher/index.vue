<script lang="ts" setup>
async function handleInput() {}
</script>

<template>
  <section class="flex items-center gap-3 w-full h-fit bg-white shadow rounded-md px-3 py-2 max-w-[350px]">
    <Icon name="streamline:magnifying-glass" />
    <input type="text" class="size-full outline-none" placeholder="Pesquise por equipamentos aqui..." @input="handleInput">
  </section>
</template>
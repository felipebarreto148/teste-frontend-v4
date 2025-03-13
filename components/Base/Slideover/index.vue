<script lang="ts" setup>
// Types
import type { IProps } from "./slideover.schema";

// Composables
const model = defineModel({ type: Boolean, default: false });
defineProps<IProps>();
</script>

<template>
  <transition name="fade" mode="out-in" appear>
    <teleport v-if="model" to="body">
      <aside
        class="absolute flex flex-col right-0 top-0 size-full lg:w-1/3 z-99999999 bg-white shadow border-l border-l-gray-300"
      >
        <header
          class="flex items-center justify-between px-4 py-5 border-b border-gray-200"
        >
          <section class="flex flex-col gap-1">
            <p class="font-semibold text-gray-800 text-base">{{ title }}</p>
            <p v-if="subtitle" class="font-normal text-sm text-gray-500">
              {{ subtitle }}
            </p>
          </section>
          <Icon
            name="streamline:delete-1-solid"
            class="cursor-pointer"
            @click="model = false"
          />
        </header>
        <section class="px-4 py-5">
          <slot />
        </section>
      </aside>
    </teleport>
  </transition>
</template>

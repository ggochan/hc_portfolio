<script setup lang="ts">
defineProps<{
  options: readonly string[]
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectOption = (option: string) => {
  emit('update:modelValue', option)
}
</script>
<template>
  <div
    class="absolute -top-15 -left-7 z-10 min-w-20 bg-white tracking-wider shadow-[4px_4px_4px_rgba(0,0,0,0.15)]"
  >
    <button
      v-for="option in options"
      :key="option"
      @click="selectOption(option)"
      class="text-gray hover:bg-surface-input w-full px-2 py-1.5 text-left text-xs transition-colors"
      :class="{ 'text-primary font-medium': modelValue === option }"
    >
      {{ option }}
    </button>
  </div>
</template>
<style lang="scss" scoped></style>

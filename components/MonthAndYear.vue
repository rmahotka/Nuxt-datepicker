<script setup lang="ts">
const props = defineProps({
  date: {
    type: Number,
    require: true,
    default: new Date(),
  },
  location: {
    type: String,
    require: true,
  },
});

const newMonthAndYear: object = computed(() => {
  let newDate: Date = new Date(props.date);
  let objDate: { month: string; year: number } = {
    month: newDate.toLocaleString(props.location, { month: 'long' }),
    year: newDate.getFullYear(),
  };
  return objDate;
});
</script>

<template>
  <div class="block">
    <span>{{ newMonthAndYear.month }}</span>
    <span>{{ newMonthAndYear.year }}</span>
  </div>
</template>

<style scoped>
.block {
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 7px;
}
</style>

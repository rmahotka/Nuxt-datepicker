<script setup>
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

const newMonthAndYear = computed(() => {
  let newDate = new Date(props.date);
  let objDate = {
    month: newDate.toLocaleString(props.location, { month: "long" }),
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

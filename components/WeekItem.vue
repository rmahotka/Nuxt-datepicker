<script setup>
import { getWeekName } from "@/helpers";

defineProps({
  date: {
    type: Number,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
});

const dateItems = [
  "05/06/2024",
  "05/07/2024",
  "05/08/2024",
  "05/09/2024",
  "05/10/2024",
  "05/11/2024",
  "05/12/2024",
];
</script>

<template>
  <div class="week-block">
    <div v-for="(date, index) of dateItems" :key="index">
      <span>{{ getWeekName(date, location) }}</span>
    </div>
  </div>
</template>

<style scoped>
.week-block {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 7px;
}
</style>

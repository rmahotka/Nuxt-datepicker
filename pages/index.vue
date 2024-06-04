<!-- <script setup>
import Calendar from "@/components/Calendar.vue";
import InputItem from "@/components/UI/InputItem.vue";

import { computed, ref } from "vue";

const visible = ref(false);
const inputDate = ref("");
const location = ref(window.clientInformation.language);
const objDate = ref({});

const date = new Date();

const useVisible = () => {
  visible.value = true;
};

const dayClick = (day) => {
  const selectedDate = `${day.d}-${
    day.m + 1 < 10 ? "0" + Number(day.m + 1) : day.m + 1
  }-${day.y}`;
  inputDate.value = selectedDate;
  objDate.value = day;
  visible.value = false;
};

const isSelected = computed(() => {
  return (day) => {
    if (
      objDate.value &&
      objDate.value.d === day.d &&
      objDate.value.m === day.m &&
      objDate.value.y === day.y
    ) {
      return true;
    }
    return false;
  };
});
</script>

<template>
  <div class="container">
    <div class="block">
      <InputItem @click="useVisible" v-model="inputDate" />
      <Transition>
        <div class="block-calendar" v-if="visible">
          <Calendar
            :date="date"
            :location="location"
            :isSelected="isSelected"
            @get-day="dayClick"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.block {
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.block-calendar {
  margin-top: 3px;
  max-width: 240px;
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  top: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style> -->

<template>
  <div>hello World</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

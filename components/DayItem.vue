<script setup lang="ts">
import { IGetDay } from '~/types/';

const { getLastDayOfMonth } = useDate();

const props = defineProps({
  date: {
    type: Number,
    require: true,
    default: new Date().getTime(),
  },
  isSelected: {
    type: Boolean,
  },
});

const newMounthCountDay = computed((): object => {
  let date: Date = new Date(props.date);
  const countDays: number = getLastDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );
  const lastMonth: number = getLastDayOfMonth(
    date.getFullYear(),
    date.getMonth() - 1
  );

  date.setDate(1);
  const firstOfDayWeek: number = date.getDay();

  let newMonth: object[] = [];
  let weekDays: object[] = [];

  if (firstOfDayWeek) {
    for (let i = lastMonth; 0 < i; i--) {
      if (weekDays.length + 1 < firstOfDayWeek) {
        weekDays.push({ d: i, m: date.getMonth() - 1, y: date.getFullYear() });
      }
    }
  }

  for (let i = 1; i <= countDays; i++) {
    if (weekDays.length >= 7) {
      newMonth.push(weekDays);
      weekDays = [];
    }
    weekDays.push({ d: i, m: date.getMonth(), y: date.getFullYear() });

    if (i === countDays) {
      for (let i = 1; i < 7; i++) {
        if (weekDays.length < 7) {
          weekDays.push({
            d: i,
            m: date.getMonth() + 1,
            y: date.getFullYear(),
          });
        }
      }
      newMonth.push(weekDays);
    }
  }
  return newMonth;
});

const todaysDay = (day: { d: number; m: number; y: number }): boolean => {
  let date = new Date();
  let dayNow: number = date.getDate();
  let monthNow: number = date.getMonth();
  let yearNow: number = date.getFullYear();
  if (dayNow === day.d && monthNow === day.m && yearNow === day.y) {
    return true;
  }

  return false;
};

const getDate = (day) => {
  emit('getDate', day);
};

const emit = defineEmits(['getDate']);
</script>

<template>
  <div class="number-block">
    <div
      v-for="(week, index) in newMounthCountDay"
      :key="index"
      class="number-item"
    >
      <span
        v-for="(day, index) in week"
        :key="index"
        @click="getDate(day)"
        class="number-item__span"
        :style="{
          background: todaysDay(day) ? 'rgb(237 237 237)' : '',
          border: props.isSelected(day) ? '1px solid' : '',
        }"
      >
        {{ day.d }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.number-block {
  display: flex;
  flex-direction: column;
}

.number-item {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
}

.number-item__span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 26px;
  padding: 4px 0;
  border-radius: 50%;
  cursor: pointer;
}

.number-item__span:hover {
  transition: 0.15s;
  background-color: #e9cfcf;
}

.dayNow {
  background-color: #ececec;
}
</style>

function useDate(): { getLastDayOfMonth: any; } { throw new Error("Function not
implemented."); } function useDate(): { getLastDayOfMonth: any; } { throw new
Error("Function not implemented."); } function defineProps(arg0: { date: { type:
NumberConstructor; require: boolean; default: number; }; isSelected: { type:
BooleanConstructor; }; }) { throw new Error("Function not implemented."); }
function defineEmits(arg0: string[]) { throw new Error("Function not
implemented."); }

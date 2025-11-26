/**
 * Calendario.vue
 * @component
 * @description Componente de calendario interactivo para agendar citas.
 * 
 * ## Funcionalidad
 * - Navegación entre meses (prevMonth, nextMonth).
 * - Selección de un día específico (selectDay).
 * - Resalta el día actual y el día seleccionado.
 * 
 * ## Uso
 * ```vue
 * <Calendario @day-selected="handleDaySelected" />
 * ```
 * 
 * @emits day-selected {Date} - Evento emitido cuando el usuario selecciona un día.
 */

<template>
  <div class="calendario">
    <!-- Barra de navegación -->
    <div class="calendario-nav">
      <button @click="prevMonth">←</button>
      <span>{{ monthName }} {{ currentYear }}</span>
      <button @click="nextMonth">→</button>
    </div>

    <!-- Encabezados de días -->
    <div class="calendario-weekdays">
      <span v-for="day in weekdays" :key="day" class="weekday">
        {{ day }}
      </span>
    </div>

    <!-- Celdas de días -->
    <div class="calendario-grid">
      <div
        v-for="day in daysInMonth"
        :key="day.date"
        class="calendario-cell"
        :class="{ today: isToday(day.date), selected: isSelected(day.date) }"
        @click="selectDay(day.date)"
      >
        {{ day.number }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";

  // Estado actual
  const today = new Date();
  const currentMonth = ref(today.getMonth());
  const currentYear = ref(today.getFullYear());
  const selectedDate = ref(null);

  // Nombres de días y meses
  const weekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const months = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  // Computed para nombre del mes
  const monthName = computed(() => months[currentMonth.value]);

  // Generar días del mes
  const daysInMonth = computed(() => {
    const days = [];
    const firstDay = new Date(currentYear.value, currentMonth.value, 1);
    const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        number: i,
        date: new Date(currentYear.value, currentMonth.value, i)
      });
    }
    return days;
  });

  // Funciones
  const prevMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  };

  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  };

  const isToday = (date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date) => {
    return selectedDate.value &&
      date.toDateString() === selectedDate.value.toDateString();
  };

  const selectDay = (date) => {
    selectedDate.value = date;
  };
</script>

<style scoped>
.calendario {
  width: 100%;
  max-width: 380px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 14px;
  padding: 1.2rem;
  font-family: sans-serif;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

.calendario-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.calendario-nav button {
  background: #0288d1;
  border: none;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.calendario-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #555;
}

.calendario-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
}

.calendario-cell {
  padding: 0.6rem 0;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s ease;
}

.calendario-cell:hover {
  background: #e0f7fa;
}

.calendario-cell.today {
  background: #b2ebf2;
  font-weight: bold;
}

.calendario-cell.selected {
  background: #0288d1;
  color: white;
  font-weight: bold;
}
</style>

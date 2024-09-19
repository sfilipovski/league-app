<template>
    <div class="matchday-selector">
      <label for="matchday-select">Select Matchday:</label>
      <select id="matchday-select" v-model="leagueStore.currentMatchday">
        <option v-for="matchday in leagueStore.totalMatchdays" :key="matchday" :value="matchday">
          Matchday {{ matchday }}
        </option>
      </select>
    </div>
</template>
  
<script setup>
import { useLeagueStore } from '@/stores/league'
  
const leagueStore = useLeagueStore()
</script>
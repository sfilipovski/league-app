<template>
  <div class="card mb-4 shadow" style="width: 20rem;">
    <div class="card-header">
      <h2>Top Scorers</h2>
    </div>
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="player in topScorers" :key="player.id" class="fixture-row">
            <td>{{ player.name }}</td>
            <td>{{ getTeamName(player) }}</td>
            <td>{{ player.goals }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLeagueStore } from '@/stores/league'

const leagueStore = useLeagueStore()

const topScorers = computed(() => leagueStore.topScorers)

function getTeamName(player) {
  const team = leagueStore.teams.find(team => team.players.some(p => p.id === player.id))
  return team ? team.name : 'Unknown Team'
}
</script>
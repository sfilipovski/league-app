<template>
  <div class="card mb-4 shadow" style="width: 40rem;">
    <div class="card-header">
      <h2>League Table</h2>
    </div>
    <div class="card-body">
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>P</th>
            <th>Team</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>PTS</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in sortedTeams" :key="team.id" :class="getRowClass(index)">
            <td>{{ index + 1 }}</td>
            <td>
              <router-link :to="{ name: 'TeamDetail', params: { id: team.id } }">
                {{ team.name }}
                <span v-if="index === 0">🏆</span>
                <span v-else-if="index === 1">🥈</span>
                <span v-else-if="index === 2">🥉</span>
              </router-link>
            </td>
            <td>{{ team.played }}</td>
            <td>{{ team.won }}</td>
            <td>{{ team.drawn }}</td>
            <td>{{ team.lost }}</td>
            <td>{{ team.goalsFor }}</td>
            <td>{{ team.goalsAgainst }}</td>
            <td>{{ team.goalsFor - team.goalsAgainst }}</td>
            <td>{{ team.points }}</td>
            <td>
              <span v-for="(result, resultIndex) in teamForm(team.id)" :key="resultIndex" :class="getFormClass(result)"
                class="form-result">
                {{ result }}
              </span>
            </td>
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
const sortedTeams = computed(() => {
  return [...leagueStore.teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    const goalDiffA = a.goalsFor - a.goalsAgainst
    const goalDiffB = b.goalsFor - b.goalsAgainst
    if (goalDiffB !== goalDiffA) return goalDiffB - goalDiffA
    return b.goalsFor - a.goalsFor
  })
})

const teamForm = (teamId) => leagueStore.teamForm(teamId)

const getFormClass = (result) => {
  switch (result) {
    case 'W': return 'form-win'
    case 'D': return 'form-draw'
    case 'L': return 'form-loss'
    default: return ''
  }
}
const getRowClass = (index) => {
  if (index === 0) {
    return 'table-warning'; // Darker for 1st place
  } else if (index === 1) {
    return 'table-light'; // Slightly lighter for 2nd place
  } else if (index === 2) {
    return 'table-secondary'; // Even lighter for 3rd place
  } else {
    return 'table-row'; // Default for others
  }
}
</script>

<style scoped>
.form-result {
  display: inline-block;
  width: 18px;
  /* Reduced size */
  height: 18px;
  /* Reduced size */
  line-height: 18px;
  /* Reduced line height */
  text-align: center;
  margin-right: 2px;
  font-weight: bold;
  color: white;
  border-radius: 50%;
}

.form-win {
  background-color: green;
}

.form-draw {
  background-color: #FFA500;
}

.form-loss {
  background-color: red;
}

.table-row {
  background-color: #f7f7f7;
  padding: 5px;
  /* Reduced padding */
}

.table-warning {
  background-color: #ffd700;
  /* Gold color for 1st place */
}

.table-secondary {
  background-color: #f0e68c;
  /* Light yellow for 2nd place */
}

.table-light {
  background-color: #d3d3d3;
  /* Light gray for 3rd place */
}

.table th,
.table td {
  padding: 0.5rem;
  /* Reduced padding for table cells */
  font-size: 0.9em;
  /* Reduced font size for table text */
}
</style>

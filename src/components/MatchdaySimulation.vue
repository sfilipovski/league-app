<!-- <template>
  <div class="card mb-4 shadow w-75">
    <div class="card-header">
      <h2>Matchday Results</h2>
      <select id="matchday-select" class="form-select mb-3 w-auto mx-auto" v-model="leagueStore.currentMatchday">
        <option v-for="matchday in leagueStore.totalMatchdays" :key="matchday" :value="matchday">
          Matchday {{ matchday }}
        </option>
      </select>
    </div>
    <div class="card-body">

      <div v-for="fixture in currentFixtures" :key="fixture.id" class="fixture-row mb-2">
        <div class="team-info d-flex justify-content-between align-items-center mb-1">
          <span class="team-name" :class="{ 'font-weight-bold': fixture.homeGoals > fixture.awayGoals }">
            {{ getTeamName(fixture.homeTeam) }} ({{ getTeamStrength(fixture.homeTeam) }})
          </span>
          <span class="score font-weight-bold mx-1" v-if="fixture.simulated">
            {{ fixture.homeGoals }}
            <span class="vs">-</span>
            {{ fixture.awayGoals }}
          </span>
          <span v-if="!fixture.simulated" class="vs">vs</span>
          <span class="team-name text-right" :class="{ 'font-weight-bold': fixture.awayGoals > fixture.homeGoals }">
            {{ getTeamName(fixture.awayTeam) }} ({{ getTeamStrength(fixture.awayTeam) }})
          </span>
        </div>
        <hr />
        <div v-if="fixture.simulated" class="scorers-container d-flex justify-content-between">
          <div class="home-scorers text-left">
            <ul class="list-unstyled">
              <li v-for="scorer in processedHomeScorers(fixture)" :key="scorer.playerId">
                {{ scorer.playerName }} {{ '⚽'.repeat(scorer.goals) }}
              </li>
            </ul>
          </div>
          <div class="away-scorers text-right">
            <ul class="list-unstyled">
              <li v-for="scorer in processedAwayScorers(fixture)" :key="scorer.playerId">
                {{ scorer.playerName }} {{ '⚽'.repeat(scorer.goals) }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="!fixture.simulated" class="text-center">
          <button @click="simulateMatch(fixture.id)" class="btn btn-primary btn-sm custom-button">
            Simulate Match
          </button>
        </div>
      </div>
      <button @click="simulateMatchday" :disabled="allMatchesSimulated" class="btn btn-success btn-sm custom-button">
        Simulate Remaining Matches
      </button>
    </div>
  </div>
</template> -->
<template>
  <div class="card mb-4 shadow w-75">
    <div class="card-header">
      <h2>Matchday Results</h2>
      <select id="matchday-select" class="form-select mb-3 w-auto mx-auto" v-model="leagueStore.currentMatchday">
        <option v-for="matchday in leagueStore.totalMatchdays" :key="matchday" :value="matchday">
          Matchday {{ matchday }}
        </option>
      </select>
    </div>
    <div class="card-body">
      <div v-for="fixture in currentFixtures" :key="fixture.id" class="fixture-row mb-1"> <!-- Reduced margin-bottom -->
        <div class="team-info d-flex justify-content-between align-items-center">
          <span class="team-name" :class="{ 'font-weight-bold': fixture.homeGoals > fixture.awayGoals }">
            {{ getTeamName(fixture.homeTeam) }} ({{ getTeamStrength(fixture.homeTeam) }})
          </span>
          <span class="score font-weight-bold mx-1" v-if="fixture.simulated">
            {{ fixture.homeGoals }}
            <span class="vs">-</span>
            {{ fixture.awayGoals }}
          </span>
          <span v-if="!fixture.simulated" class="vs">vs</span>
          <span class="team-name text-right" :class="{ 'font-weight-bold': fixture.awayGoals > fixture.homeGoals }">
            {{ getTeamName(fixture.awayTeam) }} ({{ getTeamStrength(fixture.awayTeam) }})
          </span>
        </div>
        <hr class="my-1" /> <!-- Reduced vertical space -->
        <div v-if="fixture.simulated" class="scorers-container d-flex justify-content-between">
          <div class="home-scorers text-left">
            <ul class="list-unstyled">
              <li v-for="scorer in processedHomeScorers(fixture)" :key="scorer.playerId">
                {{ scorer.playerName }} {{ '⚽'.repeat(scorer.goals) }}
              </li>
            </ul>
          </div>
          <div class="away-scorers text-right">
            <ul class="list-unstyled">
              <li v-for="scorer in processedAwayScorers(fixture)" :key="scorer.playerId">
                {{ scorer.playerName }} {{ '⚽'.repeat(scorer.goals) }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="!fixture.simulated" class="text-center">
          <button @click="simulateMatch(fixture.id)" class="btn btn-primary btn-sm custom-button">
            Simulate Match
          </button>
        </div>
      </div>
      <button @click="simulateMatchday" :disabled="allMatchesSimulated" class="btn btn-success btn-sm custom-button">
        Simulate Remaining Matches
      </button>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import { useLeagueStore } from '@/stores/league'

const leagueStore = useLeagueStore()

const currentFixtures = computed(() => leagueStore.getCurrentFixtures)
const allMatchesSimulated = computed(() => leagueStore.allMatchesSimulated)

function getTeamName(teamId) {
  return leagueStore.teams.find(team => team.id === teamId)?.name || 'Unknown Team'
}

function getTeamStrength(teamId) {
  return leagueStore.teams.find(team => team.id === teamId)?.overall || 'N/A'
}

function simulateMatch(fixtureId) {
  leagueStore.simulateMatch(fixtureId)
}

function simulateMatchday() {
  leagueStore.simulateMatchday()
}

const processedHomeScorers = (fixture) => {
  const homeScorers = fixture.scorers.filter(scorer => scorer.teamId === fixture.homeTeam)
  return processScorers(homeScorers)
}

const processedAwayScorers = (fixture) => {
  const awayScorers = fixture.scorers.filter(scorer => scorer.teamId === fixture.awayTeam)
  return processScorers(awayScorers)
}
const processScorers = (scorers) => {
  const processedScorers = {}
  scorers.forEach(scorer => {
    if (processedScorers[scorer.playerId]) {
      processedScorers[scorer.playerId].goals++
    } else {
      processedScorers[scorer.playerId] = { ...scorer, goals: 1 }
    }
  })
  return Object.values(processedScorers)
}
</script>

<style scoped>
.team-name {
  font-weight: bold;
  flex: 1;
}

.score {
  font-size: 1.1em;
  /* Slightly reduced font size */
}

.vs {
  font-size: 0.9em;
  color: #666;
}

.scorers-container {
  margin-top: 5px;
  /* Reduced margin */
}

.home-scorers,
.away-scorers {
  flex: 1;
}

.fixture-row {
  background-color: #f7f7f7;
  padding: 5px;
  /* Reduced padding */
  border-radius: 5px;
}

.team-info span {
  font-weight: normal;
}

.team-info .font-weight-bold {
  font-weight: bold;
}

.custom-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  /* Reduced button padding */
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: #0056b3;
}

.btn-success.custom-button {
  background-color: #28a745;
}

.btn-success.custom-button:hover {
  background-color: #218838;
}
</style>

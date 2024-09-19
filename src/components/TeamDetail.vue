<template>
    <div v-if="team" class="team-detail">
      <h2>{{ team.name }}</h2>
      <p>Overall Strength: {{ team.overall }}</p>
      <p>Attack: {{ team.attack }}</p>
      <p>Defense: {{ team.defense }}</p>
      <h3>Season Statistics</h3>
      <p>Points: {{ team.points }}</p>
      <p>Played: {{ team.played }}</p>
      <p>Won: {{ team.won }}</p>
      <p>Drawn: {{ team.drawn }}</p>
      <p>Lost: {{ team.lost }}</p>
      <p>Goals For: {{ team.goalsFor }}</p>
      <p>Goals Against: {{ team.goalsAgainst }}</p>
      <p>Goal Difference: {{ team.goalsFor - team.goalsAgainst }}</p>
    </div>
    <div v-else>Team not found</div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useLeagueStore } from '@/stores/league'
  
  const route = useRoute()
  const leagueStore = useLeagueStore()
  
  const team = computed(() => {
    return leagueStore.teams.find(t => t.id === parseInt(route.params.id))
  })
  </script>
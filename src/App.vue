<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LeagueTable from './components/LeagueTable.vue';
import MatchdaySimulation from './components/MatchdaySimulation.vue';
import MatchdaySelector from './components/MatchdaySelector.vue';
import TopScorers from './components/TopScorers.vue';
</script>

<template>
  <div id="app">
    <div class="container-fluid mt-4 text-center">
      <h1>Football League Simulator</h1>
      <div class="row justify-content-center mt-5">
        <div class="col-auto d-flex justify-content-center"> <!-- Center LeagueTable -->
          <LeagueTable />
        </div>
        <div class="col-auto d-flex justify-content-center"> <!-- Center TopScorers -->
          <TopScorers />
        </div>
      </div>
      <div class="row justify-content-center mt-4"> <!-- MatchdaySimulation centered -->
        <div class="col d-flex justify-content-center"> <!-- Center MatchdaySimulation -->
          <MatchdaySimulation />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.col-md-8 {
  display: flex;
  justify-content: space-between;
}

LeagueTable,
TopScorers,
MatchdaySimulation {
  width: 100%;
}

TopScorers {
  max-width: 300px;
  /* Adjust this value as needed */
  margin-left: 20px;
  /* Add some space between LeagueTable and TopScorers */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

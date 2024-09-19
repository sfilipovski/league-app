# Project Documentation

---

## Table of Contents
1. [Idea for the Project](#idea-for-the-project)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Functionalities](#functionalities)

---

## Idea for the Project
*This project simulates a football league, managing teams, players, fixtures, and match results. It allows for the simulation of an entire season, tracking team and player statistics throughout. It could be used for entertainment (as a game-like simulation), for predictive analysis of real-world leagues, or as an educational tool for understanding sports statistics and probabilities.*

---

## Technologies Used
  - **Programming Languages:** JavaScript
  - **Frameworks:** Vue 3 + Pinia

---

## Project Structure
├── src\
│   └── components\
│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── LeagueTable.vue\
│  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── MatchdaySimulation.vue\
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── TopScorers.vue\
|&nbsp;&nbsp;&nbsp;└── stores\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── league.js


**LeagueTable.vue:** Component displaying the league table with all the teams and stats about wins, draw, losses and team form\
**MatchdaySimulation.vue:** Component that lists all the fixtures displayed for the selected matchday.\
**TopScorers.vue:** Component that lists the top 5 goalscorers in the league\
**league.js:** Pinia store used to manage the state and all the actions

---

## Functionalities

#### League Management
- The system manages multiple teams in a league.
- It keeps track of the current matchday and the total number of matchdays in a season.



#### Team and Player Management
- Each team has detailed information including:
  - Name
  - Statistics (played, won, drawn, lost, points, goals for/against)
  - Overall ratings (attack, defense, overall)
- Teams have a roster of players, each with individual attributes:
  - Name
  - Position
  - Goals scored
  - Overall rating


#### Fixture Generation and Management
- The system maintains a list of fixtures (matches) for the entire season.
- Fixtures are organized by matchdays.

#### Match Simulation
- Matches can be simulated individually or for an entire matchday at once.
- The simulation takes into account team and player statistics to determine match outcomes.
- Goals are generated based on team attack and defense ratings, using a Poisson distribution for realism.
- The system determines goal scorers based on player positions and probabilities.

#### Statistics Tracking
- After each match, team statistics are updated (points, goals, wins/draws/losses).
- Player statistics are updated (goals scored).
- Team form (recent results) is tracked and updated.

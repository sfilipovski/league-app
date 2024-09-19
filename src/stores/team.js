import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: () => ({
    teams: [
        { id: 1, name: 'Red Devils', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 88, defense: 80, overall: 84 , form: [], 
            players: [
                { id: 1, name: 'Maxwell Hart', position: 'GK', goals: 0, overall: 82 },
                { id: 2, name: 'Liam Cormack', position: 'DEF', goals: 0, overall: 78 },
                { id: 3, name: 'Oliver Keane', position: 'DEF', goals: 0, overall: 76 },
                { id: 4, name: 'Riley Ford', position: 'DEF', goals: 0, overall: 79 },
                { id: 5, name: 'Finn Hayes', position: 'DEF', goals: 0, overall: 77 },
                { id: 6, name: 'Ethan Collins', position: 'MID', goals: 6, overall: 84 },
                { id: 7, name: 'Asher Blake', position: 'MID', goals: 5, overall: 81 },
                { id: 8, name: 'Jaxon Quinn', position: 'MID', goals: 2, overall: 79 },
                { id: 9, name: 'Kaden Frost', position: 'FWD', goals: 10, overall: 88 },
                { id: 10, name: 'Logan Brooks', position: 'FWD', goals: 8, overall: 82 },
                { id: 11, name: 'Dylan West', position: 'FWD', goals: 4, overall: 80 }
            ]
        },
        { id: 2, name: 'Blue Knights', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 78, defense: 80, overall: 79 ,
            form: [],
            players: [
                { id: 12, name: 'Carter Young', position: 'GK', goals: 0, overall: 81 },
                { id: 13, name: 'Mason Grant', position: 'DEF', goals: 0, overall: 79 },
                { id: 14, name: 'Luca Walsh', position: 'DEF', goals: 0, overall: 77 },
                { id: 15, name: 'Zane Rivers', position: 'DEF', goals: 1, overall: 78 },
                { id: 16, name: 'Landon Hayes', position: 'DEF', goals: 0, overall: 75 },
                { id: 17, name: 'Isaac Miller', position: 'MID', goals: 4, overall: 83 },
                { id: 18, name: 'Sebastian Reed', position: 'MID', goals: 3, overall: 80 },
                { id: 19, name: 'Aiden Carter', position: 'MID', goals: 6, overall: 82 },
                { id: 20, name: 'Noah Price', position: 'FWD', goals: 11, overall: 86 },
                { id: 21, name: 'Ryder Knight', position: 'FWD', goals: 7, overall: 81 },
                { id: 22, name: 'Colton Ray', position: 'FWD', goals: 5, overall: 78 }
            ]
        },
        { id: 3, name: 'Green Giants', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 75, defense: 82, overall: 78 ,
            form: [],
            players: [
                { id: 23, name: 'Jayden Brooks', position: 'GK', goals: 0, overall: 83 },
                { id: 24, name: 'Grayson Cole', position: 'DEF', goals: 0, overall: 80 },
                { id: 25, name: 'Nolan Hayes', position: 'DEF', goals: 0, overall: 79 },
                { id: 26, name: 'Wyatt Stone', position: 'DEF', goals: 1, overall: 76 },
                { id: 27, name: 'Jasper Field', position: 'DEF', goals: 0, overall: 78 },
                { id: 28, name: 'Chase Parker', position: 'MID', goals: 7, overall: 85 },
                { id: 29, name: 'Tanner Lee', position: 'MID', goals: 5, overall: 82 },
                { id: 30, name: 'Blake Hunter', position: 'MID', goals: 4, overall: 80 },
                { id: 31, name: 'Gavin Fox', position: 'FWD', goals: 12, overall: 87 },
                { id: 32, name: 'Levi Wolfe', position: 'FWD', goals: 9, overall: 84 },
                { id: 33, name: 'Easton West', position: 'FWD', goals: 6, overall: 82 }
            ]
        },
        { id: 4, name: 'Yellow Falcons', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 85, defense: 70, overall: 79,
            form: [],
            players: [
                { id: 34, name: 'Hunter Wells', position: 'GK', goals: 0, overall: 80 },
                { id: 35, name: 'Cameron Ellis', position: 'DEF', goals: 0, overall: 77 },
                { id: 36, name: 'Parker Reid', position: 'DEF', goals: 0, overall: 76 },
                { id: 37, name: 'Finn Anderson', position: 'DEF', goals: 0, overall: 75 },
                { id: 38, name: 'Brody Knight', position: 'DEF', goals: 0, overall: 74 },
                { id: 39, name: 'Quinn Morgan', position: 'MID', goals: 5, overall: 82 },
                { id: 40, name: 'Jaxon Riley', position: 'MID', goals: 3, overall: 80 },
                { id: 41, name: 'Sawyer Bell', position: 'MID', goals: 2, overall: 78 },
                { id: 42, name: 'Zachary Scott', position: 'FWD', goals: 10, overall: 85 },
                { id: 43, name: 'Landon Brooks', position: 'FWD', goals: 8, overall: 81 },
                { id: 44, name: 'Bryce Scott', position: 'FWD', goals: 4, overall: 79 }
            ]
         },
        { id: 5, name: 'Silver Sharks', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 80, goalsAgainst: 75, attack: 80, defense: 75, overall: 78,
            form: [],
            players: [
                { id: 45, name: 'Kellan Gray', position: 'GK', goals: 0, overall: 84 },
                { id: 46, name: 'Reed Carter', position: 'DEF', goals: 0, overall: 79 },
                { id: 47, name: 'Sullivan King', position: 'DEF', goals: 0, overall: 77 },
                { id: 48, name: 'Milo North', position: 'DEF', goals: 0, overall: 78 },
                { id: 49, name: 'Cyrus West', position: 'DEF', goals: 0, overall: 76 },
                { id: 50, name: 'Jett Ellis', position: 'MID', goals: 4, overall: 81 },
                { id: 51, name: 'Luca Banks', position: 'MID', goals: 6, overall: 83 },
                { id: 52, name: 'Gage Brooks', position: 'MID', goals: 2, overall: 79 },
                { id: 53, name: 'Dante Mills', position: 'FWD', goals: 9, overall: 88 },
                { id: 54, name: 'Jasper Hurst', position: 'FWD', goals: 7, overall: 82 },
                { id: 55, name: 'Tobias Marsh', position: 'FWD', goals: 5, overall: 80 }
            ]
         },
        { id: 6, name: 'Crimson Wolves', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 90, goalsAgainst: 80, attack: 88, defense: 72, overall: 80,
            form: [],
            players: [
                { id: 56, name: 'Wesley Stone', position: 'GK', goals: 0, overall: 81 },
                { id: 57, name: 'Kian Holt', position: 'DEF', goals: 0, overall: 76 },
                { id: 58, name: 'Hayden Wood', position: 'DEF', goals: 0, overall: 78 },
                { id: 59, name: 'Emery Green', position: 'DEF', goals: 0, overall: 77 },
                { id: 60, name: 'Finley King', position: 'DEF', goals: 0, overall: 75 },
                { id: 61, name: 'Archer Fox', position: 'MID', goals: 5, overall: 82 },
                { id: 62, name: 'Knox Page', position: 'MID', goals: 3, overall: 81 },
                { id: 63, name: 'Bodhi Gray', position: 'MID', goals: 6, overall: 84 },
                { id: 64, name: 'Cruz Rivera', position: 'FWD', goals: 11, overall: 86 },
                { id: 65, name: 'Tanner Black', position: 'FWD', goals: 8, overall: 83 },
            ]
         },
        { id: 7, name: 'Golden Eagles', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 70, goalsAgainst: 85, attack: 74, defense: 78, overall: 76,
            form: [],
            players: [
                { id: 67, name: 'Nash Cole', position: 'GK', goals: 0, overall: 80 },
                { id: 68, name: 'Luka Pierce', position: 'DEF', goals: 0, overall: 76 },
                { id: 69, name: 'Koda Snow', position: 'DEF', goals: 0, overall: 77 },
                { id: 70, name: 'Cade Lane', position: 'DEF', goals: 0, overall: 78 },
                { id: 71, name: 'Milo Drake', position: 'DEF', goals: 0, overall: 75 },
                { id: 72, name: 'Sage Bennett', position: 'MID', goals: 3, overall: 82 },
                { id: 73, name: 'Jace Norman', position: 'MID', goals: 4, overall: 81 },
                { id: 74, name: 'Jett Wilkins', position: 'MID', goals: 5, overall: 84 },
                { id: 75, name: 'Gunner Fields', position: 'FWD', goals: 9, overall: 87 },
                { id: 76, name: 'Rex Simmons', position: 'FWD', goals: 8, overall: 83 },
                { id: 77, name: 'Brock Quinn', position: 'FWD', goals: 7, overall: 80 }
            ]
         },
        { id: 8, name: 'Black Panthers', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 77, goalsAgainst: 77, attack: 76, defense: 76, overall: 76,
            form: [],
            players: [
                { id: 78, name: 'Colby Reid', position: 'GK', goals: 0, overall: 82 },
                { id: 79, name: 'Kellan Price', position: 'DEF', goals: 0, overall: 78 },
                { id: 80, name: 'Bryce Allen', position: 'DEF', goals: 0, overall: 76 },
                { id: 81, name: 'Zane Walsh', position: 'DEF', goals: 0, overall: 79 },
                { id: 82, name: 'Gage Lane', position: 'DEF', goals: 0, overall: 77 },
                { id: 83, name: 'Ryder Hayes', position: 'MID', goals: 6, overall: 84 },
                { id: 84, name: 'Luca Grant', position: 'MID', goals: 5, overall: 81 },
                { id: 85, name: 'Aiden Wood', position: 'MID', goals: 2, overall: 79 },
                { id: 86, name: 'Dylan Fox', position: 'FWD', goals: 10, overall: 88 },
                { id: 87, name: 'Wyatt Brooks', position: 'FWD', goals: 8, overall: 82 },
                { id: 88, name: 'Gavin King', position: 'FWD', goals: 4, overall: 80 }
            ]
         },
        { id: 9, name: 'White Stallions', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 68, goalsAgainst: 90, attack: 70, defense: 65, overall: 67,
            form:[],
            players: [
                { id: 89, name: 'Finn Carter', position: 'GK', goals: 0, overall: 81 },
                { id: 90, name: 'Liam Taylor', position: 'DEF', goals: 0, overall: 79 },
                { id: 91, name: 'Noah Phillips', position: 'DEF', goals: 0, overall: 77 },
                { id: 92, name: 'Jaxon Reed', position: 'DEF', goals: 1, overall: 78 },
                { id: 93, name: 'Ryder Hall', position: 'DEF', goals: 0, overall: 75 },
                { id: 94, name: 'Kaden Gray', position: 'MID', goals: 4, overall: 83 },
                { id: 95, name: 'Zane Thompson', position: 'MID', goals: 3, overall: 80 },
                { id: 96, name: 'Milo Wells', position: 'MID', goals: 6, overall: 82 },
                { id: 97, name: 'Colt Rivers', position: 'FWD', goals: 11, overall: 86 },
                { id: 98, name: 'Bodhi Lane', position: 'FWD', goals: 7, overall: 81 },
                { id: 99, name: 'Tobias White', position: 'FWD', goals: 5, overall: 78 }
            ]
         },
        { id: 10, name: 'Purple Dragons', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 85, goalsAgainst: 76, attack: 84, defense: 77, overall: 80,
            form: [],
            players: [
                { id: 100, name: 'Jayden Frost', position: 'GK', goals: 0, overall: 83 },
                { id: 101, name: 'Kai Hunter', position: 'DEF', goals: 0, overall: 80 },
                { id: 102, name: 'Cruz North', position: 'DEF', goals: 0, overall: 79 },
                { id: 103, name: 'Luca Price', position: 'DEF', goals: 1, overall: 76 },
                { id: 104, name: 'Carter Lee', position: 'DEF', goals: 0, overall: 78 },
                { id: 105, name: 'Gage Hayes', position: 'MID', goals: 7, overall: 85 },
                { id: 106, name: 'Sawyer Cole', position: 'MID', goals: 5, overall: 82 },
                { id: 107, name: 'Jett Knox', position: 'MID', goals: 4, overall: 80 },
                { id: 108, name: 'Nash Brooks', position: 'FWD', goals: 12, overall: 87 },
                { id: 109, name: 'Zane Wells', position: 'FWD', goals: 9, overall: 84 },
                { id: 110, name: 'Jasper Gray', position: 'FWD', goals: 6, overall: 82 }
            ]
         }
              
            ],
  }),
  actions: {
    updateTeamStats(homeTeam, awayTeam, homeGoals, awayGoals) {
        homeTeam.played++
        awayTeam.played++
        homeTeam.goalsFor += homeGoals
        homeTeam.goalsAgainst += awayGoals
        awayTeam.goalsFor += awayGoals
        awayTeam.goalsAgainst += homeGoals
  
        if (homeGoals > awayGoals) {
          homeTeam.won++
          homeTeam.points += 3
          awayTeam.lost++
        } else if (homeGoals < awayGoals) {
          awayTeam.won++
          awayTeam.points += 3
          homeTeam.lost++
        } else {
          homeTeam.drawn++
          awayTeam.drawn++
          homeTeam.points++
          awayTeam.points++
        }
      },
  },
  getters: {
    getTeamById: (state) => (id) => state.teams.find(t => t.id === id),
    topScorers: (state) => {
        const allPlayers = state.teams.flatMap(team => team.players)
        return allPlayers
          .sort((a, b) => b.goals - a.goals)
          .slice(0, 5)
      },
      teamForm: (state) => (teamId) => {
        const team = state.teams.find(t => t.id === teamId)
        return team ? team.form.join('') : ''
      },  
  },
})
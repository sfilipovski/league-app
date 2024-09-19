import { defineStore } from 'pinia'

export const useLeagueStore = defineStore('league', {
  state: () => ({
    teams: [
      { id: 1, name: 'Red Devils', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 82, defense: 82, overall: 82 , form: [], 
          players: [
              { id: 1, name: 'Maxwell Hart', position: 'GK', goals: 0, overall: 82 },
              { id: 2, name: 'Liam Cormack', position: 'DEF', goals: 0, overall: 78 },
              { id: 3, name: 'Oliver Keane', position: 'DEF', goals: 0, overall: 76 },
              { id: 4, name: 'Riley Ford', position: 'DEF', goals: 0, overall: 79 },
              { id: 5, name: 'Finn Hayes', position: 'DEF', goals: 0, overall: 77 },
              { id: 6, name: 'Ethan Collins', position: 'MID', goals: 0, overall: 84 },
              { id: 7, name: 'Asher Blake', position: 'MID', goals: 0, overall: 81 },
              { id: 8, name: 'Jaxon Quinn', position: 'MID', goals: 0, overall: 79 },
              { id: 9, name: 'Kaden Frost', position: 'FWD', goals: 0, overall: 88 },
              { id: 10, name: 'Logan Brooks', position: 'FWD', goals: 0, overall: 82 },
              { id: 11, name: 'Dylan West', position: 'FWD', goals: 0, overall: 80 }
          ]
      },
      { id: 2, name: 'Blue Knights', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 78, defense: 80, overall: 79 ,
          form: [],
          players: [
              { id: 12, name: 'Carter Young', position: 'GK', goals: 0, overall: 81 },
              { id: 13, name: 'Mason Grant', position: 'DEF', goals: 0, overall: 79 },
              { id: 14, name: 'Luca Walsh', position: 'DEF', goals: 0, overall: 77 },
              { id: 15, name: 'Zane Rivers', position: 'DEF', goals: 0, overall: 78 },
              { id: 16, name: 'Landon Hayes', position: 'DEF', goals: 0, overall: 75 },
              { id: 17, name: 'Isaac Miller', position: 'MID', goals: 0, overall: 83 },
              { id: 18, name: 'Sebastian Reed', position: 'MID', goals: 0, overall: 80 },
              { id: 19, name: 'Aiden Carter', position: 'MID', goals: 0, overall: 82 },
              { id: 20, name: 'Noah Price', position: 'FWD', goals: 0, overall: 86 },
              { id: 21, name: 'Ryder Knight', position: 'FWD', goals: 0, overall: 81 },
              { id: 22, name: 'Colton Ray', position: 'FWD', goals: 0, overall: 78 }
          ]
      },
      { id: 3, name: 'Green Giants', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 75, defense: 82, overall: 78 ,
          form: [],
          players: [
              { id: 23, name: 'Jayden Brooks', position: 'GK', goals: 0, overall: 83 },
              { id: 24, name: 'Grayson Cole', position: 'DEF', goals: 0, overall: 80 },
              { id: 25, name: 'Nolan Hayes', position: 'DEF', goals: 0, overall: 79 },
              { id: 26, name: 'Wyatt Stone', position: 'DEF', goals: 0, overall: 76 },
              { id: 27, name: 'Jasper Field', position: 'DEF', goals: 0, overall: 78 },
              { id: 28, name: 'Chase Parker', position: 'MID', goals: 0, overall: 85 },
              { id: 29, name: 'Tanner Lee', position: 'MID', goals: 0, overall: 82 },
              { id: 30, name: 'Blake Hunter', position: 'MID', goals: 0, overall: 80 },
              { id: 31, name: 'Gavin Fox', position: 'FWD', goals: 0, overall: 87 },
              { id: 32, name: 'Levi Wolfe', position: 'FWD', goals: 0, overall: 84 },
              { id: 33, name: 'Easton West', position: 'FWD', goals: 0, overall: 82 }
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
              { id: 39, name: 'Quinn Morgan', position: 'MID', goals: 0, overall: 82 },
              { id: 40, name: 'Jaxon Riley', position: 'MID', goals: 0, overall: 80 },
              { id: 41, name: 'Sawyer Bell', position: 'MID', goals: 0, overall: 78 },
              { id: 42, name: 'Zachary Scott', position: 'FWD', goals: 0, overall: 85 },
              { id: 43, name: 'Landon Brooks', position: 'FWD', goals: 0, overall: 81 },
              { id: 44, name: 'Bryce Scott', position: 'FWD', goals: 0, overall: 79 }
          ]
       },
      { id: 5, name: 'Silver Sharks', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 80, defense: 75, overall: 78,
          form: [],
          players: [
              { id: 45, name: 'Kellan Gray', position: 'GK', goals: 0, overall: 84 },
              { id: 46, name: 'Reed Carter', position: 'DEF', goals: 0, overall: 79 },
              { id: 47, name: 'Sullivan King', position: 'DEF', goals: 0, overall: 77 },
              { id: 48, name: 'Milo North', position: 'DEF', goals: 0, overall: 78 },
              { id: 49, name: 'Cyrus West', position: 'DEF', goals: 0, overall: 76 },
              { id: 50, name: 'Jett Ellis', position: 'MID', goals: 0, overall: 81 },
              { id: 51, name: 'Luca Banks', position: 'MID', goals: 0, overall: 83 },
              { id: 52, name: 'Gage Brooks', position: 'MID', goals: 0, overall: 79 },
              { id: 53, name: 'Dante Mills', position: 'FWD', goals: 0, overall: 88 },
              { id: 54, name: 'Jasper Hurst', position: 'FWD', goals: 0, overall: 82 },
              { id: 55, name: 'Tobias Marsh', position: 'FWD', goals: 0, overall: 80 }
          ]
       },
      { id: 6, name: 'Crimson Wolves', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 88, defense: 72, overall: 80,
          form: [],
          players: [
              { id: 56, name: 'Wesley Stone', position: 'GK', goals: 0, overall: 81 },
              { id: 57, name: 'Kian Holt', position: 'DEF', goals: 0, overall: 76 },
              { id: 58, name: 'Hayden Wood', position: 'DEF', goals: 0, overall: 78 },
              { id: 59, name: 'Emery Green', position: 'DEF', goals: 0, overall: 77 },
              { id: 60, name: 'Finley King', position: 'DEF', goals: 0, overall: 75 },
              { id: 61, name: 'Archer Fox', position: 'MID', goals: 0, overall: 82 },
              { id: 62, name: 'Knox Page', position: 'MID', goals: 0, overall: 81 },
              { id: 63, name: 'Bodhi Gray', position: 'MID', goals: 0, overall: 84 },
              { id: 64, name: 'Cruz Rivera', position: 'FWD', goals: 0, overall: 86 },
              { id: 65, name: 'Tanner Black', position: 'FWD', goals: 0, overall: 83 },
          ]
       },
      { id: 7, name: 'Golden Eagles', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 74, defense: 78, overall: 76,
          form: [],
          players: [
              { id: 67, name: 'Nash Cole', position: 'GK', goals: 0, overall: 80 },
              { id: 68, name: 'Luka Pierce', position: 'DEF', goals: 0, overall: 76 },
              { id: 69, name: 'Koda Snow', position: 'DEF', goals: 0, overall: 77 },
              { id: 70, name: 'Cade Lane', position: 'DEF', goals: 0, overall: 78 },
              { id: 71, name: 'Milo Drake', position: 'DEF', goals: 0, overall: 75 },
              { id: 72, name: 'Sage Bennett', position: 'MID', goals: 0, overall: 82 },
              { id: 73, name: 'Jace Norman', position: 'MID', goals: 0, overall: 81 },
              { id: 74, name: 'Jett Wilkins', position: 'MID', goals: 0, overall: 84 },
              { id: 75, name: 'Gunner Fields', position: 'FWD', goals: 0, overall: 87 },
              { id: 76, name: 'Rex Simmons', position: 'FWD', goals: 0, overall: 83 },
              { id: 77, name: 'Brock Quinn', position: 'FWD', goals: 0, overall: 80 }
          ]
       },
      { id: 8, name: 'Black Panthers', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 76, defense: 76, overall: 76,
          form: [],
          players: [
              { id: 78, name: 'Colby Reid', position: 'GK', goals: 0, overall: 82 },
              { id: 79, name: 'Kellan Price', position: 'DEF', goals: 0, overall: 78 },
              { id: 80, name: 'Bryce Allen', position: 'DEF', goals: 0, overall: 76 },
              { id: 81, name: 'Zane Walsh', position: 'DEF', goals: 0, overall: 79 },
              { id: 82, name: 'Gage Lane', position: 'DEF', goals: 0, overall: 77 },
              { id: 83, name: 'Ryder Hayes', position: 'MID', goals: 0, overall: 84 },
              { id: 84, name: 'Luca Grant', position: 'MID', goals: 0, overall: 81 },
              { id: 85, name: 'Aiden Wood', position: 'MID', goals: 0, overall: 79 },
              { id: 86, name: 'Dylan Fox', position: 'FWD', goals: 0, overall: 88 },
              { id: 87, name: 'Wyatt Brooks', position: 'FWD', goals: 0, overall: 82 },
              { id: 88, name: 'Gavin King', position: 'FWD', goals: 0, overall: 80 }
          ]
       },
      { id: 9, name: 'White Stallions', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 70, defense: 65, overall: 67,
          form:[],
          players: [
              { id: 89, name: 'Finn Carter', position: 'GK', goals: 0, overall: 81 },
              { id: 90, name: 'Liam Taylor', position: 'DEF', goals: 0, overall: 79 },
              { id: 91, name: 'Noah Phillips', position: 'DEF', goals: 0, overall: 77 },
              { id: 92, name: 'Jaxon Reed', position: 'DEF', goals: 0, overall: 78 },
              { id: 93, name: 'Ryder Hall', position: 'DEF', goals: 0, overall: 75 },
              { id: 94, name: 'Kaden Gray', position: 'MID', goals: 0, overall: 79 },
              { id: 95, name: 'Zane Thompson', position: 'MID', goals: 0, overall: 80 },
              { id: 96, name: 'Milo Wells', position: 'MID', goals: 0, overall: 80 },
              { id: 97, name: 'Colt Rivers', position: 'FWD', goals: 0, overall: 80 },
              { id: 98, name: 'Bodhi Lane', position: 'FWD', goals: 0, overall: 81 },
              { id: 99, name: 'Tobias White', position: 'FWD', goals: 0, overall: 78 }
          ]
       },
      { id: 10, name: 'Purple Dragons', played: 0, won: 0, drawn: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, attack: 84, defense: 77, overall: 80,
          form: [],
          players: [
              { id: 100, name: 'Jayden Frost', position: 'GK', goals: 0, overall: 83 },
              { id: 101, name: 'Kai Hunter', position: 'DEF', goals: 0, overall: 80 },
              { id: 102, name: 'Cruz North', position: 'DEF', goals: 0, overall: 79 },
              { id: 103, name: 'Luca Price', position: 'DEF', goals: 0, overall: 76 },
              { id: 104, name: 'Carter Lee', position: 'DEF', goals: 0, overall: 78 },
              { id: 105, name: 'Gage Hayes', position: 'MID', goals: 0, overall: 85 },
              { id: 106, name: 'Sawyer Cole', position: 'MID', goals: 0, overall: 82 },
              { id: 107, name: 'Jett Knox', position: 'MID', goals: 0, overall: 80 },
              { id: 108, name: 'Nash Brooks', position: 'FWD', goals: 0, overall: 87 },
              { id: 109, name: 'Zane Wells', position: 'FWD', goals: 0, overall: 84 },
              { id: 110, name: 'Jasper Gray', position: 'FWD', goals: 0, overall: 82 }
          ]
       }
      
    ],
    fixtures: [
      
      
      { id: 1, matchday: 1, homeTeam: 10, awayTeam: 7,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 2, matchday: 1, homeTeam: 6, awayTeam: 9,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 3, matchday: 1, homeTeam: 5, awayTeam: 8,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 4, matchday: 1, homeTeam: 4, awayTeam: 1,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 5, matchday: 1, homeTeam: 3, awayTeam: 2,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      // Matchday 2
      { id: 6, matchday: 2, homeTeam: 7, awayTeam: 6,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 7, matchday: 2, homeTeam: 10, awayTeam: 5,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 8, matchday: 2, homeTeam: 9, awayTeam: 4,  homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 9, matchday: 2, homeTeam: 8, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 10, matchday: 2, homeTeam: 1, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      // Matchday 3
      { id: 11, matchday: 3, homeTeam: 7, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 12, matchday: 3, homeTeam: 2, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 13, matchday: 3, homeTeam: 3, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 14, matchday: 3, homeTeam: 4, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 15, matchday: 3, homeTeam: 5, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 16, matchday: 4, homeTeam: 8, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 17, matchday: 4, homeTeam: 9, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 18, matchday: 4, homeTeam: 10, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 19, matchday: 4, homeTeam: 6, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 20, matchday: 4, homeTeam: 5, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 21, matchday: 5, homeTeam: 9, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 22, matchday: 5, homeTeam: 10, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 23, matchday: 5, homeTeam: 6, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 24, matchday: 5, homeTeam: 5, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 25, matchday: 5, homeTeam: 4, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 26, matchday: 6, homeTeam: 7, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 27, matchday: 6, homeTeam: 8, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 28, matchday: 6, homeTeam: 1, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 29, matchday: 6, homeTeam: 2, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 30, matchday: 6, homeTeam: 3, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 31, matchday: 7, homeTeam: 5, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 32, matchday: 7, homeTeam: 4, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 33, matchday: 7, homeTeam: 3, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 34, matchday: 7, homeTeam: 2, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 35, matchday: 7, homeTeam: 1, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 36, matchday: 8, homeTeam: 7, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 37, matchday: 8, homeTeam: 5, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 38, matchday: 8, homeTeam: 6, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 39, matchday: 8, homeTeam: 10, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 40, matchday: 8, homeTeam: 9, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 41, matchday: 9, homeTeam: 3, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 42, matchday: 9, homeTeam: 2, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 43, matchday: 9, homeTeam: 1, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 44, matchday: 9, homeTeam: 8, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 45, matchday: 9, homeTeam: 9, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 46, matchday: 10, homeTeam: 7, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 47, matchday: 10, homeTeam: 3, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 48, matchday: 10, homeTeam: 4, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 49, matchday: 10, homeTeam: 5, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 50, matchday: 10, homeTeam: 6, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 51, matchday: 11, homeTeam: 1, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 52, matchday: 11, homeTeam: 8, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 53, matchday: 11, homeTeam: 9, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 54, matchday: 11, homeTeam: 10, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 55, matchday: 11, homeTeam: 6, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 56, matchday: 12, homeTeam: 7, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 57, matchday: 12, homeTeam: 1, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 58, matchday: 12, homeTeam: 2, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 59, matchday: 12, homeTeam: 3, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 60, matchday: 12, homeTeam: 4, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 61, matchday: 13, homeTeam: 7, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 62, matchday: 13, homeTeam: 9, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 63, matchday: 13, homeTeam: 8, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 64, matchday: 13, homeTeam: 1, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 65, matchday: 13, homeTeam: 2, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 66, matchday: 14, homeTeam: 6, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 67, matchday: 14, homeTeam: 5, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 68, matchday: 14, homeTeam: 4, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 69, matchday: 14, homeTeam: 3, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 70, matchday: 14, homeTeam: 2, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 71, matchday: 15, homeTeam: 7, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 72, matchday: 15, homeTeam: 6, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 73, matchday: 15, homeTeam: 10, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 74, matchday: 15, homeTeam: 9, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 75, matchday: 15, homeTeam: 8, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 76, matchday: 16, homeTeam: 4, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 77, matchday: 16, homeTeam: 3, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 78, matchday: 16, homeTeam: 2, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 79, matchday: 16, homeTeam: 1, awayTeam: 10, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 80, matchday: 16, homeTeam: 8, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 81, matchday: 17, homeTeam: 7, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 82, matchday: 17, homeTeam: 4, awayTeam: 2, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 83, matchday: 17, homeTeam: 5, awayTeam: 1, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 84, matchday: 17, homeTeam: 6, awayTeam: 8, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 85, matchday: 17, homeTeam: 10, awayTeam: 9, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

      { id: 86, matchday: 18, homeTeam: 2, awayTeam: 7, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 87, matchday: 18, homeTeam: 8, awayTeam: 4, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 88, matchday: 18, homeTeam: 9, awayTeam: 5, homeGoals: null, awayGoals: null, simulated: false, scorers: []   },
      { id: 89, matchday: 18, homeTeam: 1, awayTeam: 3, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },
      { id: 90, matchday: 18, homeTeam: 10, awayTeam: 6, homeGoals: null, awayGoals: null, simulated: false, scorers: []  },

    ],
    currentMatchday: 1,
    totalMatchdays: 18,
  }),
  actions: {
    simulateMatch(fixtureId) {
      const fixture = this.fixtures.find(f => f.id === fixtureId)
      if (!fixture || fixture.simulated) return

      const homeTeam = this.teams.find(t => t.id === fixture.homeTeam)
      const awayTeam = this.teams.find(t => t.id === fixture.awayTeam)

      const { homeGoals, awayGoals, scorers } = this.calculateMatchResult(homeTeam, awayTeam)

      fixture.homeGoals = homeGoals
      fixture.awayGoals = awayGoals
      fixture.simulated = true
      fixture.scorers = scorers

      this.updateTeamStats(homeTeam, awayTeam, homeGoals, awayGoals)
      this.updateTeamForm(homeTeam, awayTeam, homeGoals, awayGoals)
    },

    simulateMatchday() {
      const unsimulatedFixtures = this.getCurrentFixtures.filter(f => !f.simulated)
      unsimulatedFixtures.forEach(fixture => this.simulateMatch(fixture.id))
    },

    calculateMatchResult(homeTeam, awayTeam) {
      const homeStrength = homeTeam.overall + 50 
      const awayStrength = awayTeam.overall
      const totalStrength = homeStrength + awayStrength

      const homeWinProb = (homeStrength / totalStrength) * 0.7
      const awayWinProb = (awayStrength / totalStrength) * 0.7
      const drawProb = 1 - homeWinProb - awayWinProb

      const random = Math.random()
      let homeGoals, awayGoals, scorers = []

      if (random < homeWinProb) {
        homeGoals = this.generateGoals(homeTeam, true, awayTeam)
        awayGoals = this.generateGoals(awayTeam, false, homeTeam)
        if (homeGoals <= awayGoals) homeGoals = awayGoals + 1
      } else if (random < homeWinProb + awayWinProb) {
        awayGoals = this.generateGoals(awayTeam, true, homeTeam)
        homeGoals = this.generateGoals(homeTeam, false, awayTeam)
        if (awayGoals <= homeGoals) awayGoals = homeGoals + 1
      } else {
        const averageTeam = {
          overall: (homeTeam.overall + awayTeam.overall) / 2,
          attack: (homeTeam.attack + awayTeam.attack) / 2
        }
        homeGoals = this.generateGoals(averageTeam, false, averageTeam)
        awayGoals = homeGoals
      }

      scorers = this.determineScorers(homeTeam, homeGoals, awayTeam, awayGoals)

      return { homeGoals, awayGoals, scorers }
    },

    generateGoals(team, isWinner, opponent) {
      const baseGoals = Math.max(0, (team.attack / 100) - (opponent.defense / 100)); 
  
      const lambda = Math.max(1, baseGoals); 
      const goals = this.poissonRandom(lambda);
  
      if (isWinner && goals === 0) return 1;
      return goals;
    },
    poissonRandom(lambda) {
      let L = Math.exp(-lambda);
      let p = 1;
      let k = 0;
  
      do {
          k++;
          p *= Math.random();
      } while (p > L);
  
      return k - 1;
  },
    updateLeagueTable(fixtures) {
      fixtures.forEach(fixture => {
        const homeTeam = this.teams.find(t => t.id === fixture.homeTeam)
        const awayTeam = this.teams.find(t => t.id === fixture.awayTeam)
        
        homeTeam.goalsFor += fixture.homeGoals
        homeTeam.goalsAgainst += fixture.awayGoals
        awayTeam.goalsFor += fixture.awayGoals
        awayTeam.goalsAgainst += fixture.homeGoals
        
        if (fixture.homeGoals > fixture.awayGoals) {
          homeTeam.points += 3
        } else if (fixture.homeGoals < fixture.awayGoals) {
          awayTeam.points += 3
        } else {
          homeTeam.points += 1
          awayTeam.points += 1
        }
      })
      
      this.teams.sort((a, b) => b.points - a.points)
    },

    updateTeamForm(homeTeam, awayTeam, homeGoals, awayGoals) {
      const updateForm = (team, result) => {
        team.form.unshift(result)
        if (team.form.length > 5) team.form.pop()
      }
    
      const homeWin = homeGoals > awayGoals
      const draw = homeGoals === awayGoals
    
      if (draw) {
        updateForm(homeTeam, 'D')
        updateForm(awayTeam, 'D')
      } else {
        updateForm(homeTeam, homeWin ? 'W' : 'L')
        updateForm(awayTeam, homeWin ? 'L' : 'W')
      }
    },
    
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

    determineScorers(homeTeam, homeGoals, awayTeam, awayGoals) {
      const scorers = []

      const determineTeamScorers = (team, goals) => {
        const scoringProbabilities = {
          'GK': 0.01,
          'DEF': 0.05,
          'MID': 0.2,
          'FWD': 0.5
        }

        for (let i = 0; i < goals; i++) {
          const scorer = team.players.find(player => {
            const random = Math.random()
            return random < scoringProbabilities[player.position]
          }) || team.players.find(player => player.position === 'FWD')

          scorer.goals++
          scorers.push({ teamId: team.id, playerId: scorer.id, playerName: scorer.name })
        }
      }

      determineTeamScorers(homeTeam, homeGoals)
      determineTeamScorers(awayTeam, awayGoals)

      return scorers
    },
  },
  getters: {
    getCurrentFixtures: (state) => 
      state.fixtures.filter(f => f.matchday === state.currentMatchday),
    allMatchesSimulated: (state) => 
      state.fixtures.filter(f => f.matchday === state.currentMatchday)
        .every(f => f.simulated),
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
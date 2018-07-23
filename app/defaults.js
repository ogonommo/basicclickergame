var setup = {}

setup._save = {
  money: 10,
  speedBoost: 1,
  produceBoost: 1,
  restarts: 0,
  timespent: 0,
  timespentthisssession: 0,
  points: 0,
  buildings: [
    {
      id: 1,
      level: 0
    },
    {
      id: 2,
      level: 0
    },
    {
      id: 3,
      level: 0
    },
    {
      id: 4,
      level: 0
    },
    {
      id: 5,
      level: 0
    },
    {
      id: 6,
      level: 0
    },
    {
      id: 7,
      level: 0
    },
    {
      id: 8,
      level: 0
    },
    {
      id: 9,
      level: 0
    },
    {
      id: 10,
      level: 0
    }
  ]
}

setup._buildings = [
  {
    id: 1,
    name: 'Sporangium',
    startingPrice: 10,
    increment: 1.25,
    speed: 1,
    produce: 4,
    produceIncrement: 4,
    levels: [
      {
        level: 10,
        speedBoost: 1,
        produceBoost: 2
      },
      {
        level: 25,
        speedBoost: 2,
        produceBoost: 1
      },
      {
        level: 50,
        speedBoost: 1.5,
        produceBoost: 2.5
      }
    ]
  },
  {
    id: 2,
    name: 'Shrooms',
    startingPrice: 200,
    increment: 1.3,
    speed: 1,
    produce: 40,
    produceIncrement: 80,
    levels: [
      {
        level: 10,
        speedBoost: 1,
        produceBoost: 2
      },
      {
        level: 25,
        speedBoost: 2,
        produceBoost: 1
      },
      {
        level: 50,
        speedBoost: 1.5,
        produceBoost: 2.5
      }
    ]
  }
]

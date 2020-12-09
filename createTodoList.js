const fs = require('fs')
const moment=require('moment')
const todoList=[
    {
        text: 'Go shopping',
        date: moment('19.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
      },
      {
        text: 'Take a nap',
        date: moment('08.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 2,
        done: true
      },
      {
        text: 'Prepare dinner',
        date: moment('02.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 3,
        done: true
      }
]
const json=JSON.stringify(todoList)
fs.writeFileSync('todo.json',json)


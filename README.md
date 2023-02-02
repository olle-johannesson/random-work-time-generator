# random-work-time-generator

<img width="169" alt="office" src="https://user-images.githubusercontent.com/46224491/216463748-197feffb-aee5-4f3f-a2a0-e1bf8307b879.png">

Generates gaussian distributed random clock-in / clock-out times, including a lunch break.

Work time will average 8 hours mon-thursday and 6 hours fridays, with an average (but not less than) 30 minute lunch break. The standard deviation defaults to 20 minutes.

### params
- `stdDevMinutes` defaults to 20
- `start` defaults to `"07:45"`
- `lunchStart` defaults to `"12:00"`
- `lunchEnd` defaults to `"12:30"`
- `end` defaults to complete a workday of 8 hours mon-thur and 6 hours friday

### example
```
$ node rndWorkTimes.js

┌───────────┬─────────┬─────────┐
│  (index)  │  start  │   end   │
├───────────┼─────────┼─────────┤
│  morning  │ '07:43' │ '12:25' │
│   lunch   │ '12:25' │ '13:05' │
│ afternoon │ '13:05' │ '16:41' │
└───────────┴─────────┴─────────┘
total: 08h 18m
`s``

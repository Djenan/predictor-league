# SDC Site Match Header
A component to display a football match and scorers.

This project uses the [Toolbelt](https://github.com/sky-uk/toolbelt) as the build tool. For help using the tool, see the [Toolbelt](https://github.com/sky-uk/toolbelt) project repository or run `toolbelt --help` once installed.

## Contents

* [Toolbelt](#preview)
* [Example data](#example-data)
* [Opta status codes](#opta-status-codes)
* [Match events](#match-events)
* [Live updating](#live-updating)
* [Additional information](#additional-information)

## Toolbelt

### Preview
To build the html, css and javascript and preview the component:

`toolbelt preview`  used data.json

`toolbelt preview --multiple`  uses multiple.json

### Testing
To test the component scripts, run this command:

`toolbelt test`

### Linting
To lint the component scripts, run this command:

`toolbelt lint`

## Example data

Is available in [/sample/data.json](/sample/data.json)

Empty or non-existent values should be set to null.

```json
{
  "id": 123456,
  "status": 0,
  "start": {
    "time": "17:00",
    "date": "Saturday 17th November"
  },
  "competition": {
    "id": 120,
    "importance": 1,
    "code": "EC",
    "name": {
      "full": "European Championships",
      "short": "European Championships"
    },
    "round": {
      "importance": 1,
      "name": {
        "full": "Semi-final",
        "short": "Semi-final"
      }
    }
  },
  "teams": {
    "home": {
      "url": "/football/bayern-munich/",
      "score": {
        "current": 0,
        "half_time": null,
        "aggregate": null
      },
      "badge": "http://e0.365dm.com/football/badges/96/530.png",
      "id": 530,
      "name": {
        "full": "Bayern Munich",
        "short": "Bayern"
      },
      "synopsis": null
    },
    "away": {
      "url": "/football/bayer-leverkusen/",
      "score": {
        "current": 0,
        "half_time": null,
        "aggregate": null
      },
      "badge": "http://e0.365dm.com/football/badges/96/934.png",
      "id": 934,
      "name": {
        "full": "Bayer Leverkusen",
        "short": "Leverkusen"
      },
      "synopsis": null
    }
  },
  "summary": null
}
```

## Video data
To test video data, change `"data": "sample/data.json"` within `package.json` to `"data": "sample/data-video.json"`

## Opta status codes

| Status        | Label           | Description  |
| ------------- |-------------| -----|
| 0             |           |   Fixture has not started |
| 1 | LIVE  |    Fixture is in-play |
| 2 | HT | Fixture is at half-time |
| 3 | LIVE | Fixture is in-play |
| 4 | FT | Fixture is a full-time result |
| 5 | ET | Fixture is in extra time |
| 6 | ET |  Fixture is in extra time |
| 7 | ET | Fixture is in extra time |
| 8 | AET | Fixture is a full-time result after extra time |
| 9 | ET | Fixture is in extra time and penalties are been played |
| 10 | ET | Fixture is in extra time and penalties are been played |
| 11 | AET | Fixture is a full-time result after extra time and penalties |
| 12 | FT | Fixture is a full-time result |
| 13 | P-P | Fixture is postponed |
| 14 | LIVE | Fixture suspended |
| 15 | LIVE | Fixture resumed |
| 16 | C-C | Fixture is cancelled |
| 17 | A-A | Fixture is abandoned |
| 18 | ET | Fixture is in extra time |
| 21 | ET | Fixture is in extra time |
| 30 |  | Fixture has not started (team lineups in)
| 40 | LIVE | Fixture in-play |
| 50 | ET | Fixture is in extra time |

### Setting component state

The front end component can be set to one of the above states by adding a data-status attribute to the root element. For example to set the component to be in-play, set the data-status to 1

```html
<div class="sdc-site-match-header" data-status="1" data-sport="football">
```

To set it to be a result, set the data-status to be 4:

```html
<div class="sdc-site-match-header" data-status="4" data-sport="football">
```

and so on.

## Match events
Match events (aka synopsis) are set as an events array against each player. Each event item should contain the time, the eventId, the eventType and a boolean key that matches the string used for the eventType:

```
"synopsis": [
  {
    "player":"G Cahill",
    "events":[
      {
        "time":"2",
        "eventId":1,
        "eventType":"goal",
        "goal": true
      },
      {
        "time":"12",
        "eventId":2,
        "eventType":"penalty",
        "penalty": true
      },
      {
        "time":"17",
        "eventId":3,
        "eventType":"own-goal",
        "ownGoal": true
      },
      {
        "time":"35",
        "eventId":5,
        "eventType":"red-card",
        "redCard": true
      }
    ]
  }
]
```

|  eventId | eventType | boolean key |
|---|---|---|
| 1  | goal  |  goal |
| 2 | penalty  |  penalty |
| 3  | own-goal  |  ownGoal |
| 5 | red-card |  redCard |

## Live updating
The match header component can be set to live update by pointing it at the scorecentre node endpoint with the specified match id.

The match id should be added to the components root dom node, along with the component name and the url to the data:

```html
<div class="sdc-site-match-header" data-status="0" data-id="353105" data-url="">
```

```html
<div data-component-name="sdc-site-match-header" data-url="http://d.365dm.com/api/score-centre/v1/multisport/fixture/?football=353105">
```

or directly to the component function:

```html
window['sdc-site-match-header'](document.querySelector('.sdc-site-match-header'),{
  url: http://d.365dm.com/api/score-centre/v1/multisport/fixture/?football=353105
})
```

### Other options
The following options can be passed to the live updating component:

| option        | data attribute | description  |
| ------------- |-------------| -----|
| url            | data-url   | url of live scores json end point |
| componentName | data-component-name | the name of the component |
| interval | data-interval | time interval in seconds for polling data |
| fetchPolyfill | data-fetch-polyfill | this component uses the fetch api, falling back to a polyfill for non supporting devices. If not set, defaults to https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch |

## Additional information

### TV details
An optional TV channel logo can be attached to the match editor by setting a tvListing object in the data with the logo and channel name:

```html
"tvListing": {
  "channel": "Sky Sports 1",
  "logo": "http://www.skysports.com/core/img/channels/Sky-Sports-1-Logo.svg"
}
```

### Related links
Related links, for example to sky go, can be added to the match header by specifying an array of link objects:

```html
"links": [
  {
    "label": "Jetzt Sky bestellen",
    "link": "http://sky.de/jetzt-sky-bestellen"
  },
  {
    "label": "Jetzt Tagesticket holen",
    "link": "http://sky.de/jetzt-tagesticket-holen",
    "external": true
  }
]
```

### Image Server Url
The image server url needs to be specified as `imageServerUrl` at the root of the data. When using the component in isolation, this can be set in component data as demonstrated in `sample/data.json` however when
using within an app, this will need to be set in the root of you view data for the `@root` (see [http://handlebarsjs.com/reference.html](http://handlebarsjs.com/reference.html) for more details).

`{{@root.imageServerUrl}}`

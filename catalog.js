window.WESTLINE_CATALOG = [
  {
    "id": "environment",
    "title": "Wetter & Uhrzeit",
    "icon": "☁",
    "description": "Atmosphäre, Licht und Tageszeit",
    "items": [
      {
        "id": "weather.set",
        "label": "Wetter wählen",
        "kind": "select",
        "options": [
          {
            "value": "EXTRASUNNY",
            "label": "Sonnig"
          },
          {
            "value": "CLEAR",
            "label": "Klar"
          },
          {
            "value": "CLOUDS",
            "label": "Wolkig"
          },
          {
            "value": "OVERCAST",
            "label": "Bedeckt"
          },
          {
            "value": "RAIN",
            "label": "Regen"
          },
          {
            "value": "THUNDER",
            "label": "Gewitter"
          },
          {
            "value": "FOGGY",
            "label": "Nebel"
          },
          {
            "value": "SMOG",
            "label": "Diesig"
          },
          {
            "value": "CLEARING",
            "label": "Aufklarend"
          },
          {
            "value": "XMAS",
            "label": "Schnee"
          }
        ],
        "description": ""
      },
      {
        "id": "weather.rain",
        "label": "Regenintensität",
        "kind": "range",
        "min": 0,
        "max": 1,
        "step": 0.1,
        "value": 0.5,
        "unit": ""
      },
      {
        "id": "weather.wind",
        "label": "Windstärke",
        "kind": "range",
        "min": 0,
        "max": 10,
        "step": 0.5,
        "value": 0,
        "unit": ""
      },
      {
        "id": "weather.freeze",
        "label": "Wetter festhalten",
        "kind": "toggle"
      },
      {
        "id": "weather.reset",
        "label": "Wetter zurücksetzen",
        "kind": "button"
      },
      {
        "id": "time.hour",
        "label": "Stunde",
        "kind": "range",
        "min": 0,
        "max": 23,
        "step": 1,
        "value": 18,
        "unit": ""
      },
      {
        "id": "time.minute",
        "label": "Minute",
        "kind": "range",
        "min": 0,
        "max": 59,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "time.freeze",
        "label": "Uhrzeit fixieren",
        "kind": "toggle"
      },
      {
        "id": "time.sync",
        "label": "Lokale Uhrzeit übernehmen",
        "kind": "button"
      },
      {
        "id": "time.preset.sunrise",
        "label": "Sonnenaufgang",
        "kind": "button"
      },
      {
        "id": "time.preset.noon",
        "label": "Mittag",
        "kind": "button"
      },
      {
        "id": "time.preset.golden",
        "label": "Golden Hour",
        "kind": "button"
      },
      {
        "id": "time.preset.night",
        "label": "Nacht",
        "kind": "button"
      }
    ]
  },
  {
    "id": "spawn",
    "title": "Fahrzeuge spawnen",
    "icon": "🚗",
    "description": "Fahrzeuge wählen und verwalten",
    "items": [
      {
        "id": "vehicle.spawn.model",
        "label": "Fahrzeugmodell",
        "kind": "text",
        "placeholder": "z. B. sultan, adder",
        "description": ""
      },
      {
        "id": "vehicle.spawn.preset",
        "label": "Schnellauswahl",
        "kind": "select",
        "options": [
          {
            "value": "sultan",
            "label": "Sultan"
          },
          {
            "value": "sultanrs",
            "label": "Sultan RS"
          },
          {
            "value": "comet2",
            "label": "Comet"
          },
          {
            "value": "elegy2",
            "label": "Elegy RH8"
          },
          {
            "value": "buffalo",
            "label": "Buffalo"
          },
          {
            "value": "tailgater",
            "label": "Tailgater"
          },
          {
            "value": "bati",
            "label": "Bati 801"
          },
          {
            "value": "blista",
            "label": "Blista"
          },
          {
            "value": "dubsta",
            "label": "Dubsta"
          },
          {
            "value": "futo",
            "label": "Futo"
          },
          {
            "value": "ninef",
            "label": "9F"
          },
          {
            "value": "sentinel",
            "label": "Sentinel"
          },
          {
            "value": "banshee",
            "label": "Banshee"
          },
          {
            "value": "infernus",
            "label": "Infernus"
          }
        ],
        "description": ""
      },
      {
        "id": "vehicle.delete",
        "label": "Aktuelles Fahrzeug entfernen",
        "kind": "button"
      },
      {
        "id": "vehicle.flip",
        "label": "Fahrzeug aufrichten",
        "kind": "button"
      },
      {
        "id": "vehicle.enter",
        "label": "Nächstes Fahrzeug betreten",
        "kind": "button"
      },
      {
        "id": "vehicle.bring",
        "label": "Eigenes Fahrzeug zu dir",
        "kind": "button"
      },
      {
        "id": "vehicle.delete_spawned",
        "label": "Eigene gespawnte Fahrzeuge löschen",
        "kind": "button"
      }
    ]
  },
  {
    "id": "garage",
    "title": "Meine Garage",
    "icon": "🅿",
    "description": "Fünf lokale Fahrzeug-Speicherplätze",
    "items": [
      {
        "id": "garage.save.1",
        "label": "Slot 1 speichern",
        "kind": "button"
      },
      {
        "id": "garage.load.1",
        "label": "Slot 1 laden",
        "kind": "button"
      },
      {
        "id": "garage.clear.1",
        "label": "Slot 1 löschen",
        "kind": "button"
      },
      {
        "id": "garage.save.2",
        "label": "Slot 2 speichern",
        "kind": "button"
      },
      {
        "id": "garage.load.2",
        "label": "Slot 2 laden",
        "kind": "button"
      },
      {
        "id": "garage.clear.2",
        "label": "Slot 2 löschen",
        "kind": "button"
      },
      {
        "id": "garage.save.3",
        "label": "Slot 3 speichern",
        "kind": "button"
      },
      {
        "id": "garage.load.3",
        "label": "Slot 3 laden",
        "kind": "button"
      },
      {
        "id": "garage.clear.3",
        "label": "Slot 3 löschen",
        "kind": "button"
      },
      {
        "id": "garage.save.4",
        "label": "Slot 4 speichern",
        "kind": "button"
      },
      {
        "id": "garage.load.4",
        "label": "Slot 4 laden",
        "kind": "button"
      },
      {
        "id": "garage.clear.4",
        "label": "Slot 4 löschen",
        "kind": "button"
      },
      {
        "id": "garage.save.5",
        "label": "Slot 5 speichern",
        "kind": "button"
      },
      {
        "id": "garage.load.5",
        "label": "Slot 5 laden",
        "kind": "button"
      },
      {
        "id": "garage.clear.5",
        "label": "Slot 5 löschen",
        "kind": "button"
      }
    ]
  },
  {
    "id": "maintenance",
    "title": "Fahrzeugpflege",
    "icon": "🧽",
    "description": "Zustand, Tank und Reparatur",
    "items": [
      {
        "id": "vehicle.repair",
        "label": "Komplett reparieren",
        "kind": "button"
      },
      {
        "id": "vehicle.clean",
        "label": "Waschen",
        "kind": "button"
      },
      {
        "id": "vehicle.dirty",
        "label": "Stark verschmutzen",
        "kind": "button"
      },
      {
        "id": "vehicle.tyres",
        "label": "Reifen reparieren",
        "kind": "button"
      },
      {
        "id": "vehicle.engine.fix",
        "label": "Motor wiederherstellen",
        "kind": "button"
      },
      {
        "id": "vehicle.dirt",
        "label": "Verschmutzung",
        "kind": "range",
        "min": 0,
        "max": 15,
        "step": 0.5,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.fuel",
        "label": "Tankfüllstand",
        "kind": "range",
        "min": 0,
        "max": 100,
        "step": 5,
        "value": 100,
        "unit": "%"
      },
      {
        "id": "vehicle.health.engine",
        "label": "Motorzustand",
        "kind": "range",
        "min": 100,
        "max": 1000,
        "step": 50,
        "value": 1000,
        "unit": ""
      },
      {
        "id": "vehicle.health.body",
        "label": "Karosseriezustand",
        "kind": "range",
        "min": 100,
        "max": 1000,
        "step": 50,
        "value": 1000,
        "unit": ""
      },
      {
        "id": "vehicle.tyres.protect",
        "label": "Reifen unzerstörbar",
        "kind": "toggle"
      }
    ]
  },
  {
    "id": "vehicle_power",
    "title": "Motor & Schlüssel",
    "icon": "🔑",
    "description": "Motor, Türenverriegelung und Radio",
    "items": [
      {
        "id": "vehicle.engine.on",
        "label": "Motor starten",
        "kind": "button"
      },
      {
        "id": "vehicle.engine.off",
        "label": "Motor ausschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.engine.toggle",
        "label": "Motor umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.lock",
        "label": "Fahrzeug abschließen",
        "kind": "button"
      },
      {
        "id": "vehicle.unlock",
        "label": "Fahrzeug aufschließen",
        "kind": "button"
      },
      {
        "id": "vehicle.radio.off",
        "label": "Radio ausschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.radio.station",
        "label": "Radiosender",
        "kind": "select",
        "options": [
          {
            "value": "RADIO_01_CLASS_ROCK",
            "label": "Los Santos Rock"
          },
          {
            "value": "RADIO_02_POP",
            "label": "Non-Stop Pop"
          },
          {
            "value": "RADIO_03_HIPHOP_NEW",
            "label": "Radio Los Santos"
          },
          {
            "value": "RADIO_04_PUNK",
            "label": "Channel X"
          },
          {
            "value": "RADIO_05_TALK_01",
            "label": "West Coast Talk"
          },
          {
            "value": "RADIO_06_COUNTRY",
            "label": "Rebel Radio"
          },
          {
            "value": "OFF",
            "label": "Radio aus"
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "id": "doors",
    "title": "Fahrzeugtüren",
    "icon": "🚪",
    "description": "Einzelne Türen, Motorhaube und Kofferraum",
    "items": [
      {
        "id": "vehicle.door.0.open",
        "label": "Fahrertür öffnen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.0.close",
        "label": "Fahrertür schließen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.1.open",
        "label": "Beifahrertür öffnen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.1.close",
        "label": "Beifahrertür schließen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.2.open",
        "label": "Hinten links öffnen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.2.close",
        "label": "Hinten links schließen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.3.open",
        "label": "Hinten rechts öffnen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.3.close",
        "label": "Hinten rechts schließen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.4.open",
        "label": "Motorhaube öffnen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.4.close",
        "label": "Motorhaube schließen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.5.open",
        "label": "Kofferraum öffnen",
        "kind": "button"
      },
      {
        "id": "vehicle.door.5.close",
        "label": "Kofferraum schließen",
        "kind": "button"
      },
      {
        "id": "vehicle.doors.close",
        "label": "Alle Türen schließen",
        "kind": "button"
      }
    ]
  },
  {
    "id": "windows",
    "title": "Fenster & Glas",
    "icon": "🪟",
    "description": "Alle Fenster einzeln bedienen",
    "items": [
      {
        "id": "vehicle.window.0.down",
        "label": "Vorne links herunter",
        "kind": "button"
      },
      {
        "id": "vehicle.window.0.up",
        "label": "Vorne links hoch",
        "kind": "button"
      },
      {
        "id": "vehicle.window.1.down",
        "label": "Vorne rechts herunter",
        "kind": "button"
      },
      {
        "id": "vehicle.window.1.up",
        "label": "Vorne rechts hoch",
        "kind": "button"
      },
      {
        "id": "vehicle.window.2.down",
        "label": "Hinten links herunter",
        "kind": "button"
      },
      {
        "id": "vehicle.window.2.up",
        "label": "Hinten links hoch",
        "kind": "button"
      },
      {
        "id": "vehicle.window.3.down",
        "label": "Hinten rechts herunter",
        "kind": "button"
      },
      {
        "id": "vehicle.window.3.up",
        "label": "Hinten rechts hoch",
        "kind": "button"
      },
      {
        "id": "vehicle.windows.down",
        "label": "Alle Fenster herunter",
        "kind": "button"
      },
      {
        "id": "vehicle.windows.up",
        "label": "Alle Fenster hoch",
        "kind": "button"
      },
      {
        "id": "vehicle.window.tint",
        "label": "Scheibentönung",
        "kind": "select",
        "options": [
          {
            "value": "0",
            "label": "Keine"
          },
          {
            "value": "1",
            "label": "Pure Black"
          },
          {
            "value": "2",
            "label": "Dark Smoke"
          },
          {
            "value": "3",
            "label": "Light Smoke"
          },
          {
            "value": "4",
            "label": "Serie"
          },
          {
            "value": "5",
            "label": "Limo"
          },
          {
            "value": "6",
            "label": "Grün"
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "id": "lights",
    "title": "Licht & Blinker",
    "icon": "💡",
    "description": "Scheinwerfer, Blinker und Innenraum",
    "items": [
      {
        "id": "vehicle.light.on",
        "label": "Scheinwerfer an",
        "kind": "button"
      },
      {
        "id": "vehicle.light.off",
        "label": "Scheinwerfer aus",
        "kind": "button"
      },
      {
        "id": "vehicle.light.auto",
        "label": "Licht automatisch",
        "kind": "button"
      },
      {
        "id": "vehicle.indicator.left",
        "label": "Blinker links",
        "kind": "button"
      },
      {
        "id": "vehicle.indicator.right",
        "label": "Blinker rechts",
        "kind": "button"
      },
      {
        "id": "vehicle.indicator.hazard",
        "label": "Warnblinker",
        "kind": "button"
      },
      {
        "id": "vehicle.indicator.off",
        "label": "Blinker aus",
        "kind": "button"
      },
      {
        "id": "vehicle.neon.on",
        "label": "Neonlicht an",
        "kind": "button"
      },
      {
        "id": "vehicle.neon.off",
        "label": "Neonlicht aus",
        "kind": "button"
      },
      {
        "id": "vehicle.light.high",
        "label": "Fernlicht",
        "kind": "toggle"
      },
      {
        "id": "vehicle.light.interior",
        "label": "Innenbeleuchtung",
        "kind": "toggle"
      },
      {
        "id": "vehicle.neon.color",
        "label": "Neonfarbe",
        "kind": "select",
        "options": [
          {
            "value": "blue",
            "label": "Blau"
          },
          {
            "value": "white",
            "label": "Weiß"
          },
          {
            "value": "red",
            "label": "Rot"
          },
          {
            "value": "green",
            "label": "Grün"
          },
          {
            "value": "purple",
            "label": "Lila"
          },
          {
            "value": "cyan",
            "label": "Cyan"
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "id": "tuning",
    "title": "Werkstatt & Tuning",
    "icon": "🛠",
    "description": "Modifikationen und Fahrzeugoptik",
    "items": [
      {
        "id": "vehicle.mod.11",
        "label": "Motorupgrade",
        "kind": "range",
        "min": -1,
        "max": 4,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.mod.12",
        "label": "Bremsen",
        "kind": "range",
        "min": -1,
        "max": 3,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.mod.13",
        "label": "Getriebe",
        "kind": "range",
        "min": -1,
        "max": 3,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.mod.15",
        "label": "Fahrwerk",
        "kind": "range",
        "min": -1,
        "max": 4,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.mod.16",
        "label": "Schutz",
        "kind": "range",
        "min": -1,
        "max": 5,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.mod.14",
        "label": "Hupe",
        "kind": "range",
        "min": -1,
        "max": 15,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.mod.23",
        "label": "Felgen",
        "kind": "range",
        "min": -1,
        "max": 15,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.turbo",
        "label": "Turbo",
        "kind": "toggle"
      },
      {
        "id": "vehicle.xenon",
        "label": "Xenonlicht",
        "kind": "toggle"
      },
      {
        "id": "vehicle.livery",
        "label": "Lackierung / Livery",
        "kind": "range",
        "min": -1,
        "max": 20,
        "step": 1,
        "value": 0,
        "unit": ""
      },
      {
        "id": "vehicle.plate",
        "label": "Kennzeichen",
        "kind": "text",
        "placeholder": "WESTLINE",
        "description": ""
      },
      {
        "id": "vehicle.color.primary",
        "label": "Primärfarbe",
        "kind": "select",
        "options": [
          {
            "value": "0",
            "label": "Schwarz"
          },
          {
            "value": "1",
            "label": "Graphit"
          },
          {
            "value": "12",
            "label": "Matt-Schwarz"
          },
          {
            "value": "27",
            "label": "Rot"
          },
          {
            "value": "64",
            "label": "Blau"
          },
          {
            "value": "88",
            "label": "Gelb"
          },
          {
            "value": "111",
            "label": "Weiß"
          },
          {
            "value": "120",
            "label": "Chrom"
          }
        ],
        "description": ""
      },
      {
        "id": "vehicle.color.secondary",
        "label": "Sekundärfarbe",
        "kind": "select",
        "options": [
          {
            "value": "0",
            "label": "Schwarz"
          },
          {
            "value": "1",
            "label": "Graphit"
          },
          {
            "value": "12",
            "label": "Matt-Schwarz"
          },
          {
            "value": "27",
            "label": "Rot"
          },
          {
            "value": "64",
            "label": "Blau"
          },
          {
            "value": "88",
            "label": "Gelb"
          },
          {
            "value": "111",
            "label": "Weiß"
          },
          {
            "value": "120",
            "label": "Chrom"
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "id": "handling",
    "title": "Fahrkomfort",
    "icon": "🛣",
    "description": "Geschwindigkeitslimit und Cruise Control",
    "items": [
      {
        "id": "vehicle.speed.cap",
        "label": "Geschwindigkeitslimit",
        "kind": "range",
        "min": 30,
        "max": 200,
        "step": 5,
        "value": 100,
        "unit": "km/h"
      },
      {
        "id": "vehicle.speed.reset",
        "label": "Limit deaktivieren",
        "kind": "button"
      },
      {
        "id": "vehicle.cruise",
        "label": "Tempomat",
        "kind": "toggle"
      },
      {
        "id": "vehicle.cruise.speed",
        "label": "Tempomat-Ziel",
        "kind": "range",
        "min": 30,
        "max": 130,
        "step": 5,
        "value": 70,
        "unit": "km/h"
      },
      {
        "id": "vehicle.cruise.cancel",
        "label": "Tempomat ausschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.trip.reset",
        "label": "Fahrstrecke zurücksetzen",
        "kind": "button"
      }
    ]
  },
  {
    "id": "player",
    "title": "Charakter",
    "icon": "🧍",
    "description": "Spielerkomfort und Erscheinung",
    "items": [
      {
        "id": "player.heal",
        "label": "Gesundheit auffüllen",
        "kind": "button"
      },
      {
        "id": "player.stamina",
        "label": "Ausdauer auffüllen",
        "kind": "button"
      },
      {
        "id": "player.clear",
        "label": "Animation beenden",
        "kind": "button"
      },
      {
        "id": "player.visible",
        "label": "Sichtbar machen",
        "kind": "button"
      },
      {
        "id": "player.reset",
        "label": "Charakter zurücksetzen",
        "kind": "button"
      },
      {
        "id": "player.clean",
        "label": "Charakter säubern",
        "kind": "button"
      },
      {
        "id": "player.teleport.ground",
        "label": "Auf sicheren Boden setzen",
        "kind": "button"
      },
      {
        "id": "player.invincible",
        "label": "Unverwundbar (Test)",
        "kind": "toggle"
      },
      {
        "id": "player.invisible",
        "label": "Unsichtbar (Test)",
        "kind": "toggle"
      },
      {
        "id": "player.model",
        "label": "Charaktermodell",
        "kind": "select",
        "options": [
          {
            "value": "mp_m_freemode_01",
            "label": "Freemode männlich"
          },
          {
            "value": "mp_f_freemode_01",
            "label": "Freemode weiblich"
          },
          {
            "value": "a_m_y_business_01",
            "label": "Business"
          },
          {
            "value": "a_f_y_tourist_01",
            "label": "Touristin"
          },
          {
            "value": "a_m_m_bevhills_02",
            "label": "Anwohner"
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "id": "emotes",
    "title": "Animationen",
    "icon": "🎭",
    "description": "Bewegungen und Rollenspiel-Szenarien",
    "items": [
      {
        "id": "emote.WORLD_HUMAN_STAND_MOBILE",
        "label": "Handy benutzen",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_CLIPBOARD",
        "label": "Klemmbrett",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_TOURIST_MAP",
        "label": "Karte anschauen",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_BINOCULARS",
        "label": "Fernglas",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_STAND_IMPATIENT",
        "label": "Warten",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_YOGA",
        "label": "Yoga",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_PICNIC",
        "label": "Picknick",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_HANG_OUT_STREET",
        "label": "Entspannt stehen",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_CHEERING",
        "label": "Jubeln",
        "kind": "button"
      },
      {
        "id": "emote.WORLD_HUMAN_MUSCLE_FLEX",
        "label": "Posieren",
        "kind": "button"
      },
      {
        "id": "emote.stop",
        "label": "Animation stoppen",
        "kind": "button"
      }
    ]
  },
  {
    "id": "npc",
    "title": "NPC Director",
    "icon": "👥",
    "description": "Eigene lokale NPCs erstellen und steuern",
    "items": [
      {
        "id": "npc.spawn.model",
        "label": "NPC-Modell",
        "kind": "text",
        "placeholder": "a_m_y_business_01",
        "description": ""
      },
      {
        "id": "npc.spawn.preset",
        "label": "NPC-Typ",
        "kind": "select",
        "options": [
          {
            "value": "a_m_y_business_01",
            "label": "Geschäftsperson"
          },
          {
            "value": "a_f_y_tourist_01",
            "label": "Touristin"
          },
          {
            "value": "a_m_y_hipster_01",
            "label": "Hipster"
          },
          {
            "value": "a_m_m_bevhills_02",
            "label": "Anwohner"
          },
          {
            "value": "a_f_y_business_01",
            "label": "Businessfrau"
          },
          {
            "value": "a_m_m_farmer_01",
            "label": "Landbewohner"
          }
        ],
        "description": ""
      },
      {
        "id": "npc.follow",
        "label": "Letzter NPC folgt dir",
        "kind": "button"
      },
      {
        "id": "npc.wander",
        "label": "Letzter NPC spaziert",
        "kind": "button"
      },
      {
        "id": "npc.stand",
        "label": "Letzter NPC bleibt stehen",
        "kind": "button"
      },
      {
        "id": "npc.sit",
        "label": "Letzter NPC sitzt",
        "kind": "button"
      },
      {
        "id": "npc.go.waypoint",
        "label": "Letzter NPC zum Wegpunkt",
        "kind": "button"
      },
      {
        "id": "npc.delete.last",
        "label": "Letzten NPC löschen",
        "kind": "button"
      },
      {
        "id": "npc.delete.all",
        "label": "Alle eigenen NPCs löschen",
        "kind": "button"
      }
    ]
  },
  {
    "id": "city",
    "title": "Stadt & Verkehr",
    "icon": "🏙",
    "description": "Weltlebendigkeit und NPC-Dichte",
    "items": [
      {
        "id": "city.traffic",
        "label": "Verkehr",
        "kind": "range",
        "min": 0,
        "max": 100,
        "step": 5,
        "value": 70,
        "unit": "%"
      },
      {
        "id": "city.parked",
        "label": "Parkende Autos",
        "kind": "range",
        "min": 0,
        "max": 100,
        "step": 5,
        "value": 70,
        "unit": "%"
      },
      {
        "id": "city.peds",
        "label": "Fußgänger",
        "kind": "range",
        "min": 0,
        "max": 100,
        "step": 5,
        "value": 70,
        "unit": "%"
      },
      {
        "id": "city.scenario",
        "label": "Szenerie-NPCs",
        "kind": "range",
        "min": 0,
        "max": 100,
        "step": 5,
        "value": 70,
        "unit": "%"
      },
      {
        "id": "city.preset.quiet",
        "label": "Ruhige Stadt",
        "kind": "button"
      },
      {
        "id": "city.preset.normal",
        "label": "Normaler Verkehr",
        "kind": "button"
      },
      {
        "id": "city.preset.busy",
        "label": "Lebendige Stadt",
        "kind": "button"
      },
      {
        "id": "city.preset.empty",
        "label": "Leere Straßen",
        "kind": "button"
      },
      {
        "id": "city.preset.pedestrian",
        "label": "Nur Fußgänger",
        "kind": "button"
      }
    ]
  },
  {
    "id": "navigation",
    "title": "Navigation & Orte",
    "icon": "🧭",
    "description": "Teleport, GPS und Lieblingsorte",
    "items": [
      {
        "id": "nav.gps",
        "label": "GPS-Ziel setzen",
        "kind": "select",
        "options": [
          {
            "value": "airport",
            "label": "Flughafen LSIA"
          },
          {
            "value": "beach",
            "label": "Del Perro Beach"
          },
          {
            "value": "vinewood",
            "label": "Vinewood Hills"
          },
          {
            "value": "sandy",
            "label": "Sandy Shores"
          },
          {
            "value": "paleto",
            "label": "Paleto Bay"
          },
          {
            "value": "casino",
            "label": "Casino"
          },
          {
            "value": "legion",
            "label": "Legion Square"
          },
          {
            "value": "pier",
            "label": "Del Perro Pier"
          },
          {
            "value": "observatory",
            "label": "Observatorium"
          },
          {
            "value": "cityhall",
            "label": "Rathaus"
          }
        ],
        "description": ""
      },
      {
        "id": "nav.teleport",
        "label": "Direkt hinfahren / teleportieren",
        "kind": "select",
        "options": [
          {
            "value": "airport",
            "label": "Flughafen LSIA"
          },
          {
            "value": "beach",
            "label": "Del Perro Beach"
          },
          {
            "value": "vinewood",
            "label": "Vinewood Hills"
          },
          {
            "value": "sandy",
            "label": "Sandy Shores"
          },
          {
            "value": "paleto",
            "label": "Paleto Bay"
          },
          {
            "value": "casino",
            "label": "Casino"
          },
          {
            "value": "legion",
            "label": "Legion Square"
          },
          {
            "value": "pier",
            "label": "Del Perro Pier"
          },
          {
            "value": "observatory",
            "label": "Observatorium"
          },
          {
            "value": "cityhall",
            "label": "Rathaus"
          }
        ],
        "description": ""
      },
      {
        "id": "nav.waypoint",
        "label": "Zum Karten-Wegpunkt",
        "kind": "button"
      },
      {
        "id": "nav.coordinates",
        "label": "Koordinaten anzeigen",
        "kind": "button"
      },
      {
        "id": "nav.coords",
        "label": "Zu Koordinaten",
        "kind": "text",
        "placeholder": "x, y, z",
        "description": ""
      },
      {
        "id": "nav.gps.clear",
        "label": "Wegpunkt entfernen",
        "kind": "button"
      },
      {
        "id": "nav.save.1",
        "label": "Position speichern 1",
        "kind": "button"
      },
      {
        "id": "nav.load.1",
        "label": "Position laden 1",
        "kind": "button"
      },
      {
        "id": "nav.save.2",
        "label": "Position speichern 2",
        "kind": "button"
      },
      {
        "id": "nav.load.2",
        "label": "Position laden 2",
        "kind": "button"
      },
      {
        "id": "nav.save.3",
        "label": "Position speichern 3",
        "kind": "button"
      },
      {
        "id": "nav.load.3",
        "label": "Position laden 3",
        "kind": "button"
      },
      {
        "id": "nav.save.4",
        "label": "Position speichern 4",
        "kind": "button"
      },
      {
        "id": "nav.load.4",
        "label": "Position laden 4",
        "kind": "button"
      },
      {
        "id": "nav.save.5",
        "label": "Position speichern 5",
        "kind": "button"
      },
      {
        "id": "nav.load.5",
        "label": "Position laden 5",
        "kind": "button"
      }
    ]
  },
  {
    "id": "hud",
    "title": "HUD & Anzeigen",
    "icon": "📊",
    "description": "Fahrinformationen und Sichtbarkeit",
    "items": [
      {
        "id": "hud.radar",
        "label": "Minimap anzeigen",
        "kind": "toggle"
      },
      {
        "id": "hud.gamehud",
        "label": "GTA-HUD anzeigen",
        "kind": "toggle"
      },
      {
        "id": "hud.speed",
        "label": "Digitale Geschwindigkeitsanzeige",
        "kind": "toggle"
      },
      {
        "id": "hud.coords",
        "label": "Koordinaten-Overlay",
        "kind": "toggle"
      },
      {
        "id": "hud.fps",
        "label": "FPS-Anzeige",
        "kind": "toggle"
      },
      {
        "id": "hud.trip",
        "label": "Kilometerzähler",
        "kind": "toggle"
      },
      {
        "id": "hud.clock",
        "label": "Uhr-Overlay",
        "kind": "toggle"
      },
      {
        "id": "hud.vehicle",
        "label": "Fahrzeugstatus",
        "kind": "toggle"
      },
      {
        "id": "hud.reset",
        "label": "HUD-Einstellungen zurücksetzen",
        "kind": "button"
      },
      {
        "id": "hud.scale",
        "label": "Overlay-Größe",
        "kind": "range",
        "min": 70,
        "max": 140,
        "step": 5,
        "value": 100,
        "unit": "%"
      }
    ]
  },
  {
    "id": "camera",
    "title": "Kamera & Grafik",
    "icon": "📷",
    "description": "Perspektive und Farbfilter",
    "items": [
      {
        "id": "camera.first",
        "label": "First Person",
        "kind": "button"
      },
      {
        "id": "camera.third",
        "label": "Third Person",
        "kind": "button"
      },
      {
        "id": "camera.far",
        "label": "Weite Perspektive",
        "kind": "button"
      },
      {
        "id": "visual.filter",
        "label": "Look / Color Grading",
        "kind": "select",
        "options": [
          {
            "value": "none",
            "label": "Standard"
          },
          {
            "value": "cinema",
            "label": "Kino"
          },
          {
            "value": "NG_filmic01",
            "label": "Filmic"
          },
          {
            "value": "NG_filmic02",
            "label": "Soft-Film"
          },
          {
            "value": "MP_corona_tournament",
            "label": "Kühler Look"
          },
          {
            "value": "scanline_cam_cheap",
            "label": "Retro"
          }
        ],
        "description": ""
      },
      {
        "id": "visual.strength",
        "label": "Filterstärke",
        "kind": "range",
        "min": 0,
        "max": 1,
        "step": 0.1,
        "value": 0.5,
        "unit": ""
      },
      {
        "id": "visual.reset",
        "label": "Grafikfilter zurücksetzen",
        "kind": "button"
      },
      {
        "id": "visual.blackout",
        "label": "Straßenbeleuchtung aus",
        "kind": "toggle"
      },
      {
        "id": "camera.shake.off",
        "label": "Kamerawackeln stoppen",
        "kind": "button"
      }
    ]
  },
  {
    "id": "garage_tools",
    "title": "Fahrzeug-Extras",
    "icon": "🔧",
    "description": "Kleine technische Fahrzeugfunktionen",
    "items": [
      {
        "id": "vehicle.extra.1",
        "label": "Fahrzeug-Extra 1 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.2",
        "label": "Fahrzeug-Extra 2 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.3",
        "label": "Fahrzeug-Extra 3 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.4",
        "label": "Fahrzeug-Extra 4 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.5",
        "label": "Fahrzeug-Extra 5 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.6",
        "label": "Fahrzeug-Extra 6 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.7",
        "label": "Fahrzeug-Extra 7 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.8",
        "label": "Fahrzeug-Extra 8 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.extra.9",
        "label": "Fahrzeug-Extra 9 umschalten",
        "kind": "button"
      },
      {
        "id": "vehicle.mods.max",
        "label": "Verfügbare Leistungs-Upgrades maximieren",
        "kind": "button"
      },
      {
        "id": "vehicle.mods.stock",
        "label": "Leistungs-Upgrades auf Serie",
        "kind": "button"
      },
      {
        "id": "vehicle.window.shatter.reset",
        "label": "Fensterscheiben reparieren",
        "kind": "button"
      },
      {
        "id": "vehicle.freeze",
        "label": "Fahrzeug parken / einfrieren",
        "kind": "button"
      },
      {
        "id": "vehicle.unfreeze",
        "label": "Fahrzeug freigeben",
        "kind": "button"
      }
    ]
  },
  {
    "id": "scenes",
    "title": "Fahrprofile & Szenen",
    "icon": "🌇",
    "description": "Eine komplette Atmosphäre auf Knopfdruck",
    "items": [
      {
        "id": "scene.morning",
        "label": "Morning Drive",
        "kind": "button"
      },
      {
        "id": "scene.sunset",
        "label": "Golden-Hour Cruise",
        "kind": "button"
      },
      {
        "id": "scene.night",
        "label": "Night Ride",
        "kind": "button"
      },
      {
        "id": "scene.rain",
        "label": "Rainy Evening",
        "kind": "button"
      },
      {
        "id": "scene.fog",
        "label": "Foggy Morning",
        "kind": "button"
      },
      {
        "id": "scene.city",
        "label": "City Lights",
        "kind": "button"
      },
      {
        "id": "scene.clear",
        "label": "Clear Day",
        "kind": "button"
      },
      {
        "id": "scene.photo",
        "label": "Photo Session",
        "kind": "button"
      }
    ]
  },
  {
    "id": "tools",
    "title": "Admin & Tools",
    "icon": "⚙",
    "description": "Diagnose, Neustart und lokale Werkzeuge",
    "items": [
      {
        "id": "tools.help",
        "label": "Kurzhilfe anzeigen",
        "kind": "button"
      },
      {
        "id": "tools.status",
        "label": "Spielstatus anzeigen",
        "kind": "button"
      },
      {
        "id": "tools.reset",
        "label": "Alle lokalen Einstellungen zurücksetzen",
        "kind": "button"
      },
      {
        "id": "tools.cleanup",
        "label": "Eigene Entities entfernen",
        "kind": "button"
      },
      {
        "id": "tools.reload",
        "label": "UI neu laden",
        "kind": "button"
      },
      {
        "id": "tools.position",
        "label": "Position im F8-Log ausgeben",
        "kind": "button"
      },
      {
        "id": "tools.vehicleinfo",
        "label": "Fahrzeugdaten ausgeben",
        "kind": "button"
      },
      {
        "id": "tools.waypoint",
        "label": "Wegpunkt-Infos ausgeben",
        "kind": "button"
      }
    ]
  }
];

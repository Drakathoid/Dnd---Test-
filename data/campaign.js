window.CAMPAIGN_DATA={
  "campaign": {
    "name": "Mobile Test Campaign"
  },
  "library": {
    "spells": [
      {
        "id": "bless",
        "name": "Bless",
        "category": "Spell",
        "level": 1,
        "actionType": "action",
        "summary": "Up to 3 creatures add 1d4 to attacks and saving throws.",
        "concentration": true,
        "cost": {
          "spellSlot": 1,
          "selectSlot": true
        },
        "target": {
          "mode": "multi",
          "max": 3
        },
        "effects": [
          {
            "name": "Bless",
            "target": "selected",
            "duration": "concentration",
            "attackBonus": "1d4",
            "saveBonus": "1d4",
            "note": "+1d4 attacks & saves"
          }
        ],
        "resolution": "effect"
      },
      {
        "id": "shield",
        "name": "Shield",
        "category": "Spell",
        "level": 1,
        "actionType": "reaction",
        "summary": "+5 AC until the start of your next turn.",
        "cost": {
          "spellSlot": 1
        },
        "effects": [
          {
            "name": "Shield",
            "target": "self",
            "duration": "start-next-turn",
            "ac": 5,
            "note": "+5 AC"
          }
        ],
        "resolution": "effect",
        "target": {
          "mode": "self"
        }
      },
      {
        "id": "healing-word",
        "name": "Healing Word",
        "category": "Spell",
        "level": 1,
        "actionType": "bonus",
        "summary": "Heal a creature at range.",
        "cost": {
          "spellSlot": 1,
          "selectSlot": true
        },
        "target": {
          "mode": "single"
        },
        "resolution": "heal",
        "heal": "1d4",
        "healAbility": "spell",
        "upcastHeal": "1d4"
      },
      {
        "id": "sacred-flame",
        "name": "Sacred Flame",
        "category": "Spell",
        "level": 0,
        "actionType": "action",
        "resolution": "save",
        "saveAbility": "dex",
        "damage": "2d8",
        "damageType": "Radiant",
        "summary": "Target makes a DEX save; takes radiant damage on a failure.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "fire-bolt",
        "name": "Fire Bolt",
        "category": "Spell",
        "level": 0,
        "actionType": "action",
        "resolution": "attack",
        "attackAbility": "spell",
        "damage": "2d10",
        "damageType": "Fire",
        "summary": "Ranged spell attack.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "entangle",
        "name": "Entangle",
        "category": "Spell",
        "level": 1,
        "actionType": "action",
        "resolution": "save",
        "saveAbility": "str",
        "summary": "STR save or become Restrained while concentration lasts.",
        "concentration": true,
        "cost": {
          "spellSlot": 1
        },
        "target": {
          "mode": "multi",
          "max": 6
        },
        "effects": [
          {
            "name": "Entangled",
            "target": "selected",
            "duration": "concentration",
            "condition": "Restrained",
            "note": "Restrained after failed STR save"
          }
        ]
      }
    ],
    "weapons": [
      {
        "id": "greatsword",
        "name": "Greatsword",
        "category": "Weapon",
        "actionType": "action",
        "damage": "2d6",
        "damageType": "Slashing",
        "properties": "Heavy, two-handed",
        "summary": "Melee weapon attack. Roll to hit, then deal slashing damage.",
        "resolution": "attack",
        "attackAbility": "str",
        "addAbilityToDamage": true,
        "range": "5 ft",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "shadow-dagger",
        "name": "Shadow Dagger",
        "category": "Weapon",
        "actionType": "action",
        "damage": "1d4",
        "damageType": "Piercing",
        "properties": "Finesse, light, thrown",
        "summary": "Finesse weapon attack using the better of STR or DEX.",
        "resolution": "attack",
        "attackAbility": "finesse",
        "addAbilityToDamage": true,
        "range": "5 ft / 20/60 ft",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "mace",
        "name": "Mace",
        "category": "Weapon",
        "actionType": "action",
        "resolution": "attack",
        "attackAbility": "str",
        "damage": "1d6",
        "addAbilityToDamage": true,
        "damageType": "Bludgeoning",
        "range": "5 ft",
        "summary": "Simple melee weapon attack.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "shortbow",
        "name": "Shortbow",
        "category": "Weapon",
        "actionType": "action",
        "resolution": "attack",
        "attackAbility": "dex",
        "damage": "1d6",
        "addAbilityToDamage": true,
        "damageType": "Piercing",
        "range": "80/320 ft",
        "summary": "Ranged weapon attack.",
        "target": {
          "mode": "single"
        }
      }
    ],
    "armor": [
      {
        "id": "chain-mail",
        "name": "Chain Mail",
        "category": "Armour",
        "ac": "16",
        "slot": "armor",
        "summary": "Heavy armour."
      },
      {
        "id": "shield-item",
        "name": "Shield",
        "category": "Armour",
        "acBonus": 2,
        "slot": "offhand",
        "summary": "+2 AC while equipped."
      }
    ],
    "items": [
      {
        "id": "healing-potion",
        "name": "Potion of Healing",
        "category": "Item",
        "quantity": 1,
        "summary": "Consumable healing item."
      }
    ],
    "actions": [
      {
        "id": "octopus-tentacles",
        "name": "Tentacles",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 5,
        "damage": "2d6",
        "damageBonus": 3,
        "damageType": "Bludgeoning",
        "summary": "Melee attack; on a hit the target is grappled.",
        "target": {
          "mode": "single"
        },
        "effectsOnHit": [
          {
            "name": "Grappled",
            "duration": "until removed",
            "condition": "Grappled",
            "note": "Grappled by tentacles"
          }
        ]
      },
      {
        "id": "wolf-bite",
        "name": "Bite",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 4,
        "damage": "2d4",
        "damageBonus": 2,
        "damageType": "Piercing",
        "summary": "Melee bite attack.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "zombie-slam",
        "name": "Slam",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 3,
        "damage": "1d6",
        "damageBonus": 1,
        "damageType": "Bludgeoning",
        "summary": "Heavy melee slam.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "skeleton-sword",
        "name": "Rusty Shortsword",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 4,
        "damage": "1d6",
        "damageBonus": 2,
        "damageType": "Piercing",
        "summary": "Melee weapon attack.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "spider-bite",
        "name": "Venomous Bite",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 5,
        "damage": "1d8",
        "damageBonus": 3,
        "damageType": "Piercing",
        "summary": "Bite attack with venomous fangs.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "spider-web",
        "name": "Web",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 5,
        "damage": null,
        "summary": "Ranged web attack; on hit target is Restrained.",
        "target": {
          "mode": "single"
        },
        "effectsOnHit": [
          {
            "name": "Webbed",
            "duration": "until removed",
            "condition": "Restrained",
            "note": "Restrained by webbing"
          }
        ]
      },
      {
        "id": "amalgam-claw",
        "name": "Amalgam Claw",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 7,
        "damage": "2d8",
        "damageBonus": 4,
        "damageType": "Slashing",
        "summary": "A brutal spliced-limb claw strike.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "mantis-strike",
        "name": "Mantis Strike",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 7,
        "damage": "2d10",
        "damageBonus": 4,
        "damageType": "Bludgeoning",
        "summary": "Explosive close-range strike from a mantis-like limb.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "guard-spear",
        "name": "Spear",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 3,
        "damage": "1d6",
        "damageBonus": 1,
        "damageType": "Piercing",
        "summary": "Simple spear attack.",
        "target": {
          "mode": "single"
        }
      },
      {
        "id": "commoner-club",
        "name": "Improvised Club",
        "category": "Action",
        "actionType": "action",
        "resolution": "attack",
        "attackBonus": 2,
        "damage": "1d4",
        "damageType": "Bludgeoning",
        "summary": "Desperate improvised melee attack.",
        "target": {
          "mode": "single"
        }
      }
    ]
  },
  "characters": [
    {
      "id": "executioner",
      "name": "Executioner",
      "icon": "🥷",
      "type": "PC",
      "class": "Fighter",
      "level": 6,
      "proficiency": 3,
      "ac": 18,
      "hp": 68,
      "maxHp": 68,
      "tempHp": 0,
      "speed": 30,
      "initiative": 2,
      "abilities": {
        "str": 18,
        "dex": 12,
        "con": 16,
        "int": 10,
        "wis": 11,
        "cha": 10
      },
      "saveProficiencies": [
        "str",
        "con"
      ],
      "skills": {
        "athletics": "proficient",
        "perception": "normal",
        "intimidation": "normal"
      },
      "conditions": [],
      "inventory": [
        {
          "ref": "greatsword",
          "category": "weapons",
          "qty": 1
        }
      ],
      "equipment": {
        "mainHand": "greatsword",
        "offHand": null,
        "armor": null
      },
      "knownActions": [
        "greatsword"
      ],
      "resources": {
        "Second_Wind": "1/1",
        "Action_Surge": "1/1"
      },
      "notes": ""
    },
    {
      "id": "cleric",
      "name": "Cleric",
      "icon": "⛑️",
      "type": "PC",
      "class": "Cleric",
      "level": 6,
      "proficiency": 3,
      "ac": 18,
      "hp": 48,
      "maxHp": 48,
      "tempHp": 0,
      "speed": 30,
      "initiative": 1,
      "abilities": {
        "str": 12,
        "dex": 10,
        "con": 14,
        "int": 10,
        "wis": 18,
        "cha": 13
      },
      "saveProficiencies": [
        "wis",
        "cha"
      ],
      "skills": {
        "medicine": "proficient",
        "religion": "proficient",
        "insight": "normal",
        "perception": "normal"
      },
      "conditions": [],
      "inventory": [],
      "equipment": {
        "mainHand": null,
        "offHand": "shield-item",
        "armor": "chain-mail"
      },
      "knownActions": [
        "bless",
        "healing-word",
        "sacred-flame",
        "mace"
      ],
      "spellSlots": {
        "1": "4/4",
        "2": "3/3",
        "3": "3/3"
      },
      "notes": "",
      "spellcastingAbility": "wis"
    },
    {
      "id": "druid",
      "name": "Druid",
      "icon": "🌿",
      "type": "PC",
      "class": "Druid",
      "level": 6,
      "proficiency": 3,
      "ac": 15,
      "hp": 45,
      "maxHp": 45,
      "tempHp": 0,
      "speed": 30,
      "initiative": 2,
      "abilities": {
        "str": 10,
        "dex": 14,
        "con": 14,
        "int": 12,
        "wis": 18,
        "cha": 10
      },
      "saveProficiencies": [
        "int",
        "wis"
      ],
      "skills": {
        "nature": "proficient",
        "perception": "proficient",
        "survival": "proficient"
      },
      "conditions": [],
      "inventory": [],
      "equipment": {
        "mainHand": null,
        "offHand": null,
        "armor": null
      },
      "knownActions": [
        "entangle"
      ],
      "spellSlots": {
        "1": "4/4",
        "2": "3/3",
        "3": "3/3"
      },
      "resources": {
        "Wild_Shape": "2/2"
      },
      "notes": "",
      "spellcastingAbility": "wis"
    },
    {
      "id": "sorcerer",
      "name": "Sorcerer",
      "icon": "🧙",
      "type": "PC",
      "class": "Sorcerer",
      "level": 6,
      "proficiency": 3,
      "ac": 14,
      "hp": 40,
      "maxHp": 40,
      "tempHp": 0,
      "speed": 30,
      "initiative": 3,
      "abilities": {
        "str": 8,
        "dex": 14,
        "con": 14,
        "int": 12,
        "wis": 10,
        "cha": 18
      },
      "saveProficiencies": [
        "con",
        "cha"
      ],
      "skills": {
        "arcana": "proficient",
        "deception": "normal",
        "persuasion": "proficient"
      },
      "conditions": [],
      "inventory": [],
      "equipment": {
        "mainHand": null,
        "offHand": null,
        "armor": null
      },
      "knownActions": [
        "shield",
        "fire-bolt"
      ],
      "spellSlots": {
        "1": "4/4",
        "2": "3/3",
        "3": "3/3"
      },
      "resources": {
        "Sorcery_Points": "6/6"
      },
      "notes": "",
      "spellcastingAbility": "cha"
    },
    {
      "id": "rogue",
      "name": "Rogue / Assassin",
      "icon": "🥷",
      "type": "PC",
      "class": "Rogue",
      "level": 6,
      "proficiency": 3,
      "ac": 16,
      "hp": 46,
      "maxHp": 46,
      "tempHp": 0,
      "speed": 30,
      "initiative": 4,
      "abilities": {
        "str": 10,
        "dex": 18,
        "con": 14,
        "int": 13,
        "wis": 12,
        "cha": 11
      },
      "saveProficiencies": [
        "dex",
        "int"
      ],
      "skills": {
        "stealth": "expertise",
        "acrobatics": "proficient",
        "perception": "proficient",
        "sleightOfHand": "proficient"
      },
      "conditions": [],
      "inventory": [
        {
          "ref": "shadow-dagger",
          "category": "weapons",
          "qty": 1
        }
      ],
      "equipment": {
        "mainHand": "shadow-dagger",
        "offHand": null,
        "armor": null
      },
      "knownActions": [
        "shadow-dagger"
      ],
      "resources": {
        "Sneak_Attack": "3d6"
      },
      "notes": ""
    }
  ],
  "creatures": [
    {
      "id": "giant-octopus",
      "name": "Giant Octopus",
      "icon": "🐙",
      "type": "Monster",
      "size": "Large",
      "creatureType": "Beast",
      "cr": "1",
      "proficiency": 2,
      "ac": 11,
      "hp": 52,
      "maxHp": 52,
      "tempHp": 0,
      "speed": 10,
      "initiative": 1,
      "abilities": {
        "str": 17,
        "dex": 13,
        "con": 13,
        "int": 4,
        "wis": 10,
        "cha": 4
      },
      "saveProficiencies": [],
      "skills": {},
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [
        "octopus-tentacles"
      ],
      "notes": "Aquatic grappler."
    },
    {
      "type": "Monster",
      "proficiency": 2,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "wolf",
      "name": "Wolf",
      "icon": "🐺",
      "size": "Medium",
      "creatureType": "Beast",
      "cr": "1/4",
      "ac": 13,
      "hp": 11,
      "maxHp": 11,
      "speed": 40,
      "initiative": 2,
      "abilities": {
        "str": 12,
        "dex": 15,
        "con": 12,
        "int": 3,
        "wis": 12,
        "cha": 6
      },
      "knownActions": [
        "wolf-bite"
      ],
      "notes": "Fast pack hunter."
    },
    {
      "type": "Monster",
      "proficiency": 2,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "zombie",
      "name": "Zombie",
      "icon": "🧟",
      "size": "Medium",
      "creatureType": "Undead",
      "cr": "1/4",
      "ac": 8,
      "hp": 22,
      "maxHp": 22,
      "speed": 20,
      "initiative": -2,
      "abilities": {
        "str": 13,
        "dex": 6,
        "con": 16,
        "int": 3,
        "wis": 6,
        "cha": 5
      },
      "knownActions": [
        "zombie-slam"
      ],
      "notes": "Slow undead combatant."
    },
    {
      "type": "Monster",
      "proficiency": 2,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "skeleton",
      "name": "Skeleton",
      "icon": "💀",
      "size": "Medium",
      "creatureType": "Undead",
      "cr": "1/4",
      "ac": 13,
      "hp": 13,
      "maxHp": 13,
      "speed": 30,
      "initiative": 2,
      "abilities": {
        "str": 10,
        "dex": 14,
        "con": 15,
        "int": 6,
        "wis": 8,
        "cha": 5
      },
      "knownActions": [
        "skeleton-sword"
      ],
      "notes": "Light undead melee combatant."
    },
    {
      "type": "Monster",
      "proficiency": 2,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "giant-spider",
      "name": "Giant Spider",
      "icon": "🕷️",
      "size": "Large",
      "creatureType": "Beast",
      "cr": "1",
      "ac": 14,
      "hp": 32,
      "maxHp": 32,
      "speed": 30,
      "initiative": 3,
      "abilities": {
        "str": 14,
        "dex": 16,
        "con": 12,
        "int": 2,
        "wis": 11,
        "cha": 4
      },
      "knownActions": [
        "spider-bite",
        "spider-web"
      ],
      "notes": "Web and bite control creature."
    },
    {
      "type": "Monster",
      "proficiency": 2,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "bandit",
      "name": "Bandit",
      "icon": "🥷",
      "size": "Medium",
      "creatureType": "Humanoid",
      "cr": "1/8",
      "ac": 12,
      "hp": 14,
      "maxHp": 14,
      "speed": 30,
      "initiative": 1,
      "abilities": {
        "str": 11,
        "dex": 13,
        "con": 12,
        "int": 10,
        "wis": 10,
        "cha": 10
      },
      "knownActions": [
        "shadow-dagger",
        "shortbow"
      ],
      "notes": "Basic humanoid skirmisher."
    },
    {
      "type": "Monster",
      "proficiency": 2,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "lionfolk-guard",
      "name": "Lionfolk Guard",
      "icon": "🦁",
      "size": "Medium",
      "creatureType": "Humanoid",
      "cr": "1",
      "ac": 16,
      "hp": 38,
      "maxHp": 38,
      "speed": 30,
      "initiative": 2,
      "abilities": {
        "str": 16,
        "dex": 14,
        "con": 15,
        "int": 10,
        "wis": 13,
        "cha": 11
      },
      "knownActions": [
        "guard-spear"
      ],
      "notes": "Treetop settlement guard."
    },
    {
      "type": "Monster",
      "proficiency": 3,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "jungle-amalgam",
      "name": "Jungle Amalgam",
      "icon": "🦴",
      "size": "Large",
      "creatureType": "Monstrosity",
      "cr": "5",
      "ac": 16,
      "hp": 120,
      "maxHp": 120,
      "speed": 35,
      "initiative": 3,
      "abilities": {
        "str": 19,
        "dex": 16,
        "con": 18,
        "int": 8,
        "wis": 14,
        "cha": 7
      },
      "knownActions": [
        "amalgam-claw",
        "mantis-strike"
      ],
      "notes": "Spliced druidic combat creature."
    },
    {
      "type": "Monster",
      "proficiency": 3,
      "tempHp": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "saveProficiencies": [],
      "skills": {},
      "id": "sea-serpent-young",
      "name": "Young Sea Serpent",
      "icon": "🐉",
      "size": "Huge",
      "creatureType": "Monstrosity",
      "cr": "6",
      "ac": 17,
      "hp": 145,
      "maxHp": 145,
      "speed": 40,
      "initiative": 2,
      "abilities": {
        "str": 21,
        "dex": 14,
        "con": 19,
        "int": 7,
        "wis": 13,
        "cha": 10
      },
      "knownActions": [
        "amalgam-claw"
      ],
      "notes": "Large aquatic threat placeholder."
    }
  ],
  "bystanders": [
    {
      "type": "Bystander",
      "proficiency": 2,
      "tempHp": 0,
      "speed": 30,
      "initiative": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [
        "commoner-club"
      ],
      "saveProficiencies": [],
      "skills": {},
      "id": "commoner",
      "name": "Commoner",
      "icon": "🧑",
      "size": "Medium",
      "creatureType": "Humanoid",
      "ac": 10,
      "hp": 4,
      "maxHp": 4,
      "abilities": {
        "str": 10,
        "dex": 10,
        "con": 10,
        "int": 10,
        "wis": 10,
        "cha": 10
      },
      "notes": "Generic civilian."
    },
    {
      "type": "Bystander",
      "proficiency": 2,
      "tempHp": 0,
      "speed": 30,
      "initiative": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [],
      "saveProficiencies": [],
      "skills": {},
      "id": "merchant",
      "name": "Merchant",
      "icon": "🧑‍💼",
      "size": "Medium",
      "creatureType": "Humanoid",
      "ac": 10,
      "hp": 6,
      "maxHp": 6,
      "abilities": {
        "str": 9,
        "dex": 10,
        "con": 10,
        "int": 13,
        "wis": 12,
        "cha": 14
      },
      "notes": "Civilian trader."
    },
    {
      "type": "Bystander",
      "proficiency": 2,
      "tempHp": 0,
      "speed": 25,
      "initiative": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [],
      "saveProficiencies": [],
      "skills": {},
      "id": "child",
      "name": "Child",
      "icon": "🧒",
      "size": "Small",
      "creatureType": "Humanoid",
      "ac": 10,
      "hp": 3,
      "maxHp": 3,
      "abilities": {
        "str": 6,
        "dex": 12,
        "con": 9,
        "int": 10,
        "wis": 10,
        "cha": 11
      },
      "notes": "Vulnerable civilian."
    },
    {
      "type": "Bystander",
      "proficiency": 2,
      "tempHp": 0,
      "speed": 30,
      "initiative": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [],
      "saveProficiencies": [],
      "skills": {
        "medicine": "proficient"
      },
      "id": "healer",
      "name": "Village Healer",
      "icon": "🩹",
      "size": "Medium",
      "creatureType": "Humanoid",
      "ac": 10,
      "hp": 9,
      "maxHp": 9,
      "abilities": {
        "str": 9,
        "dex": 10,
        "con": 11,
        "int": 12,
        "wis": 15,
        "cha": 12
      },
      "notes": "Non-combat healer."
    },
    {
      "type": "Bystander",
      "proficiency": 2,
      "tempHp": 0,
      "speed": 30,
      "initiative": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [],
      "saveProficiencies": [],
      "skills": {},
      "id": "noble",
      "name": "Noble Civilian",
      "icon": "👑",
      "size": "Medium",
      "creatureType": "Humanoid",
      "ac": 11,
      "hp": 9,
      "maxHp": 9,
      "abilities": {
        "str": 10,
        "dex": 12,
        "con": 10,
        "int": 12,
        "wis": 11,
        "cha": 15
      },
      "notes": "Protected or politically important civilian."
    },
    {
      "type": "Bystander",
      "proficiency": 2,
      "tempHp": 0,
      "speed": 30,
      "initiative": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [],
      "saveProficiencies": [],
      "skills": {},
      "id": "prisoner",
      "name": "Prisoner",
      "icon": "⛓️",
      "size": "Medium",
      "creatureType": "Humanoid",
      "ac": 9,
      "hp": 5,
      "maxHp": 5,
      "abilities": {
        "str": 10,
        "dex": 9,
        "con": 11,
        "int": 10,
        "wis": 10,
        "cha": 10
      },
      "notes": "Restrained or captive NPC."
    },
    {
      "type": "Bystander",
      "proficiency": 2,
      "tempHp": 0,
      "speed": 30,
      "initiative": 0,
      "conditions": [],
      "inventory": [],
      "equipment": {},
      "knownActions": [],
      "saveProficiencies": [],
      "skills": {},
      "id": "lionfolk-civilian",
      "name": "Lionfolk Civilian",
      "icon": "🦁",
      "size": "Medium",
      "creatureType": "Humanoid",
      "ac": 10,
      "hp": 8,
      "maxHp": 8,
      "abilities": {
        "str": 13,
        "dex": 11,
        "con": 12,
        "int": 10,
        "wis": 11,
        "cha": 10
      },
      "notes": "Treetop settlement civilian."
    }
  ]
};

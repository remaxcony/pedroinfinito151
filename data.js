var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.68532955584649,
        "pitch": 0.10896809937669616,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.9485929344389064,
          "pitch": 0.14997100533862096,
          "rotation": 5.497787143782138,
          "target": "1-estancia-1"
        },
        {
          "yaw": 1.7611964647614062,
          "pitch": 0.17890807707171952,
          "rotation": 0,
          "target": "2-estancia-2"
        },
        {
          "yaw": -3.1072347145822956,
          "pitch": 0.07147520897514603,
          "rotation": 0,
          "target": "4-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estancia-1",
      "name": "ESTANCIA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.308787463634811,
        "pitch": -0.0563655206067466,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.7273099728836527,
          "pitch": 0.12039622731285604,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-estancia-2",
      "name": "ESTANCIA 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0656989698297075,
        "pitch": 0.0814566347197676,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.4690153648765918,
          "pitch": 0.14515980768761239,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -1.982729435905222,
          "pitch": 0.05442845437701749,
          "rotation": 0,
          "target": "3-patio-de-luz-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-patio-de-luz-1",
      "name": "PATIO DE LUZ 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1775961690684156,
        "pitch": 0.20852492068393857,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.363412431324484,
          "pitch": 0.16478421000502763,
          "rotation": 0,
          "target": "2-estancia-2"
        },
        {
          "yaw": -1.415640764865099,
          "pitch": -0.005510386377352461,
          "rotation": 0,
          "target": "8-estancia-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala",
      "name": "SALA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0820936656677063,
        "pitch": 0.18021101864604105,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.08948762855345826,
          "pitch": 0.05578599590939959,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 2.4760056404807624,
          "pitch": 0.08527847666134036,
          "rotation": 0.7853981633974483,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.639978735925121,
        "pitch": -0.06828166014773984,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.12018211638529941,
          "pitch": 0.09195737773337775,
          "rotation": 0,
          "target": "4-sala"
        },
        {
          "yaw": -2.105704237406238,
          "pitch": 0.08305724884933952,
          "rotation": 1.5707963267948966,
          "target": "6-bao"
        },
        {
          "yaw": -2.805350304424847,
          "pitch": 0.10551134955422903,
          "rotation": 0.7853981633974483,
          "target": "7-patio-de-luz-2"
        },
        {
          "yaw": 2.8504125593144636,
          "pitch": 0.06779380401897228,
          "rotation": 5.497787143782138,
          "target": "8-estancia-3"
        },
        {
          "yaw": 3.1091831852106413,
          "pitch": -0.03582144294271927,
          "rotation": 0,
          "target": "9-estancia-4"
        },
        {
          "yaw": -3.085671094091751,
          "pitch": 0.12895558839260346,
          "rotation": 0.7853981633974483,
          "target": "10-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6952980796661947,
        "pitch": 0.22683061051595743,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -2.942451276359934,
          "pitch": 0.16968826444482943,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-patio-de-luz-2",
      "name": "PATIO DE LUZ 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5384627114406726,
        "pitch": 0.2340054946251815,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.8436286727365703,
          "pitch": 0.1476430159627764,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-estancia-3",
      "name": "ESTANCIA 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.200428181482552,
        "pitch": 0.12553726735081128,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -2.8586181966326,
          "pitch": 0.14696331838965904,
          "rotation": 6.283185307179586,
          "target": "5-pasillo"
        },
        {
          "yaw": -1.9713141472021984,
          "pitch": 0.036541291220215655,
          "rotation": 0,
          "target": "3-patio-de-luz-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-estancia-4",
      "name": "ESTANCIA 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0607677593359703,
        "pitch": 0.02462463133978332,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.03763521998567576,
          "pitch": 0.2167619457671357,
          "rotation": 0,
          "target": "5-pasillo"
        },
        {
          "yaw": -0.7234330788725014,
          "pitch": 0.14121113055032808,
          "rotation": 5.497787143782138,
          "target": "10-cocina"
        },
        {
          "yaw": 2.054863697517103,
          "pitch": 0.09483564978790682,
          "rotation": 0,
          "target": "11-patio-de-luz-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.100895772566478,
        "pitch": -0.027175368756008567,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.13321910953775884,
          "pitch": 0.10079682798718892,
          "rotation": 5.497787143782138,
          "target": "5-pasillo"
        },
        {
          "yaw": 0.5714496142666317,
          "pitch": 0.09498061525094492,
          "rotation": 0,
          "target": "9-estancia-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-patio-de-luz-3",
      "name": "PATIO DE LUZ 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6388399753085316,
        "pitch": 0.12187536403952137,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.3342045677442105,
          "pitch": 0.12023647444967622,
          "rotation": 0,
          "target": "9-estancia-4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

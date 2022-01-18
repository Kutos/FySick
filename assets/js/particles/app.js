$("#tsparticles")
  .particles()
  .init(
    {
      "autoPlay": true,
      "fullScreen": {
        "enable": false,
        "zIndex": -1
      },
      "detectRetina": true,
      "duration": 0,
      "fpsLimit": 60,
      "interactivity": {
        "detectsOn": "window",
        "events": {
          "onClick": {
            "enable": true,
            "mode": "emitter"
          },
          "resize": true
        },
        "modes": {
          "remove": {
            "quantity": 2
          },
          "trail": {
            "delay": 0.5,
            "pauseOnStop": false,
            "quantity": 1
          }
        }
      },
      "manualParticles": [],
      "motion": {
        "disable": false,
        "reduce": {
          "factor": 4,
          "value": true
        }
      },
      "particles": {
        "collisions": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "enable": false,
          "mode": "destroy",
          "overlap": {
            "enable": true,
            "retries": 0
          }
        },
        "color": {
          "value": [
            "#bababa"
          ],
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "s": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "l": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            }
          }
        },
        "destroy": {
          "mode": "none",
          "split": {
            "count": 1,
            "factor": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 3
            },
            "rate": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": {
                "min": 4,
                "max": 9
              }
            },
            "sizeOffset": true
          }
        },
        "gradient": [],
        "groups": {},
        "life": {
          "count": 0,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "sync": false
          },
          "duration": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": 5,
            "sync": false
          }
        },
        "links": {
          "enable": false,
        },
        "move": {
          "angle": {
            "offset": 0,
            "value": 90
          },
          "decay": 0,
          "distance": {},
          "direction": "none",
          "drift": 0,
          "enable": true,
          "gravity": {
            "acceleration": 9.81,
            "enable": false,
            "inverse": false,
            "maxSpeed": 50
          },
          "path": {
            "clamp": true,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0.1
            },
            "enable": true,
            "options": {}
          },
          "outModes": {
            "default": "destroy",
            "bottom": "destroy",
            "left": "destroy",
            "right": "destroy",
            "top": "destroy"
          },
          "random": false,
          "size": false,
          "speed": 4,
          "spin": {
            "acceleration": 1,
            "enable": false
          },
          "straight": true,
          "trail": {
            "enable": true,
            "length": 30,
            "fillColor": {
              "value": "#000000"
            }
          },
          "vibrate": false,
          "warp": false
        },
        "number": {
          "density": {
            "enable": false,
            "area": 800,
            "factor": 1000
          },
          "limit": 0,
          "value": 0
        },
        "opacity": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 0.5,
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0.1
          }
        },
        "orbit": {
          "enable": false,
        },
        "reduceDuplicates": false,
        "repulse": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "enabled": false,
          "distance": 1,
          "duration": 1,
          "factor": 1,
          "speed": 1
        },
        "roll": {
          "darken": {
            "enable": false,
            "value": 0
          },
          "enable": false,
          "enlighten": {
            "enable": false,
            "value": 0
          },
          "mode": "vertical",
          "speed": 25
        },
        "rotate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "sync": false
          },
          "direction": "clockwise",
          "path": false
        },
        "shadow": {
          "blur": 0,
          "color": {
            "value": "#000000"
          },
          "enable": false,
          "offset": {
            "x": 0,
            "y": 0
          }
        },
        "shape": {
          "options": {},
          "type": "circle"
        },
        "size": {
          "random": {
            "enable": true,
            "minimumValue": 4
          },
          "value": {
            "min": 4,
            "max": 7
          },
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 40,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0.1
          }
        },
        "stroke": {
          "width": 0
        },
        "tilt": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "sync": false
          },
          "direction": "clockwise",
          "enable": false
        },
        "twinkle": {
          "lines": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          },
          "particles": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          }
        },
        "wobble": {
          "distance": 5,
          "enable": false,
          "speed": 50
        },
        "zIndex": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "opacityRate": 1,
          "sizeRate": 1,
          "velocityRate": 1
        }
      },
      "pauseOnBlur": false,
      "pauseOnOutsideViewport": true,
      "responsive": [],
      "themes": [],
      "zLayers": 100,
      "emitters": {
        "autoPlay": true,
        "fill": true,
        "life": {
          "wait": false,
          "duration" : 1,
        },
        "rate": {
          "quantity": 1,
          "delay": 0.01
        },
        "shape": "square",
        "startCount": 0,
      }
    },
    function (container) {
      // container is the particles container where you can play/pause or stop/start.
      // the container is already started, you don't need to start it manually.
    }
  );
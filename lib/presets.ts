export const presets: { [key: string]: any } = {
  basic: {
    "eConfigMode": "custom",
    "bEnableCameraEffects": false,
    "bAllowAllInterchangableCoasterTrains": true,
    "tConfig": {
      "tAppendedElements": [
        "default_LSM",
        "default_LSM_HoldingSection",
        "TK_509_TiltTrack",
        "TK_501_SwitchTrack",
        "TK_501_SwitchTrack_L",
        "default_reverselaunch",
        "viperone_reverselaunch",
        "TK_501_Turntable_90L_R",
        "TK_501_Turntable_90R_R",
        "TK_501_Turntable_90R",
        "TK_501_Turntable_90L",
        "TK_501_TurntableF",
        "TK_501_TurntableF_R",
        "TK_502_DoubleLift",
        "TK_004_Lift",
        "station_viperone_leftleft",
        "station_viperone_leftright",
        "station_viperone_rightleft",
        "station_viperone_rightright"
      ],
      "tAppendedElementsToRide": {
        "CC_SLV": [
          "TK_040_Shuttle_booster"
        ],
        "CC_ViperOne": [
          "station_rightright",
          "station_rightleft",
          "station_leftright",
          "station_leftleft",
          "station_lefton",
          "station_leftoff",
          "station_righton",
          "station_rightoff"
        ]
      },
      "tTrackLength": {
        "min": 0.5,
        "max": 50,
        "step": 0.5
      },
      "tSlopeRange": {
        "min": -50000,
        "max": 50000,
        "tAppendToElements": [
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_502_DoubleLift",
          "TK_004_Lift"
        ]
      },
      "tRideSlopeRange": {
        "min": -360,
        "max": 360
      },
      "tBankingRange": {
        "min": -50000,
        "max": 50000,
        "tAppendToElements": [
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_502_DoubleLift",
          "TK_004_Lift"
        ]
      },
      "tBankPivotRange": {
        "min": -3,
        "max": 3,
        "tAppendToElements": [
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_502_DoubleLift",
          "TK_004_Lift"
        ]
      },
      "tCurveRange": {
        "min": -360,
        "max": 360,
        "tAppendToElements": [
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_502_DoubleLift",
          "TK_004_Lift"
        ]
      },
      "tBooster": {
        "tAcceleration": {
          "min": -35,
          "max": 35
        },
        "tSpeed": {
          "min": 0,
          "max": 80.4672
        }
      },
      "tHydraulicLaunch": {
        "tAcceleration": {
          "min": -35,
          "max": 35
        },
        "tSpeed": {
          "min": 0,
          "max": 89.408
        },
        "tReturnSpeed": {
          "min": 1,
          "max": 13.4112
        }
      },
      "tHoldingSection": {
        "tStopLocation": {
          "min": 0,
          "max": 16
        },
        "tReleaseSpeed": {
          "min": 0,
          "max": null
        }
      },
      "tBrakes": {
        "tMinSpeed": {
          "min": 0.27777777,
          "max": null
        },
        "tDeceleration": {
          "min": null,
          "max": 20
        }
      },
      "tChainLift": {
        "tSpeed": {
          "min": 0,
          "max": 10
        }
      },
      "tMaxTrackHeight": 10000,
      "tCarCount": {
        "min": 1,
        "max": 25
      },
      "tTrainCount": {
        "max": 200
      },
      "tPoweredCars": {
        "tSpeed": {
          "min": 0,
          "max": 200
        }
      },
      "tPassesThroughStation": {
        "min": 1,
        "max": 20
      }
    }
  },
  default: {
    general: {
      eConfigMode: "realistic",
      bEnableCameraEffects: false,
      bAllowAllInterchangableCoasterTrains: true,
    },
    tConfig: {
      tAppendedElements: ["default_LSM", "default_LSM_HoldingSection", "default_chainlift"],
      tTrackLength: {
        min: 0.5,
        max: 50,
        step: 1,
      },
      tSlopeRange: {
        min: -50000.0,
        max: 50000.0,
      },
      tRideSlopeRange: {
        min: -360.0,
        max: 360.0,
      },
      tBankingRange: {
        min: -50000.0,
        max: 50000.0,
      },
      tBankPivotRange: {
        min: -2.0,
        max: 2.0,
      },
      tCurveRange: {
        min: -360.0,
        max: 360.0,
      },
      tBooster: {
        tAcceleration: {
          min: 1.0,
          max: 35.0,
        },
        tSpeed: {
          min: 0.0,
          max: 80.4672,
        },
      },
      tHydraulicLaunch: {
        tAcceleration: {
          min: 1.0,
          max: 35.0,
        },
        tSpeed: {
          min: 0.0,
          max: 89.408,
        },
        tReturnSpeed: {
          min: 1.0,
          max: 13.4112,
        },
      },
      tHoldingSection: {
        tStopLocation: {
          min: 0,
          max: 2.0,
        },
        tReleaseSpeed: {
          min: 0.0,
          max: null, // default value
        },
      },
      tBrakes: {
        tMinSpeed: {
          min: 0.27777777,
          max: null, // default value
        },
        tDeceleration: {
          min: null,
          max: 20.0,
        },
      },
      tChainLift: {
        tSpeed: {
          min: 0.0,
          max: 10.0,
        },
      },
      tMaxTrackHeight: 4000,
      tCarCount: {
        min: 1,
        max: 25,
      },
      tTrainCount: {
        max: 200,
      },
      tPoweredCars: {
        tSpeed: {
          min: 1,
          max: 35.7632,
        },
      },
    },
  },
  stationsbasic: {
    "eConfigMode": "custom",
    "bEnableCameraEffects": false,
    "bAllowAllInterchangableCoasterTrains": true,
    "tConfig": {
      "tAppendedElements": [
        "default_LSM",
        "default_LSM_HoldingSection",
        "default_reverselaunch",
        "viperone_reverselaunch",
        "station_viperone_leftleft",
        "station_viperone_leftright",
        "station_viperone_rightleft",
        "station_viperone_rightright",
        "station_log_leftleft",
        "station_log_leftright",
        "station_log_rightright",
        "station_log_rightleft",
        "station_TK_204_Bucket_leftleft",
        "station_TK_204_Bucket_leftright",
        "station_TK_204_Bucket_rightright",
        "station_TK_204_Bucket_rightleft",
        "station_log_lefton",
        "station_log_leftoff",
        "station_log_righton",
        "station_log_rightoff",
        "station_boomerang_leftleft",
        "station_boomerang_leftright",
        "station_boomerang_rightright",
        "station_boomerang_rightleft",
        "station_mono_dir_leftright",
        "station_mono_dir_leftleft",
        "station_mono_dir_rightleft",
        "station_mono_dir_rightright"
      ],
      "tTrackLength": {
        "min": 0.5,
        "max": 50,
        "step": 0.5
      },
      "tSlopeRange": {
        "min": -50000,
        "max": 50000,
        "tAppendToElements": [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection"
        ]
      },
      "tRideSlopeRange": {
        "min": -360,
        "max": 360
      },
      "tBankingRange": {
        "min": -50000,
        "max": 50000,
        "tAppendToElements": [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection"
        ]
      },
      "tBankPivotRange": {
        "min": -3,
        "max": 3,
        "tAppendToElements": [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection"
        ]
      },
      "tCurveRange": {
        "min": -360,
        "max": 360,
        "tAppendToElements": [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection"
        ]
      },
      "tBooster": {
        "tAcceleration": {
          "min": -35,
          "max": 35
        },
        "tSpeed": {
          "min": 0,
          "max": 80.4672
        }
      },
      "tHydraulicLaunch": {
        "tAcceleration": {
          "min": -35,
          "max": 35
        },
        "tSpeed": {
          "min": 0,
          "max": 89.408
        },
        "tReturnSpeed": {
          "min": 1,
          "max": 13.4112
        }
      },
      "tHoldingSection": {
        "tStopLocation": {
          "min": 0,
          "max": 16
        },
        "tReleaseSpeed": {
          "min": 0,
          "max": null
        }
      },
      "tBrakes": {
        "tMinSpeed": {
          "min": 0.27777777,
          "max": null
        },
        "tDeceleration": {
          "min": null,
          "max": 20
        }
      },
      "tChainLift": {
        "tSpeed": {
          "min": 0,
          "max": 10
        }
      },
      "tMaxTrackHeight": 10000,
      "tCarCount": {
        "min": 1,
        "max": 25
      },
      "tTrainCount": {
        "max": 200
      },
      "tPoweredCars": {
        "tSpeed": {
          "min": 0,
          "max": 200
        }
      },
      "tPassesThroughStation": {
        "min": 1,
        "max": 20
      }
    }
  },
  everything: {
    general: {
      eConfigMode: "custom",
      bEnableCameraEffects: false,
      bAllowAllInterchangableCoasterTrains: true,
    },
    tConfig: {
      tAppendedElements: [
        "default_LSM",
        "default_LSM_HoldingSection",
        "TK_501_DropTrack",
        "TK_501_DropTrack_R",
        "TK_509_TiltTrack",
        "TK_501_SwitchTrack",
        "TK_501_SwitchTrack_L",
        "default_reverselaunch",
        "viperone_reverselaunch",
        "station_viperone_leftleft",
        "station_viperone_leftright",
        "station_viperone_rightleft",
        "station_viperone_rightright",
        "TK_501_EdgeTilt",
        "TK_501_Turntable_90L_R",
        "TK_501_Turntable_90R_R",
        "TK_501_Turntable_90R",
        "TK_501_Turntable_90L",
        "TK_501_TurntableF",
        "TK_501_TurntableF_R",
        "TK_501_MotionTableF",
        "TK_501_MotionTable_90L",
        "TK_501_MotionTable_90R",
        "TK_501_BungeeLift",
        "TK_501_CombinedLift",
        "default_booster",
        "friction_wheel_lift",
        "default_StopStart",
        "magnetic_blocksection",
        "TK_501_EdgeTilt",
        "TK_501_TeeterTotterF",
        "TK_501_TeeterTotter_90L",
        "TK_501_TeeterTotter_90R",
        "TK_501_TeeterTotter_R",
        "TK_502_DoubleLift",
        "TK_004_Lift",
        "Default_tirelaunch",
        "magnetic_brakes",
        "trim_brakes_TK_010_Magnetic",
        "TK_040_Wheel_Lift",
        "default_spline_torque02",
        "default_chainlift_curved",
        "station_log_leftleft",
        "station_log_leftright",
        "station_log_rightright",
        "station_log_rightleft",
        "station_TK_204_Bucket_leftleft",
        "station_TK_204_Bucket_leftright",
        "station_TK_204_Bucket_rightright",
        "station_TK_204_Bucket_rightleft",
        "station_log_lefton",
        "station_log_leftoff",
        "station_log_righton",
        "station_log_rightoff",
        "station_boomerang_leftleft",
        "station_boomerang_leftright",
        "station_boomerang_rightright",
        "station_boomerang_rightleft",
        "default_station",
        "station_mono_dir_leftright",
        "station_mono_dir_leftleft",
        "station_mono_dir_rightleft",
        "station_mono_dir_rightright",
        "TK_501_CombinedLiftReverse",
        "TK_501_CombinedLiftDropForward",
        "TK_501_CombinedLiftDropReverse",
      ],
      tAppendedElementsToRide: {
        CC_SLV: ["TK_040_Shuttle_booster"],
        CC_ViperOne: [
          "station_rightright",
          "station_rightleft",
          "station_leftright",
          "station_leftleft",
          "station_lefton",
          "station_leftoff",
          "station_righton",
          "station_rightoff",
        ],
        PTR_FDVision: [
          "station_rightright",
          "station_rightleft",
          "station_leftright",
          "station_leftleft",
          "station_lefton",
          "station_leftoff",
          "station_righton",
          "station_rightoff",
        ],
      },
      tTrackLength: {
        min: 0.5,
        max: 50,
        step: 0.5,
      },
      tSlopeRange: {
        min: -50000.0,
        max: 50000.0,
        tAppendToElements: [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_501_DropTrack",
          "TK_501_DropTrack_R",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "station_viperone_leftleft",
          "station_viperone_leftright",
          "station_viperone_rightleft",
          "station_viperone_rightright",
          "TK_501_EdgeTilt",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_501_MotionTableF",
          "TK_501_MotionTable_90L",
          "TK_501_MotionTable_90R",
          "TK_501_BungeeLift",
          "TK_501_CombinedLift",
          "default_booster",
          "friction_wheel_lift",
          "default_StopStart",
          "magnetic_blocksection",
          "TK_501_EdgeTilt",
          "TK_501_TeeterTotterF",
          "TK_501_TeeterTotter_90L",
          "TK_501_TeeterTotter_90R",
          "TK_501_TeeterTotter_R",
          "TK_502_DoubleLift",
          "TK_004_Lift",
          "Default_tirelaunch",
          "magnetic_brakes",
          "trim_brakes_TK_010_Magnetic",
          "TK_040_Wheel_Lift",
          "default_spline_torque02",
          "default_chainlift_curved",
        ],
      },
      tRideSlopeRange: {
        min: -360.0,
        max: 360.0,
      },
      tBankingRange: {
        min: -50000.0,
        max: 50000.0,
        tAppendToElements: [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_501_DropTrack",
          "TK_501_DropTrack_R",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "station_viperone_leftleft",
          "station_viperone_leftright",
          "station_viperone_rightleft",
          "station_viperone_rightright",
          "TK_501_EdgeTilt",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_501_MotionTableF",
          "TK_501_MotionTable_90L",
          "TK_501_MotionTable_90R",
          "TK_501_BungeeLift",
          "TK_501_CombinedLift",
          "default_booster",
          "friction_wheel_lift",
          "default_StopStart",
          "magnetic_blocksection",
          "TK_501_EdgeTilt",
          "TK_501_TeeterTotterF",
          "TK_501_TeeterTotter_90L",
          "TK_501_TeeterTotter_90R",
          "TK_501_TeeterTotter_R",
          "TK_502_DoubleLift",
          "TK_004_Lift",
          "Default_tirelaunch",
          "magnetic_brakes",
          "trim_brakes_TK_010_Magnetic",
          "TK_040_Wheel_Lift",
          "default_spline_torque02",
          "default_chainlift_curved",
        ],
      },
      tBankPivotRange: {
        min: -3.0,
        max: 3.0,
        tAppendToElements: [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_501_DropTrack",
          "TK_501_DropTrack_R",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "station_viperone_leftleft",
          "station_viperone_leftright",
          "station_viperone_rightleft",
          "station_viperone_rightright",
          "TK_501_EdgeTilt",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_501_MotionTableF",
          "TK_501_MotionTable_90L",
          "TK_501_MotionTable_90R",
          "TK_501_BungeeLift",
          "TK_501_CombinedLift",
          "default_booster",
          "friction_wheel_lift",
          "default_StopStart",
          "magnetic_blocksection",
          "TK_501_EdgeTilt",
          "TK_501_TeeterTotterF",
          "TK_501_TeeterTotter_90L",
          "TK_501_TeeterTotter_90R",
          "TK_501_TeeterTotter_R",
          "TK_502_DoubleLift",
          "TK_004_Lift",
          "Default_tirelaunch",
          "magnetic_brakes",
          "trim_brakes_TK_010_Magnetic",
          "TK_040_Wheel_Lift",
          "default_spline_torque02",
          "default_chainlift_curved",
        ],
      },
      tCurveRange: {
        min: -360.0,
        max: 360.0,
        tAppendToElements: [
          "viperone_reverselaunch",
          "default_reverselaunch",
          "default_LSM",
          "default_LSM_HoldingSection",
          "TK_501_DropTrack",
          "TK_501_DropTrack_R",
          "TK_509_TiltTrack",
          "TK_501_SwitchTrack",
          "TK_501_SwitchTrack_L",
          "default_reverselaunch",
          "viperone_reverselaunch",
          "station_viperone_leftleft",
          "station_viperone_leftright",
          "station_viperone_rightleft",
          "station_viperone_rightright",
          "TK_501_EdgeTilt",
          "TK_501_Turntable_90L_R",
          "TK_501_Turntable_90R_R",
          "TK_501_Turntable_90R",
          "TK_501_Turntable_90L",
          "TK_501_TurntableF",
          "TK_501_TurntableF_R",
          "TK_501_MotionTableF",
          "TK_501_MotionTable_90L",
          "TK_501_MotionTable_90R",
          "TK_501_BungeeLift",
          "TK_501_CombinedLift",
          "default_booster",
          "friction_wheel_lift",
          "default_StopStart",
          "magnetic_blocksection",
          "TK_501_EdgeTilt",
          "TK_501_TeeterTotterF",
          "TK_501_TeeterTotter_90L",
          "TK_501_TeeterTotter_90R",
          "TK_501_TeeterTotter_R",
          "TK_502_DoubleLift",
          "TK_004_Lift",
          "Default_tirelaunch",
          "magnetic_brakes",
          "trim_brakes_TK_010_Magnetic",
          "TK_040_Wheel_Lift",
          "default_spline_torque02",
          "default_chainlift_curved",
        ],
      },
      tBooster: {
        tAcceleration: {
          min: -35,
          max: 35.0,
        },
        tSpeed: {
          min: 0.0,
          max: 80.4672,
        },
      },
      tHydraulicLaunch: {
        tAcceleration: {
          min: -35,
          max: 35.0,
        },
        tSpeed: {
          min: 0.0,
          max: 89.408,
        },
        tReturnSpeed: {
          min: 1.0,
          max: 13.4112,
        },
      },
      tHoldingSection: {
        tStopLocation: {
          min: 0,
          max: 16.0,
        },
        tReleaseSpeed: {
          min: 0.0,
          max: null,
        },
      },
      tBrakes: {
        tMinSpeed: {
          min: 0.27777777,
          max: null,
        },
        tDeceleration: {
          min: null,
          max: 20.0,
        },
      },
      tChainLift: {
        tSpeed: {
          min: 0.0,
          max: 10.0,
        },
      },
      tMaxTrackHeight: 10000,
      tCarCount: {
        min: 1,
        max: 25,
      },
      tTrainCount: {
        max: 200,
      },
      tPoweredCars: {
        tSpeed: {
          min: 0,
          max: 200,
        },
      },
      tPassesThroughStation: {
        min: 1,
        max: 20,
      },
    },
  }
}

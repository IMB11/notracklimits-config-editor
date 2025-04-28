import { stringify } from "@kilcekru/lua-table"

export function generateLuaConfig(config: any): string {
  const { general, tConfig } = config

  // Create a structure that matches the expected output format
  const luaStructure: any = {
    eConfigMode: general?.eConfigMode || "custom", // Set to "custom" to use tConfig settings
    bEnableCameraEffects: general?.bEnableCameraEffects || false,
    bAllowAllInterchangableCoasterTrains: general?.bAllowAllInterchangableCoasterTrains || true,
    bPrintDebugLog: false, // Requires ASCEDebug to view
  }

  // Only include tConfig if mode is custom
  if (general?.eConfigMode === "custom") {
    luaStructure.tConfig = tConfig || {}
  }

  // Use the lua-table library to stringify the structure
  let configContent = stringify(luaStructure)

  // Add comments to the output
  configContent = configContent.replace(
    'eConfigMode = "custom"',
    'eConfigMode = "custom" -- Set to "custom" to use tConfig settings',
  )
  configContent = configContent.replace(
    "bPrintDebugLog = false",
    "bPrintDebugLog = false -- Requires ASCEDebug to view",
  )

  // Add comments for specific sections if tConfig is included
  if (general?.eConfigMode === "custom") {
    configContent = configContent.replace(/tBooster = {/g, "-- meters per second\n    tBooster = {")
    configContent = configContent.replace(
      /tAcceleration = {/g,
      "    -- NTLSetBoosterAcceleration (min - float, max - float)\n        tAcceleration = {",
    )
    configContent = configContent.replace(
      /tSpeed = {/g,
      "    -- NTLSetBoosterSpeed (min - float, max - float)\n        tSpeed = {",
    )

    configContent = configContent.replace(/tHydraulicLaunch = {/g, "-- meters per second\n    tHydraulicLaunch = {")
    configContent = configContent.replace(
      /tReturnSpeed = {/g,
      "    -- NTLSetHydraulicReturnSpeed (min - float, max - float)\n        --- keep a hold on this one, this is intended to only replace Interceptor / Jixxer\n        tReturnSpeed = {",
    )

    configContent = configContent.replace(/tHoldingSection = {/g, "    tHoldingSection = {")
    configContent = configContent.replace(
      /tStopLocation = {/g,
      "    -- NTLSetHoldingStopLocation (min-float max-float)\n        tStopLocation = {",
    )
    configContent = configContent.replace(
      /tReleaseSpeed = {/g,
      "    -- NTLSetHoldingReleaseSpeed (min-float max-float)\n        tReleaseSpeed = {",
    )

    configContent = configContent.replace(/tBrakes = {/g, "    tBrakes = {")
    configContent = configContent.replace(
      /tMinSpeed = {/g,
      "    -- NTLSetBrakeMinSpeed (min-float max-float)\n        tMinSpeed = {",
    )
    configContent = configContent.replace(
      /tDeceleration = {/g,
      "    -- NTLSetBrakeDeceleration (min-float max-float)\n        tDeceleration = {",
    )

    configContent = configContent.replace(/tChainLift = {/g, "    tChainLift = {")
    configContent = configContent.replace(
      /tSpeed = {/g,
      "    -- Meters per second\n        -- NTLSetChainLiftSpeed (min - max)\n        tSpeed = {",
    )

    configContent = configContent.replace(
      /tMaxTrackHeight = /g,
      "    -- Feet\n    -- NTLSetMaxTrackHeight (int)\n    tMaxTrackHeight = ",
    )

    configContent = configContent.replace(
      /tPoweredCars = {/g,
      "    -- NTLSetPoweredCarMaxSpeed (float)\n    tPoweredCars = {",
    )
  }

  return configContent
}

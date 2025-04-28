import { parse } from "@kilcekru/lua-table"

export function parseLuaConfig(content: string): any {
  try {
    // Preprocess the content to fix common issues with Lua syntax
    const processedContent = preprocessLuaContent(content)

    // Parse the processed content
    const parsedConfig = parse(processedContent)

    // Initialize the result object with default values
    const result: any = {
      general: {
        eConfigMode: "custom",
        bEnableCameraEffects: false,
        bAllowAllInterchangableCoasterTrains: true,
      },
      tConfig: {},
    }

    // Extract top-level variables
    if (parsedConfig.eConfigMode !== undefined) {
      result.general.eConfigMode = parsedConfig.eConfigMode
    }

    if (parsedConfig.bEnableCameraEffects !== undefined) {
      result.general.bEnableCameraEffects = parsedConfig.bEnableCameraEffects
    }

    if (parsedConfig.bAllowAllInterchangableCoasterTrains !== undefined) {
      result.general.bAllowAllInterchangableCoasterTrains = parsedConfig.bAllowAllInterchangableCoasterTrains
    }

    // Extract tConfig if present
    if (parsedConfig.tConfig) {
      result.tConfig = parsedConfig.tConfig
    }

    return result
  } catch (error) {
    console.error("Error parsing Lua config:", error)
    throw new Error("Failed to parse Lua config file")
  }
}

// Completely rewritten preprocessor function
function preprocessLuaContent(content: string): string {
  // Remove comments first
  const cleanContent = content.replace(/--[^\n]*/g, "")

  // Split into lines for processing
  const lines = cleanContent.split("\n")

  // Process each line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Skip empty lines
    if (line === "") continue

    // Check if the line needs a comma
    if (
      !line.endsWith(",") &&
      !line.endsWith("{") &&
      !line.endsWith("}") &&
      !line.includes("{") &&
      !line.includes("}")
    ) {
      // Add comma to the end of the line
      lines[i] = line + ","
    } else {
      lines[i] = line
    }
  }

  // Join the lines back together
  let processedContent = lines.join("\n")

  // Ensure the content is wrapped in curly braces
  if (!processedContent.trim().startsWith("{")) {
    processedContent = "{\n" + processedContent + "\n}"
  }

  // Final cleanup - remove any trailing commas before closing braces
  processedContent = processedContent.replace(/,(\s*})/g, "$1")

  return processedContent
}

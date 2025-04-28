"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Upload, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GeneralSettings from "@/components/general-settings"
import TrackElements from "@/components/track-elements"
import RideSpecificElements from "@/components/ride-specific-elements"
import TrackParameters from "@/components/track-parameters"
import SpecialTrackSettings from "@/components/special-track-settings"
import { presets } from "@/lib/presets"
import { generateLuaConfig } from "@/lib/generate-config"
import { parseLuaConfig } from "@/lib/parse-config"

export default function ConfiguratorPage() {
  const [config, setConfig] = useState(presets.default)

  const handleConfigChange = (section: string, key: string, value: any) => {
    setConfig((prev: { [x: string]: any }) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }))
  }

  const handleNestedConfigChange = (section: string, subSection: string, key: string, value: any) => {
    setConfig((prev: { [x: string]: { [x: string]: any } }) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subSection]: {
          ...prev[section][subSection],
          [key]: value,
        },
      },
    }))
  }

  const handlePresetChange = (presetName: string) => {
    if (presetName in presets) {
      setConfig(presets[presetName])
    }
  }

  const downloadConfig = () => {
    const configContent = generateLuaConfig(config)
    const blob = new Blob([configContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Config.NoTrackLimits.lua"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      if (content) {
        try {
          const parsedConfig = parseLuaConfig(content)
          setConfig(parsedConfig)
        } catch (error) {
          console.error("Error parsing config file:", error)

          // Show a more detailed error message
          const errorMessage = error instanceof Error ? error.message : "Unknown error"
          alert(
            `Failed to parse the config file: ${errorMessage}\n\nPlease ensure it's a valid No Track Limits config.`,
          )

          // Try to recover by using the default config
          setConfig(presets.default)
        }
      }
    }
    reader.readAsText(file)
  }

  const isConfigDisabled = config.general?.eConfigMode === "realistic"

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <main className="container mx-auto py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle>No Track Limits (PC2) Config Editor</CardTitle>
                <CardDescription>
                  Configure the No Track Limits mod for Planet Coaster 2. Customize track elements, parameters, and
                  more.
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      Use Preset
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {Object.keys(presets).map((presetName) => (
                      <DropdownMenuItem
                        key={presetName}
                        onClick={() => handlePresetChange(presetName)}
                      >
                        {presetName}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  Import Config
                  <input
                    id="file-upload"
                    type="file"
                    accept=".lua,.ini"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </Button>
                <Button variant="outline" onClick={downloadConfig}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Config
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="track-elements" disabled={isConfigDisabled}>
              Track Elements
            </TabsTrigger>
            <TabsTrigger value="ride-specific" disabled={isConfigDisabled}>
              Ride-Specific
            </TabsTrigger>
            <TabsTrigger value="track-parameters" disabled={isConfigDisabled}>
              Track Parameters
            </TabsTrigger>
            <TabsTrigger value="special-settings" disabled={isConfigDisabled}>
              Special Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <GeneralSettings config={config} onChange={handleConfigChange} />
          </TabsContent>

          <TabsContent value="track-elements" className="space-y-4">
            {isConfigDisabled ? (
              <Card className="p-6">
                <p className="text-center text-muted-foreground">
                  Configuration is set to "realistic" mode. Switch to "custom" mode to edit track elements.
                </p>
              </Card>
            ) : (
              <TrackElements config={config} onChange={handleConfigChange} />
            )}
          </TabsContent>

          <TabsContent value="ride-specific" className="space-y-4">
            {isConfigDisabled ? (
              <Card className="p-6">
                <p className="text-center text-muted-foreground">
                  Configuration is set to "realistic" mode. Switch to "custom" mode to edit ride-specific elements.
                </p>
              </Card>
            ) : (
              <RideSpecificElements config={config} onChange={handleConfigChange} />
            )}
          </TabsContent>

          <TabsContent value="track-parameters" className="space-y-4">
            {isConfigDisabled ? (
              <Card className="p-6">
                <p className="text-center text-muted-foreground">
                  Configuration is set to "realistic" mode. Switch to "custom" mode to edit track parameters.
                </p>
              </Card>
            ) : (
              <TrackParameters
                config={config}
                onChange={handleConfigChange}
                onNestedChange={handleNestedConfigChange}
              />
            )}
          </TabsContent>

          <TabsContent value="special-settings" className="space-y-4">
            {isConfigDisabled ? (
              <Card className="p-6">
                <p className="text-center text-muted-foreground">
                  Configuration is set to "realistic" mode. Switch to "custom" mode to edit special track settings.
                </p>
              </Card>
            ) : (
              <SpecialTrackSettings
                config={config}
                onChange={handleConfigChange}
                onNestedChange={handleNestedConfigChange}
              />
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-end">
          <Button onClick={downloadConfig} className="gap-2">
            <Download className="h-4 w-4" />
            Download Configuration
          </Button>
        </div>
      </main>

      <footer className="py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Not affiliated with Frontier Developments or Planet Coaster 2
        </div>
      </footer>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

interface GeneralSettingsProps {
  config: any
  onChange: (section: string, key: string, value: any) => void
}

export default function GeneralSettings({ config, onChange }: GeneralSettingsProps) {
  const isRealisticMode = config.general?.eConfigMode === "realistic"

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>Configure the basic settings for the No Track Limits mod</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="configMode">Configuration Mode</Label>
            <RadioGroup
              id="configMode"
              value={config.general?.eConfigMode || "custom"}
              onValueChange={(value) => onChange("general", "eConfigMode", value)}
              className="mt-2 flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="configMode-custom" />
                <Label htmlFor="configMode-custom">Custom</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="realistic" id="configMode-realistic" />
                <Label htmlFor="configMode-realistic">Realistic</Label>
              </div>
            </RadioGroup>

            {isRealisticMode && (
              <Alert variant="warning" className="mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  In "realistic" mode, the mod uses settings from Planet Coaster 1's No Track Limits V3: Realism Overhaul mod (excluding additional shuttle track for Big M's Rides LSM coaster)
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="enableCameraEffects" className="flex flex-col space-y-1">
              <span>Enable Camera Effects</span>
              <span className="font-normal text-sm text-muted-foreground">
                Allow camera effects during ride simulation
              </span>
            </Label>
            <Switch
              id="enableCameraEffects"
              checked={config.general?.bEnableCameraEffects || false}
              onCheckedChange={(checked) => onChange("general", "bEnableCameraEffects", checked)}
            />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="allowAllInterchangableCoasterTrains" className="flex flex-col space-y-1">
              <span>Allow All Interchangeable Coaster Trains</span>
              <span className="font-normal text-sm text-muted-foreground">
                Enable using any train type on any coaster
              </span>
            </Label>
            <Switch
              id="allowAllInterchangableCoasterTrains"
              checked={config.general?.bAllowAllInterchangableCoasterTrains || true}
              onCheckedChange={(checked) => onChange("general", "bAllowAllInterchangableCoasterTrains", checked)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

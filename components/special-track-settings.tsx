"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface SpecialTrackSettingsProps {
  config: any
  onChange: (section: string, key: string, value: any) => void
  onNestedChange: (section: string, subSection: string, key: string, value: any) => void
}

export default function SpecialTrackSettings({ config, onChange, onNestedChange }: SpecialTrackSettingsProps) {
  const trackConfig = config.tConfig || {}

  const handleRangeChange = (section: string, subSection: string, key: string, value: number) => {
    onNestedChange("tConfig", section, key, value)
  }

  const handleNestedRangeChange = (section: string, subSection: string, key: string, value: number) => {
    const updatedSection = {
      ...trackConfig[section],
      [subSection]: {
        ...trackConfig[section]?.[subSection],
        [key]: value,
      },
    }
    onChange("tConfig", section, updatedSection)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Special Track Settings</CardTitle>
        <CardDescription>Configure special track elements like boosters, brakes, and lifts</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <Accordion type="multiple" className="w-full">
            {/* Booster Settings */}
            <AccordionItem value="booster">
              <AccordionTrigger>Booster Settings</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="boosterAccelMin">Minimum Acceleration (m/s²)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="boosterAccelMin"
                          min={-50}
                          max={0}
                          step={0.1}
                          value={[trackConfig.tBooster?.tAcceleration?.min || -35]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tBooster", "tAcceleration", "min", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tBooster?.tAcceleration?.min || -35}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tBooster",
                              "tAcceleration",
                              "min",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="boosterAccelMax">Maximum Acceleration (m/s²)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="boosterAccelMax"
                          min={0}
                          max={50}
                          step={0.1}
                          value={[trackConfig.tBooster?.tAcceleration?.max || 35.0]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tBooster", "tAcceleration", "max", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tBooster?.tAcceleration?.max || 35.0}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tBooster",
                              "tAcceleration",
                              "max",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="boosterSpeedMin">Minimum Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="boosterSpeedMin"
                          min={0}
                          max={20}
                          step={0.1}
                          value={[trackConfig.tBooster?.tSpeed?.min || 0.0]}
                          onValueChange={(value) => handleNestedRangeChange("tBooster", "tSpeed", "min", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tBooster?.tSpeed?.min || 0.0}
                          onChange={(e) =>
                            handleNestedRangeChange("tBooster", "tSpeed", "min", Number.parseFloat(e.target.value))
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="boosterSpeedMax">Maximum Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="boosterSpeedMax"
                          min={20}
                          max={100}
                          step={0.1}
                          value={[trackConfig.tBooster?.tSpeed?.max || 80.4672]}
                          onValueChange={(value) => handleNestedRangeChange("tBooster", "tSpeed", "max", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tBooster?.tSpeed?.max || 80.4672}
                          onChange={(e) =>
                            handleNestedRangeChange("tBooster", "tSpeed", "max", Number.parseFloat(e.target.value))
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Hydraulic Launch Settings */}
            <AccordionItem value="hydraulic">
              <AccordionTrigger>Hydraulic Launch Settings</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hydraulicAccelMin">Minimum Acceleration (m/s²)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="hydraulicAccelMin"
                          min={-50}
                          max={0}
                          step={0.1}
                          value={[trackConfig.tHydraulicLaunch?.tAcceleration?.min || -35]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tHydraulicLaunch", "tAcceleration", "min", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tHydraulicLaunch?.tAcceleration?.min || -35}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tHydraulicLaunch",
                              "tAcceleration",
                              "min",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hydraulicAccelMax">Maximum Acceleration (m/s²)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="hydraulicAccelMax"
                          min={0}
                          max={50}
                          step={0.1}
                          value={[trackConfig.tHydraulicLaunch?.tAcceleration?.max || 35.0]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tHydraulicLaunch", "tAcceleration", "max", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tHydraulicLaunch?.tAcceleration?.max || 35.0}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tHydraulicLaunch",
                              "tAcceleration",
                              "max",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hydraulicSpeedMin">Minimum Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="hydraulicSpeedMin"
                          min={0}
                          max={20}
                          step={0.1}
                          value={[trackConfig.tHydraulicLaunch?.tSpeed?.min || 0.0]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tHydraulicLaunch", "tSpeed", "min", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tHydraulicLaunch?.tSpeed?.min || 0.0}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tHydraulicLaunch",
                              "tSpeed",
                              "min",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hydraulicSpeedMax">Maximum Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="hydraulicSpeedMax"
                          min={20}
                          max={100}
                          step={0.1}
                          value={[trackConfig.tHydraulicLaunch?.tSpeed?.max || 89.408]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tHydraulicLaunch", "tSpeed", "max", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tHydraulicLaunch?.tSpeed?.max || 89.408}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tHydraulicLaunch",
                              "tSpeed",
                              "max",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hydraulicReturnMin">Minimum Return Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="hydraulicReturnMin"
                          min={0}
                          max={10}
                          step={0.1}
                          value={[trackConfig.tHydraulicLaunch?.tReturnSpeed?.min || 1.0]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tHydraulicLaunch", "tReturnSpeed", "min", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tHydraulicLaunch?.tReturnSpeed?.min || 1.0}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tHydraulicLaunch",
                              "tReturnSpeed",
                              "min",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hydraulicReturnMax">Maximum Return Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="hydraulicReturnMax"
                          min={5}
                          max={20}
                          step={0.1}
                          value={[trackConfig.tHydraulicLaunch?.tReturnSpeed?.max || 13.4112]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tHydraulicLaunch", "tReturnSpeed", "max", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tHydraulicLaunch?.tReturnSpeed?.max || 13.4112}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tHydraulicLaunch",
                              "tReturnSpeed",
                              "max",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Chain Lift Settings */}
            <AccordionItem value="chainlift">
              <AccordionTrigger>Chain Lift Settings</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="chainLiftSpeedMin">Minimum Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="chainLiftSpeedMin"
                          min={0}
                          max={5}
                          step={0.1}
                          value={[trackConfig.tChainLift?.tSpeed?.min || 0.0]}
                          onValueChange={(value) => handleNestedRangeChange("tChainLift", "tSpeed", "min", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tChainLift?.tSpeed?.min || 0.0}
                          onChange={(e) =>
                            handleNestedRangeChange("tChainLift", "tSpeed", "min", Number.parseFloat(e.target.value))
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="chainLiftSpeedMax">Maximum Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="chainLiftSpeedMax"
                          min={1}
                          max={20}
                          step={0.1}
                          value={[trackConfig.tChainLift?.tSpeed?.max || 10.0]}
                          onValueChange={(value) => handleNestedRangeChange("tChainLift", "tSpeed", "max", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tChainLift?.tSpeed?.max || 10.0}
                          onChange={(e) =>
                            handleNestedRangeChange("tChainLift", "tSpeed", "max", Number.parseFloat(e.target.value))
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Brake Settings */}
            <AccordionItem value="brakes">
              <AccordionTrigger>Brake Settings</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brakeMinSpeed">Minimum Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="brakeMinSpeed"
                          min={0}
                          max={5}
                          step={0.1}
                          value={[trackConfig.tBrakes?.tMinSpeed?.min || 0.27777777]}
                          onValueChange={(value) => handleNestedRangeChange("tBrakes", "tMinSpeed", "min", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tBrakes?.tMinSpeed?.min || 0.27777777}
                          onChange={(e) =>
                            handleNestedRangeChange("tBrakes", "tMinSpeed", "min", Number.parseFloat(e.target.value))
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brakeDecelMax">Maximum Deceleration (m/s²)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="brakeDecelMax"
                          min={1}
                          max={30}
                          step={0.1}
                          value={[trackConfig.tBrakes?.tDeceleration?.max || 20.0]}
                          onValueChange={(value) =>
                            handleNestedRangeChange("tBrakes", "tDeceleration", "max", value[0])
                          }
                        />
                        <Input
                          type="number"
                          value={trackConfig.tBrakes?.tDeceleration?.max || 20.0}
                          onChange={(e) =>
                            handleNestedRangeChange(
                              "tBrakes",
                              "tDeceleration",
                              "max",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Other Settings */}
            <AccordionItem value="other">
              <AccordionTrigger>Other Settings</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxTrackHeight">Maximum Track Height (feet)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="maxTrackHeight"
                          min={100}
                          max={20000}
                          step={100}
                          value={[trackConfig.tMaxTrackHeight || 10000]}
                          onValueChange={(value) => onChange("tConfig", "tMaxTrackHeight", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tMaxTrackHeight || 10000}
                          onChange={(e) => onChange("tConfig", "tMaxTrackHeight", Number.parseFloat(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carCountMin">Minimum Car Count</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="carCountMin"
                          min={1}
                          max={10}
                          step={1}
                          value={[trackConfig.tCarCount?.min || 1]}
                          onValueChange={(value) => handleRangeChange("tCarCount", "min", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tCarCount?.min || 1}
                          onChange={(e) => handleRangeChange("tCarCount", "min", Number.parseInt(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carCountMax">Maximum Car Count</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="carCountMax"
                          min={5}
                          max={50}
                          step={1}
                          value={[trackConfig.tCarCount?.max || 25]}
                          onValueChange={(value) => handleRangeChange("tCarCount", "max", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tCarCount?.max || 25}
                          onChange={(e) => handleRangeChange("tCarCount", "max", Number.parseInt(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="trainCountMax">Maximum Train Count</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="trainCountMax"
                          min={10}
                          max={300}
                          step={10}
                          value={[trackConfig.tTrainCount?.max || 200]}
                          onValueChange={(value) => handleRangeChange("tTrainCount", "max", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tTrainCount?.max || 200}
                          onChange={(e) => handleRangeChange("tTrainCount", "max", Number.parseInt(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="poweredCarSpeedMax">Maximum Powered Car Speed (m/s)</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="poweredCarSpeedMax"
                          min={50}
                          max={300}
                          step={10}
                          value={[trackConfig.tPoweredCars?.tSpeed?.max || 200]}
                          onValueChange={(value) => handleNestedRangeChange("tPoweredCars", "tSpeed", "max", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tPoweredCars?.tSpeed?.max || 200}
                          onChange={(e) =>
                            handleNestedRangeChange("tPoweredCars", "tSpeed", "max", Number.parseFloat(e.target.value))
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passesThroughStationMax">Maximum Passes Through Station</Label>
                      <div className="flex items-center space-x-2">
                        <Slider
                          id="passesThroughStationMax"
                          min={1}
                          max={30}
                          step={1}
                          value={[trackConfig.tPassesThroughStation?.max || 20]}
                          onValueChange={(value) => handleRangeChange("tPassesThroughStation", "max", value[0])}
                        />
                        <Input
                          type="number"
                          value={trackConfig.tPassesThroughStation?.max || 20}
                          onChange={(e) =>
                            handleRangeChange("tPassesThroughStation", "max", Number.parseInt(e.target.value))
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

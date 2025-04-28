"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Plus, X } from "lucide-react"

interface TrackElementsProps {
  config: any
  onChange: (section: string, key: string, value: any) => void
}

export default function TrackElements({ config, onChange }: TrackElementsProps) {
  const [newElement, setNewElement] = useState("")

  const appendedElements = config.tConfig?.tAppendedElements || []

  const handleAddElement = () => {
    if (newElement && !appendedElements.includes(newElement)) {
      const updatedElements = [...appendedElements, newElement]
      onChange("tConfig", "tAppendedElements", updatedElements)
      setNewElement("")
    }
  }

  const handleRemoveElement = (element: string) => {
    const updatedElements = appendedElements.filter((e: string) => e !== element)
    onChange("tConfig", "tAppendedElements", updatedElements)
  }

  const handleToggleElement = (element: string, checked: boolean) => {
    let updatedElements = [...appendedElements]

    if (checked && !updatedElements.includes(element)) {
      updatedElements.push(element)
    } else if (!checked && updatedElements.includes(element)) {
      updatedElements = updatedElements.filter((e: string) => e !== element)
    }

    onChange("tConfig", "tAppendedElements", updatedElements)
  }

  // Common track elements in PC2
  const commonElements = [
    "default_LSM",
    "default_LSM_HoldingSection",
    "TK_501_DropTrack",
    "TK_501_DropTrack_R",
    "TK_509_TiltTrack",
    "TK_501_SwitchTrack",
    "TK_501_SwitchTrack_L",
    "default_reverselaunch",
    "viperone_reverselaunch",
    "TK_501_EdgeTilt",
    "TK_501_Turntable_90L",
    "TK_501_Turntable_90R",
    "TK_501_TurntableF",
    "default_booster",
    "friction_wheel_lift",
    "magnetic_blocksection",
    "magnetic_brakes",
    "trim_brakes_TK_010_Magnetic",
    "default_chainlift_curved",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Track Elements</CardTitle>
        <CardDescription>Configure which track elements are available for all rides</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Add custom track element"
              value={newElement}
              onChange={(e) => setNewElement(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddElement} size="sm">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>

          <ScrollArea className="h-[400px] border rounded-md p-4">
            <div className="space-y-4">
              <h3 className="font-medium">Common Track Elements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {commonElements.map((element) => (
                  <div key={element} className="flex items-center space-x-2">
                    <Checkbox
                      id={`element-${element}`}
                      checked={appendedElements.includes(element)}
                      onCheckedChange={(checked) => handleToggleElement(element, !!checked)}
                    />
                    <Label htmlFor={`element-${element}`} className="text-sm">
                      {element}
                    </Label>
                  </div>
                ))}
              </div>

              {appendedElements.length > 0 && (
                <>
                  <h3 className="font-medium mt-6">Custom Track Elements</h3>
                  <div className="space-y-2">
                    {appendedElements
                      .filter((element: string) => !commonElements.includes(element))
                      .map((element: string) => (
                        <div key={element} className="flex items-center justify-between border rounded-md p-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`custom-${element}`}
                              checked={true}
                              onCheckedChange={(checked) => handleToggleElement(element, !!checked)}
                            />
                            <Label htmlFor={`custom-${element}`} className="text-sm">
                              {element}
                            </Label>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => handleRemoveElement(element)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}

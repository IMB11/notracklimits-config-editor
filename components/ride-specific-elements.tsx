"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, X } from "lucide-react"

interface RideSpecificElementsProps {
  config: any
  onChange: (section: string, key: string, value: any) => void
}

export default function RideSpecificElements({ config, onChange }: RideSpecificElementsProps) {
  const [selectedRide, setSelectedRide] = useState("")
  const [newRide, setNewRide] = useState("")
  const [newElement, setNewElement] = useState("")

  const rideSpecificElements = config.tConfig?.tAppendedElementsToRide || {}

  const handleAddRide = () => {
    if (newRide && !rideSpecificElements[newRide]) {
      const updatedElements = {
        ...rideSpecificElements,
        [newRide]: [],
      }
      onChange("tConfig", "tAppendedElementsToRide", updatedElements)
      setSelectedRide(newRide)
      setNewRide("")
    }
  }

  const handleRemoveRide = (ride: string) => {
    const { [ride]: _, ...rest } = rideSpecificElements
    onChange("tConfig", "tAppendedElementsToRide", rest)
    if (selectedRide === ride) {
      setSelectedRide(Object.keys(rest)[0] || "")
    }
  }

  const handleAddElement = () => {
    if (selectedRide && newElement && !rideSpecificElements[selectedRide].includes(newElement)) {
      const updatedElements = {
        ...rideSpecificElements,
        [selectedRide]: [...rideSpecificElements[selectedRide], newElement],
      }
      onChange("tConfig", "tAppendedElementsToRide", updatedElements)
      setNewElement("")
    }
  }

  const handleRemoveElement = (element: string) => {
    if (selectedRide) {
      const updatedElements = {
        ...rideSpecificElements,
        [selectedRide]: rideSpecificElements[selectedRide].filter((e: string) => e !== element),
      }
      onChange("tConfig", "tAppendedElementsToRide", updatedElements)
    }
  }

  const rideOptions = Object.keys(rideSpecificElements)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ride-Specific Elements</CardTitle>
        <CardDescription>Configure track elements that are specific to certain ride types</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="font-medium">Ride Types</h3>

            <div className="flex items-center space-x-2">
              <Input
                placeholder="Add new ride type (e.g., CC_SLV)"
                value={newRide}
                onChange={(e) => setNewRide(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleAddRide} size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>

            <ScrollArea className="h-[300px] border rounded-md p-4">
              <div className="space-y-2">
                {rideOptions.map((ride) => (
                  <div key={ride} className="flex items-center justify-between border rounded-md p-2">
                    <Button
                      variant={selectedRide === ride ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedRide(ride)}
                    >
                      {ride}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveRide(ride)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Elements for {selectedRide || "Selected Ride"}</h3>

            {selectedRide ? (
              <>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Add track element"
                    value={newElement}
                    onChange={(e) => setNewElement(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleAddElement} size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Add
                  </Button>
                </div>

                <ScrollArea className="h-[300px] border rounded-md p-4">
                  <div className="space-y-2">
                    {rideSpecificElements[selectedRide]?.map((element: string) => (
                      <div key={element} className="flex items-center justify-between border rounded-md p-2">
                        <span className="text-sm">{element}</span>
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveElement(element)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {rideSpecificElements[selectedRide]?.length === 0 && (
                      <p className="text-sm text-muted-foreground">No elements added for this ride type</p>
                    )}
                  </div>
                </ScrollArea>
              </>
            ) : (
              <div className="flex items-center justify-center h-[350px] border rounded-md">
                <p className="text-muted-foreground">Select a ride type to configure elements</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

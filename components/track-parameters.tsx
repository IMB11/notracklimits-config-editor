"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TrackParametersProps {
  config: any
  onChange: (section: string, key: string, value: any) => void
  onNestedChange: (section: string, subSection: string, key: string, value: any) => void
}

export default function TrackParameters({ config, onChange, onNestedChange }: TrackParametersProps) {
  const trackConfig = config.tConfig || {}

  const handleRangeChange = (section: string, key: string, value: number) => {
    onNestedChange("tConfig", section, key, value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Track Parameters</CardTitle>
        <CardDescription>Configure track length, slope, banking, and curve parameters</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-8">
            {/* Track Length */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Track Length</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="trackLengthMin">Minimum Length (m)</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="trackLengthMin"
                      min={0.1}
                      max={10}
                      step={0.1}
                      value={[trackConfig.tTrackLength?.min || 0.5]}
                      onValueChange={(value) => handleRangeChange("tTrackLength", "min", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tTrackLength?.min || 0.5}
                      onChange={(e) => handleRangeChange("tTrackLength", "min", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trackLengthMax">Maximum Length (m)</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="trackLengthMax"
                      min={1}
                      max={100}
                      step={0.5}
                      value={[trackConfig.tTrackLength?.max || 50]}
                      onValueChange={(value) => handleRangeChange("tTrackLength", "max", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tTrackLength?.max || 50}
                      onChange={(e) => handleRangeChange("tTrackLength", "max", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trackLengthStep">Length Step (m)</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="trackLengthStep"
                      min={0.1}
                      max={5}
                      step={0.1}
                      value={[trackConfig.tTrackLength?.step || 0.5]}
                      onValueChange={(value) => handleRangeChange("tTrackLength", "step", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tTrackLength?.step || 0.5}
                      onChange={(e) => handleRangeChange("tTrackLength", "step", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Slope Range */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Slope Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="slopeRangeMin">Minimum Slope</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="slopeRangeMin"
                      type="number"
                      value={trackConfig.tSlopeRange?.min || -50000.0}
                      onChange={(e) => handleRangeChange("tSlopeRange", "min", Number.parseFloat(e.target.value))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slopeRangeMax">Maximum Slope</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="slopeRangeMax"
                      type="number"
                      value={trackConfig.tSlopeRange?.max || 50000.0}
                      onChange={(e) => handleRangeChange("tSlopeRange", "max", Number.parseFloat(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Ride Slope Range */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Ride Slope Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rideSlopeRangeMin">Minimum Ride Slope</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="rideSlopeRangeMin"
                      min={-360}
                      max={0}
                      step={1}
                      value={[trackConfig.tRideSlopeRange?.min || -360.0]}
                      onValueChange={(value) => handleRangeChange("tRideSlopeRange", "min", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tRideSlopeRange?.min || -360.0}
                      onChange={(e) => handleRangeChange("tRideSlopeRange", "min", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rideSlopeRangeMax">Maximum Ride Slope</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="rideSlopeRangeMax"
                      min={0}
                      max={360}
                      step={1}
                      value={[trackConfig.tRideSlopeRange?.max || 360.0]}
                      onValueChange={(value) => handleRangeChange("tRideSlopeRange", "max", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tRideSlopeRange?.max || 360.0}
                      onChange={(e) => handleRangeChange("tRideSlopeRange", "max", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Banking Range */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Banking Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bankingRangeMin">Minimum Banking</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="bankingRangeMin"
                      type="number"
                      value={trackConfig.tBankingRange?.min || -50000.0}
                      onChange={(e) => handleRangeChange("tBankingRange", "min", Number.parseFloat(e.target.value))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankingRangeMax">Maximum Banking</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="bankingRangeMax"
                      type="number"
                      value={trackConfig.tBankingRange?.max || 50000.0}
                      onChange={(e) => handleRangeChange("tBankingRange", "max", Number.parseFloat(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Bank Pivot Range */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Bank Pivot Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bankPivotRangeMin">Minimum Bank Pivot</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="bankPivotRangeMin"
                      min={-10}
                      max={0}
                      step={0.1}
                      value={[trackConfig.tBankPivotRange?.min || -3.0]}
                      onValueChange={(value) => handleRangeChange("tBankPivotRange", "min", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tBankPivotRange?.min || -3.0}
                      onChange={(e) => handleRangeChange("tBankPivotRange", "min", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankPivotRangeMax">Maximum Bank Pivot</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="bankPivotRangeMax"
                      min={0}
                      max={10}
                      step={0.1}
                      value={[trackConfig.tBankPivotRange?.max || 3.0]}
                      onValueChange={(value) => handleRangeChange("tBankPivotRange", "max", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tBankPivotRange?.max || 3.0}
                      onChange={(e) => handleRangeChange("tBankPivotRange", "max", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Curve Range */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Curve Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="curveRangeMin">Minimum Curve</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="curveRangeMin"
                      min={-360}
                      max={0}
                      step={1}
                      value={[trackConfig.tCurveRange?.min || -360.0]}
                      onValueChange={(value) => handleRangeChange("tCurveRange", "min", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tCurveRange?.min || -360.0}
                      onChange={(e) => handleRangeChange("tCurveRange", "min", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="curveRangeMax">Maximum Curve</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="curveRangeMax"
                      min={0}
                      max={360}
                      step={1}
                      value={[trackConfig.tCurveRange?.max || 360.0]}
                      onValueChange={(value) => handleRangeChange("tCurveRange", "max", value[0])}
                    />
                    <Input
                      type="number"
                      value={trackConfig.tCurveRange?.max || 360.0}
                      onChange={(e) => handleRangeChange("tCurveRange", "max", Number.parseFloat(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

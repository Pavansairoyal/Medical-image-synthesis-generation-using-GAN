import React from 'react';
import { Detection } from '@/types';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface DetectionListProps {
    detections: Detection[];
}

const DetectionList = ({ detections = [] }: DetectionListProps) => {
    if (detections.length === 0) {
        return (
            <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Detection Results</h3>
                <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 text-gray-500">
                    <AlertCircle className="h-4 w-4" />
                    <span>No specific conditions detected</span>
                </div>
            </div>
        );
    }

    const getDetectionStyle = (className: string) => {
        const baseStyle = "px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1";

        return cn(
            baseStyle,
            className === "Healthy"
                ? "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-200"
                : "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-200"
        );
    };

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Detection Results</h3>

            <div className="space-y-2">
                {detections.map((detection, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border bg-background p-3 transition-all hover:shadow-sm"
                    >
                        <div className="flex items-center gap-3">
              <span className={getDetectionStyle(detection.class_name)}>
                {detection.class_name === "Healthy" ? (
                    <CheckCircle2 className="h-3 w-3" />
                ) : (
                    <AlertCircle className="h-3 w-3" />
                )}
                  {detection.class_name}
              </span>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                            {(detection.confidence * 100).toFixed(1)}% confidence
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetectionList;
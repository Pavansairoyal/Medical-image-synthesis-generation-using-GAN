import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Detection } from '@/types';
import ResultsHeader from './results/ResultsHeader';
import ImageDisplay from './results/ImageDisplay';
import DetectionList from './results/DetectionList';
import Recommendations from './results/Recommendations';
import ResultsActions from './results/ResultsActions';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultsCardProps {
  image: string | null;
  detections?: Detection[];
}

const ResultsCard: React.FC<ResultsCardProps> = ({ image, detections = [] }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  // Safely determine health status
  const isHealthy = detections.length === 0 || detections.every(d => d?.class_name === "Healthy");

  useEffect(() => {
    console.log("[Debug] Results data:", {
      image: image?.substring(0, 30),
      detectionsCount: detections?.length
    });

    setHasError(false);

    if (!image) {
      setImageUrl(null);
      return;
    }

    const validateImageUrl = async () => {
      try {
        if (image.startsWith('blob:')) {
          const response = await fetch(image);
          if (!response.ok) throw new Error('Invalid blob URL');
        }
        setImageUrl(image);
      } catch (error) {
        console.error("Image validation failed:", error);
        setHasError(true);
      }
    };

    validateImageUrl();
  }, [image]);

  const getCardStyle = () => {
    if (hasError) return "border-gray-200 bg-gray-50/50";
    return isHealthy
        ? "border-emerald-100 bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/10 dark:to-emerald-900/5"
        : "border-amber-100 bg-gradient-to-br from-white to-amber-50 dark:from-amber-900/10 dark:to-amber-900/5";
  };

  const handleSaveImage = () => {
    if (!imageUrl) return;

    try {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `skin-analysis-${new Date().toISOString().slice(0, 10)}.${imageUrl.startsWith('data:image/png') ? 'png' : 'jpg'}`;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => document.body.removeChild(link), 100);
    } catch (error) {
      console.error("Error saving image:", error);
    }
  };

  return (
      <Card className={cn(
          "overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl",
          getCardStyle()
      )}>
        <CardHeader className="p-0">
          <ResultsHeader
              isHealthy={isHealthy}
              hasError={hasError}
              detectionsCount={detections.length}
          />
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {hasError ? (
              <div className="flex flex-col items-center justify-center py-8 gap-2 text-center">
                <AlertCircle className="h-8 w-8 text-gray-400" />
                <p className="text-gray-500">Could not load image preview</p>
              </div>
          ) : (
              <>
                <ImageDisplay imageUrl={imageUrl} />
                <DetectionList detections={detections} />
                <Recommendations isHealthy={isHealthy} />
              </>
          )}
        </CardContent>

        <CardFooter className="p-0 border-t">
          <ResultsActions
              onSaveImage={handleSaveImage}
              canSave={!!imageUrl && !hasError}
              isHealthy={isHealthy}
          />
        </CardFooter>
      </Card>
  );
};

export default ResultsCard;
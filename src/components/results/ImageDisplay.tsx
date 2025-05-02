import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ImageOff, Save } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

interface ImageDisplayProps {
  imageUrl: string | null;
}

const ImageDisplay = ({ imageUrl }: ImageDisplayProps) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    // Reset error state when image changes
    setImageError(false);
    setIsImageLoading(true);
  }, [imageUrl]);

  const handleImageError = () => {
    console.error("Failed to load image");
    setImageError(true);
    setIsImageLoading(false);
    toast({
      variant: "destructive",
      title: "Image loading failed",
      description: "The skin analysis image could not be displayed."
    });
  };

  const handleImageLoad = () => {
    console.log("Image loaded successfully");
    setIsImageLoading(false);
    setImageError(false);
  };

  const saveImage = () => {
    if (!imageUrl) {
      toast({
        variant: "destructive",
        title: "Save failed",
        description: "No skin analysis image available to save."
      });
      return;
    }

    try {
      const link = document.createElement('a');

      if (imageUrl.startsWith('data:')) {
        link.href = imageUrl;
        link.download = `skin-analysis-${new Date().toISOString().slice(0, 10)}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "Image saved",
          description: "The skin analysis image has been saved to your downloads folder."
        });
      }
      else if (imageUrl.startsWith('http')) {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0);
              const dataURL = canvas.toDataURL('image/png');
              link.href = dataURL;
              link.download = `skin-analysis-${new Date().toISOString().slice(0, 10)}.png`;

              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

              toast({
                title: "Image saved",
                description: "The skin analysis image has been saved to your downloads folder."
              });
            } else {
              throw new Error("Could not get canvas context");
            }
          } catch (error) {
            console.error("Error creating data URL:", error);
            window.open(imageUrl, '_blank');

            toast({
              variant: "destructive",
              title: "Save method changed",
              description: "Opening skin analysis in a new tab. Right-click to save it."
            });
          }
        };

        img.onerror = () => {
          console.error("Error loading image for saving");
          toast({
            variant: "destructive",
            title: "Save failed",
            description: "Could not load the skin image for saving. Try again later."
          });
        };

        img.src = imageUrl;
      } else {
        throw new Error("Invalid image URL format");
      }
    } catch (error) {
      console.error("Error saving image:", error);
      toast({
        variant: "destructive",
        title: "Save failed",
        description: "Could not save the skin analysis image. Try again later."
      });

      if (imageUrl.startsWith('http')) {
        window.open(imageUrl, '_blank');
        toast({
          variant: "destructive",
          title: "Save method changed",
          description: "Opening skin analysis in a new tab. Right-click to save it."
        });
      }
    }
  };

  if (imageError || !imageUrl) {
    return (
        <motion.div
            className="mb-6 flex flex-col items-center justify-center h-64 bg-muted/20 rounded-lg border border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
          <ImageOff className="h-16 w-16 text-muted-foreground/40 mb-2" />
          <p className="text-muted-foreground text-sm">Skin analysis image unavailable</p>
          {imageUrl && (
              <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
              >
                <Alert variant="destructive" className="mt-4 max-w-md">
                  <AlertTitle>Image loading failed</AlertTitle>
                  <AlertDescription className="text-xs">
                    We couldn't load the skin analysis image. This might be due to CORS restrictions or the image no longer exists.
                  </AlertDescription>
                </Alert>
              </motion.div>
          )}
        </motion.div>
    );
  }

  return (
      <motion.div
          className="mb-6 overflow-hidden rounded-lg border border-border/50 bg-white p-1 shadow-sm relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
      >
        {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
              <motion.div
                  className="h-8 w-8 rounded-full border-4 border-solid border-primary border-r-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </div>
        )}
        <img
            src={imageUrl}
            alt="Analyzed skin"
            className="h-auto w-full rounded object-contain"
            style={{ maxHeight: '300px' }}
            onError={handleImageError}
            onLoad={handleImageLoad}
            crossOrigin="anonymous"
        />
        <motion.div
            className="absolute bottom-2 right-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
          <Button
              size="sm"
              variant="secondary"
              className="bg-white/80 hover:bg-white shadow-sm"
              onClick={saveImage}
          >
            <Save className="h-4 w-4 mr-1" />
            Save Image
          </Button>
        </motion.div>
      </motion.div>
  );
};

export default ImageDisplay;
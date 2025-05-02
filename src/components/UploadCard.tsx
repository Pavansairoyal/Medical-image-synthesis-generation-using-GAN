import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Loader2, Upload, Camera } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { API_URL } from '@/config/api';
import { motion } from 'framer-motion';

interface UploadCardProps {
  onUploadComplete: (result: any) => void;
  onUploadStart?: () => void;
}

const UploadCard: React.FC<UploadCardProps> = ({ onUploadComplete, onUploadStart }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(selectedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PNG, JPG, or JPEG image of your skin.",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a skin image smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }

      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      toast({
        title: "No image selected",
        description: "Please select an image of your skin condition.",
        variant: "destructive",
      });
      return;
    }

    if (!isLoggedIn || !user) {
      toast({
        title: "Login required",
        description: "Please log in to analyze your skin condition.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    if (onUploadStart) {
      onUploadStart();
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('username', user.username);

      const response = await fetch(`${API_URL}/predict/`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorMsg = "Skin analysis failed";
        try {
          const errorData = await response.json();
          errorMsg = errorData.detail || errorMsg;
        } catch (e) {
          errorMsg = response.statusText || errorMsg;
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      const resultData = {
        image: preview,
        result: {
          ...data,
          image_url: data.image_url
        }
      };

      onUploadComplete(resultData);
      navigate('/results');

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Skin analysis failed';
      setError(errorMessage);
      toast({
        title: "Analysis failed",
        description: errorMessage,
        variant: "destructive",
      });
      console.error('Error during skin analysis:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
      >
        <Card className="skin-card transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-medium">Skin Analysis Upload</h3>
                <p className="text-sm text-muted-foreground">
                  Upload a clear photo of your skin concern for detailed analysis.
                </p>
              </motion.div>

              {error && (
                  <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                  >
                    <Alert variant="destructive">
                      <AlertTitle>Upload Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  </motion.div>
              )}

              <div className="flex flex-col items-center justify-center w-full">
                <motion.label
                    className={`
                  w-full flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed
                  rounded-xl cursor-pointer transition-all duration-300
                  ${preview ? 'border-blue-300 bg-blue-50/50' : 'border-border hover:bg-secondary/50 hover:border-blue-200'}
                `}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                >
                  <div className="flex flex-col items-center justify-center p-4">
                    {preview ? (
                        <motion.div
                            className="relative w-full h-60 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                          <img
                              src={preview}
                              alt="Skin preview"
                              className="w-full h-full object-contain rounded-lg"
                          />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                          <div className="p-4 rounded-full bg-blue-100 mb-4">
                            <Camera className="h-8 w-8 text-blue-600" />
                          </div>
                          <p className="text-sm font-medium text-blue-700">Click to upload skin photo</p>
                          <p className="text-xs text-muted-foreground mt-1">PNG, JPG, JPEG (max. 10MB)</p>
                        </motion.div>
                    )}
                  </div>
                  <input
                      type="file"
                      className="hidden"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleFileChange}
                      disabled={loading}
                  />
                </motion.label>
              </div>

              <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
              >
                <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                    disabled={loading || !file}
                >
                  {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing Skin...
                      </>
                  ) : (
                      <>
                        Analyze Skin Condition
                        <svg
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
  );
};

export default UploadCard;
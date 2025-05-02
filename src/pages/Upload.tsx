import React, { useState } from 'react';
import UploadCard from '@/components/UploadCard';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Camera, Shield, Upload as UploadIcon, AlertCircle, CheckCircle, Sparkles, Zap, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface UploadPageProps {
  setResults: (results: any) => void;
}

const Upload: React.FC<UploadPageProps> = ({ setResults }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [showTips, setShowTips] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const conditions = [
    { name: 'Eczema', description: 'Dry, itchy, inflamed patches of skin', severity: 'Medium' },
    { name: 'Melanoma', description: 'Unusual dark spots or moles with irregular borders', severity: 'High' },
    { name: 'Acne', description: 'Inflamed pimples, often on the face, chest or back', severity: 'Low' },
    { name: 'Healthy', description: 'No visible signs of skin conditions', severity: 'None' }
  ];

  const handleUploadComplete = (results: any) => {
    setUploadStatus('success');
    setTimeout(() => {
      setResults(results);
      navigate('/results');
    }, 1500);
  };

  const handleUploadStart = () => {
    setUploadStatus('uploading');
  };

  const toggleTips = () => {
    setShowTips(!showTips);
  };


  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-200/20 dark:bg-blue-900/10"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    opacity: 0.2
                  }}
                  animate={{
                    x: [null, Math.random() * window.innerWidth],
                    y: [null, Math.random() * window.innerHeight],
                    transition: {
                      duration: Math.random() * 30 + 30,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'linear'
                    }
                  }}
              />
          ))}
        </div>

        <div className="container px-4 py-12 mx-auto max-w-5xl relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring' }}
              >
                <Shield className="mr-2 text-blue-600 dark:text-blue-400" size={28} />
              </motion.div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                Skin Condition Detection
              </h1>
            </div>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-balance text-lg">
              Upload a clear image of your skin concern and get instant analysis from our advanced AI technology
            </p>

            <div className="flex flex-wrap justify-center text-[#333] gap-4 mt-6">
              {conditions.map((condition) => (
                  <motion.button
                      key={condition.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCondition(condition.name)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedCondition === condition.name
                              ? 'bg-blue-600 text-white font-medium shadow-lg'
                              : 'bg-white text-[#222] dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-slate-600'
                      }`}
                  >
                    {condition.name}
                  </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {selectedCondition && (
                  <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md max-w-md mx-auto"
                  >
                    <h3 className="font-medium">{selectedCondition}</h3>
                    <p className="text-sm text-muted-foreground">
                      {conditions.find(c => c.name === selectedCondition)?.description}
                    </p>
                    <div className="mt-2 text-xs">
                      <span className="font-medium text-[#333]">Severity: </span>
                      <span className={`${
                          selectedCondition === 'Healthy' ? 'text-green-500' :
                              selectedCondition === 'Acne' ? 'text-yellow-500' :
                                  selectedCondition === 'Eczema' ? 'text-amber-500' : 'text-red-500'
                      }`}>
                    {conditions.find(c => c.name === selectedCondition)?.severity}
                  </span>
                    </div>
                  </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
            >
              <div className={`transition-all duration-300 ${uploadStatus === 'uploading' ? 'scale-95 opacity-70' : 'scale-100'}`}>
                <UploadCard
                    onUploadComplete={handleUploadComplete}
                    onUploadStart={handleUploadStart}
                />
              </div>

              {uploadStatus === 'uploading' && (
                  <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                  >
                    <div className="text-center">
                      <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"
                      />
                      <motion.p
                          className="mt-4 font-medium text-blue-600 dark:text-blue-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                      >
                        Analyzing your image...
                      </motion.p>
                      <motion.div
                          className="mt-2 flex justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                      >
                        <Sparkles className="text-yellow-400 animate-pulse" size={16} />
                        <span className="text-xs text-muted-foreground ml-1">Powered by AI</span>
                      </motion.div>
                    </div>
                  </motion.div>
              )}

              {uploadStatus === 'success' && (
                  <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                  >
                    <div className="text-center">
                      <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring' }}
                      >
                        <CheckCircle className="w-16 h-16 text-blue-500 mx-auto" />
                      </motion.div>
                      <motion.p
                          className="mt-4 font-medium text-blue-600 dark:text-blue-400"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                      >
                        Analysis complete! Redirecting...
                      </motion.p>
                    </div>
                  </motion.div>
              )}
            </motion.div>

            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
              <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={toggleTips}
                  className="w-full flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors shadow-sm"
              >
                <div className="flex items-center">
                  <Camera className="mr-2 text-blue-500" size={20} />
                  <span className="font-medium text-[#333]">Photography Tips for Accurate Results</span>
                </div>
                <motion.div
                    animate={{ rotate: showTips ? 180 : 0 }}
                >
                  <Zap className={`${showTips ? 'text-yellow-500' : 'text-muted-foreground'}`} size={20} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {showTips && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 rounded-lg border border-border bg-card overflow-hidden"
                    >
                      <div className="p-4 text-muted-foreground">
                        <h3 className="font-medium text-foreground mb-3 flex items-center">
                          <Info className="mr-2 text-blue-500" size={18} />
                          For best results:
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Use natural, even lighting to accurately show skin tone and condition",
                            "Center the affected area in the frame and focus clearly",
                            "Include some surrounding healthy skin for comparison",
                            "Avoid using flash as it can distort colors and texture",
                            "Take the photo from about 6-12 inches away",
                            "Remove any makeup or creams from the area"
                          ].map((tip, index) => (
                              <motion.li
                                  key={index}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * index }}
                              >
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                                  <UploadIcon className="text-blue-600 dark:text-blue-400" size={16} />
                                </div>
                                <span>{tip}</span>
                              </motion.li>
                          ))}
                        </ul>

                        <motion.div
                            className="mt-4 grid grid-cols-3 gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                          {['Good Example', 'Bad Example', 'Ideal Angle'].map((title, i) => (
                              <div
                                  key={i}
                                  className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center text-xs text-center p-2 relative overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 dark:to-black/30" />
                                <span className="relative z-10 font-medium mb-1">{title}</span>
                                <div className="relative z-10 w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded" />
                              </div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Upload;
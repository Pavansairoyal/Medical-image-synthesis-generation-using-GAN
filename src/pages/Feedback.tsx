import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/components/ui/use-toast';
import { AlertTriangle, ThumbsUp, Sparkles } from 'lucide-react';
import { API_URL } from '@/config/api';
import FeedbackForm from '@/components/feedback/FeedbackForm';
import FeedbackList from '@/components/feedback/FeedbackList';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackItem {
  id: string;
  username: string;
  rating: number;
  comment: string;
  timestamp: string;
}

const Feedback: React.FC = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    loadFeedback();
  }, [retryCount]);

  const loadFeedback = async () => {
    setError(null);
    try {
      const response = await fetch(`${API_URL}/feedback`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch feedback: ${response.status} ${response.statusText}. ${errorText}`);
      }

      const data = await response.json();
      setFeedbackItems(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error loading feedback:', error);
      setError('Could not load feedback data. Please try again later.');
      toast({
        title: "Error loading feedback",
        description: "Could not load feedback data from the server. Showing local data if available.",
        variant: "destructive",
      });


    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    setLoading(true);
  };

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container px-4 py-12 mx-auto max-w-5xl"
      >
        <div className="mb-8 text-center">
          <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center mb-2"
          >
            <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
            <h1 className="text-4xl font-bold text-transparent text-[#f1f1f1]">
              Community Feedback
            </h1>
            <Sparkles className="h-6 w-6 text-yellow-400 ml-2" />
          </motion.div>
          <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-lg text-[#c2c2c2]"
          >
            Share your experience and see what others are saying about Smart Skin Detection
          </motion.p>
        </div>

        <AnimatePresence>
          {error && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
              >
                <Alert variant="destructive" className="border-red-300 bg-red-50 shadow-md">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="flex justify-between items-center">
                    <span>{error}</span>
                    <button
                        onClick={handleRetry}
                        className="px-3 py-1 ml-4 bg-red-100 hover:bg-red-200 text-red-800 rounded-md text-sm transition-colors duration-200 hover:scale-105 transform"
                    >
                      Retry
                    </button>
                  </AlertDescription>
                </Alert>
              </motion.div>
          )}
        </AnimatePresence>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid gap-8 md:grid-cols-5"
        >
          <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-2"
          >
            <FeedbackForm onFeedbackSubmitted={loadFeedback} />
          </motion.div>

          <div className="md:col-span-3">
            <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-2xl font-bold mb-6 flex items-center"
            >
              <ThumbsUp className="mr-3 h-6 w-6 text-teal-50 animate-bounce" />
              <span className="text-[#f1f1f1]">
              What Our Users Say
            </span>
            </motion.h2>

            <FeedbackList
                feedbackItems={feedbackItems}
                loading={loading}
            />
          </div>
        </motion.div>
      </motion.div>
  );
};

export default Feedback;
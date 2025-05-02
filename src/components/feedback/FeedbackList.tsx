import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, ThumbsUp, Star } from 'lucide-react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackItem {
  id: string;
  username: string;
  rating: number;
  comment: string;
  timestamp: string;
}

interface FeedbackListProps {
  feedbackItems: FeedbackItem[];
  loading: boolean;
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackItems, loading }) => {
  if (loading) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
        >
          <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear"
              }}
              className="w-12 h-12 border-4 border-potato-500 border-t-transparent rounded-full mx-auto"
          ></motion.div>
          <motion.p
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-4 text-muted-foreground text-lg"
          >
            Loading feedback...
          </motion.p>
        </motion.div>
    );
  }

  if (feedbackItems.length === 0) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <Card className="border-potato-100 bg-gradient-to-br from-white to-potato-50 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="text-center py-12">
              <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
              >
                <MessageSquare className="h-12 w-12 text-potato-300 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">No feedback yet</h3>
              <p className="text-muted-foreground text-lg">
                Be the first to share your experience with Smart Skin Detection!
              </p>
              <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 inline-block"
              >
                <div className="px-4 py-2 bg-gradient-to-r from-potato-100 to-green-100 rounded-full">
                <span className="bg-gradient-to-r from-potato-500 to-green-600 bg-clip-text text-transparent font-medium">
                  Your opinion matters!
                </span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
    );
  }

  const newestFeedback = feedbackItems.length > 0
      ? feedbackItems.reduce((newest, current) =>
              new Date(current.timestamp) > new Date(newest.timestamp) ? current : newest
          , feedbackItems[0])
      : null;

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
      >
        <AnimatePresence>
          {feedbackItems.map((item, index) => (
              <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <FeedbackItem
                    id={item.id}
                    username={item.username}
                    rating={item.rating}
                    comment={item.comment}
                    timestamp={item.timestamp}
                    isNewest={newestFeedback && item.id === newestFeedback.id}
                />
              </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
  );
};

export default FeedbackList;
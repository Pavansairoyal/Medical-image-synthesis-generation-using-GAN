import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { MessageSquare, Star, Sparkles } from 'lucide-react';
import { API_URL } from '@/config/api';
import { motion } from 'framer-motion';

interface FeedbackFormProps {
  onFeedbackSubmitted: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onFeedbackSubmitted }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const { isLoggedIn, user } = useAuth();

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to submit feedback",
        variant: "destructive",
      });
      return;
    }

    if (!comment.trim()) {
      toast({
        title: "Empty feedback",
        description: "Please enter your feedback before submitting",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user?.username,
          rating,
          comment,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to submit feedback: ${response.status} ${response.statusText} - ${errorData}`);
      }

      toast({
        title: "🎉 Feedback submitted!",
        description: "Thank you for helping us improve Smart Skin Detection!",
      });

      setComment('');
      setRating(5);

      onFeedbackSubmitted();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Error submitting feedback",
        description: "Could not submit your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
      >
        <Card className="border-potato-100 bg-gradient-to-br from-white to-potato-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="pt-6">
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="mb-6"
            >
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-potato-500" />
                <span className="bg-gradient-to-r from-potato-500 to-green-600 bg-clip-text text-transparent">
                Share Your Thoughts
              </span>
              </h2>
              <p className="text-muted-foreground">We'd love to hear about your experience</p>
            </motion.div>

            {!isLoggedIn ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-6 rounded-lg bg-gradient-to-r from-yellow-50 to-potato-50"
                >
                  <p className="text-lg text-muted-foreground mb-4">Please log in to submit feedback</p>
                  <Button className="bg-gradient-to-r from-potato-500 to-green-500 text-white hover:from-potato-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
                    Login to Continue
                  </Button>
                </motion.div>
            ) : (
                <motion.form
                    onSubmit={handleSubmitFeedback}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                  <div className="mb-6">
                    <Label htmlFor="rating" className="text-lg font-medium text-gray-700">Your Rating</Label>
                    <div className="flex items-center mt-3 space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                          <motion.button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(null)}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              className="focus:outline-none transition-transform duration-150"
                          >
                            <Star
                                size={28}
                                className={
                                  star <= (hoverRating || rating)
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-300"
                                }
                            />
                          </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="comment" className="text-lg font-medium text-gray-700">Your Feedback</Label>
                    <Textarea
                        id="comment"
                        placeholder="Tell us about your experience with Smart Skin Detection..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-3 border-potato-200 focus:border-potato-400 focus:ring-2 focus:ring-potato-200 rounded-lg p-4 h-32 transition-all duration-200"
                    />
                  </div>

                  <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                  >
                    <Button
                        type="submit"
                        className="w-full py-6 bg-gradient-to-r from-potato-500 to-green-500 text-white hover:from-potato-600 hover:to-green-600 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                        disabled={submitting}
                    >
                      {submitting ? (
                          <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                      ) : (
                          <span className="flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Submit Feedback
                    </span>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
            )}
          </CardContent>
        </Card>
      </motion.div>
  );
};

export default FeedbackForm;
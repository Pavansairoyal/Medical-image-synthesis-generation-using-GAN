import React from 'react';
import { CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultsHeaderProps {
    isHealthy: boolean;
}

const ResultsHeader = ({ isHealthy }: ResultsHeaderProps) => {
    const getHeaderIcon = () => {
        return isHealthy
            ? <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
                <CheckCircle className="h-5 w-5 text-green-600" />
            </motion.div>
            : <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
                <AlertCircle className="h-5 w-5 text-red-600" />
            </motion.div>;
    };

    return (
        <motion.div
            className="p-6 pb-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex items-center gap-2">
                {getHeaderIcon()}
                <CardTitle className="text-xl font-medium">
                    {isHealthy ? "Healthy Skin Detected" : "Skin Concern Detected"}
                </CardTitle>
            </div>
            <CardDescription className="text-balance mt-2">
                {isHealthy
                    ? "Your skin appears to be healthy with no visible concerns."
                    : "We've detected some potential skin concerns that you may want to address."}
            </CardDescription>
        </motion.div>
    );
};

export default ResultsHeader;
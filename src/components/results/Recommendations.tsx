
import React from 'react';

interface RecommendationsProps {
  isHealthy: boolean;
}

const Recommendations = ({ isHealthy }: RecommendationsProps) => {
  if (isHealthy) {
    return (
      <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
        <h3 className="font-medium text-green-800">Recommendations</h3>
        <p className="mt-1 text-sm text-green-700">
          Your potato plant appears healthy. To maintain its health:
        </p>
        <ul className="mt-2 space-y-1 text-sm text-green-700">
          <li>• Continue your current watering and fertilization routines</li>
          <li>• Maintain good air circulation around plants</li>
          <li>• Monitor regularly for any changes in appearance</li>
          <li>• Practice crop rotation for future plantings</li>
        </ul>
      </div>
    );
  }

    return (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="font-medium text-red-800">Recommendations</h3>
            <p className="mt-1 text-sm text-red-700">
                Based on the analysis, this lesion shows characteristics that may require attention. We recommend:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-red-700">
                <li>• Consult with a dermatologist for proper diagnosis</li>
                <li>• Schedule an appointment within the next [timeframe based on risk level]</li>
                <li>• Document any changes in size, color, or shape of the lesion</li>
                <li>• Perform regular skin self-examinations to monitor other areas</li>
            </ul>
            <p className="mt-3 text-xs text-red-700 font-medium">
                IMPORTANT: This is not a medical diagnosis. Always consult with healthcare professionals for proper evaluation.
            </p>
        </div>
    );
};

export default Recommendations;

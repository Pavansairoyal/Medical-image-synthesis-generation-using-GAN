import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, ShieldCheck, Info, Activity, PenTool, History } from 'lucide-react';

const About: React.FC = () => {
  return (
      <div className="container px-4 py-12 mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">About SkinGuard</h1>
          <p className="mt-2 text-muted-foreground">
            Learn more about our skin cancer detection system
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-blue-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="rounded-full bg-blue-50 p-4 mb-4">
                  <Info className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="text-muted-foreground">
                  SkinGuard aims to help individuals identify potential skin cancer early,
                  improving detection rates and health outcomes through accessible technology.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="rounded-full bg-blue-50 p-4 mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">How It Works</h2>
                <p className="text-muted-foreground">
                  Our AI-powered system analyzes images of skin lesions to detect potential cancerous conditions with high accuracy.
                  Simply upload a photo, and receive an instant risk assessment with recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-50 p-4 mb-4">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-medium mb-2">Lesion Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify potential melanoma, basal cell carcinoma, squamous cell carcinoma, and other skin conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-50 p-4 mb-4">
                    <Activity className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-medium mb-2">Medical Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Get recommendations on whether to seek professional medical attention based on detection results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-50 p-4 mb-4">
                    <History className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-medium mb-2">History Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep a record of all your previous scans to monitor changes in skin lesions over time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">About the Team</h2>
            <p className="text-muted-foreground mb-6">
              SkinGuard was developed by a team of machine learning engineers, and developers
              passionate about applying technology to improve early skin cancer detection.
            </p>
            <p className="text-muted-foreground">
              Our model is trained on thousands of clinically verified images of skin lesions,
              ensuring high accuracy and reliability across diverse skin types and conditions.
            </p>
          </div>
        </div>
      </div>
  );
};

export default About;
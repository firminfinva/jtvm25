import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Get current visit count from localStorage
    const currentVisits = localStorage.getItem('jtvm-visits');
    const visitCount = currentVisits ? parseInt(currentVisits) + 1 : 1;
    
    // Update visit count
    localStorage.setItem('jtvm-visits', visitCount.toString());
    setVisits(visitCount);
  }, []);

  return (
    <Card className="fixed bottom-4 right-4 z-50 p-3 bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="text-center">
        <p className="text-xs text-muted-foreground mb-1">Visites</p>
        <p className="text-lg font-bold text-primary">{visits.toLocaleString()}</p>
      </div>
    </Card>
  );
};

export default VisitCounter;
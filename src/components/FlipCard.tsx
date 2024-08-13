import React from "react";
import "../App.css"; 

interface FlipCardProps {
  isFlipped: boolean;
  children: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ isFlipped, children }:{isFlipped:boolean;children:any}) => {
  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{children[0]}</div>
        <div className="flip-card-back">{children[1]}</div>
      </div>
    </div>
  );
};

export default FlipCard;

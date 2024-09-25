import React from "react"

interface DSACardProps {
  title: string;
  description: string;
  link: string;
}

const DSACard: React.FC<DSACardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <a href={link} className="text-blue-500">Read More</a>
    </div>
  );
};

export default DSACard;

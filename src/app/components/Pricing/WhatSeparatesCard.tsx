interface WhatSeparatesProps {
  title: string;
  description: string;
}

export default function WhatSeparatesCard({ title, description }: WhatSeparatesProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-lg font-bold text-blue-900 mb-3">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
} 
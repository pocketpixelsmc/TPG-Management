'use client';

import { useEffect, useRef } from 'react';

export default function JotformEmbed({ formId }: { formId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.async = true;
    
    // Append the script to our container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, [formId]);

  return <div ref={containerRef}  className="jotform-container " />;
}
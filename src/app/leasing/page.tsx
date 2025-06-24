'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function LeasingPage() {
  useEffect(() => {
    // This will run after the scripts have loaded
    const initializeAppfolio = () => {
      if (window.Appfolio) {
        window.Appfolio.Listing({
          hostUrl: 'tpgmgmt.appfolio.com',
          //propertyGroup: 'My Group Name',
          themeColor: '#676767',
          width: '100%',
          defaultOrder: 'date_posted'
        });
      }
    };

    // Check if Appfolio is already loaded, if not wait for it
    if (window.Appfolio) {
      initializeAppfolio();
    } else {
      // Set up a listener for when the script loads
      window.addEventListener('appfolioLoaded', initializeAppfolio);
    }

    return () => {
      window.removeEventListener('appfolioLoaded', initializeAppfolio);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-4">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto pb-8 pt-4 px-4 text-center">
        <h1 className="text-4xl font-bold text-[#003474] mb-4">
          Available Properties
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover your next home with TPG Management. Browse our current listings below.
        </p>
      </section>

      {/* Appfolio Listing Container */}
      <section className="max-w-6xl mx-auto w-full px-4">
        <div id="appfolio-listing-container" className="w-full">
          {/* This is where the Appfolio widget will be rendered */}
        </div>
      </section>

      {/* Dynamic Script Loading */}
      <Script
        id="appfolio-listing-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var protocol = ('https:' == document.location.protocol) ? 'https:' : 'http:';
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.charset = 'utf-8';
              script.src = protocol + '//tpgmgmt.appfolio.com/javascripts/listing.js';
              script.onload = function() {
                // Dispatch custom event when script loads
                window.dispatchEvent(new Event('appfolioLoaded'));
              };
              document.head.appendChild(script);
            })();
          `
        }}
      />
    </main>
  );
}
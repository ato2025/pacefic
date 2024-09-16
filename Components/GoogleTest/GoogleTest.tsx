import React, { useState } from 'react';

function GoogleTest() {
  const [allowGeolocation, setAllowGeolocation] = useState(false); // State for geolocation toggle

  return (
    <div className="w-full h-[50vh]">
      {/* Toggle switch for geolocation */}
      <label htmlFor="toggleGeolocation">Toggle Geolocation</label>
      <input
        type="checkbox"
        id="toggleGeolocation"
        checked={allowGeolocation}
        onChange={() => setAllowGeolocation(!allowGeolocation)}
      />

       (
        <iframe
          id="mapFrame"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d680.4159209828538!2d51.44387076026188!3d35.78466508136237!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715259461089!5m2!1sen!2sus"
          width="600"
          height="350"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="geolocation"
          aria-hidden="false"
          tabIndex={0} // Changed to pass number instead of string
        ></iframe>
      )
    </div>
  );
}

export default GoogleTest;

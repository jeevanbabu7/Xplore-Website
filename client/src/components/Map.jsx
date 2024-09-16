import React, { useState, useEffect } from 'react';
// Main Map component
const Map = ({ address = '', city = '', country = '' }) => {

  return (
    <div className="map-container w-10">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8283436371803!2d75.37879257357126!3d11.986376835715118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43e5eaa1932c3%3A0xa686759a5aa8afa5!2sGCE%20KANNUR!5e0!3m2!1sen!2sin!4v1726455931846!5m2!1sen!2sin" width="400" 
            height="300" 
            style={{ border: 0,  }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         
            ></iframe>
    </div>
  );
};

export default Map;

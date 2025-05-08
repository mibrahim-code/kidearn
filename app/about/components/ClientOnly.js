'use client';

import React, { useEffect, useState } from 'react';

const ClientOnly = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts (on client side)
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server side
  }

  return <>{children}</>; // Render children on the client side
};

export default ClientOnly;

import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader" style={{ display: loading ? 'flex' : 'none' }}>
      <div className="bd-loader-inner">
        <div className="bd-loader">
          <span className="bd-loader-item"></span>
          <span className="bd-loader-item"></span>
          <span className="bd-loader-item"></span>
          <span className="bd-loader-item"></span>
          <span className="bd-loader-item"></span>
          <span className="bd-loader-item"></span>
          <span className="bd-loader-item"></span>
          <span className="bd-loader-item"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
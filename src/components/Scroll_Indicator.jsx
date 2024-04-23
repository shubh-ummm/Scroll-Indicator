import React, { useEffect, useState } from "react";
import "./scroll.css"; // Import the CSS file

const ScrollIndicator = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [scrollPercent, setScrollPercent] = useState(0);

  const fetchURL = async (getURL) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchURL(url);
  }, [url]);

  const handleScroll = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / height) * 100;
    setScrollPercent(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      {/* Fixed progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }}></div>
      
      {/* Scroll percentage display */}
      {!loading && <div className="scroll-percentage">{Math.round(scrollPercent)}%</div>}

      {/* Content */}
      {loading ? <h2>Loading Data</h2> : null}
      {data && data.length
        ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
        : null}
    </div>
  );
};

export default ScrollIndicator;

import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleReadMore = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;
  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className="  px-2 mt-5 bg-[#004AAD] rounded-md text-white hover:underline inline"
        >
          {isTruncated ? "...Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;

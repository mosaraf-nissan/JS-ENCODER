import React from "react";

const EmbeddedMap = () => {
  return (
    <div className="max-w-[100%] p-2 mx-auto">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg pb-[75%]">
        <iframe
          title="Embedded Google Map"
          src="https://maps.google.com/maps?q=JS%20Encoder&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          style={{ position: "absolute", top: 0, left: 0 }}
          allowFullScreen="true"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedMap;

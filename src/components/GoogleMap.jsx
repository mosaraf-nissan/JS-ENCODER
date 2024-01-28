import React from "react";

const EmbeddedMap = () => {
  // <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20New%20Haven+(Chetona%20tower%20mirpur%2060%20feet)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>

  // <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Chetona%20Tower%20Mirpur%20Mirpur+(Js%20Encoder)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>

  return (
    <div className="max-w-[100%] p-2 mx-auto">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg pb-[75%]">
        <iframe
          title="Embedded Google Map"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Chetona%20Tower%20Mirpur%20Mirpur+(Js%20Encoder)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          style={{ position: "absolute", top: 0, left: 0 }}
          allowFullScreen={true}
          aria-hidden={false}
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedMap;

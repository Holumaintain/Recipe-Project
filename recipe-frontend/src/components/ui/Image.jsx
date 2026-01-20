import React, { useState } from "react";
import placeholder from "../../assets/images/ui/placeholder.jpg";

const Image = ({
  src,
  alt = "",
  className = "",
  style = {},
  fallback = placeholder,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setImgSrc(fallback)}
      {...props}
    />
  );
};

export default Image;

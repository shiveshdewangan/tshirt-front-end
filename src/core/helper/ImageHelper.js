import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.pexels.com/photos/3476/italian-italy-t-shirts.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageUrl}
        alt="photo"
        style={{ maxHeight: "75%", maxWidth: "75%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;

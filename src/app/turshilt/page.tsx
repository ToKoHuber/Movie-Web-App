"use client";

import { useEffect, useRef, useState } from "react";

const PopupComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null); // Reference for popup div

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupVisible(false); // Close popup if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsPopupVisible(true)}>Show Popup</button>
      {isPopupVisible && (
        <div
          ref={popupRef}
          style={{ padding: 20, background: "lightgray", position: "absolute" }}
        >
          <p>This is the popup. Click outside to close.</p>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;

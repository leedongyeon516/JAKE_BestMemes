import React, { createContext, useState } from "react";

export const ImageContext = createContext();

const ImageContextProvider = props => {
  const [likes, setLikes] = useState(0);
};

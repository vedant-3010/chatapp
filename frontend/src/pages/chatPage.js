/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";

const chatPage = () => {
  const [chats, setchats] = useState([]);
  const fetchChats = async () => {
    const data = await axios.get("/api/chats");

    setchats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return <div>{chats.map()}</div>;
};

export default chatPage;

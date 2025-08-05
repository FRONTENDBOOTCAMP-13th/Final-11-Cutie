'use client';

import { getLikes } from "@data/functions/like";
import { useEffect, useState } from "react";
import useUserStore from "zustand/userStore";

export default function LikesTab() {
  const accessToken = useUserStore(state => state.user?.token?.accessToken);
  const [likes, setLikes] = useState(null);

  async function fetchLikes(){
    const res = await getLikes(accessToken);
    console.log(res);
    if(res.ok) setLikes(res.item);
  }

  useEffect(() => {
    fetchLikes();
  });


  return (
    <>
    </>
  );
}

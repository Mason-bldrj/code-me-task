"use client";

import { urlS } from "@/lib/urls";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [newsDatas, setNewsDatas] = useState();
  const fetchData = async () => {
    console.log("ajilla1");

    try {
      const res = await fetch(`https://dev.to/api/articles?page=6&per_page=4`, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      return setNewsDatas(res);
    } catch (err: any) {
      console.log(err);

      return err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(newsDatas);
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}

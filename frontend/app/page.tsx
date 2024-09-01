"use client";

import { notification } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [newsDatas, setNewsDatas] = useState<any>();
  const [api, contextHolder] = notification.useNotification();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const openNotification = () => {
    api.open({
      message: "Notification Title",
      description:
        "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
      duration: 0,
    });
  };
  const plusData = () => {
    setTimeout(() => {
      setPageNumber(pageNumber + 1);
    }, 60000);
  };
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dev.to/api/articles?page=6&per_page=${pageNumber}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("error");
      }

      const data = await res.json();
      setNewsDatas(data);
      openNotification();
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    plusData();
    fetchData();
  }, [pageNumber]);

  console.log(newsDatas);

  return (
    <div className="flex p-[20px]">
      <div className="flex   gap-[50px]">
        {newsDatas ? (
          newsDatas?.map((newsItem) => (
            <div key={newsItem.id}>
              <Image
                alt=""
                width={1000}
                height={500}
                src={newsItem.social_image}
              ></Image>
              <div>
                <h2>{newsItem.title}</h2>
                <p>{newsItem.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

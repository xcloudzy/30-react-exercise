import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setData1(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        setData2(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <>
      <div>Fetch Multiple API using Axios</div>
      <h1>FirstData</h1>
      <div>
        <h4>ID : {data1.id}</h4>
        <h4>Title</h4>
        <p>{data1.title}</p>
        <h4>Body</h4>
        <p>{data1.body}</p>
      </div>
      <h1>SecondData</h1>
      <div>
        <h4>ID : {data2.id}</h4>
        <h4>Title</h4>
        <p>{data2.title}</p>
        <h4>Body</h4>
        <p>{data2.body}</p>
      </div>
    </>
  );
}

import React from "react";
import New from "../Components/New";
import NewsDate from "../data/date.json";

export default function News() {
  return (
    <div>
      <h1>The latest News:</h1>
      {NewsDate.news.map((post, index) => {
        return <New id={index} />;
      })}
    </div>
  );
}

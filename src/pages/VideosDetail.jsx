import React from "react";
import { useParams } from "react-router-dom";

export default function VideosDetail() {
  const { videoId } = useParams();
  //구조 분해 할당을 사용하여 사용자로 부터 입력받은 url의 값을 videoId 매개변수에 할당
  console.log(videoId);

  return (
    <div>
      Video Detail
      <h2>{videoId}</h2>
    </div>
  );
}

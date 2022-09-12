import React, { FC } from "react";
import Post from "../components/Home/Post";
import Recommend from "../components/Home/Recommend";
import MainLayout from "../layouts/MainLayout";

const HomePage: FC = () => {
  return (
    <MainLayout>
      <div className="flex mx-[242.5px] gap-6">
        <Post></Post>
        <Recommend></Recommend>
      </div>
    </MainLayout>
  );
};

export default HomePage;

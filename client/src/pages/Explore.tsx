import React, { FC } from "react";
import PinterestLayout from "../components/Explore/PinterestLayout";
import MainLayout from "../layouts/MainLayout";

const Explore: FC = () => {
  return (
    <MainLayout>
      <div className="px-40">
        <PinterestLayout></PinterestLayout>
      </div>
    </MainLayout>
  );
};

export default Explore;

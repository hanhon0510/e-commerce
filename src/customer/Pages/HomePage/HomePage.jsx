import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { men_shirt } from "../../../Data/men_shirt";
import { useDispatch, useSelector } from "react-redux";
const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          data={products?.products?.content}
          sectionName={"For you"}
        />
        {/* <HomeSectionCarousel data={men_shirt} sectionName={"Men Shirt"} />
        <HomeSectionCarousel data={men_shirt} sectionName={"Men Shirt"} />
        <HomeSectionCarousel data={men_shirt} sectionName={"Men Shirt"} />
        <HomeSectionCarousel data={men_shirt} sectionName={"Men Shirt"} />
        <HomeSectionCarousel data={men_shirt} sectionName={"Men Shirt"} /> */}
      </div>
    </div>
  );
};

export default HomePage;

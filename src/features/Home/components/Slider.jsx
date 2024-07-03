import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sliderStyles.css";

const data = [
  {
    id: 1,
    image: "https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/68fd506c-4ddc-4cdc-894c-b5eba5177508-MUM_Mid_week_refresh_Banner_carousel_(13).png",
  },

  {
    id: 2,
    image: "https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/8a78d449-5c48-49eb-8b41-149f44e70390-Banner-carousel_55.png",
  },
  {
    id: 4,
    image:
      "https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/1b39333a-88a1-4bd6-954a-9a973938c1f2-BANNER_CAROUSEL_WITHOUT_TITLE_1_copy_2_-_Rajeshree_Salvi.png",
  },

  {
    id: 4,
    image: "https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/3fb3c0c7-1bff-4110-99af-e945e2b0d3ee-BANNER_CAROUSEL_WITHOUT_TITLE_1_(6).png",
  },
  {
    id: 5,
    image: "https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/40d16f20-a37a-4d52-b624-3cabd424be1a-BANNER_CAROUSEL_WITHOUT_TITLE_1_(7).png",
  },
  {
    id: 6,
    image: "https://cdn.zeptonow.com/production///tr:w-969,ar-969-499,pr-true,f-webp,q-80/inventory/banner/471357c8-5c45-4f46-8a1c-9879df249506-BANNER_CAROUSEL_Dry_Fruits_(3).png",
  },
];

const Sliders = () => {
  const [images, setImages] = useState(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 943,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((cur) => {
          const { id } = cur;

          return (
            <>
              <div
                key={id}
                style={{
                  margin: "0",
                  maxHeight: "350px",
                }}
              >
                <img className="slider-img" src={cur.image} alt="sliderimages" />
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Sliders;

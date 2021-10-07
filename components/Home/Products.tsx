import Image from "next/image";
import StarRating from "./StarRating";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsCart } from "react-icons/bs";

interface IProps {
  products: [];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Products: React.FC<IProps> = ({ products }) => {
  return (
    <section className="mt-16 w-full overflow-x-hidden">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-margin-40-px"
      >
        {products.map((product) => {
          const { id, image, price, rating, title } = product;
          return (
            <div
              key={id}
              className="relative bg-primary-100 p-2 mx-4 h-full flex flex-col"
            >
              <div className="w-full relative rounded overflow-x-hidden">
                <Image
                  src={image}
                  width={300}
                  height={350}
                  layout="responsive"
                  alt={title}
                ></Image>
              </div>
              <p className="font-neut my-2">{title}</p>
              <p className="font-secondary my-2">${price}</p>
              <StarRating rating={rating} />
              <button className="absolute top-2 right-2 p-1 bg-primary-400 rounded outline-none cursor-pointer hover:bg-opacity-50 transition-all">
                <BsCart className="text-2xl" />
              </button>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Products;

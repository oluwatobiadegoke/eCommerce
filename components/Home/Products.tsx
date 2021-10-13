import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SingleProduct from "../General/SingleProduct";

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
          const { id, image, price, rating, title, category } = product;
          return (
            <SingleProduct
              key={id}
              id={id}
              image={image}
              price={price}
              rating={rating}
              title={title}
              category={category}
            />
          );
        })}
      </Carousel>
    </section>
  );
};

export default Products;

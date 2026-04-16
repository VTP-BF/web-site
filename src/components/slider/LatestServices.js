import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { getServicesCatalog } from "../../locales/servicesCatalog";
import { serviceSliderOne } from "../../sliderProps";

const LatestServices = () => {
  const router = useRouter();
  const items = getServicesCatalog(router.locale);

  return (
    <Slider {...serviceSliderOne} className="service-slider-one">
      {items.map((item, index) => (
        <div key={index} className="service-item wow fadeInUp">
          <div className="img-holder">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="service-content">
            <div className="text">
              <div className="title-icon d-flex">
                <i className={item.icon} />
                <h3 className="title">
                  <Link
                    legacyBehavior
                    href={`/service-details/${item.slug}`}
                    locale={router.locale}
                  >
                    <a>{item.title}</a>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="hover-text text-white">
              <div className="title-icon d-flex">
                <i className={item.icon} />
                <h3 className="title">
                  <Link
                    legacyBehavior
                    href={`/service-details/${item.slug}`}
                    locale={router.locale}
                  >
                    <a>{item.title}</a>
                  </Link>
                </h3>
              </div>
              <p>{item.description}</p>
              <Link
                legacyBehavior
                href={`/service-details/${item.slug}`}
                locale={router.locale}
              >
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default LatestServices;

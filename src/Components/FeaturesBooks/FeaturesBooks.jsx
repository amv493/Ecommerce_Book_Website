// Import FeaturesBooks CSS.........................
import './FeaturesBooks.css'

// Import Tytle Props...............................
import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'

// Import Swiper React Components & Swiper styles.............
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

// Import featuredBooksData...................................
import { featuredBooksData } from '../../Data/Data'

// Import Link From React Router..............................
import { Link } from 'react-router-dom'

// Import React Icon..........................................
import { BsArrowReturnRight } from 'react-icons/bs'

// Swiper Breakpoints.........................................
const breakpoints = {
    // when window width is <= 1024px
        1024: {
            slidesPerView: 4, 
            spaceBetweenSlides: 30
        },
        // when window width is <= 768px 
        768: {
            slidesPerView: 3, 
            spaceBetweenSlides: 20
        }, 
        // when window width is <= 480px
        480: {
            slidesPerView: 2, 
            spaceBetweenSlides: 10
        }, 
        // when windows width is <=0px 
        0: {
            slidesPerView: 1, 
            spaceBetweenSlides: 0
        }
}

export default function FeaturesBooks() {
  return (
    <section className='Featured'>
        <div className="container features-book-container">
            {/*....................Title Props......................*/}
            <TitleTypeOne TitleTop={'Some quality items'} Title={'Featured Books'} />

            {/*...............FeaturedBooks Slider..................*/}
            <Swiper 
                spaceBetween = {50}
                slidesPerView = {4}
                loop = {true}
                modules = {[Pagination]}
                pagination = {{ el:'.swiper-pagination', clickable: true }}
                breakpoints={breakpoints}
            >
                {
                        featuredBooksData.map(({img, imgLink, name, nameLink, writer, price}, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="featurebook-box">
                                        <Link to={imgLink} className='featurebook'>
                                            <img src={img} alt="" />
                                        </Link>
                                        <div className="featurebook-info">
                                            <Link to={nameLink}>
                                                <h4>{name}</h4>
                                            </Link>
                                            <div><small>{writer}</small></div>
                                            <h5><span>{price}</span></h5>
                                        </div>
                                    </div>       
                                </SwiperSlide>
                            )
                        })
                }
                <div className="feature-border container"></div>
                {/*...............swiper pagination.................*/}
                <div className="swiper-pagination"></div>
                {/* View all products Button */}
                <Link to='*' className='btn feature-btn'>View all products <BsArrowReturnRight /></Link>
            </Swiper>
        </div>
    </section>
  )
}

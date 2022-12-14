import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';

import {ClientInterface} from "../shared/interface";

interface PropsInterface {
    clients: ClientInterface[],
}

const ClientsReviews = ({clients}: PropsInterface) => {

    return (
        <section id="testimonials">
            <div className="container">
                {/* section title */}
                <h2 className="section-title wow fadeInUp">Clients & Reviews</h2>
                {/* testimonials wrapper */}
                <div className="testimonials-wrapper">
                    {/* testimonial item */}
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                    >
                        {
                            clients?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className='item pb-3'>
                                        <div className="testimonial-item text-center mx-auto">
                                            <div className="thumb mb-3 mx-auto">
                                                <img src={`${process.env.ASSETS_URL}${item.img}`}
                                                     alt="customer-name"/>
                                            </div>
                                            <h4 className="mt-3 mb-0">{item.name}</h4>
                                            <span className="subtitle">{item.job}</span>
                                            <div
                                                className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4">
                                                <p className="mb-0">{item.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    {/* testimonial item */}

                </div>
                <div className="row">
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-1-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-2-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-3-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-4-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-5-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-6-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-7-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* client item */}
                        <div className="client-item">
                            <div className="inner">
                                <img
                                    src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-8-1.svg"
                                    alt="client-name"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ClientsReviews;
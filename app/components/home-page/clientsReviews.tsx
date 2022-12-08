import React, {useEffect, useState} from "react";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';

import callApi from "../../helpers/callApi";

interface InterfaceClientsReviews {
    "id": number,
    "name": string,
    "job": string,
    "body": string,
    "img": string,
    "meta": string,
    "created_at": string,
    "updated_at": string
}

function ClientsReviews() {

    const [clientsReviews, setClientsReviews] = useState<InterfaceClientsReviews[]>()

    useEffect(() => {
        callApi().get('clients').then(res => setClientsReviews(res.data.data))
    }, [])

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

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
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{clickable: true}}
                    >
                        {
                            clientsReviews?.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className='item'>
                                        <div className="testimonial-item text-center mx-auto">
                                            <div className="thumb mb-3 mx-auto">
                                                <img src={`https://api-web.a-nateghi.ir/${item.img}`}
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
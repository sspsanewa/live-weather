import React, { useEffect, useState } from 'react';
import bg1 from '../Assets/bg1.webp';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import logo from '../Assets/logo.avif';
import axios from 'axios';
import { Typography } from '@mui/material';

const Section1 = () => {
    const [data, setData] = useState([])
    const handleDragStart = (e) => e.preventDefault();

    let items = []

    data.map((item, index) => {
        items.push(

            <div className="item space-y-2" data-value={index}>
                <img style={{ borderRadius: '5%' }} width={200} height={200} src={logo} alt="Placeholder 1" />
                <h2 className='font-serif font-bold text-white'>{item.address}</h2>
                <p className='font-serif font-bold text-white'>{item.days[0].temp}°C</p>
                <p className='font-serif font-bold text-white'>{item.days[0].conditions}</p>

            </div>
        )

    })


    console.log('aa', items)


    useEffect(() => {
        axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=QYPTY88YF87E3DAXSUUTS6AFG&locations=London%2CUK%7CParis%2CFrance%7CTokyo%2CJapan%7CCape%20Town%2C%20South%20Africa')
            .then(response => {
                setData(response.data.locations);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log("sss", data)

    return (
        <div className='pt-10 h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bg1})` }}>
            <div className='flex justify-center items-center h-full ml-20 sm:ml-28 md:ml-40 lg:ml-40 xl:ml-40"'>
                <AliceCarousel
                    responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1024: { items: 3 },
                    }}
                    disableDotsControls
                    disableButtonsControls
                    autoPlay
                    infinite
                    autoPlayInterval={500}
                    animationDuration={3000}
                    mouseTracking
                    items={items}
                />
            </div>
        </div>
    );
};

export default Section1;

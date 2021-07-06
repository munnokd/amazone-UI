import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__product">
            <div className="home__row">
                <Product id="123456"
                    title="Redmi Note 10 (Aqua Green, 4GB RAM, 64GB Storage) -Amoled Dot Display | 48MP Sony Sensor IMX582 | Snapdragon 678 Processor"
                    price={12999}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41DkB0yM5GS._SX300_SY300_QL70_FMwebp_.jpg"
                />
                <Product id="123456"
                    title="RMi Notebook Horizon Edition 14 Intel Core i7-10510U 10th Gen 14-inch (35.56 cms) Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AF+Webcam"
                    price={59999}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41zWRIfFyDL.jpg"
                />
            </div>
            <div className="home__row">
            <Product id="123456"
                    title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Grey (4th Generation)"
                    price={54900}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41vMjJ5AZwL.jpg"
                />
                <Product id="123456"
                    title="boAt Bassheads 225 in Ear Wired Earphones with Mic(Black)"
                    price={549}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61iSV4o+X-L._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product id="123456"
                    title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                    price={394}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
            <Product id="123456"
                    title="Mi 125.7 cm (50 Inches) 4K Ultra HD Android Smart LED TV 4X|L50M5-5AIN (Black)"
                    price={34998}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61V7cDH8AAS._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            </div>
        </div>
    )
}

export default Home

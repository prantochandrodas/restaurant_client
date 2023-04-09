import React from 'react';
import './Photos.css';
import photo from '../assets/photos/photo1.jpg';
import photo1 from '../assets/photos/photo2.avif';
import photo2 from '../assets/photos/photo3.jpg';
import photo3 from '../assets/photos/photo4.webp';
import photo4 from '../assets/photos/photo5.jpg';
import photo5 from '../assets/photos/photo6.jpg';
import photo6 from '../assets/photos/photo7.jpg';
import photo7 from '../assets/photos/photo8.webp';
import photo8 from '../assets/photos/photo9.jpg';
import photo9 from '../assets/photos/photo10.jpg';
import photo10 from '../assets/photos/photo11.webp';
import photo11 from '../assets/photos/photo12.jpg';
import photo12 from '../assets/photos/220827_GuangXu_BA-UncleLou_014.webp';
import photo13 from '../assets/photos/best-diy-restaurant-meal-kits-ottolenghi-test-kitchen-shawarma-_12102022101618.jpg';
import photo14 from '../assets/photos/pexels-pixabay-262978.jpg';

import { PhotoProvider, PhotoView } from 'react-photo-view';
const Photos = () => {
    return (
        <div className='lg:mb-20 lg:mt-5 my-8'>
            <div data-aos="fade-right" data-aos-duration="1000">
                <h2 className='text-xl lg:text-4xl font-semibold text-center mb-4'>Delicious Food</h2>
                <p className='lg:px-32 text-xs px-4 text-center lg:text-lg mb-4'>Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth-watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming. You wouldn't call delicious that what is tasteless or unpleasant.</p>
            </div>
            <div className='con'>
                <div data-aos="fade-right"
                    data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo}>
                            <img src={photo} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo1}>
                            <img src={photo1} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo2}>
                            <img src={photo2} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo3}>
                            <img src={photo3} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo4}>
                            <img src={photo4} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo5}>
                            <img src={photo5} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo6}>
                            <img src={photo6} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo7}>
                            <img src={photo7} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo8}>
                            <img src={photo8} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo9}>
                            <img src={photo9} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo10}>
                            <img src={photo10} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo11}>
                            <img src={photo11} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo12}>
                            <img src={photo12} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo13}>
                            <img src={photo13} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='box'>
                    <PhotoProvider>
                        <PhotoView src={photo14}>
                            <img src={photo14} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
        </div>
    );
};

export default Photos;
import React from 'react'
import Title from './UI/Title'
import aboutImg1 from '../assets/about-img1.png'
import aboutImg2 from '../assets/about-img2.png'
import aboutImg3 from '../assets/about-img3.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const About = () => {
	return (
		<div id='about'>
			<Title title='О ПРОДУКТЕ' />
			<Carousel
				autoPlay={false}
				infiniteLoop={true}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				swipeable
				emulateTouch
			>
				<div className='relative'>
					<img className='w-screen' src={aboutImg1} />
					<p className='text-secondary font-OpenSans text-4xl leading-100% absolute right-40 bottom-[calc(50%-100px)]'>
						Balenciaga — роскошный
						<br />
						модный дом, основанный
						<br />
						в 1917 году испанским
						<br />
						дизайнером Кристобалем
						<br />
						Баленсиагой
					</p>
				</div>
				<div>
					<img className='w-screen' src={aboutImg2} />
					<p className='text-secondary font-OpenSans bg-primary text-4xl leading-100% absolute py-8 px-14 left-0 bg-opacity-65 bottom-[calc(50%-86px)]'>
						Произошло это в Сан-Себастьяне,
						<br />
						Испания, хоть в настоящее время
						<br />
						Balenciaga базируется в Париже.
					</p>
				</div>
				<div>
					<img className='w-screen' src={aboutImg3} />
					<p className='text-secondary font-OpenSans bg-primary text-4xl leading-100% absolute py-4 px-12 right-0 bg-opacity-65 bottom-[calc(50%-75px)]'>
						Кристиан Диор назвал
						<br /> Баленсиагу «мастером всех
						<br /> нас». Его пышные юбки и<br /> странные, женственные, но
						<br /> «модернистские» силуэты стали
						<br /> визитной карточкой дома.
					</p>
				</div>
				<div>
					<p className='text-secondary font-light font-OpenSans text-5xl leading-100% absolute left-[calc(50%-310px)] top-[calc(50%-96px)]'>
						Balenciaga
						<br />
						закрылся в 1972 году и был
						<br />
						вновь открыт под новым
						<br />
						владельцем в 1986 году.
					</p>
				</div>
			</Carousel>
		</div>
	)
}

export default About

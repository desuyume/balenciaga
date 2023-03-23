import React, { useContext, useEffect } from 'react'
import ReviewCard from './UI/ReviewCard'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Context } from '..'
import CommentService from '../services/CommentService'
import { observer } from 'mobx-react-lite'
import PrevArrowSlider from './UI/PrevArrowSlider'
import NextArrowSlider from './UI/NextArrowSlider'

const Review = () => {
	const { commentStore } = useContext(Context)

	const settings = {
		autoplay: false,
		arrows: true,
		dots: true,
		infinite: true,
		speed: 700,
		swipe: false,
		prevArrow: <PrevArrowSlider />,
		nextArrow: <NextArrowSlider />,
	}

	useEffect(() => {
		commentStore.getRandomCount(5)
		commentStore.getAll()
	}, [])

	if (commentStore._isLoading) {
		return <div>Загрузка...</div>
	}

	return (
		<div
			id='reviews'
			className='h-screen bg-reviewBg bg-no-repeat bg-center bg-cover flex justify-center items-center'
		>
			<Slider {...settings} className='w-[66.6vw] h-[29.1vw] select-auto relative'>
				{!commentStore._isLoading &&
					commentStore.randomComments.map(comment => (
						<ReviewCard
							key={comment._id}
							date={comment.date}
							likes={comment.likes}
							text={comment.text}
							user={comment.user}
						/>
					))}
			</Slider>
		</div>
	)
}

export default observer(Review)

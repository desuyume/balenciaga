import React, { useContext, useEffect, useState } from 'react'
import ReviewCard from './UI/ReviewCard'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import PrevArrowSlider from './UI/PrevArrowSlider'
import NextArrowSlider from './UI/NextArrowSlider'
import ReviewsModal from './ReviewsModal'
import videoBg from '../assets/videoBg.webm'

const Review = () => {
	const { commentStore } = useContext(Context)
	const [modalVisible, setModalVisible] = useState(false)

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

	if (commentStore._isLoading) {
		return <div>Загрузка...</div>
	}

	return (
		<div
			id='reviews'
			className='h-screen bg-reviewBg bg-no-repeat bg-center bg-cover flex justify-center items-center relative'
		>
			<video className='absolute object-cover w-full h-full' src={videoBg} autoPlay loop muted />
			<Slider {...settings} className='w-[66.6vw] h-[29.1vw] select-auto relative'>
				{!commentStore._isLoading &&
					commentStore.randomComments.map(comment => (
						<ReviewCard
							key={comment._id}
							commentId={comment._id}
							date={comment.date}
							likes={comment.likes}
							text={comment.text}
							rating={comment.rating}
							userName={comment.userName}
							userImg={comment.userImg}
							setVisible={setModalVisible}
						/>
					))}
			</Slider>
			<ReviewsModal visible={modalVisible} setVisible={setModalVisible} />
		</div>
	)
}

export default observer(Review)

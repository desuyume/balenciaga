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
import Loader from './UI/Loader/Loader'
import SendReviewModal from './SendReviewModal'

const Review = () => {
	const { commentStore } = useContext(Context)
	const [modalVisible, setModalVisible] = useState(false)
	const [commentChanged, setCommentChanged] = useState('')
	const [newLikesCount, setNewLikesCount] = useState(0)
	const [sendReviewModalVisible, setSendReviewModalVisible] = useState(false)

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
		return (
			<div>
				<Loader />
			</div>
		)
	}

	return (
		<div
			id='reviews'
			className='h-screen bg-reviewBg bg-no-repeat bg-center bg-cover flex justify-center items-center relative'
		>
			<video
				className='absolute object-cover w-full h-full'
				src={videoBg}
				autoPlay
				loop
				muted
			/>

			{!commentStore._isLoading && !commentStore.getRandomComments().length && (
				<button
					onClick={() => setSendReviewModalVisible(true)}
					className='w-[15rem] h-[5rem] bg-primary hover:bg-opacity-90 transition-opacity text-secondary text-xl text-center px-2 z-10'
				>
					Оставить отзыв
				</button>
			)}

			{!commentStore._isLoading &&
				!!commentStore.getRandomComments().length && (
					<Slider
						{...settings}
						className='w-[66.6vw] h-[29.1vw] select-auto relative'
					>
						{commentStore.getRandomComments().map(comment => (
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
								commentChanged={commentChanged}
								setCommentChanged={setCommentChanged}
								newLikesCount={newLikesCount}
								setNewLikesCount={setNewLikesCount}
							/>
						))}
					</Slider>
				)}

			<ReviewsModal
				visible={modalVisible}
				setVisible={setModalVisible}
				commentChanged={commentChanged}
				setCommentChanged={setCommentChanged}
				newLikesCount={newLikesCount}
				setNewLikesCount={setNewLikesCount}
			/>
			<SendReviewModal
				visible={sendReviewModalVisible}
				setVisible={setSendReviewModalVisible}
			/>
		</div>
	)
}

export default observer(Review)

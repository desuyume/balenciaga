import React, { useContext, useEffect, useState } from 'react'
import blankAvatar from '../../assets/blank-avatar.webp'
import likeImg from '../../assets/like-bttn.svg'
import likeFilledImg from '../../assets/like-bttn-filled.svg'
import { normalizeDate } from '../../utils/Date'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import RatingStars from './RatingStars'

const ReviewCard = ({commentId, date, likes, text, rating, userName, userImg, setVisible}) => {
	const { userStore, commentStore } = useContext(Context);
	const [isLiked, setIsLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(likes);

	const checkLike = () => {
		if (userStore.isAuth) {
			if (userStore.user.likedComments.includes(commentId)) {
				setIsLiked(true);
			}
		}
	}

	const likeComment = () => {
		commentStore.likeComment(commentId, isLiked)
		if (userStore.isAuth) {
			if (isLiked) {
				setIsLiked(false)
				setLikesCount(likesCount - 1)
				userStore.user.likedComments = userStore.user.likedComments.filter(comment => comment != commentId)
			} else {
				setIsLiked(true)
				setLikesCount(likesCount + 1)
				userStore.user.likedComments.push(commentId)
			}
		}
	}

	useEffect(() => {
		checkLike();
	}, [])

	return (
		<div className='bg-primary w-[66.6vw] h-[29.1vw] flex'>
			<img className='object-cover max-w-[20.8vw]' src={userImg ? process.env.REACT_APP_API_URL + userImg : blankAvatar} />
			<div className='w-full flex justify-center'>
				<div className='w-[33.3vw] flex flex-col justify-evenly'>
					<div className='flex justify-between items-center'>
						<h2 className='font-bold text-secondary text-xl'>{userName}</h2>
						<p className='text-secondary'>{normalizeDate(date)}</p>
					</div>
					<p className='text-secondary leading-100%'>
						{text}
					</p>
					<RatingStars commentId={commentId} rating={rating} isPrimaryColor={false} />
					<div className='flex justify-between'>
						<div className='flex items-center'>
							<img onClick={likeComment} className='mr-1 cursor-pointer' src={isLiked ? likeFilledImg : likeImg} />
							<p className='text-tertiary font-bold text-sm'>{likesCount}</p>
						</div>
						<button onClick={() => setVisible(true)} className='text-tertiary font-bold text-sm'>Читать полностью</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default observer(ReviewCard)

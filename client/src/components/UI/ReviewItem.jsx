import React, { useContext, useEffect, useState } from 'react';
import blankAvatar from '../../assets/blank-avatar.webp'
import likeImg from '../../assets/like-bttn-item.svg'
import likeFilledImg from '../../assets/like-bttn-item-filled.svg'
import { normalizeDate } from '../../utils/Date'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import RatingStars from './RatingStars'

const ReviewItem = ({commentId, date, likes, text, rating, userName, userImg}) => {
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
		<div className='flex px-[40px] mb-10 pb-10 last:mb-0 border-b border-primary'>
			<img src={userImg ? process.env.REACT_APP_API_URL + userImg : blankAvatar} className='w-[10vw] h-[140px] object-cover mr-5' />
			<div className='flex flex-col justify-between w-full'>
				<div className='flex justify-between pt-[5px]'>
					<p className='text-primary text-xl font-bold leading-100%'>{userName}</p>
					<p className='leading-100% text-primary'>{normalizeDate(date)}</p>
				</div>
				<p className='text-primary leading-100% mt-[15px]'>{text}</p>
				<div className='flex justify-between mt-2.5'>
					<div className='flex items-center'>
						<img onClick={likeComment} className='cursor-pointer' src={isLiked ? likeFilledImg : likeImg} />
						<p className='text-primary text-sm leading-100% font-bold ml-[3px]'>{likesCount}</p>
					</div>
					<RatingStars commentId={commentId} rating={rating} isPrimaryColor={true} />
				</div>
			</div>			
		</div>
	);
};

export default observer(ReviewItem);
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react';
import { Context } from '..'
import Modal from './UI/Modal'
import ReviewItem from './UI/ReviewItem'

const ReviewsModal = ({ visible, setVisible }) => {
	const { commentStore } = useContext(Context)

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='font-OpenSans font-semibold text-primary text-[40px] mb-[30px] leading-100%'>Отзывы</h2>
			<div className='max-h-[70vh] overflow-auto mb-5'>
				{!commentStore._isLoading && 
					commentStore.allComments.map(comment =>
						<ReviewItem
							key={comment._id}
							commentId={comment._id}
							date={comment.date}
							likes={comment.likes}
							text={comment.text}
							rating={comment.rating}
							userName={comment.userName}
							userImg={comment.userImg}
						/>	
					)
				}
			</div>
			<button className='text-primary text-sm leading-100% font-bold absolute bottom-[10px] right-[20px]'>Оставить свой отзыв</button>
		</Modal>
	);
};

export default observer(ReviewsModal);
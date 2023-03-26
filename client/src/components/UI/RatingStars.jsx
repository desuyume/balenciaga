import React from 'react'
import star from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'
import starPrimary from '../../assets/star-modal.svg'
import starPrimaryFilled from '../../assets/star-filled-modal.svg'

const RatingStars = ({ commentId, rating, isPrimaryColor }) => {
	const stars = []

	for (let i = 0; i < rating; i++) {
		stars.push(<img key={commentId + i} className='mr-2 last:mr-0' src={isPrimaryColor ? starPrimaryFilled : starFilled} />)
	}

	for (let i = stars.length; i <= 4; i++) {
		stars.push(<img key={commentId + i} className='mr-2 last:mr-0' src={isPrimaryColor ? starPrimary : star} />)
	}

	return <div className='flex text-secondary'>{stars}</div>
}

export default RatingStars

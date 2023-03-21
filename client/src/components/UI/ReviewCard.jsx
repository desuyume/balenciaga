import React from 'react'
import reviewImg from '../../assets/review-img.jpg'
import star from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'
import likeImg from '../../assets/like-bttn.svg'

const ReviewCard = () => {
	return (
		<div className='bg-primary w-[66.6vw] h-[29.1vw] flex'>
			<img className='h-full' src={reviewImg} />
			<div className='w-full flex justify-center'>
				<div className='w-[33.3vw] flex flex-col justify-evenly'>
					<div className='flex justify-between items-center'>
						<h2 className='font-bold text-secondary text-xl'>Ник</h2>
						<p className='text-secondary'>10.11.2022</p>
					</div>
					<p className='text-secondary leading-100%'>
						Халат пришел аккуратно сложенный в хорошей упаковке. Ткань очень
						мягкая, приятная к телу. Легкий, идеально подходит для лета! Сшито
						аккуратно, нигде ничего не торчит. Цвет немного бледнее, чем на
						фото, но это не делает его хуже. Покупкой очень доволен! И доставили
						довольно быстро, для моего отдаленного региона.
					</p>
					<div className='flex'>
						<img className='mr-1' src={starFilled} />
						<img className='mr-1' src={starFilled} />
						<img className='mr-1' src={starFilled} />
						<img className='mr-1' src={starFilled} />
						<img src={star} />
					</div>
					<div className='flex justify-between'>
						<div className='flex items-center'>
							<img className='mr-1 cursor-pointer' src={likeImg} />
							<p className='text-tertiary font-bold text-sm'>7</p>
						</div>
						<button className='text-tertiary font-bold text-sm'>Читать полностью</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewCard

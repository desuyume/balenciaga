import React from 'react'
import classes from './Loader.module.css'

const Loader = () => {
	return (
		<div
			aria-label='Orange and tan hamster running in a metal wheel'
			role='img'
			className={classes.wheelAndHamster}
		>
			<div className={classes.wheel}></div>
			<div className={classes.hamster}>
				<div className={classes.hamsterBody}>
					<div className={classes.hamsterHead}>
						<div className={classes.hamsterEar}></div>
						<div className={classes.hamsterEye}></div>
						<div className={classes.hamsterNose}></div>
					</div>
					<div
						className={`${classes.hamsterLimb} ${classes.hamsterLimbFr}`}
					></div>
					<div
						className={`${classes.hamsterLimb} ${classes.hamsterLimbFl}`}
					></div>
					<div
						className={`${classes.hamsterLimb} ${classes.hamsterLimbBr}`}
					></div>
					<div
						className={`${classes.hamsterLimb} ${classes.hamsterLimbBl}`}
					></div>
					<div className={classes.hamsterTail}></div>
				</div>
			</div>
			<div className={classes.spoke}></div>
		</div>
	)
}

export default Loader

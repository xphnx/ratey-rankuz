import { FC, HTMLAttributes, useState } from 'react';
import cn from 'classnames';
import { Tag } from '../Tag/Tag';
import Star from './icons/star.svg';
import styles from './Rating.module.css';

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
	rating: number;
	maxRate?: number;
	setRating?: (rating: number) => void;
	isEditable?: boolean;
}

export const Rating: FC<RatingProps> = ({
	rating,
	maxRate = 5,
	isEditable = false,
	setRating,
	className,
	...props
}) => {
	const [currentRate, setCurrentRate] = useState<number>(rating);

	const changeDisplayHandler = (rating: number): void => {
		if (!isEditable) {
			return;
		}

		setCurrentRate(rating);
	};

	const onKeyDownHandler = (rating: number, e: React.KeyboardEvent<SVGAElement>): void => {
		if (!isEditable || e.code !== 'Space' || !setRating) {
			return;
		}

		setCurrentRate(rating);
		setRating(rating);
	};

	const onClickHandler = (rating: number): void => {
		if (!isEditable || !setRating) {
			return;
		}

		setRating(rating);
	};

	return (
		<div
			{...props}
			className={cn(styles.rating, className, {
				[styles.disabled]: !isEditable,
			})}
			onMouseLeave={() => changeDisplayHandler(rating)}
		>
			{Array(maxRate)
				.fill(<></>)
				.map((_, index) => (
					<Star
						key={index}
						className={cn({
							[styles.filled]: index < currentRate,
						})}
						onMouseEnter={() => changeDisplayHandler(index + 1)}
						onClick={() => onClickHandler(index + 1)}
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: React.KeyboardEvent<SVGAElement>) => onKeyDownHandler(index + 1, e)}
					/>
				))}
		</div>
	);
};

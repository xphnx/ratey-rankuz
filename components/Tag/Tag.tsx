import { HTMLAttributes, ReactNode, SVGAttributes } from 'react';
import cn from 'classnames';
import Comment from './icons/comment.svg';
import Like from './icons/heart.svg';
import Repost from './icons/plane.svg';
import styles from './Tag.module.css';

const TYPE_TO_ICON_MAP: Record<TagType, JSX.Element> = {
	like: <Like />,
	repost: <Repost />,
	comment: <Comment />,
};

type TagType = 'like' | 'comment' | 'repost';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	size: 'l' | 's';
	type: TagType;
}

export const Tag = ({ size, type, children, className, ...props }: TagProps): JSX.Element => {
	return (
		<div className={cn(styles.tag, className, styles[size])} {...props}>
			{TYPE_TO_ICON_MAP[type]}
			{children}
		</div>
	);
};

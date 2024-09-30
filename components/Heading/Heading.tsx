import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './Heading.module.css';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level = 1, children, ...props }) =>
	React.createElement(`h${level}`, { className: styles[`h${level}`], ...props }, children);

'use client';
import React, { useRef } from 'react';
import { useScreenSize } from '@hooks';
import { Text, TextVariants } from '@components';
import { DesktopMsg } from './DesktopMsg';
import { MobileMsg } from './MobileMsg';

export const WelcomeMsg = () => {
	const { isMobile } = useScreenSize();

	return <>{isMobile ? <MobileMsg /> : <DesktopMsg />}</>;
};

'use client';
import React from 'react';
import { useScreenSize } from '@hooks';
import { DesktopMsg } from './DesktopMsg';
import { MobileMsg } from './MobileMsg';

export const WelcomeMsg = () => {
	const { isMobile } = useScreenSize();

	return <>{isMobile ? <MobileMsg /> : <DesktopMsg />}</>;
};

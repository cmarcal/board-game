import React from 'react';
import { Container } from './styles';
import { useDataProfile } from '../../hooks/profile/';
export function ProfileTemplate() {
	useDataProfile();

	return <Container>Bem vindo ao seu Perfil</Container>;
}

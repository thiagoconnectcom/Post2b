import React from 'react';

import {ContainerDanger, ContainerWarning } from './styles';

const Badge = ({tag}) => {
  if(tag === "urgente") return <ContainerDanger>{tag}</ContainerDanger>
  else return <ContainerWarning>{tag}</ContainerWarning>
}

export default Badge;
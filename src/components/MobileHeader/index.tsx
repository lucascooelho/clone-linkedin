import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D35AQH6Lnku_FoaTQ/profile-framedphoto-shrink_400_400/0/1597350426883?e=1610298000&v=beta&t=MStHb6OZjn2o46Nu0uF2A_Bzj59TO_AsnvIRsGEmolA" />
          <SearchInput  placeholder="Search" />
          <MessageIcon />
      </Container>
  );
}

export default MobileHeader;
import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://avatars1.githubusercontent.com/u/14133479?s=460&u=0c97a641297da52ef753cfbff3b7ff474ab66fab&v=4" />
          <SearchInput  placeholder="Search" />
          <MessageIcon />
      </Container>
  );
}

export default MobileHeader;
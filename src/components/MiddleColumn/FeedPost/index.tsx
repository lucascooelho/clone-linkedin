import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://avatars1.githubusercontent.com/u/14133479?s=460&u=0c97a641297da52ef753cfbff3b7ff474ab66fab&v=4" alt="Rocketseat" />
          <Column>
            <h3>Lucascooelho</h3>
            <h4>Software Developer</h4>
            <time>1w</time>
          </Column>
        </Row>

        <PostImage
          src="https://raw.githubusercontent.com/lucascooelho/clone-twitter/master/src/assets/images/clone-twitter.JPG"
          alt="Lucascooelho Github"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">37</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Like</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comment</span>
          </button>
          <button>
            <ShareIcon />
            <span>Share</span>
          </button>
          <button>
            <SendIcon />
            <span>Send</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;

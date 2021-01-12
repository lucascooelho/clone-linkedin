import styled from 'styled-components';

export default styled.div`
    background-image: linear-gradient(
        -90deg,
        #efedf1 0%,
        #f8f8f8 50%,
        #efedf1 100%
    );
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }

    &.white {
        background-image: linear-gradient(-90degm #fff 0%, #efedf1 50%, #fff 100%);
    }
`;
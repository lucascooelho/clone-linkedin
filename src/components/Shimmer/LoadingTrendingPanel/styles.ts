import styled from 'styled-components';

export const Container = styled.div`
   .row + .row {
       margin-top: 23px;
   }

   .row {
       display: flex;
       align-items: center;

       .square-skeleton {
           width: 48px;
           height: 48px;
           border-radius: 2px;
       }

       .column {
           display: flex;
           flex-direction: column;
           width: 100%;
           padding-left: 10px;

           .row-skeleton {
               // video at 1:02:15
           }
       }
   }
`;

import RankingBoard from '../../pages/Ranking/RankingBoard';
import styled, { keyframes } from 'styled-components';
import back from '/assets/back.svg';
import trophy from '/assets/trophy.svg';
import { BackButton } from './ContentStyle';

interface RankingModalProps {
  isOpen: boolean;
  currentUser: number;
  onRequestClose: () => void;
}

const RankingModal: React.FC<RankingModalProps> = ({
  isOpen,
  currentUser,
  onRequestClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <AnimatedWrapper>
        <WhiteContainer>
          <RankingHeader>
            <BackButton src={back} onClick={onRequestClose} />
            <img className="trophy" src={trophy} alt="Trophy" />
          </RankingHeader>
          <RankingBoard
            isOpen={isOpen}
            currentUser={currentUser}
            onRequestClose={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </WhiteContainer>
      </AnimatedWrapper>
    </>
  );
};

export default RankingModal;

const slideIn = keyframes`
  from {
    top: -900px;
  }

  to {
    top: 0;
  }
`;

const RankingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;

  .trophy {
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2f4768;
  z-index: 150;
`;

const AnimatedWrapper = styled.div`
  position: relative;
  z-index: 200;
  animation: ${slideIn} 0.3s ease-in-out;
`;

const WhiteContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  transform: translateY(-830px);
  border-radius: 35px;
  background-color: #1e2734;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 641px) {
    transform: translateY(-200px);
  }
`;

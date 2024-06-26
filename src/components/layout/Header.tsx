import styled from 'styled-components';
import trophy from '/assets/trophy.svg';
import countRocket from '/assets/countRocket.svg';
import { useAuthStore } from '../../store/authStore';
import { useWorryCountStore } from '../../store/worryCountStore';
import { useEffect } from 'react';
import { useWorryCount } from '../../hooks/queries/useWorryCount ';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const { isLoggedIn } = useAuthStore();
  const { worryCount, setWorryCountState } = useWorryCountStore();

  const worryCountQuery = useWorryCount();

  useEffect(() => {
    setWorryCountState(worryCountQuery.data);
  }, [worryCountQuery.data, setWorryCountState]);

  if (worryCountQuery.isPending) return <div>Loading...</div>;

  if (worryCountQuery.isError) return <div>Error</div>;

  return (
    <HeaderArea>
      <HeaderInner>
        <button onClick={openModal}>
          <img src={trophy} alt="Trophy" />
        </button>
        <WorryCount>
          {isLoggedIn ? (
            <>
              <img src={countRocket} alt="Count Rocket" />
              <span> x {worryCount}</span>
            </>
          ) : (
            <div></div>
          )}
        </WorryCount>
      </HeaderInner>
    </HeaderArea>
  );
};

export default Header;

const WorryCount = styled.div`
  display: flex;
  align-items: center;
  span {
    padding-left: 10px;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 20px;
`;

const HeaderArea = styled.div`
  height: 54px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

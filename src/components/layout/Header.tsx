import styled from 'styled-components';
import Trophy from '/assets/Trophy.svg';
import { useAuthStore } from '../../store/authStore';
function Header() {
  const { isLoggedIn } = useAuthStore();
  return (
    <HeaderArea>
      <HeaderInner>
        <button>
          <img src={Trophy} />
        </button>
        <WorryCount>
          {isLoggedIn ? (
            <>
              <img src={Trophy} />
              <span>xCount</span>
            </>
          ) : (
            <div></div>
          )}
        </WorryCount>
      </HeaderInner>
    </HeaderArea>
  );
}

export default Header;
const WorryCount = styled.div`
  display: flex;
  align-items: center;
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
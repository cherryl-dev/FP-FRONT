import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

const Layout = () => {
  return (
    <MainLayout>
      <MainContent>
        <div>설명~~~</div>
        <div>설명~~~</div>
        <div>설명~~~</div>
        <div>설명~~~</div>
        <div>설명~~~</div>
        <div>설명~~~</div>
      </MainContent>
      <MainWrap>
        <Outlet />
        <Footer />
      </MainWrap>
    </MainLayout>
  );
};

export default Layout;

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContent = styled.div`
  width: 320px;
  height: 568px;
  @media (max-width: 640px) {
    display: none;
  }
`;
const MainWrap = styled.div`
  position: relative;
  overflow: auto;
  border-radius: 10px;
  padding: 20px;
  width: 320px;
  height: 568px;
  background-color: #292929;
  @media (max-width: 640px) {
    width: 100vh;
    height: 100vh;
  }
`;

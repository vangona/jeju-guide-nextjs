import { Map } from 'react-kakao-maps-sdk';
import MyHead from '../components/common/MyHead';

const Home = () => {
  return (
    <>
      <MyHead title={'홈'} />
      <main>Hello world</main>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
      ></Map>
    </>
  );
};

export default Home;

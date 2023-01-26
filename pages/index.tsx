import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import getPlacesApi from '../apis/getPlacesApi';
import MyHead from '../components/common/MyHead';
import type { PlaceInfo } from '../types/placeTypes';

const Home = () => {
  const [places, setPlaces] = useState<PlaceInfo[]>([]);

  useEffect(() => {
    getPlacesApi().then((result) => {
      setPlaces(result);
    });
  }, []);

  return (
    <>
      <MyHead title={'홈'} />
      <main>Hello world</main>
      <Map
        center={{ lat: 33.3717, lng: 126.5602 }}
        style={{ width: '100%', height: '360px' }}
        level={10}
      ></Map>
      <ul>
        {places.map((placeData, index) => (
          <li key={index}>{placeData.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;

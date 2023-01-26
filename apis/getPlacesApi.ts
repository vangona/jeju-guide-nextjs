import { collection, getDocs, query } from 'firebase/firestore';
import { dbService } from '../config/firebase';
import type { PlaceInfo } from './../types/placeTypes';

const getPlacesApi = async (): Promise<PlaceInfo[]> => {
  const result: PlaceInfo[] = [];
  const placesQuery = query(collection(dbService, 'places'));
  const placesQuerySnapshot = await getDocs(placesQuery);
  placesQuerySnapshot.forEach((placeData) => {
    result.push(placeData.data() as PlaceInfo);
  }); // 제네릭으로 Type을 넣어주면 query를 만들면서 끊기기 때문에 타입캐스팅을 사용함.
  // TODO: withConverter로 타입캐스팅 지워보기
  return result;
};

export default getPlacesApi;

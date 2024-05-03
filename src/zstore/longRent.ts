//import Reactotron from 'reactotron-react-native';
//import {createStore} from 'zustand';

import {create} from 'zustand';
//import {devtools} from 'zustand/middleware';

//import {devtools} from 'zustand/middleware';
//import * as zukeeper from 'zukeeper';

interface Prop {
  RENT_TYPE: [];
  CITY: [];
  SELLER: [];
  PRICE: [];
  CURRENCY: [];
  SELLER_PHONE: [];
  ROOMS: [];
  FLOOR: [];
  TOTAL_FLOOR: [];
  REPAIR: [];
  TERMS_ANIMALS: [];
  GALLERY: [];
  ADS_URL: [];
  MAP_LAT: [];
  MAP_LNG: [];
  USER_ID: [];
  USER_NAME: [];
}
interface Rooms {
  id: number;
  section_id: number;
  title: string;
  anons: string;
  public: number;
  create_user: number;
  create_date: string;
  update_user: any;
  update_date: string;
  prop: Prop[];
  /*prop: {
    RENT_TYPE: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    CITY: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    SELLER: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    PRICE: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    CURRENCY: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    SELLER_PHONE: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    ROOMS: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    FLOOR: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    TOTAL_FLOOR: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    REPAIR: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    TERMS_ANIMALS: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
    GALLERY: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
        path: string;
        file_name: string;
      };
    };
    CITY_AREA: {
      block_item_id: number;
      id: number;
      title: string;
      code: string;
      links: {
        id: number;
        value: string;
      };
    };
  };*/
}

export interface LongRentState {
  rooms: Rooms[];
  page: number;
  selectedProductId: number;
  selectedProductTitle: string;
  selectedProductPictures: string[];
  selectedProductPicturesMass: string[];
  parameters: object;
  updatePage: (page: number) => void;
  fetchRooms: () => void;
  setParameters: (params: object) => void;
}
debugger;

//https://hahahome.live/api/v1/rooms?page=1

export const useLongRentStore = create<LongRentState>((set, get) => ({
  rooms: [],
  page: 1,
  selectedProductId: null,
  selectedProductTitle: null,
  selectedProductPictures: [],
  selectedProductPicturesMass: [],
  fetchRooms: async (newPage: number) => {
    const response = await fetch(
      `https://hahahome.live/api/v1/rooms?page=${newPage}`,
    );
    const data = await response.json();
    //console.log(data.rooms);
    set({rooms: data.rooms});
  },
  updatePage: () => {
    const {page} = get();
    set({page: useLongRentStore.getState().page});
  },
  setParameters: (id: number, title: string, pictures: string[], picturesMass: string[]) => set({ selectedProductId: id, selectedProductTitle: title, selectedProductPictures: pictures, selectedProductPicturesMass: picturesMass/*.map((picture) => 'https://hahahome.live/' + picture)*/}),
}));

window.store = useLongRentStore;
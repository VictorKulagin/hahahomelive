//import Reactotron from 'reactotron-react-native';
//import {createStore} from 'zustand';

import {create} from 'zustand';
//import {devtools} from 'zustand/middleware';

//import {devtools} from 'zustand/middleware';
//import * as zukeeper from 'zukeeper';

interface cityArea {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}
interface Currency {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}
interface RentType {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface City {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}
interface Rooms {
  id: number;
  section_id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface Floor {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface Series {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface Repair {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface TermsAnimals {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface TermsChildren {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}
interface GalleryLinks {
  id: number;
  value: string;
  path: string;
  file_name: string;
}

interface FOT {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface COMM {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface FURN {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface HHAP {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface AP_IMP {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface Settlement {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface Seller {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface MAP_LAT {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface MAP_LNG {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface SellerPhone {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface BuildingYear {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  links: {
    id: number;
    value: string;
  };
}

interface Gallery {
  block_item_id: number;
  id: number;
  title: string;
  code: string;
  type: string;
  multiple: boolean;
  value: string;
  value_id: string;
  links: GalleryLinks[];
}
interface Prop {
  RENT_TYPE: RentType[];
  CITY: City[];
  SELLER: [];
  PRICE: [];
  CURRENCY: Currency[];
  SELLER_PHONE: [];
  ROOMS: Rooms[];
  FLOOR: Floor[];
  TOTAL_FLOOR: [];
  TERMS_ANIMALS: TermsAnimals[];
  TERMS_CHILDREN: TermsChildren[];
  FOT: FOT[];
  COMM: COMM[];
  FURN: FURN[];
  HHAP: HHAP[];
  AP_IMP: AP_IMP[];
  SETTLEMENT: Settlement[];
  SELLER: Seller[];
  MAP_LAT: MAP_LAT[];
  MAP_LNG: MAP_LNG[];
  SELLER_PHONE: SellerPhone[];
  BUILDING_YEAR: BuildingYear[];
  GALLERY: Gallery[];
  ADS_URL: [];
  MAP_LAT: [];
  MAP_LNG: [];
  USER_ID: [];
  USER_NAME: [];
  CITY_AREA: cityArea[];
  SERIES: Series[];
  REPAIR: Repair[];
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
}

interface Elements {
  [key: string]: string;
}
interface City12 {
  id: number;
  title: string;
  code: string;
  type: string;
  elements?: Elements[];
}
interface dataFilter {
  12: City12[];
}

export interface LongRentState {
  rooms: Rooms[];
  page: number;
  room: number;
  roomsFilters: dataFilter[];
  selectedProductId: number;
  selectedProductTitle: string;
  selectedProductPictures: string[];
  selectedProductPicturesMass: string[];
  selectedProductPrice: string;
  selectedProductCurrency: string;
  selectedProductCity: string;
  selectedProductCityArea: string;
  selectedProductRooms: string;
  selectedProductFloor: string;
  selectedProductAnons: string;
  selectedProductSeries: string;
  selectedProductSeriesName: string;
  selectedProductRepair: string;
  selectedProductRepairName: string;
  selectedProductRentType: string;
  selectedProductRentTypeName: string;
  selectedProductTermsAnimals: string;
  selectedProductTermsAnimalsName: string;
  selectedProductTermsChildren: string;
  selectedProductTermsChildrenName: string;
  selectedProductFOT: string;
  selectedProductFOTName: string;
  selectedProductCOMM: string;
  selectedProductCOMMName: string;
  selectedProductFURN: string;
  selectedProductFURNName: string;
  selectedProductHHAP: string;
  selectedProductHHAPName: string;
  selectedProductAP_IMP: string;
  selectedProductAP_IMPName: string;
  selectedProductSettlement: string;
  selectedProductSettlementName: string;
  selectedProductSeller: string;
  selectedProductSellerName: string;
  selectedProductMAP_LAT: string;
  selectedProductMAP_LNG: string;
  selectedProductSellerPhone: string;
  selectedProductSellerPhoneName: string;
  parameters: object;
  updatePage: (page: number) => void;
  setCityFilter: (city: number) => void;
  setRoomFilter: (room: number) => void;
  fetchRooms: (city: number, newPage: number) => Promise<void>;
  setParameters: (params: object) => void;
  city: number;
  setRoomsFilter: (rooms: number) => void;
  setPriceFilter: (price: number[]) => void;
  setRoomsFilter38: () => void;
  success: boolean;
}

//https://hahahome.live/api/v1/rooms?page=1

export const useLongRentStore = create<LongRentState>((set, get) => ({
  rooms: [],
  page: '',
  city: '',
  room: '',
  price: [],
  success: false,
  roomsFilters: '',
  selectedProductId: null,
  selectedProductTitle: null,
  selectedProductPictures: [],
  selectedProductPicturesMass: [],
  selectedProductPrice: null,
  selectedProductCurrency: null,
  selectedProductCity: null,
  selectedProductCityArea: null,
  selectedProductRooms: null,
  selectedProductFloor: null,
  selectedProductAnons: null,
  selectedProductSeries: null,
  selectedProductSeriesName: null,
  selectedProductRepair: null,
  selectedProductRepairName: null,
  selectedProductRentType: null,
  selectedProductRentTypeName: null,
  selectedProductTermsAnimals: null,
  selectedProductTermsAnimalsName: null,
  selectedProductTermsChildren: null,
  selectedProductTermsChildrenName: null,
  selectedProductFOT: null,
  selectedProductFOTName: null,
  selectedProductCOMM: null,
  selectedProductCOMMName: null,
  selectedProductFURN: null,
  selectedProductFURNName: null,
  selectedProductHHAP: null,
  selectedProductHHAPName: null,
  selectedProductAP_IMP: null,
  selectedProductAP_IMPName: null,
  selectedProductSettlement: null,
  selectedProductSettlementName: null,
  selectedProductSeller: null,
  selectedProductSellerName: null,
  selectedProductMAP_LAT: null,
  selectedProductMAP_LNG: null,
  selectedProductSellerPhone: null,
  selectedProductSellerPhoneName: null,

  /*rooms: [], // Ваш массив элементов

  clearElements: () => {
    set({rooms: []}); // Очистка массива элементов
  },*/

  clearElements: () => {
    set({rooms: []});
  },

  fetchRooms: async (
    city: number,
    salesmanId: number,
    cityArea: number,
    pPriceF0: number,
    pPriceF1: number,
    room: number,
    pFloor0: number,
    pFloor1: number,
    pTotalFloor0: number,
    pTotalFloor1: number,
    pSeries: number,
    /*price: number[],*/
    newPage: number,
  ) => {
    /*console.log(city + ' citySTORE');*/
    /*console.log(room + ' roomSTORE');*/
    /*console.log(price + ' priceSTORE');*/
    /*console.log(newPage + ' newPageSTORE');*/

    /*let clearElementsExecuted = false;

    if (room && !clearElementsExecuted) {
      get().clearElements();
      clearElementsExecuted = true;
    }*/
    let encodedStringPriceF0 = encodeURIComponent('p_price_f[0]');
    console.log(encodedStringPriceF0 + ' encodedStringPriceF0');

    let params = {
      p_city: city,
      p_seller: salesmanId,
      p_city_area: cityArea,
      'p_price_f[0]': pPriceF0,
      'p_price_f[1]': pPriceF1,
      p_rooms: room,
      'p_floor[0]': pFloor0,
      'p_floor[1]': pFloor1,
      'p_total_floor[0]': pTotalFloor0,
      'p_total_floor[1]': pTotalFloor1,
      p_series: pSeries,
      /*p_price: price,*/
      page: newPage,
    };
    //console.log(params + 'let params');

    for (let key in params) {
      // console.log(key + ': ', params[key]);
    }

    for (const key in params) {
      if (
        params[key] === null ||
        params[key] === '' ||
        params[key] === undefined ||
        isNaN(params[key])
      ) {
        delete params[key];
      } else if (key.includes('[') && key.includes(']')) {
        const encodedKey = key.replace(/\[/g, '%5B').replace(/\]/g, '%5D');
        params[encodedKey] = params[key];
        delete params[key];
      }
    }
    const keys = Object.keys(params);
    console.log(keys + ' keys********');

    const values = Object.values(params);
    console.log(values + ' values********');

    const paramString =
      '?' +
      Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');

    console.log(
      `https://hahahome.live/api/v1/rooms${paramString} + "paramString"`,
    );
    const response = await fetch(
      `https://hahahome.live/api/v1/rooms${paramString}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      },
    );

    /* const response = await fetch(
      `https://hahahome.live/api/v1/rooms?p_city=${city}&p_rooms=${room}&page=${newPage}`,
    );*/
    // Получаем предыдущие данные страницы из состояния

    // Добавление нового URL
    const filterUrl = 'https://hahahome.live/api/v1/props?category_id=38';

    const responseFilter = await fetch(
      filterUrl, // Обновленный URL
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Дополнительные параметры запроса, если необходимо
      },
    );

    const previousRooms = get().rooms;

    // Склеиваем предыдущие данные страницы с новыми данными
    const data = await response.json();
    const updatedRooms = [...previousRooms, ...data.rooms];
    set({rooms: updatedRooms});

    const dataFilter = await responseFilter.json();
    //console.log(dataFilter + ' dataFilter');
    /*for (const key in dataFilter['12']['elements']) {
      if (dataFilter['12']['elements'].hasOwnProperty(key)) {
        const value = dataFilter['12']['elements'][key];
        console.log(`Ключ: ${key}, Значение: ${value}`);
      }
    }*/
    set({roomsFilters: dataFilter});

    //const data = await response.json();
    //set({rooms: [...data.rooms]});
    /*const newRooms = [
      ...data.rooms,
      ...data.rooms.map(room => ({...room, id: room.id + '-duplicate'})),
    ];

    console.log('New Rooms:', newRooms);

    set({rooms: newRooms});*/
  },
  updatePage: () => {
    const {page} = get();
    set({page: useLongRentStore.getState().page});
  },

  setCityFilter: () => {
    const {city} = get();
    set({city: useLongRentStore.getState().city});
  },

  setRoomsFilter: () => {
    const {room} = get();
    set({room: useLongRentStore.getState().room});
  },

  filtersFromStore: () => {
    const {roomsFilter} = get();
    set({roomsFilter: useLongRentStore.getState().roomsFilter});
  },

  setPriceFilter: () => {
    const {price} = get();
    set({price: useLongRentStore.getState().price});
  },

  setParameters: (
    id: number,
    title: string,
    pictures: string[],
    picturesMass: string[],
    price: string,
    currency: string,
    city: string,
    cityArea: string,
    rooms: string,
    floor: string,
    anons: string,
    series: string,
    seriesName: string,
    repair: string,
    repairName: string,
    rentType: string,
    rentTypeName: string,
    TermsAnimals: string,
    TermsAnimalsName: string,
    TermsChildren: string,
    TermsChildrenName: string,
    FOT: string,
    FOTName: string,
    COMM: string,
    COMMName: string,
    FURN: string,
    FURNName: string,
    HHAP: string,
    HHAPName: string,
    AP_IMP: string,
    AP_IMPName: string,
    Settlement: string,
    SettlementName: string,
    Seller: string,
    SellerName: string,
    MAP_LAT: string,
    MAP_LNG: string,
    SellerPhone: string,
    SellerPhoneName: string,
  ) =>
    set({
      selectedProductId: id,
      selectedProductTitle: title,
      selectedProductPictures: pictures,
      selectedProductPicturesMass: picturesMass,
      selectedProductPrice: price,
      selectedProductCurrency: currency,
      selectedProductCity: city,
      selectedProductCityArea: cityArea,
      selectedProductRooms: rooms,
      selectedProductFloor: floor,
      selectedProductAnons: anons,
      selectedProductSeries: series,
      selectedProductSeriesName: seriesName,
      selectedProductRepair: repair,
      selectedProductRepairName: repairName,
      selectedProductRentType: rentType,
      selectedProductRentTypeName: rentTypeName,
      selectedProductTermsAnimals: TermsAnimals,
      selectedProductTermsAnimalsName: TermsAnimalsName,
      selectedProductTermsChildren: TermsChildren,
      selectedProductTermsChildrenName: TermsChildrenName,
      selectedProductFOT: FOT,
      selectedProductFOTName: FOTName,
      selectedProductCOMM: COMM, //не нужно заменить
      selectedProductCOMMName: COMMName,
      selectedProductFURN: FURN,
      selectedProductFURNName: FURNName,
      selectedProductHHAP: HHAP,
      selectedProductHHAPName: HHAPName,
      selectedProductAP_IMP: AP_IMP,
      selectedProductAP_IMPName: AP_IMPName,
      selectedProductSettlement: Settlement,
      selectedProductSettlementName: SettlementName,
      selectedProductSeller: Seller,
      selectedProductSellerName: SellerName,
      selectedProductMAP_LAT: MAP_LAT,
      selectedProductMAP_LNG: MAP_LNG,
      selectedProductSellerPhone: SellerPhone,
      selectedProductSellerPhoneName: SellerPhoneName,
    }),
}));

window.store = useLongRentStore;

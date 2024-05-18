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

export interface LongRentState {
  rooms: Rooms[];
  page: number;
  room: number;
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
}

//https://hahahome.live/api/v1/rooms?page=1

export const useLongRentStore = create<LongRentState>((set, get) => ({
  rooms: [],
  page: 1,
  city: 10,
  room: 1,
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

  fetchRooms: async (city: number = 10, room: number = 1, newPage: number) => {
    console.log(city + ' citySTORE');
    console.log(room + ' roomSTORE');
    const response = await fetch(
      `https://hahahome.live/api/v1/rooms?p_city=${city}&p_rooms=${room}&page=${newPage}`,
    );
    /*p_city=${cityFilter}&p_rooms=${roomsFilter}&     p_city=${city}&*/
    const data = await response.json();
    //console.log(data.rooms);
    set({rooms: data.rooms});
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

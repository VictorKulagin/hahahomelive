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

interface TermsExtra {
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
  TERMS_EXTRA: TermsExtra[];
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
  selectedProductTermsExtra: string;
  selectedProductTermsExtraName: string;
  selectedProductBuildingYear: string;
  selectedProductBuildingYearName: string;
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
  selectedProductTermsExtra: null,
  selectedProductTermsExtraName: null,
  selectedProductBuildingYear: null,
  selectedProductBuildingYearName: null,
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
    TermsExtra: string,
    TermsExtraName: string,
    BuildingYear: string,
    BuildingYearName: string,
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
      selectedProductTermsExtra: TermsExtra, //не нужно заменить на HHAP
      selectedProductTermsExtraName: TermsExtraName,
      selectedProductBuildingYear: BuildingYear, //не нужно заменить
      selectedProductBuildingYearName: BuildingYearName,
    }),
}));

window.store = useLongRentStore;

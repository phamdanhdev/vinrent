import {
  CHANGE_TYPE_SEARCH,
  CHANGE_AREA_SEARCH,
  CHANGE_SORT_SEARCH,
} from "../constants/actionTypes";

const searchReducer = (
  searchData = {
    type: ["DangBan", "NhaO"],
    area: ["TPHCM", "GoVap"],
    sort: ["TinMoi"],
  },
  action
) => {
  switch (action.type) {
    case CHANGE_TYPE_SEARCH:
      return { ...searchData, type: action.data };

    case CHANGE_AREA_SEARCH:
      return { ...searchData, area: action.data };

    case CHANGE_SORT_SEARCH:
      return { ...searchData, sort: action.data };

    default:
      return searchData;
  }
};

export default searchReducer;

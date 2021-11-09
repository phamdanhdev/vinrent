import {
  CHANGE_TYPE_SEARCH,
  CHANGE_AREA_SEARCH,
  CHANGE_SORT_SEARCH,
} from "../constants/actionTypes";

export const changeTypeSearch = (data) => async (dispatch) => {
  try {
    data.length === 0
      ? dispatch({ type: CHANGE_TYPE_SEARCH, data: ["DangBan", "NhaO"] })
      : dispatch({ type: CHANGE_TYPE_SEARCH, data });
  } catch (error) {
    console.log(error.response);
  }
};

export const changeAreaSearch = (data) => async (dispatch) => {
  try {
    data.length === 0
      ? dispatch({ type: CHANGE_AREA_SEARCH, data: ["TPHCM", "GoVap"] })
      : dispatch({ type: CHANGE_AREA_SEARCH, data });
  } catch (error) {
    console.log(error.response);
  }
};

export const changeSortSearch = (data) => async (dispatch) => {
  try {
    data.length === 0
      ? dispatch({ type: CHANGE_SORT_SEARCH, data: ["TinMoi"] })
      : dispatch({ type: CHANGE_SORT_SEARCH, data });
  } catch (error) {
    console.log(error.response);
  }
};

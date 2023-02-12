import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Request} from '../config/Request';
export const getFoodieList = createAsyncThunk(
  'foodie/getFoodieServices',
  async (
    {
      city_id,
      latitude,
      longitude,
      filter = '',
      qfilter = '',
      serach = '',
      menu_type_id = 1,
    },
    {rejectWithValue},
  ) => {
    try {
      // const res = await Request("get",`/store/list/1?filter=&city_id=${city_id}&longitude=${longitude}&latitude=${latitude}`)
      const res = await Request(
        'get',
        `/store/list/${menu_type_id}?longitude=${longitude}&latitude=${latitude}&filter=${filter}&qfilter=${qfilter}&item=` +
          serach,
      );
      // console.log(`/store/list/1?filter=&city_id=${city_id}`+ " fullfilled", res.data.responseData);
      console.log(`/store/list/1?filter=` + ' fullfilled');
      return res.data.responseData;
    } catch (error) {
      console.log(`/store/list/1?filter=` + ' failed');

      rejectWithValue(error.toString());
    }
  },
);

export const getFoodieOffers = createAsyncThunk(
  'foodie/getFoodieOffers',
  async (store_type_id, {rejectWithValue}) => {
    try {
      const res = await Request('get', '/promocodes?storetypeid=' + store_type_id);
      console.log('/promocodes?store_type_id=' + store_type_id + ' fullfilled');
      // console.log('/promocodes?store_type_id=',res.data.responseData)
      return res.data.responseData;
    } catch (error) {
      console.log('/promocodes?store_type_id' + store_type_id + ' failed', error);

      rejectWithValue(error.toString());
    }
  },
);
// https://fako-api.idiosysdev.com/api/v1/user/store/details/56?&latitude=22.5803185&longitude=88.4364217
export const getFoodieProductDetails = createAsyncThunk(
  'foodie/getFoodieProductDetails',
  async ({id, latitude, longitude, serach, filter}, {rejectWithValue}) => {
    try {
      // const res = await Request("get",`/store/list/1?filter=&city_id=${city_id}&longitude=${longitude}&latitude=${latitude}`)
      const res = await Request(
        'get',
        `/store/details/${id}?&filter=${filter}&search=${serach}&latitude=${latitude}&longitude=${longitude}`,
      );
      console.log(
        `/store/details/${id}?&search=${serach}&latitude=${latitude}&longitude=${longitude}` +
          ' fullfilled',
      );
      return res.data.responseData;
    } catch (error) {
      console.log(`/store/list/1?filter=&city_id=${store_type_id}` + ' failed');

      rejectWithValue(error.toString());
    }
  },
);

const slice = createSlice({
  name: 'foodie',
  initialState: {
    // filterShow:false,
    product_list: [],
    offers: [],
    features: [],
    product_detail: {},
    screen_title:"",
    screen_id:1
  },
  reducers: {
    ClearPrevData: (state, {payload}) => {
      state.product_list = [];
      state.offers = [];
      state.features = [];
      state.product_detail = {};
    },
    serScreen_title:(state,{payload})=>{
     state.screen_title=payload
    },
    serScreen_id:(state,{payload})=>{
      state.screen_id=payload
     }
    
  },
  extraReducers: {
    [getFoodieList.pending]: state => {
      // state.loading=true;
    },
    [getFoodieList.fulfilled]: (state, {payload}) => {
      // state.loading=true;
      state.product_list = payload;
      // state.offers = payload.promocodes;
    },
    [getFoodieOffers.fulfilled]: (state, {payload}) => {
      state.offers = payload;
    },
    [getFoodieProductDetails.fulfilled]: (state, {payload}) => {
      state.product_detail = payload;
    },
  },
});
 export const {serScreen_title,serScreen_id} = slice.actions;
export default slice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  languageIs: '',
  registerDatainfo: [],
  loginDetails: [],
  editAccount: [],
  passwordData:[],
  allCategories:[],
  subCategories:[],
  changepasswordData: [],
  serviceOfferingData: [],
  serviceProviderData: [],
  getAddedAddressLists:[],
  serviceOfferingCard: [],
  ourServicesCard: [],
  summarylistData: [],
  termandconditionsData: [],
  successBookingList: [],
  feedbackList: [],
  cancelledData: [],
  cancelOrderList: [],
  createOrderList: [],
  completeddData: [],
  selectedServicesData: [],
  addressupdateData: [],
  updatecardsData: []
};
const authData = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.languageIs = action.payload;
    },
    registerData: (state, action) => {
      state.registerDatainfo = action.payload;
    },
    loginData: (state, action) => {
      state.loginDetails = action.payload;
    },
    updateData: (state, action) => {
      state.editAccount = action.payload;
    },
    newpassword:(state, action) => {
      state.passwordData = action.payload;
    },
    allCategory: (state, action) => {
      state.allCategories = action.payload;
    },
    subCategoryData: (state, action) => {
      state.subCategories = action.payload;
    },
    changepasswordData: (state, action) => {
      state.changepasswordData = action.payload;
    },
    serviceOfferingList: (state, action) =>{
      state.serviceOfferingData = action.payload;
    },
    serviceProviderlist: (state, action) => {
      state.serviceProviderData = action.payload;
    },
    getAddedAddress:(state,action) =>{
       state.getAddedAddressLists = action.payload
    },
    modifyAddresscheck:(state, action)=>{
      console.log("action", action)
      var list =  state.getAddedAddressLists
      list.map((val, key)=>{
        if(key == action.payload){
          list[key].checked = true
        }else{
          list[key].checked = false
        }
      })
      state.getAddedAddressLists = list
      console.log("state.getAddedAddressLists", state.getAddedAddressLists)
    },
    serviceOfferCard: (state, action) => {
      state.serviceOfferingCard = action.payload;
    },
    ourServicesList: (state, action) => {
      state.ourServicesCard = action.payload;
     },
    summarylist:(state,action) =>{
      state.summarylistData = action.payload
    },
    termsconditions:(state,action)=>{
      state.termandconditionsData = action.payload;
    },
    successfulBooking:(state,action) => {
      state.successBookingList = action.payload;
    },
    feedbackDetails: (state,action) => {
      state.feedbackList = action.payload;
    },
    cancelledDetails: (state,action) => {
      state.cancelledData = action.payload;
    },
    cancelOrderData: (state,action) => {
      state.cancelOrderList = action.payload;
    },
    createOrderData: (state,action) => {
      state.createOrderList = action.payload;
    },
    completedDetails: (state,action) => {
      state.completeddData = action.payload;
    },
    selectedServicesDetails: (state,action) => {
      state.selectedServicesData = action.payload;
    },
    addressupdate: (state,action) => {
      state.addressupdateData = action.payload;
    },
    updatecards: (state,action) => {
      state.updatecardsData = action.payload;
    },

  },
});

export const {changeLanguage, registerData, loginData,updateData,newpassword,allCategory,subCategoryData,
  changepasswordData,serviceOfferingList,serviceProviderlist,getAddedAddress,modifyAddresscheck,serviceOfferCard,ourServicesList,
  summarylist,termsconditions,successfulBooking,feedbackDetails,cancelledDetails,cancelOrderData,createOrderData,
  completedDetails,selectedServicesDetails,addressupdate,updatecards} = authData.actions;

export default authData.reducer;

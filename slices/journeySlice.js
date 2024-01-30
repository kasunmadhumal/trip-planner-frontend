import { createSlice } from "@reduxjs/toolkit";

    // private Long tripPlanId;
    // private String journeyStartingPlace;
    // private String startingDate;
    // private String startingTime;
    // private String journeyEndingPlace;
    // private List<SelectEventsAndLocations> selectEventsAndLocationsList;
    // private String userEmail;

    // private int eventNumber;
    // private String eventName;
    // private String allocatedTime;
    // private List<String> preferences;
    // private String locationName;
    // private double latitude;
    // private double longitude;

const initialState = {
    journeyStartingPlace: null,
    startingDate: null,
    startingTime: null,
    journeyEndingPlace: null,
    selectEventsAndLocationsList: null,
    userEmail: null,
};

export const journeySlice = createSlice({
  name: "journey",
  initialState,
  reducers: {
    setJourneyStartingPlace: (state, action) => {
      state.journeyStartingPlace = action.payload;
    },
    setStartingDate: (state, action) => {
      state.startingDate = action.payload;
    },
    setStartingTime: (state, action) => {
      state.startingTime = action.payload;
    },
    setJourneyEndingPlace: (state, action) => {
      state.journeyEndingPlace = action.payload;
    },
    setSelectEventsAndLocationsList: (state, action) => {
      state.selectEventsAndLocationsList = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const {
  setJourneyStartingPlace,
  setStartingDate,
  setStartingTime,
  setJourneyEndingPlace,
  setSelectEventsAndLocationsList,
  setUserEmail,
} = journeySlice.actions;


export const selectJourneyStartingPlace = (state) => state.journey.journeyStartingPlace;
export const selectStartingDate = (state) => state.journey.startingDate;
export const selectStartingTime = (state) => state.journey.startingTime;
export const selectJourneyEndingPlace = (state) => state.journey.journeyEndingPlace;
export const selectSelectEventsAndLocationsList = (state) => state.journey.selectEventsAndLocationsList;
export const selectUserEmail = (state) => state.journey.userEmail;

export default journeySlice.reducer;

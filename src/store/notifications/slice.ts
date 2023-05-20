import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotification, INotificationStore, NOTIFICATION_ALIAS } from "./types";

const initialState: INotificationStore = {
  notification: null,
};

export const notificationSlice = createSlice({
  name: NOTIFICATION_ALIAS,
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<INotification>) => {
      state.notification = action.payload;
    },
    removeNotification: (state) => {
      state.notification = null;
    },
  },
});

export default notificationSlice.reducer;
export const { addNotification, removeNotification } =
  notificationSlice.actions;

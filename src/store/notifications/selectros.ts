import { RootState } from "store";

export const notificationSelector = (state: RootState) =>
  state.notification.notification;

import { ENotificationType } from "components/common/Notification";

export const NOTIFICATION_ALIAS = "notification";

export interface INotification {
  type?: ENotificationType;
  time?: number;
  text: string;
}

export interface INotificationStore {
  notification: INotification | null;
}

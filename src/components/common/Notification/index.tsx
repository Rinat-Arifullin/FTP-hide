import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import classNames from "classnames";

import Text from "components/common/Text";

import CloseIcon from "static/icons/closeIcon";
import cx from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "store/hooks/redux";
import { notificationSelector } from "store/notifications/selectros";
import { removeNotification } from "store/notifications/slice";

export enum ENotificationType {
  Success = "success",
  Error = "error",
  Default = "default",
}

interface IProps {
  type?: ENotificationType;
  text?: string;
  onClose?: () => void;
}

const notificationRootNode = document.getElementById("notification-root");

const NotificationItem = ({
  type = ENotificationType.Default,
  text,
  onClose,
}: IProps) => {
  return (
    <div className={classNames(cx.wrapper, cx[type])}>
      <Text size={"bold"}>{text}</Text>
      <div onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export const Notification = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector(notificationSelector);

  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const onCloseNotification = () => {
    dispatch(removeNotification());
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
  };

  useEffect(() => {
    if (notification) {
      const timerId = setTimeout(() => {
        dispatch(removeNotification());
      }, notification?.time || 2000);
      setTimerId(timerId);
      return () => clearTimeout(timerId);
    } else {
      dispatch(removeNotification());
    }
  }, [notification]);

  return notification && notificationRootNode
    ? createPortal(
        <NotificationItem
          type={notification.type}
          text={notification.text}
          onClose={onCloseNotification}
        />,
        notificationRootNode
      )
    : null;
};

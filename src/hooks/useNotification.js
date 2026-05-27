import { useCallback } from "react";
import { App } from "antd";

export const useNotification = () => {
    const { notification } = App.useApp();

    const notifyError = useCallback(
        (message, description) =>
            notification.error({ message, description, placement: "topRight" }),
        [notification]
    );

    const notifySuccess = useCallback(
        (message, description) =>
            notification.success({ message, description, placement: "topRight" }),
        [notification]
    );

    return { notifyError, notifySuccess };
};

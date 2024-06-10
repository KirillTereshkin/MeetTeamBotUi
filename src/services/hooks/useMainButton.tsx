import { useCallback, useEffect } from "react";

import { TG } from "../constants";
import FakeButton from "../../components/FakeButton/FakeButton";

type UseMainButtonArg = {
  text: string;
  cb: () => void;
  isShow?: boolean;
};

export const useMainButton = ({
  cb,
  isShow = true,
  text,
}: UseMainButtonArg) => {
  useEffect(() => {
    TG.MainButton.text = text;
    TG.MainButton.onClick(cb);
  }, [text, cb]);

  useEffect(() => {
    if (isShow) {
      TG.MainButton.show();
      return;
    }

    TG.MainButton.hide();
  }, [isShow]);

  const FakeMainButton = useCallback(
    () => <FakeButton onClick={cb}>{text}</FakeButton>,
    [cb, text]
  );

  return {
    FakeMainButton,
  };
};

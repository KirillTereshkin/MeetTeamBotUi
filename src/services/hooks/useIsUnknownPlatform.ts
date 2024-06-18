import { useMemo } from "react";

import { TG } from "../constants";

export const useIsUnknownPlatform = () => {
  const isUnknownPlatform = useMemo(() => TG.platform === "unknown", []);

  return { isUnknownPlatform };
};

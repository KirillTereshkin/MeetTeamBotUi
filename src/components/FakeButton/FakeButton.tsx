import { ComponentProps, FC, useMemo } from "react";

import { Button } from "@mui/material";
import { isUnknownPlatformFn } from "../../services/helpers/isUnknownPlatformFn";

interface FakeButtonProps extends ComponentProps<typeof Button> {}

const FakeButton: FC<FakeButtonProps> = (props: FakeButtonProps) => {
  const isUnknownPlatform = useMemo(isUnknownPlatformFn, []);

  if (!isUnknownPlatform) {
    return null;
  }

  return <Button {...props} />;
};

export default FakeButton;

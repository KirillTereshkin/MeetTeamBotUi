import { ComponentProps, FC } from "react";

import { Button } from "@mui/material";
import { useIsUnknownPlatform } from "../../services/hooks/useIsUnknownPlatform";

interface FakeButtonProps extends ComponentProps<typeof Button> {}

const FakeButton: FC<FakeButtonProps> = (props: FakeButtonProps) => {
  const { isUnknownPlatform } = useIsUnknownPlatform();

  if (!isUnknownPlatform) {
    return null;
  }

  return <Button {...props} />;
};

export default FakeButton;

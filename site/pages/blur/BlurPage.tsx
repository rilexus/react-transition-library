import React from "react";
import { BlurTransition } from "../../../transitions";
import { useToggle } from "../../hooks";
import { AnimateButton, PageTitle } from "../../components";

const BlurPage = () => {
  const [show, toggle] = useToggle();
  return (
    <div>
      <PageTitle>Blur</PageTitle>
      <BlurTransition to={"7px"} from={"0px"} as={"p"} in={show} timeout={400}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam
        blanditiis error fugit ipsam ipsum itaque molestias mollitia numquam
        praesentium quidem reiciendis saepe sed similique unde ut, veniam
        veritatis vero.
      </BlurTransition>
      <AnimateButton onClick={toggle} />
    </div>
  );
};

export { BlurPage };

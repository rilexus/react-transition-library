import React from "react";
import { useToggle } from "../../hooks";
import { ZoomInTransition } from "../../../transitions";
import { AnimateButton, PageTitle } from "../../components";

const ZoomInPage = () => {
  const [show, toggle] = useToggle();
  return (
    <div>
      <PageTitle>Zoom In</PageTitle>
      <ZoomInTransition from={0} to={1} timeout={400} in={show}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        assumenda beatae consequuntur et eum ex ipsa itaque iure magni modi
        necessitatibus nihil, non omnis possimus, quisquam quos similique, ut
        veritatis.
      </ZoomInTransition>
      <AnimateButton onClick={toggle} />
    </div>
  );
};

export { ZoomInPage };

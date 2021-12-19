import React from "react";
import { useToggle } from "../../hooks";
import { ZoomOutTransition } from "../../../transitions";
import { AnimateButton, PageTitle } from "../../components";

const ZoomOutPage = () => {
  const [show, toggle] = useToggle();
  return (
    <div>
      <PageTitle>Zoom Out</PageTitle>
      <ZoomOutTransition from={1} to={0} timeout={400} in={show}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          assumenda beatae consequuntur et eum ex ipsa itaque iure magni modi
          necessitatibus nihil, non omnis possimus, quisquam quos similique, ut
          veritatis.
        </p>
      </ZoomOutTransition>
      <AnimateButton onClick={toggle} />
    </div>
  );
};

export { ZoomOutPage };

import React from "react";
import { usePageTitleAnimation } from "../../hooks";
import { BackdropTransition, FadeInTransition } from "../../../transitions";
import { AnimateButton, FullPageCenter, PageTitle } from "../../components";

const BackdropExample = () => {
  const { register, toggle } = usePageTitleAnimation();
  return (
    <FullPageCenter>
      <div>
        <div
          style={{
            position: "relative",
            padding: "3rem",
          }}
        >
          <BackdropTransition
            {...register}
            backgroundColor={"#00000003"}
            from={"0px"}
            to={"10px"}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          />
          <div>
            <FadeInTransition in appear to={1} from={0} timeout={999}>
              <PageTitle>Backdrop</PageTitle>
            </FadeInTransition>
          </div>
        </div>
        <AnimateButton onClick={toggle} />
      </div>
    </FullPageCenter>
  );
};

export { BackdropExample };

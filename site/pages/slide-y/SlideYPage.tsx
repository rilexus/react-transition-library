import React from "react";
import { useToggle } from "../../hooks";
import { AnimateButton, PageTitle } from "../../components";
import { SlideYTransition } from "../../../transitions";

const SlideYPage = () => {
  const [show, toggle] = useToggle();
  return (
    <div>
      <PageTitle>Slide Y</PageTitle>
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <SlideYTransition
          from={"20px"}
          to={"0px"}
          timeout={1000}
          as={"p"}
          in={show}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquid consequatur cumque delectus fuga in maxime, officiis omnis
          optio perferendis quis rerum similique veritatis. Et id iste iure
          sapiente voluptatem?
        </SlideYTransition>
      </div>
      <AnimateButton onClick={toggle} />
    </div>
  );
};

export { SlideYPage };

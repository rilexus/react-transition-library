import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { BlurTransition } from "../../../transitions";
import { Ease } from "../../../ease";

const BlurContext = createContext<{
  register: (name: string) => void;
  unregister: (name: string) => void;
  blur: (names: string[]) => void;
  focus: (names: string[]) => void;
  blurred: {
    [name: string]: boolean;
  };
}>({
  blurred: {},
  // eslint-disable-next-line
  register: (name: string) => {},
  // eslint-disable-next-line
  unregister: (name: string) => {},
  // eslint-disable-next-line
  blur: (names: string[]) => {},
  // eslint-disable-next-line
  focus: (names: string[]) => {},
});

const useBlurContext = () => useContext(BlurContext);

const BlurContextProvider: FC = ({ children }) => {
  const [state, setState] = useState<{ [name: string]: boolean }>({});

  const register = (name: string) => {
    setState((s) => ({ ...s, [name]: false }));
  };
  const unregister = (name: string) => {
    setState((s) => {
      // eslint-disable-next-line
      const { [name]: _removed, ...rest } = s;
      return { ...rest };
    });
  };

  const blur = (names: string[]) => {
    setState((s) => {
      return Object.entries(s).reduce((acc, [name, value]) => {
        if (names.includes(name)) {
          return { ...acc, [name]: true };
        }
        return { ...acc, [name]: value };
      }, {});
    });
  };
  const focus = (names: string[]) => {
    setState((s) => {
      return Object.entries(s).reduce((acc, [name, value]) => {
        if (names.includes(name)) {
          return { ...acc, [name]: false };
        }
        return { ...acc, [name]: value };
      }, {});
    });
  };

  return (
    <BlurContext.Provider
      // TODO: memo context value
      value={{ blurred: state, register, unregister, blur, focus }}
    >
      {children}
    </BlurContext.Provider>
  );
};

const Blur: FC<{
  name: string;
}> = ({ children, name }) => {
  const { register, unregister, blurred } = useBlurContext();

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <BlurTransition
      to={"7px"}
      from={"0px"}
      in={blurred[name]}
      timeout={400}
      delay={0}
      ease={Ease.ease}
    >
      {children}
    </BlurTransition>
  );
};

export { BlurContextProvider, useBlurContext, Blur };

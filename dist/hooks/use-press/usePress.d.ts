declare enum PRESS_TYPES {
    idle = "idle",
    pressstart = "pressstart",
    press = "press",
    pressend = "pressend"
}
declare const usePress: (callback: any, ref: any) => PRESS_TYPES;
export { usePress, PRESS_TYPES };
//# sourceMappingURL=usePress.d.ts.map
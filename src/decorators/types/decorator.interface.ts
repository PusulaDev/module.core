import type { ICoreModule } from "../../module";

export type IDecorator = {
    setModule: (module: ICoreModule) => void;
};

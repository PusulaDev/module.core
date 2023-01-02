import type { ICloneUtil } from "./types/clone-util.interface";
import cloneDeep from "lodash.cloneDeep";

class DefaultCloneUtil implements ICloneUtil {
    clone<T = unknown>(item: T): T {
        if (item instanceof Array) return [...item] as T;
        else if (typeof item === "object") return { ...item };
        return item;
    }

    cloneDeep<T>(item: T) {
        return cloneDeep(item);
    }
}

export const defaultCloneUtil = new DefaultCloneUtil();

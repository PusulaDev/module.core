import { globalModule } from "../global-module";
import type { ICache } from "./index";

export class LocalStorageCache implements ICache {
    set<T>(key: string, value: T) {
        if (value === undefined) return;
        let stringValue = JSON.stringify(value);
        stringValue = globalModule.getEncryptionUtil()?.encrypt(stringValue) ?? stringValue;
        window.localStorage.setItem(key, stringValue);
    }

    get<T>(key: string) {
        let value = window.localStorage.getItem(key);
        if (!value) return null;
        value = globalModule.getEncryptionUtil()?.decrypt(value) ?? value;
        return JSON.parse(value) as T;
    }

    remove(key: string) {
        window.localStorage.removeItem(key);
    }

    clear() {
        window.localStorage.clear();
    }
}

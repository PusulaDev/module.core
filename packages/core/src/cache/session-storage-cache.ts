import { globalModule } from "../global-module";
import type { ICache } from "./index";

export class SessionStorageCache implements ICache {
    set<T>(key: string, value: T) {
        if (value === undefined) return;

        let stringValue = JSON.stringify(value);

        stringValue = globalModule.getEncryptionUtil()?.encrypt(stringValue) ?? stringValue;

        window.sessionStorage.setItem(key, stringValue);
    }

    get<T>(key: string) {
        let value = window.sessionStorage.getItem(key);
        if (!value) return null;

        value = globalModule.getEncryptionUtil()?.decrypt(value) ?? value;

        return JSON.parse(value) as T;
    }

    remove(key: string) {
        window.sessionStorage.removeItem(key);
    }

    clear() {
        window.sessionStorage.clear();
    }
}

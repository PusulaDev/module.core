import { ensureObject } from "./ensure-object.util";

export const createFormData = (data: Record<string, unknown>) =>
    Object.keys(data ?? {}).reduce((formData, key) => {
        const property = data[key];
        formData.append(
            key,
            property && property instanceof Blob
                ? property
                : ensureObject(property)
                ? JSON.stringify(property)
                : `${property}`
        );
        return formData;
    }, new FormData());

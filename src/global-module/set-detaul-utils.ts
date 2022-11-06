import {
    defaultLocalization,
    defaultCloneUtil,
    defaultDateUtil,
    defaultEncryptUtil,
    browserPerformanceUtil,
} from "..";
import { globalModule } from "./global-module";

export const setDefaultUtils = () => {
    globalModule.setLocalization(defaultLocalization);
    globalModule.setEncryptionUtil(defaultEncryptUtil);
    globalModule.setCloneUtil(defaultCloneUtil);
    globalModule.setDateUtil(defaultDateUtil);
    globalModule.setPerformanceUtil(browserPerformanceUtil);
};

import {
    browserPerformanceUtil,
    defaultCloneUtil,
    defaultDateUtil,
    defaultEncryptUtil,
    defaultLocalization,
} from "../index";
import { globalModule } from "./global-module";

export const setDefaultUtils = () => {
    globalModule.setLocalization(defaultLocalization);
    globalModule.setEncryptionUtil(defaultEncryptUtil);
    globalModule.setCloneUtil(defaultCloneUtil);
    globalModule.setDateUtil(defaultDateUtil);
    globalModule.setPerformanceUtil(browserPerformanceUtil);
};

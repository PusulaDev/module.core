import { beforeEach, describe, expect, it } from "vitest";
import { globalModule } from "../../global-module";
import { defaultLocalization } from "../../localization";
import { EnumAppLayer } from "../../shared";
import { CustomError } from "../index";
import { EnumCustomErrorType } from "../statics/custom-error-type.enum";

describe("Custom Error", () => {
    beforeEach(() => {
        globalModule.clear();
    });
    it("should translate message", () => {
        defaultLocalization.setLang("tr");
        defaultLocalization.setTranslations({ tr: { hi: "Merhaba" } });
        globalModule.setLocalization(defaultLocalization);

        const error = new CustomError({
            layer: EnumAppLayer.Controller,
            type: EnumCustomErrorType.Construction,
            message: "hi",
            translate: true,
        });
        const message = error.message;
        expect(message).toEqual("Merhaba");
    });

    it("should translate as default if globalModule.isTranslateDefault is true", () => {
        defaultLocalization.setLang("tr");
        defaultLocalization.setTranslations({ tr: { hi: "Merhaba" } });
        globalModule.setLocalization(defaultLocalization);
        globalModule.useTranslateAsDefault();

        const error = new CustomError({
            layer: EnumAppLayer.Controller,
            type: EnumCustomErrorType.Construction,
            message: "hi",
        });
        const message = error.message;
        expect(message).toEqual("Merhaba");
    });
});

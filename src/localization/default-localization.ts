import type { ILocalization, LocalizationTranslations, Translations } from "./types";
import _get from "lodash.get";

class DefaultLocalization implements ILocalization {
    private lang = "";
    private translations: LocalizationTranslations = {};

    setLang(lang: string) {
        this.lang = lang;
        return this;
    }

    getLang() {
        return this.lang;
    }

    setTranslations(translations: LocalizationTranslations) {
        for (const lang in translations) {
            const langTranslations = translations[lang] ?? {};

            if (this.translations[lang]) this.combineLang(lang, langTranslations);
            else this.translations[lang] = langTranslations;
        }

        return this;
    }

    translate(text: string, ...args: string[]) {
        if (!text) return "";
        let res = _get(this.translations[this.lang] ?? {}, text) ?? "";

        if (!res) return res;

        if (args.length) {
            args.forEach((e) => res && (res = res.toString().replace("%s", e)));
        }

        return res.toString();
    }

    clear() {
        this.lang = "";
        this.translations = {};
    }

    private combineLang(lang: string, langTranslations: Translations) {
        this.translations[lang] = {
            ...this.translations[lang],
            ...langTranslations,
        };
    }
}

export const defaultLocalization = new DefaultLocalization();

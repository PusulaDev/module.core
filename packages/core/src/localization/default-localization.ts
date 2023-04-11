import type { ILocalization, LocalizationTranslations, TranslateArgs, Translations } from "./types";
import _get from "lodash.get";
import { ensureObject } from "../utils";

class DefaultLocalization implements ILocalization<LocalizationTranslations> {
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

    getTranslations(): LocalizationTranslations {
        return this.translations;
    }

    translate(key: string, args?: TranslateArgs): string {
        if (!key) return "";
        const res = this.getTranslateValue(key);

        if (!res) return key;

        return this.translateWithValue(res.toString(), args);
    }

    translatePlural(key: string, count: number, args?: TranslateArgs): string {
        if (!key) return "";

        const res = this.getTranslateValue(key);

        if (!res) return key;

        const list = res
            .toString()
            .split("|")
            .map((e) => e.trim());

        if (list.length <= 1) return this.translate(key, args);

        let zero = "",
            singular = "",
            plural = "";

        if (list.length === 2) {
            [singular = "", plural = ""] = list;
        } else if (list.length === 3) {
            [zero = "", singular = "", plural = ""] = list;
        }

        let translateValue = "";
        if (count === 0) translateValue = zero;
        else if (count === 1) translateValue = singular;
        else translateValue = plural;

        return this.translateWithValue(translateValue, args);
    }

    clear() {
        this.lang = "";
        this.translations = {};
    }

    private getTranslateValue(key: string) {
        return _get(this.translations[this.lang] ?? {}, key) ?? "";
    }

    private translateWithValue(translateValue: string, args?: TranslateArgs) {
        if (args instanceof Array && args.length) {
            args.forEach(
                (e) => translateValue && (translateValue = translateValue.toString().replace("%s", String(e)))
            );
        } else if (ensureObject(args)) {
            Object.entries(args).forEach(([key, value]) => {
                translateValue = translateValue.toString().replace(`{${key}}`, String(value));
            });
        }

        return translateValue.toString();
    }

    private combineLang(lang: string, langTranslations: Translations) {
        this.translations[lang] = {
            ...this.translations[lang],
            ...langTranslations,
        };
    }
}

export const defaultLocalization = new DefaultLocalization();

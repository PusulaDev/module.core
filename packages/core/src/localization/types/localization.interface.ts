export type TranslateArgs = unknown[] | Record<string, unknown>;

export type ILocalization = {
    setLang(lang: string): ILocalization;
    getLang(): string | null;

    setTranslations(translations: any): ILocalization;

    /**
     * translate with registered translations
     * @param key string path access translation. ex: 'hello' or 'first.second[0]'
     * @param args args for dynamic translations. ex: 'hello %s %s', args will replace %s. Or 'hello {name}' args: {name:'salih'}.
     */
    translate(key: string, args?: TranslateArgs): string;

    /**
     * translate plural
     * @param key string path access translation. ex: 'hello' or 'first.second[0]'
     * @param count count for plural translate
     * @param argsargs for dynamic translations. ex: 'hello %s %s', args will replace %s. Or 'hello {name}' args: {name:'salih'}.
     */
    translatePlural(key: string, count: number, args?: TranslateArgs): string;

    clear(): void;
};

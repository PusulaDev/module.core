/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CoreProvider,
  EnumResponseFormat,
  inject,
  type ICachableRequestConfig,
  type IHTTPClient,
  type SessionStorageCache,
} from "@pusula/module.core";
import { injectable } from "../module";

import {
  LanguageManagementLanguageTextsDetailParams,
  LanguageManagementLanguageTextsListParams,
  LanguageManagementLanguageTextsUpdateParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageTextDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpLanguageManagementDtoLanguageTextDto,
} from "./data-contracts";

export const languageManagementLanguageTextsListConfig: ICachableRequestConfig<
  LanguageManagementLanguageTextsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageTextDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/language-management/language-texts",
  cacheKey: "languageManagementLanguageTextsList",
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguageTextsDetailConfig: ICachableRequestConfig<
  LanguageManagementLanguageTextsDetailParams,
  VoloAbpLanguageManagementDtoLanguageTextDto
> = {
  url: "/api/language-management/language-texts/${resourceName}/${cultureName}/${name}",
  cacheKey: "languageManagementLanguageTextsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguageTextsUpdateConfig: ICachableRequestConfig<
  LanguageManagementLanguageTextsUpdateParams,
  void
> = {
  url: "/api/language-management/language-texts/${resourceName}/${cultureName}/${name}",
  cacheKey: "languageManagementLanguageTextsUpdate",
};

export const languageManagementLanguageTextsRestoreUpdateConfig: ICachableRequestConfig<
  {
    resourceName: string;
    cultureName: string;
    name: string;
  },
  void
> = {
  url: "/api/language-management/language-texts/${resourceName}/${cultureName}/${name}/restore",
  cacheKey: "languageManagementLanguageTextsRestoreUpdate",
};

@injectable.provider({ key: "LanguageTextsProvider" })
export class LanguageTextsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  languageManagementLanguageTextsList = (request: LanguageManagementLanguageTextsListParams) => {
    return this.get(languageManagementLanguageTextsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguageTextsList = (request: LanguageManagementLanguageTextsListParams) => {
    return this.cachableGet(languageManagementLanguageTextsListConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguageTextsDetail = (request: LanguageManagementLanguageTextsDetailParams) => {
    return this.get(languageManagementLanguageTextsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguageTextsDetail = (request: LanguageManagementLanguageTextsDetailParams) => {
    return this.cachableGet(languageManagementLanguageTextsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguageTextsUpdate = (request: LanguageManagementLanguageTextsUpdateParams) => {
    return this.put(languageManagementLanguageTextsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  languageManagementLanguageTextsRestoreUpdate = (request: {
    resourceName: string;
    cultureName: string;
    name: string;
  }) => {
    return this.put(languageManagementLanguageTextsRestoreUpdateConfig, request);
  };
}

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
  contentTypeKey,
  CoreProvider,
  EnumContentType,
  EnumResponseFormat,
  inject,
  type ICachableRequestConfig,
  type IHTTPClient,
  type SessionStorageCache,
} from "@pusula/module.core";
import { injectable } from "../module";

import {
  LanguageManagementLanguagesListParams,
  VoloAbpApplicationDtosListResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpLanguageManagementDtoCreateLanguageDto,
  VoloAbpLanguageManagementDtoCultureInfoDto,
  VoloAbpLanguageManagementDtoLanguageDto,
  VoloAbpLanguageManagementDtoLanguageResourceDto,
  VoloAbpLanguageManagementDtoUpdateLanguageDto,
} from "./data-contracts";

export const languageManagementLanguagesAllListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpApplicationDtosListResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/language-management/languages/all",
  cacheKey: "languageManagementLanguagesAllList",
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguagesListConfig: ICachableRequestConfig<
  LanguageManagementLanguagesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/language-management/languages",
  cacheKey: "languageManagementLanguagesList",
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguagesCreateConfig: ICachableRequestConfig<
  VoloAbpLanguageManagementDtoCreateLanguageDto,
  VoloAbpLanguageManagementDtoLanguageDto
> = {
  url: "/api/language-management/languages",
  cacheKey: "languageManagementLanguagesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguagesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpLanguageManagementDtoLanguageDto
> = {
  url: "/api/language-management/languages/${id}",
  cacheKey: "languageManagementLanguagesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguagesUpdateConfig: ICachableRequestConfig<
  VoloAbpLanguageManagementDtoUpdateLanguageDto,
  VoloAbpLanguageManagementDtoLanguageDto
> = {
  url: "/api/language-management/languages/${id}",
  cacheKey: "languageManagementLanguagesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguagesDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/language-management/languages/${id}",
  cacheKey: "languageManagementLanguagesDelete",
};

export const languageManagementLanguagesSetAsDefaultUpdateConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/language-management/languages/${id}/set-as-default",
  cacheKey: "languageManagementLanguagesSetAsDefaultUpdate",
};

export const languageManagementLanguagesResourcesListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpLanguageManagementDtoLanguageResourceDto[]
> = {
  url: "/api/language-management/languages/resources",
  cacheKey: "languageManagementLanguagesResourcesList",
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguagesCultureListListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpLanguageManagementDtoCultureInfoDto[]
> = {
  url: "/api/language-management/languages/culture-list",
  cacheKey: "languageManagementLanguagesCultureListList",
  responseFormat: EnumResponseFormat.Json,
};

export const languageManagementLanguagesFlagListListConfig: ICachableRequestConfig<undefined, string[]> = {
  url: "/api/language-management/languages/flag-list",
  cacheKey: "languageManagementLanguagesFlagListList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "LanguagesProvider" })
export class LanguagesProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  languageManagementLanguagesAllList = (request: undefined) => {
    return this.get(languageManagementLanguagesAllListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguagesAllList = (request: undefined) => {
    return this.cachableGet(languageManagementLanguagesAllListConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguagesList = (request: LanguageManagementLanguagesListParams) => {
    return this.get(languageManagementLanguagesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguagesList = (request: LanguageManagementLanguagesListParams) => {
    return this.cachableGet(languageManagementLanguagesListConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguagesCreate = (request: VoloAbpLanguageManagementDtoCreateLanguageDto) => {
    return this.post(languageManagementLanguagesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguagesCreate = (request: VoloAbpLanguageManagementDtoCreateLanguageDto) => {
    return this.cachablePost(languageManagementLanguagesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguagesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(languageManagementLanguagesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguagesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(languageManagementLanguagesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguagesUpdate = (request: VoloAbpLanguageManagementDtoUpdateLanguageDto) => {
    return this.put(languageManagementLanguagesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  languageManagementLanguagesDelete = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.delete(languageManagementLanguagesDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  languageManagementLanguagesSetAsDefaultUpdate = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.put(languageManagementLanguagesSetAsDefaultUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  languageManagementLanguagesResourcesList = (request: undefined) => {
    return this.get(languageManagementLanguagesResourcesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguagesResourcesList = (request: undefined) => {
    return this.cachableGet(languageManagementLanguagesResourcesListConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguagesCultureListList = (request: undefined) => {
    return this.get(languageManagementLanguagesCultureListListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguagesCultureListList = (request: undefined) => {
    return this.cachableGet(languageManagementLanguagesCultureListListConfig, request);
  };
  /**
   * No description
   *
   */
  languageManagementLanguagesFlagListList = (request: undefined) => {
    return this.get(languageManagementLanguagesFlagListListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLanguageManagementLanguagesFlagListList = (request: undefined) => {
    return this.cachableGet(languageManagementLanguagesFlagListListConfig, request);
  };
}

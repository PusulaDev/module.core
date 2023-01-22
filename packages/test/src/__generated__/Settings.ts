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
  COMEDLISEXTERNALSettingsParameterSettingsDto,
  COMEDLISEXTERNALSettingsUpdateParameterSettingsDto,
  VoloAbpIdentityIdentitySettingsDto,
} from "./data-contracts";

export const appSettingsParameterListConfig: ICachableRequestConfig<
  undefined,
  COMEDLISEXTERNALSettingsParameterSettingsDto
> = {
  url: "/api/app/settings/parameter",
  cacheKey: "appSettingsParameterList",
  responseFormat: EnumResponseFormat.Json,
};

export const appSettingsParameterCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSettingsUpdateParameterSettingsDto,
  void
> = {
  url: "/api/app/settings/parameter",
  cacheKey: "appSettingsParameterCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identitySettingsListConfig: ICachableRequestConfig<undefined, VoloAbpIdentityIdentitySettingsDto> = {
  url: "/api/identity/settings",
  cacheKey: "identitySettingsList",
  responseFormat: EnumResponseFormat.Json,
};

export const identitySettingsUpdateConfig: ICachableRequestConfig<VoloAbpIdentityIdentitySettingsDto, void> = {
  url: "/api/identity/settings",
  cacheKey: "identitySettingsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

@injectable.provider({ key: "SettingsProvider" })
export class SettingsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  settingsParameterList = (request: undefined) => {
    return this.get(appSettingsParameterListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSettingsParameterList = (request: undefined) => {
    return this.cachableGet(appSettingsParameterListConfig, request);
  };
  /**
   * No description
   *
   */
  settingsParameterCreate = (request: COMEDLISEXTERNALSettingsUpdateParameterSettingsDto) => {
    return this.post(appSettingsParameterCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSettingsParameterCreate = (request: COMEDLISEXTERNALSettingsUpdateParameterSettingsDto) => {
    return this.cachablePost(appSettingsParameterCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identitySettingsList = (request: undefined) => {
    return this.get(identitySettingsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentitySettingsList = (request: undefined) => {
    return this.cachableGet(identitySettingsListConfig, request);
  };
  /**
   * No description
   *
   */
  identitySettingsUpdate = (request: VoloAbpIdentityIdentitySettingsDto) => {
    return this.put(identitySettingsUpdateConfig, request);
  };
}

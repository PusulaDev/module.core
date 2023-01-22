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
  VoloAbpLeptonThemeManagementLeptonThemeSettingsDto,
  VoloAbpLeptonThemeManagementUpdateLeptonThemeSettingsDto,
} from "./data-contracts";

export const leptonThemeManagementSettingsListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpLeptonThemeManagementLeptonThemeSettingsDto
> = {
  url: "/api/lepton-theme-management/settings",
  cacheKey: "leptonThemeManagementSettingsList",
  responseFormat: EnumResponseFormat.Json,
};

export const leptonThemeManagementSettingsUpdateConfig: ICachableRequestConfig<
  VoloAbpLeptonThemeManagementUpdateLeptonThemeSettingsDto,
  void
> = {
  url: "/api/lepton-theme-management/settings",
  cacheKey: "leptonThemeManagementSettingsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

@injectable.provider({ key: "LeptonThemeSettingsProvider" })
export class LeptonThemeSettingsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  leptonThemeManagementSettingsList = (request: undefined) => {
    return this.get(leptonThemeManagementSettingsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLeptonThemeManagementSettingsList = (request: undefined) => {
    return this.cachableGet(leptonThemeManagementSettingsListConfig, request);
  };
  /**
   * No description
   *
   */
  leptonThemeManagementSettingsUpdate = (request: VoloAbpLeptonThemeManagementUpdateLeptonThemeSettingsDto) => {
    return this.put(leptonThemeManagementSettingsUpdateConfig, request);
  };
}

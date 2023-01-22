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
  VoloAbpSettingManagementEmailSettingsDto,
  VoloAbpSettingManagementUpdateEmailSettingsDto,
} from "./data-contracts";

export const settingManagementEmailingListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpSettingManagementEmailSettingsDto
> = {
  url: "/api/setting-management/emailing",
  cacheKey: "settingManagementEmailingList",
  responseFormat: EnumResponseFormat.Json,
};

export const settingManagementEmailingCreateConfig: ICachableRequestConfig<
  VoloAbpSettingManagementUpdateEmailSettingsDto,
  void
> = {
  url: "/api/setting-management/emailing",
  cacheKey: "settingManagementEmailingCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

@injectable.provider({ key: "EmailSettingsProvider" })
export class EmailSettingsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  settingManagementEmailingList = (request: undefined) => {
    return this.get(settingManagementEmailingListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSettingManagementEmailingList = (request: undefined) => {
    return this.cachableGet(settingManagementEmailingListConfig, request);
  };
  /**
   * No description
   *
   */
  settingManagementEmailingCreate = (request: VoloAbpSettingManagementUpdateEmailSettingsDto) => {
    return this.post(settingManagementEmailingCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSettingManagementEmailingCreate = (request: VoloAbpSettingManagementUpdateEmailSettingsDto) => {
    return this.cachablePost(settingManagementEmailingCreateConfig, request);
  };
}

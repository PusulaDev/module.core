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
  VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult,
  VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo,
  VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo,
} from "./data-contracts";

export const accountLoginCreateConfig: ICachableRequestConfig<
  VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo,
  VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult
> = {
  url: "/api/account/login",
  cacheKey: "accountLoginCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const accountLinkLoginCreateConfig: ICachableRequestConfig<
  VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo,
  VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult
> = {
  url: "/api/account/linkLogin",
  cacheKey: "accountLinkLoginCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const accountLogoutListConfig: ICachableRequestConfig<undefined, void> = {
  url: "/api/account/logout",
  cacheKey: "accountLogoutList",
};

export const accountCheckPasswordCreateConfig: ICachableRequestConfig<
  VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo,
  VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult
> = {
  url: "/api/account/checkPassword",
  cacheKey: "accountCheckPasswordCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "LoginProvider" })
export class LoginProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  accountLoginCreate = (request: VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo) => {
    return this.post(accountLoginCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLoginCreate = (request: VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo) => {
    return this.cachablePost(accountLoginCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkLoginCreate = (request: VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo) => {
    return this.post(accountLinkLoginCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkLoginCreate = (request: VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo) => {
    return this.cachablePost(accountLinkLoginCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLogoutList = (request: undefined) => {
    return this.get(accountLogoutListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLogoutList = (request: undefined) => {
    return this.cachableGet(accountLogoutListConfig, request);
  };
  /**
   * No description
   *
   */
  accountCheckPasswordCreate = (request: VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo) => {
    return this.post(accountCheckPasswordCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountCheckPasswordCreate = (request: VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo) => {
    return this.cachablePost(accountCheckPasswordCreateConfig, request);
  };
}

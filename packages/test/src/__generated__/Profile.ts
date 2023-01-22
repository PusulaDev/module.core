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
  AccountMyProfileSetTwoFactorEnabledCreateParams,
  VoloAbpAccountChangePasswordInput,
  VoloAbpAccountProfileDto,
  VoloAbpAccountUpdateProfileDto,
} from "./data-contracts";

export const accountMyProfileListConfig: ICachableRequestConfig<undefined, VoloAbpAccountProfileDto> = {
  url: "/api/account/my-profile",
  cacheKey: "accountMyProfileList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountMyProfileUpdateConfig: ICachableRequestConfig<
  VoloAbpAccountUpdateProfileDto,
  VoloAbpAccountProfileDto
> = {
  url: "/api/account/my-profile",
  cacheKey: "accountMyProfileUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const accountMyProfileChangePasswordCreateConfig: ICachableRequestConfig<
  VoloAbpAccountChangePasswordInput,
  void
> = {
  url: "/api/account/my-profile/change-password",
  cacheKey: "accountMyProfileChangePasswordCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountMyProfileTwoFactorEnabledListConfig: ICachableRequestConfig<undefined, boolean> = {
  url: "/api/account/my-profile/two-factor-enabled",
  cacheKey: "accountMyProfileTwoFactorEnabledList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountMyProfileSetTwoFactorEnabledCreateConfig: ICachableRequestConfig<
  AccountMyProfileSetTwoFactorEnabledCreateParams,
  void
> = {
  url: "/api/account/my-profile/set-two-factor-enabled",
  cacheKey: "accountMyProfileSetTwoFactorEnabledCreate",
};

@injectable.provider({ key: "ProfileProvider" })
export class ProfileProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  accountMyProfileList = (request: undefined) => {
    return this.get(accountMyProfileListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountMyProfileList = (request: undefined) => {
    return this.cachableGet(accountMyProfileListConfig, request);
  };
  /**
   * No description
   *
   */
  accountMyProfileUpdate = (request: VoloAbpAccountUpdateProfileDto) => {
    return this.put(accountMyProfileUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  accountMyProfileChangePasswordCreate = (request: VoloAbpAccountChangePasswordInput) => {
    return this.post(accountMyProfileChangePasswordCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountMyProfileChangePasswordCreate = (request: VoloAbpAccountChangePasswordInput) => {
    return this.cachablePost(accountMyProfileChangePasswordCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountMyProfileTwoFactorEnabledList = (request: undefined) => {
    return this.get(accountMyProfileTwoFactorEnabledListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountMyProfileTwoFactorEnabledList = (request: undefined) => {
    return this.cachableGet(accountMyProfileTwoFactorEnabledListConfig, request);
  };
  /**
   * No description
   *
   */
  accountMyProfileSetTwoFactorEnabledCreate = (request: AccountMyProfileSetTwoFactorEnabledCreateParams) => {
    return this.post(accountMyProfileSetTwoFactorEnabledCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountMyProfileSetTwoFactorEnabledCreate = (request: AccountMyProfileSetTwoFactorEnabledCreateParams) => {
    return this.cachablePost(accountMyProfileSetTwoFactorEnabledCreateConfig, request);
  };
}

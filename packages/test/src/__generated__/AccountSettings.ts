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
  VoloAbpAccountAccountExternalProviderSettingsDto,
  VoloAbpAccountAccountLdapSettingsDto,
  VoloAbpAccountAccountRecaptchaSettingsDto,
  VoloAbpAccountAccountSettingsDto,
  VoloAbpAccountAccountTwoFactorSettingsDto,
  VoloAbpAccountUpdateExternalProviderDto,
} from "./data-contracts";

export const accountAdminSettingsListConfig: ICachableRequestConfig<undefined, VoloAbpAccountAccountSettingsDto> = {
  url: "/api/account-admin/settings",
  cacheKey: "accountAdminSettingsList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountAdminSettingsUpdateConfig: ICachableRequestConfig<VoloAbpAccountAccountSettingsDto, void> = {
  url: "/api/account-admin/settings",
  cacheKey: "accountAdminSettingsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountAdminSettingsLdapListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpAccountAccountLdapSettingsDto
> = {
  url: "/api/account-admin/settings/ldap",
  cacheKey: "accountAdminSettingsLdapList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountAdminSettingsLdapUpdateConfig: ICachableRequestConfig<VoloAbpAccountAccountLdapSettingsDto, void> =
  {
    url: "/api/account-admin/settings/ldap",
    cacheKey: "accountAdminSettingsLdapUpdate",
    headers: { [contentTypeKey]: EnumContentType.Json },
  };

export const accountAdminSettingsTwoFactorListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpAccountAccountTwoFactorSettingsDto
> = {
  url: "/api/account-admin/settings/two-factor",
  cacheKey: "accountAdminSettingsTwoFactorList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountAdminSettingsTwoFactorUpdateConfig: ICachableRequestConfig<
  VoloAbpAccountAccountTwoFactorSettingsDto,
  void
> = {
  url: "/api/account-admin/settings/two-factor",
  cacheKey: "accountAdminSettingsTwoFactorUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountAdminSettingsRecaptchaListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpAccountAccountRecaptchaSettingsDto
> = {
  url: "/api/account-admin/settings/recaptcha",
  cacheKey: "accountAdminSettingsRecaptchaList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountAdminSettingsRecaptchaUpdateConfig: ICachableRequestConfig<
  VoloAbpAccountAccountRecaptchaSettingsDto,
  void
> = {
  url: "/api/account-admin/settings/recaptcha",
  cacheKey: "accountAdminSettingsRecaptchaUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountAdminSettingsExternalProviderListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpAccountAccountExternalProviderSettingsDto
> = {
  url: "/api/account-admin/settings/external-provider",
  cacheKey: "accountAdminSettingsExternalProviderList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountAdminSettingsExternalProviderUpdateConfig: ICachableRequestConfig<
  VoloAbpAccountUpdateExternalProviderDto[],
  void
> = {
  url: "/api/account-admin/settings/external-provider",
  cacheKey: "accountAdminSettingsExternalProviderUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

@injectable.provider({ key: "AccountSettingsProvider" })
export class AccountSettingsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  accountAdminSettingsList = (request: undefined) => {
    return this.get(accountAdminSettingsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountAdminSettingsList = (request: undefined) => {
    return this.cachableGet(accountAdminSettingsListConfig, request);
  };
  /**
   * No description
   *
   */
  accountAdminSettingsUpdate = (request: VoloAbpAccountAccountSettingsDto) => {
    return this.put(accountAdminSettingsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  accountAdminSettingsLdapList = (request: undefined) => {
    return this.get(accountAdminSettingsLdapListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountAdminSettingsLdapList = (request: undefined) => {
    return this.cachableGet(accountAdminSettingsLdapListConfig, request);
  };
  /**
   * No description
   *
   */
  accountAdminSettingsLdapUpdate = (request: VoloAbpAccountAccountLdapSettingsDto) => {
    return this.put(accountAdminSettingsLdapUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  accountAdminSettingsTwoFactorList = (request: undefined) => {
    return this.get(accountAdminSettingsTwoFactorListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountAdminSettingsTwoFactorList = (request: undefined) => {
    return this.cachableGet(accountAdminSettingsTwoFactorListConfig, request);
  };
  /**
   * No description
   *
   */
  accountAdminSettingsTwoFactorUpdate = (request: VoloAbpAccountAccountTwoFactorSettingsDto) => {
    return this.put(accountAdminSettingsTwoFactorUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  accountAdminSettingsRecaptchaList = (request: undefined) => {
    return this.get(accountAdminSettingsRecaptchaListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountAdminSettingsRecaptchaList = (request: undefined) => {
    return this.cachableGet(accountAdminSettingsRecaptchaListConfig, request);
  };
  /**
   * No description
   *
   */
  accountAdminSettingsRecaptchaUpdate = (request: VoloAbpAccountAccountRecaptchaSettingsDto) => {
    return this.put(accountAdminSettingsRecaptchaUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  accountAdminSettingsExternalProviderList = (request: undefined) => {
    return this.get(accountAdminSettingsExternalProviderListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountAdminSettingsExternalProviderList = (request: undefined) => {
    return this.cachableGet(accountAdminSettingsExternalProviderListConfig, request);
  };
  /**
   * No description
   *
   */
  accountAdminSettingsExternalProviderUpdate = (request: VoloAbpAccountUpdateExternalProviderDto[]) => {
    return this.put(accountAdminSettingsExternalProviderUpdateConfig, request);
  };
}

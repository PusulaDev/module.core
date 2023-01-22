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
  AccountExternalProviderByNameListParams,
  VoloAbpAccountExternalProvidersExternalProviderDto,
  VoloAbpAccountExternalProvidersExternalProviderItemWithSecretDto,
} from "./data-contracts";

export const accountExternalProviderListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpAccountExternalProvidersExternalProviderDto
> = {
  url: "/api/account/external-provider",
  cacheKey: "accountExternalProviderList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountExternalProviderByNameListConfig: ICachableRequestConfig<
  AccountExternalProviderByNameListParams,
  VoloAbpAccountExternalProvidersExternalProviderItemWithSecretDto
> = {
  url: "/api/account/external-provider/by-name",
  cacheKey: "accountExternalProviderByNameList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "AccountExternalProviderProvider" })
export class AccountExternalProviderProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  accountExternalProviderList = (request: undefined) => {
    return this.get(accountExternalProviderListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountExternalProviderList = (request: undefined) => {
    return this.cachableGet(accountExternalProviderListConfig, request);
  };
  /**
   * No description
   *
   */
  accountExternalProviderByNameList = (request: AccountExternalProviderByNameListParams) => {
    return this.get(accountExternalProviderByNameListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountExternalProviderByNameList = (request: AccountExternalProviderByNameListParams) => {
    return this.cachableGet(accountExternalProviderByNameListConfig, request);
  };
}

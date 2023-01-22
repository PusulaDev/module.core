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
  IdentityUsersLookupCountListParams,
  IdentityUsersLookupSearchListParams,
  VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpUsersUserData,
} from "./data-contracts";

export const identityUsersLookupDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpUsersUserData
> = {
  url: "/api/identity/users/lookup/${id}",
  cacheKey: "identityUsersLookupDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersLookupByUsernameDetailConfig: ICachableRequestConfig<
  {
    userName: string;
  },
  VoloAbpUsersUserData
> = {
  url: "/api/identity/users/lookup/by-username/${userName}",
  cacheKey: "identityUsersLookupByUsernameDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersLookupSearchListConfig: ICachableRequestConfig<
  IdentityUsersLookupSearchListParams,
  VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/users/lookup/search",
  cacheKey: "identityUsersLookupSearchList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersLookupCountListConfig: ICachableRequestConfig<IdentityUsersLookupCountListParams, number> = {
  url: "/api/identity/users/lookup/count",
  cacheKey: "identityUsersLookupCountList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "UserLookupProvider" })
export class UserLookupProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityUsersLookupDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityUsersLookupDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersLookupDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityUsersLookupDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersLookupByUsernameDetail = (request: { userName: string }) => {
    return this.get(identityUsersLookupByUsernameDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersLookupByUsernameDetail = (request: { userName: string }) => {
    return this.cachableGet(identityUsersLookupByUsernameDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersLookupSearchList = (request: IdentityUsersLookupSearchListParams) => {
    return this.get(identityUsersLookupSearchListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersLookupSearchList = (request: IdentityUsersLookupSearchListParams) => {
    return this.cachableGet(identityUsersLookupSearchListConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersLookupCountList = (request: IdentityUsersLookupCountListParams) => {
    return this.get(identityUsersLookupCountListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersLookupCountList = (request: IdentityUsersLookupCountListParams) => {
    return this.cachableGet(identityUsersLookupCountListConfig, request);
  };
}

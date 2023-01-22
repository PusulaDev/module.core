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
  IdentityServerIdentityResourcesDeleteParams,
  IdentityServerIdentityResourcesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityServerIdentityResourceDtosCreateIdentityResourceDto,
  VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto,
  VoloAbpIdentityServerIdentityResourceDtosUpdateIdentityResourceDto,
} from "./data-contracts";

export const identityServerIdentityResourcesListConfig: ICachableRequestConfig<
  IdentityServerIdentityResourcesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity-server/identity-resources",
  cacheKey: "identityServerIdentityResourcesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerIdentityResourcesCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerIdentityResourceDtosCreateIdentityResourceDto,
  VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto
> = {
  url: "/api/identity-server/identity-resources",
  cacheKey: "identityServerIdentityResourcesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerIdentityResourcesDeleteConfig: ICachableRequestConfig<
  IdentityServerIdentityResourcesDeleteParams,
  void
> = {
  url: "/api/identity-server/identity-resources",
  cacheKey: "identityServerIdentityResourcesDelete",
};

export const identityServerIdentityResourcesAllListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto[]
> = {
  url: "/api/identity-server/identity-resources/all",
  cacheKey: "identityServerIdentityResourcesAllList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerIdentityResourcesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto
> = {
  url: "/api/identity-server/identity-resources/${id}",
  cacheKey: "identityServerIdentityResourcesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerIdentityResourcesUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerIdentityResourceDtosUpdateIdentityResourceDto,
  VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto
> = {
  url: "/api/identity-server/identity-resources/${id}",
  cacheKey: "identityServerIdentityResourcesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerIdentityResourcesCreateStandardResourcesCreateConfig: ICachableRequestConfig<
  undefined,
  void
> = {
  url: "/api/identity-server/identity-resources/create-standard-resources",
  cacheKey: "identityServerIdentityResourcesCreateStandardResourcesCreate",
};

@injectable.provider({ key: "IdentityResourcesProvider" })
export class IdentityResourcesProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityServerIdentityResourcesList = (request: IdentityServerIdentityResourcesListParams) => {
    return this.get(identityServerIdentityResourcesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerIdentityResourcesList = (request: IdentityServerIdentityResourcesListParams) => {
    return this.cachableGet(identityServerIdentityResourcesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerIdentityResourcesCreate = (
    request: VoloAbpIdentityServerIdentityResourceDtosCreateIdentityResourceDto,
  ) => {
    return this.post(identityServerIdentityResourcesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerIdentityResourcesCreate = (
    request: VoloAbpIdentityServerIdentityResourceDtosCreateIdentityResourceDto,
  ) => {
    return this.cachablePost(identityServerIdentityResourcesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerIdentityResourcesDelete = (request: IdentityServerIdentityResourcesDeleteParams) => {
    return this.delete(identityServerIdentityResourcesDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityServerIdentityResourcesAllList = (request: undefined) => {
    return this.get(identityServerIdentityResourcesAllListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerIdentityResourcesAllList = (request: undefined) => {
    return this.cachableGet(identityServerIdentityResourcesAllListConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerIdentityResourcesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityServerIdentityResourcesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerIdentityResourcesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityServerIdentityResourcesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerIdentityResourcesUpdate = (
    request: VoloAbpIdentityServerIdentityResourceDtosUpdateIdentityResourceDto,
  ) => {
    return this.put(identityServerIdentityResourcesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityServerIdentityResourcesCreateStandardResourcesCreate = (request: undefined) => {
    return this.post(identityServerIdentityResourcesCreateStandardResourcesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerIdentityResourcesCreateStandardResourcesCreate = (request: undefined) => {
    return this.cachablePost(identityServerIdentityResourcesCreateStandardResourcesCreateConfig, request);
  };
}

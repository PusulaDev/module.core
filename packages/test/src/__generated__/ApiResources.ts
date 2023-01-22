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
  IdentityServerApiResourcesDeleteParams,
  IdentityServerApiResourcesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto,
  VoloAbpIdentityServerApiResourceDtosCreateApiResourceDto,
  VoloAbpIdentityServerApiResourceDtosUpdateApiResourceDto,
} from "./data-contracts";

export const identityServerApiResourcesListConfig: ICachableRequestConfig<
  IdentityServerApiResourcesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity-server/api-resources",
  cacheKey: "identityServerApiResourcesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiResourcesCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerApiResourceDtosCreateApiResourceDto,
  VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto
> = {
  url: "/api/identity-server/api-resources",
  cacheKey: "identityServerApiResourcesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiResourcesDeleteConfig: ICachableRequestConfig<
  IdentityServerApiResourcesDeleteParams,
  void
> = {
  url: "/api/identity-server/api-resources",
  cacheKey: "identityServerApiResourcesDelete",
};

export const identityServerApiResourcesAllListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto[]
> = {
  url: "/api/identity-server/api-resources/all",
  cacheKey: "identityServerApiResourcesAllList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiResourcesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto
> = {
  url: "/api/identity-server/api-resources/${id}",
  cacheKey: "identityServerApiResourcesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiResourcesUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerApiResourceDtosUpdateApiResourceDto,
  VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto
> = {
  url: "/api/identity-server/api-resources/${id}",
  cacheKey: "identityServerApiResourcesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "ApiResourcesProvider" })
export class ApiResourcesProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityServerApiResourcesList = (request: IdentityServerApiResourcesListParams) => {
    return this.get(identityServerApiResourcesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiResourcesList = (request: IdentityServerApiResourcesListParams) => {
    return this.cachableGet(identityServerApiResourcesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiResourcesCreate = (request: VoloAbpIdentityServerApiResourceDtosCreateApiResourceDto) => {
    return this.post(identityServerApiResourcesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiResourcesCreate = (request: VoloAbpIdentityServerApiResourceDtosCreateApiResourceDto) => {
    return this.cachablePost(identityServerApiResourcesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiResourcesDelete = (request: IdentityServerApiResourcesDeleteParams) => {
    return this.delete(identityServerApiResourcesDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityServerApiResourcesAllList = (request: undefined) => {
    return this.get(identityServerApiResourcesAllListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiResourcesAllList = (request: undefined) => {
    return this.cachableGet(identityServerApiResourcesAllListConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiResourcesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityServerApiResourcesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiResourcesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityServerApiResourcesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiResourcesUpdate = (request: VoloAbpIdentityServerApiResourceDtosUpdateApiResourceDto) => {
    return this.put(identityServerApiResourcesUpdateConfig, request);
  };
}

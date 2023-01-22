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
  IdentityServerApiScopesDeleteParams,
  IdentityServerApiScopesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto,
  VoloAbpIdentityServerApiScopeDtosCreateApiScopeDto,
  VoloAbpIdentityServerApiScopeDtosUpdateApiScopeDto,
} from "./data-contracts";

export const identityServerApiScopesListConfig: ICachableRequestConfig<
  IdentityServerApiScopesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity-server/apiScopes",
  cacheKey: "identityServerApiScopesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiScopesCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerApiScopeDtosCreateApiScopeDto,
  VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto
> = {
  url: "/api/identity-server/apiScopes",
  cacheKey: "identityServerApiScopesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiScopesDeleteConfig: ICachableRequestConfig<IdentityServerApiScopesDeleteParams, void> = {
  url: "/api/identity-server/apiScopes",
  cacheKey: "identityServerApiScopesDelete",
};

export const identityServerApiScopesAllListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto[]
> = {
  url: "/api/identity-server/apiScopes/all",
  cacheKey: "identityServerApiScopesAllList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiScopesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto
> = {
  url: "/api/identity-server/apiScopes/${id}",
  cacheKey: "identityServerApiScopesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerApiScopesUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerApiScopeDtosUpdateApiScopeDto,
  VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto
> = {
  url: "/api/identity-server/apiScopes/${id}",
  cacheKey: "identityServerApiScopesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "ApiScopesProvider" })
export class ApiScopesProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityServerApiScopesList = (request: IdentityServerApiScopesListParams) => {
    return this.get(identityServerApiScopesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiScopesList = (request: IdentityServerApiScopesListParams) => {
    return this.cachableGet(identityServerApiScopesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiScopesCreate = (request: VoloAbpIdentityServerApiScopeDtosCreateApiScopeDto) => {
    return this.post(identityServerApiScopesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiScopesCreate = (request: VoloAbpIdentityServerApiScopeDtosCreateApiScopeDto) => {
    return this.cachablePost(identityServerApiScopesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiScopesDelete = (request: IdentityServerApiScopesDeleteParams) => {
    return this.delete(identityServerApiScopesDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityServerApiScopesAllList = (request: undefined) => {
    return this.get(identityServerApiScopesAllListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiScopesAllList = (request: undefined) => {
    return this.cachableGet(identityServerApiScopesAllListConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiScopesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityServerApiScopesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerApiScopesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityServerApiScopesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerApiScopesUpdate = (request: VoloAbpIdentityServerApiScopeDtosUpdateApiScopeDto) => {
    return this.put(identityServerApiScopesUpdateConfig, request);
  };
}

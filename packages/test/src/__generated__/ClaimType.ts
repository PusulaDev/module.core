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
  IdentityClaimTypesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityClaimTypeDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityClaimTypeDto,
  VoloAbpIdentityCreateClaimTypeDto,
  VoloAbpIdentityUpdateClaimTypeDto,
} from "./data-contracts";

export const identityClaimTypesListConfig: ICachableRequestConfig<
  IdentityClaimTypesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityClaimTypeDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/claim-types",
  cacheKey: "identityClaimTypesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityClaimTypesCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityCreateClaimTypeDto,
  VoloAbpIdentityClaimTypeDto
> = {
  url: "/api/identity/claim-types",
  cacheKey: "identityClaimTypesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityClaimTypesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityClaimTypeDto
> = {
  url: "/api/identity/claim-types/${id}",
  cacheKey: "identityClaimTypesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityClaimTypesUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityUpdateClaimTypeDto,
  VoloAbpIdentityClaimTypeDto
> = {
  url: "/api/identity/claim-types/${id}",
  cacheKey: "identityClaimTypesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityClaimTypesDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/identity/claim-types/${id}",
  cacheKey: "identityClaimTypesDelete",
};

@injectable.provider({ key: "ClaimTypeProvider" })
export class ClaimTypeProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityClaimTypesList = (request: IdentityClaimTypesListParams) => {
    return this.get(identityClaimTypesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityClaimTypesList = (request: IdentityClaimTypesListParams) => {
    return this.cachableGet(identityClaimTypesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityClaimTypesCreate = (request: VoloAbpIdentityCreateClaimTypeDto) => {
    return this.post(identityClaimTypesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityClaimTypesCreate = (request: VoloAbpIdentityCreateClaimTypeDto) => {
    return this.cachablePost(identityClaimTypesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityClaimTypesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityClaimTypesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityClaimTypesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityClaimTypesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityClaimTypesUpdate = (request: VoloAbpIdentityUpdateClaimTypeDto) => {
    return this.put(identityClaimTypesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityClaimTypesDelete = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.delete(identityClaimTypesDeleteConfig, request);
  };
}

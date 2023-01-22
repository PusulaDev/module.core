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
  IdentityRolesListParams,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityClaimTypeDto,
  VoloAbpIdentityIdentityRoleClaimDto,
  VoloAbpIdentityIdentityRoleCreateDto,
  VoloAbpIdentityIdentityRoleDto,
  VoloAbpIdentityIdentityRoleUpdateDto,
} from "./data-contracts";

export const identityRolesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityIdentityRoleDto
> = {
  url: "/api/identity/roles/${id}",
  cacheKey: "identityRolesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityRolesUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityIdentityRoleUpdateDto,
  VoloAbpIdentityIdentityRoleDto
> = {
  url: "/api/identity/roles/${id}",
  cacheKey: "identityRolesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityRolesDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/identity/roles/${id}",
  cacheKey: "identityRolesDelete",
};

export const identityRolesCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityIdentityRoleCreateDto,
  VoloAbpIdentityIdentityRoleDto
> = {
  url: "/api/identity/roles",
  cacheKey: "identityRolesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityRolesListConfig: ICachableRequestConfig<
  IdentityRolesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/roles",
  cacheKey: "identityRolesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityRolesAllListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/roles/all",
  cacheKey: "identityRolesAllList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityRolesClaimsUpdateConfig: ICachableRequestConfig<VoloAbpIdentityIdentityRoleClaimDto[], void> = {
  url: "/api/identity/roles/${id}/claims",
  cacheKey: "identityRolesClaimsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identityRolesClaimsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityIdentityRoleClaimDto[]
> = {
  url: "/api/identity/roles/${id}/claims",
  cacheKey: "identityRolesClaimsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityRolesAllClaimTypesListConfig: ICachableRequestConfig<undefined, VoloAbpIdentityClaimTypeDto[]> = {
  url: "/api/identity/roles/all-claim-types",
  cacheKey: "identityRolesAllClaimTypesList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "RoleProvider" })
export class RoleProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityRolesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityRolesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityRolesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityRolesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityRolesUpdate = (request: VoloAbpIdentityIdentityRoleUpdateDto) => {
    return this.put(identityRolesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityRolesDelete = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.delete(identityRolesDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityRolesCreate = (request: VoloAbpIdentityIdentityRoleCreateDto) => {
    return this.post(identityRolesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityRolesCreate = (request: VoloAbpIdentityIdentityRoleCreateDto) => {
    return this.cachablePost(identityRolesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityRolesList = (request: IdentityRolesListParams) => {
    return this.get(identityRolesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityRolesList = (request: IdentityRolesListParams) => {
    return this.cachableGet(identityRolesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityRolesAllList = (request: undefined) => {
    return this.get(identityRolesAllListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityRolesAllList = (request: undefined) => {
    return this.cachableGet(identityRolesAllListConfig, request);
  };
  /**
   * No description
   *
   */
  identityRolesClaimsUpdate = (request: VoloAbpIdentityIdentityRoleClaimDto[]) => {
    return this.put(identityRolesClaimsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityRolesClaimsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityRolesClaimsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityRolesClaimsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityRolesClaimsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityRolesAllClaimTypesList = (request: undefined) => {
    return this.get(identityRolesAllClaimTypesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityRolesAllClaimTypesList = (request: undefined) => {
    return this.cachableGet(identityRolesAllClaimTypesListConfig, request);
  };
}

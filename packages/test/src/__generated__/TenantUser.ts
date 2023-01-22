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
  AppTenantUsersListParams,
  COMEDLISEXTERNALTenantUsersTenantUserCreateDto,
  COMEDLISEXTERNALTenantUsersTenantUserDto,
  COMEDLISEXTERNALTenantUsersTenantUserUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantUsersTenantUserDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTenantUsersListConfig: ICachableRequestConfig<
  AppTenantUsersListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantUsersTenantUserDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/tenant-users",
  cacheKey: "appTenantUsersList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantUsersCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTenantUsersTenantUserCreateDto,
  COMEDLISEXTERNALTenantUsersTenantUserDto
> = {
  url: "/api/app/tenant-users",
  cacheKey: "appTenantUsersCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantUsersDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTenantUsersTenantUserDto
> = {
  url: "/api/app/tenant-users/${id}",
  cacheKey: "appTenantUsersDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantUsersUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTenantUsersTenantUserUpdateDto,
  COMEDLISEXTERNALTenantUsersTenantUserDto
> = {
  url: "/api/app/tenant-users/${id}",
  cacheKey: "appTenantUsersUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantUsersDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/tenant-users/${id}",
  cacheKey: "appTenantUsersDelete",
};

export const appTenantUsersByTenantIdUpdateConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    tenantId: number;
  },
  COMEDLISEXTERNALTenantUsersTenantUserDto
> = {
  url: "/api/app/tenant-users/by-tenant-id/${tenantId}",
  cacheKey: "appTenantUsersByTenantIdUpdate",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantUsersByUserIdUpdateConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    userId: string;
  },
  COMEDLISEXTERNALTenantUsersTenantUserDto
> = {
  url: "/api/app/tenant-users/by-user-id/${userId}",
  cacheKey: "appTenantUsersByUserIdUpdate",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "TenantUserProvider" })
export class TenantUserProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  tenantUsersList = (request: AppTenantUsersListParams) => {
    return this.get(appTenantUsersListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantUsersList = (request: AppTenantUsersListParams) => {
    return this.cachableGet(appTenantUsersListConfig, request);
  };
  /**
   * No description
   *
   */
  tenantUsersCreate = (request: COMEDLISEXTERNALTenantUsersTenantUserCreateDto) => {
    return this.post(appTenantUsersCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantUsersCreate = (request: COMEDLISEXTERNALTenantUsersTenantUserCreateDto) => {
    return this.cachablePost(appTenantUsersCreateConfig, request);
  };
  /**
   * No description
   *
   */
  tenantUsersDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTenantUsersDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantUsersDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTenantUsersDetailConfig, request);
  };
  /**
   * No description
   *
   */
  tenantUsersUpdate = (request: COMEDLISEXTERNALTenantUsersTenantUserUpdateDto) => {
    return this.put(appTenantUsersUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  tenantUsersDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appTenantUsersDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  tenantUsersByTenantIdUpdate = (request: {
    /** @format int32 */
    tenantId: number;
  }) => {
    return this.put(appTenantUsersByTenantIdUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  tenantUsersByUserIdUpdate = (request: {
    /** @format uuid */
    userId: string;
  }) => {
    return this.put(appTenantUsersByUserIdUpdateConfig, request);
  };
}

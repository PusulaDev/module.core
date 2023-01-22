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
  AppTenantsListParams,
  COMEDLISEXTERNALTenantsTenantCreateDto,
  COMEDLISEXTERNALTenantsTenantDto,
  COMEDLISEXTERNALTenantsTenantUpdateDto,
  SaasTenantsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantsTenantDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosSaasTenantDtoVoloSaasHostApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloSaasHostDtosEditionLookupDto,
  VoloSaasHostDtosSaasTenantConnectionStringsDto,
  VoloSaasHostDtosSaasTenantCreateDto,
  VoloSaasHostDtosSaasTenantDatabasesDto,
  VoloSaasHostDtosSaasTenantDto,
  VoloSaasHostDtosSaasTenantUpdateDto,
} from "./data-contracts";

export const appTenantsListConfig: ICachableRequestConfig<
  AppTenantsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantsTenantDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/tenants",
  cacheKey: "appTenantsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTenantsTenantCreateDto,
  COMEDLISEXTERNALTenantsTenantDto
> = {
  url: "/api/app/tenants",
  cacheKey: "appTenantsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantsDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTenantsTenantDto
> = {
  url: "/api/app/tenants/${id}",
  cacheKey: "appTenantsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTenantsTenantUpdateDto,
  COMEDLISEXTERNALTenantsTenantDto
> = {
  url: "/api/app/tenants/${id}",
  cacheKey: "appTenantsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantsDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/tenants/${id}",
  cacheKey: "appTenantsDelete",
};

export const saasTenantsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloSaasHostDtosSaasTenantDto
> = {
  url: "/api/saas/tenants/${id}",
  cacheKey: "saasTenantsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const saasTenantsUpdateConfig: ICachableRequestConfig<
  VoloSaasHostDtosSaasTenantUpdateDto,
  VoloSaasHostDtosSaasTenantDto
> = {
  url: "/api/saas/tenants/${id}",
  cacheKey: "saasTenantsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const saasTenantsDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/saas/tenants/${id}",
  cacheKey: "saasTenantsDelete",
};

export const saasTenantsListConfig: ICachableRequestConfig<
  SaasTenantsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosSaasTenantDtoVoloSaasHostApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/saas/tenants",
  cacheKey: "saasTenantsList",
  responseFormat: EnumResponseFormat.Json,
};

export const saasTenantsCreateConfig: ICachableRequestConfig<
  VoloSaasHostDtosSaasTenantCreateDto,
  VoloSaasHostDtosSaasTenantDto
> = {
  url: "/api/saas/tenants",
  cacheKey: "saasTenantsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const saasTenantsDatabasesListConfig: ICachableRequestConfig<undefined, VoloSaasHostDtosSaasTenantDatabasesDto> =
  {
    url: "/api/saas/tenants/databases",
    cacheKey: "saasTenantsDatabasesList",
    responseFormat: EnumResponseFormat.Json,
  };

export const saasTenantsConnectionStringsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloSaasHostDtosSaasTenantConnectionStringsDto
> = {
  url: "/api/saas/tenants/${id}/connection-strings",
  cacheKey: "saasTenantsConnectionStringsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const saasTenantsConnectionStringsUpdateConfig: ICachableRequestConfig<
  VoloSaasHostDtosSaasTenantConnectionStringsDto,
  void
> = {
  url: "/api/saas/tenants/${id}/connection-strings",
  cacheKey: "saasTenantsConnectionStringsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const saasTenantsApplyDatabaseMigrationsCreateConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/saas/tenants/${id}/apply-database-migrations",
  cacheKey: "saasTenantsApplyDatabaseMigrationsCreate",
};

export const saasTenantsLookupEditionsListConfig: ICachableRequestConfig<
  undefined,
  VoloSaasHostDtosEditionLookupDto[]
> = {
  url: "/api/saas/tenants/lookup/editions",
  cacheKey: "saasTenantsLookupEditionsList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "TenantProvider" })
export class TenantProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  tenantsList = (request: AppTenantsListParams) => {
    return this.get(appTenantsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantsList = (request: AppTenantsListParams) => {
    return this.cachableGet(appTenantsListConfig, request);
  };
  /**
   * No description
   *
   */
  tenantsCreate = (request: COMEDLISEXTERNALTenantsTenantCreateDto) => {
    return this.post(appTenantsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantsCreate = (request: COMEDLISEXTERNALTenantsTenantCreateDto) => {
    return this.cachablePost(appTenantsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  tenantsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTenantsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTenantsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  tenantsUpdate = (request: COMEDLISEXTERNALTenantsTenantUpdateDto) => {
    return this.put(appTenantsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  tenantsDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appTenantsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  saasTenantsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(saasTenantsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasTenantsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(saasTenantsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  saasTenantsUpdate = (request: VoloSaasHostDtosSaasTenantUpdateDto) => {
    return this.put(saasTenantsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  saasTenantsDelete = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.delete(saasTenantsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  saasTenantsList = (request: SaasTenantsListParams) => {
    return this.get(saasTenantsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasTenantsList = (request: SaasTenantsListParams) => {
    return this.cachableGet(saasTenantsListConfig, request);
  };
  /**
   * No description
   *
   */
  saasTenantsCreate = (request: VoloSaasHostDtosSaasTenantCreateDto) => {
    return this.post(saasTenantsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasTenantsCreate = (request: VoloSaasHostDtosSaasTenantCreateDto) => {
    return this.cachablePost(saasTenantsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  saasTenantsDatabasesList = (request: undefined) => {
    return this.get(saasTenantsDatabasesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasTenantsDatabasesList = (request: undefined) => {
    return this.cachableGet(saasTenantsDatabasesListConfig, request);
  };
  /**
   * No description
   *
   */
  saasTenantsConnectionStringsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(saasTenantsConnectionStringsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasTenantsConnectionStringsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(saasTenantsConnectionStringsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  saasTenantsConnectionStringsUpdate = (request: VoloSaasHostDtosSaasTenantConnectionStringsDto) => {
    return this.put(saasTenantsConnectionStringsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  saasTenantsApplyDatabaseMigrationsCreate = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.post(saasTenantsApplyDatabaseMigrationsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasTenantsApplyDatabaseMigrationsCreate = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachablePost(saasTenantsApplyDatabaseMigrationsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  saasTenantsLookupEditionsList = (request: undefined) => {
    return this.get(saasTenantsLookupEditionsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasTenantsLookupEditionsList = (request: undefined) => {
    return this.cachableGet(saasTenantsLookupEditionsListConfig, request);
  };
}

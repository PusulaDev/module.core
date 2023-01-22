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
  AppTenantTestPoolsListParams,
  AppTenantTestPoolsTestPoolLookupListParams,
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolCreateDto,
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolDto,
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolUpdateDto,
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolWithNavigationPropertiesDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemInt32SystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantTestPoolsTenantTestPoolWithNavigationPropertiesDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTenantTestPoolsListConfig: ICachableRequestConfig<
  AppTenantTestPoolsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantTestPoolsTenantTestPoolWithNavigationPropertiesDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/tenant-test-pools",
  cacheKey: "appTenantTestPoolsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantTestPoolsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolCreateDto,
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolDto
> = {
  url: "/api/app/tenant-test-pools",
  cacheKey: "appTenantTestPoolsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantTestPoolsWithNavigationPropertiesDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolWithNavigationPropertiesDto
> = {
  url: "/api/app/tenant-test-pools/with-navigation-properties/${id}",
  cacheKey: "appTenantTestPoolsWithNavigationPropertiesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantTestPoolsDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolDto
> = {
  url: "/api/app/tenant-test-pools/${id}",
  cacheKey: "appTenantTestPoolsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantTestPoolsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolUpdateDto,
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolDto
> = {
  url: "/api/app/tenant-test-pools/${id}",
  cacheKey: "appTenantTestPoolsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantTestPoolsDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/tenant-test-pools/${id}",
  cacheKey: "appTenantTestPoolsDelete",
};

export const appTenantTestPoolsByTenantIdUpdateConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    tenantId: number;
  },
  COMEDLISEXTERNALTenantTestPoolsTenantTestPoolDto
> = {
  url: "/api/app/tenant-test-pools/by-tenant-id/${tenantId}",
  cacheKey: "appTenantTestPoolsByTenantIdUpdate",
  responseFormat: EnumResponseFormat.Json,
};

export const appTenantTestPoolsTestPoolLookupListConfig: ICachableRequestConfig<
  AppTenantTestPoolsTestPoolLookupListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemInt32SystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/tenant-test-pools/test-pool-lookup",
  cacheKey: "appTenantTestPoolsTestPoolLookupList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "TenantTestPoolProvider" })
export class TenantTestPoolProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  tenantTestPoolsList = (request: AppTenantTestPoolsListParams) => {
    return this.get(appTenantTestPoolsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantTestPoolsList = (request: AppTenantTestPoolsListParams) => {
    return this.cachableGet(appTenantTestPoolsListConfig, request);
  };
  /**
   * No description
   *
   */
  tenantTestPoolsCreate = (request: COMEDLISEXTERNALTenantTestPoolsTenantTestPoolCreateDto) => {
    return this.post(appTenantTestPoolsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantTestPoolsCreate = (request: COMEDLISEXTERNALTenantTestPoolsTenantTestPoolCreateDto) => {
    return this.cachablePost(appTenantTestPoolsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  tenantTestPoolsWithNavigationPropertiesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTenantTestPoolsWithNavigationPropertiesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantTestPoolsWithNavigationPropertiesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTenantTestPoolsWithNavigationPropertiesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  tenantTestPoolsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTenantTestPoolsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantTestPoolsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTenantTestPoolsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  tenantTestPoolsUpdate = (request: COMEDLISEXTERNALTenantTestPoolsTenantTestPoolUpdateDto) => {
    return this.put(appTenantTestPoolsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  tenantTestPoolsDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appTenantTestPoolsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  tenantTestPoolsByTenantIdUpdate = (request: {
    /** @format int32 */
    tenantId: number;
  }) => {
    return this.put(appTenantTestPoolsByTenantIdUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  tenantTestPoolsTestPoolLookupList = (request: AppTenantTestPoolsTestPoolLookupListParams) => {
    return this.get(appTenantTestPoolsTestPoolLookupListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTenantTestPoolsTestPoolLookupList = (request: AppTenantTestPoolsTestPoolLookupListParams) => {
    return this.cachableGet(appTenantTestPoolsTestPoolLookupListConfig, request);
  };
}

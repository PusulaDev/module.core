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
  AppTestPoolItemsListParams,
  AppTestPoolItemsTestPoolLookupListParams,
  COMEDLISEXTERNALTestPoolItemsSaveTestPoolItemDto,
  COMEDLISEXTERNALTestPoolItemsTestPoolItemCreateDto,
  COMEDLISEXTERNALTestPoolItemsTestPoolItemDto,
  COMEDLISEXTERNALTestPoolItemsTestPoolItemUpdateDto,
  COMEDLISEXTERNALTestPoolItemsTestPoolItemWithNavigationPropertiesDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemInt32SystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestPoolItemsTestPoolItemWithNavigationPropertiesDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestPoolItemsListConfig: ICachableRequestConfig<
  AppTestPoolItemsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestPoolItemsTestPoolItemWithNavigationPropertiesDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/test-pool-items",
  cacheKey: "appTestPoolItemsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolItemsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestPoolItemsTestPoolItemCreateDto,
  COMEDLISEXTERNALTestPoolItemsTestPoolItemDto
> = {
  url: "/api/app/test-pool-items",
  cacheKey: "appTestPoolItemsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolItemsWithNavigationPropertiesDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTestPoolItemsTestPoolItemWithNavigationPropertiesDto
> = {
  url: "/api/app/test-pool-items/with-navigation-properties/${id}",
  cacheKey: "appTestPoolItemsWithNavigationPropertiesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolItemsDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTestPoolItemsTestPoolItemDto
> = {
  url: "/api/app/test-pool-items/${id}",
  cacheKey: "appTestPoolItemsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolItemsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestPoolItemsTestPoolItemUpdateDto,
  COMEDLISEXTERNALTestPoolItemsTestPoolItemDto
> = {
  url: "/api/app/test-pool-items/${id}",
  cacheKey: "appTestPoolItemsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolItemsDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/test-pool-items/${id}",
  cacheKey: "appTestPoolItemsDelete",
};

export const appTestPoolItemsByTestPoolIdUpdateConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    testPoolId: number;
  },
  COMEDLISEXTERNALTestPoolItemsTestPoolItemDto[]
> = {
  url: "/api/app/test-pool-items/by-test-pool-id/${testPoolId}",
  cacheKey: "appTestPoolItemsByTestPoolIdUpdate",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolItemsTestPoolLookupListConfig: ICachableRequestConfig<
  AppTestPoolItemsTestPoolLookupListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemInt32SystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/test-pool-items/test-pool-lookup",
  cacheKey: "appTestPoolItemsTestPoolLookupList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolItemsSaveTestPoolItemCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestPoolItemsSaveTestPoolItemDto,
  COMEDLISEXTERNALTestPoolItemsTestPoolItemDto[]
> = {
  url: "/api/app/test-pool-items/save-test-pool-item",
  cacheKey: "appTestPoolItemsSaveTestPoolItemCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "TestPoolItemProvider" })
export class TestPoolItemProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testPoolItemsList = (request: AppTestPoolItemsListParams) => {
    return this.get(appTestPoolItemsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolItemsList = (request: AppTestPoolItemsListParams) => {
    return this.cachableGet(appTestPoolItemsListConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolItemsCreate = (request: COMEDLISEXTERNALTestPoolItemsTestPoolItemCreateDto) => {
    return this.post(appTestPoolItemsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolItemsCreate = (request: COMEDLISEXTERNALTestPoolItemsTestPoolItemCreateDto) => {
    return this.cachablePost(appTestPoolItemsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolItemsWithNavigationPropertiesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTestPoolItemsWithNavigationPropertiesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolItemsWithNavigationPropertiesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTestPoolItemsWithNavigationPropertiesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolItemsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTestPoolItemsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolItemsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTestPoolItemsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolItemsUpdate = (request: COMEDLISEXTERNALTestPoolItemsTestPoolItemUpdateDto) => {
    return this.put(appTestPoolItemsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testPoolItemsDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appTestPoolItemsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  testPoolItemsByTestPoolIdUpdate = (request: {
    /** @format int32 */
    testPoolId: number;
  }) => {
    return this.put(appTestPoolItemsByTestPoolIdUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testPoolItemsTestPoolLookupList = (request: AppTestPoolItemsTestPoolLookupListParams) => {
    return this.get(appTestPoolItemsTestPoolLookupListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolItemsTestPoolLookupList = (request: AppTestPoolItemsTestPoolLookupListParams) => {
    return this.cachableGet(appTestPoolItemsTestPoolLookupListConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolItemsSaveTestPoolItemCreate = (request: COMEDLISEXTERNALTestPoolItemsSaveTestPoolItemDto) => {
    return this.post(appTestPoolItemsSaveTestPoolItemCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolItemsSaveTestPoolItemCreate = (request: COMEDLISEXTERNALTestPoolItemsSaveTestPoolItemDto) => {
    return this.cachablePost(appTestPoolItemsSaveTestPoolItemCreateConfig, request);
  };
}

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
  AppTestPoolsListParams,
  COMEDLISEXTERNALTestPoolsTestPoolCreateDto,
  COMEDLISEXTERNALTestPoolsTestPoolDto,
  COMEDLISEXTERNALTestPoolsTestPoolUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestPoolsTestPoolDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestPoolsListConfig: ICachableRequestConfig<
  AppTestPoolsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestPoolsTestPoolDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/test-pools",
  cacheKey: "appTestPoolsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestPoolsTestPoolCreateDto,
  COMEDLISEXTERNALTestPoolsTestPoolDto
> = {
  url: "/api/app/test-pools",
  cacheKey: "appTestPoolsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolsDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTestPoolsTestPoolDto
> = {
  url: "/api/app/test-pools/${id}",
  cacheKey: "appTestPoolsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestPoolsTestPoolUpdateDto,
  COMEDLISEXTERNALTestPoolsTestPoolDto
> = {
  url: "/api/app/test-pools/${id}",
  cacheKey: "appTestPoolsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestPoolsDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/test-pools/${id}",
  cacheKey: "appTestPoolsDelete",
};

@injectable.provider({ key: "TestPoolProvider" })
export class TestPoolProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testPoolsList = (request: AppTestPoolsListParams) => {
    return this.get(appTestPoolsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolsList = (request: AppTestPoolsListParams) => {
    return this.cachableGet(appTestPoolsListConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolsCreate = (request: COMEDLISEXTERNALTestPoolsTestPoolCreateDto) => {
    return this.post(appTestPoolsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolsCreate = (request: COMEDLISEXTERNALTestPoolsTestPoolCreateDto) => {
    return this.cachablePost(appTestPoolsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTestPoolsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestPoolsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTestPoolsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testPoolsUpdate = (request: COMEDLISEXTERNALTestPoolsTestPoolUpdateDto) => {
    return this.put(appTestPoolsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testPoolsDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appTestPoolsDeleteConfig, request);
  };
}

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
  AppTestProcessesListParams,
  COMEDLISEXTERNALTestProcessesTestProcessCreateDto,
  COMEDLISEXTERNALTestProcessesTestProcessDto,
  COMEDLISEXTERNALTestProcessesTestProcessUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestProcessesTestProcessDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestProcessesListConfig: ICachableRequestConfig<
  AppTestProcessesListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestProcessesTestProcessDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/test-processes",
  cacheKey: "appTestProcessesList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessesCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestProcessesTestProcessCreateDto,
  COMEDLISEXTERNALTestProcessesTestProcessDto
> = {
  url: "/api/app/test-processes",
  cacheKey: "appTestProcessesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessesDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTestProcessesTestProcessDto
> = {
  url: "/api/app/test-processes/${id}",
  cacheKey: "appTestProcessesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessesUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestProcessesTestProcessUpdateDto,
  COMEDLISEXTERNALTestProcessesTestProcessDto
> = {
  url: "/api/app/test-processes/${id}",
  cacheKey: "appTestProcessesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessesDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/test-processes/${id}",
  cacheKey: "appTestProcessesDelete",
};

@injectable.provider({ key: "TestProcessProvider" })
export class TestProcessProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testProcessesList = (request: AppTestProcessesListParams) => {
    return this.get(appTestProcessesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestProcessesList = (request: AppTestProcessesListParams) => {
    return this.cachableGet(appTestProcessesListConfig, request);
  };
  /**
   * No description
   *
   */
  testProcessesCreate = (request: COMEDLISEXTERNALTestProcessesTestProcessCreateDto) => {
    return this.post(appTestProcessesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestProcessesCreate = (request: COMEDLISEXTERNALTestProcessesTestProcessCreateDto) => {
    return this.cachablePost(appTestProcessesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  testProcessesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTestProcessesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestProcessesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTestProcessesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testProcessesUpdate = (request: COMEDLISEXTERNALTestProcessesTestProcessUpdateDto) => {
    return this.put(appTestProcessesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testProcessesDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appTestProcessesDeleteConfig, request);
  };
}

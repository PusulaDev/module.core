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
  AppTestProcessStatusesListParams,
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusCreateDto,
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDto,
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestProcessStatusesListConfig: ICachableRequestConfig<
  AppTestProcessStatusesListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/test-process-statuses",
  cacheKey: "appTestProcessStatusesList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessStatusesCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusCreateDto,
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDto
> = {
  url: "/api/app/test-process-statuses",
  cacheKey: "appTestProcessStatusesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessStatusesDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDto
> = {
  url: "/api/app/test-process-statuses/${id}",
  cacheKey: "appTestProcessStatusesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessStatusesUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusUpdateDto,
  COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDto
> = {
  url: "/api/app/test-process-statuses/${id}",
  cacheKey: "appTestProcessStatusesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestProcessStatusesDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/test-process-statuses/${id}",
  cacheKey: "appTestProcessStatusesDelete",
};

@injectable.provider({ key: "TestProcessStatusProvider" })
export class TestProcessStatusProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testProcessStatusesList = (request: AppTestProcessStatusesListParams) => {
    return this.get(appTestProcessStatusesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestProcessStatusesList = (request: AppTestProcessStatusesListParams) => {
    return this.cachableGet(appTestProcessStatusesListConfig, request);
  };
  /**
   * No description
   *
   */
  testProcessStatusesCreate = (request: COMEDLISEXTERNALTestProcessStatusesTestProcessStatusCreateDto) => {
    return this.post(appTestProcessStatusesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestProcessStatusesCreate = (request: COMEDLISEXTERNALTestProcessStatusesTestProcessStatusCreateDto) => {
    return this.cachablePost(appTestProcessStatusesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  testProcessStatusesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTestProcessStatusesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestProcessStatusesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTestProcessStatusesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testProcessStatusesUpdate = (request: COMEDLISEXTERNALTestProcessStatusesTestProcessStatusUpdateDto) => {
    return this.put(appTestProcessStatusesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testProcessStatusesDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appTestProcessStatusesDeleteConfig, request);
  };
}

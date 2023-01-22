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
  AppSampleProcessesListParams,
  COMEDLISEXTERNALSampleProcessesResultModelDto,
  COMEDLISEXTERNALSampleProcessesSampleProcessCreateDto,
  COMEDLISEXTERNALSampleProcessesSampleProcessDto,
  COMEDLISEXTERNALSampleProcessesSampleProcessUpdateDto,
  COMEDLISEXTERNALSampleProcessesSaveSampleDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleProcessesSampleProcessDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appSampleProcessesListConfig: ICachableRequestConfig<
  AppSampleProcessesListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleProcessesSampleProcessDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/sample-processes",
  cacheKey: "appSampleProcessesList",
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessesCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSampleProcessesSampleProcessCreateDto,
  COMEDLISEXTERNALSampleProcessesSampleProcessDto
> = {
  url: "/api/app/sample-processes",
  cacheKey: "appSampleProcessesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessesDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALSampleProcessesSampleProcessDto
> = {
  url: "/api/app/sample-processes/${id}",
  cacheKey: "appSampleProcessesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessesUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSampleProcessesSampleProcessUpdateDto,
  COMEDLISEXTERNALSampleProcessesSampleProcessDto
> = {
  url: "/api/app/sample-processes/${id}",
  cacheKey: "appSampleProcessesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessesDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/sample-processes/${id}",
  cacheKey: "appSampleProcessesDelete",
};

export const appSampleProcessesCreateSampleCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSampleProcessesSaveSampleDto,
  COMEDLISEXTERNALSampleProcessesResultModelDto
> = {
  url: "/api/app/sample-processes/CreateSample",
  cacheKey: "appSampleProcessesCreateSampleCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessesRemoveSampleUpdateConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALSampleProcessesSampleProcessDto
> = {
  url: "/api/app/sample-processes/remove-sample/${id}",
  cacheKey: "appSampleProcessesRemoveSampleUpdate",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "SampleProcessProvider" })
export class SampleProcessProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  sampleProcessesList = (request: AppSampleProcessesListParams) => {
    return this.get(appSampleProcessesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleProcessesList = (request: AppSampleProcessesListParams) => {
    return this.cachableGet(appSampleProcessesListConfig, request);
  };
  /**
   * No description
   *
   */
  sampleProcessesCreate = (request: COMEDLISEXTERNALSampleProcessesSampleProcessCreateDto) => {
    return this.post(appSampleProcessesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleProcessesCreate = (request: COMEDLISEXTERNALSampleProcessesSampleProcessCreateDto) => {
    return this.cachablePost(appSampleProcessesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  sampleProcessesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appSampleProcessesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleProcessesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appSampleProcessesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  sampleProcessesUpdate = (request: COMEDLISEXTERNALSampleProcessesSampleProcessUpdateDto) => {
    return this.put(appSampleProcessesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  sampleProcessesDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appSampleProcessesDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  sampleProcessesCreateSampleCreate = (request: COMEDLISEXTERNALSampleProcessesSaveSampleDto) => {
    return this.post(appSampleProcessesCreateSampleCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleProcessesCreateSampleCreate = (request: COMEDLISEXTERNALSampleProcessesSaveSampleDto) => {
    return this.cachablePost(appSampleProcessesCreateSampleCreateConfig, request);
  };
  /**
   * No description
   *
   */
  sampleProcessesRemoveSampleUpdate = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.put(appSampleProcessesRemoveSampleUpdateConfig, request);
  };
}

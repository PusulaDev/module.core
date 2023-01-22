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
  AppSampleProcessStatusesListParams,
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusCreateDto,
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDto,
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appSampleProcessStatusesListConfig: ICachableRequestConfig<
  AppSampleProcessStatusesListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/sample-process-statuses",
  cacheKey: "appSampleProcessStatusesList",
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessStatusesCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusCreateDto,
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDto
> = {
  url: "/api/app/sample-process-statuses",
  cacheKey: "appSampleProcessStatusesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessStatusesDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDto
> = {
  url: "/api/app/sample-process-statuses/${id}",
  cacheKey: "appSampleProcessStatusesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessStatusesUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusUpdateDto,
  COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDto
> = {
  url: "/api/app/sample-process-statuses/${id}",
  cacheKey: "appSampleProcessStatusesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleProcessStatusesDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/sample-process-statuses/${id}",
  cacheKey: "appSampleProcessStatusesDelete",
};

@injectable.provider({ key: "SampleProcessStatusProvider" })
export class SampleProcessStatusProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  sampleProcessStatusesList = (request: AppSampleProcessStatusesListParams) => {
    return this.get(appSampleProcessStatusesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleProcessStatusesList = (request: AppSampleProcessStatusesListParams) => {
    return this.cachableGet(appSampleProcessStatusesListConfig, request);
  };
  /**
   * No description
   *
   */
  sampleProcessStatusesCreate = (request: COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusCreateDto) => {
    return this.post(appSampleProcessStatusesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleProcessStatusesCreate = (
    request: COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusCreateDto,
  ) => {
    return this.cachablePost(appSampleProcessStatusesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  sampleProcessStatusesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appSampleProcessStatusesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleProcessStatusesDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appSampleProcessStatusesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  sampleProcessStatusesUpdate = (request: COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusUpdateDto) => {
    return this.put(appSampleProcessStatusesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  sampleProcessStatusesDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appSampleProcessStatusesDeleteConfig, request);
  };
}

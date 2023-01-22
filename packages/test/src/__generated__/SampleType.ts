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
  AppSampleTypesListParams,
  AppSampleTypesSampleTypeLookupListParams,
  COMEDLISEXTERNALSampleTypesSampleTypeCreateDto,
  COMEDLISEXTERNALSampleTypesSampleTypeDto,
  COMEDLISEXTERNALSampleTypesSampleTypeUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleTypesSampleTypeDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appSampleTypesListConfig: ICachableRequestConfig<
  AppSampleTypesListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleTypesSampleTypeDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/sampleTypes",
  cacheKey: "appSampleTypesList",
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleTypesCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSampleTypesSampleTypeCreateDto,
  COMEDLISEXTERNALSampleTypesSampleTypeDto
> = {
  url: "/api/app/sampleTypes",
  cacheKey: "appSampleTypesCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleTypesSampleTypeLookupListConfig: ICachableRequestConfig<
  AppSampleTypesSampleTypeLookupListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/sampleTypes/sample-type-lookup",
  cacheKey: "appSampleTypesSampleTypeLookupList",
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleTypesDetailConfig: ICachableRequestConfig<
  {
    id: string;
  },
  COMEDLISEXTERNALSampleTypesSampleTypeDto
> = {
  url: "/api/app/sampleTypes/${id}",
  cacheKey: "appSampleTypesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleTypesUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALSampleTypesSampleTypeUpdateDto,
  COMEDLISEXTERNALSampleTypesSampleTypeDto
> = {
  url: "/api/app/sampleTypes/${id}",
  cacheKey: "appSampleTypesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appSampleTypesDeleteConfig: ICachableRequestConfig<
  {
    id: string;
  },
  void
> = {
  url: "/api/app/sampleTypes/${id}",
  cacheKey: "appSampleTypesDelete",
};

@injectable.provider({ key: "SampleTypeProvider" })
export class SampleTypeProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  sampleTypesList = (request: AppSampleTypesListParams) => {
    return this.get(appSampleTypesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleTypesList = (request: AppSampleTypesListParams) => {
    return this.cachableGet(appSampleTypesListConfig, request);
  };
  /**
   * No description
   *
   */
  sampleTypesCreate = (request: COMEDLISEXTERNALSampleTypesSampleTypeCreateDto) => {
    return this.post(appSampleTypesCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleTypesCreate = (request: COMEDLISEXTERNALSampleTypesSampleTypeCreateDto) => {
    return this.cachablePost(appSampleTypesCreateConfig, request);
  };
  /**
   * No description
   *
   */
  sampleTypesSampleTypeLookupList = (request: AppSampleTypesSampleTypeLookupListParams) => {
    return this.get(appSampleTypesSampleTypeLookupListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleTypesSampleTypeLookupList = (request: AppSampleTypesSampleTypeLookupListParams) => {
    return this.cachableGet(appSampleTypesSampleTypeLookupListConfig, request);
  };
  /**
   * No description
   *
   */
  sampleTypesDetail = (request: { id: string }) => {
    return this.get(appSampleTypesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSampleTypesDetail = (request: { id: string }) => {
    return this.cachableGet(appSampleTypesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  sampleTypesUpdate = (request: COMEDLISEXTERNALSampleTypesSampleTypeUpdateDto) => {
    return this.put(appSampleTypesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  sampleTypesDelete = (request: { id: string }) => {
    return this.delete(appSampleTypesDeleteConfig, request);
  };
}

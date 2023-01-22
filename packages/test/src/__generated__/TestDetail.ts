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
  AppTestDetailsListParams,
  COMEDLISEXTERNALTestDetailsTestDetailCreateDto,
  COMEDLISEXTERNALTestDetailsTestDetailDto,
  COMEDLISEXTERNALTestDetailsTestDetailUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestDetailsTestDetailDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestDetailsListConfig: ICachableRequestConfig<
  AppTestDetailsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestDetailsTestDetailDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/test-details",
  cacheKey: "appTestDetailsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestDetailsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestDetailsTestDetailCreateDto,
  COMEDLISEXTERNALTestDetailsTestDetailDto
> = {
  url: "/api/app/test-details",
  cacheKey: "appTestDetailsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestDetailsDetailConfig: ICachableRequestConfig<
  {
    id: string;
  },
  COMEDLISEXTERNALTestDetailsTestDetailDto
> = {
  url: "/api/app/test-details/${id}",
  cacheKey: "appTestDetailsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestDetailsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestDetailsTestDetailUpdateDto,
  COMEDLISEXTERNALTestDetailsTestDetailDto
> = {
  url: "/api/app/test-details/${id}",
  cacheKey: "appTestDetailsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestDetailsDeleteConfig: ICachableRequestConfig<
  {
    id: string;
  },
  void
> = {
  url: "/api/app/test-details/${id}",
  cacheKey: "appTestDetailsDelete",
};

@injectable.provider({ key: "TestDetailProvider" })
export class TestDetailProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testDetailsList = (request: AppTestDetailsListParams) => {
    return this.get(appTestDetailsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestDetailsList = (request: AppTestDetailsListParams) => {
    return this.cachableGet(appTestDetailsListConfig, request);
  };
  /**
   * No description
   *
   */
  testDetailsCreate = (request: COMEDLISEXTERNALTestDetailsTestDetailCreateDto) => {
    return this.post(appTestDetailsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestDetailsCreate = (request: COMEDLISEXTERNALTestDetailsTestDetailCreateDto) => {
    return this.cachablePost(appTestDetailsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  testDetailsDetail = (request: { id: string }) => {
    return this.get(appTestDetailsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestDetailsDetail = (request: { id: string }) => {
    return this.cachableGet(appTestDetailsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testDetailsUpdate = (request: COMEDLISEXTERNALTestDetailsTestDetailUpdateDto) => {
    return this.put(appTestDetailsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testDetailsDelete = (request: { id: string }) => {
    return this.delete(appTestDetailsDeleteConfig, request);
  };
}

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
  CoreProvider,
  EnumResponseFormat,
  inject,
  type ICachableRequestConfig,
  type IHTTPClient,
  type SessionStorageCache,
} from "@pusula/module.core";
import { injectable } from "../module";

import {
  AppResultsDetailParams,
  AppResultsListParams,
  AppResultsResultListListParams,
  AppResultsTestResultListParams,
  COMEDLISEXTERNALViewsResultListDto,
  COMEDLISEXTERNALViewsResultPrintoutDto,
  COMEDLISEXTERNALViewsTestResultsDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALViewsResultDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appResultsListConfig: ICachableRequestConfig<
  AppResultsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALViewsResultDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/results",
  cacheKey: "appResultsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appResultsResultListListConfig: ICachableRequestConfig<
  AppResultsResultListListParams,
  COMEDLISEXTERNALViewsResultListDto[]
> = {
  url: "/api/app/results/resultList",
  cacheKey: "appResultsResultListList",
  responseFormat: EnumResponseFormat.Json,
};

export const appResultsTestResultListConfig: ICachableRequestConfig<
  AppResultsTestResultListParams,
  COMEDLISEXTERNALViewsTestResultsDto[]
> = {
  url: "/api/app/results/testResult",
  cacheKey: "appResultsTestResultList",
  responseFormat: EnumResponseFormat.Json,
};

export const appResultsDetailConfig: ICachableRequestConfig<
  AppResultsDetailParams,
  COMEDLISEXTERNALViewsResultPrintoutDto
> = {
  url: "/api/app/results/${visitNo}",
  cacheKey: "appResultsDetail",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "ResultsProvider" })
export class ResultsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  resultsList = (request: AppResultsListParams) => {
    return this.get(appResultsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableResultsList = (request: AppResultsListParams) => {
    return this.cachableGet(appResultsListConfig, request);
  };
  /**
   * No description
   *
   */
  resultsResultListList = (request: AppResultsResultListListParams) => {
    return this.get(appResultsResultListListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableResultsResultListList = (request: AppResultsResultListListParams) => {
    return this.cachableGet(appResultsResultListListConfig, request);
  };
  /**
   * No description
   *
   */
  resultsTestResultList = (request: AppResultsTestResultListParams) => {
    return this.get(appResultsTestResultListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableResultsTestResultList = (request: AppResultsTestResultListParams) => {
    return this.cachableGet(appResultsTestResultListConfig, request);
  };
  /**
   * No description
   *
   */
  resultsDetail = (request: AppResultsDetailParams) => {
    return this.get(appResultsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableResultsDetail = (request: AppResultsDetailParams) => {
    return this.cachableGet(appResultsDetailConfig, request);
  };
}

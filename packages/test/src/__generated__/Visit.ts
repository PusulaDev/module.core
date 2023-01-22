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
  AppVisitsListParams,
  COMEDLISEXTERNALVisitsVisitCreateDto,
  COMEDLISEXTERNALVisitsVisitDto,
  COMEDLISEXTERNALVisitsVisitUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALVisitsVisitDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appVisitsListConfig: ICachableRequestConfig<
  AppVisitsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALVisitsVisitDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/visits",
  cacheKey: "appVisitsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appVisitsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALVisitsVisitCreateDto,
  COMEDLISEXTERNALVisitsVisitDto
> = {
  url: "/api/app/visits",
  cacheKey: "appVisitsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appVisitsDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALVisitsVisitDto
> = {
  url: "/api/app/visits/${id}",
  cacheKey: "appVisitsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appVisitsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALVisitsVisitUpdateDto,
  COMEDLISEXTERNALVisitsVisitDto
> = {
  url: "/api/app/visits/${id}",
  cacheKey: "appVisitsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appVisitsDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/visits/${id}",
  cacheKey: "appVisitsDelete",
};

@injectable.provider({ key: "VisitProvider" })
export class VisitProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  visitsList = (request: AppVisitsListParams) => {
    return this.get(appVisitsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableVisitsList = (request: AppVisitsListParams) => {
    return this.cachableGet(appVisitsListConfig, request);
  };
  /**
   * No description
   *
   */
  visitsCreate = (request: COMEDLISEXTERNALVisitsVisitCreateDto) => {
    return this.post(appVisitsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableVisitsCreate = (request: COMEDLISEXTERNALVisitsVisitCreateDto) => {
    return this.cachablePost(appVisitsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  visitsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appVisitsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableVisitsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appVisitsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  visitsUpdate = (request: COMEDLISEXTERNALVisitsVisitUpdateDto) => {
    return this.put(appVisitsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  visitsDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appVisitsDeleteConfig, request);
  };
}

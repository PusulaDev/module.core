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
  SaasEditionsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosEditionDtoVoloSaasHostApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloPaymentPlansPlanDto,
  VoloSaasHostDtosEditionCreateDto,
  VoloSaasHostDtosEditionDto,
  VoloSaasHostDtosEditionUpdateDto,
  VoloSaasHostGetEditionUsageStatisticsResultDto,
} from "./data-contracts";

export const saasEditionsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloSaasHostDtosEditionDto
> = {
  url: "/api/saas/editions/${id}",
  cacheKey: "saasEditionsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const saasEditionsUpdateConfig: ICachableRequestConfig<
  VoloSaasHostDtosEditionUpdateDto,
  VoloSaasHostDtosEditionDto
> = {
  url: "/api/saas/editions/${id}",
  cacheKey: "saasEditionsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const saasEditionsDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/saas/editions/${id}",
  cacheKey: "saasEditionsDelete",
};

export const saasEditionsListConfig: ICachableRequestConfig<
  SaasEditionsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosEditionDtoVoloSaasHostApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/saas/editions",
  cacheKey: "saasEditionsList",
  responseFormat: EnumResponseFormat.Json,
};

export const saasEditionsCreateConfig: ICachableRequestConfig<
  VoloSaasHostDtosEditionCreateDto,
  VoloSaasHostDtosEditionDto
> = {
  url: "/api/saas/editions",
  cacheKey: "saasEditionsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const saasEditionsStatisticsUsageStatisticListConfig: ICachableRequestConfig<
  undefined,
  VoloSaasHostGetEditionUsageStatisticsResultDto
> = {
  url: "/api/saas/editions/statistics/usage-statistic",
  cacheKey: "saasEditionsStatisticsUsageStatisticList",
  responseFormat: EnumResponseFormat.Json,
};

export const saasEditionsPlanLookupListConfig: ICachableRequestConfig<undefined, VoloPaymentPlansPlanDto[]> = {
  url: "/api/saas/editions/plan-lookup",
  cacheKey: "saasEditionsPlanLookupList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "EditionProvider" })
export class EditionProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  saasEditionsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(saasEditionsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasEditionsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(saasEditionsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  saasEditionsUpdate = (request: VoloSaasHostDtosEditionUpdateDto) => {
    return this.put(saasEditionsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  saasEditionsDelete = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.delete(saasEditionsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  saasEditionsList = (request: SaasEditionsListParams) => {
    return this.get(saasEditionsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasEditionsList = (request: SaasEditionsListParams) => {
    return this.cachableGet(saasEditionsListConfig, request);
  };
  /**
   * No description
   *
   */
  saasEditionsCreate = (request: VoloSaasHostDtosEditionCreateDto) => {
    return this.post(saasEditionsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasEditionsCreate = (request: VoloSaasHostDtosEditionCreateDto) => {
    return this.cachablePost(saasEditionsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  saasEditionsStatisticsUsageStatisticList = (request: undefined) => {
    return this.get(saasEditionsStatisticsUsageStatisticListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasEditionsStatisticsUsageStatisticList = (request: undefined) => {
    return this.cachableGet(saasEditionsStatisticsUsageStatisticListConfig, request);
  };
  /**
   * No description
   *
   */
  saasEditionsPlanLookupList = (request: undefined) => {
    return this.get(saasEditionsPlanLookupListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableSaasEditionsPlanLookupList = (request: undefined) => {
    return this.cachableGet(saasEditionsPlanLookupListConfig, request);
  };
}

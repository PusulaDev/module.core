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
  AuditLoggingAuditLogsEntityChangesListParams,
  AuditLoggingAuditLogsEntityChangesWithUsernameListParams,
  AuditLoggingAuditLogsListParams,
  AuditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListParams,
  AuditLoggingAuditLogsStatisticsErrorRateListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingAuditLogDtoVoloAbpAuditLoggingApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingEntityChangeDtoVoloAbpAuditLoggingApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpAuditLoggingAuditLogDto,
  VoloAbpAuditLoggingEntityChangeDto,
  VoloAbpAuditLoggingEntityChangeWithUsernameDto,
  VoloAbpAuditLoggingGetAverageExecutionDurationPerDayOutput,
  VoloAbpAuditLoggingGetErrorRateOutput,
} from "./data-contracts";

export const auditLoggingAuditLogsListConfig: ICachableRequestConfig<
  AuditLoggingAuditLogsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingAuditLogDtoVoloAbpAuditLoggingApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/audit-logging/audit-logs",
  cacheKey: "auditLoggingAuditLogsList",
  responseFormat: EnumResponseFormat.Json,
};

export const auditLoggingAuditLogsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpAuditLoggingAuditLogDto
> = {
  url: "/api/audit-logging/audit-logs/${id}",
  cacheKey: "auditLoggingAuditLogsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const auditLoggingAuditLogsStatisticsErrorRateListConfig: ICachableRequestConfig<
  AuditLoggingAuditLogsStatisticsErrorRateListParams,
  VoloAbpAuditLoggingGetErrorRateOutput
> = {
  url: "/api/audit-logging/audit-logs/statistics/error-rate",
  cacheKey: "auditLoggingAuditLogsStatisticsErrorRateList",
  responseFormat: EnumResponseFormat.Json,
};

export const auditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListConfig: ICachableRequestConfig<
  AuditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListParams,
  VoloAbpAuditLoggingGetAverageExecutionDurationPerDayOutput
> = {
  url: "/api/audit-logging/audit-logs/statistics/average-execution-duration-per-day",
  cacheKey: "auditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayList",
  responseFormat: EnumResponseFormat.Json,
};

export const auditLoggingAuditLogsEntityChangesListConfig: ICachableRequestConfig<
  AuditLoggingAuditLogsEntityChangesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingEntityChangeDtoVoloAbpAuditLoggingApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/audit-logging/audit-logs/entity-changes",
  cacheKey: "auditLoggingAuditLogsEntityChangesList",
  responseFormat: EnumResponseFormat.Json,
};

export const auditLoggingAuditLogsEntityChangesWithUsernameListConfig: ICachableRequestConfig<
  AuditLoggingAuditLogsEntityChangesWithUsernameListParams,
  VoloAbpAuditLoggingEntityChangeWithUsernameDto[]
> = {
  url: "/api/audit-logging/audit-logs/entity-changes-with-username",
  cacheKey: "auditLoggingAuditLogsEntityChangesWithUsernameList",
  responseFormat: EnumResponseFormat.Json,
};

export const auditLoggingAuditLogsEntityChangeWithUsernameDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    entityChangeId: string;
  },
  VoloAbpAuditLoggingEntityChangeWithUsernameDto
> = {
  url: "/api/audit-logging/audit-logs/entity-change-with-username/${entityChangeId}",
  cacheKey: "auditLoggingAuditLogsEntityChangeWithUsernameDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const auditLoggingAuditLogsEntityChangesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    entityChangeId: string;
  },
  VoloAbpAuditLoggingEntityChangeDto
> = {
  url: "/api/audit-logging/audit-logs/entity-changes/${entityChangeId}",
  cacheKey: "auditLoggingAuditLogsEntityChangesDetail",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "AuditLogsProvider" })
export class AuditLogsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  auditLoggingAuditLogsList = (request: AuditLoggingAuditLogsListParams) => {
    return this.get(auditLoggingAuditLogsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsList = (request: AuditLoggingAuditLogsListParams) => {
    return this.cachableGet(auditLoggingAuditLogsListConfig, request);
  };
  /**
   * No description
   *
   */
  auditLoggingAuditLogsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(auditLoggingAuditLogsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(auditLoggingAuditLogsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  auditLoggingAuditLogsStatisticsErrorRateList = (request: AuditLoggingAuditLogsStatisticsErrorRateListParams) => {
    return this.get(auditLoggingAuditLogsStatisticsErrorRateListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsStatisticsErrorRateList = (
    request: AuditLoggingAuditLogsStatisticsErrorRateListParams,
  ) => {
    return this.cachableGet(auditLoggingAuditLogsStatisticsErrorRateListConfig, request);
  };
  /**
   * No description
   *
   */
  auditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayList = (
    request: AuditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListParams,
  ) => {
    return this.get(auditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayList = (
    request: AuditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListParams,
  ) => {
    return this.cachableGet(auditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListConfig, request);
  };
  /**
   * No description
   *
   */
  auditLoggingAuditLogsEntityChangesList = (request: AuditLoggingAuditLogsEntityChangesListParams) => {
    return this.get(auditLoggingAuditLogsEntityChangesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsEntityChangesList = (request: AuditLoggingAuditLogsEntityChangesListParams) => {
    return this.cachableGet(auditLoggingAuditLogsEntityChangesListConfig, request);
  };
  /**
   * No description
   *
   */
  auditLoggingAuditLogsEntityChangesWithUsernameList = (
    request: AuditLoggingAuditLogsEntityChangesWithUsernameListParams,
  ) => {
    return this.get(auditLoggingAuditLogsEntityChangesWithUsernameListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsEntityChangesWithUsernameList = (
    request: AuditLoggingAuditLogsEntityChangesWithUsernameListParams,
  ) => {
    return this.cachableGet(auditLoggingAuditLogsEntityChangesWithUsernameListConfig, request);
  };
  /**
   * No description
   *
   */
  auditLoggingAuditLogsEntityChangeWithUsernameDetail = (request: {
    /** @format uuid */
    entityChangeId: string;
  }) => {
    return this.get(auditLoggingAuditLogsEntityChangeWithUsernameDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsEntityChangeWithUsernameDetail = (request: {
    /** @format uuid */
    entityChangeId: string;
  }) => {
    return this.cachableGet(auditLoggingAuditLogsEntityChangeWithUsernameDetailConfig, request);
  };
  /**
   * No description
   *
   */
  auditLoggingAuditLogsEntityChangesDetail = (request: {
    /** @format uuid */
    entityChangeId: string;
  }) => {
    return this.get(auditLoggingAuditLogsEntityChangesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAuditLoggingAuditLogsEntityChangesDetail = (request: {
    /** @format uuid */
    entityChangeId: string;
  }) => {
    return this.cachableGet(auditLoggingAuditLogsEntityChangesDetailConfig, request);
  };
}

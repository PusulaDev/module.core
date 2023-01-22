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
  IdentitySecurityLogsListParams,
  IdentitySecurityLogsMyListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityIdentitySecurityLogDto,
} from "./data-contracts";

export const identitySecurityLogsListConfig: ICachableRequestConfig<
  IdentitySecurityLogsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/security-logs",
  cacheKey: "identitySecurityLogsList",
  responseFormat: EnumResponseFormat.Json,
};

export const identitySecurityLogsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityIdentitySecurityLogDto
> = {
  url: "/api/identity/security-logs/${id}",
  cacheKey: "identitySecurityLogsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identitySecurityLogsMyListConfig: ICachableRequestConfig<
  IdentitySecurityLogsMyListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/security-logs/my",
  cacheKey: "identitySecurityLogsMyList",
  responseFormat: EnumResponseFormat.Json,
};

export const identitySecurityLogsMyDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityIdentitySecurityLogDto
> = {
  url: "/api/identity/security-logs/my/${id}",
  cacheKey: "identitySecurityLogsMyDetail",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "SecurityLogProvider" })
export class SecurityLogProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identitySecurityLogsList = (request: IdentitySecurityLogsListParams) => {
    return this.get(identitySecurityLogsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentitySecurityLogsList = (request: IdentitySecurityLogsListParams) => {
    return this.cachableGet(identitySecurityLogsListConfig, request);
  };
  /**
   * No description
   *
   */
  identitySecurityLogsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identitySecurityLogsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentitySecurityLogsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identitySecurityLogsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identitySecurityLogsMyList = (request: IdentitySecurityLogsMyListParams) => {
    return this.get(identitySecurityLogsMyListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentitySecurityLogsMyList = (request: IdentitySecurityLogsMyListParams) => {
    return this.cachableGet(identitySecurityLogsMyListConfig, request);
  };
  /**
   * No description
   *
   */
  identitySecurityLogsMyDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identitySecurityLogsMyDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentitySecurityLogsMyDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identitySecurityLogsMyDetailConfig, request);
  };
}

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

import { VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto } from "./data-contracts";

export const abpMultiTenancyTenantsByNameDetailConfig: ICachableRequestConfig<
  {
    name: string;
  },
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto
> = {
  url: "/api/abp/multi-tenancy/tenants/by-name/${name}",
  cacheKey: "abpMultiTenancyTenantsByNameDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const abpMultiTenancyTenantsByIdDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto
> = {
  url: "/api/abp/multi-tenancy/tenants/by-id/${id}",
  cacheKey: "abpMultiTenancyTenantsByIdDetail",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "AbpTenantProvider" })
export class AbpTenantProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  abpMultiTenancyTenantsByNameDetail = (request: { name: string }) => {
    return this.get(abpMultiTenancyTenantsByNameDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAbpMultiTenancyTenantsByNameDetail = (request: { name: string }) => {
    return this.cachableGet(abpMultiTenancyTenantsByNameDetailConfig, request);
  };
  /**
   * No description
   *
   */
  abpMultiTenancyTenantsByIdDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(abpMultiTenancyTenantsByIdDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAbpMultiTenancyTenantsByIdDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(abpMultiTenancyTenantsByIdDetailConfig, request);
  };
}

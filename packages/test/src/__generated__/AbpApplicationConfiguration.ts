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

import { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto } from "./data-contracts";

export const abpApplicationConfigurationListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto
> = {
  url: "/api/abp/application-configuration",
  cacheKey: "abpApplicationConfigurationList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "AbpApplicationConfigurationProvider" })
export class AbpApplicationConfigurationProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  abpApplicationConfigurationList = (request: undefined) => {
    return this.get(abpApplicationConfigurationListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAbpApplicationConfigurationList = (request: undefined) => {
    return this.cachableGet(abpApplicationConfigurationListConfig, request);
  };
}

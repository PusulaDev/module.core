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

import { AbpApiDefinitionListParams, VoloAbpHttpModelingApplicationApiDescriptionModel } from "./data-contracts";

export const abpApiDefinitionListConfig: ICachableRequestConfig<
  AbpApiDefinitionListParams,
  VoloAbpHttpModelingApplicationApiDescriptionModel
> = {
  url: "/api/abp/api-definition",
  cacheKey: "abpApiDefinitionList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "AbpApiDefinitionProvider" })
export class AbpApiDefinitionProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  abpApiDefinitionList = (request: AbpApiDefinitionListParams) => {
    return this.get(abpApiDefinitionListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAbpApiDefinitionList = (request: AbpApiDefinitionListParams) => {
    return this.cachableGet(abpApiDefinitionListConfig, request);
  };
}

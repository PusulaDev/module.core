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
  FeatureManagementFeaturesListParams,
  VoloAbpFeatureManagementGetFeatureListResultDto,
  VoloAbpFeatureManagementUpdateFeaturesDto,
} from "./data-contracts";

export const featureManagementFeaturesListConfig: ICachableRequestConfig<
  FeatureManagementFeaturesListParams,
  VoloAbpFeatureManagementGetFeatureListResultDto
> = {
  url: "/api/feature-management/features",
  cacheKey: "featureManagementFeaturesList",
  responseFormat: EnumResponseFormat.Json,
};

export const featureManagementFeaturesUpdateConfig: ICachableRequestConfig<
  VoloAbpFeatureManagementUpdateFeaturesDto,
  void
> = {
  url: "/api/feature-management/features",
  cacheKey: "featureManagementFeaturesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

@injectable.provider({ key: "FeaturesProvider" })
export class FeaturesProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  featureManagementFeaturesList = (request: FeatureManagementFeaturesListParams) => {
    return this.get(featureManagementFeaturesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableFeatureManagementFeaturesList = (request: FeatureManagementFeaturesListParams) => {
    return this.cachableGet(featureManagementFeaturesListConfig, request);
  };
  /**
   * No description
   *
   */
  featureManagementFeaturesUpdate = (request: VoloAbpFeatureManagementUpdateFeaturesDto) => {
    return this.put(featureManagementFeaturesUpdateConfig, request);
  };
}

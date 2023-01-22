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

import { VoloAbpIdentityServerClaimTypeDtosIdentityClaimTypeDto } from "./data-contracts";

export const identityServerClaimTypesListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpIdentityServerClaimTypeDtosIdentityClaimTypeDto[]
> = {
  url: "/api/identity-server/claim-types",
  cacheKey: "identityServerClaimTypesList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "ClaimTypesProvider" })
export class ClaimTypesProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityServerClaimTypesList = (request: undefined) => {
    return this.get(identityServerClaimTypesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerClaimTypesList = (request: undefined) => {
    return this.cachableGet(identityServerClaimTypesListConfig, request);
  };
}

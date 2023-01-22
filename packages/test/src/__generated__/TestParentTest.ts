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
  AppTestParentTestsListParams,
  COMEDLISEXTERNALTestParentTestsTestParentTestDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestParentTestsTestParentTestDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestParentTestsListConfig: ICachableRequestConfig<
  AppTestParentTestsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestParentTestsTestParentTestDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/testParentTests",
  cacheKey: "appTestParentTestsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestParentTestsDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALTestParentTestsTestParentTestDto
> = {
  url: "/api/app/testParentTests/${id}",
  cacheKey: "appTestParentTestsDetail",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "TestParentTestProvider" })
export class TestParentTestProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testParentTestsList = (request: AppTestParentTestsListParams) => {
    return this.get(appTestParentTestsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestParentTestsList = (request: AppTestParentTestsListParams) => {
    return this.cachableGet(appTestParentTestsListConfig, request);
  };
  /**
   * No description
   *
   */
  testParentTestsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appTestParentTestsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestParentTestsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appTestParentTestsDetailConfig, request);
  };
}

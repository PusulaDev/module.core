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
  AppTestsListParams,
  COMEDLISEXTERNALTestsGetTestsInput,
  COMEDLISEXTERNALTestsTestCreateDto,
  COMEDLISEXTERNALTestsTestDto,
  COMEDLISEXTERNALTestsTestUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestsTestDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestsListConfig: ICachableRequestConfig<
  AppTestsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestsTestDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/tests",
  cacheKey: "appTestsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestsTestCreateDto,
  COMEDLISEXTERNALTestsTestDto
> = {
  url: "/api/app/tests",
  cacheKey: "appTestsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestsDetailConfig: ICachableRequestConfig<
  {
    id: string;
  },
  COMEDLISEXTERNALTestsTestDto
> = {
  url: "/api/app/tests/${id}",
  cacheKey: "appTestsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestsTestUpdateDto,
  COMEDLISEXTERNALTestsTestDto
> = {
  url: "/api/app/tests/${id}",
  cacheKey: "appTestsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestsDeleteConfig: ICachableRequestConfig<
  {
    id: string;
  },
  void
> = {
  url: "/api/app/tests/${id}",
  cacheKey: "appTestsDelete",
};

export const appTestsByTestGroupIdUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestsGetTestsInput,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestsTestDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/tests/by-test-group-id/${testGroupId}",
  cacheKey: "appTestsByTestGroupIdUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestsByParentTestIdUpdateConfig: ICachableRequestConfig<
  {
    parentTestId: string;
  },
  COMEDLISEXTERNALTestsTestDto[]
> = {
  url: "/api/app/tests/by-parent-test-id/${parentTestId}",
  cacheKey: "appTestsByParentTestIdUpdate",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "TestProvider" })
export class TestProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testsList = (request: AppTestsListParams) => {
    return this.get(appTestsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestsList = (request: AppTestsListParams) => {
    return this.cachableGet(appTestsListConfig, request);
  };
  /**
   * No description
   *
   */
  testsCreate = (request: COMEDLISEXTERNALTestsTestCreateDto) => {
    return this.post(appTestsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestsCreate = (request: COMEDLISEXTERNALTestsTestCreateDto) => {
    return this.cachablePost(appTestsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  testsDetail = (request: { id: string }) => {
    return this.get(appTestsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestsDetail = (request: { id: string }) => {
    return this.cachableGet(appTestsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testsUpdate = (request: COMEDLISEXTERNALTestsTestUpdateDto) => {
    return this.put(appTestsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testsDelete = (request: { id: string }) => {
    return this.delete(appTestsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  testsByTestGroupIdUpdate = (request: COMEDLISEXTERNALTestsGetTestsInput) => {
    return this.put(appTestsByTestGroupIdUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testsByParentTestIdUpdate = (request: { parentTestId: string }) => {
    return this.put(appTestsByParentTestIdUpdateConfig, request);
  };
}

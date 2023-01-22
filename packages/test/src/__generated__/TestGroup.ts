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
  AppTestGroupsListParams,
  COMEDLISEXTERNALTestGroupsTestGroupCreateDto,
  COMEDLISEXTERNALTestGroupsTestGroupDto,
  COMEDLISEXTERNALTestGroupsTestGroupUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestGroupsTestGroupDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appTestGroupsListConfig: ICachableRequestConfig<
  AppTestGroupsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestGroupsTestGroupDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/test-groups",
  cacheKey: "appTestGroupsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestGroupsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestGroupsTestGroupCreateDto,
  COMEDLISEXTERNALTestGroupsTestGroupDto
> = {
  url: "/api/app/test-groups",
  cacheKey: "appTestGroupsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestGroupsDetailConfig: ICachableRequestConfig<
  {
    id: string;
  },
  COMEDLISEXTERNALTestGroupsTestGroupDto
> = {
  url: "/api/app/test-groups/${id}",
  cacheKey: "appTestGroupsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appTestGroupsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALTestGroupsTestGroupUpdateDto,
  COMEDLISEXTERNALTestGroupsTestGroupDto
> = {
  url: "/api/app/test-groups/${id}",
  cacheKey: "appTestGroupsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appTestGroupsDeleteConfig: ICachableRequestConfig<
  {
    id: string;
  },
  void
> = {
  url: "/api/app/test-groups/${id}",
  cacheKey: "appTestGroupsDelete",
};

@injectable.provider({ key: "TestGroupProvider" })
export class TestGroupProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  testGroupsList = (request: AppTestGroupsListParams) => {
    return this.get(appTestGroupsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestGroupsList = (request: AppTestGroupsListParams) => {
    return this.cachableGet(appTestGroupsListConfig, request);
  };
  /**
   * No description
   *
   */
  testGroupsCreate = (request: COMEDLISEXTERNALTestGroupsTestGroupCreateDto) => {
    return this.post(appTestGroupsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestGroupsCreate = (request: COMEDLISEXTERNALTestGroupsTestGroupCreateDto) => {
    return this.cachablePost(appTestGroupsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  testGroupsDetail = (request: { id: string }) => {
    return this.get(appTestGroupsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTestGroupsDetail = (request: { id: string }) => {
    return this.cachableGet(appTestGroupsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  testGroupsUpdate = (request: COMEDLISEXTERNALTestGroupsTestGroupUpdateDto) => {
    return this.put(appTestGroupsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  testGroupsDelete = (request: { id: string }) => {
    return this.delete(appTestGroupsDeleteConfig, request);
  };
}

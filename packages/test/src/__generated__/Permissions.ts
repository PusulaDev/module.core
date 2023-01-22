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
  PermissionManagementPermissionsListParams,
  VoloAbpPermissionManagementGetPermissionListResultDto,
  VoloAbpPermissionManagementUpdatePermissionsDto,
} from "./data-contracts";

export const permissionManagementPermissionsListConfig: ICachableRequestConfig<
  PermissionManagementPermissionsListParams,
  VoloAbpPermissionManagementGetPermissionListResultDto
> = {
  url: "/api/permission-management/permissions",
  cacheKey: "permissionManagementPermissionsList",
  responseFormat: EnumResponseFormat.Json,
};

export const permissionManagementPermissionsUpdateConfig: ICachableRequestConfig<
  VoloAbpPermissionManagementUpdatePermissionsDto,
  void
> = {
  url: "/api/permission-management/permissions",
  cacheKey: "permissionManagementPermissionsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

@injectable.provider({ key: "PermissionsProvider" })
export class PermissionsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  permissionManagementPermissionsList = (request: PermissionManagementPermissionsListParams) => {
    return this.get(permissionManagementPermissionsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePermissionManagementPermissionsList = (request: PermissionManagementPermissionsListParams) => {
    return this.cachableGet(permissionManagementPermissionsListConfig, request);
  };
  /**
   * No description
   *
   */
  permissionManagementPermissionsUpdate = (request: VoloAbpPermissionManagementUpdatePermissionsDto) => {
    return this.put(permissionManagementPermissionsUpdateConfig, request);
  };
}

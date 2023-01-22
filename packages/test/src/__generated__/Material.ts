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
  AppMaterialsListParams,
  AppMaterialsSampleTypeLookupListParams,
  COMEDLISEXTERNALMaterialsMaterialCreateDto,
  COMEDLISEXTERNALMaterialsMaterialDto,
  COMEDLISEXTERNALMaterialsMaterialUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALMaterialsMaterialDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appMaterialsListConfig: ICachableRequestConfig<
  AppMaterialsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALMaterialsMaterialDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/Materials",
  cacheKey: "appMaterialsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appMaterialsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALMaterialsMaterialCreateDto,
  COMEDLISEXTERNALMaterialsMaterialDto
> = {
  url: "/api/app/Materials",
  cacheKey: "appMaterialsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appMaterialsSampleTypeLookupListConfig: ICachableRequestConfig<
  AppMaterialsSampleTypeLookupListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/Materials/sample-type-lookup",
  cacheKey: "appMaterialsSampleTypeLookupList",
  responseFormat: EnumResponseFormat.Json,
};

export const appMaterialsDetailConfig: ICachableRequestConfig<
  {
    id: string;
  },
  COMEDLISEXTERNALMaterialsMaterialDto
> = {
  url: "/api/app/Materials/${id}",
  cacheKey: "appMaterialsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appMaterialsUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALMaterialsMaterialUpdateDto,
  COMEDLISEXTERNALMaterialsMaterialDto
> = {
  url: "/api/app/Materials/${id}",
  cacheKey: "appMaterialsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appMaterialsDeleteConfig: ICachableRequestConfig<
  {
    id: string;
  },
  void
> = {
  url: "/api/app/Materials/${id}",
  cacheKey: "appMaterialsDelete",
};

@injectable.provider({ key: "MaterialProvider" })
export class MaterialProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  materialsList = (request: AppMaterialsListParams) => {
    return this.get(appMaterialsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableMaterialsList = (request: AppMaterialsListParams) => {
    return this.cachableGet(appMaterialsListConfig, request);
  };
  /**
   * No description
   *
   */
  materialsCreate = (request: COMEDLISEXTERNALMaterialsMaterialCreateDto) => {
    return this.post(appMaterialsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableMaterialsCreate = (request: COMEDLISEXTERNALMaterialsMaterialCreateDto) => {
    return this.cachablePost(appMaterialsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  materialsSampleTypeLookupList = (request: AppMaterialsSampleTypeLookupListParams) => {
    return this.get(appMaterialsSampleTypeLookupListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableMaterialsSampleTypeLookupList = (request: AppMaterialsSampleTypeLookupListParams) => {
    return this.cachableGet(appMaterialsSampleTypeLookupListConfig, request);
  };
  /**
   * No description
   *
   */
  materialsDetail = (request: { id: string }) => {
    return this.get(appMaterialsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableMaterialsDetail = (request: { id: string }) => {
    return this.cachableGet(appMaterialsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  materialsUpdate = (request: COMEDLISEXTERNALMaterialsMaterialUpdateDto) => {
    return this.put(appMaterialsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  materialsDelete = (request: { id: string }) => {
    return this.delete(appMaterialsDeleteConfig, request);
  };
}

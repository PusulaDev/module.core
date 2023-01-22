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
  AppLaboratorysListParams,
  AppLaboratorysSampleTypeLookupListParams,
  COMEDLISEXTERNALLaboratoriesLaboratoryCreateDto,
  COMEDLISEXTERNALLaboratoriesLaboratoryDto,
  COMEDLISEXTERNALLaboratoriesLaboratoryUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALLaboratoriesLaboratoryDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appLaboratorysListConfig: ICachableRequestConfig<
  AppLaboratorysListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALLaboratoriesLaboratoryDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/Laboratorys",
  cacheKey: "appLaboratorysList",
  responseFormat: EnumResponseFormat.Json,
};

export const appLaboratorysCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALLaboratoriesLaboratoryCreateDto,
  COMEDLISEXTERNALLaboratoriesLaboratoryDto
> = {
  url: "/api/app/Laboratorys",
  cacheKey: "appLaboratorysCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appLaboratorysSampleTypeLookupListConfig: ICachableRequestConfig<
  AppLaboratorysSampleTypeLookupListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/Laboratorys/sample-type-lookup",
  cacheKey: "appLaboratorysSampleTypeLookupList",
  responseFormat: EnumResponseFormat.Json,
};

export const appLaboratorysDetailConfig: ICachableRequestConfig<
  {
    id: string;
  },
  COMEDLISEXTERNALLaboratoriesLaboratoryDto
> = {
  url: "/api/app/Laboratorys/${id}",
  cacheKey: "appLaboratorysDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appLaboratorysUpdateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALLaboratoriesLaboratoryUpdateDto,
  COMEDLISEXTERNALLaboratoriesLaboratoryDto
> = {
  url: "/api/app/Laboratorys/${id}",
  cacheKey: "appLaboratorysUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appLaboratorysDeleteConfig: ICachableRequestConfig<
  {
    id: string;
  },
  void
> = {
  url: "/api/app/Laboratorys/${id}",
  cacheKey: "appLaboratorysDelete",
};

@injectable.provider({ key: "LaboratoryProvider" })
export class LaboratoryProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  laboratorysList = (request: AppLaboratorysListParams) => {
    return this.get(appLaboratorysListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLaboratorysList = (request: AppLaboratorysListParams) => {
    return this.cachableGet(appLaboratorysListConfig, request);
  };
  /**
   * No description
   *
   */
  laboratorysCreate = (request: COMEDLISEXTERNALLaboratoriesLaboratoryCreateDto) => {
    return this.post(appLaboratorysCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLaboratorysCreate = (request: COMEDLISEXTERNALLaboratoriesLaboratoryCreateDto) => {
    return this.cachablePost(appLaboratorysCreateConfig, request);
  };
  /**
   * No description
   *
   */
  laboratorysSampleTypeLookupList = (request: AppLaboratorysSampleTypeLookupListParams) => {
    return this.get(appLaboratorysSampleTypeLookupListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLaboratorysSampleTypeLookupList = (request: AppLaboratorysSampleTypeLookupListParams) => {
    return this.cachableGet(appLaboratorysSampleTypeLookupListConfig, request);
  };
  /**
   * No description
   *
   */
  laboratorysDetail = (request: { id: string }) => {
    return this.get(appLaboratorysDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableLaboratorysDetail = (request: { id: string }) => {
    return this.cachableGet(appLaboratorysDetailConfig, request);
  };
  /**
   * No description
   *
   */
  laboratorysUpdate = (request: COMEDLISEXTERNALLaboratoriesLaboratoryUpdateDto) => {
    return this.put(appLaboratorysUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  laboratorysDelete = (request: { id: string }) => {
    return this.delete(appLaboratorysDeleteConfig, request);
  };
}

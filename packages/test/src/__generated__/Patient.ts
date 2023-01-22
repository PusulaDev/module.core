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
  AppPatientsListParams,
  COMEDLISEXTERNALPatientsPatientCreateDto,
  COMEDLISEXTERNALPatientsPatientDto,
  COMEDLISEXTERNALPatientsPatientUpdateDto,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALPatientsPatientDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "./data-contracts";

export const appPatientsListConfig: ICachableRequestConfig<
  AppPatientsListParams,
  VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALPatientsPatientDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/app/patients",
  cacheKey: "appPatientsList",
  responseFormat: EnumResponseFormat.Json,
};

export const appPatientsCreateConfig: ICachableRequestConfig<
  COMEDLISEXTERNALPatientsPatientCreateDto,
  COMEDLISEXTERNALPatientsPatientDto
> = {
  url: "/api/app/patients",
  cacheKey: "appPatientsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appPatientsDetailConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  COMEDLISEXTERNALPatientsPatientDto
> = {
  url: "/api/app/patients/${id}",
  cacheKey: "appPatientsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const appPatientsCreate2Config: ICachableRequestConfig<
  COMEDLISEXTERNALPatientsPatientUpdateDto,
  COMEDLISEXTERNALPatientsPatientDto
> = {
  url: "/api/app/patients/${id}",
  cacheKey: "appPatientsCreate2",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const appPatientsDeleteConfig: ICachableRequestConfig<
  {
    /** @format int32 */
    id: number;
  },
  void
> = {
  url: "/api/app/patients/${id}",
  cacheKey: "appPatientsDelete",
};

@injectable.provider({ key: "PatientProvider" })
export class PatientProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  patientsList = (request: AppPatientsListParams) => {
    return this.get(appPatientsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePatientsList = (request: AppPatientsListParams) => {
    return this.cachableGet(appPatientsListConfig, request);
  };
  /**
   * No description
   *
   */
  patientsCreate = (request: COMEDLISEXTERNALPatientsPatientCreateDto) => {
    return this.post(appPatientsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePatientsCreate = (request: COMEDLISEXTERNALPatientsPatientCreateDto) => {
    return this.cachablePost(appPatientsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  patientsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.get(appPatientsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePatientsDetail = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.cachableGet(appPatientsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  patientsCreate2 = (request: COMEDLISEXTERNALPatientsPatientUpdateDto) => {
    return this.post(appPatientsCreate2Config, request);
  };

  /**
   * No description
   *
   */
  cachablePatientsCreate2 = (request: COMEDLISEXTERNALPatientsPatientUpdateDto) => {
    return this.cachablePost(appPatientsCreate2Config, request);
  };
  /**
   * No description
   *
   */
  patientsDelete = (request: {
    /** @format int32 */
    id: number;
  }) => {
    return this.delete(appPatientsDeleteConfig, request);
  };
}

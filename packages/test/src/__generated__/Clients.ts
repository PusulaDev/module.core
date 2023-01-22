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
  IdentityServerClientsDeleteParams,
  IdentityServerClientsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerClientDtosClientWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityServerClientDtosClientWithDetailsDto,
  VoloAbpIdentityServerClientDtosCreateClientDto,
  VoloAbpIdentityServerClientDtosUpdateClientDto,
} from "./data-contracts";

export const identityServerClientsListConfig: ICachableRequestConfig<
  IdentityServerClientsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerClientDtosClientWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity-server/clients",
  cacheKey: "identityServerClientsList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerClientsCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerClientDtosCreateClientDto,
  VoloAbpIdentityServerClientDtosClientWithDetailsDto
> = {
  url: "/api/identity-server/clients",
  cacheKey: "identityServerClientsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerClientsDeleteConfig: ICachableRequestConfig<IdentityServerClientsDeleteParams, void> = {
  url: "/api/identity-server/clients",
  cacheKey: "identityServerClientsDelete",
};

export const identityServerClientsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityServerClientDtosClientWithDetailsDto
> = {
  url: "/api/identity-server/clients/${id}",
  cacheKey: "identityServerClientsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityServerClientsUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityServerClientDtosUpdateClientDto,
  VoloAbpIdentityServerClientDtosClientWithDetailsDto
> = {
  url: "/api/identity-server/clients/${id}",
  cacheKey: "identityServerClientsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "ClientsProvider" })
export class ClientsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityServerClientsList = (request: IdentityServerClientsListParams) => {
    return this.get(identityServerClientsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerClientsList = (request: IdentityServerClientsListParams) => {
    return this.cachableGet(identityServerClientsListConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerClientsCreate = (request: VoloAbpIdentityServerClientDtosCreateClientDto) => {
    return this.post(identityServerClientsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerClientsCreate = (request: VoloAbpIdentityServerClientDtosCreateClientDto) => {
    return this.cachablePost(identityServerClientsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerClientsDelete = (request: IdentityServerClientsDeleteParams) => {
    return this.delete(identityServerClientsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityServerClientsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityServerClientsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityServerClientsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityServerClientsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityServerClientsUpdate = (request: VoloAbpIdentityServerClientDtosUpdateClientDto) => {
    return this.put(identityServerClientsUpdateConfig, request);
  };
}

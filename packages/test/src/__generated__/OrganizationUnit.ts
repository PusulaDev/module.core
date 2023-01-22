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
  IdentityOrganizationUnitsAvailableRolesListParams,
  IdentityOrganizationUnitsAvailableUsersListParams,
  IdentityOrganizationUnitsDeleteParams,
  IdentityOrganizationUnitsListParams,
  IdentityOrganizationUnitsMembersDetailParams,
  IdentityOrganizationUnitsRolesDetailParams,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityOrganizationUnitCreateDto,
  VoloAbpIdentityOrganizationUnitMoveInput,
  VoloAbpIdentityOrganizationUnitRoleInput,
  VoloAbpIdentityOrganizationUnitUpdateDto,
  VoloAbpIdentityOrganizationUnitUserInput,
  VoloAbpIdentityOrganizationUnitWithDetailsDto,
} from "./data-contracts";

export const identityOrganizationUnitsRolesUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityOrganizationUnitRoleInput,
  void
> = {
  url: "/api/identity/organization-units/${id}/roles",
  cacheKey: "identityOrganizationUnitsRolesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identityOrganizationUnitsRolesDetailConfig: ICachableRequestConfig<
  IdentityOrganizationUnitsRolesDetailParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/organization-units/${id}/roles",
  cacheKey: "identityOrganizationUnitsRolesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsMembersUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityOrganizationUnitUserInput,
  void
> = {
  url: "/api/identity/organization-units/${id}/members",
  cacheKey: "identityOrganizationUnitsMembersUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identityOrganizationUnitsMembersDetailConfig: ICachableRequestConfig<
  IdentityOrganizationUnitsMembersDetailParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/organization-units/${id}/members",
  cacheKey: "identityOrganizationUnitsMembersDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityOrganizationUnitCreateDto,
  VoloAbpIdentityOrganizationUnitWithDetailsDto
> = {
  url: "/api/identity/organization-units",
  cacheKey: "identityOrganizationUnitsCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsDeleteConfig: ICachableRequestConfig<
  IdentityOrganizationUnitsDeleteParams,
  void
> = {
  url: "/api/identity/organization-units",
  cacheKey: "identityOrganizationUnitsDelete",
};

export const identityOrganizationUnitsListConfig: ICachableRequestConfig<
  IdentityOrganizationUnitsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/organization-units",
  cacheKey: "identityOrganizationUnitsList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityOrganizationUnitWithDetailsDto
> = {
  url: "/api/identity/organization-units/${id}",
  cacheKey: "identityOrganizationUnitsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityOrganizationUnitUpdateDto,
  VoloAbpIdentityOrganizationUnitWithDetailsDto
> = {
  url: "/api/identity/organization-units/${id}",
  cacheKey: "identityOrganizationUnitsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsAllListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/organization-units/all",
  cacheKey: "identityOrganizationUnitsAllList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsMoveUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityOrganizationUnitMoveInput,
  void
> = {
  url: "/api/identity/organization-units/${id}/move",
  cacheKey: "identityOrganizationUnitsMoveUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identityOrganizationUnitsAvailableUsersListConfig: ICachableRequestConfig<
  IdentityOrganizationUnitsAvailableUsersListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/organization-units/available-users",
  cacheKey: "identityOrganizationUnitsAvailableUsersList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsAvailableRolesListConfig: ICachableRequestConfig<
  IdentityOrganizationUnitsAvailableRolesListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/organization-units/available-roles",
  cacheKey: "identityOrganizationUnitsAvailableRolesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityOrganizationUnitsMembersDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
    /** @format uuid */
    memberId: string;
  },
  void
> = {
  url: "/api/identity/organization-units/${id}/members/${memberId}",
  cacheKey: "identityOrganizationUnitsMembersDelete",
};

export const identityOrganizationUnitsRolesDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
    /** @format uuid */
    roleId: string;
  },
  void
> = {
  url: "/api/identity/organization-units/${id}/roles/${roleId}",
  cacheKey: "identityOrganizationUnitsRolesDelete",
};

@injectable.provider({ key: "OrganizationUnitProvider" })
export class OrganizationUnitProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  identityOrganizationUnitsRolesUpdate = (request: VoloAbpIdentityOrganizationUnitRoleInput) => {
    return this.put(identityOrganizationUnitsRolesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityOrganizationUnitsRolesDetail = (request: IdentityOrganizationUnitsRolesDetailParams) => {
    return this.get(identityOrganizationUnitsRolesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsRolesDetail = (request: IdentityOrganizationUnitsRolesDetailParams) => {
    return this.cachableGet(identityOrganizationUnitsRolesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsMembersUpdate = (request: VoloAbpIdentityOrganizationUnitUserInput) => {
    return this.put(identityOrganizationUnitsMembersUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityOrganizationUnitsMembersDetail = (request: IdentityOrganizationUnitsMembersDetailParams) => {
    return this.get(identityOrganizationUnitsMembersDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsMembersDetail = (request: IdentityOrganizationUnitsMembersDetailParams) => {
    return this.cachableGet(identityOrganizationUnitsMembersDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsCreate = (request: VoloAbpIdentityOrganizationUnitCreateDto) => {
    return this.post(identityOrganizationUnitsCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsCreate = (request: VoloAbpIdentityOrganizationUnitCreateDto) => {
    return this.cachablePost(identityOrganizationUnitsCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsDelete = (request: IdentityOrganizationUnitsDeleteParams) => {
    return this.delete(identityOrganizationUnitsDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityOrganizationUnitsList = (request: IdentityOrganizationUnitsListParams) => {
    return this.get(identityOrganizationUnitsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsList = (request: IdentityOrganizationUnitsListParams) => {
    return this.cachableGet(identityOrganizationUnitsListConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityOrganizationUnitsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityOrganizationUnitsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsUpdate = (request: VoloAbpIdentityOrganizationUnitUpdateDto) => {
    return this.put(identityOrganizationUnitsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityOrganizationUnitsAllList = (request: undefined) => {
    return this.get(identityOrganizationUnitsAllListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsAllList = (request: undefined) => {
    return this.cachableGet(identityOrganizationUnitsAllListConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsMoveUpdate = (request: VoloAbpIdentityOrganizationUnitMoveInput) => {
    return this.put(identityOrganizationUnitsMoveUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityOrganizationUnitsAvailableUsersList = (request: IdentityOrganizationUnitsAvailableUsersListParams) => {
    return this.get(identityOrganizationUnitsAvailableUsersListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsAvailableUsersList = (
    request: IdentityOrganizationUnitsAvailableUsersListParams,
  ) => {
    return this.cachableGet(identityOrganizationUnitsAvailableUsersListConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsAvailableRolesList = (request: IdentityOrganizationUnitsAvailableRolesListParams) => {
    return this.get(identityOrganizationUnitsAvailableRolesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityOrganizationUnitsAvailableRolesList = (
    request: IdentityOrganizationUnitsAvailableRolesListParams,
  ) => {
    return this.cachableGet(identityOrganizationUnitsAvailableRolesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityOrganizationUnitsMembersDelete = (request: {
    /** @format uuid */
    id: string;
    /** @format uuid */
    memberId: string;
  }) => {
    return this.delete(identityOrganizationUnitsMembersDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityOrganizationUnitsRolesDelete = (request: {
    /** @format uuid */
    id: string;
    /** @format uuid */
    roleId: string;
  }) => {
    return this.delete(identityOrganizationUnitsRolesDeleteConfig, request);
  };
}

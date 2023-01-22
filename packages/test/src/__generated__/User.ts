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
  IdentityUsersListParams,
  VoloAbpAccountIsLinkedInput,
  VoloAbpAccountLinkUserInput,
  VoloAbpAccountUnLinkUserInput,
  VoloAbpAccountVerifyLinkLoginTokenInput,
  VoloAbpAccountVerifyLinkTokenInput,
  VoloAbpApplicationDtosListResultDto1VoloAbpAccountLinkUserDtoVoloAbpAccountProPublicApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityClaimTypeDto,
  VoloAbpIdentityIdentityRoleLookupDto,
  VoloAbpIdentityIdentityUserClaimDto,
  VoloAbpIdentityIdentityUserCreateDto,
  VoloAbpIdentityIdentityUserDto,
  VoloAbpIdentityIdentityUserUpdateDto,
  VoloAbpIdentityIdentityUserUpdatePasswordInput,
  VoloAbpIdentityIdentityUserUpdateRolesDto,
  VoloAbpIdentityOrganizationUnitDto,
  VoloAbpIdentityOrganizationUnitLookupDto,
} from "./data-contracts";

export const accountLinkUserLinkCreateConfig: ICachableRequestConfig<VoloAbpAccountLinkUserInput, void> = {
  url: "/api/account/link-user/link",
  cacheKey: "accountLinkUserLinkCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountLinkUserUnlinkCreateConfig: ICachableRequestConfig<VoloAbpAccountUnLinkUserInput, void> = {
  url: "/api/account/link-user/unlink",
  cacheKey: "accountLinkUserUnlinkCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountLinkUserIsLinkedCreateConfig: ICachableRequestConfig<VoloAbpAccountIsLinkedInput, boolean> = {
  url: "/api/account/link-user/is-linked",
  cacheKey: "accountLinkUserIsLinkedCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const accountLinkUserGenerateLinkTokenCreateConfig: ICachableRequestConfig<undefined, string> = {
  url: "/api/account/link-user/generate-link-token",
  cacheKey: "accountLinkUserGenerateLinkTokenCreate",
  responseFormat: EnumResponseFormat.Json,
};

export const accountLinkUserVerifyLinkTokenCreateConfig: ICachableRequestConfig<
  VoloAbpAccountVerifyLinkTokenInput,
  boolean
> = {
  url: "/api/account/link-user/verify-link-token",
  cacheKey: "accountLinkUserVerifyLinkTokenCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const accountLinkUserGenerateLinkLoginTokenCreateConfig: ICachableRequestConfig<undefined, string> = {
  url: "/api/account/link-user/generate-link-login-token",
  cacheKey: "accountLinkUserGenerateLinkLoginTokenCreate",
  responseFormat: EnumResponseFormat.Json,
};

export const accountLinkUserVerifyLinkLoginTokenCreateConfig: ICachableRequestConfig<
  VoloAbpAccountVerifyLinkLoginTokenInput,
  boolean
> = {
  url: "/api/account/link-user/verify-link-login-token",
  cacheKey: "accountLinkUserVerifyLinkLoginTokenCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const accountLinkUserListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpApplicationDtosListResultDto1VoloAbpAccountLinkUserDtoVoloAbpAccountProPublicApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/account/link-user",
  cacheKey: "accountLinkUserList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityIdentityUserDto
> = {
  url: "/api/identity/users/${id}",
  cacheKey: "identityUsersDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityIdentityUserUpdateDto,
  VoloAbpIdentityIdentityUserDto
> = {
  url: "/api/identity/users/${id}",
  cacheKey: "identityUsersUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersDeleteConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/identity/users/${id}",
  cacheKey: "identityUsersDelete",
};

export const identityUsersListConfig: ICachableRequestConfig<
  IdentityUsersListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/users",
  cacheKey: "identityUsersList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersCreateConfig: ICachableRequestConfig<
  VoloAbpIdentityIdentityUserCreateDto,
  VoloAbpIdentityIdentityUserDto
> = {
  url: "/api/identity/users",
  cacheKey: "identityUsersCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersRolesDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/users/${id}/roles",
  cacheKey: "identityUsersRolesDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersRolesUpdateConfig: ICachableRequestConfig<VoloAbpIdentityIdentityUserUpdateRolesDto, void> = {
  url: "/api/identity/users/${id}/roles",
  cacheKey: "identityUsersRolesUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identityUsersAssignableRolesListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/users/assignable-roles",
  cacheKey: "identityUsersAssignableRolesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersAvailableOrganizationUnitsListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/identity/users/available-organization-units",
  cacheKey: "identityUsersAvailableOrganizationUnitsList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersAllClaimTypesListConfig: ICachableRequestConfig<undefined, VoloAbpIdentityClaimTypeDto[]> = {
  url: "/api/identity/users/all-claim-types",
  cacheKey: "identityUsersAllClaimTypesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersClaimsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityIdentityUserClaimDto[]
> = {
  url: "/api/identity/users/${id}/claims",
  cacheKey: "identityUsersClaimsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersClaimsUpdateConfig: ICachableRequestConfig<VoloAbpIdentityIdentityUserClaimDto[], void> = {
  url: "/api/identity/users/${id}/claims",
  cacheKey: "identityUsersClaimsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identityUsersOrganizationUnitsDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpIdentityOrganizationUnitDto[]
> = {
  url: "/api/identity/users/${id}/organization-units",
  cacheKey: "identityUsersOrganizationUnitsDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersLockUpdateConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
    /** @format date-time */
    lockoutEnd: string;
  },
  void
> = {
  url: "/api/identity/users/${id}/lock/${lockoutEnd}",
  cacheKey: "identityUsersLockUpdate",
};

export const identityUsersUnlockUpdateConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  void
> = {
  url: "/api/identity/users/${id}/unlock",
  cacheKey: "identityUsersUnlockUpdate",
};

export const identityUsersByUsernameDetailConfig: ICachableRequestConfig<
  {
    username: string;
  },
  VoloAbpIdentityIdentityUserDto
> = {
  url: "/api/identity/users/by-username/${username}",
  cacheKey: "identityUsersByUsernameDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersByEmailDetailConfig: ICachableRequestConfig<
  {
    email: string;
  },
  VoloAbpIdentityIdentityUserDto
> = {
  url: "/api/identity/users/by-email/${email}",
  cacheKey: "identityUsersByEmailDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersTwoFactorEnabledDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  boolean
> = {
  url: "/api/identity/users/${id}/two-factor-enabled",
  cacheKey: "identityUsersTwoFactorEnabledDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersTwoFactorUpdateConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
    enabled: boolean;
  },
  void
> = {
  url: "/api/identity/users/${id}/two-factor/${enabled}",
  cacheKey: "identityUsersTwoFactorUpdate",
};

export const identityUsersChangePasswordUpdateConfig: ICachableRequestConfig<
  VoloAbpIdentityIdentityUserUpdatePasswordInput,
  void
> = {
  url: "/api/identity/users/${id}/change-password",
  cacheKey: "identityUsersChangePasswordUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const identityUsersLookupRolesListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpIdentityIdentityRoleLookupDto[]
> = {
  url: "/api/identity/users/lookup/roles",
  cacheKey: "identityUsersLookupRolesList",
  responseFormat: EnumResponseFormat.Json,
};

export const identityUsersLookupOrganizationUnitsListConfig: ICachableRequestConfig<
  undefined,
  VoloAbpIdentityOrganizationUnitLookupDto[]
> = {
  url: "/api/identity/users/lookup/organization-units",
  cacheKey: "identityUsersLookupOrganizationUnitsList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "UserProvider" })
export class UserProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  accountLinkUserLinkCreate = (request: VoloAbpAccountLinkUserInput) => {
    return this.post(accountLinkUserLinkCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserLinkCreate = (request: VoloAbpAccountLinkUserInput) => {
    return this.cachablePost(accountLinkUserLinkCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkUserUnlinkCreate = (request: VoloAbpAccountUnLinkUserInput) => {
    return this.post(accountLinkUserUnlinkCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserUnlinkCreate = (request: VoloAbpAccountUnLinkUserInput) => {
    return this.cachablePost(accountLinkUserUnlinkCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkUserIsLinkedCreate = (request: VoloAbpAccountIsLinkedInput) => {
    return this.post(accountLinkUserIsLinkedCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserIsLinkedCreate = (request: VoloAbpAccountIsLinkedInput) => {
    return this.cachablePost(accountLinkUserIsLinkedCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkUserGenerateLinkTokenCreate = (request: undefined) => {
    return this.post(accountLinkUserGenerateLinkTokenCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserGenerateLinkTokenCreate = (request: undefined) => {
    return this.cachablePost(accountLinkUserGenerateLinkTokenCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkUserVerifyLinkTokenCreate = (request: VoloAbpAccountVerifyLinkTokenInput) => {
    return this.post(accountLinkUserVerifyLinkTokenCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserVerifyLinkTokenCreate = (request: VoloAbpAccountVerifyLinkTokenInput) => {
    return this.cachablePost(accountLinkUserVerifyLinkTokenCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkUserGenerateLinkLoginTokenCreate = (request: undefined) => {
    return this.post(accountLinkUserGenerateLinkLoginTokenCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserGenerateLinkLoginTokenCreate = (request: undefined) => {
    return this.cachablePost(accountLinkUserGenerateLinkLoginTokenCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkUserVerifyLinkLoginTokenCreate = (request: VoloAbpAccountVerifyLinkLoginTokenInput) => {
    return this.post(accountLinkUserVerifyLinkLoginTokenCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserVerifyLinkLoginTokenCreate = (request: VoloAbpAccountVerifyLinkLoginTokenInput) => {
    return this.cachablePost(accountLinkUserVerifyLinkLoginTokenCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountLinkUserList = (request: undefined) => {
    return this.get(accountLinkUserListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountLinkUserList = (request: undefined) => {
    return this.cachableGet(accountLinkUserListConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityUsersDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityUsersDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersUpdate = (request: VoloAbpIdentityIdentityUserUpdateDto) => {
    return this.put(identityUsersUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersDelete = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.delete(identityUsersDeleteConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersList = (request: IdentityUsersListParams) => {
    return this.get(identityUsersListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersList = (request: IdentityUsersListParams) => {
    return this.cachableGet(identityUsersListConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersCreate = (request: VoloAbpIdentityIdentityUserCreateDto) => {
    return this.post(identityUsersCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersCreate = (request: VoloAbpIdentityIdentityUserCreateDto) => {
    return this.cachablePost(identityUsersCreateConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersRolesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityUsersRolesDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersRolesDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityUsersRolesDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersRolesUpdate = (request: VoloAbpIdentityIdentityUserUpdateRolesDto) => {
    return this.put(identityUsersRolesUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersAssignableRolesList = (request: undefined) => {
    return this.get(identityUsersAssignableRolesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersAssignableRolesList = (request: undefined) => {
    return this.cachableGet(identityUsersAssignableRolesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersAvailableOrganizationUnitsList = (request: undefined) => {
    return this.get(identityUsersAvailableOrganizationUnitsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersAvailableOrganizationUnitsList = (request: undefined) => {
    return this.cachableGet(identityUsersAvailableOrganizationUnitsListConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersAllClaimTypesList = (request: undefined) => {
    return this.get(identityUsersAllClaimTypesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersAllClaimTypesList = (request: undefined) => {
    return this.cachableGet(identityUsersAllClaimTypesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersClaimsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityUsersClaimsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersClaimsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityUsersClaimsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersClaimsUpdate = (request: VoloAbpIdentityIdentityUserClaimDto[]) => {
    return this.put(identityUsersClaimsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersOrganizationUnitsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityUsersOrganizationUnitsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersOrganizationUnitsDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityUsersOrganizationUnitsDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersLockUpdate = (request: {
    /** @format uuid */
    id: string;
    /** @format date-time */
    lockoutEnd: string;
  }) => {
    return this.put(identityUsersLockUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersUnlockUpdate = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.put(identityUsersUnlockUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersByUsernameDetail = (request: { username: string }) => {
    return this.get(identityUsersByUsernameDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersByUsernameDetail = (request: { username: string }) => {
    return this.cachableGet(identityUsersByUsernameDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersByEmailDetail = (request: { email: string }) => {
    return this.get(identityUsersByEmailDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersByEmailDetail = (request: { email: string }) => {
    return this.cachableGet(identityUsersByEmailDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersTwoFactorEnabledDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(identityUsersTwoFactorEnabledDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersTwoFactorEnabledDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(identityUsersTwoFactorEnabledDetailConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersTwoFactorUpdate = (request: {
    /** @format uuid */
    id: string;
    enabled: boolean;
  }) => {
    return this.put(identityUsersTwoFactorUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersChangePasswordUpdate = (request: VoloAbpIdentityIdentityUserUpdatePasswordInput) => {
    return this.put(identityUsersChangePasswordUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  identityUsersLookupRolesList = (request: undefined) => {
    return this.get(identityUsersLookupRolesListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersLookupRolesList = (request: undefined) => {
    return this.cachableGet(identityUsersLookupRolesListConfig, request);
  };
  /**
   * No description
   *
   */
  identityUsersLookupOrganizationUnitsList = (request: undefined) => {
    return this.get(identityUsersLookupOrganizationUnitsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableIdentityUsersLookupOrganizationUnitsList = (request: undefined) => {
    return this.cachableGet(identityUsersLookupOrganizationUnitsListConfig, request);
  };
}

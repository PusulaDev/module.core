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
  AccountConfirmationStateListParams,
  AccountRecaptchaValidateListParams,
  AccountSecurityLogsListParams,
  AccountTwoFactorProvidersListParams,
  VoloAbpAccountConfirmEmailInput,
  VoloAbpAccountConfirmPhoneNumberInput,
  VoloAbpAccountIdentityUserConfirmationStateDto,
  VoloAbpAccountProfilePictureSourceDto,
  VoloAbpAccountRegisterDto,
  VoloAbpAccountResetPasswordDto,
  VoloAbpAccountSendEmailConfirmationTokenDto,
  VoloAbpAccountSendPasswordResetCodeDto,
  VoloAbpAccountSendPhoneNumberConfirmationTokenDto,
  VoloAbpAccountSendTwoFactorCodeInput,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpIdentityIdentityUserDto,
} from "./data-contracts";

export const accountRegisterCreateConfig: ICachableRequestConfig<
  VoloAbpAccountRegisterDto,
  VoloAbpIdentityIdentityUserDto
> = {
  url: "/api/account/register",
  cacheKey: "accountRegisterCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const accountSendPasswordResetCodeCreateConfig: ICachableRequestConfig<
  VoloAbpAccountSendPasswordResetCodeDto,
  void
> = {
  url: "/api/account/send-password-reset-code",
  cacheKey: "accountSendPasswordResetCodeCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountResetPasswordCreateConfig: ICachableRequestConfig<VoloAbpAccountResetPasswordDto, void> = {
  url: "/api/account/reset-password",
  cacheKey: "accountResetPasswordCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountConfirmationStateListConfig: ICachableRequestConfig<
  AccountConfirmationStateListParams,
  VoloAbpAccountIdentityUserConfirmationStateDto
> = {
  url: "/api/account/confirmation-state",
  cacheKey: "accountConfirmationStateList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountSendPhoneNumberConfirmationTokenCreateConfig: ICachableRequestConfig<
  VoloAbpAccountSendPhoneNumberConfirmationTokenDto,
  void
> = {
  url: "/api/account/send-phone-number-confirmation-token",
  cacheKey: "accountSendPhoneNumberConfirmationTokenCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountSendEmailConfirmationTokenCreateConfig: ICachableRequestConfig<
  VoloAbpAccountSendEmailConfirmationTokenDto,
  void
> = {
  url: "/api/account/send-email-confirmation-token",
  cacheKey: "accountSendEmailConfirmationTokenCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountConfirmPhoneNumberCreateConfig: ICachableRequestConfig<
  VoloAbpAccountConfirmPhoneNumberInput,
  void
> = {
  url: "/api/account/confirm-phone-number",
  cacheKey: "accountConfirmPhoneNumberCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountConfirmEmailCreateConfig: ICachableRequestConfig<VoloAbpAccountConfirmEmailInput, void> = {
  url: "/api/account/confirm-email",
  cacheKey: "accountConfirmEmailCreate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

export const accountProfilePictureCreateConfig: ICachableRequestConfig<
  {
    /** @format binary */
    ImageContent?: File;
  },
  void
> = {
  url: "/api/account/profile-picture",
  cacheKey: "accountProfilePictureCreate",
  headers: { [contentTypeKey]: EnumContentType.FormData },
};

export const accountProfilePictureDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  VoloAbpAccountProfilePictureSourceDto
> = {
  url: "/api/account/profile-picture/${id}",
  cacheKey: "accountProfilePictureDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const accountTwoFactorProvidersListConfig: ICachableRequestConfig<
  AccountTwoFactorProvidersListParams,
  string[]
> = {
  url: "/api/account/two-factor-providers",
  cacheKey: "accountTwoFactorProvidersList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountSendTwoFactorCodeCreateConfig: ICachableRequestConfig<VoloAbpAccountSendTwoFactorCodeInput, void> =
  {
    url: "/api/account/send-two-factor-code",
    cacheKey: "accountSendTwoFactorCodeCreate",
    headers: { [contentTypeKey]: EnumContentType.Json },
  };

export const accountSecurityLogsListConfig: ICachableRequestConfig<
  AccountSecurityLogsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/account/security-logs",
  cacheKey: "accountSecurityLogsList",
  responseFormat: EnumResponseFormat.Json,
};

export const accountProfilePictureFileDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    id: string;
  },
  File
> = {
  url: "/api/account/profile-picture-file/${id}",
  cacheKey: "accountProfilePictureFileDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const accountRecaptchaValidateListConfig: ICachableRequestConfig<AccountRecaptchaValidateListParams, void> = {
  url: "/api/account/recaptcha-validate",
  cacheKey: "accountRecaptchaValidateList",
};

@injectable.provider({ key: "AccountProvider" })
export class AccountProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  accountRegisterCreate = (request: VoloAbpAccountRegisterDto) => {
    return this.post(accountRegisterCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountRegisterCreate = (request: VoloAbpAccountRegisterDto) => {
    return this.cachablePost(accountRegisterCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountSendPasswordResetCodeCreate = (request: VoloAbpAccountSendPasswordResetCodeDto) => {
    return this.post(accountSendPasswordResetCodeCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountSendPasswordResetCodeCreate = (request: VoloAbpAccountSendPasswordResetCodeDto) => {
    return this.cachablePost(accountSendPasswordResetCodeCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountResetPasswordCreate = (request: VoloAbpAccountResetPasswordDto) => {
    return this.post(accountResetPasswordCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountResetPasswordCreate = (request: VoloAbpAccountResetPasswordDto) => {
    return this.cachablePost(accountResetPasswordCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountConfirmationStateList = (request: AccountConfirmationStateListParams) => {
    return this.get(accountConfirmationStateListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountConfirmationStateList = (request: AccountConfirmationStateListParams) => {
    return this.cachableGet(accountConfirmationStateListConfig, request);
  };
  /**
   * No description
   *
   */
  accountSendPhoneNumberConfirmationTokenCreate = (request: VoloAbpAccountSendPhoneNumberConfirmationTokenDto) => {
    return this.post(accountSendPhoneNumberConfirmationTokenCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountSendPhoneNumberConfirmationTokenCreate = (
    request: VoloAbpAccountSendPhoneNumberConfirmationTokenDto,
  ) => {
    return this.cachablePost(accountSendPhoneNumberConfirmationTokenCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountSendEmailConfirmationTokenCreate = (request: VoloAbpAccountSendEmailConfirmationTokenDto) => {
    return this.post(accountSendEmailConfirmationTokenCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountSendEmailConfirmationTokenCreate = (request: VoloAbpAccountSendEmailConfirmationTokenDto) => {
    return this.cachablePost(accountSendEmailConfirmationTokenCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountConfirmPhoneNumberCreate = (request: VoloAbpAccountConfirmPhoneNumberInput) => {
    return this.post(accountConfirmPhoneNumberCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountConfirmPhoneNumberCreate = (request: VoloAbpAccountConfirmPhoneNumberInput) => {
    return this.cachablePost(accountConfirmPhoneNumberCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountConfirmEmailCreate = (request: VoloAbpAccountConfirmEmailInput) => {
    return this.post(accountConfirmEmailCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountConfirmEmailCreate = (request: VoloAbpAccountConfirmEmailInput) => {
    return this.cachablePost(accountConfirmEmailCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountProfilePictureCreate = (request: {
    /** @format binary */
    ImageContent?: File;
  }) => {
    return this.post(accountProfilePictureCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountProfilePictureCreate = (request: {
    /** @format binary */
    ImageContent?: File;
  }) => {
    return this.cachablePost(accountProfilePictureCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountProfilePictureDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(accountProfilePictureDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountProfilePictureDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(accountProfilePictureDetailConfig, request);
  };
  /**
   * No description
   *
   */
  accountTwoFactorProvidersList = (request: AccountTwoFactorProvidersListParams) => {
    return this.get(accountTwoFactorProvidersListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountTwoFactorProvidersList = (request: AccountTwoFactorProvidersListParams) => {
    return this.cachableGet(accountTwoFactorProvidersListConfig, request);
  };
  /**
   * No description
   *
   */
  accountSendTwoFactorCodeCreate = (request: VoloAbpAccountSendTwoFactorCodeInput) => {
    return this.post(accountSendTwoFactorCodeCreateConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountSendTwoFactorCodeCreate = (request: VoloAbpAccountSendTwoFactorCodeInput) => {
    return this.cachablePost(accountSendTwoFactorCodeCreateConfig, request);
  };
  /**
   * No description
   *
   */
  accountSecurityLogsList = (request: AccountSecurityLogsListParams) => {
    return this.get(accountSecurityLogsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountSecurityLogsList = (request: AccountSecurityLogsListParams) => {
    return this.cachableGet(accountSecurityLogsListConfig, request);
  };
  /**
   * No description
   *
   */
  accountProfilePictureFileDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.get(accountProfilePictureFileDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountProfilePictureFileDetail = (request: {
    /** @format uuid */
    id: string;
  }) => {
    return this.cachableGet(accountProfilePictureFileDetailConfig, request);
  };
  /**
   * No description
   *
   */
  accountRecaptchaValidateList = (request: AccountRecaptchaValidateListParams) => {
    return this.get(accountRecaptchaValidateListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableAccountRecaptchaValidateList = (request: AccountRecaptchaValidateListParams) => {
    return this.cachableGet(accountRecaptchaValidateListConfig, request);
  };
}

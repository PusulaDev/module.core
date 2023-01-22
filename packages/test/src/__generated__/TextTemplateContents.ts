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
  TextTemplateManagementTemplateContentsListParams,
  VoloAbpTextTemplateManagementTextTemplatesRestoreTemplateContentInput,
  VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto,
  VoloAbpTextTemplateManagementTextTemplatesUpdateTemplateContentInput,
} from "./data-contracts";

export const textTemplateManagementTemplateContentsListConfig: ICachableRequestConfig<
  TextTemplateManagementTemplateContentsListParams,
  VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto
> = {
  url: "/api/text-template-management/template-contents",
  cacheKey: "textTemplateManagementTemplateContentsList",
  responseFormat: EnumResponseFormat.Json,
};

export const textTemplateManagementTemplateContentsUpdateConfig: ICachableRequestConfig<
  VoloAbpTextTemplateManagementTextTemplatesUpdateTemplateContentInput,
  VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto
> = {
  url: "/api/text-template-management/template-contents",
  cacheKey: "textTemplateManagementTemplateContentsUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
  responseFormat: EnumResponseFormat.Json,
};

export const textTemplateManagementTemplateContentsRestoreToDefaultUpdateConfig: ICachableRequestConfig<
  VoloAbpTextTemplateManagementTextTemplatesRestoreTemplateContentInput,
  void
> = {
  url: "/api/text-template-management/template-contents/restore-to-default",
  cacheKey: "textTemplateManagementTemplateContentsRestoreToDefaultUpdate",
  headers: { [contentTypeKey]: EnumContentType.Json },
};

@injectable.provider({ key: "TextTemplateContentsProvider" })
export class TextTemplateContentsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  textTemplateManagementTemplateContentsList = (request: TextTemplateManagementTemplateContentsListParams) => {
    return this.get(textTemplateManagementTemplateContentsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTextTemplateManagementTemplateContentsList = (request: TextTemplateManagementTemplateContentsListParams) => {
    return this.cachableGet(textTemplateManagementTemplateContentsListConfig, request);
  };
  /**
   * No description
   *
   */
  textTemplateManagementTemplateContentsUpdate = (
    request: VoloAbpTextTemplateManagementTextTemplatesUpdateTemplateContentInput,
  ) => {
    return this.put(textTemplateManagementTemplateContentsUpdateConfig, request);
  };

  /**
   * No description
   *
   */
  textTemplateManagementTemplateContentsRestoreToDefaultUpdate = (
    request: VoloAbpTextTemplateManagementTextTemplatesRestoreTemplateContentInput,
  ) => {
    return this.put(textTemplateManagementTemplateContentsRestoreToDefaultUpdateConfig, request);
  };
}

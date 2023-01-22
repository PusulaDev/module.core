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
  CoreProvider,
  EnumResponseFormat,
  inject,
  type ICachableRequestConfig,
  type IHTTPClient,
  type SessionStorageCache,
} from "@pusula/module.core";
import { injectable } from "../module";

import {
  TextTemplateManagementTemplateDefinitionsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDtoVoloAbpTextTemplateManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull,
  VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto,
} from "./data-contracts";

export const textTemplateManagementTemplateDefinitionsListConfig: ICachableRequestConfig<
  TextTemplateManagementTemplateDefinitionsListParams,
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDtoVoloAbpTextTemplateManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull
> = {
  url: "/api/text-template-management/template-definitions",
  cacheKey: "textTemplateManagementTemplateDefinitionsList",
  responseFormat: EnumResponseFormat.Json,
};

export const textTemplateManagementTemplateDefinitionsDetailConfig: ICachableRequestConfig<
  {
    name: string;
  },
  VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto
> = {
  url: "/api/text-template-management/template-definitions/${name}",
  cacheKey: "textTemplateManagementTemplateDefinitionsDetail",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "TextTemplateDefinitionsProvider" })
export class TextTemplateDefinitionsProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  textTemplateManagementTemplateDefinitionsList = (request: TextTemplateManagementTemplateDefinitionsListParams) => {
    return this.get(textTemplateManagementTemplateDefinitionsListConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTextTemplateManagementTemplateDefinitionsList = (
    request: TextTemplateManagementTemplateDefinitionsListParams,
  ) => {
    return this.cachableGet(textTemplateManagementTemplateDefinitionsListConfig, request);
  };
  /**
   * No description
   *
   */
  textTemplateManagementTemplateDefinitionsDetail = (request: { name: string }) => {
    return this.get(textTemplateManagementTemplateDefinitionsDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachableTextTemplateManagementTemplateDefinitionsDetail = (request: { name: string }) => {
    return this.cachableGet(textTemplateManagementTemplateDefinitionsDetailConfig, request);
  };
}

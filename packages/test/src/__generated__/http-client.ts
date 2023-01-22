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

import { FetchHTTPClient, IHTTPClientOptions } from "@pusula/module.core";
import { createError } from "../utils";

export const createHttpClient = (options: Pick<IHTTPClientOptions, "protocol" | "baseUrl">) => {
  const coreHttpClient = new FetchHTTPClient({
    protocol: options.protocol,
    baseUrl: options.baseUrl,
    preventRequestDuplication: true,
    headers: {
      "content-type": "application/json",
    },
    createErrorFn: createError,
  });

  return coreHttpClient;
};

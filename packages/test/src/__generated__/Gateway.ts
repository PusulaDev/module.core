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

import { VoloPaymentGatewaysGatewayDto } from "./data-contracts";

export const paymentGatewaysListConfig: ICachableRequestConfig<undefined, VoloPaymentGatewaysGatewayDto[]> = {
  url: "/api/payment/gateways",
  cacheKey: "paymentGatewaysList",
  responseFormat: EnumResponseFormat.Json,
};

export const paymentGatewaysSubscriptionSupportedListConfig: ICachableRequestConfig<
  undefined,
  VoloPaymentGatewaysGatewayDto[]
> = {
  url: "/api/payment/gateways/subscription-supported",
  cacheKey: "paymentGatewaysSubscriptionSupportedList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "GatewayProvider" })
export class GatewayProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  paymentGatewaysList = (request: undefined) => {
    return this.get(paymentGatewaysListConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePaymentGatewaysList = (request: undefined) => {
    return this.cachableGet(paymentGatewaysListConfig, request);
  };
  /**
   * No description
   *
   */
  paymentGatewaysSubscriptionSupportedList = (request: undefined) => {
    return this.get(paymentGatewaysSubscriptionSupportedListConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePaymentGatewaysSubscriptionSupportedList = (request: undefined) => {
    return this.cachableGet(paymentGatewaysSubscriptionSupportedListConfig, request);
  };
}

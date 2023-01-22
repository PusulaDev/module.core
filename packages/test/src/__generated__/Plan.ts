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

import { VoloPaymentPlansGatewayPlanDto, VoloPaymentPlansPlanDto } from "./data-contracts";

export const paymentPlansDetailConfig: ICachableRequestConfig<
  {
    /** @format uuid */
    planId: string;
    gateway: string;
  },
  VoloPaymentPlansGatewayPlanDto
> = {
  url: "/api/payment/plans/${planId}/${gateway}",
  cacheKey: "paymentPlansDetail",
  responseFormat: EnumResponseFormat.Json,
};

export const paymentPlansListConfig: ICachableRequestConfig<undefined, VoloPaymentPlansPlanDto[]> = {
  url: "/api/payment/plans",
  cacheKey: "paymentPlansList",
  responseFormat: EnumResponseFormat.Json,
};

@injectable.provider({ key: "PlanProvider" })
export class PlanProvider extends CoreProvider {
  constructor(client: IHTTPClient, @inject("SessionStorageCache") protected cache: SessionStorageCache) {
    super(client);
  }

  /**
   * No description
   *
   */
  paymentPlansDetail = (request: {
    /** @format uuid */
    planId: string;
    gateway: string;
  }) => {
    return this.get(paymentPlansDetailConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePaymentPlansDetail = (request: {
    /** @format uuid */
    planId: string;
    gateway: string;
  }) => {
    return this.cachableGet(paymentPlansDetailConfig, request);
  };
  /**
   * No description
   *
   */
  paymentPlansList = (request: undefined) => {
    return this.get(paymentPlansListConfig, request);
  };

  /**
   * No description
   *
   */
  cachablePaymentPlansList = (request: undefined) => {
    return this.cachableGet(paymentPlansListConfig, request);
  };
}

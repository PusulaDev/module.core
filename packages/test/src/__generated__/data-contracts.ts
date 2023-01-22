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

export interface AbpApiDefinitionListParams {
  IncludeTypes?: boolean;
}

export interface AccountConfirmationStateListParams {
  /** @format uuid */
  id?: string;
}

export interface AccountExternalProviderByNameListParams {
  /** @format uuid */
  TenantId?: string;
  Name?: string;
}

export interface AccountMyProfileSetTwoFactorEnabledCreateParams {
  enabled?: boolean;
}

export interface AccountProfilePictureCreateParams {
  Type?: VoloAbpAccountProfilePictureType;
}

export interface AccountRecaptchaValidateListParams {
  captchaResponse?: string;
}

export interface AccountSecurityLogsListParams {
  /** @format date-time */
  StartTime?: string;
  /** @format date-time */
  EndTime?: string;
  ApplicationName?: string;
  Identity?: string;
  Action?: string;
  UserName?: string;
  ClientId?: string;
  CorrelationId?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AccountTwoFactorProvidersListParams {
  /** @format uuid */
  UserId: string;
  Token: string;
}

export interface AppLaboratorysListParams {
  FilterText?: string;
  Code?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppLaboratorysSampleTypeLookupListParams {
  Filter?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppMaterialsListParams {
  FilterText?: string;
  Code?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppMaterialsSampleTypeLookupListParams {
  Filter?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppPatientsListParams {
  FilterText?: string;
  PatientId?: string;
  No?: string;
  Name?: string;
  /** @format int32 */
  GenderMin?: number;
  /** @format int32 */
  GenderMax?: number;
  IdentityNumber?: string;
  /** @format date-time */
  BirthDateMin?: string;
  /** @format date-time */
  BirthDateMax?: string;
  EMail?: string;
  MobilePhone?: string;
  Phone?: string;
  MotherName?: string;
  FatherName?: string;
  PassportNumber?: string;
  /** @format int32 */
  VersionIdMin?: number;
  /** @format int32 */
  VersionIdMax?: number;
  /** @format int32 */
  StateMin?: number;
  /** @format int32 */
  StateMax?: number;
  Surname?: string;
  /** @format int32 */
  OwnerTenantId?: number;
  /** @format int32 */
  OwnerIdMin?: number;
  /** @format int32 */
  OwnerIdMax?: number;
  Adress?: string;
  /** @format int32 */
  TenantIdMin?: number;
  /** @format int32 */
  TenantIdMax?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppResultsDetailParams {
  patientNo?: string;
  /** @format int32 */
  patientId?: number;
  barcode?: string;
  visitNo: string;
}

export interface AppResultsListParams {
  FilterText?: string;
  PatientNo?: string;
  PatientFullName?: string;
  /** @format date-time */
  TakenDateMin?: string;
  /** @format date-time */
  TakenDateMax?: string;
  /** @format int32 */
  OwnerTenantId?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppResultsResultListListParams {
  /** @format date-time */
  TakenDateMin?: string;
  /** @format date-time */
  TakenDateMax?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppResultsTestResultListParams {
  ReferenceNo?: string;
  /** @format int32 */
  Id?: number;
  IsWebService?: boolean;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppSampleProcessStatusesListParams {
  FilterText?: string;
  /** @format int32 */
  SampleProcessIdMin?: number;
  /** @format int32 */
  SampleProcessIdMax?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppSampleProcessesListParams {
  FilterText?: string;
  No?: string;
  /** @format date-time */
  StatusDateMin?: string;
  /** @format date-time */
  StatusDateMax?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppSampleTypesListParams {
  FilterText?: string;
  Code?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppSampleTypesSampleTypeLookupListParams {
  Filter?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTenantTestPoolsListParams {
  FilterText?: string;
  /** @format int32 */
  TenantIdMin?: number;
  /** @format int32 */
  TenantIdMax?: number;
  /** @format int32 */
  TestPoolId?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTenantTestPoolsTestPoolLookupListParams {
  Filter?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTenantUsersListParams {
  FilterText?: string;
  /** @format int32 */
  TenantIdMin?: number;
  /** @format int32 */
  TenantIdMax?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTenantsListParams {
  FilterText?: string;
  Name?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestDetailsListParams {
  FilterText?: string;
  Id?: string;
  MaterialId?: string;
  SampleTypeId?: string;
  /** @format int32 */
  TenantId?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestGroupsListParams {
  FilterText?: string;
  Code?: string;
  Name?: string;
  IsActive?: boolean;
  /** @format int32 */
  StateMin?: number;
  /** @format int32 */
  StateMax?: number;
  TestIds?: string[];
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestParentTestsListParams {
  FilterText?: string;
  /** @format int32 */
  Id?: number;
  TestId?: string;
  ParentTestId?: string;
  /** @format int32 */
  TenantId?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestPoolItemsListParams {
  FilterText?: string;
  TestId?: string;
  /** @format int32 */
  TestPoolId?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestPoolItemsTestPoolLookupListParams {
  Filter?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestPoolsListParams {
  FilterText?: string;
  Name?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestProcessStatusesListParams {
  FilterText?: string;
  /** @format int32 */
  TestProcessIdMin?: number;
  /** @format int32 */
  TestProcessIdMax?: number;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestProcessesListParams {
  FilterText?: string;
  TestId?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppTestsListParams {
  FilterText?: string;
  Id?: string;
  Name?: string;
  Code?: string;
  IsActive?: boolean;
  TestGroupId?: string;
  LoincCode?: string;
  /** @format int32 */
  StateMin?: number;
  /** @format int32 */
  StateMax?: number;
  TestIds?: string[];
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AppVisitsListParams {
  FilterText?: string;
  No?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AuditLoggingAuditLogsEntityChangesListParams {
  /** @format uuid */
  AuditLogId?: string;
  EntityChangeType?: VoloAbpAuditingEntityChangeType;
  EntityId?: string;
  EntityTypeFullName?: string;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AuditLoggingAuditLogsEntityChangesWithUsernameListParams {
  EntityId?: string;
  EntityTypeFullName?: string;
}

export interface AuditLoggingAuditLogsListParams {
  /** @format date-time */
  StartTime?: string;
  /** @format date-time */
  EndTime?: string;
  /**
   * @minLength 0
   * @maxLength 512
   */
  Url?: string;
  /**
   * @minLength 0
   * @maxLength 128
   */
  UserName?: string;
  ApplicationName?: string;
  ClientIpAddress?: string;
  CorrelationId?: string;
  /**
   * @minLength 0
   * @maxLength 16
   */
  HttpMethod?: string;
  HttpStatusCode?: SystemNetHttpStatusCode;
  /** @format int32 */
  MaxExecutionDuration?: number;
  /** @format int32 */
  MinExecutionDuration?: number;
  HasException?: boolean;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface AuditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayListParams {
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
}

export interface AuditLoggingAuditLogsStatisticsErrorRateListParams {
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
}

export interface COMEDLISEXTERNALLaboratoriesLaboratoryCreateDto {
  /** @format date-time */
  createdOn: string;
  isActive: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALLaboratoriesLaboratoryDto {
  /** @format date-time */
  createdOn?: string;
  id?: string | null;
  isActive?: boolean;
  name?: string | null;
  /** @format int32 */
  state?: number;
}

export interface COMEDLISEXTERNALLaboratoriesLaboratoryUpdateDto {
  /** @format date-time */
  createdOn: string;
  isActive: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALMaterialsMaterialCreateDto {
  /** @format date-time */
  createdOn: string;
  isActive: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALMaterialsMaterialDto {
  /** @format date-time */
  createdOn?: string;
  id?: string | null;
  isActive?: boolean;
  name?: string | null;
  /** @format int32 */
  state?: number;
}

export interface COMEDLISEXTERNALMaterialsMaterialUpdateDto {
  /** @format date-time */
  createdOn: string;
  isActive: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALPatientsPatientCreateDto {
  adress?: string | null;
  /** @format date-time */
  birthDate: string;
  /** @format date-time */
  createdOn?: string;
  eMail?: string | null;
  fatherName?: string | null;
  /** @format int32 */
  gender: number;
  identityNumber?: string | null;
  isVIP?: boolean;
  mobilePhone?: string | null;
  motherName?: string | null;
  /**
   * @minLength 0
   * @maxLength 150
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  passportNumber?: string | null;
  phone?: string | null;
  /** @format int32 */
  state: number;
  /**
   * @minLength 0
   * @maxLength 150
   */
  surname: string;
  /** @format int32 */
  tenantId: number;
  /** @format int64 */
  versionId: number;
}

export interface COMEDLISEXTERNALPatientsPatientDto {
  adress?: string | null;
  /** @format date-time */
  birthDate?: string;
  eMail?: string | null;
  fatherName?: string | null;
  /** @format int32 */
  gender?: number;
  /** @format int32 */
  id?: number;
  identityNumber?: string | null;
  mobilePhone?: string | null;
  motherName?: string | null;
  name?: string | null;
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  passportNumber?: string | null;
  phone?: string | null;
  /** @format int32 */
  state?: number;
  surname?: string | null;
  /** @format int32 */
  tenantId?: number;
  /** @format int64 */
  versionId?: number | null;
}

export interface COMEDLISEXTERNALPatientsPatientUpdateDto {
  adress?: string | null;
  /** @format date-time */
  birthDate?: string | null;
  /** @format date-time */
  createdOn?: string;
  eMail?: string | null;
  fatherName?: string | null;
  /** @format int32 */
  gender?: number | null;
  /** @format int32 */
  id?: number;
  identityNumber?: string | null;
  isVIP?: boolean;
  mobilePhone?: string | null;
  motherName?: string | null;
  /**
   * @minLength 0
   * @maxLength 150
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 20
   */
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  passportNumber?: string | null;
  phone?: string | null;
  /** @format int32 */
  state?: number;
  /**
   * @minLength 0
   * @maxLength 150
   */
  surname?: string | null;
  /** @format int32 */
  tenantId: number;
  /** @format int64 */
  versionId?: number | null;
}

export interface COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusCreateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  sampleProcessId: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format int32 */
  tenantId: number;
}

export interface COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  sampleProcess?: COMEDLISEXTERNALSampleProcessesSampleProcessDto;
  /** @format int32 */
  sampleProcessId?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  status?: number;
  /** @format date-time */
  statusDate?: string;
  /** @format int32 */
  statusPersonId?: number;
  /** @format int32 */
  tenantId?: number;
}

export interface COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusUpdateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  sampleProcessId: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format int32 */
  tenantId: number;
}

export interface COMEDLISEXTERNALSampleProcessesResultModelDto {
  isSuccess?: boolean;
  resultMessage?: string | null;
}

export interface COMEDLISEXTERNALSampleProcessesSampleProcessCreateDto {
  /** @format date-time */
  createdOn: string;
  laboratoryId: string;
  /** @format int32 */
  laboratoryUnitId: number;
  materialId: string;
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  reTakenCount?: number | null;
  referenceNo?: string | null;
  sampleTypeId: string;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format date-time */
  takenDate?: string | null;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  visitId: number;
}

export interface COMEDLISEXTERNALSampleProcessesSampleProcessDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  laboratoryId?: string | null;
  /** @format int32 */
  laboratoryUnitId?: number;
  materialId?: string | null;
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  reTakenCount?: number | null;
  referenceNo?: string | null;
  sampleTypeId?: string | null;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  status?: number;
  /** @format date-time */
  statusDate?: string;
  /** @format int32 */
  statusPersonId?: number;
  /** @format date-time */
  takenDate?: string | null;
  /** @format int32 */
  tenantId?: number;
  testList?: COMEDLISEXTERNALTestsTestDto[] | null;
  visit?: COMEDLISEXTERNALVisitsVisitDto;
  /** @format int32 */
  visitId?: number;
}

export interface COMEDLISEXTERNALSampleProcessesSampleProcessUpdateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  id?: number;
  laboratoryId: string;
  /** @format int32 */
  laboratoryUnitId: number;
  materialId: string;
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  reTakenCount?: number | null;
  referenceNo?: string | null;
  sampleTypeId: string;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format date-time */
  takenDate?: string | null;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  visitId: number;
}

export interface COMEDLISEXTERNALSampleProcessesSaveSampleDto {
  patientDto?: COMEDLISEXTERNALPatientsPatientCreateDto;
  /** @format int32 */
  patientId?: number | null;
  testList?: COMEDLISEXTERNALTestsTestDto[] | null;
}

export interface COMEDLISEXTERNALSampleTypesSampleTypeCreateDto {
  /** @format date-time */
  createdOn: string;
  isActive: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALSampleTypesSampleTypeDto {
  /** @format date-time */
  createdOn?: string;
  id?: string | null;
  isActive?: boolean;
  name?: string | null;
  /** @format int32 */
  state?: number;
}

export interface COMEDLISEXTERNALSampleTypesSampleTypeUpdateDto {
  code?: string | null;
  /** @format date-time */
  createdOn: string;
  isActive: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALSettingsParameterSettingsDto {
  /** @format int32 */
  isInsertPatientAndVisit?: number;
  resultPrintoutBaseUrl?: string | null;
  /** @format int32 */
  sampleBarcodeLenght?: number;
  /** @format int32 */
  tenantId?: number;
}

export interface COMEDLISEXTERNALSettingsUpdateParameterSettingsDto {
  /** @format int32 */
  isInsertPatientAndVisit: number;
  /** @maxLength 150 */
  resultPrintoutBaseUrl: string;
  /** @format int32 */
  sampleBarcodeLenght: number;
  /** @format int32 */
  tenantId: number;
}

export interface COMEDLISEXTERNALSharedLookupDto1SystemInt32SystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798E {
  displayName?: string | null;
  /** @format int32 */
  id?: number;
}

export interface COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798E {
  displayName?: string | null;
  id?: string | null;
}

export interface COMEDLISEXTERNALTenantTestPoolsTenantTestPoolCreateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  testPoolId?: number;
}

export interface COMEDLISEXTERNALTenantTestPoolsTenantTestPoolDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  tenantId?: number;
  /** @format int32 */
  testPoolId?: number;
}

export interface COMEDLISEXTERNALTenantTestPoolsTenantTestPoolUpdateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  testPoolId?: number;
}

export interface COMEDLISEXTERNALTenantTestPoolsTenantTestPoolWithNavigationPropertiesDto {
  tenantTestPool?: COMEDLISEXTERNALTenantTestPoolsTenantTestPoolDto;
  testPool?: COMEDLISEXTERNALTestPoolsTestPoolDto;
}

export interface COMEDLISEXTERNALTenantUsersTenantUserCreateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format uuid */
  userId: string;
}

export interface COMEDLISEXTERNALTenantUsersTenantUserDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  tenantId?: number;
  /** @format uuid */
  userId?: string;
}

export interface COMEDLISEXTERNALTenantUsersTenantUserUpdateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format uuid */
  userId: string;
}

export interface COMEDLISEXTERNALTenantsTenantCreateDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  isCurrent?: boolean | null;
  name: string;
  /** @format int32 */
  state: number;
  /** @format int32 */
  type?: number;
}

export interface COMEDLISEXTERNALTenantsTenantDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  isCurrent?: boolean | null;
  name?: string | null;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  type?: number;
}

export interface COMEDLISEXTERNALTenantsTenantUpdateDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  isCurrent?: boolean | null;
  name: string;
  /** @format int32 */
  state: number;
  /** @format int32 */
  type?: number;
}

export interface COMEDLISEXTERNALTestDetailsTestDetailCreateDto {
  /** @format int32 */
  isActive: number;
  /** @format int32 */
  isNewSampleMake: number;
  materialId?: string | null;
  sampleTypeId?: string | null;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  testResultType: number;
  /** @format int32 */
  unit?: number;
  /** @format int32 */
  workingTimeDays?: number | null;
  /** @format int32 */
  workingTimeEmergencyDays?: number | null;
  /** @format int32 */
  workingTimeEmergencyHours?: number | null;
  /** @format int32 */
  workingTimeEmergencyMinutes?: number | null;
  /** @format int32 */
  workingTimeHours?: number | null;
  /** @format int32 */
  workingTimeMinutes?: number | null;
}

export interface COMEDLISEXTERNALTestDetailsTestDetailDto {
  id?: string | null;
  isActive?: boolean;
  isNewSampleMake?: boolean;
  /** @format int32 */
  laboratoryUnitId?: number | null;
  materialId?: string | null;
  sampleTypeId?: string | null;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  tenantId?: number;
  /** @format int32 */
  testResultType?: number;
  unit?: string | null;
  /** @format int32 */
  workingTimeDays?: number | null;
  /** @format int32 */
  workingTimeEmergencyDays?: number | null;
  /** @format int32 */
  workingTimeEmergencyHours?: number | null;
  /** @format int32 */
  workingTimeEmergencyMinutes?: number | null;
  /** @format int32 */
  workingTimeHours?: number | null;
  /** @format int32 */
  workingTimeMinutes?: number | null;
}

export interface COMEDLISEXTERNALTestDetailsTestDetailUpdateDto {
  /** @format int32 */
  isActive: number;
  /** @format int32 */
  isNewSampleMake: number;
  materialId?: string | null;
  sampleTypeId?: string | null;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  testResultType: number;
  /** @format int32 */
  unit?: number;
  /** @format int32 */
  workingTimeDays?: number | null;
  /** @format int32 */
  workingTimeEmergencyDays?: number | null;
  /** @format int32 */
  workingTimeEmergencyHours?: number | null;
  /** @format int32 */
  workingTimeEmergencyMinutes?: number | null;
  /** @format int32 */
  workingTimeHours?: number | null;
  /** @format int32 */
  workingTimeMinutes?: number | null;
}

export interface COMEDLISEXTERNALTestGroupsTestGroupCreateDto {
  code: string;
  isActive?: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALTestGroupsTestGroupDto {
  code?: string | null;
  id?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  /** @format int32 */
  state?: number;
}

export interface COMEDLISEXTERNALTestGroupsTestGroupUpdateDto {
  code: string;
  isActive?: boolean;
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALTestParentTestsTestParentTestDto {
  /** @format int32 */
  id?: number;
  parentTestId?: string | null;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  tenantId?: number;
  testId?: string | null;
}

export interface COMEDLISEXTERNALTestPoolItemsSaveTestPoolItemDto {
  removeTestIds?: string[] | null;
  selectedTestIds?: string[] | null;
  /** @format int32 */
  testPoolId?: number;
}

export interface COMEDLISEXTERNALTestPoolItemsTestPoolItemCreateDto {
  testId: string;
  /** @format int32 */
  testPoolId?: number;
}

export interface COMEDLISEXTERNALTestPoolItemsTestPoolItemDto {
  /** @format int32 */
  id?: number;
  test?: COMEDLISEXTERNALTestsTestDto;
  testId?: string | null;
  /** @format int32 */
  testPoolId?: number;
}

export interface COMEDLISEXTERNALTestPoolItemsTestPoolItemUpdateDto {
  testId: string;
  /** @format int32 */
  testPoolId?: number;
}

export interface COMEDLISEXTERNALTestPoolItemsTestPoolItemWithNavigationPropertiesDto {
  testPool?: COMEDLISEXTERNALTestPoolsTestPoolDto;
  testPoolItem?: COMEDLISEXTERNALTestPoolItemsTestPoolItemDto;
}

export interface COMEDLISEXTERNALTestPoolsTestPoolCreateDto {
  /** @format date-time */
  createdOn: string;
  /**
   * @minLength 3
   * @maxLength 50
   */
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALTestPoolsTestPoolDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  state?: number;
}

export interface COMEDLISEXTERNALTestPoolsTestPoolUpdateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  id?: number;
  /**
   * @minLength 3
   * @maxLength 50
   */
  name: string;
  /** @format int32 */
  state: number;
}

export interface COMEDLISEXTERNALTestProcessStatusesTestProcessStatusCreateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  testProcessId: number;
}

export interface COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDto {
  /** @format date-time */
  createdOn?: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  status?: number;
  /** @format date-time */
  statusDate?: string;
  /** @format int32 */
  statusPersonId?: number;
  /** @format int32 */
  tenantId?: number;
  testProcess?: COMEDLISEXTERNALTestProcessesTestProcessDto;
  /** @format int32 */
  testProcessId?: number;
}

export interface COMEDLISEXTERNALTestProcessStatusesTestProcessStatusUpdateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  testProcessId: number;
}

export interface COMEDLISEXTERNALTestProcessesTestProcessCreateDto {
  /** @format date-time */
  createdOn: string;
  inVisible: boolean;
  isAntibioticRestriction: boolean;
  isContamination: boolean;
  isEmergency: boolean;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  parentId?: number | null;
  /** @format int32 */
  resultType: number;
  resultUnit?: string | null;
  /** @format int32 */
  sampleProcessId: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format int32 */
  tenantId: number;
  testId: string;
  /** @format int32 */
  testSubType?: number | null;
  /** @format int32 */
  testType: number;
  /** @format int32 */
  visitId?: number | null;
}

export interface COMEDLISEXTERNALTestProcessesTestProcessDto {
  /** @format date-time */
  createdOn?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  /** @format int32 */
  id?: number;
  inVisible?: boolean;
  isAntibioticRestriction?: boolean;
  isContamination?: boolean;
  isDeleted?: boolean;
  isEmergency?: boolean;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  parentId?: number | null;
  /** @format int32 */
  resultType?: number;
  resultUnit?: string | null;
  sampleProcess?: COMEDLISEXTERNALSampleProcessesSampleProcessDto;
  /** @format int32 */
  sampleProcessId?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  status?: number;
  /** @format date-time */
  statusDate?: string;
  /** @format int32 */
  statusPersonId?: number;
  /** @format int32 */
  tenantId?: number;
  testId?: string | null;
  /** @format int32 */
  testSubType?: number | null;
  /** @format int32 */
  testType?: number;
  /** @format int32 */
  visitId?: number | null;
}

export interface COMEDLISEXTERNALTestProcessesTestProcessUpdateDto {
  /** @format date-time */
  createdOn: string;
  /** @format int32 */
  id?: number;
  inVisible: boolean;
  isAntibioticRestriction: boolean;
  isContamination: boolean;
  isEmergency: boolean;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  parentId?: number | null;
  /** @format int32 */
  resultType: number;
  resultUnit?: string | null;
  /** @format int32 */
  sampleProcessId: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  status: number;
  /** @format date-time */
  statusDate: string;
  /** @format int32 */
  statusPersonId: number;
  /** @format int32 */
  tenantId: number;
  testId: string;
  /** @format int32 */
  testSubType?: number | null;
  /** @format int32 */
  testType: number;
  /** @format int32 */
  visitId?: number | null;
}

export interface COMEDLISEXTERNALTestsGetTestsInput {
  code?: string | null;
  filterText?: string | null;
  id?: string | null;
  isActive?: boolean | null;
  loincCode?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  name?: string | null;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** @format int32 */
  stateMax?: number | null;
  /** @format int32 */
  stateMin?: number | null;
  testGroupId?: string | null;
  testIds?: string[] | null;
}

export interface COMEDLISEXTERNALTestsTestCreateDto {
  code?: string | null;
  isActive?: boolean | null;
  laboratoryId?: string | null;
  loincCode?: string | null;
  name: string;
  /** @format int32 */
  state: number;
  testGroupId: string;
  /** @format int32 */
  testSubType?: number | null;
  /** @format int32 */
  testType: number;
}

export interface COMEDLISEXTERNALTestsTestDto {
  code?: string | null;
  id?: string | null;
  isActive?: boolean | null;
  laboratoryId?: string | null;
  loincCode?: string | null;
  name?: string | null;
  parentId?: string | null;
  referenceNo?: string | null;
  /** @format int32 */
  state?: number;
  testDetail?: COMEDLISEXTERNALTestDetailsTestDetailDto;
  testGroup?: COMEDLISEXTERNALTestGroupsTestGroupDto;
  testGroupId?: string | null;
  /** @format int32 */
  testSubType?: number | null;
  /** @format int32 */
  testType?: number;
}

export interface COMEDLISEXTERNALTestsTestUpdateDto {
  code?: string | null;
  isActive?: boolean | null;
  laboratoryId?: string | null;
  loincCode?: string | null;
  name: string;
  /** @format int32 */
  state: number;
  testGroupId: string;
  /** @format int32 */
  testSubType?: number | null;
  /** @format int32 */
  testType: number;
}

export interface COMEDLISEXTERNALViewsResultDto {
  /** @format date-time */
  acceptedDate?: string | null;
  barcode?: string | null;
  /** @format int32 */
  id?: number;
  identityNumber?: string | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  patientFullName?: string | null;
  /** @format int32 */
  patientId?: number;
  patientNo?: string | null;
  referenceNo?: string | null;
  /** @format int32 */
  sampleStatus?: number;
  sampleTypeId?: string | null;
  /** @format date-time */
  takenDate?: string | null;
  testCountInformation?: string | null;
  /** @format int32 */
  visitId?: number;
  visitNo?: string | null;
}

export interface COMEDLISEXTERNALViewsResultListDto {
  referenceNo?: string | null;
}

export interface COMEDLISEXTERNALViewsResultPrintoutDto {
  isSuccess?: boolean;
  /** @format byte */
  pdf?: string | null;
  resultDescription?: string | null;
}

export interface COMEDLISEXTERNALViewsTestResultsDto {
  barcode?: string | null;
  description?: string | null;
  /** @format date-time */
  expertApproveDate?: string | null;
  fileExtension?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  ownerTenantId?: number;
  /** @format int32 */
  parentId?: number | null;
  parentTestCode?: string | null;
  /** @format int32 */
  patientId?: number;
  patientNo?: string | null;
  /** @format byte */
  raporBinary?: string | null;
  referenceMax?: string | null;
  referenceMin?: string | null;
  referenceNo?: string | null;
  referenceValues?: string | null;
  result?: string | null;
  resultWaring?: string | null;
  testCode?: string | null;
  testName?: string | null;
  /** @format int32 */
  testStatus?: number;
  /** @format int32 */
  testType?: number;
  unit?: string | null;
  visitNo?: string | null;
}

export interface COMEDLISEXTERNALVisitsVisitCreateDto {
  /** @format int32 */
  clinicId?: number | null;
  /** @format date-time */
  createdOn: string;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  doctorId?: number | null;
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  patientId: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  type?: number;
}

export interface COMEDLISEXTERNALVisitsVisitDto {
  /** @format int32 */
  clinicId?: number | null;
  /** @format date-time */
  createdOn?: string;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  doctorId?: number | null;
  /** @format int32 */
  id?: number;
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  patient?: COMEDLISEXTERNALPatientsPatientDto;
  /** @format int32 */
  patientId?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  tenantId?: number;
  /** @format int32 */
  type?: number;
}

export interface COMEDLISEXTERNALVisitsVisitUpdateDto {
  /** @format int32 */
  clinicId?: number | null;
  /** @format date-time */
  createdOn?: string;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  doctorId?: number | null;
  no?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  /** @format int32 */
  ownerTenantId?: number | null;
  /** @format int32 */
  patientId: number;
  /** @format int32 */
  state: number;
  /** @format int32 */
  tenantId: number;
  /** @format int32 */
  type?: number;
}

export interface FeatureManagementFeaturesListParams {
  providerName?: string;
  providerKey?: string;
}

export interface FeatureManagementFeaturesUpdateParams {
  providerName?: string;
  providerKey?: string;
}

export interface IdentityClaimTypesListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityOrganizationUnitsAvailableRolesListParams {
  Filter?: string;
  /** @format uuid */
  Id?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityOrganizationUnitsAvailableUsersListParams {
  Filter?: string;
  /** @format uuid */
  Id?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityOrganizationUnitsDeleteParams {
  /** @format uuid */
  id?: string;
}

export interface IdentityOrganizationUnitsListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityOrganizationUnitsMembersDetailParams {
  Filter?: string;
  /** @format uuid */
  RoleId?: string;
  /** @format uuid */
  OrganizationUnitId?: string;
  UserName?: string;
  PhoneNumber?: string;
  EmailAddress?: string;
  IsLockedOut?: boolean;
  NotActive?: boolean;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
  /** @format uuid */
  id: string;
}

export interface IdentityOrganizationUnitsRolesDetailParams {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
  Sorting?: string;
  /** @format uuid */
  id: string;
}

export interface IdentityRolesListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentitySecurityLogsListParams {
  /** @format date-time */
  StartTime?: string;
  /** @format date-time */
  EndTime?: string;
  ApplicationName?: string;
  Identity?: string;
  Action?: string;
  UserName?: string;
  ClientId?: string;
  CorrelationId?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentitySecurityLogsMyListParams {
  /** @format date-time */
  StartTime?: string;
  /** @format date-time */
  EndTime?: string;
  ApplicationName?: string;
  Identity?: string;
  Action?: string;
  UserName?: string;
  ClientId?: string;
  CorrelationId?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityServerApiResourcesDeleteParams {
  /** @format uuid */
  id?: string;
}

export interface IdentityServerApiResourcesListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityServerApiScopesDeleteParams {
  /** @format uuid */
  id?: string;
}

export interface IdentityServerApiScopesListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityServerClientsDeleteParams {
  /** @format uuid */
  id?: string;
}

export interface IdentityServerClientsListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityServerIdentityResourcesDeleteParams {
  /** @format uuid */
  id?: string;
}

export interface IdentityServerIdentityResourcesListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityUsersListParams {
  Filter?: string;
  /** @format uuid */
  RoleId?: string;
  /** @format uuid */
  OrganizationUnitId?: string;
  UserName?: string;
  PhoneNumber?: string;
  EmailAddress?: string;
  IsLockedOut?: boolean;
  NotActive?: boolean;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface IdentityUsersLookupCountListParams {
  Filter?: string;
}

export interface IdentityUsersLookupSearchListParams {
  Sorting?: string;
  Filter?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface LanguageManagementLanguageTextsDetailParams {
  baseCultureName?: string;
  resourceName: string;
  cultureName: string;
  name: string;
}

export interface LanguageManagementLanguageTextsListParams {
  Filter?: string;
  ResourceName?: string;
  BaseCultureName?: string;
  TargetCultureName?: string;
  GetOnlyEmptyValues?: boolean;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface LanguageManagementLanguageTextsUpdateParams {
  value?: string;
  resourceName: string;
  cultureName: string;
  name: string;
}

export interface LanguageManagementLanguagesListParams {
  Filter?: string;
  ResourceName?: string;
  BaseCultureName?: string;
  TargetCultureName?: string;
  GetOnlyEmptyValues?: boolean;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface PermissionManagementPermissionsListParams {
  providerName?: string;
  providerKey?: string;
}

export interface PermissionManagementPermissionsUpdateParams {
  providerName?: string;
  providerKey?: string;
}

export interface SaasEditionsListParams {
  Filter?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface SaasTenantsListParams {
  Filter?: string;
  GetEditionNames?: boolean;
  /** @format uuid */
  EditionId?: string;
  /** @format date-time */
  ExpirationDateMin?: string;
  /** @format date-time */
  ExpirationDateMax?: string;
  ActivationState?: VoloSaasTenantActivationState;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

/** @format int32 */
export enum SystemNetHttpStatusCode {
  Value100 = 100,
  Value101 = 101,
  Value102 = 102,
  Value103 = 103,
  Value200 = 200,
  Value201 = 201,
  Value202 = 202,
  Value203 = 203,
  Value204 = 204,
  Value205 = 205,
  Value206 = 206,
  Value207 = 207,
  Value208 = 208,
  Value226 = 226,
  Value300 = 300,
  Value301 = 301,
  Value302 = 302,
  Value303 = 303,
  Value304 = 304,
  Value305 = 305,
  Value306 = 306,
  Value307 = 307,
  Value308 = 308,
  Value400 = 400,
  Value401 = 401,
  Value402 = 402,
  Value403 = 403,
  Value404 = 404,
  Value405 = 405,
  Value406 = 406,
  Value407 = 407,
  Value408 = 408,
  Value409 = 409,
  Value410 = 410,
  Value411 = 411,
  Value412 = 412,
  Value413 = 413,
  Value414 = 414,
  Value415 = 415,
  Value416 = 416,
  Value417 = 417,
  Value421 = 421,
  Value422 = 422,
  Value423 = 423,
  Value424 = 424,
  Value426 = 426,
  Value428 = 428,
  Value429 = 429,
  Value431 = 431,
  Value451 = 451,
  Value500 = 500,
  Value501 = 501,
  Value502 = 502,
  Value503 = 503,
  Value504 = 504,
  Value505 = 505,
  Value506 = 506,
  Value507 = 507,
  Value508 = 508,
  Value510 = 510,
  Value511 = 511,
}

export interface TextTemplateManagementTemplateContentsListParams {
  /**
   * @minLength 0
   * @maxLength 128
   */
  TemplateName: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  CultureName?: string;
}

export interface TextTemplateManagementTemplateDefinitionsListParams {
  FilterText?: string;
  Sorting?: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  SkipCount?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  MaxResultCount?: number;
}

export interface VoloAbpAccountAccountExternalProviderSettingsDto {
  settings?: VoloAbpAccountExternalProvidersExternalProviderSettings[] | null;
}

export interface VoloAbpAccountAccountLdapSettingsDto {
  enableLdapLogin?: boolean;
  ldapBaseDc?: string | null;
  ldapDomain?: string | null;
  ldapPassword?: string | null;
  ldapServerHost?: string | null;
  ldapServerPort?: string | null;
  ldapUserName?: string | null;
}

export interface VoloAbpAccountAccountRecaptchaSettingsDto {
  /**
   * @format double
   * @min 0.1
   * @max 1
   */
  score?: number;
  siteKey?: string | null;
  siteSecret?: string | null;
  useCaptchaOnLogin?: boolean;
  useCaptchaOnRegistration?: boolean;
  verifyBaseUrl?: string | null;
  /**
   * @format int32
   * @min 2
   * @max 3
   */
  version?: number;
}

export interface VoloAbpAccountAccountSettingsDto {
  enableLocalLogin?: boolean;
  isSelfRegistrationEnabled?: boolean;
}

export interface VoloAbpAccountAccountTwoFactorSettingsDto {
  isRememberBrowserEnabled?: boolean;
  twoFactorBehaviour?: VoloAbpIdentityFeaturesIdentityProTwoFactorBehaviour;
  usersCanChange?: boolean;
}

export interface VoloAbpAccountChangePasswordInput {
  /**
   * @minLength 0
   * @maxLength 128
   */
  currentPassword?: string | null;
  /**
   * @minLength 0
   * @maxLength 128
   */
  newPassword: string;
}

export interface VoloAbpAccountConfirmEmailInput {
  token: string;
  /** @format uuid */
  userId: string;
}

export interface VoloAbpAccountConfirmPhoneNumberInput {
  token: string;
  /** @format uuid */
  userId: string;
}

export interface VoloAbpAccountExternalProvidersExternalProviderDto {
  providers?: VoloAbpAccountExternalProvidersExternalProviderItemDto[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderItemDto {
  enabled?: boolean;
  name?: string | null;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderItemWithSecretDto {
  enabled?: boolean;
  name?: string | null;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  success?: boolean;
}

export interface VoloAbpAccountExternalProvidersExternalProviderSettings {
  enabled?: boolean;
  name?: string | null;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderSettingsProperty {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpAccountIdentityUserConfirmationStateDto {
  emailConfirmed?: boolean;
  phoneNumberConfirmed?: boolean;
}

export interface VoloAbpAccountIsLinkedInput {
  /** @format uuid */
  tenantId?: string | null;
  /** @format uuid */
  userId?: string;
}

export interface VoloAbpAccountLinkUserDto {
  directlyLinked?: boolean;
  /** @format uuid */
  targetTenantId?: string | null;
  targetTenantName?: string | null;
  /** @format uuid */
  targetUserId?: string;
  targetUserName?: string | null;
}

export interface VoloAbpAccountLinkUserInput {
  /** @format uuid */
  tenantId?: string | null;
  token: string;
  /** @format uuid */
  userId?: string;
}

export interface VoloAbpAccountProfileDto {
  concurrencyStamp?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  extraProperties?: Record<string, any>;
  hasPassword?: boolean;
  isExternal?: boolean;
  name?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  surname?: string | null;
  userName?: string | null;
}

export interface VoloAbpAccountProfilePictureSourceDto {
  /** @format byte */
  fileContent?: string | null;
  source?: string | null;
  type?: VoloAbpAccountProfilePictureType;
}

/** @format int32 */
export enum VoloAbpAccountProfilePictureType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult {
  description?: string | null;
  result?: VoloAbpAccountPublicWebAreasAccountControllersModelsLoginResultType;
}

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo {
  /** @format uuid */
  linkTenantId?: string | null;
  /** @format uuid */
  linkUserId: string;
}

/** @format int32 */
export enum VoloAbpAccountPublicWebAreasAccountControllersModelsLoginResultType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo {
  /**
   * @format password
   * @minLength 0
   * @maxLength 128
   */
  password: string;
  rememberMe?: boolean;
  /** @format uuid */
  tenanId?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  userNameOrEmailAddress: string;
}

export interface VoloAbpAccountRegisterDto {
  appName: string;
  captchaResponse?: string | null;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  emailAddress: string;
  extraProperties?: Record<string, any>;
  /**
   * @format password
   * @minLength 0
   * @maxLength 128
   */
  password: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
}

export interface VoloAbpAccountResetPasswordDto {
  password: string;
  resetToken: string;
  /** @format uuid */
  userId?: string;
}

export interface VoloAbpAccountSendEmailConfirmationTokenDto {
  appName: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
  /** @format uuid */
  userId: string;
}

export interface VoloAbpAccountSendPasswordResetCodeDto {
  appName: string;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  email: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
}

export interface VoloAbpAccountSendPhoneNumberConfirmationTokenDto {
  phoneNumber?: string | null;
  /** @format uuid */
  userId: string;
}

export interface VoloAbpAccountSendTwoFactorCodeInput {
  provider: string;
  token: string;
  /** @format uuid */
  userId: string;
}

export interface VoloAbpAccountUnLinkUserInput {
  /** @format uuid */
  tenantId?: string | null;
  /** @format uuid */
  userId?: string;
}

export interface VoloAbpAccountUpdateExternalProviderDto {
  enabled?: boolean;
  name?: string | null;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountUpdateProfileDto {
  concurrencyStamp?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  email?: string | null;
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 16
   */
  phoneNumber?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  surname?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
}

export interface VoloAbpAccountVerifyLinkLoginTokenInput {
  /** @format uuid */
  tenantId?: string | null;
  token: string;
  /** @format uuid */
  userId: string;
}

export interface VoloAbpAccountVerifyLinkTokenInput {
  /** @format uuid */
  tenantId?: string | null;
  token: string;
  /** @format uuid */
  userId: string;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpAccountLinkUserDtoVoloAbpAccountProPublicApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAccountLinkUserDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityRoleDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityOrganizationUnitWithDetailsDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpUsersUserData[] | null;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALLaboratoriesLaboratoryDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALLaboratoriesLaboratoryDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALMaterialsMaterialDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALMaterialsMaterialDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALPatientsPatientDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALPatientsPatientDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALSampleProcessStatusesSampleProcessStatusDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleProcessesSampleProcessDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALSampleProcessesSampleProcessDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSampleTypesSampleTypeDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALSampleTypesSampleTypeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemInt32SystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?:
    | COMEDLISEXTERNALSharedLookupDto1SystemInt32SystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798E[]
    | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798ECOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?:
    | COMEDLISEXTERNALSharedLookupDto1SystemStringSystemPrivateCoreLibVersion6000CultureNeutralPublicKeyToken7Cec85D7Bea7798E[]
    | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantTestPoolsTenantTestPoolWithNavigationPropertiesDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTenantTestPoolsTenantTestPoolWithNavigationPropertiesDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantUsersTenantUserDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTenantUsersTenantUserDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTenantsTenantDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTenantsTenantDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestDetailsTestDetailDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestDetailsTestDetailDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestGroupsTestGroupDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestGroupsTestGroupDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestParentTestsTestParentTestDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestParentTestsTestParentTestDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestPoolItemsTestPoolItemWithNavigationPropertiesDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestPoolItemsTestPoolItemWithNavigationPropertiesDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestPoolsTestPoolDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestPoolsTestPoolDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestProcessStatusesTestProcessStatusDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestProcessesTestProcessDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestProcessesTestProcessDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALTestsTestDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALTestsTestDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALViewsResultDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALViewsResultDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1COMEDLISEXTERNALVisitsVisitDtoCOMEDLISEXTERNALApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: COMEDLISEXTERNALVisitsVisitDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingAuditLogDtoVoloAbpAuditLoggingApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAuditLoggingAuditLogDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingEntityChangeDtoVoloAbpAuditLoggingApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAuditLoggingEntityChangeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityClaimTypeDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityClaimTypeDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityRoleDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentitySecurityLogDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityUserDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityOrganizationUnitWithDetailsDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerClientDtosClientWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerClientDtosClientWithDetailsDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageTextDtoVoloAbpLanguageManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageTextDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDtoVoloAbpTextTemplateManagementApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosEditionDtoVoloSaasHostApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloSaasHostDtosEditionDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosSaasTenantDtoVoloSaasHostApplicationContractsVersion5130CultureNeutralPublicKeyTokenNull {
  items?: VoloSaasHostDtosSaasTenantDto[] | null;
  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto {
  grantedPolicies?: Record<string, boolean>;
  policies?: Record<string, boolean>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto {
  auth?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto;
  clock?: VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto;
  currentTenant?: VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto;
  currentUser?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto;
  features?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto;
  localization?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto;
  multiTenancy?: VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto;
  objectExtensions?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto;
  setting?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto;
  timing?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto {
  values?: Record<string, string>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto {
  currentCulture?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto;
  defaultResourceName?: string | null;
  languageFilesMap?: Record<string, VoloAbpNameValue[]>;
  languages?: VoloAbpLocalizationLanguageInfo[] | null;
  languagesMap?: Record<string, VoloAbpNameValue[]>;
  values?: Record<string, Record<string, string>>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto {
  values?: Record<string, string>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto {
  kind?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto {
  cultureName?: string | null;
  dateTimeFormat?: VoloAbpAspNetCoreMvcApplicationConfigurationsDateTimeFormatDto;
  displayName?: string | null;
  englishName?: string | null;
  isRightToLeft?: boolean;
  name?: string | null;
  nativeName?: string | null;
  threeLetterIsoLanguageName?: string | null;
  twoLetterIsoLanguageName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto {
  email?: string | null;
  emailVerified?: boolean;
  /** @format uuid */
  id?: string | null;
  /** @format uuid */
  impersonatorTenantId?: string | null;
  impersonatorTenantName?: string | null;
  /** @format uuid */
  impersonatorUserId?: string | null;
  impersonatorUserName?: string | null;
  isAuthenticated?: boolean;
  name?: string | null;
  phoneNumber?: string | null;
  phoneNumberVerified?: boolean;
  roles?: string[] | null;
  surName?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  userName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsDateTimeFormatDto {
  calendarAlgorithmType?: string | null;
  dateSeparator?: string | null;
  dateTimeFormatLong?: string | null;
  fullDateTimePattern?: string | null;
  longTimePattern?: string | null;
  shortDatePattern?: string | null;
  shortTimePattern?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone {
  timeZoneName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto {
  configuration?: Record<string, any>;
  properties?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto {
  fields?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumFieldDto[] | null;
  localizationResource?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumFieldDto {
  name?: string | null;
  value?: any;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiCreateDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto {
  onCreate?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiCreateDto;
  onGet?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiGetDto;
  onUpdate?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiUpdateDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiGetDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiUpdateDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto {
  config?: Record<string, any>;
  typeSimple?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto {
  api?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto;
  attributes?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto[] | null;
  configuration?: Record<string, any>;
  defaultValue?: any;
  displayName?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto;
  type?: string | null;
  typeSimple?: string | null;
  ui?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto {
  lookup?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiLookupDto;
  onCreateForm?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto;
  onEditForm?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto;
  onTable?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiTableDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto {
  isVisible?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiLookupDto {
  displayPropertyName?: string | null;
  filterParamName?: string | null;
  resultListPropertyName?: string | null;
  url?: string | null;
  valuePropertyName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiTableDto {
  isVisible?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto {
  name?: string | null;
  resource?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto {
  configuration?: Record<string, any>;
  entities?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto {
  enums?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto>;
  modules?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsTimeZone {
  iana?: VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone;
  windows?: VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto {
  timeZone?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimeZone;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone {
  timeZoneId?: string | null;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto {
  /** @format uuid */
  id?: string | null;
  isAvailable?: boolean;
  name?: string | null;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto {
  isActive?: boolean;
  name?: string | null;
  success?: boolean;
  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto {
  isEnabled?: boolean;
}

export interface VoloAbpAuditLoggingAuditLogActionDto {
  /** @format uuid */
  auditLogId?: string;
  /** @format int32 */
  executionDuration?: number;
  /** @format date-time */
  executionTime?: string;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  methodName?: string | null;
  parameters?: string | null;
  serviceName?: string | null;
  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAuditLoggingAuditLogDto {
  actions?: VoloAbpAuditLoggingAuditLogActionDto[] | null;
  applicationName?: string | null;
  browserInfo?: string | null;
  clientIpAddress?: string | null;
  clientName?: string | null;
  comments?: string | null;
  correlationId?: string | null;
  entityChanges?: VoloAbpAuditLoggingEntityChangeDto[] | null;
  exceptions?: string | null;
  /** @format int32 */
  executionDuration?: number;
  /** @format date-time */
  executionTime?: string;
  extraProperties?: Record<string, any>;
  httpMethod?: string | null;
  /** @format int32 */
  httpStatusCode?: number | null;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  impersonatorTenantId?: string | null;
  impersonatorTenantName?: string | null;
  /** @format uuid */
  impersonatorUserId?: string | null;
  impersonatorUserName?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  tenantName?: string | null;
  url?: string | null;
  /** @format uuid */
  userId?: string | null;
  userName?: string | null;
}

export interface VoloAbpAuditLoggingEntityChangeDto {
  /** @format uuid */
  auditLogId?: string;
  /** @format date-time */
  changeTime?: string;
  changeType?: VoloAbpAuditingEntityChangeType;
  entityId?: string | null;
  entityTypeFullName?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  propertyChanges?: VoloAbpAuditLoggingEntityPropertyChangeDto[] | null;
  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAuditLoggingEntityChangeWithUsernameDto {
  entityChange?: VoloAbpAuditLoggingEntityChangeDto;
  userName?: string | null;
}

export interface VoloAbpAuditLoggingEntityPropertyChangeDto {
  /** @format uuid */
  entityChangeId?: string;
  /** @format uuid */
  id?: string;
  newValue?: string | null;
  originalValue?: string | null;
  propertyName?: string | null;
  propertyTypeFullName?: string | null;
  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAuditLoggingGetAverageExecutionDurationPerDayOutput {
  data?: Record<string, number>;
}

export interface VoloAbpAuditLoggingGetErrorRateOutput {
  data?: Record<string, number>;
}

/** @format int32 */
export enum VoloAbpAuditingEntityChangeType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface VoloAbpFeatureManagementFeatureDto {
  /** @format int32 */
  depth?: number;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  parentName?: string | null;
  provider?: VoloAbpFeatureManagementFeatureProviderDto;
  value?: string | null;
  valueType?: VoloAbpValidationStringValuesIStringValueType;
}

export interface VoloAbpFeatureManagementFeatureGroupDto {
  displayName?: string | null;
  features?: VoloAbpFeatureManagementFeatureDto[] | null;
  name?: string | null;
}

export interface VoloAbpFeatureManagementFeatureProviderDto {
  key?: string | null;
  name?: string | null;
}

export interface VoloAbpFeatureManagementGetFeatureListResultDto {
  groups?: VoloAbpFeatureManagementFeatureGroupDto[] | null;
}

export interface VoloAbpFeatureManagementUpdateFeatureDto {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpFeatureManagementUpdateFeaturesDto {
  features?: VoloAbpFeatureManagementUpdateFeatureDto[] | null;
}

export interface VoloAbpHttpModelingActionApiDescriptionModel {
  allowAnonymous?: boolean | null;
  httpMethod?: string | null;
  implementFrom?: string | null;
  name?: string | null;
  parameters?: VoloAbpHttpModelingParameterApiDescriptionModel[] | null;
  parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
  returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
  supportedVersions?: string[] | null;
  uniqueName?: string | null;
  url?: string | null;
}

export interface VoloAbpHttpModelingApplicationApiDescriptionModel {
  modules?: Record<string, VoloAbpHttpModelingModuleApiDescriptionModel>;
  types?: Record<string, VoloAbpHttpModelingTypeApiDescriptionModel>;
}

export interface VoloAbpHttpModelingControllerApiDescriptionModel {
  actions?: Record<string, VoloAbpHttpModelingActionApiDescriptionModel>;
  controllerGroupName?: string | null;
  controllerName?: string | null;
  interfaces?: VoloAbpHttpModelingControllerInterfaceApiDescriptionModel[] | null;
  type?: string | null;
}

export interface VoloAbpHttpModelingControllerInterfaceApiDescriptionModel {
  type?: string | null;
}

export interface VoloAbpHttpModelingMethodParameterApiDescriptionModel {
  defaultValue?: any;
  isOptional?: boolean;
  name?: string | null;
  type?: string | null;
  typeAsString?: string | null;
  typeSimple?: string | null;
}

export interface VoloAbpHttpModelingModuleApiDescriptionModel {
  controllers?: Record<string, VoloAbpHttpModelingControllerApiDescriptionModel>;
  remoteServiceName?: string | null;
  rootPath?: string | null;
}

export interface VoloAbpHttpModelingParameterApiDescriptionModel {
  bindingSourceId?: string | null;
  constraintTypes?: string[] | null;
  defaultValue?: any;
  descriptorName?: string | null;
  isOptional?: boolean;
  jsonName?: string | null;
  name?: string | null;
  nameOnMethod?: string | null;
  type?: string | null;
  typeSimple?: string | null;
}

export interface VoloAbpHttpModelingPropertyApiDescriptionModel {
  isRequired?: boolean;
  jsonName?: string | null;
  name?: string | null;
  type?: string | null;
  typeSimple?: string | null;
}

export interface VoloAbpHttpModelingReturnValueApiDescriptionModel {
  type?: string | null;
  typeSimple?: string | null;
}

export interface VoloAbpHttpModelingTypeApiDescriptionModel {
  baseType?: string | null;
  enumNames?: string[] | null;
  enumValues?: any[] | null;
  genericArguments?: string[] | null;
  isEnum?: boolean;
  properties?: VoloAbpHttpModelingPropertyApiDescriptionModel[] | null;
}

export interface VoloAbpHttpRemoteServiceErrorInfo {
  code?: string | null;
  data?: Record<string, any>;
  details?: string | null;
  message?: string | null;
  validationErrors?: VoloAbpHttpRemoteServiceValidationErrorInfo[] | null;
}

export interface VoloAbpHttpRemoteServiceErrorResponse {
  error?: VoloAbpHttpRemoteServiceErrorInfo;
}

export interface VoloAbpHttpRemoteServiceValidationErrorInfo {
  members?: string[] | null;
  message?: string | null;
}

export interface VoloAbpIdentityClaimTypeDto {
  concurrencyStamp?: string | null;
  description?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  isStatic?: boolean;
  name?: string | null;
  regex?: string | null;
  regexDescription?: string | null;
  required?: boolean;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
  valueTypeAsString?: string | null;
}

export interface VoloAbpIdentityCreateClaimTypeDto {
  description?: string | null;
  extraProperties?: Record<string, any>;
  name: string;
  regex?: string | null;
  regexDescription?: string | null;
  required?: boolean;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
}

/** @format int32 */
export enum VoloAbpIdentityFeaturesIdentityProTwoFactorBehaviour {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum VoloAbpIdentityIdentityClaimValueType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface VoloAbpIdentityIdentityLockoutSettingsDto {
  allowedForNewUsers?: boolean;
  /** @format int32 */
  lockoutDuration?: number;
  /** @format int32 */
  maxFailedAccessAttempts?: number;
}

export interface VoloAbpIdentityIdentityPasswordSettingsDto {
  requireDigit?: boolean;
  requireLowercase?: boolean;
  requireNonAlphanumeric?: boolean;
  requireUppercase?: boolean;
  /**
   * @format int32
   * @min 2
   * @max 128
   */
  requiredLength?: number;
  /**
   * @format int32
   * @min 1
   * @max 128
   */
  requiredUniqueChars?: number;
}

export interface VoloAbpIdentityIdentityRoleClaimDto {
  claimType?: string | null;
  claimValue?: string | null;
  /** @format uuid */
  roleId?: string;
}

export interface VoloAbpIdentityIdentityRoleCreateDto {
  extraProperties?: Record<string, any>;
  isDefault?: boolean;
  isPublic?: boolean;
  /**
   * @minLength 0
   * @maxLength 256
   */
  name: string;
}

export interface VoloAbpIdentityIdentityRoleDto {
  concurrencyStamp?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  isDefault?: boolean;
  isPublic?: boolean;
  isStatic?: boolean;
  name?: string | null;
}

export interface VoloAbpIdentityIdentityRoleLookupDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface VoloAbpIdentityIdentityRoleUpdateDto {
  concurrencyStamp?: string | null;
  extraProperties?: Record<string, any>;
  isDefault?: boolean;
  isPublic?: boolean;
  /**
   * @minLength 0
   * @maxLength 256
   */
  name: string;
}

export interface VoloAbpIdentityIdentitySecurityLogDto {
  action?: string | null;
  applicationName?: string | null;
  browserInfo?: string | null;
  clientId?: string | null;
  clientIpAddress?: string | null;
  correlationId?: string | null;
  /** @format date-time */
  creationTime?: string;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  identity?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  tenantName?: string | null;
  /** @format uuid */
  userId?: string | null;
  userName?: string | null;
}

export interface VoloAbpIdentityIdentitySettingsDto {
  lockout?: VoloAbpIdentityIdentityLockoutSettingsDto;
  password?: VoloAbpIdentityIdentityPasswordSettingsDto;
  signIn?: VoloAbpIdentityIdentitySignInSettingsDto;
  user?: VoloAbpIdentityIdentityUserSettingsDto;
}

export interface VoloAbpIdentityIdentitySignInSettingsDto {
  enablePhoneNumberConfirmation?: boolean;
  requireConfirmedEmail?: boolean;
  requireConfirmedPhoneNumber?: boolean;
}

export interface VoloAbpIdentityIdentityUserClaimDto {
  claimType?: string | null;
  claimValue?: string | null;
  /** @format uuid */
  userId?: string;
}

export interface VoloAbpIdentityIdentityUserCreateDto {
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  email: string;
  extraProperties?: Record<string, any>;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name?: string | null;
  organizationUnitIds?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 128
   */
  password: string;
  /**
   * @minLength 0
   * @maxLength 16
   */
  phoneNumber?: string | null;
  roleNames?: string[] | null;
  sendConfirmationEmail?: boolean;
  /**
   * @minLength 0
   * @maxLength 64
   */
  surname?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
}

export interface VoloAbpIdentityIdentityUserDto {
  /** @format int32 */
  accessFailedCount?: number;
  concurrencyStamp?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  isActive?: boolean;
  isLockedOut?: boolean;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  lockoutEnabled?: boolean;
  /** @format date-time */
  lockoutEnd?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  roleNames?: string[] | null;
  supportTwoFactor?: boolean;
  surname?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  twoFactorEnabled?: boolean;
  userName?: string | null;
}

export interface VoloAbpIdentityIdentityUserSettingsDto {
  isEmailUpdateEnabled?: boolean;
  isUserNameUpdateEnabled?: boolean;
}

export interface VoloAbpIdentityIdentityUserUpdateDto {
  concurrencyStamp?: string | null;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  email: string;
  extraProperties?: Record<string, any>;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name?: string | null;
  organizationUnitIds?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 16
   */
  phoneNumber?: string | null;
  roleNames?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  surname?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  userName: string;
}

export interface VoloAbpIdentityIdentityUserUpdatePasswordInput {
  newPassword: string;
}

export interface VoloAbpIdentityIdentityUserUpdateRolesDto {
  roleNames: string[];
}

export interface VoloAbpIdentityOrganizationUnitCreateDto {
  /**
   * @minLength 0
   * @maxLength 128
   */
  displayName: string;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  parentId?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitDto {
  code?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  isDeleted?: boolean;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  /** @format uuid */
  parentId?: string | null;
  roles?: VoloAbpIdentityOrganizationUnitRoleDto[] | null;
}

export interface VoloAbpIdentityOrganizationUnitLookupDto {
  displayName?: string | null;
  /** @format uuid */
  id?: string;
}

export interface VoloAbpIdentityOrganizationUnitMoveInput {
  /** @format uuid */
  newParentId?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitRoleDto {
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format uuid */
  organizationUnitId?: string;
  /** @format uuid */
  roleId?: string;
}

export interface VoloAbpIdentityOrganizationUnitRoleInput {
  roleIds?: string[] | null;
}

export interface VoloAbpIdentityOrganizationUnitUpdateDto {
  concurrencyStamp?: string | null;
  /**
   * @minLength 0
   * @maxLength 128
   */
  displayName: string;
  extraProperties?: Record<string, any>;
}

export interface VoloAbpIdentityOrganizationUnitUserInput {
  userIds?: string[] | null;
}

export interface VoloAbpIdentityOrganizationUnitWithDetailsDto {
  code?: string | null;
  concurrencyStamp?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  /** @format uuid */
  deleterId?: string | null;
  /** @format date-time */
  deletionTime?: string | null;
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  isDeleted?: boolean;
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format uuid */
  lastModifierId?: string | null;
  /** @format uuid */
  parentId?: string | null;
  roles?: VoloAbpIdentityIdentityRoleDto[] | null;
}

export interface VoloAbpIdentityUpdateClaimTypeDto {
  concurrencyStamp?: string | null;
  description?: string | null;
  extraProperties?: Record<string, any>;
  name: string;
  regex?: string | null;
  regexDescription?: string | null;
  required?: boolean;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto {
  /** @format uuid */
  apiResourceId?: string;
  type?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourcePropertyDto {
  /** @format uuid */
  apiResourceId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceScopeDto {
  /** @format uuid */
  apiResourceId?: string;
  scope?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceSecretDto {
  /** @format uuid */
  apiResourceId?: string;
  description?: string | null;
  /** @format date-time */
  expiration?: string | null;
  type?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto {
  allowedAccessTokenSigningAlgorithms?: string | null;
  description?: string | null;
  displayName?: string | null;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  properties?: VoloAbpIdentityServerApiResourceDtosApiResourcePropertyDto[] | null;
  scopes?: VoloAbpIdentityServerApiResourceDtosApiResourceScopeDto[] | null;
  secrets?: VoloAbpIdentityServerApiResourceDtosApiResourceSecretDto[] | null;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto[] | null;
}

export interface VoloAbpIdentityServerApiResourceDtosCreateApiResourceDto {
  /**
   * @minLength 0
   * @maxLength 100
   */
  allowedAccessTokenSigningAlgorithms?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto[] | null;
}

export interface VoloAbpIdentityServerApiResourceDtosUpdateApiResourceDto {
  /**
   * @minLength 0
   * @maxLength 100
   */
  allowedAccessTokenSigningAlgorithms?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  displayName?: string | null;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  properties?: VoloAbpIdentityServerApiResourceDtosApiResourcePropertyDto[] | null;
  scopes?: VoloAbpIdentityServerApiResourceDtosApiResourceScopeDto[] | null;
  secrets?: VoloAbpIdentityServerApiResourceDtosApiResourceSecretDto[] | null;
  userClaims?: VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto[] | null;
}

export interface VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto {
  /** @format uuid */
  apiScopeId?: string;
  type?: string | null;
}

export interface VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto {
  /** @format uuid */
  apiScopeId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto {
  description?: string | null;
  displayName?: string | null;
  emphasize?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  properties?: VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto[] | null;
  required?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto[] | null;
}

export interface VoloAbpIdentityServerApiScopeDtosCreateApiScopeDto {
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  displayName?: string | null;
  emphasize?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  properties?: VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto[] | null;
  required?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto[] | null;
}

export interface VoloAbpIdentityServerApiScopeDtosUpdateApiScopeDto {
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  displayName?: string | null;
  emphasize?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  properties?: VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto[] | null;
  required?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto[] | null;
}

export interface VoloAbpIdentityServerClaimTypeDtosIdentityClaimTypeDto {
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientClaimDto {
  type?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientCorsOriginDto {
  /** @format uuid */
  clientId?: string;
  origin?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientGrantTypeDto {
  /** @format uuid */
  clientId?: string;
  grantType?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientIdentityProviderRestrictionDto {
  /** @format uuid */
  clientId?: string;
  provider?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientPostLogoutRedirectUriDto {
  /** @format uuid */
  clientId?: string;
  postLogoutRedirectUri?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientPropertyDto {
  /** @format uuid */
  clientId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientRedirectUriDto {
  /** @format uuid */
  clientId?: string;
  redirectUri?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientScopeDto {
  /** @format uuid */
  clientId?: string;
  scope?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientSecretDto {
  /** @format uuid */
  clientId?: string;
  description?: string | null;
  /** @format date-time */
  expiration?: string | null;
  type?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientWithDetailsDto {
  /** @format int32 */
  absoluteRefreshTokenLifetime?: number;
  /** @format int32 */
  accessTokenLifetime?: number;
  /** @format int32 */
  accessTokenType?: number;
  allowAccessTokensViaBrowser?: boolean;
  allowOfflineAccess?: boolean;
  allowPlainTextPkce?: boolean;
  allowRememberConsent?: boolean;
  allowedCorsOrigins?: VoloAbpIdentityServerClientDtosClientCorsOriginDto[] | null;
  allowedGrantTypes?: VoloAbpIdentityServerClientDtosClientGrantTypeDto[] | null;
  allowedIdentityTokenSigningAlgorithms?: string | null;
  allowedScopes?: VoloAbpIdentityServerClientDtosClientScopeDto[] | null;
  alwaysIncludeUserClaimsInIdToken?: boolean;
  alwaysSendClientClaims?: boolean;
  /** @format int32 */
  authorizationCodeLifetime?: number;
  backChannelLogoutSessionRequired?: boolean;
  backChannelLogoutUri?: string | null;
  claims?: VoloAbpIdentityServerClientDtosClientClaimDto[] | null;
  clientClaimsPrefix?: string | null;
  clientId?: string | null;
  clientName?: string | null;
  clientSecrets?: VoloAbpIdentityServerClientDtosClientSecretDto[] | null;
  clientUri?: string | null;
  /** @format int32 */
  consentLifetime?: number | null;
  description?: string | null;
  /** @format int32 */
  deviceCodeLifetime?: number;
  enableLocalLogin?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  frontChannelLogoutSessionRequired?: boolean;
  frontChannelLogoutUri?: string | null;
  /** @format uuid */
  id?: string;
  identityProviderRestrictions?: VoloAbpIdentityServerClientDtosClientIdentityProviderRestrictionDto[] | null;
  /** @format int32 */
  identityTokenLifetime?: number;
  includeJwtId?: boolean;
  logoUri?: string | null;
  pairWiseSubjectSalt?: string | null;
  postLogoutRedirectUris?: VoloAbpIdentityServerClientDtosClientPostLogoutRedirectUriDto[] | null;
  properties?: VoloAbpIdentityServerClientDtosClientPropertyDto[] | null;
  protocolType?: string | null;
  redirectUris?: VoloAbpIdentityServerClientDtosClientRedirectUriDto[] | null;
  /** @format int32 */
  refreshTokenExpiration?: number;
  /** @format int32 */
  refreshTokenUsage?: number;
  requireClientSecret?: boolean;
  requireConsent?: boolean;
  requirePkce?: boolean;
  requireRequestObject?: boolean;
  /** @format int32 */
  slidingRefreshTokenLifetime?: number;
  updateAccessTokenClaimsOnRefresh?: boolean;
  userCodeType?: string | null;
  /** @format int32 */
  userSsoLifetime?: number | null;
}

export interface VoloAbpIdentityServerClientDtosCreateClientDto {
  callbackUrl?: string | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  clientId: string;
  /**
   * @minLength 0
   * @maxLength 200
   */
  clientName: string;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  clientUri?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  logoUri?: string | null;
  logoutUrl?: string | null;
  requireConsent?: boolean;
  scopes?: string[] | null;
  secrets?: VoloAbpIdentityServerClientDtosClientSecretDto[] | null;
}

export interface VoloAbpIdentityServerClientDtosUpdateClientDto {
  /** @format int32 */
  accessTokenLifetime?: number;
  /** @format int32 */
  accessTokenType?: number;
  allowAccessTokensViaBrowser?: boolean;
  allowOfflineAccess?: boolean;
  allowRememberConsent?: boolean;
  allowedCorsOrigins?: string[] | null;
  allowedGrantTypes?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  allowedIdentityTokenSigningAlgorithms?: string | null;
  alwaysSendClientClaims?: boolean;
  backChannelLogoutSessionRequired?: boolean;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  backChannelLogoutUri?: string | null;
  claims?: VoloAbpIdentityServerClientDtosClientClaimDto[] | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  clientName?: string | null;
  clientSecrets?: VoloAbpIdentityServerClientDtosClientSecretDto[] | null;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  clientUri?: string | null;
  /** @format int32 */
  consentLifetime?: number | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /** @format int32 */
  deviceCodeLifetime?: number;
  enableLocalLogin?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  frontChannelLogoutSessionRequired?: boolean;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  frontChannelLogoutUri?: string | null;
  identityProviderRestrictions?: string[] | null;
  includeJwtId?: boolean;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  logoUri?: string | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  pairWiseSubjectSalt?: string | null;
  postLogoutRedirectUris?: string[] | null;
  properties?: VoloAbpIdentityServerClientDtosClientPropertyDto[] | null;
  redirectUris?: string[] | null;
  requireClientSecret?: boolean;
  requireConsent?: boolean;
  requirePkce?: boolean;
  requireRequestObject?: boolean;
  scopes?: string[] | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  userCodeType?: string | null;
  /** @format int32 */
  userSsoLifetime?: number | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosCreateIdentityResourceDto {
  description?: string | null;
  displayName?: string | null;
  emphasize?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  name: string;
  properties?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto[] | null;
  required?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto[] | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto {
  /** @format uuid */
  identityResourceId?: string;
  type?: string | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto {
  /** @format uuid */
  identityResourceId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto {
  description?: string | null;
  displayName?: string | null;
  emphasize?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
  properties?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto[] | null;
  required?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto[] | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosUpdateIdentityResourceDto {
  description?: string | null;
  displayName?: string | null;
  emphasize?: boolean;
  enabled?: boolean;
  extraProperties?: Record<string, any>;
  name: string;
  properties?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto[] | null;
  required?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto[] | null;
}

export interface VoloAbpLanguageManagementDtoCreateLanguageDto {
  cultureName?: string | null;
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  flagIcon?: string | null;
  isEnabled?: boolean;
  uiCultureName?: string | null;
}

export interface VoloAbpLanguageManagementDtoCultureInfoDto {
  displayName?: string | null;
  name?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageDto {
  concurrencyStamp?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  creatorId?: string | null;
  cultureName?: string | null;
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  flagIcon?: string | null;
  /** @format uuid */
  id?: string;
  isDefaultLanguage?: boolean;
  isEnabled?: boolean;
  uiCultureName?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageResourceDto {
  name?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageTextDto {
  baseCultureName?: string | null;
  baseValue?: string | null;
  cultureName?: string | null;
  name?: string | null;
  resourceName?: string | null;
  value?: string | null;
}

export interface VoloAbpLanguageManagementDtoUpdateLanguageDto {
  concurrencyStamp?: string | null;
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  flagIcon?: string | null;
  isEnabled?: boolean;
}

/** @format int32 */
export enum VoloAbpLeptonThemeManagementLeptonStyle {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

export interface VoloAbpLeptonThemeManagementLeptonThemeSettingsDto {
  boxedLayout?: boolean;
  menuPlacement?: VoloAbpLeptonThemeManagementMenuPlacement;
  menuStatus?: VoloAbpLeptonThemeManagementMenuStatus;
  publicLayoutStyle?: VoloAbpLeptonThemeManagementLeptonStyle;
  style?: VoloAbpLeptonThemeManagementLeptonStyle;
}

/** @format int32 */
export enum VoloAbpLeptonThemeManagementMenuPlacement {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum VoloAbpLeptonThemeManagementMenuStatus {
  Value0 = 0,
  Value1 = 1,
}

export interface VoloAbpLeptonThemeManagementUpdateLeptonThemeSettingsDto {
  boxedLayout?: boolean;
  menuPlacement?: VoloAbpLeptonThemeManagementMenuPlacement;
  menuStatus?: VoloAbpLeptonThemeManagementMenuStatus;
  publicLayoutStyle?: VoloAbpLeptonThemeManagementLeptonStyle;
  style?: VoloAbpLeptonThemeManagementLeptonStyle;
}

export interface VoloAbpLocalizationLanguageInfo {
  cultureName?: string | null;
  displayName?: string | null;
  flagIcon?: string | null;
  uiCultureName?: string | null;
}

export interface VoloAbpNameValue {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpPermissionManagementGetPermissionListResultDto {
  entityDisplayName?: string | null;
  groups?: VoloAbpPermissionManagementPermissionGroupDto[] | null;
}

export interface VoloAbpPermissionManagementPermissionGrantInfoDto {
  allowedProviders?: string[] | null;
  displayName?: string | null;
  grantedProviders?: VoloAbpPermissionManagementProviderInfoDto[] | null;
  isGranted?: boolean;
  name?: string | null;
  parentName?: string | null;
}

export interface VoloAbpPermissionManagementPermissionGroupDto {
  displayName?: string | null;
  name?: string | null;
  permissions?: VoloAbpPermissionManagementPermissionGrantInfoDto[] | null;
}

export interface VoloAbpPermissionManagementProviderInfoDto {
  providerKey?: string | null;
  providerName?: string | null;
}

export interface VoloAbpPermissionManagementUpdatePermissionDto {
  isGranted?: boolean;
  name?: string | null;
}

export interface VoloAbpPermissionManagementUpdatePermissionsDto {
  permissions?: VoloAbpPermissionManagementUpdatePermissionDto[] | null;
}

export interface VoloAbpSettingManagementEmailSettingsDto {
  defaultFromAddress?: string | null;
  defaultFromDisplayName?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpHost?: string | null;
  smtpPassword?: string | null;
  /** @format int32 */
  smtpPort?: number;
  smtpUseDefaultCredentials?: boolean;
  smtpUserName?: string | null;
}

export interface VoloAbpSettingManagementUpdateEmailSettingsDto {
  /** @maxLength 1024 */
  defaultFromAddress: string;
  /** @maxLength 1024 */
  defaultFromDisplayName: string;
  /** @maxLength 1024 */
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  /** @maxLength 256 */
  smtpHost?: string | null;
  /**
   * @format password
   * @maxLength 1024
   */
  smtpPassword?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 65535
   */
  smtpPort?: number;
  smtpUseDefaultCredentials?: boolean;
  /** @maxLength 1024 */
  smtpUserName?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesRestoreTemplateContentInput {
  /**
   * @minLength 0
   * @maxLength 10
   */
  cultureName?: string | null;
  /**
   * @minLength 0
   * @maxLength 128
   */
  templateName: string;
}

export interface VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto {
  defaultCultureName?: string | null;
  displayName?: string | null;
  isInlineLocalized?: boolean;
  isLayout?: boolean;
  layout?: string | null;
  name?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto {
  content?: string | null;
  cultureName?: string | null;
  name?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesUpdateTemplateContentInput {
  content?: string | null;
  /**
   * @minLength 0
   * @maxLength 10
   */
  cultureName?: string | null;
  /**
   * @minLength 0
   * @maxLength 128
   */
  templateName: string;
}

export interface VoloAbpUsersUserData {
  email?: string | null;
  emailConfirmed?: boolean;
  /** @format uuid */
  id?: string;
  name?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  surname?: string | null;
  /** @format uuid */
  tenantId?: string | null;
  userName?: string | null;
}

export interface VoloAbpValidationStringValuesIStringValueType {
  name?: string | null;
  properties?: Record<string, any>;
  validator?: VoloAbpValidationStringValuesIValueValidator;
}

export interface VoloAbpValidationStringValuesIValueValidator {
  name?: string | null;
  properties?: Record<string, any>;
}

export interface VoloPaymentGatewaysGatewayDto {
  displayName?: string | null;
  name?: string | null;
}

export interface VoloPaymentPlansGatewayPlanDto {
  externalId?: string | null;
  extraProperties?: Record<string, any>;
  gateway?: string | null;
  /** @format uuid */
  planId?: string;
}

export interface VoloPaymentPlansPlanDto {
  concurrencyStamp?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface VoloSaasHostDtosEditionCreateDto {
  displayName: string;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  planId?: string | null;
}

export interface VoloSaasHostDtosEditionDto {
  concurrencyStamp?: string | null;
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  planId?: string | null;
  planName?: string | null;
}

export interface VoloSaasHostDtosEditionLookupDto {
  displayName?: string | null;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  id?: string;
}

export interface VoloSaasHostDtosEditionUpdateDto {
  concurrencyStamp?: string | null;
  displayName: string;
  extraProperties?: Record<string, any>;
  /** @format uuid */
  planId?: string | null;
}

export interface VoloSaasHostDtosSaasTenantConnectionStringsDto {
  databases?: VoloSaasHostDtosSaasTenantDatabaseConnectionStringsDto[] | null;
  /**
   * @minLength 0
   * @maxLength 1024
   */
  default?: string | null;
  extraProperties?: Record<string, any>;
}

export interface VoloSaasHostDtosSaasTenantCreateDto {
  /** @format date-time */
  activationEndDate?: string | null;
  activationState?: VoloSaasTenantActivationState;
  /**
   * @format email
   * @minLength 0
   * @maxLength 256
   */
  adminEmailAddress: string;
  /**
   * @minLength 0
   * @maxLength 128
   */
  adminPassword: string;
  connectionStrings?: VoloSaasHostDtosSaasTenantConnectionStringsDto;
  /** @format date-time */
  editionEndDateUtc?: string | null;
  /** @format uuid */
  editionId?: string | null;
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name: string;
}

export interface VoloSaasHostDtosSaasTenantDatabaseConnectionStringsDto {
  /**
   * @minLength 0
   * @maxLength 1024
   */
  connectionString?: string | null;
  databaseName?: string | null;
  extraProperties?: Record<string, any>;
}

export interface VoloSaasHostDtosSaasTenantDatabasesDto {
  databases?: string[] | null;
  extraProperties?: Record<string, any>;
}

export interface VoloSaasHostDtosSaasTenantDto {
  /** @format date-time */
  activationEndDate?: string | null;
  activationState?: VoloSaasTenantActivationState;
  concurrencyStamp?: string | null;
  /** @format date-time */
  editionEndDateUtc?: string | null;
  /** @format uuid */
  editionId?: string | null;
  editionName?: string | null;
  extraProperties?: Record<string, any>;
  hasDefaultConnectionString?: boolean;
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface VoloSaasHostDtosSaasTenantUpdateDto {
  /** @format date-time */
  activationEndDate?: string | null;
  activationState?: VoloSaasTenantActivationState;
  concurrencyStamp?: string | null;
  /** @format date-time */
  editionEndDateUtc?: string | null;
  /** @format uuid */
  editionId?: string | null;
  extraProperties?: Record<string, any>;
  /**
   * @minLength 0
   * @maxLength 64
   */
  name: string;
}

export interface VoloSaasHostGetEditionUsageStatisticsResultDto {
  data?: Record<string, number>;
}

/** @format int32 */
export enum VoloSaasTenantActivationState {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

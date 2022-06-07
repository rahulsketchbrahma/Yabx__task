import { LMS_OS, LMS_PACKAGE_ID, LMS_PARTNER_CODE } from "../constants/index";
import { postRequest, putRequest, getRequest } from "../utilites/http-helper";
import { TARGET_API, OUTCOME_API, WORKFLOW_API } from "../services/urls";

const lmsStandardHeaders = {
  "partner-code": LMS_PARTNER_CODE,
  os: LMS_OS,
  "package-id": LMS_PACKAGE_ID,
};

export const getTarget = async (data) => {
  return await getRequest({
    url: TARGET_API,
    data: data,
    noAuth: true,
    headers: lmsStandardHeaders,
  });
};
export const getOutcome = async (data) => {
  return await putRequest({
    url: OUTCOME_API,
    data: data,
    noAuth: true,
    headers: lmsStandardHeaders,
  });
};

export const getWorkFLow = async (data) => {
  return await postRequest({
    url: WORKFLOW_API,
    data: data,
    noAuth: true,
    headers: lmsStandardHeaders,
  });
};

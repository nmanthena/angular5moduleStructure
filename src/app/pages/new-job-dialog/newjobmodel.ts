export interface NewJob {
    designationOfferd: number;
    titleOfPosition: string;
    numberOfPositiions: number;
    jobDescription: string;
    experience: number;
    educationQualification: string;
    mandatorySkills: string;
    desiredSkills: string;
    numberOfTechRounds: number;
    company: number;
    jobLocation: string;
    workLocation: string;
    typeOfEmployment: string;
    typeOfHire: string;
    projectName: string;
    reportManager: string;
    salaryFrom: number;
    salaryTo: number;
    finalApprovalName: string;
    resourceRequiredDate: string;
    approvalEmail: string;
    comment: string;
}

export interface DropDownModel {
    key: number;
    value: string;
}
export interface UserEmails {
    userId: number;
    userName: string;
    userEmail: string;
    roleId: number;
}
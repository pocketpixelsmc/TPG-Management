import type React from "react";
import { InsuranceProgram } from "./addons/insuranceProgram";
import { MaintenanceProgram } from "./addons/maintenance";
import { OwnerReferral } from "./addons/referral";

export default function OwnerAddons() {
  return (
    <div className="container mx-auto p-6">
      <InsuranceProgram />
      <OwnerReferral />
      <MaintenanceProgram />
    </div>
  );
}

import type React from "react";
import { InsuranceProgram } from "./insuranceProgram";
import { MaintenanceProgram } from "./maintenance";
import { OwnerReferral } from "./referral";

export default function OwnerAddons() {
  return (
    <div className="container mx-auto">
      <InsuranceProgram />
      <OwnerReferral />
      <MaintenanceProgram />
    </div>
  );
}

// Beast-System-3-Core/src/engines/index.ts

import { ResolutionEngine } from "../resolution/resolution-engine";
import { LucrGovernanceEngine } from "../lucr/lucr-governance-engine";
import { ConstitutionalEnforcementEngine } from "../constitution/constitutional-enforcement-engine";
import { CivicGraphRuntime } from "../civicgraph/civicgraph-runtime";
import { InfluenceRouter } from "../civicgraph/influence-router";
import { KernelRuntime } from "../kernel/kernel-runtime";
import { TelemetryEngine } from "../telemetry/telemetry-engine";
import { IntegrityMonitor } from "../integrity/integrity-monitor";
import { ArchiveEngine } from "../archive/archive-engine";
import { EventStream } from "../events/event-stream";
import { ComplianceRouter } from "../compliance/compliance-router";
import { MinistryAdapter } from "../adapters/ministry-adapter";
import { MunicipalAdapter } from "../adapters/municipal-adapter";
import { GlobalGovernanceOrchestrator } from "../orchestrator/global-governance-orchestrator";

export const engines = {
  resolution: new ResolutionEngine(),
  lucr: new LucrGovernanceEngine(),
  constitution: new ConstitutionalEnforcementEngine(),
  civicgraph: new CivicGraphRuntime(),
  influence: new InfluenceRouter(),
  kernel: new KernelRuntime(),
  telemetry: new TelemetryEngine(),
  integrity: new IntegrityMonitor(),
  archive: new ArchiveEngine(),
  events: new EventStream(),
  compliance: new ComplianceRouter(),
  ministry: new MinistryAdapter(),
  municipal: new MunicipalAdapter(),
  orchestrator: new GlobalGovernanceOrchestrator()
};

export function getEngineMap(): Record<string, any> {
  return engines;
}

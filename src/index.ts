/**
 * PolicyEval — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { PolicyDefinitionOrchestrator } from "@webwaka/organelle-policy-definition";
import { GovernanceRegistryOrchestrator } from "@webwaka/organelle-governance-registry";

export { PolicyDefinitionOrchestrator } from '@webwaka/organelle-policy-definition';
export { GovernanceRegistryOrchestrator } from '@webwaka/organelle-governance-registry';

/**
 * PolicyEval Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class PolicyEvalComposition {
  private policyDefinitionOrchestrator: PolicyDefinitionOrchestrator;
  private governanceRegistryOrchestrator: GovernanceRegistryOrchestrator;

  constructor() {
    this.policyDefinitionOrchestrator = new PolicyDefinitionOrchestrator();
    this.governanceRegistryOrchestrator = new GovernanceRegistryOrchestrator();
  }
}

export * from "./types";

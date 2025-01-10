import { Idl } from "@coral-xyz/anchor";
import { IdlInstruction } from "@coral-xyz/anchor/dist/cjs/idl";

export interface Turbin3Prereq extends Idl {
  // Minimal fields if you want typed references:
  version: string;
  name: string;
  instructions: IdlInstruction[];
  // add more if needed
}

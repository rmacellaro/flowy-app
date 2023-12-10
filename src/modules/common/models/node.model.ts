import { Interaction } from "../../interactions/models/interaction.model";

export class Node {
  public id?: number;
  public identifier?: string;
  public interaction?: Interaction;
  public name?: string;
  public type?: string;
  public value?: string;
  public data?: string;
}
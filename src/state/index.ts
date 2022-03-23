import { proxy } from "valtio";

interface IState {
  provider: any;
  signer: any;
  user: string | null;
}

export const state: IState = proxy({
  provider: null,
  signer: null,
  user: null,
});

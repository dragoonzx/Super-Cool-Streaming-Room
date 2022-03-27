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

const queueDefault = [
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
  {
    title: "Never gonna give you up",
    duration: "4:30m",
    priority: "0.001 MATIC",
  },
];

export const queue = proxy({
  value: queueDefault,
});

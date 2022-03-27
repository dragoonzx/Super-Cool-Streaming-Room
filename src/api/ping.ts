import { apolloClient } from "./index";
import { gql } from "@apollo/client";

const query = `
  query {
    ping
  }
`;

export const ping = async () => {
  const response = await apolloClient.query({
    query: gql(query),
  });
  console.log("Lens example data: ", response);
};

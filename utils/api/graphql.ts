type GraphResponse<T> = {
  data: T;
};

export const fetchGraphQL = <T = Record<string, any>>(query: string) => {
  return fetch(process.env.GRAPH_URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }).then(response => response.json() as Promise<GraphResponse<T>>);
};

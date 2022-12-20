import { useQuery } from "@apollo/client";

import { GetCountryDocument } from "../../typed-document-nodes";

export const Country = () => {
  const { loading, data, error } = useQuery(GetCountryDocument, {});

  if (loading) {
    return <div className="pt-6 px-4 sm:px-6 lg:px-8 text-2xl">Loading...</div>;
  }

  if (error) {
    return (
      <div className="pt-6 px-4 sm:px-6 lg:px-8 text-2xl">Error: {error.message}</div>
    );
  }

  if (!data || !data.country) {
    return <div className="pt-6 px-4 sm:px-6 lg:px-8 text-2xl">No data</div>;
  }

  const { country } = data;

  return (
    <article>
      <h1 className="text-2xl font-bold">{country.name}</h1>
    </article>
  );
};

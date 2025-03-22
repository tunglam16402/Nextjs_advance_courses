import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return <div>User Detail Page for ID: {params.id}</div>;
};

export default Page;

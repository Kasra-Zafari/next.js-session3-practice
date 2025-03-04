import Head from "next/head";

const Company = () => {
  return (
    <>
      <Head>
        <title>Company Page</title>
      </Head>
      <div className="container py-5">
        <h1 className="text-center">Company</h1>
        <p className="text-center mt-4">
          This is the company page. You can add more content here as needed.
        </p>
      </div>
    </>
  );
};

export default Company;

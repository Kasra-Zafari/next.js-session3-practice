import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="container py-5">
        <h1 className="text-center">About Page</h1>
        <p className="text-center mt-4">
          Welcome to the About page. This is where you can introduce your business or provide more information about your website.
        </p>
      </div>
    </>
  );
};

export default AboutPage;

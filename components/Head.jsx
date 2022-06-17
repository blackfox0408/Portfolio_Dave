import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Bob Lee is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Bob Lee, Bob, ranganath, web developer portfolio, Bob web developer, Bob developer, mern stack, Bob Lee portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Bob Lee's Portfolio" />
      <meta
        property="og:description"
        content="Full Stack Developer, Bob Lee's prortfolio"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Bob Lee',
};

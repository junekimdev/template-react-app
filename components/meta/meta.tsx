import Head from 'next/head';
import { useGTM } from './gtm';
import * as mType from './metaType';

const Meta = (props: mType.Props) => {
  const authorName = 'junekimdev';
  const siteName = "another junekimdev's website";
  const homeUrl = process.env.NEXT_PUBLIC_URL ?? 'localhost:3000';
  const {
    image = `${homeUrl}/assets/images/LogoPlace_Extended_1200x627.png`,
    imageWidth = '1200',
    imageHeight = '627',
  } = props;
  useGTM();

  return (
    <Head>
      <title>{props.title}</title>
      <link rel="canonical" href={props.url} />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={props.desc} />
      <meta name="author" content={authorName} />
      <meta property="article:author" content={authorName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteName} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:creator" content={authorName} />
      {props.image && <meta name="twitter:image" content={image} />}

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" />
      {props.children}
    </Head>
  );
};

export default Meta;

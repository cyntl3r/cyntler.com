/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { SeoProps } from './Seo.types';

export const Seo: FunctionComponent<SeoProps> = ({
  title,
  description = '',
  keywords = [],
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(',')} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content="/logo.svg" />
  </Helmet>
);

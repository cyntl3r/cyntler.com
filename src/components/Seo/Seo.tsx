/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

export interface SeoProps {
  title?: string;
}

export const Seo: FunctionComponent<SeoProps> = ({ title }) => (
  <Helmet>
    <title>
      {title ? `${process.env.APP_TITLE}, ${title}` : process.env.APP_TITLE}
    </title>
  </Helmet>
);
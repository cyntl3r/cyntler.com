/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { useIntl } from 'react-intl';

export const useTranslation = () => {
  const { formatMessage } = useIntl();

  const getMessage = (key: string) => formatMessage({ id: key });

  return {
    t: getMessage,
  };
};

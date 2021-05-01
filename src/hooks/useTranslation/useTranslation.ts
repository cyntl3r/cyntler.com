/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { useIntl } from 'react-intl';

export const useTranslation = () => {
  const { formatMessage } = useIntl();

  const getMessage = (key: string, values?: Record<string, unknown>) =>
    formatMessage({ id: key }, values) as string;

  return {
    t: getMessage,
  };
};

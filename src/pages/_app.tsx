import { object } from 'prop-types';
import { RecoilRoot } from 'recoil';

interface AppRootProps {
  Component: React.FunctionComponent;
  pageProps: object;
}

const AppRoot = ({ Component, pageProps }: AppRootProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default AppRoot;

import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.overlay}>
      <div className={css.loader}>
        <Oval
          height={72}
          width={72}
          color="#6D7B75"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#F7F7F7"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <h2 className={css.title}>Loading trucks...</h2>
        <p className={css.text}>Please wait while we fetch the best travel trucks for you</p>
      </div>
    </div>
  );
};

export default Loader;

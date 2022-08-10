import { MutatingDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.BoxLoader}>
      <MutatingDots color="#00ff2a" height={200} width={200} />
    </div>
  );
}

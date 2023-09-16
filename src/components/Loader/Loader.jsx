import { ProgressBar } from 'react-loader-spinner';
// import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    // <Overlay>
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#0000ff"
      barColor="#037bfc"
    />
    // </Overlay>
  );
};

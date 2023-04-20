import BaseHeader from '../components/Base/BaseHeader';
import LoginIllustration from '../assets/login-illustration.svg';

const App = () => {
  return (
    <div className="container px-4 mx-auto flex flex-col h-screen">
      <BaseHeader />
      <div className="flex-1 flex justify-center items-center">
        <img src={LoginIllustration} alt="" className="max-w-[80%]" />
      </div>
    </div>
  );
};

export default App;

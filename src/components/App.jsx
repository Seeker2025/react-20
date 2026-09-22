import { Finder } from './Finder';
import { SignupForm } from './Form';
import { SignupForm02 } from './Form02';


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      React homework template
        <Finder/>

        <SignupForm  />
        <SignupForm02/>

    </div>
  );
};

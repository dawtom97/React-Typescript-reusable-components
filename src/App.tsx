import React, { useRef } from 'react';
import { Button } from './components/atoms/Button/Button';
import { Heading } from './components/atoms/Heading/Heading';
import { Input } from './components/atoms/Input/Input';

const App: React.FC = () => {
  const focusEl = useRef();

  return (
    <div>
      <Heading level='h1'>cyrk</Heading>
      <Heading isThin isUpperCase level='h1'>cyrk</Heading>
      <Heading level='h3'>cyrk</Heading>
      <Button ariaLabel='Buy now button' color='primary' size='small'>
        Kup teraz
      </Button>
      <Button ariaLabel='Buy all' color='secondary' size='regular'>
        Read more
      </Button>
      <Button ariaLabel='Buy all' color='primary' size='large'>
        Kup wszystkie
      </Button>
      <Input placeholder='Podaj swoje imię' />
      <Input inputType='secondary' placeholder='Podaj swoje imię' isLabelled label='Podaj imię' />
    </div>
  );
};

export default App;

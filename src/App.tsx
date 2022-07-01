import React from 'react';
import { Button } from './components/atoms/Button/Button';
import { Input } from './components/atoms/Input/Input';

const App: React.FC = () => (
  <div>
    <Button ariaLabel='Buy now button' color='primary'>Kup teraz</Button>
    <Button ariaLabel='Buy all' color="secondary" size="small">Read more</Button>
    <Button ariaLabel='Buy all' color="primary" size="large">Kup wszystkie</Button>
    <Input placeholder='Podaj swoje imię'/>
    <Input placeholder='Podaj swoje imię' isLabelled label="Podaj imię"/>
  </div>
);

export default App;

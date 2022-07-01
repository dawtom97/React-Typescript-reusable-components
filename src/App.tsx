import React from 'react';
import { Button } from './components/atoms/Button';

const App: React.FC = () => (
  <div>
    <Button ariaLabel='Buy now button' color='primary'>Kup teraz</Button>
    <Button ariaLabel='Buy all' color="secondary" size="small">Kup wszystkie</Button>
    <Button ariaLabel='Buy all' color="primary" size="large">Kup wszystkie</Button>
  </div>
);

export default App;

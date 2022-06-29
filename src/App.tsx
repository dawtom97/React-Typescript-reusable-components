import React from 'react';
import { Button } from './components/atoms/Button';

const App: React.FC = () => (
  <div>
    <Button size='isBig' btnType='isSecondary' ariaLabel="Więcej o nas">Kup teraz</Button>
  </div>
);

export default App;

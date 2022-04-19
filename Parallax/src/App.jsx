import { useRef } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax ref={ref} pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Hi, I am just testing the parallax effect.</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} style={{backgroundColor: '#ff6d6d'}}/>

        <ParallaxLayer offset={1} speed={0.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', }}>
          <p>Keep scrolling up</p>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => ref.current.scrollTo(0)}>
          <h2 style={{fontSize: '5vw'}}>End of the line!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

<style>
  @import url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
</style>
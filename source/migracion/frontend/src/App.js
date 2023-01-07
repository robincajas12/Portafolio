import './App.css';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Portafolio from './Components/Portafolio';
import { useState } from 'react';
import song from './song/song.mp3';
function App() {
  const root = document.querySelector(':root');
  const [, setAudio] = useState(
    {
      audio : new Audio(song),
      isPause : false
    }
  );
  function playSong()
  {
    setAudio(item => {
      if(!item.isPause)
      {
        root.style.setProperty('--color-morado', '#2E3236');
        root.style.setProperty('--color-morado-claro', '#3c4044');
        root.style.setProperty('--color-verde-claro', '#F5B4D1');
        root.style.setProperty('--color-morado-opaco', '##5350559d');
        item.audio.play();
        return {...item, isPause: !item.isPause}
      }
      else{
        item.audio.pause();
        return {...item, isPause: !item.isPause} 
      }
    })
  }
  return (
    <div>
      <Header playSong={playSong}/>
      <Inicio/>
      <AboutMe/>
      <Skills/>
      <Portafolio/>
    </div>
  );
}

export default App;

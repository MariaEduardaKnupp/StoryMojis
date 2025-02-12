import { useState } from 'react'
import './Boas_vindas.css'

function Boas_vindas() {

    const [icon, setIcon] = useState('')
    const sortearIcon = () => {
        const sorteio = Math.floor(Math.random() * 5);
        setIcon (sorteio + '.svg');
    };
  return (
    <div>
      <h1 className='bemvindo'>StoryIcons</h1>
      <h2 className='explicacao'>Neste jogo você cria suas próprias histórias apartir dos icon sorteados</h2>
      

      
      <div className='button'>
        <button onClick={sortearIcon} className='Sorteio'>Sortear Icon</button>
      </div>

      <div style={{fontSize:'500%', display:'flex', justifyContent: 'center'}}>
      <img src={icon} alt="Ícone sorteado" />
      </div>
      
    </div>
  )
}

export default Boas_vindas

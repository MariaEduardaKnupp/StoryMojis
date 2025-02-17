import { useState } from 'react'
import './Boas_vindas.css'

function Boas_vindas() {

    const [Emoji, setEmoji] = useState()

    const emojis = ['😍', '🎶', '🥶', '🤬', '🤢', '🤒', '🤠', '🤡', '🥳', '🥸', '👽', '💩', '🐵', '🐶', '🐱', '🐷', '🐔', '🦈', '🦆', '🦐', '🐧', '🐞', '👸', '🕵️', '🎅', '🥷', '🧑‍🍳', '👩‍💻']
    const sortearEmoji = () => {
        const sorteio = Math.floor(Math.random() * emojis.length);
        const emojisSorteado = emojis[sorteio];
        setEmoji (emojisSorteado);
    };
  return (
    <div>
      <h1 className='bemvindo'>StoryMojis</h1>
      <h2 className='explicacao'>Neste jogo você cria suas próprias histórias apartir dos Emoji sorteados</h2>
      

      
      <div className='button'>
        <button onClick={sortearEmoji} className='Sorteio'>Sortear Emoji</button>
      </div>

      <div style={{fontSize:'500%', display:'flex', justifyContent: 'center'}}>
      {Emoji ? Emoji : ''}
      </div>
      
    </div>
  )
}

export default Boas_vindas

import { fetchNagoyaTenperature } from './weather.js';

const btn = document.getElementById('weatherbotan');
const result = document.getElementById('weatherresult');

btn.addEventListener('click', async () => {
  result.textContent = 'データを取得中';


    // 名古屋の天気を取得
    const temperature = await fetchNagoyaTenperature();
    
    //取得したデータをDOMに表示
    result.innerHTML = `現在の名古屋の気温は <strong>${temperature} ℃</strong> です。`;
    
});
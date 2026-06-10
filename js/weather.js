
export async function fetchNagoyaTenperature() {
  //名古屋の緯度・経度の現在気温を取得するURL
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.1815&longitude=136.9066&current=temperature';

  //fetchを使ってAPIにリクエストを送信
  const response = await fetch(url);
  
  //レスポンスのデータをJSON形式として解析
  const data = await response.json();
  
  //気温を返す
  return data.current.temperature;
}
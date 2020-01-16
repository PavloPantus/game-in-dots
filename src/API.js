const baseUrl = 'https://starnavi-frontend-test-task.herokuapp.com'

const getData = async (url)=>{
    const response = await fetch(`${baseUrl}/${url}`);
    const data = await response.json();
    return data;
}

export const getWinnersFromServer = ()=>{
    return getData('winners');
}

export const getGameSettingsFromServer = ()=>{
    return getData('game-settings');
}

const sendWinnerToServer = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/winners`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успено отправлено на сервер');
        return json
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export const sendWinnerInfoToServer  = (data) => {
    return (dispatch) => {
       return  sendWinnerToServer(data)
    }
}

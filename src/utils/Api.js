class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getTags() {
    return fetch(`${this._baseUrl}/tags`,
      { headers: this._headers })
      .then(this._checkResponse);
  }
}

const newApi = new Api({
  baseUrl: `http://duellio.ru:8000`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { newApi };
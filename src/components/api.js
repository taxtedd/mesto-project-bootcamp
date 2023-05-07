const config = {
  baseUrl: 'https://nomoreparties.co/v1/exp-mipt-fbc-1',
  headers: {
    authorization: '59844c9d-8d8a-441e-8b23-64a7c9cc844e',
    'Content-Type': 'application/json'
  }
}

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => getResponseData(res))
}

export const addCard = (card) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link
    })
  })
    .then(res => getResponseData(res))
}

export const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => getResponseData(res))
}

export const updateUserInfo = (user) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: user.name,
      about: user.about
    })
  })
    .then(res => getResponseData(res))
}

export const deleteCard = (card) => {
  return fetch(`${config.baseUrl}/cards/${card._id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => getResponseData(res))
}

export const addLike = (card) => {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: 'PUT',
    headers: config.headers,
    body: JSON.stringify({
      _id: card._id
    })
  })
    .then(res => getResponseData(res))
}

export const deleteLike = (card) => {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => getResponseData(res))
}

export const updateUserAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(res => getResponseData(res))
}
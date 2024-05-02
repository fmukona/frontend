const CONSTANTS = {
  localStorageKey: "ecommerce",
  basketCountElementId: "basket-count",
}

const constructLocalStorageKey = (key) => {
  return `${SITE_LOCALSTORAGE_KEY}.${key}`
}

const getBasket = () => {
  let basket = localStorage.getItem(constructLocalStorageKey('basket'))
  // If not find in storage, initialize it
  if (basket == null) {
    basket = []
    localStorage.setItem(constructLocalStorageKey('basket'), JSON.stringify(basket))
  }

  return basket ? JSON.parse(basket) : []
}

const setBasket = (basket) => {
  localStorage.setItem(constructLocalStorageKey('basket'), JSON.stringify(basket))
}

const addToBasket = (flower) => {
  let basket = getBasket()
  if (basket.length > 0) {
    basket = []
  }

  basket.push(flower)

  setBasket(basket)
}

const clearBasket = () => {
  setBasket([])
}

const subscribeBasket = (callback) => {
  window.addEventListener('storage', (event) => {
    if (event.key === constructLocalStorageKey('basket')) {
      callback(getBasket())
    }
  })
}

window.onload = () => {
  subscribeBasket((basket) => {
    console.log(basket)

    const basketCountElement = document.getElementById(CONSTANTS.basketCountElementId)
    basketCountElement.innerText = basket.length
  })
}

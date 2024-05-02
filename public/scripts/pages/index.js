import { FlowersService } from './../api.js';

const queryProducts = async () => {
  const setContent = (content) => {
    const productList = document.getElementById('products');
    productList.innerHTML = content;
  }

  try {
    setContent('Loading...');

    const flowers = await FlowersService.getFlowers({});

    if (!flowers || flowers.length === 0) {
      setContent('<p>No flowers found</p>');
      return;
    }

    setContent(flowers.map(flower => {
      return `<li>
          <div class="product-card">
            <div class="product-image">
              <img src="${flower.image}" alt="${flower.name}" />
            </div>
            <div class="product-content">
              <h4 class="title">${flower.name}</h4>
              <p class="price">$${flower.price}</p>
            </div>
          </div>
        </li>`;
    }).join(''))
  } catch (error) {
    console.error(error);
    setContent('<p>Failed to load flowers</p>');
  }
}

window.onload = function () {
  queryProducts();
}

const CONSTANTS = {
  baseUrl: 'https://faraisflowers.com',
}

export class FlowersService {
  static async getFlowers({ filters, sort }) {
    return [{
      id: 1,
      name: 'Rose',
      price: 10,
      image: 'https://via.placeholder.com/150',
    }, {
      id: 2,
      name: 'Lily',
      price: 15,
      image: 'https://via.placeholder.com/150',
    }, {
      id: 3,
      name: 'Tulip',
      price: 20,
      image: 'https://via.placeholder.com/150',
    }];

    let url = `${CONSTANTS.baseUrl}/flowers`;
    if (filters) {
      url += `?filters=${filters}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  static async getFlower(id) {
    const response = await fetch(`${CONSTANTS.baseUrl}/flowers/${id}`);
    const data = await response.json();
    return data;
  }
}

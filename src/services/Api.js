const API_BASE_ADDRESS = 'http://demo3136867.mockable.io/';

export default class Api {
    static getCarousel() {
        const url = API_BASE_ADDRESS + '/carousel';

        return fetch(url, {
            method: 'GET'
        });
    }

    static getFeatured() {
        const url = API_BASE_ADDRESS + "/featured";

        return fetch(url, {
            method: 'GET'
        });
    }
}
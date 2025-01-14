const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [], 
			favorites: []
		},
		actions: {
			getPeopleData: () => {
				//get the store
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/people").then(resp => resp.json())
				.then(data => {
					setStore({people: data.results})
				})

				.then(console.log)

				.catch(error => {
					console.log(error);
				});
			}, 

			getPeopleDetails: (id, setParam) => {
				const store = getStore();
				
				fetch(`https://www.swapi.tech/api/people/${id}`).then(resp => resp.json())
				.then(data => {
					setParam(data)
				})

				.catch(error => {
					console.log(error);
				});
			},
					
			getPlanetsData: () => {
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/planets").then(resp => resp.json())
				.then(data => {
					setStore({planets: data.results})
				})

				.then(console.log)

				.catch(error => {
					console.log(error);
				});
			},

			getPlanetsDetails: (id, setPlanet) => {
				const store = getStore();
				
				fetch(`https://www.swapi.tech/api/planets/${id}`).then(resp => resp.json())
				.then(data => {
					setPlanet(data)
				})

				.catch(error => {
					console.log(error);
				});
			},

			getVehiclesData: () => {
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/vehicles").then(resp => resp.json())
				.then(data => {
					setStore({vehicles: data.results})
				})

				.then(console.log)

				.catch(error => {
					console.log(error);
				});
			},

			getVehicleDetails: (id, setVehicle) => {
				const store = getStore();
				
				fetch(`https://www.swapi.tech/api/vehicles/${id}`).then(resp => resp.json())
				.then(data => {
					setVehicle(data)
				})

				.catch(error => {
					console.log(error);
				});
			},

			addFavorite: (item) => {
				const store = getStore();
                const favorite = store.favorites.concat(item);
                setStore({ favorites: favorite });
			},

			deleteFavorite: (index) => {
				const store = getStore();
                const favorite = store.favorites.filter((c, i) => {
                    return index !== i
                });
                setStore({ favorites: favorite });
			}
		}
	};
};

export default getState;
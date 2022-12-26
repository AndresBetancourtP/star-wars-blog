const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: [],
			currentItem: undefined,
			list:[],
			favorite: undefined,
		},

		actions: {
			getItems: async (resource) => {
				const store = getStore();
				const response = await fetch(
					// Changed to 15 the limit of cards of each category (instead of 10)
					`${store.baseURL}/${resource}?page=1&limit=15`
				);
				const body = await response.json();
				setStore({
					[resource]: body.results.map((item)=>{
						return {
							...item, resource
						}
					}),
				});
			},
			getDetails: async (resource, uid) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/${resource}/${uid}`
				)
				const body = await response.json();
				if (!response.ok) return;
				setStore({
					currentItem: body.result,
				});
			},
			removeCurrentItem: () => setStore({ currentItem: undefined }),
			getFavorites: async (resource, uid) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/${resource}/${uid}`
				)
				const body = await response.json();
				if (!response.ok) return;
				setStore({
					favorite: Object.assign({resource},body.result),
					list: [...store.list, {...body.result, resource}],
				});

			},
			deleteFavorite: (deleteFavorite) => {
				const store = getStore();
				setStore({
					list: deleteFavorite,
				});
				console.log(store.list);
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
			},
			changeColor: (index, color) => {
				
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
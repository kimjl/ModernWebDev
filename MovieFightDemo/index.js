const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'bc7f9707',
			s: searchTerm
		}
	});

	console.log(response.data);
};

const input = document.querySelector('input');

const onInput = (event) => {
	fetchData(event.target.value);
};
input.addEventListener('input', debounce(onInput, 500));

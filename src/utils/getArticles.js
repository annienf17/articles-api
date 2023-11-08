import axios from "axios";

export default {
    fetchArticlesWithQuery: async (query) => {
        return await axios
        .get(`/search_by_date?query=${query}`)
        .then((response) => response.data.hits)
        .catch((err) => {
            throw err;
        });
    },
};

//wyrzucenie bledu throw err spowoduje ze app przestanie dzialac , ale to rozwiazuje nam try/catch w App.jsx
import actionTypes from "../actions/actionTypes";


const initialData = {
  list: [],
};

const Todoreducers = (state = initialData, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART : {

      const { id, title, description, category, price, image } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            title: title,
            description: description,
            category: category,
            price: price,
            image: image,
          },
        ],
      };
    }
    case actionTypes.REMOVE_FROM_CART : {
      
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
};

export default Todoreducers;

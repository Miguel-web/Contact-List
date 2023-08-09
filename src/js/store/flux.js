const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      addContact: (contact) => {
        const store = getStore();
        store.contactList.push(contact);
        console.log(store.contactList);
      },
      delete: (i) => {
        const store = getStore();
        setStore({
          ...store,
          contactList: store.contactList.filter((_, index) => {
            return index != i;
          }),
        });
      },
      contact: () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda", {
          method: "GET",
          headers: { "content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => setStore({ contactList: data }));
      },
    },
  };
};

export default getState;

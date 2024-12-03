// const ghibli = fetch("https://ghibliapi.vercel.app/films/1", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Ghibli movie",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error, "NETWORK ERROR"));
// console.log(ghibli);

newUser = {
  name: "Jimmy Choo",
  age: 10,
};

// const updateUser = fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newUser),
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       console.log("API ERROR");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("NETWORK ERROR", error));

const fetchUser = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    if (!response.ok) {
      return;
    }

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchUser();

const addUser = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();

    if (!response.ok) {
      console.log(data.description);
      return;
    }

    console.log(data);
  } catch (error) {
    console.log("ERROR FETCHING API");
  }
};

addUser();

const updateUser = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users/525", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jimmy",
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      console.log(data.description);
      return;
    }

    console.log(data);
  } catch (error) {
    console.log("ERROR UPDATING USER INFO", error);
  }
};

updateUser();

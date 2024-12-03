API_URL = "https://ghibliapi.vercel.app/film";

// const fetchGhibli = () =>
//   fetch(API_URL)
//     .then((res) => {
//       if (!res.ok) {
//         console.log("ERROR API");
//         return;
//       }

//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err, "NETWORK ERROR"));

const fetchGhibli = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (!res.ok) {
      return;
    }

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchGhibli();

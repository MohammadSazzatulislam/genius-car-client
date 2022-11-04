
export const AuthToken = (currentUser) => {

  fetch("https://genius-car-server-eosin-three.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("genius-token", data.token);
    })
        .catch((err) => console.log(err));
    
    
};

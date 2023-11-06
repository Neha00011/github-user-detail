let submit = document.getElementById("subt");
let userId = document.getElementById("enterField");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let username = userId.value;
  //console.log(username);
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      //console.log(typeof data);
      const list=document.getElementById('input-part');
      list.removeChild(list.firstElementChild);
      document.getElementById('card').style.background= "purple";
      document.querySelector("#avt img").setAttribute("src",`${data.avatar_url}`);
      document.querySelector("#my-card").innerHTML = `
      "User Details"<br>
      Name=${data.name},<br>
      Public_repos=${data.public_repos},<br>
      Followers=${data.followers},<br>
      Following=${data.following},<br>
      Id=${data.id},<br>
      Email=${data.email},<br>
      Type=${data.type},<br>
      Bio=${data.bio}
`;
    })
    .catch((error) => console.log(error));
});

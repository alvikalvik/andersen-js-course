function fetchUsersData() {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(res => res.json())
    .then(res => {
      if (res.getUserData) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(r => r.json())
          .then(r => console.log(r));
      }
      return null;
    });
}

fetchUsersData();

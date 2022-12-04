const JediNameGetter = async function (id = 1) {
  // 	await fetch(`https://swapi.dev/api/people/${id}`)
  if (id > 100) {
    throw Error('MUST');
  }
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((json) => {
      const { name } = json;
      return name;
    })
    .catch((err) => console.error(err));
};

module.exports = JediNameGetter;

import axios from "axios";

export default function EndPoints() {
  const BaseUrl = "http://10.0.2.2:5000/api/v1";

  const login = async ({ email, password }) => {
    const url = `${BaseUrl}/login`;
    const response = await axios.post(url, {
      email,
      password,
    });
    return response.data;
  };

  const saveJourney = async ({
    journeyStartingPlace,
    startingDate,
    startingTime,
    journeyEndingPlace,
    selectEventsAndLocationsList,
    userEmail,
  }) => {
    const url = `${BaseUrl}/trip-plan/save`;
    const response = await axios.post(url, {
      journeyStartingPlace,
      startingDate,
      startingTime,
      journeyEndingPlace,
      selectEventsAndLocationsList,
      userEmail,
    });
    return response.data;
  };

  const getJourney = async (id) => {
    const url = `${BaseUrl}/trip-plan/${id}`;
    console.log(id);
    const response = await axios.get(url);
    return response.data;
  };

  return {
    login,
    saveJourney,
    getJourney,
  };
}

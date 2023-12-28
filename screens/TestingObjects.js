export default function TestingObjects(){

    return {
      id: 302,
      locationName: "england",
      description: "Uk is a country",
      latitude: 2322.333,
      longitude: 3232.232,
      averageAllocatedTime: null,
      reviews: [
        {
          review: "this place is awesome",
          rating: 5,
          userEmail: "user1@gmail.com",
        },
      ],
      events: [
        {
          id: 152,
          eventName: "shopping",
        },
        {
          id: 153,
          eventName: "travelling",
        },
      ],
      preferences: [
        {
          id: 203,
          preference: "#ColdCountry",
        },
        {
          id: 202,
          preference: "#Country",
        },
      ],
      locationImages: [],
      userResponseDto: {
        firstname: "malshani",
        lastname: "dahanayaka",
        email: "user1@gmail.com",
        role: "PREMIUM_USER",
      },
    };
}
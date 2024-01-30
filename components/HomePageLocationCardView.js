import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function HomePageLocationCardView({ data, navigation }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("map-screen", { item })}
          style={[
            tw`mr-4 bg-black`,
            { width: 230, height: 230, borderRadius: 12 },
          ]}
        >
          <Card style={[tw`h-full`]}>
            {item.locationImages && item.locationImages.length > 0 && (
              <>
                <Card.Cover
                  source={{ uri: item.locationImages[0].image }}
                  style={[tw`h-full w-full`]}
                />

                <View
                  style={[
                    tw`absolute bottom-0 left-0 w-full h-1/4 bg-gray-100 bg-opacity-40 flex-col`,
                    {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    },
                  ]}
                >
                  <Text style={[tw`text-base text-white ml-4`]}>
                    {item.locationName}
                  </Text>
                  <Text
                    style={[tw`text-xs text-white ml-4 text-opacity-80 mr-1`]}
                  >
                    {item.description}
                  </Text>
                </View>
              </>
            )}
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

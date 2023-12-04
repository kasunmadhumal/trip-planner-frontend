import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useCallback, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TimePickerModal } from "react-native-paper-dates";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import "react-native-gesture-handler";
import TextInputField from "../../components/TextInputField";
import Event from "../../components/Event";
import FormChangeButton from "../../components/FormChangeButton";

// import {
//   MD3LightTheme as DefaultTheme,
//   PaperProvider,
// } from "react-native-paper";

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: "tomato",
//     secondary: "yellow",
//   },
// };

export default function Events({ pageNumber, setPageNumber }) {
  const [eventName, setEventName] = useState("");
  const [alocatedTimeForEvent, setAlocatedTimeForEvent] = useState("");
  const [preferences, setPreferences] = useState("");
  const [preferencesLIst, setPreferencesList] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [visible, setVisible] = useState(false);


  //time picker codes
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      setAlocatedTimeForEvent(`${hours} h : ${minutes} min`);
    },
    [setVisible]
  );


  //preferences split codes
  const splitPreferences = async () => {
    const preferencesArray = preferences.split("#");
    const preferencesArrayWithoutEmptyString = preferencesArray.filter(
      (item) => item !== ""
    );
    setPreferencesList(preferencesArrayWithoutEmptyString);
    return preferencesArrayWithoutEmptyString;
  };


  //save details
  async function saveDetails() {
    const preferences = await splitPreferences();

    if (!preferences || !preferences.length) {
      preferences = [];
    }

    const eventObject = {
      key: eventList.length + 1,
      eventName: eventName,
      alocatedTimeForEvent: alocatedTimeForEvent,
      preferences: preferences,
    };

    setEventList([...eventList, eventObject]);
  }

  return (
    <GestureHandlerRootView>
      {/* <PaperProvider theme={theme}>

        </PaperProvider> */}
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.tittleText}>Events</Text>
          <View style={styles.formContainer}>
            <Text style={styles.inputTittleText}>Search Events You need</Text>
            <TextInputField
              placeholder="Search Events"
              inputValue={eventName}
              setInputValue={setEventName}
            />
            <Text style={styles.inputTittleText}>Allocated Time For Event</Text>

            <View style={styles.selecotrsInput}>
              <TextInputField
                placeholder="00 h : 00 min"
                inputValue={alocatedTimeForEvent}
                setInputValue={setAlocatedTimeForEvent}
                secureTextEntry={false}
                selectorInput={true}
              />

              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.timePickerButton}
              >
                <Image
                  style={styles.timePickerButtonImage}
                  source={require("../../assets/images/timePicker.png")}
                />
              </TouchableOpacity>

              <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                hours={12}
                minutes={14}
              />
            </View>
            <Text style={styles.inputTittleText}>
              Add Preferences For Event
            </Text>
            <TextInputField
              placeholder="Search Preferences (Ex: #Spyci#breakfast)"
              inputValue={preferences}
              setInputValue={setPreferences}
            />

            <View style={styles.saveButtonContainer}>
              <TouchableOpacity onPress={saveDetails} style={styles.saveButton}>
                <Text style={styles.saveButtonTextStyle}>Save</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.tittleText}>Change Event List Order</Text>

            <View style={styles.eventListContainer}>





              {/* <DraggableFlatList
                data={eventList}
                onDragEnd={({ eventList}) => setEventList(eventList)}
                keyExtractor={(item) => item.key}
                renderItem={renderItem}
              /> */}

              {eventList.map((event, index) => {
                return (
                  <Event
                    key={index}
                    eventNumber={index + 1}
                    eventName={event.eventName}
                    alocatedTimeForEvent={event.alocatedTimeForEvent}
                    preferencesList={event.preferences}
                  />
                );
              })}
            </View>







            <View style={styles.buttonsContainer}>
              <FormChangeButton
                text="Preview"
                onPress={() => {
                  setPageNumber(pageNumber - 1);
                }}
              />
              <FormChangeButton
                text="Next"
                onPress={() => {
                  setPageNumber(pageNumber + 1);
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  scrollView: {
    width: "100%",
  },
  buttonsContainer: {
    width: "80%",
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tittleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#2F264B",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: "3%",
  },
  inputTittleText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#726E6E",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: "2%",
  },
  verticleLine: {
    backgroundColor: "#848080",
    width: 1,
    height: "10%",
    marginBottom: "2%",
  },

  saveButton: {
    width: "25%",
    height: "100%",
    backgroundColor: "#009CF3",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%",
  },
  saveButtonTextStyle: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
  },
  saveButtonContainer: {
    marginBottom: "4%",
    height: 40,
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  eventListContainer: {
    width: "80%",
    flexDirection: "column",
  },
  selecotrsInput: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  timePickerButton: {
    marginBottom: "3%",
  },

  timePickerButtonImage: {
    width: 30,
    height: 30,
  },

});

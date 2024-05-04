import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.primary800,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: Colors.primary800,
    borderBottomWidth: 2,
  },
});

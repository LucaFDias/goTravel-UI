import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
import { HeroImage } from "../../assets"

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {/* first section */}
      <View style={styles.HeaderIcon}>
        <View style={styles.HeaderLogo}>
          <Text style={styles.LogoTitle}>Go</Text>
        </View>
        <Text style={styles.TitleText}>Travel</Text>
      </View>

      {/* second section */}
      <View style={styles.ContainerSection}>
        <Text style={styles.TextSectionOne}>Enjoy the trip with</Text>
        <Text style={styles.TextSectionTwo}>Good Moments</Text>
        <Text style={styles.TextParagraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>

      {/* Circle Section */}
      <View style={styles.CircleSection}></View>
      <View style={styles.CircleSectionTwo}></View>

      {/* Image Container */}
      <View style={styles.ImageContainer}>
        <Image
          source={HeroImage}
          style={styles.Image}
        />
        <View style={styles.BtnContainer}>
          <TouchableOpacity>
            <View style={styles.BtnCard}>
              <Text style={styles.BtnText}>Go
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fafafa",
  },
  HeaderIcon: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 32,
    alignItems: "center",
    gap: 8,
  },
  HeaderLogo: {
    width: 64,
    height: 64,
    backgroundColor: "black",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  LogoTitle: {
    fontSize: 32,
    color: "#4dabb7",
    fontWeight: "500",
  },
  TitleText: {
    fontSize: 32,
    color: "#2a2b4b",
    fontWeight: "500",
  },
  ContainerSection: {
    paddingHorizontal: 24,
    marginTop: 32,
    gap: 12,
  },
  TextSectionOne: {
    fontSize: 42,
    color: "#3c6072",
  },
  TextSectionTwo: {
    fontSize: 38,
    color: "#00bcc9",
    fontWeight: "bold",
  },
  TextParagraph: {
    color: "#3c6072",
    fontSize: 16,
  },
  CircleSection: {
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: "#00bcc9",
    position: "absolute",
    bottom: 144,
    right: -144,
  },
  CircleSectionTwo: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: "#e99265",
    position: "absolute",
    bottom: -112,
    right: 144,
  },
  ImageContainer: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginTop: 80,
  },
  BtnContainer: {
    position: "absolute",
    bottom: 60,
    width: 96,
    height: 96,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 4,
    borderRadius: "100%",
    borderColor: "#00bcc9",
    alignItems: "center",
    justifyContent: "center",
  },
  BtnCard: {
    width: 80,
    height: 80,
    borderRadius: "100%",
    backgroundColor: "#00bcc9",
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    fontSize: 28,
    color: "#f9fafb",
    fontWeight: "bold",
  },
})
import { Image, StyleSheet, Text, View } from "react-native";
import { styles } from "./style"


export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("../assets/images/header.png")} />
                <Text style={styles.restaurantName}>Tropiano's</Text>
                <Text style={styles.subTitle}>sua melhor experiência culinária</Text>
            </View>
        </View>
    )
}   
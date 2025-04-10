import { Text } from "react-native";
import { View } from "../../../components/Themed";
import { styles } from "../produto/styles";

export default function ProductScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require(@/assets/images / lasanha.jpg)} />
                <Text>Lasanha 500g</Text>
                <Text>R$45,00</Text>
            </View>


        </View>
    )
}
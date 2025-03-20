import { Image, StyleSheet, Text, Touchable, TouchableOpacity, ScrollView, View } from "react-native";
import { styles } from "./style"


export default function Index() {
const MENU = [
    {
        id: 1,
        name: "Lasanha",
        description: "Massa de lasanha caseira, queijo mussarela...",
        price: 25.50,
        image: require("@/assets/images/lasanha.jpg")
    },
    {
        id: 2,
        name: "Fettucine",
        description: "Massa de fettucine caseira, queijo mussarela...",
        price: 25.50,
        image: require("@/assets/images/fettucine.jpg")
    },
    {
        id: 3,
        name: "Espaguete",
        description: "Massa de espaguete caseira, queijo mussarela...",
        price: 25.50,
        image: require("@/assets/images/espaguete.jpeg")
    }
]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/header.png")} />
                <Text style={styles.restaurantName}>Tropiano's</Text>
                <Text style={styles.cardapioName}>Cardápio</Text>
                <Text style={styles.subTitle}>sua melhor experiência culinária</Text>
            </View>

            <View style={styles.tabs}> 
                {["Massas", "Acompanhamentos", "Sobremesas", "Bebidas"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

                <ScrollView style={styles.menuList}>

            {
                MENU.map((item) => (
                    <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                    </View>
                    <Image style={styles.itemImage} source={item.image}></Image>
                </TouchableOpacity>
              ))
            }
            </ScrollView>
        </View>
    )
}   
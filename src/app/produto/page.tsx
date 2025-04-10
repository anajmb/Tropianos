import { Image, Text, StyleSheet, TouchableOpacity, ScrollView, View } from "react-native";
import { styles } from "../produto/style";



export default function ProductScreen() {
    const MOLHO = [
        {
            id: 1,
            name: "Molho à bolonhesa",
            description: "Carne moída, molho de tomate, temperos da casa;",
            image: require("@/assets/images/molho1.jpg")
        },
        {
            id: 2,
            name: "Molho quatro queijos",
            description: "Muçarela, gorgonzola, provolone e queijo prato;",
            image: require("@/assets/images/molho2.jpg")
        },
        {
            id: 3,
            name: "Molho Bechamel",
            description: "Manteiga, leite vegetal e farinha;",
            image: require("@/assets/images/molho3.jpg")
        },
        {
            id: 3,
            name: "Molho ao sugo",
            description: "Molho de tomate e temperos da casa;",
            image: require("@/assets/images/molho4.jpg")
        }
    ]

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/lasanha.jpg")} />
                <Text style={styles.produtoName}>Lasanha 500g</Text>
                <Text style={styles.precoProduto}>R$45,00</Text>
                <Text style={styles.linha}></Text>
            </View>

            <ScrollView style={styles.molhoList}>
                {
                    MOLHO.map((item) => (
                        <TouchableOpacity style={styles.molhoItem}>
                            <Image style={styles.itemImage} source={item.image}></Image>
                            <View style={styles.molhoContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                            </View>

                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

        </View>
    )
}
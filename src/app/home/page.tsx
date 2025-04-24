import { Image, StyleSheet, Text, Touchable, TouchableOpacity, ScrollView, View, ImageSourcePropType } from "react-native";
import { styles } from "./style"
import { Link } from "expo-router";
import { useEffect, useState } from "react";


export type ProdutoType = {
    id: number,
    name: string,
    price: number, 
    description: string,
    imgUrl: ImageSourcePropType,
    ingredients: string
}

export default function Index() {
    const [produtos, setProdutos] = useState<ProdutoType[]>()

    function fetchProdutos(){
        fetch("http://localhost:3000/produto")
        .then((res) => res.json())
        .then(data => setProdutos(data))
    }

    useEffect(() => {
        fetchProdutos()
    })

    // const MENU = [
    //     {
    //         id: 1,
    //         name: "Lasanha 500g",
    //         description: "Sabores: Bolonhesa, quatro queijos, bauru e vegano;",
    //         image: require("@/assets/images/lasanha.jpg")
    //     },
    //     {
    //         id: 2,
    //         name: "Fettucine 500g",
    //         description: "Sabores: Bolonhesa, quatro queijos, bauru e vegano;",
    //         image: require("@/assets/images/fettucine.jpg")
    //     },
    //     {
    //         id: 3,
    //         name: "Espaguete 500g",
    //         description: "Sabores: Bolonhesa, quatro queijos, bauru e vegano;",
    //         image: require("@/assets/images/espaguete.jpeg")
    //     },
    //     {
    //         id: 3,
    //         name: "Pizza 500g",
    //         description: "Sabores: Bolonhesa, quatro queijos, bauru e vegano;",
    //         image: require("@/assets/images/pizza.jpg")
    //     }
    // ]

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
                    produtos?.map((item) => (
                        <Link href={`/produto/${item.id}`} asChild>
                            <TouchableOpacity style={styles.menuItem}>
                                <Image style={styles.itemImage} source={item.imgUrl}></Image>
                                <View style={styles.menuContent}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                </View>

                            </TouchableOpacity>
                        </Link>
                    ))
                }
            </ScrollView>
        </View>
    )
}   
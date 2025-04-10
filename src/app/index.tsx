import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./cadastro/styles";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
             <Image style={styles.headerImage} source={require("@/assets/images/icon.png")} />

            <View style={styles.campos}>
                <Text style={styles.loginName}>Login</Text>
                
                <View>
                    <Text>E-mail:</Text>
                    <TextInput style={styles.input} placeholder="Seu e-mail"></TextInput>
                </View>

                <View>
                    <Text>Senha:</Text>
                    <TextInput style={styles.input} placeholder="Sua senha" secureTextEntry></TextInput>
                </View>

            <Link href={"/home/page"} asChild>
                <TouchableOpacity>
                    <Text style={styles.buttonEnviar}>Enviar </Text>
                </TouchableOpacity>
            </Link>
            <Link href={"/cadastro/page"}><Text style={styles.buttonCadastro} >Crie sua conta</Text></Link>
        </View>
            </View>

    )
}
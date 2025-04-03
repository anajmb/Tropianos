import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./cadastro/styles";

export default function LoginScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.campos}>
                <Text style={styles.LoginName}>Login</Text>
                
                <View>
                    <Text style={styles.emailName}>E-mail</Text>
                    <TextInput placeholder="Seu e-mail"></TextInput>
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput placeholder="Sua senha" secureTextEntry></TextInput>
                </View>

            </View>

            <Link href={"/home/page"} asChild>
                <TouchableOpacity>
                    <Text>Enviar </Text>
                </TouchableOpacity>
            </Link>
            <Link href={"/cadastro/page"}><Text>Crie sua conta</Text></Link>
        </View>
    )
}
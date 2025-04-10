import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./cadastro/styles";

export default function LoginScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.campos}>
                <Text style={styles.loginName}>Login</Text>
                
                <View>
                    <Text style={styles.emailName}>E-mail:</Text>
                    <TextInput placeholder="Seu e-mail"></TextInput>
                </View>

                <View>
                    <Text style={styles.senhaNumber}>Senha</Text>
                    <TextInput placeholder="Sua senha" secureTextEntry></TextInput>
                </View>
            </View>
                <Button title="Submit" style={styles.buttonEnviar}>Enviar</Button>

            <Link href={"/home/page"} asChild>
                <TouchableOpacity>
                    <Text>Enviar </Text>
                </TouchableOpacity>
            </Link>
            <Link href={"/cadastro/page"}><Text>Crie sua conta</Text></Link>
        </View>
    )
}
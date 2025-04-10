import { Text, TextInput, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import { styles } from "../cadastro/styles";
import { Link } from "expo-router";

export default function CadastroPage() {
    return (
        <View style={styles.container}>
              <Image style={styles.headerImage} source={require("@/assets/images/icon.png")} />
            
            <View style={styles.camposCadastro}>
                <Text style={styles.cadastroName}>Cadastro</Text>

                <View>
                    <Text >E-mail:</Text>
                    <TextInput style={styles.input} placeholder="E-mail"></TextInput>
                </View>

                <View>
                    <Text >Nome:</Text>
                    <TextInput style={styles.input} placeholder="Nome completo"></TextInput>
                </View>

                <View>
                    <Text >CPF:</Text>
                    <TextInput style={styles.input} placeholder="CPF"></TextInput>
                </View>

                <View>
                    <Text >Data de nascimento:</Text>
                    <TextInput style={styles.input} placeholder="Data de nascimento"></TextInput>
                </View>

                <View>
                    <Text>Senha:</Text>
                    <TextInput  style={styles.input} placeholder="Senha" secureTextEntry></TextInput>
                </View>

                 <Link href={"/home/page"} asChild>
                                <TouchableOpacity>
                                    <Text style={styles.buttonEnviar}>Enviar </Text>
                                </TouchableOpacity>
                            </Link>
                            <Link href={"/"}><Text style={styles.buttonLogin}>Fazer login</Text></Link>
            </View>
        </View>
    )
}
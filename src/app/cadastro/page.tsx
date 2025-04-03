import { Text, TextInput, StyleSheet, View } from "react-native";
import { styles } from "../cadastro/styles";

export default function CadastroPage() {
    return (
        <View style={styles.container}>

            <View style={styles.campos}>
                <Text style={styles.cadastroName}>Cadastro</Text>

                <View>
                    <Text style={styles.emailName}>E-mail:</Text>
                    <TextInput placeholder="E-mail"></TextInput>
                </View>

                <View>
                    <Text style={styles.name}>Nome:</Text>
                    <TextInput placeholder="Nome completo"></TextInput>
                </View>

                <View>
                    <Text style={styles.cpfName}>CPF:</Text>
                    <TextInput placeholder="CPF"></TextInput>
                </View>

                <View>
                    <Text style={styles.dateName}>Data de nascimento:</Text>
                    <TextInput placeholder="Data de nascimento"></TextInput>
                </View>

                <View>
                    <Text style={styles.senhaNumber} >Senha</Text>
                    <TextInput placeholder="Senha" secureTextEntry></TextInput>
                </View>

            </View>

        </View>
    )
}
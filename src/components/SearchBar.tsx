import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

interface IProps {
    term: string;
    onTermChange: (newTerm:string) => void;
}

const SearchBar = ({ term, onTermChange }: IProps) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput autoCapitalize="none" autoCorrect={false} style={styles.inputStyle} placeholder="Search" value={term} onChangeText={(newTerm:string)=>onTermChange(newTerm)}/>
        </View>
    );

}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
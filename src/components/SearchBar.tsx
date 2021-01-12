import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} />
            <TextInput style={styles.inputStyle} placeholder="Search"/>
        </View>
    );

}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    }
});

export default SearchBar;
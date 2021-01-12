import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {

    return (
        <View style={styles.background}>
            <Feather name="search" size={30} />
            <Text>Hello from SearchBar</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15
    }
});

export default SearchBar;
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState<string>('');

    return (
        <View>
            <SearchBar term={term} onTermChange={(newTerm:string) => setTerm(newTerm)} onTermSubmit={()=> console.log('Term was submitted')}/>
            <Text>{term}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default SearchScreen;
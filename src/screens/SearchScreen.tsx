import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState<string>('');
    const [results, setResults] = useState<[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const searchApi = async (searchTerm:string) => {
        console.log('Hi There');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        }catch (e){
            setErrorMessage('Something went wrong');
        }
    }
    // searchApi('pasta');
    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default SearchScreen;
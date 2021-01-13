import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

interface IProps {
    title: string;
    results: any;
}

const ResultsList = ({ title, results }: IProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList keyExtractor={(result:any) => result.id} horizontal={true} data={results} renderItem={({item})=>{
                return <ResultDetail result={item}/>
            }}/>
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;
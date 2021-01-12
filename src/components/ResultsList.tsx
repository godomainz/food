import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

interface IProps {
    title: string;
    results: any;
}

const ResultsList = ({ title, results }: IProps) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList keyExtractor={(result:any) => result.id} horizontal={true} data={results} renderItem={({item})=>{
                return <Text>{item.name}</Text>
            }}/>
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;
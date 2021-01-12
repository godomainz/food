import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface IProps {
    title: string;
    results: any;
}

const ResultsList = ({ title, results }: IProps) => {
    
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
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
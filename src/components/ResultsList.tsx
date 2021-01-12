import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface IProps {
    title: string;
}

const ResultsList = ({ title }: IProps) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
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
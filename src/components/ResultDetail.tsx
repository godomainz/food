import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface IProps {
    result: any;
}

const ResultDetail = ( {result}: IProps) => {
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ResultDetail;
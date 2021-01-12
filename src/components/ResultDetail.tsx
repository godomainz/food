import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

interface IProps {
    result: any;
}

const ResultDetail = ( {result}: IProps) => {
    return (
        <View>
            <Image style={styles.image} source = {{ uri: result.image_url }}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count}  Reviews</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name:{
        fontWeight: 'bold'
    }
});

export default ResultDetail;
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import yelp from '../api/yelp';

interface Props {
    navigation?: NavigationScreenProp<any,any> | any ;
}

const ResultsShowScreen = ({ navigation }: Props) => {
    const [result, setResult] = useState<any | null>(null);
    const id = navigation.getParam('id');

    const getResult = async (id:string) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() =>{
        getResult(id);
    }, []);

    if (!result){
        return null;
    }

    return (
        <View>
            <Text>{result != null ? result.name : null}</Text>
            <FlatList 
                keyExtractor={photo => photo} data={result.photos} 
                renderItem={({item})=><Image style={styles.image} source={{ uri: item }}/>} 
                />
        </View>
    );

}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
});

export default ResultsShowScreen;
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import yelp from '../api/yelp';

interface Props {
    navigation?: NavigationScreenProp<any,any> | any ;
}

const ResultsShowScreen = ({ navigation }: Props) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result);

    const getResult = async (id:string) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    
    useEffect(() =>{
        getResult(id);
    }, [])

    return (
        <View>
            <Text>Hello from ResultsShowScreen</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ResultsShowScreen;
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation?: NavigationScreenProp<any,any> | any ;
}

const ResultsShowScreen = ({ navigation }: Props) => {
    const id = navigation.getParam('id');
    return (
        <View>
            <Text>Hello from ResultsShowScreen</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ResultsShowScreen;
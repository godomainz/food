import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

interface IProps {
    title: string;
    results: any;
    navigation?: NavigationScreenProp<any,any> | any ;
}

const ResultsList = ({ title, results, navigation }: IProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result:any) => result.id} 
                data={results} 
                renderItem={({item})=>{
                return (<TouchableOpacity onPress={()=>navigation.navigate('ResulstShow', {id: item.id})}><ResultDetail result={item}/></TouchableOpacity>)
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

export default withNavigation(ResultsList);
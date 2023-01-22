import React, { useState } from "react";
import { Text, TouchableOpacity } from 'react-native';

import Checkbox from 'expo-checkbox';
import { styles } from "./styles";

const TaskItem = ({ item , onHandlerModal}) => {
    const [isChecked, setIsCheched] = useState(false);
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
            <Text style={styles.itemList}>{item.value}</Text>
            <Checkbox style={styles.checkBoxItemList} value={isChecked} onValueChange={setIsCheched}></Checkbox>
        </TouchableOpacity>
    )
}

export default TaskItem;
import React from 'react'
import {
    View,
    Text
} from 'react-native'


import { PropsWithChildren } from 'react'

type IconsProps = PropsWithChildren<{
    name: string;
}>


const icons = ({ name }: IconsProps) => {
    switch (name) {
        case "circle":
            return <Text>0</Text>;
            break;

        case "cross":
            return <Text>X</Text>;
            break;
        default:
            break;
    }
}

export default icons
import { View, Text } from 'react-native'
import React from 'react'
import { HStack, Spinner, Heading } from 'native-base'

const Loading = ({message}) => {
    return (
        <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel={"Loading "+message} />
            <Heading color="primary.500" fontSize="md">
                Loading
            </Heading>
        </HStack>
    )
}

export default Loading
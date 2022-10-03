import { View, Text, Button , ActivityIndicator , FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'



const Postes = () => {
  const [post, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  function getPosts() {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then(resJson => {
      setPosts(resJson)
      setLoading(false)
    })
  }

  function renderPostItem({item}) {
    return <Text> {item.title} </Text>
  }

  return (
    <View style={{marginTop:60}}>
        <Button  title='GET' onPress={getPosts}/>
        {loading && (
          <ActivityIndicator />
        )}
      <FlatList data={post} renderItem={renderPostItem} />
    </View>
  )
}

export default Postes
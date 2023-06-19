import { View } from 'react-native'
import React from 'react';
import NewPostHeader from '../component/NewPostHeader';
import PostSubHeader from '../component/PostSubHeader';
import PostBody from '../component/PostBody';
import NewPostFooter from '../component/NewPostFooter';


const NewPost = () => {
  return (
    <View>
      <NewPostHeader />
      <PostSubHeader />
      <PostBody />
      <NewPostFooter/>
    </View>
  )
}

export default NewPost

import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Movie} from '../../../core/entities/movie.entity';

interface Props {
  movies: Movie[];
  height?: number;
}

const PosterCarousel = ({height = 440, movies}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <Text key={movie.id}>{movie.title}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default PosterCarousel;

import { Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    );
  }
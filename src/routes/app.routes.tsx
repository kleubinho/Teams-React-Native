import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="groups" screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="players" component={Players} />
      <Screen name="new" component={NewGroup} />
    </Navigator>
  );
}

// prop initialRouteName para definir qual será a primeira tela a ser renderizada, mas caso nÃo queria colocar, ele renderizará a primeira que foi adicionada no navigator

// prop screenOption para remover cabeçalho nas paginas
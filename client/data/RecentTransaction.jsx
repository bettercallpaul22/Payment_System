import Intl from "intl";
//  import 'intl/locale-data/complete'
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
  Fontisto,
} from "@expo/vector-icons";

//  const money = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'})

export const recentTransaction = [
  {
    id: 2,
    amount:499877,
    type: "deposit",
    time: new Date().toISOString().slice(0, 10),
    icon: (
      <MaterialCommunityIcons
        name="bank-transfer-out"
        size={45}
        color="black"
      />
    ),
    status: "success",
  },
  {
    id: 5,
    amount: 20000,
    type: "transfer",
    time: new Date().toISOString().slice(0, 10),
    icon: (
      <MaterialCommunityIcons
        name="bank-transfer-out"
        size={45}
        color="black"
      />
    ),
    status: "success",
  },
];
